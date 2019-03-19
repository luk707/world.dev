import React from "react";
import Excerpt from "./excerpt";

function PostPreview({ color = "red", title, excerpt, ...rest }) {
  return (
    <a
      {...rest}
      css={{
        position: "relative",
        margin: 0,
        padding: 0,
        backgroundColor: color
      }}
    >
      Hello
    </a>
  );
}

export default PostPreview;
