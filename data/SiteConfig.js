const config = {
  siteTitle: "Rajiv Singh",
  siteTitleShort: "Rajiv Singh",
  siteTitleAlt: "Rajiv Singh",
  siteLogo: "/logos/logo-1024.png",
  siteUrl: "https://salesforceexperts.in/",
  repo: "https://github.com/unbeatablerajiv/salesforceexperts.in",
  pathPrefix: "",
  dateFromFormat: "YYYY-MM-DD",
  dateFormat: "MMMM Do, YYYY",
  siteDescription:
    "Rajiv Singh is a Salesforce Tech lead and specialist in various salesforce products.",
  siteRss: "/rss.xml",
  googleAnalyticsID: "UA-48769882-1",
  postDefaultCategoryID: "Tech",
  newsletter: "https://rajivsingh.substack.com/",
  newsletterEmbed: "https://rajivsingh.substack.com/embed",
  userName: "Rajiv",
  userEmail: "rajiv4som1@gmail.com",
  userTwitter: "RAJIVSI74947096",
  menuLinks: [
    {
      name: "About me",
      link: "/me/",
    },
    {
      name: "Blogs",
      link: "/blog/",
    },
    {
      name: "Contact",
      link: "/contact/",
    },
  ],
  themeColor: "#3f80ff", // Used for setting manifest and progress theme colors.
  backgroundColor: "#f5fcff",
};

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === "/") {
  config.pathPrefix = "";
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/")
  config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== "/")
  config.siteRss = `/${config.siteRss}`;

module.exports = config;
