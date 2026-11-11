
import React, { useState } from 'react';
import { Mail, MapPin, Linkedin, Github, Twitter } from 'lucide-react';

const Contact = () => {
  const [form, setForm] = useState({ first: '', last: '', email: '', subject: '', message: '' });
  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [k]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = form.subject || 'Project enquiry';
    const body = `Name: ${form.first} ${form.last}\nEmail: ${form.email}\n\n${form.message}`;
    window.location.href = `mailto:dvineet9@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'dvineet9@gmail.com',
      href: 'mailto:dvineet9@gmail.com'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Kanpur, Uttar Pradesh, India',
      href: '#'
    }
  ];

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/vineetdwivedi11/', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/vineetdwivedi11', label: 'GitHub' },
    { icon: Twitter, href: 'https://x.com/dvineet9', label: 'Twitter' }
  ];

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-mono">
            <span className="text-green-400">./</span>contact<span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">_me.sh</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
            I'm taking on new freelance and contract clients. Tell me about your infrastructure and I'll reply within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-slate-900 rounded-xl p-6 sm:p-8 border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="c-first" className="block text-slate-300 mb-2 font-medium">First Name</label>
                  <input
                    id="c-first" value={form.first} onChange={set('first')} required
                    type="text" 
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-green-400 transition-colors"
                    placeholder=""
                  />
                </div>
                <div>
                  <label htmlFor="c-last" className="block text-slate-300 mb-2 font-medium">Last Name</label>
                  <input
                    id="c-last" value={form.last} onChange={set('last')}
                    type="text" 
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-green-400 transition-colors"
                    placeholder=""
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="c-email" className="block text-slate-300 mb-2 font-medium">Email</label>
                  <input
                    id="c-email" value={form.email} onChange={set('email')} required
                    type="email" 
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-green-400 transition-colors"
                  placeholder=""
                />
              </div>
              
              <div>
                <label htmlFor="c-subject" className="block text-slate-300 mb-2 font-medium">Subject</label>
                  <input
                    id="c-subject" value={form.subject} onChange={set('subject')}
                    type="text" 
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-green-400 transition-colors"
                  placeholder=""
                />
              </div>
              
              <div>
                <label htmlFor="c-message" className="block text-slate-300 mb-2 font-medium">Message</label>
                <textarea 
                  id="c-message" value={form.message} onChange={set('message')} required
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-green-400 transition-colors resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full bg-green-500 hover:bg-green-400 text-black px-6 py-3 rounded-lg font-mono font-bold transition-all duration-300 transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              <p className="text-slate-300 text-lg leading-relaxed mb-8">
                Whether it's a one-off setup, a pipeline rebuild or ongoing DevOps support, send a short note about your stack and what's hurting. I'll reply with next steps and a rough estimate.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info) => (
                <a 
                  key={info.label}
                  href={info.href}
                  className="flex items-center gap-4 p-4 bg-slate-900 rounded-lg border border-gray-700 hover:border-green-400 transition-all duration-300 group"
                >
                  <div className="p-3 bg-green-600 rounded-lg group-hover:bg-green-500 transition-colors">
                    <info.icon className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <div className="text-slate-400 text-sm font-mono">{info.label}</div>
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
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-slate-900 border border-gray-700 rounded-lg hover:border-green-400 hover:bg-slate-800 transition-all duration-300 group"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-slate-400 group-hover:text-green-400 transition-colors" />
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
