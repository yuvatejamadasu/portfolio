import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone } from 'lucide-react';

const Contact = ({ data }) => {
  return (
    <section id="contact" className="py-24 px-6 md:px-20">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-16 text-center">Get In Touch</h2>
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto grid md:grid-cols-5 gap-10 bg-white/3 border border-white/10 p-8 md:p-16 rounded-[3rem]"
      >
        <div className="md:col-span-2 space-y-10">
          <h3 className="text-3xl font-bold">Contact Info</h3>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-purple-600/20 rounded-2xl flex items-center justify-center text-purple-400">
                <MapPin size={24} />
              </div>
              <span className="text-slate-300 font-medium">{data.location}</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-purple-600/20 rounded-2xl flex items-center justify-center text-purple-400">
                <Mail size={24} />
              </div>
              <span className="text-slate-300 font-medium">{data.email}</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-purple-600/20 rounded-2xl flex items-center justify-center text-purple-400">
                <Phone size={24} />
              </div>
              <span className="text-slate-300 font-medium">{data.phone}</span>
            </div>
          </div>
        </div>

        <form className="md:col-span-3 space-y-6" onSubmit={(e) => { e.preventDefault(); alert("Message sent successfully!"); }}>
          <div className="grid grid-cols-2 gap-6">
            <input type="text" placeholder="Name" className="bg-white/5 border border-white/10 p-4 rounded-xl outline-none focus:border-purple-500 transition-all w-full col-span-2 sm:col-span-1" required />
            <input type="email" placeholder="Email" className="bg-white/5 border border-white/10 p-4 rounded-xl outline-none focus:border-purple-500 transition-all w-full col-span-2 sm:col-span-1" required />
          </div>
          <textarea placeholder="Message" rows="5" className="bg-white/5 border border-white/10 p-4 rounded-xl outline-none focus:border-purple-500 transition-all w-full" required></textarea>
          <button className="w-full bg-purple-600 text-white py-4 rounded-xl font-bold shadow-lg shadow-purple-500/20 hover:bg-purple-500 transition-all">Send Message</button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
