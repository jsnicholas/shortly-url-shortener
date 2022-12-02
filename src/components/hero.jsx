import React from "react";
import topimg from "../images/illustration-working.svg";

function Hero() {
  return (
    <section className="flex justify-center pb-20">
      <div className="w-2/4 mx-20">
        <h1 className="text-7xl font-bold text-verydarkviolet leading-10">
          More than just shorter links
        </h1>
        <p className="heroSubtext text-gray text-xl py-6">
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

      <div className="-mr-20">
        <img
          src={topimg}
          alt="Illustration of person working at their computer"
        ></img>
      </div>
    </section>
  );
}

export default Hero;
