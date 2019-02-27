import React, { Component } from "react";
import Layout from "../components/layout";
import PostPreview from "../components/post-preview";
class HomePage extends Component {
  render() {
    return (
      <Layout>
        <h1>Recent posts</h1>
        <PostPreview
          title="Watch this space"
          excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus augue blandit justo placerat, eget varius nibh viverra. Vivamus condimentum erat nisl, vel imperdiet mi tristique vel. Nullam in risus ut augue porttitor tristique. Sed varius massa eget dictum consequat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis laoreet, lacus sit amet eleifend dictum, enim dolor auctor urna, non hendrerit massa ipsum ut erat. Morbi eget ullamcorper libero, ut lobortis nunc. Curabitur in vulputate quam. Nunc id tempor nisi. Aliquam pharetra egestas elit, at finibus nunc ullamcorper in. Maecenas sed justo ut enim ullamcorper dictum quis non orci. Morbi ut rhoncus nibh. Maecenas sit amet nisl ac tellus hendrerit pharetra quis vel neque. Vestibulum non nibh risus."
        />
      </Layout>
    );
  }
}

export default HomePage;
