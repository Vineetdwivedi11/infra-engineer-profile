
import React from 'react';
import { Cloud, Database, Shield, Zap, GitBranch, Monitor, Terminal, Code, Cpu, HardDrive, Network, Server } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Cloud & Orchestration',
      icon: Cloud,
      color: 'from-blue-500 to-cyan-500',
      ascii: '☁️',
      skills: [
        { name: 'Kubernetes', level: 95 },
        { name: 'Docker', level: 98 },
        { name: 'AWS EKS', level: 90 },
        { name: 'Helm Charts', level: 85 }
      ]
    },
    {
      title: 'Infrastructure as Code',
      icon: Code,
      color: 'from-purple-500 to-pink-500',
      ascii: '🏗️',
      skills: [
        { name: 'Terraform', level: 92 },
        { name: 'Ansible', level: 88 },
        { name: 'CloudFormation', level: 80 },
        { name: 'Pulumi', level: 75 }
      ]
    },
    {
      title: 'CI/CD Pipelines',
      icon: GitBranch,
      color: 'from-green-500 to-emerald-500',
      ascii: '🔄',
      skills: [
        { name: 'Jenkins', level: 90 },
        { name: 'GitLab CI', level: 95 },
        { name: 'GitHub Actions', level: 88 },
        { name: 'ArgoCD', level: 85 }
      ]
    },
    {
      title: 'Monitoring & Observability',
      icon: Monitor,
      color: 'from-orange-500 to-red-500',
      ascii: '📊',
      skills: [
        { name: 'Prometheus', level: 90 },
        { name: 'Grafana', level: 92 },
        { name: 'ELK Stack', level: 85 },
        { name: 'Jaeger', level: 80 }
      ]
    },
    {
      title: 'Security & Compliance',
      icon: Shield,
      color: 'from-yellow-500 to-orange-500',
      ascii: '🔒',
      skills: [
        { name: 'HashiCorp Vault', level: 85 },
        { name: 'SAST/DAST', level: 82 },
        { name: 'OWASP', level: 88 },
        { name: 'Falco', level: 75 }
      ]
    },
    {
      title: 'Scripting & Automation',
      icon: Terminal,
      color: 'from-indigo-500 to-purple-500',
      ascii: '⚡',
      skills: [
        { name: 'Bash/Shell', level: 95 },
        { name: 'Python', level: 88 },
        { name: 'Go', level: 80 },
        { name: 'YAML/JSON', level: 98 }
      ]
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="bg-slate-900 border border-green-400 rounded-lg p-4 mb-8 font-mono inline-block">
            <div className="text-green-400 text-sm">
              <span className="text-gray-400"># </span>
              <span className="text-blue-400">cat</span> /proc/skills | <span className="text-blue-400">grep</span> -E "expert|advanced"
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-mono">
            <span className="text-green-400">./</span>technical<span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">_arsenal</span><span className="text-green-400">.sh</span>
          </h2>
          <p className="text-xl text-green-400 max-w-3xl mx-auto font-mono">
            <span className="text-gray-400"># </span>Battle-tested tools and technologies for modern DevOps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className="bg-slate-900 rounded-xl border border-gray-700 hover:border-green-400 transition-all duration-300 group hover:transform hover:scale-105 overflow-hidden"
            >
              {/* Terminal Header */}
              <div className="bg-black border-b border-gray-700 p-2 flex items-center">
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-red-500"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                </div>
                <span className="ml-2 text-green-400 text-xs font-mono">
                  {category.title.toLowerCase().replace(/\s+/g, '_')}.conf
                </span>
              </div>
              
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} mr-4`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-green-400 transition-colors font-mono">
                      {category.title}
                    </h3>
                    <span className="text-2xl">{category.ascii}</span>
                  </div>
                </div>
                
                <div className="space-y-3 font-mono">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-300">{skill.name}</span>
                        <span className="text-green-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-4 text-xs font-mono text-gray-400">
                  <span className="text-green-400"># </span>
                  uptime: {Math.floor(Math.random() * 1000 + 500)} days
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ASCII Art Footer */}
        <div className="mt-16 text-center">
          <div className="bg-black border border-green-400 rounded-lg p-6 font-mono text-green-400 text-xs inline-block">
            <pre>{`
    ╔══════════════════════════════════════╗
    ║           SYSTEM STATUS: ONLINE      ║
    ║     All services running optimally   ║
    ║        Load avg: 0.15, 0.10, 0.05   ║
    ╚══════════════════════════════════════╝
            `}</pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
