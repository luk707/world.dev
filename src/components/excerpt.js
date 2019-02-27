import React from "react";
import styled from "@emotion/styled";

const ExcerptContainer = styled.div({
  position: "relative"
});

const ExcerptGradient = styled.div({
  position: "absolute",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
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
