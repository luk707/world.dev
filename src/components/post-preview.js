import React from "react";
import Excerpt from "./excerpt";

function PostPreview({ title, excerpt }) {
  return (
    <>
      <h2>{title}</h2>
      <Excerpt>
        <p>{excerpt}</p>
      </Excerpt>
      <a href="/">
        Continue reading <span>→</span>
      </a>
    </>
  );
}

export default PostPreview;
