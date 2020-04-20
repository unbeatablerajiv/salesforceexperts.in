import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import config from "../../data/SiteConfig";
import quotes from "../../data/quotes";

const QuotesPage = () => {
  return (
    <Layout>
      <Helmet title={`Quotes – ${config.siteTitle}`} />
      <div className="gradient-section">
        <div className="container">
          <h2>What people say about me...</h2>
        </div>
        <div className="quotations">
          {quotes.map((quote) => (
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
      </div>
    </Layout>
  );
};

export default QuotesPage;
