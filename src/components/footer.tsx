import React from "react";
import insta from "../images/icon-instagram.svg";
import pinterest from "../images/icon-pinterest.svg";
import twitter from "../images/icon-twitter.svg";
import facebook from "../images/icon-facebook.svg";

function Footer() {
  return (
    <footer className="flex flex-col md:flex-row items-center justify-center text-center md:text-left md:justify-between py-8 md:py-16 px-8 md:px-40 bg-verydarkviolet text-white">
      <div className="basis-1/3 text-3xl font-bold md:self-start">Shortly</div>
      <div className="flex space-y-2 flex-col md:self-start text-sm mt-8 md:mt-0 md:mr-8 text-gray">
        <h2 className="font-bold mb-4 text-white">Features</h2>
        <a href="/link">Link Shortening</a>
        <a href="/link">Branded Links</a>
        <a href="/link">Analytics</a>
      </div>
      <div className="flex space-y-2 flex-col md:self-start text-sm mt-8 md:mt-0 md:mr-8 text-gray">
        <h2 className="font-bold mb-4 text-white">Resources</h2>
        <span>Blog</span>
        <span>Developers</span>
        <span>Support</span>
      </div>
      <div className="flex space-y-2 flex-col md:self-start text-sm mt-8 md:mt-0 md:mr-8 text-gray">
        <h2 className="font-bold mb-4 text-white">Company</h2>
        <span>About</span>
        <span>Our Team</span>
        <span>Careers</span>
        <span>Contact</span>
      </div>
      <div className="flex flex-row md:self-start mt-8 md:mt-0">
        <img className="mr-4" src={insta} alt="instagram logo"></img>
        <img className="mr-4" src={pinterest} alt="pinterest logo"></img>
        <img className="mr-4" src={twitter} alt="twitter logo"></img>
        <img src={facebook} alt="facebook logo"></img>
      </div>
    </footer>
  );
}

export default Footer;
