import React, { Component } from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { format } from "date-fns";
import Layout from "../components/layout";
import PostPreview from "../components/post-preview";

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
                        fixed(width: 125, height: 125) {
                          ...GatsbyImageSharpFixed
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
              {edges.map(({ node }) => (
                <>
                  <br />
                  <br />
                  <Img fixed={node.localFile.childImageSharp.fixed} />
                  <PostPreview
                    title={format(
                      new Date(node.timestamp * 1000),
                      "Do MMMM YYYY"
                    )}
                    excerpt={node.caption}
                  />
                </>
              ))}
            </div>
          )}
        </StaticQuery>
      </Layout>
    );
  }
}

export default HomePage;
