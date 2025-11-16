import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className=" lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-top rounded"
            alt="hero"
            // src="./image_Samiul_Islam.svg"
            src="./image-visa-tps.png"
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Samiul.
            <br className="hidden lg:inline-block" />I love to build amazing
            apps.
          </h1>
          <p className="mb-8 leading-relaxed">
            I’m a results-oriented Full-Stack Developer with 4+ years of experience delivering scalable web and mobile applications using JavaScript, TypeScript, React, Node.js, and Python. I bring a strong balance of technical expertise and teamwork, having built solutions involving Salesforce APIs, real-time systems, and micro-services. Passionate about clean, maintainable code and agile collaboration, I thrive in diverse, fast-paced environments. I’m currently expanding my skills in Docker, CI/CD, and cloud deployment to align with modern U.S. engineering practices. My goal is to contribute to innovative teams that value quality, efficiency, and continuous learning while driving meaningful business outcomes.          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Let's connect
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Past Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
