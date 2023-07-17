import bgimg from "../images/bg-boost-desktop.svg";

function Hero() {
  return (
    <section
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${bgimg})`,
      }}
    >
      <div className="hero-content text-center text-content">
        <div className="">
          <h1 className="mb-5 text-5xl font-bold">
            More than just shorter links
          </h1>
          <p className="heroSubtext text-gray text-xl py-6">
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </p>
          <a className="btn btn-primary" href="#url-form">
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
