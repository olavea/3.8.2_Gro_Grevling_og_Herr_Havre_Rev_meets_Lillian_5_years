import React from "react";

import Inventory from "../components/Inventory";
import fishes from "../sample-fishes";
import Fish from "../components/Fish";
import Header from "../components/Header";

import { Link, graphql } from "gatsby";
// import AddKidsToyAnimalForm from "../components/AddKidsToyAnimalForm";
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
    fargelagteArk: {},
    order: {}
  };

  componentDidMount() {
    //const { params } = this.props.match;
    // first reinstate our localStorage  = Wes#19 6:33
    const localStorageRef = localStorage.getItem(
      this.props.data.markdownRemark.frontmatter.title
    );
    console.log("res");
    if (localStorageRef) {
      this.setState({ fargelagteArk: JSON.parse(localStorageRef) });
    }
    console.log("resto");
  }

  componentDidUpdate() {
    console.log(this.state.fargelagteArk);

    localStorage.setItem(
      this.props.data.markdownRemark.frontmatter.title,
      JSON.stringify(this.state.fargelagteArk)
    );
  }

  componentWillUnmount() {}

  addColoringPage = toyAnimal => {
    // I. Ta en kopi av fargelagteArk existing state
    const fargelagteArk = { ...this.state.fargelagteArk };
    // II. legg til Lillians nye fargelegging til den fargelagteArk variabelen
    fargelagteArk[`toyAnimal${Date.now()}`] = toyAnimal;
    /// III. set den nye fargeleggings objektet til state
    this.setState({ fargelagteArk });
  };

  loadSampleFishes = () => {
    this.setState({ fargelagteArk: fishes });
  };

  addToOrder = key => {
    // 1. take a copy of state
    const order = { ...this.state.order };
    // 2. Either add to the order, or update the number in our order
    order[key] = order[key] + 1 || 1;
    // 3. Call setState to update our state object
    this.setState({ order });
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
          <div classname="menu">
            <Header tagline="Lillian" />
          </div>
          <ul className="uploaded-drawings" />

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
              <Inventory
                addColoringPage={this.addColoringPage}
                loadSampleFishes={this.loadSampleFishes}
              />
              {/*// 33. look at page 11*/}
            </li>
          </ul>
          <div className="menu">
            {/*  <Header tagline="Lillian's Drawings" />
          {Object.keys(this.state.fargelagteArk).map(key => (
            <Fish key={key} details={this.state.fargelagteArk[key]} />
          ))}
          */}
            <ul className="fishes">
              {Object.keys(this.state.fargelagteArk).map(key => (
                <Fish
                  key={key}
                  index={key}
                  details={this.state.fargelagteArk[key]}
                  addToOrder={this.addToOrder}
                />
              ))}
            </ul>
          </div>
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
