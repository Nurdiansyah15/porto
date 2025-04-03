import React from "react";
import { motion } from "framer-motion";
import { Mail, Instagram, MessageCircle } from "lucide-react";
import Layout from "./layout/Layout";

export default function Contact() {
  return (
    <Layout>
      <motion.div
        className="flex flex-col items-center justify-center text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <h1 className="text-4xl font-bold mb-4">Let's Collaborate!</h1>
        <p className="text-gray-400 text-lg mb-6">
          Feel free to reach out and start a conversation.
        </p>

        <div className="space-y-4">
          <motion.a
            href="https://wa.me/6283113867425"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-[#161616] p-4 rounded-lg shadow-md hover:bg-[#1c1c1c] transition"
            whileHover={{ scale: 1.05 }}
          >
            <MessageCircle size={24} className="text-green-400" />
            <span>WhatsApp: +62 831-1386-7425</span>
          </motion.a>

          <motion.a
            href="https://instagram.com/mr_nurdiansyah"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-[#161616] p-4 rounded-lg shadow-md hover:bg-[#1c1c1c] transition"
            whileHover={{ scale: 1.05 }}
          >
            <Instagram size={24} className="text-pink-400" />
            <span>Instagram: @mr_nurdiansyah</span>
          </motion.a>

          <motion.a
            href="mailto:nurdinurdiansyah15@gmail.com"
            className="flex items-center gap-3 bg-[#161616] p-4 rounded-lg shadow-md hover:bg-[#1c1c1c] transition"
            whileHover={{ scale: 1.05 }}
          >
            <Mail size={24} className="text-blue-400" />
            <span>Email: nurdinurdiansyah15@gmail.com</span>
          </motion.a>
        </div>
      </motion.div>
    </Layout>
  );
}
