import React, { Component } from "react";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";

import Layout from "../layout";
import PostListing from "../components/PostListing";
import SEO from "../components/SEO";
import config from "../../data/SiteConfig";
import UserInfo from "../components/UserInfo";

const manuals = [
  // { name: 'React', image: react, url: '/getting-started-with-react' },
  // { name: 'Redux', image: redux, url: '/redux-react-guide' },
  // { name: 'Vue', image: vue, url: '/getting-started-with-vue' },
  // { name: 'Docker', image: docker, url: '/continuous-integration-pipeline-docker' },
  // { name: 'Node', image: node, url: '/node-express-postgresql-heroku' },
  // { name: 'Bash', image: bash, url: '/how-to-create-and-use-bash-scripts' },
  // { name: 'CSS', image: css, url: '/overview-of-css-concepts' },
  // { name: 'MVC', image: mvc, url: '/javascript-mvc-todo-app' },
  // { name: 'CLI', image: terminal, url: '/how-to-use-the-command-line-for-apple-macos-and-linux' },
  // { name: 'SQL', image: sql, url: '/overview-of-sql-commands-and-pdo-operations' },
  // { name: 'Auth', image: cookie, url: '/full-stack-cookies-localstorage-react-express' },
  // { name: 'JSON', image: json, url: '/how-to-use-json-data-with-php-or-javascript' },
];

export default class BlogPage extends Component {
  state = {
    searchTerm: "",
    posts: this.props.data.posts.edges,
    filteredPosts: this.props.data.posts.edges,
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value }, () => this.filterPosts());
  };

  filterPosts = () => {
    const { posts, searchTerm } = this.state;

    const filteredPosts = posts.filter((post) =>
      post.node.frontmatter.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    );

    this.setState({ filteredPosts });
  };

  render() {
    const { filteredPosts, searchTerm } = this.state;
    const filterCount = filteredPosts.length;
    const categories = this.props.data.categories.group;

    return (
      <Layout>
        <Helmet title={`Articles – ${config.siteTitle}`} />
        <SEO />
        <div className="gradient-section articles">
          <div className="container">
            <h2 className="text-center">
              Welcome to the world of Salesforce Ohana
            </h2>
            <div className="instruction-manuals">
              {manuals.map((manual) => (
                <Link to={manual.url}>
                  <img src={manual.image} alt={manual.name} />
                  <h3>{manual.name}</h3>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="container">
          <h1 className="articles-title">Articles</h1>
          <div className="category-container">
            {categories.map((category) => {
              return (
                <Link
                  to={`categories/${category.fieldValue.toLowerCase()}`}
                  className="category-filter"
                  key={category.fieldValue}
                >
                  {category.fieldValue}
                </Link>
              );
            })}
          </div>
          <div className="search-container">
            <input
              className="search"
              type="text"
              name="searchTerm"
              value={searchTerm}
              placeholder="Type here to filter posts..."
              onChange={this.handleChange}
            />
            <div className="filter-count">{filterCount}</div>
          </div>
          <PostListing postEdges={filteredPosts} />
        </div>
        <UserInfo config={config} />
      </Layout>
    );
  }
}

export const pageQuery = graphql`query BlogQuery {
  posts: allMarkdownRemark(
    limit: 2000
    sort: {fields: {date: DESC}}
    filter: {frontmatter: {template: {eq: "post"}}}
  ) {
    edges {
      node {
        fields {
          slug
          date
        }
        excerpt(pruneLength: 180)
        timeToRead
        frontmatter {
          title
          tags
          categories
          thumbnail {
            childImageSharp {
              gatsbyImageData(width: 50, height: 50, layout: FIXED)
            }
          }
          date
          template
        }
      }
    }
  }
  categories: allMarkdownRemark(limit: 2000) {
    group(field: {frontmatter: {categories: SELECT}}) {
      fieldValue
      totalCount
    }
  }
}`;
