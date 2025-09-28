const Skills = ({ isDark }) => {
  const skills = [
    { name: 'HTML5', level: 90 },
    { name: 'CSS3', level: 85 },
    { name: 'JavaScript', level: 80 },
    { name: 'ReactJS', level: 75 },
    { name: 'NodeJS', level: 70 },
    { name: 'MongoDB', level: 65 }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-500 to-yellow-600 bg-clip-text text-transparent">
          Skills
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill) => (
            <div key={skill.name} className={`${isDark ? 'bg-gray-800' : 'bg-gray-50'} p-6 rounded-xl shadow-lg hover:-translate-y-2 transition-all`}>
              <div className="flex justify-between mb-3">
                <span className="font-semibold">{skill.name}</span>
                <span className="font-semibold">{skill.level}%</span>
              </div>
              <div className={`w-full h-2 ${isDark ? 'bg-gray-700' : 'bg-gray-200'} rounded-full overflow-hidden`}>
                <div
                  className="h-full bg-gradient-to-r from-purple-500 to-yellow-600 rounded-full transition-all duration-1000"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;