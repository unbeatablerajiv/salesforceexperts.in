import React, { Component } from "react";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import Layout from "../layout";
import UserInfo from "../components/UserInfo";
import PostTags from "../components/PostTags";
import SEO from "../components/SEO";
import config from "../../data/SiteConfig";
import { formatDate, editOnGithub } from "../utils/global";
import profile from "../../content/images/profile-small.jpg";

export default class PostTemplate extends Component {
  render() {
    const { slug } = this.props.pageContext;
    const postNode = this.props.data.markdownRemark;
    const post = postNode.frontmatter;
    let thumbnail;

    if (!post.id) {
      post.id = slug;
    }

    if (!post.category_id) {
      post.category_id = config.postDefaultCategoryID;
    }

    if (post.thumbnail) {
      thumbnail = post.thumbnail.childImageSharp.gatsbyImageData;
    }

    const date = formatDate(post.date);
    const githubLink = editOnGithub(post);
    const twitterShare = `http://twitter.com/share?text=${encodeURIComponent(
      post.title
    )}&url=${config.siteUrl}/${post.slug}/&via=pratap2210`;

    return (
      <Layout>
        <Helmet>
          <title>{`${post.title} – ${config.siteTitle}`}</title>
        </Helmet>
        <SEO postPath={slug} postNode={postNode} postSEO />
        <article className="single container">
          <header
            className={`single-header ${!thumbnail ? "no-thumbnail" : ""}`}
          >
            {thumbnail && <GatsbyImage image={post.thumbnail.childImageSharp.gatsbyImageData} />}
            <div className="flex">
              <h1>{post.title}</h1>
              <div className="post-meta">
                <Link to="/me">
                  <img src={profile} className="avatar-small" alt="Rajiv" />
                </Link>
                <time className="date">{date}</time>/
                <a
                  className="twitter-link"
                  href={twitterShare}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Share
                </a>
              </div>
              <PostTags tags={post.tags} />
            </div>
          </header>

          <div
            className="post"
            dangerouslySetInnerHTML={{ __html: postNode.html }}
          />
        </article>
        <UserInfo config={config} />
      </Layout>
    );
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`query BlogPostBySlug($slug: String!) {
  markdownRemark(fields: {slug: {eq: $slug}}) {
    html
    timeToRead
    excerpt
    frontmatter {
      title
      thumbnail {
        childImageSharp {
          gatsbyImageData(width: 150, height: 150, layout: FIXED)
        }
      }
      slug
      date
      categories
      tags
      template
    }
    fields {
      slug
      date
    }
  }
}`;
