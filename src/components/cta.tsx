import bgImgInfo from "../images/bg-boost-desktop.svg";

function CTA() {
  return (
    <section
      className="cta flex flex-col justify-center items-center text-center text-content bg-darkviolet p-14"
      style={{
        backgroundImage: `url(${bgImgInfo})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <h1 className="text-content text-4xl font-bold mb-8">
        Boost your links today
      </h1>
      <a
        className="btn btn-primary px-8 text-xl font-bold rounded-full"
        href="#url-form"
      >
        Get Started
      </a>
    </section>
  );
}

export default CTA;
