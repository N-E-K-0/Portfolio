import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { mobile_apps } from "../data";

export default function MobileApps() {
  return (
    <div>
      {/* mobile apps */}
      <div className="flex flex-col w-full mb-20 mt-10">
        <CodeIcon className="mx-auto inline-block w-10 mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
          Mobile Apps I've Built
        </h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          I have build the websites using HTML, CSS, JavaScript and React
          Native.
        </p>
      </div>

      <div className="flex flex-wrap -m-4">
        {mobile_apps.map((project) => (
          <a
            href={project.link}
            key={project.image}
            className="sm:w-1/2 w-100 h-fit p-4"
          >
            <div className="flex relative">
              <img
                alt="gallery"
                className="absolute inset-0 w-full h-fit object-cover object-center"
                src={project.image}
              />
              <div className="px-8 py-10 relative z-10 w-full h-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                  {project.subtitle}
                </h2>
                <h1 className="title-font text-lg font-medium text-white mb-3">
                  {project.title}
                </h1>
                Technologies:{" "}
                <p className="leading-relaxed">{project.technologies}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
