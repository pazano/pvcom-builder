import { Metadata, ResolvingMetadata } from 'next';
import { builder, BuilderComponent, Builder } from '@builder.io/react';
import { formatRequestURL } from '@/app/lib/builder_helpers';

// import '@/app/lib/builder.io/BuilderPageComponents';

// builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);

// export async function generateMetadata (
//   {params}: {params: {page: string}},
//   parent: ResolvingMetadata):
//   Promise<Metadata>
// {
//   const content = (await builder.get('page', {
//     url: formatRequestURL(params.page),
//     includeRefs: true,
//   }).toPromise()) || null ;

//   return {
//     title: content?.data.title || 'Paul Valenzano',
//     description: content?.data.title || '',
//     keywords: content?.data.keywords || ''
//   }
// }


// export default async function Page({ params }: {params: {page: string} }) {
//   console.log('params from Page call ', params)
//   const content = (await builder.get('page', {
//     url: formatRequestURL(params.page),
//     includeRefs: true,
//   }).toPromise()) || null ;
//   return (
//     <>
//       {( content || Builder.isPreviewing ) ? (
//         <BuilderComponent
//           model="page"
//           content={content}
//           options={{ includeRefs: true }}
//           />
//         ) : null }
//     </>
//   )
// }

// export async function generateStaticParams() {
//   const results = await builder.getAll('page', {
//     options: {
//       noTargeting: true,
//     },
//     omit: 'data.blocks',
//   });

//   let paths = results.map((item) => ({ params: { page: [item.data?.url.substr(1)] } }));

//   return {
//     paths
//   };
// }

import Hero from '@/app/ui/common/hero';
import FeaturedProjects from '@/app/ui/common/featured-projects';
import WidgetNewsletter from '@/app/ui/widgets/widget-newsletter';
import WidgetSponsor from '@/app/ui/widgets/widget-sponsor';
import WidgetBook from '@/app/ui/widgets/widget-book';

export default function Page() {
  return(
    <>
    <Hero />
      { /* Content */}
      <div className="grow md:flex space-y-8 md:space-y-0 md:space-x-8 pb-16 md:pb-20">

        { /* Middle area */}
        <div className="grow">
          <div className="max-w-[700px]">
            <div className="space-y-10">

              <section>
                <h2 className="font-aspekta text-xl font-[650] mb-3">Latest Articles</h2>

                {/* Filters */}
                <ul className="flex flex-wrap text-sm border-b border-slate-100 dark:border-slate-800">
                  <li className="px-3 -mb-px">
                    <a className="block py-3 font-medium text-slate-800 dark:text-slate-100 border-b-2 border-sky-500" href="#0">
                      Coding
                    </a>
                  </li>
                  <li className="px-3 -mb-px">
                    <a className="block py-3 text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300" href="#0">
                      Startups
                    </a>
                  </li>
                  <li className="px-3 -mb-px">
                    <a className="block py-3 text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300" href="#0">
                      Tutorials
                    </a>
                  </li>
                  <li className="px-3 -mb-px">
                    <a className="block py-3 text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300" href="#0">
                      Indie Hacking
                    </a>
                  </li>
                </ul>

                {/* Articles list */}
                {/* <div>
                  {allPosts.map((post, postIndex) => (
                      <PostItem key={postIndex} {...post} />
                  ))}
                </div> */}
              </section>

              <FeaturedProjects />

            </div>
          </div>
        </div>

        { /* Right sidebar */}
        <aside className="md:w-[240px] lg:w-[300px] shrink-0">
          <div className="space-y-6">

            <WidgetNewsletter />
            <WidgetSponsor />
            <WidgetBook />

          </div>
        </aside>

      </div>
    </>
  )
}
