import SingleProject from "./SingleProject";
import type { ProjectProps } from "./types";
import { useState } from "react";

function Project({ projects }: ProjectProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = [
    "All",
    ...Array.from(new Set(projects.map((p) => p.category))),
  ];
  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);
  return (
    <>
      <div id="Projects" className="scroll-mt-24">
        <h1 className="text-3xl font-bold text-teal-400 mb-2">Projects</h1>
        <p className="mb-4">Here are some of the projects I have worked on.</p>
      </div>
      <div className="flex gap-4 mb-6 flex-wrap">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full border transition duration-300 ${
              selectedCategory === category
                ? "bg-teal-500 text-white border-teal-500"
                : "bg-slate-800 text-gray-300 border-gray-600 hover:bg-slate-700 hover:text-white"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-28 py-4">
        {filteredProjects.map((proj, index) => (
          <SingleProject key={index} {...proj} />
        ))}
      </div>
    </>
  );
}

export default Project;
