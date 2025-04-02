import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu } from "lucide-react";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Resume", path: "/resume" },
  { name: "Contact", path: "/contact" },
];

export default function Layout({ children }) {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-[#000000]">
      {/* Navbar */}
      <nav className="w-full bg-[#000] shadow-md py-4 text-white relative">
        <div className="w-[95%] md:w-[80%] mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-xl font-bold">
            <img src="/src/assets/noordee.png" alt="logo" className="w-20" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="relative font-medium"
              >
                {item.name}
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 h-1 w-full rounded-2xl bg-[#61FAFF]"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
            <Menu size={24} />
          </button>
        </div>

        {/* Mobile Navigation with Smooth Transition */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute top-full left-0 w-full bg-black text-white shadow-lg z-50 flex flex-col gap-4 py-4"
            >
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="px-6 py-2 font-medium"
                >
                  {item.name}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content */}
      <main className="flex-grow flex justify-center relative overflow-hidden w-[95%] md:w-[80%] mx-auto my-3">
        {children}
      </main>
    </div>
  );
}
