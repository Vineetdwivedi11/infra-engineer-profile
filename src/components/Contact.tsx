
import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'alex.rodriguez@email.com',
      href: 'mailto:alex.rodriguez@email.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'San Francisco, CA',
      href: '#'
    }
  ];

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Twitter, href: '#', label: 'Twitter' }
  ];

  return (
    <section className="py-20 bg-slate-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Ready to discuss your next DevOps challenge? Let's build something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-slate-900 rounded-xl p-8 border border-slate-700">
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-300 mb-2 font-medium">First Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 mb-2 font-medium">Last Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-slate-300 mb-2 font-medium">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="john.doe@company.com"
                />
              </div>
              
              <div>
                <label className="block text-slate-300 mb-2 font-medium">Subject</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="DevOps Consultation"
                />
              </div>
              
              <div>
                <label className="block text-slate-300 mb-2 font-medium">Message</label>
                <textarea 
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                I'm always interested in discussing new opportunities, exciting projects, 
                or just talking about the latest in DevOps and cloud technologies.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info) => (
                <a 
                  key={info.label}
                  href={info.href}
                  className="flex items-center gap-4 p-4 bg-slate-900 rounded-lg border border-slate-700 hover:border-slate-600 transition-all duration-300 group"
                >
                  <div className="p-3 bg-blue-600 rounded-lg group-hover:bg-blue-500 transition-colors">
                    <info.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-slate-400 text-sm">{info.label}</div>
                    <div className="text-white font-medium">{info.value}</div>
                  </div>
                </a>
              ))}
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a 
                    key={social.label}
                    href={social.href}
                    className="p-3 bg-slate-900 border border-slate-700 rounded-lg hover:border-slate-600 hover:bg-slate-800 transition-all duration-300 group"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-slate-400 group-hover:text-blue-400 transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
