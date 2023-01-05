
import Head from 'next/head';

const Meta = ({seo}) => {
  const siteName = 'Elle Rou Photography';
  const verboseTitle = seo.title + ' | ' + siteName;
  return(
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <meta description={seo.description} />
      <meta keywords={seo.keywords} />
      <title>{verboseTitle}</title>

      <meta property="og:title" content={verboseTitle} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:url" content={seo.url || 'https://www.ellerou.com'} />
      <meta property="og:site_name" content={siteName} />
    </Head>
  )
}
export default Meta;