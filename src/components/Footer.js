import React, { Component } from "react";
import netlify from "../../content/images/netlify.png";
import gatsby from "../../content/thumbnails/gatsby.png";

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer container">
        <div>
          <a
            href="https://ko-fi.com/rajivsingh"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ko-fi
          </a>
          <a
            href="https://www.patreon.com/rajivsingh"
            target="_blank"
            rel="noopener noreferrer"
          >
            Patreon
          </a>
         
        </div>
        <div>
          <a href="https://www.netlify.com/" title="Hosted by Netlify">
            <img
              src={netlify}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-img"
              alt="GitHub"
            />
          </a>
          <a href="https://www.gatsbyjs.org/" title="Built with Gatsby">
            <img
              src={gatsby}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-img"
              alt="GitHub"
            />
          </a>
        </div>
        <p>© 2020 Copyright salesforceexperts.in, All Rights Reserved.</p>
      </footer>
    );
  }
}
