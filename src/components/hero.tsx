// import topimg from "../images/illustration-working.svg";

function Hero() {
  return (
    <section className="mb-40 flex flex-col md:flex-row md:justify-between lg:justify-center">
      <div className="m-auto max-w-xl text-center order-2 md:order-1 md:text-left md:ml-32">
        <h1 className="text-5xl font-bold text-verydarkviolet leading-20 md:text-7xl">
          More than just shorter links
        </h1>
        <p className="heroSubtext text-gray text-xl py-6">
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <button className="bg-cyan px-10 py-3 text-white text-lg font-bold rounded-full">
          Get Started
        </button>
      </div>

      <div className="order-1 md:order-2 -mr-28 ml-10 md:-mr-40 mb-8 md:mb-0">
        {/* <img
          src={topimg}
          alt="Illustration of person working at their computer"
        ></img> */}
      </div>
    </section>
  );
}

export default Hero;
