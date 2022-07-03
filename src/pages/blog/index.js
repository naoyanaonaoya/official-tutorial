import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../../components/Layout";
import Seo from "../../components/Seo";

const BlogPage = ({ data }) => {
  return (
    <>
      <Layout pageTitle="My Blog Posts">
        <Seo />
        <ul>
          {console.log(data.allMdx.nodes)}
          {data.allMdx.nodes.map(
            (node) =>
              // 強制的に表示しない用にしている
              // まずなんで余分なものが表示されるのかわからない
              node.slug === null ? (
                <div hidden>ABC</div>
              ) : (
                <article key={node.id}>
                  <h2>
                    <Link to={`/blog/${node.slug}`}>
                      {node.frontmatter.title}
                    </Link>
                  </h2>
                  <p>Posted: {node.frontmatter.date}</p>
                </article>
              )
            // <article key={node.id}>
            //   <h2>
            //     <Link to={`/blog/${node.slug}`}>
            //       {node.frontmatter.title}
            //     </Link>
            //   </h2>
            //   <p>Posted: {node.frontmatter.date}</p>
            // </article>
          )}
        </ul>
      </Layout>
    </>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        slug
      }
    }
  }
`;

export default BlogPage;
