import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const skills = ["Ruby", "JavaScript", "Python", "AWS", "GCP", "DevOps"];

const Hero: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center space-y-8 px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative group"
      >
        <div className="absolute -inset-0.5 bg-blue-100 rounded-full opacity-75 group-hover:opacity-100 blur transition duration-1000 group-hover:duration-200"></div>
        <img
          src="https://avatars.githubusercontent.com/u/23272598"
          alt="Bhushan Khanale"
          className="relative w-40 h-40 rounded-full border-4 border-white shadow-xl object-cover"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="space-y-4 max-w-2xl"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
          Hi, I'm <span className="text-blue-600">Bhushan Khanale</span>
        </h1>
        <h2 className="text-xl md:text-2xl text-gray-600 font-medium">Technical Lead</h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="flex justify-center gap-6"
      >
        <SocialLink
          href="https://linkedin.com/in/bhushan-khanale"
          icon={<Linkedin size={24} />}
          label="LinkedIn"
        />
        <SocialLink href="https://github.com/bkhanale" icon={<Github size={24} />} label="GitHub" />
        <SocialLink
          href="mailto:hello@bhushankhanale.com"
          icon={<Mail size={24} />}
          label="Email"
        />
        <SocialLink
          href="https://twitter.com/BhushanKhanale"
          icon={<Twitter size={24} />}
          label="Twitter"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="flex flex-wrap justify-center gap-2 pt-2"
      >
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 bg-gray-50 text-gray-500 rounded-full text-xs font-medium border border-gray-100 transition-colors"
          >
            {skill}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

const SocialLink = ({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="text-gray-500 hover:text-blue-600 hover:scale-110 transition-all duration-300 bg-white p-2 rounded-full shadow-sm border border-gray-100"
  >
    {icon}
  </a>
);

export default Hero;
