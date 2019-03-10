import React from "react";
import styled from "@emotion/styled";

const ExcerptContainer = styled.div({
  position: "relative",
  maxHeight: "5.4em",
  overflow: "hidden",
  "&:after": {
    content: "''",
    textAlign: "right",
    position: "absolute",
    top: "4.2em",
    right: 0,
    width: "70%",
    height: "1.2em",
    background:
      "linear-gradient(to right, rgba(249, 249, 249, 0), rgba(249, 249, 249, 1) 50%)"
  },
  p: {
    margin: 0
  }
});

const ExcerptGradient = styled.div({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  height: "5.4em",
  pointerEvents: "none",
  backgroundImage:
    "linear-gradient(rgba(249, 249, 249, 0), rgba(249, 249, 249, 1))"
});

function Excerpt({ children }) {
  return (
    <ExcerptContainer>
      {children}
      <ExcerptGradient />
    </ExcerptContainer>
  );
}

export default Excerpt;
