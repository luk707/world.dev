import React from "react";
import Img from "gatsby-image";
import HeartIcon from "../icons/heart";

function InstagramPreview({ fluid, likes, caption, url, ...rest }) {
  console.log(fluid, likes);
  return (
    <a
      {...rest}
      css={{ position: "relative", margin: 0, padding: 0 }}
      href={url}
    >
      <Img alt={caption} fluid={fluid} />
      <div
        css={{
          position: "absolute",
          height: 50,
          bottom: 0,
          left: 0,
          right: 0,
          background: "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7))",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          padding: 10
        }}
      >
        <HeartIcon css={{ color: "white" }} />{" "}
        <span css={{ marginLeft: 4 }}>{likes}</span>
      </div>
    </a>
  );
}

export default InstagramPreview;
