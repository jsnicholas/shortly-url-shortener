import React from "react";
import URLform from "./url-form";
import graph from "../images/icon-brand-recognition.svg";
import records from "../images/icon-detailed-records.svg";
import custom from "../images/icon-fully-customizable.svg";

function Info() {
  return (
    <section className="bg-infobg pb-20">
      <div clasName="flex flex-col">
        <div className="-mt-24">
          <URLform />
        </div>
        {/* Section Header */}
        <div className="self-auto text-center m-20">
          <h1 className="text-4xl font-bold text-verydarkviolet">
            Advanced Statistics
          </h1>
          <p className="text-gray text-xl leading-loose py-6">
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>
      </div>

      {/* Info Boxes Container */}
      <div className="flex mt-8 justify-center">
        {/* Brand Rec Box*/}
        <div className="w-1/4 bg-white rounded-md m-4 p-8">
          <div className="bubble -mt-20 p-6 rounded-full bg-darkviolet w-20 h-20">
            <img src={graph} className="" aria-hidden="true" alt="graph icon" />
          </div>
          <h1 className="mt-3 text-lg font-bold text-verydarkviolet">
            Brand Recognition
          </h1>
          <p>
            Boost your brand recognition with each click. Generic links don’t
            mean a thing. Branded links help instil confidence in your content.
          </p>
        </div>

        {/* Records Box*/}

        <div className="w-1/4 bg-white rounded-md m-4 p-8">
          <div className="bubble -mt-20 p-6 rounded-full bg-darkviolet w-20 h-20">
            <img
              src={records}
              className=""
              aria-hidden="true"
              alt="graph icon"
            />
          </div>
          <h1 className="mt-3 text-lg font-bold text-verydarkviolet">
            Detailed Records
          </h1>
          <p>
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </p>
        </div>

        {/* Customize Box */}

        <div className="w-1/4 bg-white rounded-md p-8 m-4">
          <div className="bubble -mt-20 p-6 rounded-full bg-darkviolet w-20 h-20">
            <img
              src={custom}
              className=""
              aria-hidden="true"
              alt="graph icon"
            />
          </div>
          <h1 className="mt-3 text-lg font-bold text-verydarkviolet">
            Fully Customizable
          </h1>
          <p>
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement. Boost your
            links today Get Started
          </p>
        </div>
      </div>
    </section>
  );
}

export default Info;
