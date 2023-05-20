import bgimg from "../images/bg-boost-desktop.svg";

function Hero() {
  return (
    <section
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${bgimg})`,
      }}
    >
      <div className="hero-content text-center text-neutral-content">
        <div className="">
          <h1 className="mb-5 text-5xl font-bold">
            More than just shorter links
          </h1>
          <p className="heroSubtext text-gray text-xl py-6">
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
