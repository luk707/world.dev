import React from "react";
import { Global, css } from "@emotion/core";

function Layout({ children }) {
  return (
    <>
      <Global
        styles={css`
          html {
            background-color: #f9f9f9;
            font-size: 62.5%;
          }
          body {
            font-size: 1.6rem;
            margin: 0;
            padding: 0;
          }
          * {
            font-family: "Sarabun", sans-serif;
          }
          h1,
          h2,
          h3,
          p {
            color: #4b4b4b;
          }
          h1 {
            font-weight: 800;
            font-size: 3.6rem;
          }
          h2 {
            font-weight: 500;
            font-size: 2.6rem;
          }
          h3 {
            font-weight: 500;
            font-size: 2.2rem;
          }
          p {
            font-weight: 400;
            font-size: 1.6rem;
          }
          a {
            color: #336fbc;
            text-decoration: none;
            font-size: 1.6rem;
            span {
              font-family: "Source Code Pro", monospace;
              font-size: 20px;
            }
          }
        `}
      />
      {children}
    </>
  );
}

export default Layout;
