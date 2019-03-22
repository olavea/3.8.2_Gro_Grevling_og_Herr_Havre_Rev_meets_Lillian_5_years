import React from "react";
import AddKidsToyAnimalForm from "../components/AddKidsToyAnimalForm";
import { Link, graphql } from "gatsby";

// import Bio from "../components/bio"
import Layout from "../components/layout";
import SEO from "../components/seo";
import { rhythm, scale } from "../utils/typography";

import buttonBirdyTop from "./Bee_hummingbird_no.4.png";
import buttonBirdyBottom from "./Bee_hummingbird_no.png";

import styled from "styled-components";

const BeeHummingBirdWrapper = styled.div`
  margin-bottom: 0;
  padding-bottom: 0;
  margin-top: 0;
  padding-top: 0;
  img {
    margin-top: 0;
    padding-top: 0;
  }
`;

class BlogPostTemplate extends React.Component {
  state = {
    fargelagteArk: {}
  };

  componentDidMount() {
    //I reinstate our localstorage = Wes#19 6:33
  }

  componentDidUpdate() {
    console.log(this.state.coloringPages);
    localStorage.setItem(
      this.props.data.markdownRemark.frontmatter.title,
      JSON.stringify(this.state.coloringPages)
    );
  }
  // Jeg vil at key skal være sidetall = Win!

  componentWillUnmount() {}

  addColoringPage = toyAnimal => {
    const fargelagteArk = { ...this.state.fargelagteArk };
    // II. legg til Lillians nye fargelegging til variabelen
    fargelagteArk[`toyAnimal${Date.now()}`] = toyAnimal;
    /// III. set den nye fargeleggings objektet til state
    this.setState({ fargelagteArk });
  };

  render() {
    const post = this.props.data.markdownRemark;
    const siteTitle = this.props.data.site.siteMetadata.title;
    const { previous, next } = this.props.pageContext;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <BeeHummingBirdWrapper>
          <SEO title={post.frontmatter.title} description={post.excerpt} />

          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
              margin: 0,
              marginBottom: 0,
              paddingBottom: 0
            }}
          >
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  <img
                    style={{
                      width: "133px"
                    }}
                    src={buttonBirdyTop}
                    alt="Hummingbird button top"
                  />
                </Link>
              )}
            </li>
          </ul>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
              margin: 0
            }}
          >
            <li>
              <AddKidsToyAnimalForm addColoringPage={this.addColoringPage} />
              {/*// 33. look at page 11*/}
            </li>
          </ul>
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
              margin: 0
            }}
          >
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>

            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  <img
                    style={{
                      width: "333px"
                    }}
                    src={buttonBirdyBottom}
                    alt="Hummingbird button bottom Onward!"
                  />
                </Link>
              )}
            </li>
          </ul>
          <hr
            style={{
              marginBottom: rhythm(1)
            }}
          />
        </BeeHummingBirdWrapper>
      </Layout>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;

// import React from "react";
// import { Link, graphql } from "gatsby";
// import ReactDOM from "react-dom";
// import Swipe from "react-easy-swipe";

// // import Bio from "../components/bio"
// import Layout from "../components/layout";
// import SEO from "../components/seo";
// import { rhythm, scale } from "../utils/typography";
// import logo from "./uniparrot4.png";

// class BlogPostTemplate extends React.Component {
//   onSwipeStart(event) {
//     console.log("Start swiping...", event);
//   }

//   onSwipeMove(position, event) {
//     console.log(`Moved ${position.x} pixels horizontally`, event);
//     console.log(`Moved ${position.y} pixels vertically`, event);
//   }

//   onSwipeEnd(event) {
//     console.log("End swiping...", event);
//   }

//   render() {
//     const post = this.props.data.markdownRemark;
//     const siteTitle = this.props.data.site.siteMetadata.title;
//     const { previous, next } = this.props.pageContext;

//     return (
//       <Swipe
//         onSwipeStart={this.onSwipeStart}
//         onSwipeMove={this.onSwipeMove}
//         onSwipeEnd={this.onSwipeEnd}>
//           <Link to={next.fields.slug} />
//       </Swipe>
//       <Layout location={this.props.location} title={siteTitle}>
//         <SEO title={post.frontmatter.title} description={post.excerpt} />

//         <p
//           style={{
//             ...scale(-1 / 5),
//             display: `block`,
//             marginBottom: rhythm(1),
//             marginTop: rhythm(-1)
//           }}
//         />

//         <ul
//           style={{
//             display: `flex`,
//             flexWrap: `wrap`,
//             justifyContent: `space-between`,
//             listStyle: `none`,
//             padding: 0
//           }}
//         >
//           <li>
//             {previous && (
//               <Link to={previous.fields.slug} rel="prev">
//                 ← {previous.frontmatter.title}
//               </Link>
//             )}
//           </li>
//           <li>
//             {next && (
//               <Link to={next.fields.slug} rel="next">
//                 <img
//                   style={{
//                     width: "133px"
//                   }}
//                   src={logo}
//                   alt="Geff Logo"
//                 />
//               </Link>
//             )}
//           </li>
//         </ul>
//         <div dangerouslySetInnerHTML={{ __html: post.html }} />
//         <hr
//           style={{
//             marginBottom: rhythm(1)
//           }}
//         />
//       </Layout>
//     );
//   }
// }

// export default BlogPostTemplate;

// export const pageQuery = graphql`
//   query BlogPostBySlug($slug: String!) {
//     site {
//       siteMetadata {
//         title
//         author
//       }
//     }
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       id
//       excerpt(pruneLength: 160)
//       html
//       frontmatter {
//         title
//         date(formatString: "MMMM DD, YYYY")
//       }
//     }
//   }
// `;

// .
// import React from "react";
// import { Link, graphql } from "gatsby";
// import ReactDOM from "react-dom";
// import Swipe from "react-easy-swipe";

// // import Bio from "../components/bio"
// import Layout from "../components/layout";
// import SEO from "../components/seo";
// import { rhythm, scale } from "../utils/typography";
// import logo from "./uniparrot4.png";

// class BlogPostTemplate extends React.Component {
//   onSwipeStart(event) {
//     console.log("Start swiping...", event);
//   }

//   onSwipeMove(position, event) {
//     console.log(`Moved ${position.x} pixels horizontally`, event);
//     console.log(`Moved ${position.y} pixels vertically`, event);
//   }

//   onSwipeEnd(event) {
//     console.log("End swiping...", event);
//   }

//   render() {
//     const post = this.props.data.markdownRemark;
//     const siteTitle = this.props.data.site.siteMetadata.title;
//     const { previous, next } = this.props.pageContext;

//     return (
//       <Swipe
//         onSwipeStart={this.onSwipeStart}
//         onSwipeMove={this.onSwipeMove}
//         onSwipeEnd={this.onSwipeEnd}>
//           <Link to={next.fields.slug} />
//       </Swipe>
//       <Layout location={this.props.location} title={siteTitle}>
//         <SEO title={post.frontmatter.title} description={post.excerpt} />

//         <p
//           style={{
//             ...scale(-1 / 5),
//             display: `block`,
//             marginBottom: rhythm(1),
//             marginTop: rhythm(-1)
//           }}
//         />

//         <ul
//           style={{
//             display: `flex`,
//             flexWrap: `wrap`,
//             justifyContent: `space-between`,
//             listStyle: `none`,
//             padding: 0
//           }}
//         >
//           <li>
//             {previous && (
//               <Link to={previous.fields.slug} rel="prev">
//                 ← {previous.frontmatter.title}
//               </Link>
//             )}
//           </li>
//           <li>
//             {next && (
//               <Link to={next.fields.slug} rel="next">
//                 <img
//                   style={{
//                     width: "133px"
//                   }}
//                   src={logo}
//                   alt="Geff Logo"
//                 />
//               </Link>
//             )}
//           </li>
//         </ul>
//         <div dangerouslySetInnerHTML={{ __html: post.html }} />
//         <hr
//           style={{
//             marginBottom: rhythm(1)
//           }}
//         />
//       </Layout>
//     );
//   }
// }

// export default BlogPostTemplate;

// export const pageQuery = graphql`
//   query BlogPostBySlug($slug: String!) {
//     site {
//       siteMetadata {
//         title
//         author
//       }
//     }
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       id
//       excerpt(pruneLength: 160)
//       html
//       frontmatter {
//         title
//         date(formatString: "MMMM DD, YYYY")
//       }
//     }
//   }
// `;
