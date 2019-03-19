import React from "react";
import { Box } from "@rebass/emotion";
import { chunk, sum } from "lodash";
import Img from "gatsby-image";

function Masonry({
  items = [],
  itemsPerRow: itemsPerRowByBreakpoints = [2, 3]
}) {
  const aspectRatios = items.map(item => item.aspectRatio);
  const rowAspectRatioSumsByBreakpoints = itemsPerRowByBreakpoints.map(
    itemsPerRow =>
      // Split images into groups of the given size
      chunk(aspectRatios, itemsPerRow).map(rowAspectRatios =>
        // Sum aspect ratios of images in the given row
        sum(rowAspectRatios)
      )
  );
  return items.map((item, i) => (
    <Box
      key={item.src}
      as={Img}
      fluid={item}
      title={item.caption}
      width={rowAspectRatioSumsByBreakpoints.map(
        // Return a value for each breakpoint
        (rowAspectRatioSums, j) => {
          // Find out which row the image is in and get its aspect ratio sum
          const rowIndex = Math.floor(i / itemsPerRowByBreakpoints[j]);
          const rowAspectRatioSum = rowAspectRatioSums[rowIndex];

          return `${(item.aspectRatio / rowAspectRatioSum) * 100}%`;
        }
      )}
      css={{ display: "inline-block" }}
    />
  ));
}

export default Masonry;
