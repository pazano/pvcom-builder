

export const builderRequest = async (resourceType, resourceId) => {
  const responseBuilder = await fetch(
    `https://cdn.builder.io/api/v2/content/${resourceType}?apiKey=${process.env.NEXT_PUBLIC_BUILDER_API_KEY}&query.id=${resourceId}`
  ).then(res => res.json());
  return responseBuilder.results;
}

export const builderRequestCustom = async (resourceType, filterKey, filterValue) => {
  const responseBuilder = await fetch(
    `https://cdn.builder.io/api/v2/content/${resourceType}?apiKey=${process.env.NEXT_PUBLIC_BUILDER_API_KEY}&${filterKey}=${filterValue}`
  ).then(res => res.json());
  return responseBuilder.results;
}

export const hydrateImage = async (imageReference) => {
  let responseData = []

  responseData = await builderRequest('image', imageReference.id);
  let { image, metadata, altText, orientation, attributions } = responseData[0].data;

  let attributionData = await Promise.all(
    attributions.map(async ({ attribution }) => {
      let attributionData = await builderRequest(attribution.model, attribution.id );
      return attributionData[0].data;
    })
  );
  // hack to match up with builder formats / be consistent with how builder returns these items
  // to the regular frontend as well as Preview
  return {
    image: {
      value: {
        data: {
          image,
          metadata,
          altText,
          orientation,
          attributions: attributionData
        }
      }
    }
  };
}

export const hydrateImageList = async (imageReferenceList) => {
  let hydratedImages = await Promise.all(
    imageReferenceList.map(async ({image}) => {
      let imageReference = { model: image.model, id: image.id}
      let imageData = await hydrateImage(imageReference);
      return imageData;
    })
  )
  return hydratedImages;
}