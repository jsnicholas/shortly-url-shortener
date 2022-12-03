import React from "react";
import topimg from "../images/illustration-working.svg";

function Hero() {
  return (
    <section className="px-40 mb-40 flex justify-between mr-8">
      <div className="w-1/2 flex-none">
        <h1 className="text-7xl font-bold text-verydarkviolet leading-20">
          More than just shorter links
        </h1>
        <p className="heroSubtext text-gray text-xl py-6 w-3/4">
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

      <div className="-mr-40">
        <img
          src={topimg}
          alt="Illustration of person working at their computer"
        ></img>
      </div>
    </section>
  );
}

export default Hero;
