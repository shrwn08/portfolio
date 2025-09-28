import { useState } from "react";

const Contact = ({ isDark }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className={`py-20 ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 flex items-center justify-center gap-2">
          {/* <Headphones className="inline-block" /> */}
          Get in <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Touch</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className={`${isDark ? 'bg-gray-900' : 'bg-white'} p-8 rounded-xl shadow-lg`}>
            <div className="space-y-6">
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  className={`w-full px-12 py-3 border-2 rounded-lg ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} focus:border-purple-500 outline-none transition-colors`}
                />
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-500">👤</div>
              </div>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your Email"
                  className={`w-full px-12 py-3 border-2 rounded-lg ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} focus:border-purple-500 outline-none transition-colors`}
                />
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-500">📧</div>
              </div>
              <div className="relative">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Your Phone"
                  className={`w-full px-12 py-3 border-2 rounded-lg ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} focus:border-purple-500 outline-none transition-colors`}
                />
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-500">📱</div>
              </div>
              <div className="relative">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your Message"
                  rows="5"
                  className={`w-full px-12 py-3 border-2 rounded-lg ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} focus:border-purple-500 outline-none transition-colors`}
                />
                <div className="absolute left-4 top-4 text-purple-500">💬</div>
              </div>
              <button 
                onClick={handleSubmit}
                className="w-full px-8 py-3 bg-gradient-to-r from-purple-500 to-yellow-600 text-white rounded-full font-semibold hover:shadow-lg hover:-translate-y-1 transition-all"
              >
                Send Message
              </button>
            </div>
          </div>
          <div className={`${isDark ? 'bg-gray-700' : 'bg-gray-300'} rounded-xl overflow-hidden h-96 flex items-center justify-center text-6xl`}>
            🗺️
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
