import type { ProjectData } from "./types";

function SingleProject({ name, description, link }: ProjectData) {
    const images = import.meta.glob("../assets/*.png", {
      eager: true,
      as: "url",
    });


  return (
    <>
      <div className="p-4 border border-slate-700 rounded-lg shadow-md transition duration-300 bg-slate-900 hover:bg-teal-700 hover:shadow-lg text-white">
        <img
          src={
            images[`../assets/${name.toLowerCase()}.png`]
              ? images[`../assets/${name.toLowerCase()}.png`]
              : images["../assets/default.png"]
          }
          alt={name}
          className="w-48 h-48 object-cover mb-4 rounded mx-auto"
        />
        <h2 className="text-xl font-semibold mb-2 text-center">{name}</h2>
        <p className="text-gray-300 mb-4 max-w-[400px] mx-auto text-center">
          {description}
        </p>
        <div className="text-center">
          <a
            href={link}
            className="text-teal-400 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project
          </a>
        </div>
      </div>
    </>
  );
}

export default SingleProject;