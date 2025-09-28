import React from 'react'

function About({isDark}) {
  return (
    <section id="about" className={`py-20 ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-500 to-yellow-600 bg-clip-text text-transparent">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <h3 className="text-3xl font-bold">I'm Shrawan</h3>
            <h4 className="text-xl text-purple-500 font-semibold">Full Stack Developer</h4>
            <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} leading-relaxed`}>
              Passionate web developer with expertise in modern technologies. I create responsive, user-friendly applications that deliver exceptional user experiences. My journey in web development spans across frontend and backend technologies, always striving for excellence and innovation in every project I undertake.
            </p>
            <a href="#" className="inline-block px-8 py-3 bg-gradient-to-r from-purple-500 to-yellow-600 text-white rounded-full font-semibold hover:shadow-lg hover:-translate-y-1 transition-all">
              Read More
            </a>
          </div>
          <div className="flex justify-center">
            <div className={`w-80 h-80 rounded-3xl overflow-hidden border-4 border-purple-500 shadow-2xl ${isDark ? 'bg-gray-700' : 'bg-gray-300'} flex items-center justify-center text-6xl`}>
              🚀
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About