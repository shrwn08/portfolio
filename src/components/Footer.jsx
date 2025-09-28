// import { Moon, Sun, Linkedin, Twitter, Github, Instagram, Send, Phone, Mail, MapPin, Heart, ExternalLink, ArrowRight, Headphones } from 'lucide-react';
const Footer = ({ isDark, navLinks }) => {
  return (
    <footer className={`${isDark ? 'bg-gray-950' : 'bg-gray-900'} text-white py-12`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-purple-500">Shrawan's Portfolio</h3>
            <p className="text-gray-400">Thank you for visiting my personal portfolio website. Connect with me to make something BIG.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-purple-500">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map(link => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-gray-400 hover:text-purple-500 transition-colors flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" /> {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-purple-500">Contact Info</h3>
            <div className="space-y-2 text-gray-400">
              <p className="flex items-center gap-2"><Phone className="w-4 h-4" /> +91 84770 27827</p>
              <p className="flex items-center gap-2"><Mail className="w-4 h-4" /> shrwnkumar08@gmail.com</p>
              <p className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Rudrapur, Uttarakhand</p>
            </div>
            <div className="flex gap-3 mt-4">
              {/* {[Linkedin, Twitter, Github, Instagram, Send].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center hover:bg-yellow-600 hover:-translate-y-1 transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))} */}
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6 text-center text-gray-400">
          <p className="flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-red-500 animate-pulse" /> by Shrawan Kumar Singh
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;