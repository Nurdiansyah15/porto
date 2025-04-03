import { motion } from "framer-motion";
import { ExternalLink, Github, X } from "lucide-react";
import { useState } from "react";
import Layout from "./layout/Layout";
import { category, projects } from "../data/data";

export default function Project() {
  const [activeProject, setActiveProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <Layout>
      <motion.div
        className="bg-[#161616] rounded-[10px] w-full p-5 space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div id="title" className="flex gap-2">
          <p className="text-white text-2xl font-bold">Projects</p>
          <div className="h-2 w-2 rounded-full bg-[#61FAFF]"></div>
        </div>
        <div className="flex gap-2">
          {category.map((item) => (
            <div
              key={item}
              onClick={() => setActiveCategory(item)}
              className={`border-1 p-2 rounded-[10px] cursor-pointer hover:text-[#61FAFF] 
              ${activeCategory === item ? "text-[#61FAFF]" : "text-white"}`}
            >
              {item
                .toLowerCase()
                .split(" ")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ")}
            </div>
          ))}
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-3">
          {projects
            .filter(
              (item) =>
                activeCategory === "all category" ||
                !activeCategory ||
                item.category === activeCategory
            )
            .map((project) => (
              <motion.div
                key={project.id}
                className={`relative gap-4 p-4 rounded-lg border border-gray-600 cursor-pointer bg-[#161616] overflow-hidden transition-all duration-300`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                layout
                onClick={() =>
                  setActiveProject(
                    activeProject?.id === project.id ? null : project
                  )
                }
              >
                <img src={project.image} alt="" className="rounded-md w-full" />

                <div className="flex justify-between items-start mt-3">
                  <div>
                    <p className="text-white text-xl font-semibold">
                      {project.title}
                    </p>
                    <p className="text-gray-400 text-md line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                  <div className="text-white cursor-pointer">
                    {activeProject?.id === project.id ? (
                      <X size={20} />
                    ) : (
                      <ExternalLink size={20} />
                    )}
                  </div>
                </div>

                {/* Detail hanya muncul jika project aktif */}
                {activeProject?.id === project.id && (
                  <motion.div
                    className="absolute left-0 top-0 w-full h-full bg-[#1c1c1c] bg-opacity-90 backdrop-blur-md p-4 rounded-md flex flex-col shadow-md overflow-scroll"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <button
                      className="absolute top-3 right-3 text-gray-400 hover:text-white"
                      onClick={() => setActiveProject(null)}
                    >
                      <X size={20} />
                    </button>

                    <h3 className="text-white text-lg font-semibold mb-2">
                      Description:
                    </h3>
                    <ul className="text-gray-400 mb-3 text-justify">
                      {project.description}
                    </ul>

                    <h3 className="text-white text-lg font-semibold mb-2 ">
                      Tech Stack:
                    </h3>
                    <ul className="text-gray-400 mb-3 ">
                      {project.techStack.map((tech) => (
                        <li key={tech}>- {tech}</li>
                      ))}
                    </ul>

                    <div className="flex gap-4">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-gray-400 hover:text-white"
                        >
                          <Github size={20} />
                          <span>GitHub</span>
                        </a>
                      )}
                      {project.deploy && (
                        <a
                          href={project.deploy}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-gray-400 hover:text-white"
                        >
                          <ExternalLink size={20} />
                          <span>Live Demo</span>
                        </a>
                      )}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
        </div>

        {/* Modal */}
      </motion.div>
    </Layout>
  );
}
