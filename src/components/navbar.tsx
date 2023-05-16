import React, { useState } from "react";
// import { FiMenu } from "react-icons/fi";

function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleToggle = () => {
    setNavbarOpen((prev) => !prev);
  };
  console.log(navbarOpen);
  return (
    <nav className="mx-6 md:mx-32 md:mb-24 mt-6 md:mt-12 flex justify-between">
      <span className="text-darkviolet font-bold text-3xl">Shortly</span>
      <div
        className={`menuNav md:flex space-x-8 md:flex-row text-gray font-bold self-start justify-between ${
          navbarOpen ? " showMenu" : "hidden"
        }`}
      >
        <ul className="md:flex">
          <li>
            <a href="/features">Features</a>
          </li>
          <li>
            <a href="/pricing">Pricing</a>
          </li>
          <li>
            <a href="/Resources">Resources</a>
          </li>
        </ul>
        <ul className="text-gray font-bold">
          <li className="inline">
            <a href="/login">Login</a>
          </li>
          <li className="inline">
            <a
              className="bg-cyan rounded-full px-4 py-2 ml-4 text-white"
              href="/signup"
            >
              Sign Up
            </a>
          </li>
        </ul>
      </div>
      <button className="md:hidden" onClick={handleToggle}>
        {/* {navbarOpen ? (
          <FiMenu style={{ color: "#7b7b7b", width: "40px", height: "40px" }} />
        ) : (
          <FiMenu style={{ color: "#7b7b7b", width: "40px", height: "40px" }} />
        )} */}
      </button>
    </nav>
  );
}

export default Navbar;
