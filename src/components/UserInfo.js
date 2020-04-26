import React, { Component } from "react";
import profile from "../../content/images/profile.jpg";
import patreon from "../../content/thumbnails/patreon.png";
import kofi from "../../content/thumbnails/kofi.png";

export default class UserInfo extends Component {
  render() {
    return (
      <aside className="note">
        <div className="container note-container">
          <div className="flex-author">
            <div className="flex-avatar">
              <img className="avatar" src={profile} alt="Rajiv Singh" />
            </div>
            <div>
              <h3>Author</h3>
              <p>
              I’m Rajiv Singh, a Salesforce Tech Lead, technical writer, motorhead, chef. I am a salesforce Evangelist and love to spread the knowledge of Salesforce.
              </p>

              <div className="flex">
                <a
                  href="https://ko-fi.com/pratap22"
                  className="donate-button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={kofi} className="coffee-icon" alt="Coffee icon" />
                  Buy me a coffee
                </a>
                <a
                  className="patreon-button"
                  href="https://www.patreon.com/pratap22"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={patreon} height="50" width="50" alt="Patreon" />{" "}
                  Become a Patron
                </a>
              </div>
            </div>
          </div>
        </div>
      </aside>
    );
  }
}
