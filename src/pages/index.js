import React, { Component } from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { format } from "date-fns";
import { Box } from "@rebass/emotion";
import Layout from "../components/layout";
import PostPreview from "../components/post-preview";
import Masonry from "../components/masonry";

class HomePage extends Component {
  render() {
    return (
      <Layout>
        <StaticQuery
          query={graphql`
            {
              allInstaNode(
                sort: { fields: timestamp, order: DESC }
                filter: { mediaType: { eq: "GraphImage" } }
              ) {
                edges {
                  node {
                    timestamp
                    caption
                    localFile {
                      childImageSharp {
                        # Specify the image processing specifications right in the query.
                        # Makes it trivial to update as your page's design changes.
                        fluid {
                          aspectRatio
                          ...GatsbyImageSharpFluid
                        }
                      }
                    }
                  }
                }
              }
            }
          `}
        >
          {({ allInstaNode: { edges } }) => (
            <div
              css={{
                maxWidth: 1200,
                margin: "auto"
              }}
            >
              <Masonry
                itemsPerRow={[2, 3]}
                items={edges.map(({ node }) => ({
                  ...node.localFile.childImageSharp.fluid,
                  caption: node.caption
                }))}
              />
            </div>
          )}
        </StaticQuery>
      </Layout>
    );
  }
}

export default HomePage;
