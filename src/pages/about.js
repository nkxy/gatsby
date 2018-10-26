import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";

export default ({ data }) => (
  <Layout>
    <div>
      <h1>About me</h1>
      <p>{data.dataJson.intro_paragraph}</p>
    </div>
  </Layout>
);

export const query = graphql`
  query {
    dataJson {
      about {
        work
      }
    }
  }
`;
