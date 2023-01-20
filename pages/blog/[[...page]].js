import { builder, BuilderContent, BuilderComponent, useIsPreviewing } from '@builder.io/react';
import { useRouter } from 'next/router';
import ErrorPage from 'next/error';

import Page from '../../layout/Page';
import '../../layout/components/BuilderComponents';

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);

const BlogPost = ( { content } ) => {
  const router = useRouter();
  const isPreviewing = useIsPreviewing();
  if (!router.isFallback && !content && !isPreviewing) {
    return <ErrorPage statusCode={404} />;
  }

  return(
    <>
      {(content || isPreviewing ) ? (
        <BuilderContent
          model="blog-post"
          options={{ includeRefs: true }}
          content={content}
        >
          {(content) => (
            <Page seo={{
              title: content?.data.title || '',
              description: content?.data.description || '',
              keywords: content?.data.keywords || '',
            }}>
              <BuilderComponent
                model="blog-post"
                options={{ includeRefs: true }}
                content={content}
              />
            </Page>
          )}
        </BuilderContent>
      ) : null }
    </>
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