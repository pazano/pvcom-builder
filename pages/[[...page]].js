
import { builder, BuilderComponent, Builder } from '@builder.io/react';

import Layout from '../layout/Layout';
import '../layout/components/BuilderComponents';

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);

const BuilderPage = ({ content }) => {
  const seo = {
    title: content?.data.title || '',
    description: content?.data.description || '',
    keywords: content?.data.keywords || '',
  }
  return(
    <Layout seo={seo}>
      {( content || Builder.isPreviewing ) ? (
        <BuilderComponent
          model="page"
          content={content}
          options={{ includeRefs: true }}
          />
        ) : null }
    </Layout>
  );
}

export default BuilderPage;

export const getStaticProps = async ( { params }) => {

  let formattedPageUrl = params?.page;
  if (params?.page && Array.isArray(params?.page)) {
    formattedPageUrl = params?.page.length > 1 ? params?.page.join('/') : params?.page[0];
  }

  formattedPageUrl = formattedPageUrl ? '/' + formattedPageUrl : '/';

  const content = (await builder.get('page', {
    url: formattedPageUrl,
    includeRefs: true,
  }).toPromise()) || null ;

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
    omit: 'data.blocks',
  });

  let paths = results.map((item) => ({ params: { page: [item.data?.url.substr(1)] } }));

  return {
    paths,
    fallback: false,
  };
};