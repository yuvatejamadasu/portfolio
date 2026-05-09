import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Hero = ({ data }) => {
  return (
    <section id="home" className="h-screen flex flex-col justify-center items-center text-center px-6 relative overflow-hidden bg-[radial-gradient(circle_at_top_right,rgba(124,58,237,0.15),transparent),radial-gradient(circle_at_bottom_left,rgba(14,165,233,0.1),transparent)]">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight"
      >
        Hi, I'm <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">{data.name}</span>
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-slate-400 text-lg md:text-xl max-w-2xl mb-10"
      >
        {data.bio}
      </motion.p>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <Link 
          to="contact" 
          smooth={true} 
          className="bg-purple-600 text-white px-10 py-4 rounded-full font-bold shadow-xl shadow-purple-500/30 hover:scale-105 hover:bg-purple-500 transition-all cursor-pointer"
        >
          Connect with Me
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;
