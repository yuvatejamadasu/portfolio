import React from 'react';
import { motion } from 'framer-motion';

const Skills = ({ skills }) => {
  return (
    <section id="skills" className="py-24 px-6 md:px-20 bg-white/2">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-16 text-center">Core Competencies</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-purple-600/10 hover:border-purple-600/50 transition-all group"
          >
            <h4 className="text-xl font-bold text-purple-300 mb-2 group-hover:text-purple-400">{skill.name}</h4>
            <p className="text-slate-400 text-sm">{skill.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
