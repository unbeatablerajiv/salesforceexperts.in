import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Layout from "../layout";
import SEO from "../components/SEO";
import config from "../../data/SiteConfig";
import Covid from "../components/Covid";

const Covid19Wrapper = (props) => {
  return (
    <Layout>
      <SEO metaDescription="Covid19 India updates in short." />
      <Helmet>
        <meta charSet="utf-8" />
        <title>{`Covid19 India Update – ${config.siteTitle}`}</title>
        <meta name="description" content="Covid19 India updates in short." />
      </Helmet>
      <div className="container">
        <Covid isWrapper={true} />
      </div>
    </Layout>
  );
};

export default Covid19Wrapper;
