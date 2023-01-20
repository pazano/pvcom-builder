import { builder, BuilderContent, BuilderComponent, useIsPreviewing } from '@builder.io/react';
import { useRouter } from 'next/router';
import ErrorPage from 'next/error';

import Page from '../../layout/Page';
import '../../layout/components/BuilderComponents';
import { faDoorClosed } from '@fortawesome/free-solid-svg-icons';

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);

const BlogPost = ( { content } ) => {
  const isPreviewing = useIsPreviewing();

  return(
    <Page seo={{
      title: content.data?.title || '',
      description: content.data?.description || '',
      keywords: content.data?.keywords || '',
    }}>
      {(content || isPreviewing ) ? (
        <BuilderContent
          model="blog-post"
          options={{ includeRefs: true }}
          content={content}
        >
          {(content) => (
              <BuilderComponent
                model="blog-post"
                options={{ includeRefs: true }}
                content={content}
              />
              )}
        </BuilderContent>
      ) : null }
    </Page>

  );
}

export default BlogPost;

export const getStaticProps = async ( { params }) => {

  let slug = params.slug;

  let content = (await builder.get('article', {
    includeRefs: true,
    query: {
      'data.slug': slug,
    }
  }).toPromise()) || null;

  // !content && console.log(`[Article] Couldn't find content for slug: ${params.slug}`)
  // content && console.log(content)

  return {
    props: { content },
  }
}

export const getStaticPaths = async () => {
  const results = await builder.getAll('article', {
    options: {
      noTargeting: true,
    },
  });

  return {
    paths: results?.map(article => `/blog/${article.data.slug}`) || [],
    fallback: true,
  };
};