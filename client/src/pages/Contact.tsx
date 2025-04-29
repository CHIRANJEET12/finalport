import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-20 from-black to-green-400 bg-gradient-to-b relative overflow-hidden font-orbitron min-h-screen">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-orbitron text-green-400 text-lightblue mb-4 text-center"
        >
          SYSTEM SETTINGS
        </motion.h2>
        
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-gray-300 text-center max-w-2xl mx-auto mb-12"
        >
          Get in touch for collaborations, opportunities, or just to say hello!
        </motion.p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Direct Message Card */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative bg-black bg-opacity-60 text-green-400 backdrop-blur-lg p-8 rounded-xl border border-purple-600 shadow-lg hover:shadow-2xl transform transition-all ease-in-out duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-r  from-green-300 via-green-500 to-green-400 opacity-20 animate-pulse rounded-xl"></div>
            <h3 className="text-2xl font-orbitron text-lightblue mb-6 relative z-10">DIRECT MESSAGE</h3>
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div>
                <label htmlFor="name" className="block text-green-400 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-white border-purple-600 text-black rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-green-400  mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-white border border-purple-600 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-green-400 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full bg-white border border-purple-600 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                  required
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-green-400 hover:bg-cyan-400 text-black font-orbitron px-6 py-3 rounded-lg text-lg transition-colors flex items-center justify-center gap-2"
              >
                <span>SEND TRANSMISSION</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                </svg>
              </motion.button>
            </form>
          </motion.div>

          {/* Connect Card */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative bg-black bg-opacity-60 text-green-400 backdrop-blur-lg p-8 rounded-xl border border-purple-600 shadow-lg hover:shadow-2xl transform transition-all ease-in-out duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-green-300 via-green-500 to-green-700 opacity-20 animate-pulse rounded-xl"></div>
            <h3 className="text-2xl font-orbitron text-lightblue mb-6 relative z-10">CONNECT</h3>
            <div className="space-y-6 relative z-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-cyan-500">
                  <FaGithub className="text-xl" />
                </div>
                <div>
                  <h4 className="font-orbitron">GitHub</h4>
                  <a
                    href="https://github.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-cyan-500 transition-colors"
                  >
                    github.com/yourusername
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-blue-500">
                  <FaLinkedin className="text-xl" />
                </div>
                <div>
                  <h4 className="font-orbitron">LinkedIn</h4>
                  <a
                    href="https://linkedin.com/in/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-cyan-500 transition-colors"
                  >
                    linkedin.com/in/yourusername
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-cyan-300">
                  <FaTwitter className="text-xl" />
                </div>
                <div>
                  <h4 className="font-orbitron">Twitter</h4>
                  <a
                    href="https://twitter.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-cyan-500 transition-colors"
                  >
                    @yourusername
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-pink-500">
                  <FaEnvelope className="text-xl" />
                </div>
                <div>
                  <h4 className="font-orbitron">Email</h4>
                  <a
                    href="mailto:your.email@example.com"
                    className="text-gray-300 hover:text-cyan-500 transition-colors"
                  >
                    your.email@example.com
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
<div className="space-y-4 p-4">
  {[1, 2, 3].map((_, i) => (
    <Accordion key={i} type="single" collapsible className="border rounded-lg shadow">
      <AccordionItem value={`item-${i + 1}`}>
        <AccordionTrigger className="px-4 py-2 font-medium text-left hover:bg-gray-100 transition">
          Is it accessible?
        </AccordionTrigger>
        <AccordionContent className="px-4 py-2 text-gray-600 bg-gray-50">
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ))}
</div>



    </section>
    
  );
}
