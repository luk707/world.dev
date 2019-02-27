import React from "react";
import { Global, css } from "@emotion/core";

function Layout({ children }) {
  return (
    <>
      <Global
        styles={css`
          html {
            background-color: #f9f9f9;
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
            font-size: 40px;
          }
          h2 {
            font-weight: 500;
            font-size: 40px;
          }
          p {
            font-weight: 400;
            font-size: 18px;
          }
          a {
            color: #336fbc;
            text-decoration: none;
            font-size: 18px;
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
