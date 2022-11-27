import React from "react";
import graph from "../images/icon-brand-recognition.svg";

function Info() {
  return (
    <section className="flex justify-center items-center bg-infobg p-20">
      <div className="flex justify-center flex-col text-center">
        <h1 className="text-4xl font-bold text-verydarkviolet">
          Advanced Statistics
        </h1>
        <p className="heroSubtext text-gray text-xl leading-5 py-6">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>
      <div className="bg-white rounded-md w-1/5 m-4 p-8">
        <div className="object-left relative -top-20 bubble bg-darkviolet rounded-full w-20 h-20 flex justify-center items-center">
          <img src={graph} aria-hidden="true" alt="graph icon" />
        </div>
        <h1 className="text-lg font-bold text-verydarkviolet">
          Brand Recognition
        </h1>
        <p>
          Boost your brand recognition with each click. Generic links don’t mean
          a thing. Branded links help instil confidence in your content.
        </p>
      </div>
      <div className="object-center bg-white rounded-md w-1/5 m-4 p-8">
        <div className="z-40 relative -top-20 bubble bg-darkviolet rounded-full w-20 h-20 flex justify-center items-center">
          <img src={graph} aria-hidden="true" alt="graph icon" />
        </div>
        <h1 className="text-lg font-bold text-verydarkviolet">
          Detailed Records
        </h1>
        <p className="relative">
          Gain insights into who is clicking your links. Knowing when and where
          people engage with your content helps inform better decisions.
        </p>
      </div>
      <div className="object-right bg-white rounded-md w-1/5 m-4 p-8">
        <div className="relative -top-20 bubble bg-darkviolet rounded-full w-20 h-20 flex justify-center items-center">
          <img src={graph} aria-hidden="true" alt="graph icon" />
        </div>
        <h1 className="text-lg font-bold text-verydarkviolet">
          Fully Customizable
        </h1>
        <p>
          Improve brand awareness and content discoverability through
          customizable links, supercharging audience engagement. Boost your
          links today Get Started
        </p>
      </div>
    </section>
  );
}

export default Info;
