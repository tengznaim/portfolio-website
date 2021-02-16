import React from "react";
import "./Contact.css";
import { ReactComponent as GithubSVG } from "../../assets/social-media/github-logo.svg";
import { ReactComponent as InstagramSVG } from "../../assets/social-media/instagram.svg";
import { ReactComponent as LinkedInSVG } from "../../assets/social-media/linkedin.svg";

function Contact() {
  return (
    <div className="contact-container" id="contact">
      <div className="contact-content">
        <h1
          className="contact-item"
          id="contact-tag"
          data-aos="fade"
          data-aos-anchor="#contact">
          &lt;Contact&gt;
        </h1>
        <p
          className="contact-item"
          id="contact-text"
          data-aos="fade"
          data-aos-anchor="#contact">
          Want to know more about me, interested to work with me or just want to
          say hi?
        </p>
        <a
          href="mailto:naimtmas@gmail.com"
          data-aos="fade"
          data-aos-anchor="#contact">
          <button className="contact-item" id="email-button">
            Drop me a message!
          </button>
        </a>
        <p
          className="contact-item"
          id="contact-text"
          data-aos="fade"
          data-aos-anchor="#contact">
          You can also find me on:
        </p>
        <div
          className="icon-container"
          data-aos="fade"
          data-aos-anchor="#contact">
          <a href="https://github.com/tengznaim" target="_blank">
            <GithubSVG className="social-media-icons" />
          </a>
          <a href="https://instagram.com/tengkunaim_" target="_blank">
            <InstagramSVG className="social-media-icons" />
          </a>
          <a href="https://linkedin.com/in/tengku-naim" target="_blank">
            <LinkedInSVG className="social-media-icons" />
          </a>
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
