import { builder, BuilderContent, BuilderComponent, useIsPreviewing } from '@builder.io/react';
import { getAsyncProps } from '@builder.io/utils';
import { hydrateImageList } from '../../lib/builder_helpers';

import Page from '../../layout/Page';
import '../../layout/components/BuilderComponents';

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);

const BlogPost = ( {content}) => {
  const isPreviewing = useIsPreviewing();

  return(
    <BuilderContent
      content={article}
      options={{ includeRefs: true }}
      model="blog-post"
    >
      {(content) => (
        <Page seo={{
          title: content?.data.title || '',
          description: content?.data.description || '',
          keywords: content?.data.keywords || '',
        }}>
          {( content || isPreviewing ) ? (
            <BuilderComponent
              content={content}
              model="blog-post"
              options={{ includeRefs: true }}
            />
          )
          : null}
        </Page>
      )}
    </BuilderContent>
  );
}

export default BlogPost;

export const getStaticProps = async ( { params }) => {
  console.log(params);

  let formattedPageUrl = params?.page;
  if (params?.page && Array.isArray(params?.page)) {
    formattedPageUrl = params?.page.length > 1 ? params?.page.join('/') : params?.page[0];
  }

  formattedPageUrl = formattedPageUrl ? '/' + formattedPageUrl : '/';

  const content = await builder.get('page', {
    url: formattedPageUrl,
    // includeRefs: true,
  }).promise();

  await getAsyncProps(content, {
    async Gallery(props) {
      const hydratedImages = await hydrateImageList(props.galleryImages);
      return {
        galleryImages: hydratedImages,
      }
    }
  })

  return {
    props: { content },
    revalidate: true,
    notFound: !content
  }
}

export const getStaticPaths = async () => {
  const results = await builder.getAll('page', {
    options: {
      noTargeting: true,
    },
  });

  return {
    paths: results.map((item) => ({ params: { page: [item.data?.url.substr(1)] }})),
    fallback: false,
  };
};