import { builder, BuilderComponent, Builder } from '@builder.io/react';
import React from 'react';

import Layout from '../../layout/Layout';
import '../../layout/components/BuilderArticleComponents';

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);

const BlogPost = ( { content } ) => {

  // TODO:  seo helper function to build schema and handle null state more gracefully
  let seo = {...content?.data?.seo} || { title: '', description: '', keywords: ''}

  return(
      <Layout seo={seo}>
        {(content || Builder.isPreviewing) ? (
            <BuilderComponent
              model="blog-post"
              options={{ includeRefs: true }}
              content={content}
            />
        ) : null}
      </Layout>
  );
}

export default BlogPost;

export const getStaticProps = async (  { params } ) => {
  let slug = params.slug;

  let content = (await builder.get('blog-post', {
    includeRefs: true,
    url: '/' + slug,
  }).toPromise()) || null;

  return {
    props: { content },
  }
}

export const getStaticPaths = async () => {
  const results = await builder.getAll('blog-post', {
    options: {
      noTargeting: true,
    },
    omit: 'data.blocks',
  });

  return {
    paths: results?.map(article => `/blog/${article.data.url.substr(1)}`) || [],
    fallback: true,
  };
};