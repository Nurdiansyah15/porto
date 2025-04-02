import { Brush, Code, Server } from "lucide-react";
import React, { useState } from "react";
import Layout from "./layout/Layout";
import { motion } from "framer-motion";
import hero from "/src/assets/foto.png";

const proficiency = [
  {
    icon: <Code size={40} />,
    title: "Frontend Development",
    desc: "Building interactive and responsive UIs using React, Tailwind, and more.",
  },
  {
    icon: <Server size={40} />,
    title: "Backend Development",
    desc: "Creating robust APIs and backend services with Golang and Node.js.",
  },
  {
    icon: <Brush size={40} />,
    title: "UI/UX Design",
    desc: "Designing user-friendly interfaces with a focus on aesthetics and usability.",
  },
];

const skills = {
  languages: [
    { id: 1, name: "Golang", image: "https://fakeimg.pl/600x400" },
    { id: 2, name: "JavaScript", image: "https://fakeimg.pl/600x400" },
    { id: 3, name: "JavaScript", image: "https://fakeimg.pl/600x400" },
    { id: 4, name: "JavaScript", image: "https://fakeimg.pl/600x400" },
    { id: 5, name: "JavaScript", image: "https://fakeimg.pl/600x400" },
  ],
  frameworks: [
    { id: 3, name: "React", image: "https://fakeimg.pl/600x400" },
    { id: 4, name: "Next.js", image: "https://fakeimg.pl/600x400" },
  ],
};

export default function About() {
  const [openText, setOpenText] = useState(false);
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0, y: 50 }} // Mulai dari transparan dan sedikit di bawah
        animate={{ opacity: 1, y: 0 }} // Muncul perlahan ke posisi normal
        exit={{ opacity: 0, y: 50 }} // Menghilang dengan efek turun
        transition={{ duration: 0.5, ease: "easeInOut" }} // Efek transisi smooth
        className="bg-[#161616] rounded-[10px] w-full p-5"
      >
        {/* Title */}
        <div id="title" className="flex gap-2">
          <p className="text-white text-2xl font-bold">About Me</p>
          <div className="h-2 w-2 rounded-full bg-[#61FAFF]"></div>
        </div>

        {/* Content */}
        <div className="w-full flex flex-col gap-2 items-center my-10">
          <motion.img
            src={hero}
            alt="foto"
            className="w-40 h-40 rounded-full"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
          <p className="text-white text-2xl font-bold">Nurdiansyah</p>
          <p className="text-gray-400 text-xl">
            Brebes, Central Java, Indonesia
          </p>
          <motion.p
            className={`text-white text-md md:w-[80%] text-center ${
              !openText && "line-clamp-3"
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            I am an optimistic person, a quick learner of technology, and
            casually friendly. I have been professionally immersed in the world
            of programming since I started college in 2019. I have explored
            various technologies related to being a full-stack developer. I
            enjoy creating software applications because they provide real
            benefits to many people in today's world.
          </motion.p>
          <motion.p
            className={`text-gray-400 cursor-pointer md:hidden ${
              openText && "hidden"
            }`}
            onClick={() => {
              setOpenText(true);
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Read More
          </motion.p>

          {/* Proficiency Section */}
          <motion.div
            className="w-full md:p-5 text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="text-xl font-bold mb-5">Proficiency</p>

            {/* Skill Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {proficiency.map((skill, index) => (
                <motion.div
                  key={index}
                  className="relative flex items-center gap-4 p-4 rounded-lg bg-[#161616] overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <div
                    className="absolute inset-0 rounded-lg border-2 border-transparent"
                    style={{
                      background:
                        "linear-gradient(to right, #ffffff, #61FAFF) border-box",
                      WebkitMask:
                        "linear-gradient(#000 0 0) padding-box, linear-gradient(#000 0 0)",
                      WebkitMaskComposite: "destination-out",
                      maskComposite: "exclude",
                    }}
                  ></div>

                  <div className="text-[#61FAFF]">{skill.icon}</div>
                  <div>
                    <p className="text-lg font-semibold">{skill.title}</p>
                    <p className="text-sm text-gray-300">{skill.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            className="w-full md:p-5 text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <p className="text-xl font-bold mb-5">Skills</p>

            <div className="flex flex-col gap-6">
              {Object.entries(skills).map(([category, items], i) => (
                <motion.div
                  key={category}
                  className="relative flex flex-col gap-4 p-4 rounded-lg bg-[#161616] overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 * i }}
                >
                  <div
                    className="absolute inset-0 rounded-lg border-2 border-transparent"
                    style={{
                      background:
                        "linear-gradient(to right, #ffffff, #61FAFF) border-box",
                      WebkitMask:
                        "linear-gradient(#000 0 0) padding-box, linear-gradient(#000 0 0)",
                      WebkitMaskComposite: "destination-out",
                      maskComposite: "exclude",
                    }}
                  ></div>
                  <p className="text-lg font-semibold capitalize">{category}</p>
                  <div className="flex gap-2 flex-wrap">
                    {items.map((skill) => (
                      <motion.img
                        key={skill.id}
                        src={skill.image}
                        alt={skill.name}
                        className="w-20 rounded-md"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      />
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </Layout>
  );
}
