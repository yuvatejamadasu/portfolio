import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const Projects = ({ projects }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-24 px-6 md:px-20 max-w-7xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-16 text-center">Key Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-white/3 border border-white/10 rounded-[2rem] overflow-hidden group cursor-pointer hover:border-purple-500/50 transition-all shadow-2xl shadow-black/50"
            onClick={() => setSelectedProject(project)}
          >
            <div className="relative h-52 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
            </div>
            <div className="p-8">
              <h3 className="text-xl font-bold mb-3">{project.title}</h3>
              <p className="text-slate-400 text-sm mb-6">{project.shortDesc}</p>
              <button className="bg-purple-600/20 text-purple-400 px-6 py-2 rounded-full font-bold border border-purple-500/30 group-hover:bg-purple-600 group-hover:text-white transition-all">View Project</button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-slate-950/90 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-slate-900 border border-white/10 p-8 md:p-12 rounded-[2.5rem] max-w-2xl w-full relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="absolute top-6 right-6 text-slate-400 hover:text-white"
                onClick={() => setSelectedProject(null)}
              >
                <X size={32} />
              </button>
              <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                {selectedProject.title}
              </h3>
              <p className="text-slate-300 text-lg leading-relaxed mb-8">
                {selectedProject.fullDesc}
              </p>
              <button 
                className="bg-purple-600 text-white px-8 py-3 rounded-full font-bold hover:bg-purple-500"
                onClick={() => setSelectedProject(null)}
              >
                Close Details
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
