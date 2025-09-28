const Projects = ({ isDark }) => {
  const projects = [
    { title: 'E-Commerce Platform', description: 'Full-stack e-commerce solution with React and Node.js' },
    { title: 'Task Management App', description: 'Collaborative task management with real-time updates' },
    { title: 'Weather Dashboard', description: 'Interactive weather application with location services' },
    { title: 'Blog Platform', description: 'Content management system with user authentication' },
    { title: 'Real-time Chat App', description: 'Socket.io based messaging application' },
    { title: 'Portfolio Website', description: 'Responsive portfolio with modern animations' },
    { title: 'REST API Service', description: 'Scalable API with authentication and documentation' },
    { title: 'Analytics Dashboard', description: 'Data visualization dashboard with charts and metrics' }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-500 to-yellow-600 bg-clip-text text-transparent">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className={`${isDark ? 'bg-gray-800' : 'bg-gray-50'} rounded-xl overflow-hidden shadow-lg hover:-translate-y-3 transition-all`}>
              <div className={`h-48 ${isDark ? 'bg-gray-700' : 'bg-gray-300'} flex items-center justify-center text-6xl`}>
                💻
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} mb-4`}>{project.description}</p>
                <div className="flex gap-3">
                  <a href="#" className="w-10 h-10 bg-purple-500 text-white rounded-full flex items-center justify-center hover:bg-yellow-600 transition-all">
                    
                  </a>
                  <a href="#" className="w-10 h-10 bg-purple-500 text-white rounded-full flex items-center justify-center hover:bg-yellow-600 transition-all">
                    {/* <Github className="w-5 h-5" /> */}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;