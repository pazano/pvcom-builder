import { builder, BuilderComponent, Builder } from '@builder.io/react';
import { formatRequestURL } from '@/lib/builder_helpers';

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);

export const metadata = {
  title: 'Hello World',
  description: 'Page description',
}


export default async function Page({ page }: {page: string}) {
  const content = (await builder.get('page', {
    url: formatRequestURL(page),
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

  let paths = results.map((item) => ({ page: [item.data?.url.substr(1)] } ));

  return {
    paths
  };
}
