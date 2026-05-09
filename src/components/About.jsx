import React from 'react';
import { motion } from 'framer-motion';
import profileImg from '../assets/yuva.png';

const About = ({ data }) => {
  return (
    <section id="about" className="py-24 px-6 md:px-20 max-w-7xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-16 text-center">About Me</h2>
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative group"
        >
          <div className="absolute -inset-2 bg-purple-600 rounded-[2rem] blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
          <img 
            src={profileImg} 
            alt={data.name} 
            className="relative rounded-[2rem] w-full max-w-md mx-auto aspect-[1/1.2] object-cover shadow-2xl transition-all duration-700"
          />
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h3 className="text-2xl font-bold text-purple-400">{data.role}</h3>
          <p className="text-slate-400 text-lg leading-relaxed">{data.detailedBio}</p>
          <div className="pt-6">
            <a href="#skills" className="text-white border-b-2 border-purple-500 pb-1 font-semibold hover:text-purple-400 hover:border-purple-400 transition-all">Technical Skills</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
