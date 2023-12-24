import React from "react";

const Hero = ({ urlImg, date, title }) => {
  return (
    <div>
      <div
        className="hero"
        style={{
          backgroundImage: `url(${urlImg})`,
        }}
      >
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">{title}</h1>
            <p className="mb-5">{date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
