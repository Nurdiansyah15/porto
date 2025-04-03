import { useLocation, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BookCheck, Computer, Home, Mail, User } from "lucide-react";
import logo from "/src/assets/noordee.png";

const navItems = [
  { name: "Home", path: "/", icon: <Home size={24} /> },
  { name: "About", path: "/about", icon: <User size={24} /> },
  { name: "Resume", path: "/resume", icon: <BookCheck size={24} /> },
  { name: "Project", path: "/project", icon: <Computer size={24} /> },
  { name: "Contact", path: "/contact", icon: <Mail size={24} /> },
];

export default function Layout({ children }) {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen bg-black md:pb-0 pb-16">
      {/* Navbar Atas (Desktop) */}
      <nav className="w-full bg-black shadow-md py-4 text-white relative hidden md:flex">
        <div className="w-[95%] md:w-[70%] mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-xl font-bold">
            <img src={logo} alt="logo" className="w-20" />
          </Link>

          {/* Desktop Navigation */}
          <div className="gap-6 flex">
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
        </div>
      </nav>

      {/* Navbar Bawah (Mobile) */}
      <div className="fixed bottom-0 bg-[#111111] z-50 w-full h-16 flex items-center justify-around border-t border-gray-700 md:hidden">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex flex-col items-center px-4 ${
              location.pathname === item.path ? "text-[#61FAFF]" : "text-white"
            }`}
          >
            <p
              className={`${
                location.pathname === item.path
                  ? "text-[#61FAFF]"
                  : "text-white"
              }`}
            >
              {item.icon}
            </p>
            <span className="text-xs">{item.name}</span>
          </Link>
        ))}
      </div>

      {/* Main Content */}
      <main className="flex-grow flex justify-center relative overflow-hidden w-[95%] md:w-[70%] mx-auto my-3">
        {children}
      </main>
    </div>
  );
}
