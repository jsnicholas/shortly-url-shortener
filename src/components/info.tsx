import graph from "../images/icon-brand-recognition.svg";
import records from "../images/icon-detailed-records.svg";
import custom from "../images/icon-fully-customizable.svg";

function Info() {
  return (
    <section className="pb-20">
      <div className="flex flex-col">
        {/* Section Header */}
        <div className="self-auto text-center mx-6 md:m-20">
          <h1 className="text-3xl md:text-4xl font-bold">
            Advanced Statistics
          </h1>
          <p className="text-gray text-xl leading-loose py-6">
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-4 items-center justify-center mx-8">
        {/* Info Boxes Container */}
        <div className="md:h-80 card w-full md:w-1/3 bg-white rounded-md p-8 items-center text-neutral">
          <img
            src={graph}
            className="w-10"
            aria-hidden="true"
            alt="graph icon"
          />
          <h1 className="mt-3 text-lg font-bold mb-4">Brand Recognition</h1>
          <p>
            Boost your brand recognition with each click. Branded links help
            instil confidence in your content.
          </p>
        </div>

        {/* Records Box*/}

        <div className="md:h-80 card w-full md:w-1/3 bg-white rounded-md p-8 text-neutral items-center">
          <img
            src={records}
            className="w-10"
            aria-hidden="true"
            alt="graph icon"
          />
          <h1 className="mt-3 text-lg font-bold mb-4">Detailed Records</h1>
          <p>
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </p>
        </div>

        {/* Customize Box */}

        <div className="md:h-80 card w-full md:w-1/3 bg-white rounded-md p-8 text-neutral items-center">
          <img
            src={custom}
            className="w-10"
            aria-hidden="true"
            alt="graph icon"
          />
          <h1 className="mt-3 text-lg font-bold mb-4">Fully Customizable</h1>
          <p>
            Improve brand awareness and content discoverability through
            customizable links.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Info;
