import { motion } from "framer-motion";
import React from "react";
import Layout from "./layout/Layout";
import { useNavigate } from "react-router-dom";
import hero from "/src/assets/foto.png";

export default function Home() {
  const navigate = useNavigate();
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex flex-col items-center justify-center"
      >
        <div className="h-fit w-fit items-center flex flex-col gap-20">
          {/* Animated Circles */}
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="absolute md:w-60 md:h-60 w-45 h-45 bg-[#02B0CF] rounded-full"
              initial={{ scale: 1, opacity: 0.6 }}
              animate={{ scale: 2, opacity: 0.0 }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 1.5,
                repeatDelay: 1,
              }}
            />
          ))}

          {/* Centered Image */}
          <motion.img
            src={hero}
            alt="Centered Image"
            className="relative md:w-60 md:h-60 w-45 h-45 rounded-full object-cover"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />

          {/* Text */}
          <motion.div
            className="flex flex-col items-center justify-center text-center text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <p className="italic text-lg">Hi everyone !, I am</p>
            <p className="text-5xl font-bold text-[#61FAFF]">Nurdiansyah</p>
            <p className="italic text-base mt-3">
              I am an optimistic person, a quick learner of technology, and
              casually friendly.
            </p>
          </motion.div>

          {/* Button */}
          <motion.button
            className="bg-[#02B0CF] hover:border-[#02B0CF] hover:border hover:bg-transparent text-white font-bold py-2 px-4 rounded-[10px] cursor-pointer"
            onClick={() => {
              navigate("/about");
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Let's Explore
          </motion.button>
        </div>
      </motion.div>
    </Layout>
  );
}
