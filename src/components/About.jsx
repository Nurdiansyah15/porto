import { motion } from "framer-motion";
import { Code, Server } from "lucide-react";
import React, { useState } from "react";
import { skills } from "../data/data";
import Layout from "./layout/Layout";
import hero from "/src/assets/foto.png";

export const proficiency = [
  {
    icon: <Code size={40} />,
    title: "Frontend Development",
    desc: "Experienced in building responsive and interactive UIs using React.js and Vue.js, with a strong focus on performance, state management, and component-based architecture.",
  },
  {
    icon: <Server size={40} />,
    title: "Backend Development",
    desc: "Skilled in developing scalable APIs and backend systems using Go (Gin), PHP (Laravel), and Java (Spring Boot), handling authentication, database management, and server-side logic.",
  },
];

export default function About() {
  const [openText, setOpenText] = useState(false);
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0, y: 50 }} // Mulai dari transparan dan sedikit di bawah
        animate={{ opacity: 1, y: 0 }} // Muncul perlahan ke posisi normal
        exit={{ opacity: 0, y: 50 }} // Menghilang dengan efek turun
        transition={{ duration: 0.5, ease: "easeInOut" }} // Efek transisi smooth
        className="bg-[#111111] rounded-[10px] w-full p-5"
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
            <div className="grid md:grid-cols-2 gap-6">
              {proficiency.map((skill, index) => (
                <motion.div
                  key={index}
                  className="relative flex items-center gap-4 p-4 rounded-lg border-1 border-gray-600"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
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
                  className="relative flex flex-col gap-4 p-4 rounded-lg border-1 border-gray-600"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 * i }}
                >
                  <p className="text-lg font-semibold capitalize">{category}</p>
                  <div className="flex gap-2 flex-wrap">
                    {items.map((skill) => (
                      <motion.img
                        key={skill.id}
                        src={skill.image}
                        alt={skill.name}
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
