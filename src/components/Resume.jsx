import React from "react";
import { motion } from "framer-motion";
import Layout from "./layout/Layout";

export default function Resume() {
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-[#161616] rounded-[10px] w-full p-5 md:space-y-0 space-y-4"
      >
        <div id="title" className="flex gap-2">
          <p className="text-white text-2xl font-bold">Resume</p>
          <div className="h-2 w-2 rounded-full bg-[#61FAFF]"></div>
        </div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full md:p-5 text-white"
        >
          <p className="text-xl font-bold mb-5">Educations</p>
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              className="relative flex items-center gap-4 p-4 rounded-lg bg-[#161616] overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
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

              <div className="text-[#61FAFF]">
                <img src="../src/assets/undip.png" alt="" className="w-20" />
              </div>
              <div>
                <p className="text-lg font-bold">Universitas Diponegoro</p>
                <p className="text-sm text-gray-300">
                  Semarang, August 2019 - April 2024
                </p>
                <p className="text-sm text-white mt-1">
                  Bachelor of Science - GPA : 3.40
                </p>
                <p className="text-sm text-white">Physics</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Training & Certification Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="w-full md:p-5 text-white"
        >
          <p className="text-xl font-bold mb-5">Training & Certifications</p>
          <motion.div
            className="relative flex flex-col gap-4 p-4 rounded-lg bg-[#161616] overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
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

            <div className="flex gap-4">
              <div className="text-[#61FAFF]">
                <img src="../src/assets/enigma.png" alt="" className="w-20" />
              </div>
              <div>
                <p className="text-lg font-bold">Enigma Camp</p>
                <p className="text-sm text-gray-300">
                  South Jakarta, June - September 2024
                </p>
                <a
                  href="https://drive.google.com/file/d/1jNrBY1kFOG_P3s12DbWKBBZ8_ZiLXMER/view?usp=sharing"
                  target="_blank"
                >
                  <p className="text-sm text-blue-400 flex underline">
                    Certificate
                  </p>
                </a>
              </div>
            </div>
            <div className="flex flex-col">
              <p>Skills & Technologies Learned</p>
              <ul className="list-disc pl-5 space-y-2 text-white">
                <li>
                  <strong>Basic Programming and Algorithms</strong> –
                  Understanding programming logic and writing efficient code.
                </li>
                <li>
                  <strong>Data Structures</strong> – Managing data optimally in
                  various formats based on application needs.
                </li>
                <li>
                  <strong>Java & Spring Boot</strong> – Developing modular,
                  scalable, and maintainable backend applications.
                </li>
                <li>
                  <strong>JavaScript & React</strong> – Building interactive and
                  responsive web and mobile user interfaces.
                </li>
                <li>
                  <strong>SQL</strong> – Efficiently managing and manipulating
                  data in relational databases.
                </li>
                <li>
                  <strong>Golang</strong> – Developing high-performance
                  applications with a simple design.
                </li>
                <li>
                  <strong>Docker</strong> – Running and distributing
                  applications in portable and efficient containers.
                </li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </Layout>
  );
}
