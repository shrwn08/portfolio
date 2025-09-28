const Certifications = ({ isDark }) => {
  const certifications = [
    {
      icon: '⚛️',
      title: 'React Developer Certification',
      description: 'Advanced React development skills including hooks, context, and state management.'
    },
    {
      icon: '🟢',
      title: 'Node.js Certification',
      description: 'Backend development with Node.js, Express, and RESTful API design.'
    },
    {
      icon: '🍃',
      title: 'MongoDB Certification',
      description: 'Database design, optimization, and advanced MongoDB operations.'
    },
    {
      icon: '⚛️',
      title: 'Full Stack Development',
      description: 'Full Stack Development using the tech stacks MongoDB React Express NodeJS'
    }
  ];

  return (
    <section id="certifications" className={`py-20 ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-500 to-yellow-600 bg-clip-text text-transparent">
          Certifications
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, idx) => (
            <div key={idx} className={`${isDark ? 'bg-gray-900' : 'bg-white'} p-8 rounded-xl shadow-lg text-center hover:-translate-y-3 transition-all border-2 border-transparent hover:border-purple-500`}>
              <div className="text-5xl mb-4">{cert.icon}</div>
              <h3 className="text-xl font-bold mb-3">{cert.title}</h3>
              <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} mb-6`}>{cert.description}</p>
              <a href="#" className="inline-block px-6 py-2 bg-purple-500 text-white rounded-full hover:bg-yellow-600 transition-all">
                View Certificate
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default Certifications