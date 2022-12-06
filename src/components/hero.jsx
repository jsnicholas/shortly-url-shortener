import React from "react";
import topimg from "../images/illustration-working.svg";

function Hero() {
  return (
    <section className="px-32 mb-40 flex justify-between">
      <div className="w-2/3">
        <h1 className="text-7xl font-bold text-verydarkviolet leading-20">
          More than just shorter links
        </h1>
        <p className="heroSubtext text-gray text-xl py-6 w-3/4">
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <button
          href="/boost"
          className="bg-cyan px-10 py-3 text-white text-lg font-bold rounded-full"
        >
          Get Started
        </button>
      </div>

      <div className="-mr-52">
        <img
          src={topimg}
          alt="Illustration of person working at their computer"
        ></img>
      </div>
    </section>
  );
}

export default Hero;
