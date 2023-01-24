import { builder, BuilderContent, BuilderComponent, Builder } from '@builder.io/react';

import Page from '../../layout/Page';
import '../../layout/components/BuilderComponents';
import React from 'react';

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);

const BlogPost = ( { content } ) => {
  return(
    <Page seo={{
      title: content.data?.title || '',
      description: content.data?.description || '',
      keywords: content.data?.keywords || '',
    }}>
      {(content || Builder.isPreviewing || Builder.isEditing) ? (
        <>
          <h1>{content.data?.title || 'Article headline'}</h1>
          <BuilderComponent
            model="article"
            options={{ includeRefs: true }}
            content={content}
          />
        </>
      ) : <h1>TODO</h1>}
    </Page>
  );
}

export default BlogPost;

export const getStaticProps = async (  { params } ) => {
  let slug = params.slug;

  let content = (await builder.get('article', {
    includeRefs: true,
    query: {
      'data.slug': slug,
    }
  }).toPromise()) || null;

  return {
    props: { content },
  }
}

export const getStaticPaths = async () => {
  const results = await builder.getAll('article', {
    options: {
      noTargeting: true,
    },
    omit: 'data.blocks',
  });

  return {
    paths: results?.map(article => `/blog/${article.data.slug}`) || [],
    fallback: true,
  };
};