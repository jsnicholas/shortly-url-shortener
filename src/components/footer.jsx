import React from "react";
import insta from "../images/icon-instagram.svg";
import pinterest from "../images/icon-pinterest.svg";
import twitter from "../images/icon-twitter.svg";
import facebook from "../images/icon-facebook.svg";

function Footer() {
  return (
    <footer className="flex items-center justify-between flex-wrap p-6 bg-verydarkviolet text-white">
      <div className="w-1">
        <h2>Features</h2>
        <a href="/link">Link Shortening</a>
        <a href="/link">Branded Links</a>
        <a href="/link">Analytics</a>
      </div>
      <div className="w-1">Resources Blog Developers</div>
      <div className="w-1">Support Company About Our Team Careers Contact</div>
      <div className="w-1">
        <img src={insta} alt="instagram logo"></img>
        <img src={pinterest} alt="pinterest logo"></img>
        <img src={twitter} alt="twitter logo"></img>
        <img src={facebook} alt="facebook logo"></img>
      </div>
    </footer>
  );
}

export default Footer;
