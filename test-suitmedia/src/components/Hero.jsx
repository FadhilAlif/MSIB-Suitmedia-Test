const Hero = () => {
  return (
    <div
      className="banner d-flex align-items-center justify-content-center overflow-hidden"
      style={{
        backgroundImage: "url('/banner.jpg')",
        clipPath: "polygon(0 0, 100% 0, 100% 75%, 0 100%)",
        height: "400px",
      }}
    >
      <div className="text-center text-white position-relative">
        <h1 className="display-5 fw-bold">Ideas</h1>
        <p className="lead">Where all our great things begin</p>
      </div>
    </div>
  );
};

export default Hero;
