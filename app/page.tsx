import { Metadata, ResolvingMetadata } from 'next';
import { builder, BuilderComponent, Builder } from '@builder.io/react';
import { formatRequestURL } from '@/lib/builder_helpers';

import '@/builder.io/BuilderPageComponents';

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);

export async function generateMetadata (
  {params}: {params: {page: string}},
  parent: ResolvingMetadata):
  Promise<Metadata>
{
  const content = (await builder.get('page', {
    url: formatRequestURL(params.page),
    includeRefs: true,
  }).toPromise()) || null ;

  return {
    title: content?.data.title || 'Paul Valenzano',
    description: content?.data.title || '',
    keywords: content?.data.keywords || ''
  }
}


export default async function Page({ params }: {params: {page: string} }) {
  console.log('params from Page call ', params)
  const content = (await builder.get('page', {
    url: formatRequestURL(params.page),
    includeRefs: true,
  }).toPromise()) || null ;
  return (
    <>
      {( content || Builder.isPreviewing ) ? (
        <BuilderComponent
          model="page"
          content={content}
          options={{ includeRefs: true }}
          />
        ) : null }
    </>
  )
}

export async function generateStaticParams() {
  const results = await builder.getAll('page', {
    options: {
      noTargeting: true,
    },
    omit: 'data.blocks',
  });

  let paths = results.map((item) => ({ params: { page: [item.data?.url.substr(1)] } }));

  return {
    paths
  };
}
