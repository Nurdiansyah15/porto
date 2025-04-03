import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Github, ExternalLink } from "lucide-react";
import { EllipsisVertical } from "lucide-react";
import Layout from "./layout/Layout";

export default function Project() {
  const [activeProject, setActiveProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);

  const category = ["all category", "backend", "frontend"];

  const projects = [
    {
      id: 1,
      title: "Project One",
      description:
        "This is a brief description of the project, including features and purpose.",
      techStack: ["React", "Tailwind", "Framer Motion"],
      image: "https://fakeimg.pl/600x400",
      github: "https://github.com/Nurdiansyah15/porto",
      deploy: "https://github.com/Nurdiansyah15/porto",
      category: "backend",
    },
    {
      id: 2,
      title: "Project Two",
      description:
        "Another cool project with interesting technology stack and functionalities.",
      techStack: ["Next.js", "Tailwind", "Vercel"],
      image: "https://fakeimg.pl/600x400",
      github: "https://github.com/Nurdiansyah15/porto",
      deploy: "",
      category: "frontend",
    },
    {
      id: 3,
      title: "Project Three",
      description:
        "Another cool project with interesting technology stack and functionalities.",
      techStack: ["Next.js", "Tailwind", "Vercel"],
      image: "https://fakeimg.pl/600x400",
      github: "https://github.com/Nurdiansyah15/porto",
      deploy: "",
      category: "backend",
    },
  ];

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
          {[...projects]
            .filter((item) => {
              if (activeCategory === "all category" || !activeCategory) {
                return true;
              } else {
                return item.category === activeCategory;
              }
            })
            .map((project) => (
              <motion.div
                key={project.id}
                className="relative gap-4 p-4 rounded-lg bg-[#161616] overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                {/* Border Gradient */}
                <div
                  className="absolute inset-0 rounded-lg border-2 border-transparent pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(to right, #ffffff, #61FAFF) border-box",
                    WebkitMask:
                      "linear-gradient(#000 0 0) padding-box, linear-gradient(#000 0 0)",
                    WebkitMaskComposite: "destination-out",
                    maskComposite: "exclude",
                  }}
                ></div>

                <img src={project.image} alt="" className="rounded-md" />

                <div className="flex justify-between items-start mt-3">
                  <div>
                    <p className="text-white text-xl font-semibold">
                      {project.title}
                    </p>
                    <p className="text-white text-md line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                  <div
                    className="text-white cursor-pointer"
                    onClick={() => {
                      setActiveProject(project);
                    }}
                  >
                    <EllipsisVertical />
                  </div>
                </div>
              </motion.div>
            ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {activeProject && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveProject(null)}
            >
              <motion.div
                className="bg-[#1c1c1c] p-6 rounded-lg shadow-lg max-w-md w-full relative"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Tombol Close */}
                <button
                  className="absolute top-4 right-4 text-gray-400 hover:text-white"
                  onClick={() => setActiveProject(null)}
                >
                  <X size={20} />
                </button>

                <h2 className="text-white text-2xl font-bold mb-2">
                  {activeProject.title}
                </h2>
                <p className="text-gray-300 mb-4">
                  {activeProject.description}
                </p>

                <h3 className="text-white text-lg font-semibold">
                  Tech Stack:
                </h3>
                <ul className="text-gray-400 mb-4">
                  {activeProject.techStack.map((tech) => (
                    <li key={tech}>- {tech}</li>
                  ))}
                </ul>

                {/* Link GitHub & Deploy */}
                <div className="flex gap-4">
                  {activeProject.github && (
                    <a
                      href={activeProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-white"
                    >
                      <Github size={20} />
                      <span>GitHub</span>
                    </a>
                  )}

                  {activeProject.deploy && (
                    <a
                      href={activeProject.deploy}
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
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </Layout>
  );
}
