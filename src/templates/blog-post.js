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
    //const { params } = this.props.match;
    // first reinstate our localStorage  = Wes#19 6:33
    const localStorageRef = localStorage.getItem(
      this.props.data.markdownRemark.frontmatter.title
    );
    if (localStorageRef) {
      this.setState({ order: JSON.parse(localStorageRef) });
    }

    // var canvas = document.getElementById("canvas");
    // let file = document.getElementById("file");
    // const localStorageRef = localStorage.getItem();
    // if (localStorageRef) {
    //   this.setState({ fargelagteArk: JSON.parse(localStorageRef) });
    // }
  }

  componentDidUpdate() {
    console.log(this.state.fargelagteArk);
    // this.state.fargelagteArk
    localStorage.setItem(
      this.props.data.markdownRemark.frontmatter.title,
      JSON.stringify(this.state.fargelagteArk)
    );
  }

  // this.props.data.markdownRemark.frontmatter.title
  // eller this.props.location line 86?
  // The value is going to be this.state.fargelagteArk wes#19 4:10->
  // kanskje jeg egentlig skal bruke this.addColoringPage ikke this.state.fargelagteArk?

  componentWillUnmount() {}

  addColoringPage = toyAnimal => {
    // I. Ta en kopi av fargelagteArk existing state
    const fargelagteArk = { ...this.state.fargelagteArk };
    // II. legg til Lillians nye fargelegging til den fargelagteArk variabelen
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
// Vi bør vise brukerns bilder når component mounts fra wesSickFitsBos
// i localStorage vil jeg ha fargelagteArk fra et spesifikt sidetall. -at key skal være sidetall = Win!
