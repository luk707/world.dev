import React, { Component } from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { format } from "date-fns";
import { Box } from "@rebass/emotion";
import Layout from "../components/layout";
import Masonry from "../components/masonry";
import InstagramPreview from "../components/instagram-preview";
import PostPreview from "../components/post-preview";

const itemComponents = {
  instagram: InstagramPreview,
  post: PostPreview
};

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
                    id
                    timestamp
                    caption
                    likes
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
          {({ allInstaNode: { edges } }) => {
            const instagramItems = edges.map(({ node }) => ({
              id: node.id,
              type: "instagram",
              aspectRatio: node.localFile.childImageSharp.fluid.aspectRatio,
              fluid: node.localFile.childImageSharp.fluid,
              caption: node.caption,
              likes: node.likes,
              timestamp: node.timestamp,
              url: `https://instagram.com/p/${node.id}`
            }));
            const postItems = [
              {
                type: "post",
                id: 1,
                aspectRatio: 2,
                title: "foo",
                excerpt: "test"
              }
            ];
            return (
              <div
                css={{
                  maxWidth: 1200,
                  margin: "0 auto",
                  fontSize: 0
                }}
              >
                <Masonry
                  itemsPerRow={[2, 3]}
                  itemComponents={itemComponents}
                  items={[...instagramItems]}
                />
              </div>
            );
          }}
        </StaticQuery>
      </Layout>
    );
  }
}

export default HomePage;
