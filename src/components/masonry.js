import React from "react";
import { Box } from "@rebass/emotion";
import { chunk, sum } from "lodash";

function Masonry({
  items = [],
  itemComponents = {},
  itemsPerRow: itemsPerRowByBreakpoints = [1, 2, 3]
}) {
  const aspectRatios = items.map(item => item.aspectRatio);
  const rowAspectRatioSumsByBreakpoints = itemsPerRowByBreakpoints.map(
    itemsPerRow =>
      // Split images into groups of the given size
      chunk(aspectRatios, itemsPerRow).map(
        rowAspectRatios =>
          // Sum aspect ratios of images in the given row
          sum(rowAspectRatios) + (itemsPerRow - rowAspectRatios.length)
      )
  );
  return items.map((item, i) => {
    const { type, id, aspectRatio, ...rest } = item;
    const width = rowAspectRatioSumsByBreakpoints.map(
      // Return a value for each breakpoint
      (rowAspectRatioSums, j) => {
        // Find out which row the image is in and get its aspect ratio sum
        const rowIndex = Math.floor(i / itemsPerRowByBreakpoints[j]);
        const rowAspectRatioSum = rowAspectRatioSums[rowIndex];

        return `${(aspectRatio / rowAspectRatioSum) * 100}%`;
      }
    );
    return (
      <Box
        key={`${type}:${id}`}
        as={itemComponents[type]}
        width={width}
        css={{ display: "inline-block", fontSize: "1.6rem" }}
        {...rest}
      />
    );
  });
}

export default Masonry;
