import React from "react";
import topimg from "../images/illustration-working.svg";

function Hero() {
  return (
    <section className="flex p-10">
      <div className="heroText w-2/5 ml-20 leading-10">
        <h1 className="text-7xl font-bold text-verydarkviolet leading-20">
          More than just shorter links
        </h1>
        <p className="heroSubtext text-gray text-xl leading-5 py-6">
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <button
          href="/boost"
          className="bg-cyan px-8 py-4 text-white text-xl font-bold rounded-full"
        >
          Get Started
        </button>
      </div>
      <div className="heroImg">
        <img
          src={topimg}
          alt="Illustration of person working at their computer"
        ></img>
      </div>
    </section>
  );
}

export default Hero;
