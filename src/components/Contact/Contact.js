import React from "react";
import "./Contact.css";
import { ReactComponent as GithubSVG } from "../../assets/social-media/github-logo.svg";
import { ReactComponent as InstagramSVG } from "../../assets/social-media/instagram.svg";

function Contact() {
  return (
    <div className="contact-container" id="contact">
      <div className="contact-content">
        <h1 className="contact-item" id="contact-tag">
          &lt;Contact&gt;
        </h1>
        <p className="contact-item" id="contact-text">
          Want to know more about me, interested to work with me or just want to
          say hi?
        </p>
        <a href="mailto:naimtmas@gmail.com">
          <button className="contact-item" id="email-button">
            Drop me a message!
          </button>
        </a>
        <p className="contact-item" id="contact-text">
          You can also find me on:
        </p>
        <div className="icon-container">
          <GithubSVG className="social-media-icons" />
          <InstagramSVG className="social-media-icons" />
        </div>
      </div>
      <footer className="footer">
        <p>
          Designed and Built by Tengku Naim
          <br />
          Developed using React JS
        </p>
      </footer>
    </div>
  );
}

export default Contact;
