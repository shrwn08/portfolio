import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import React from 'react'
// import { Linkedin, X, github, instagram, send} from 'lucide-react';

function Home({isDark}) {
  return (
    <section id="home" className={`min-h-screen flex items-center pt-20 ${isDark ? 'bg-gradient-to-br from-gray-900 to-gray-800' : 'bg-gradient-to-br from-white to-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className={`text-xl ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Hey! It's</h3>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-500 to-yellow-600 bg-clip-text text-transparent">
              Shrawan Kumar Singh
            </h1>
            <p className="text-2xl">
              I'm a <span className="text-purple-500 font-semibold">Web Developer</span>
            </p>
            <p className={`text-xl ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Full Stack Developer</p>
            
            <div className="flex gap-4">
              
                <a
                  href="#"
                  className={`w-12 h-12 rounded-full flex items-center justify-center ${isDark ? 'bg-gray-800 hover:bg-purple-600' : 'bg-gray-100 hover:bg-purple-500'} hover:text-white transition-all hover:-translate-y-1`}
                >
                  <FaLinkedinIn className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className={`w-12 h-12 rounded-full flex items-center justify-center ${isDark ? 'bg-gray-800 hover:bg-purple-600' : 'bg-gray-100 hover:bg-purple-500'} hover:text-white transition-all hover:-translate-y-1`}
                >
                  <FaXTwitter className="w-5 h-5" />
                </a>
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="#about" className="px-8 py-3 bg-gradient-to-r from-purple-500 to-yellow-600 text-white rounded-full font-semibold hover:shadow-lg hover:-translate-y-1 transition-all">
                About Me
              </a>
              <a href="#" className={`px-8 py-3 border-2 border-purple-500 text-purple-500 rounded-full font-semibold hover:bg-purple-500 hover:text-white transition-all`}>
                Download Resume
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-purple-500 shadow-2xl animate-float">
              <div className={`w-full h-full ${isDark ? 'bg-gray-700' : 'bg-gray-300'} flex items-center justify-center text-6xl`}>
                👨‍💻
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )

}

export default Home