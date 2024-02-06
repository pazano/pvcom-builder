export const sortGalleryRows = (imageList, rowSize) => {
  // TODO:  work through widow rows (e.g. pluck a 1-weight to fill in a 3-weight row when the next image is a 2-weight)

  let rowWeight = 0; // every row breaks at rowSize.  Portrait = 1, Landscape = 2
  let currentRow = [];

  return imageList.reduce((rowList, { image }) => {
    // format prep particular to Builder structures
    let imageData = image.value.data;
    imageData.src = imageData.image;
    // Image component leverages aspectRatio for respectAspect display type
    imageData.aspectRatio = imageData.orientation == 'portrait' ? '2x3' : '3x2';
    rowWeight = imageData.orientation == 'portrait' ? rowWeight + 1 : rowWeight + 2;

    if (rowWeight == rowSize) {
      currentRow.push(imageData);
      rowList.push(currentRow);
      rowWeight = 0;
      currentRow = [];
      return rowList;
    } else if (rowWeight > rowSize) {
      // cuts off the previous row early since we added a weight of 2 to a 3-weight row
      rowList.push(currentRow);
      rowWeight = 2;
      currentRow = [];
      currentRow.push(imageData);
      return rowList;
    } else {
      currentRow.push(imageData);
      return rowList;
    }
  }, []);
}