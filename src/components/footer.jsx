import React from "react";
import insta from "../images/icon-instagram.svg";
import pinterest from "../images/icon-pinterest.svg";
import twitter from "../images/icon-twitter.svg";
import facebook from "../images/icon-facebook.svg";

function Footer() {
  return (
    <footer className="flex items-center justify-between flex-wrap py-16 px-40 bg-verydarkviolet text-white">
      <div className="basis-1/3 text-3xl font-bold self-start">Shortly</div>
      <div className="flex flex-col self-start">
        <h2 className="font-bold mb-4">Features</h2>
        <a href="/link">Link Shortening</a>
        <a href="/link">Branded Links</a>
        <a href="/link">Analytics</a>
      </div>
      <div className="flex flex-col self-start">
        <h2 className="font-bold mb-4">Resources</h2>
        <span>Blog</span>
        <span>Developers</span>
      </div>
      <div className="flex flex-col self-start">
        <h2 className="font-bold mb-4">Company</h2>
        <span>About</span>
        <span>Our Team</span>
        <span>Careers</span>
        <span>Contact</span>
      </div>
      <div className="flex flex-row self-start">
        <img className="mr-4" src={insta} alt="instagram logo"></img>
        <img className="mr-4" src={pinterest} alt="pinterest logo"></img>
        <img className="mr-4" src={twitter} alt="twitter logo"></img>
        <img src={facebook} alt="facebook logo"></img>
      </div>
    </footer>
  );
}

export default Footer;
