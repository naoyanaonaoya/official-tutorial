import * as React from "react";
import Layout from "../components/Layout";
import SEO from "../components/Seo";

const AboutPage = () => {
  return (
    <>
      <Layout pageTitle="About page">
        <SEO />
        <p>
          Hi there! I'm the proud creator of this site, which I built with
          Gatsby.
        </p>
      </Layout>
    </>
  );
};

export default AboutPage;
