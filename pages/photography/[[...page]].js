import Page from '../../layout/Page';

import { Builder, builder } from '@builder.io/react';
import { useState, useEffect } from 'react';
import { hydrateImage, builderRequestCustom } from '../../lib/builder_helpers';
import ImageDetail from '../../layout/components/ImageDetail/ImageDetail';

const ImageDetailPage = ( { content } ) => {
  const imageData = content?.image.value.data
  const [image, setImage] = useState(imageData); // meh this

  useEffect(() => {
    async function setImageDataForPreview() {
      const hydratedImage = await hydrateImage(imageData);
      hydratedImage && setImage(hydratedImage);
    }
    Builder.isPreviewing && setImageDataForPreview();
  }, [image])

  return (
    <Page seo={{
      title: image.metadata.title || '',
      description: image.metadata.description || '',
      keywords: image.metadata.keywords || '',
    }}>
      <div className="content width__narrow">
        <ImageDetail
          portfolioImage={image}
          imageSide="left"
          contentBackground={false}
          />
      </div>
    </Page>
  );
}

export const getStaticPaths = async () => {
  const results = await builder.getAll('image', {
    options: {
      noTargeting: true,
    },
  });

  return {
    paths: results.map((item) => ({ params: { page: [item.data?.metadata.slug] } })),
    fallback: false,
  };
}

export const getStaticProps = async ( {params} ) => {
  console.log('\nImage Detail Static Props', params)
  let slugValue = params?.page[0];

  const content = await builderRequestCustom('image', 'query.data.metadata.slug', slugValue);
  const hydratedImage = await hydrateImage(content[0]);

  return {
    props: { content: hydratedImage  },
    revalidate: true,
    notFound: !content
  }
}



export default ImageDetailPage;