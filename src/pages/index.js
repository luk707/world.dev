import React, { Component } from "react";
import { StaticQuery, graphql } from "gatsby";
import Layout from "../components/layout";
import PostPreview from "../components/post-preview";

class HomePage extends Component {
  render() {
    return (
      <Layout>
        <StaticQuery
          query={graphql`
            {
              allInstaNode {
                edges {
                  node {
                    timestamp
                    caption
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
                <PostPreview
                  title={new Date(node.timestamp).toString()}
                  excerpt={node.caption}
                />
              ))}
            </div>
          )}
        </StaticQuery>
      </Layout>
    );
  }
}

export default HomePage;
