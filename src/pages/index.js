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
import profile from "../../content/images/profile.jpg";
import UserInfo from "../components/UserInfo";
import Covid from "../components/Covid";

export default class Index extends Component {
  render() {
    const { data } = this.props;

    const latestPostEdges = data.latest.edges;
    const popularPostEdges = data.popular.edges;

    return (
      <Layout>
        <Helmet title={`${config.siteTitle} – Salesforce Tech Lead`} />
        <SEO />
        <div className="container">
          <div className="lead">
            <div className="elevator">
              <h1>{`Hey, I'm Rajiv👋`} </h1>
              <p>
                I am a Salesforce Evangelist. Working as a full time Salesforce
                Tech lead creating innovative solutions on the salesforce platform.
                I have learn't a lot from the awesome Salesforce community & Ohana.
                Got multiple certifications from Salesforce.
                Now as we know, we in Salesforce Ohana believe in #GivingBack.
                Let's connect and contribute to salesforce ohana.
              </p>
            </div>
            <div className="newsletter-section">
              <img src={profile} className="newsletter-avatar" alt="Rajiv" />
              <div>
                <h3>Email Newsletter</h3>
                <p>
                  I write Technical articles, salesforce blogs & solutions. Get an update when something new comes out
                  by signing up below!
                </p>
                <a className="button" href="https://rajivsingh.substack.com/">
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
                View More Recommendations
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
