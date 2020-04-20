import React, { Component } from "react";
import Helmet from "react-helmet";
import GitHubButton from "react-github-btn";
import { format } from "date-fns";
import { graphql, Link } from "gatsby";
import Layout from "../layout";
import PostListing from "../components/PostListing";
import SEO from "../components/SEO";
import config from "../../data/SiteConfig";
import quotes from "../../data/quotes";
import pratap from "../../content/images/profile.jpg";
import UserInfo from "../components/UserInfo";
import Covid from "../components/Covid";

export default class Index extends Component {
  render() {
    const { data } = this.props;

    const latestPostEdges = data.latest.edges;
    const popularPostEdges = data.popular.edges;

    return (
      <Layout>
        <Helmet title={`${config.siteTitle} – Full Stack Software Developer`} />
        <SEO />
        <div className="container">
          <div className="lead">
            <div className="elevator">
              <h1>{`Hey, I'm Pratap 👋`} </h1>
              <p>
                {`I'm a full stack software developer creating `}
                <a
                  href="https://github.com/pratap22"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  open source
                </a>{" "}
                projects and <Link to="/blog">writing</Link> about modern
                JavaScript, Node.js, and development.
              </p>
              <div className="social-buttons">
                <GitHubButton
                  href="https://github.com/pratap22"
                  data-size="large"
                  data-show-count="true"
                >
                  pratap22
                </GitHubButton>
              </div>
              <div className="social-buttons">
                <a
                  href="https://stackoverflow.com/users/10398005/pratap-sharma"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://stackoverflow.com/users/flair/10398005.png"
                    width="208"
                    height="58"
                    alt="profile for Pratap Sharma at Stack Overflow, Q&amp;A for professional and enthusiast programmers"
                    title="profile for Pratap Sharma at Stack Overflow, Q&amp;A for professional and enthusiast programmers"
                  />
                </a>
              </div>
            </div>
            <div className="newsletter-section">
              <img src={pratap} className="newsletter-avatar" alt="Pratap" />
              <div>
                <h3>Email Newsletter</h3>
                <p>
                  I write tutorials. Get an update when something new comes out
                  by signing up below!
                </p>
                <a className="button" href="https://pratap.substack.com">
                  Subscribe
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="container front-page">
          <section className="section">
            <h2>
              Latest Articles
              <Link to="/blog" className="view-all">
                View all
              </Link>
            </h2>
            <PostListing simple postEdges={latestPostEdges} />
          </section>

          {popularPostEdges && popularPostEdges.length > 0 && (
            <section className="section">
              <h2>
                Most Popular
                <Link to="/categories/popular" className="view-all">
                  View all
                </Link>
              </h2>
              <PostListing simple postEdges={popularPostEdges} />
            </section>
          )}

          {/* <section className="section">
            <h2>Open Source Projects</h2>
            <ProjectListing projects={projects} />
          </section> */}

          <section className="section">
            <h2>
              <strong>*</strong> COVID19 India updates{" "}
              {format(new Date(), "do MMMM")}
              <Link to="/covid19India" className="view-all">
                View more updates
              </Link>
            </h2>
            <Covid />
          </section>
        </div>
        <UserInfo config={config} />
        <div className="gradient-section">
          <div className="container">
            <h2>What people say about me...</h2>
          </div>
          <div className="quotations">
            {quotes
              .filter((quote, index) => index < 4)
              .map((quote) => (
                <blockquote className="quotation" key={quote.name}>
                  <p>{quote.quote}</p>
                  <cite>
                    —{" "}
                    <a
                      href={quote.profileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {quote.name}
                    </a>
                  </cite>
                </blockquote>
              ))}
          </div>
          {quotes.length > 4 && (
            <div
              className="container"
              style={{ textAlign: "end", marginTop: 40 }}
            >
              <Link
                to="/quotes/"
                className="button"
                style={{
                  color: "#5183f5",
                  backgroundColor: "#ffff",
                  fontSize: "1.3em",
                }}
              >
                View More Quotes
              </Link>
            </div>
          )}
        </div>
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    latest: allMarkdownRemark(
      limit: 5
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { template: { eq: "post" } } }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            categories
            thumbnail {
              childImageSharp {
                fixed(width: 150, height: 150) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            date
            template
          }
        }
      }
    }
    popular: allMarkdownRemark(
      limit: 9
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { categories: { eq: "Popular" } } }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            categories
            thumbnail {
              childImageSharp {
                fixed(width: 150, height: 150) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            date
            template
          }
        }
      }
    }
  }
`;
