import { useRouter } from 'next/router';
import { builder, BuilderComponent, useIsPreviewing } from '@builder.io/react';

import ErrorPage from '../layout/ErrorPage';
import Page from '../layout/Page';
import '../layout/components/BuilderComponents';

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);

const BuilderPage = ({ content }) => {
  const router = useRouter();
  const isPreviewing = useIsPreviewing();

  // if (router.isFallback) {
  //   return <h1>Loading...</h1>
  // }

  if (!content && !isPreviewing) {
    return <ErrorPage targetModel='page' />;
  }

  return(
    <Page seo={{
      title: content?.data.title || '',
      description: content?.data.description || '',
      keywords: content?.data.keywords || '',
    }}>
      <BuilderComponent
        model="page"
        content={content}
        options={{ includeRefs: true }}
        />
    </Page>
  );
}

export default BuilderPage;

export const getStaticProps = async ( { params }) => {

  let formattedPageUrl = params?.page;
  if (params?.page && Array.isArray(params?.page)) {
    formattedPageUrl = params?.page.length > 1 ? params?.page.join('/') : params?.page[0];
  }

  formattedPageUrl = formattedPageUrl ? '/' + formattedPageUrl : '/';

  const content = await builder.get('page', {
    url: formattedPageUrl,
    includeRefs: true,
  }).promise();

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