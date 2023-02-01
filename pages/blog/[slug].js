import { builder, BuilderComponent, Builder } from '@builder.io/react';
import React from 'react';

import Layout from '../../layout/Layout';
import TitleCard from '../../layout/components/TitleCard/TitleCard';
import '../../layout/components/BuilderArticleComponents';

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);

const BlogPost = ( { content } ) => {

  const seo = {
    title: content.data?.title || '',
    description: content.data?.description || '',
    keywords: content.data?.keywords || '',
  }

  return(
    <Layout seo={seo}>
      {(content || Builder.isPreviewing || Builder.isEditing) ? (
        <React.Fragment>
          <BuilderComponent
            model="article"
            options={{ includeRefs: true }}
            content={content}
          />
        </React.Fragment>
      ) : null}
    </Layout>
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