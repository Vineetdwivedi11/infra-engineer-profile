
import React from 'react';
import { Cloud, Database, Shield, Zap, GitBranch, Monitor } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Cloud Platforms',
      icon: Cloud,
      color: 'from-blue-500 to-cyan-500',
      skills: ['AWS', 'Azure', 'Google Cloud', 'DigitalOcean']
    },
    {
      title: 'Container & Orchestration',
      icon: Monitor,
      color: 'from-purple-500 to-pink-500',
      skills: ['Docker', 'Kubernetes', 'OpenShift', 'Helm']
    },
    {
      title: 'CI/CD & Version Control',
      icon: GitBranch,
      color: 'from-green-500 to-emerald-500',
      skills: ['Jenkins', 'GitLab CI', 'GitHub Actions', 'ArgoCD']
    },
    {
      title: 'Infrastructure as Code',
      icon: Zap,
      color: 'from-orange-500 to-red-500',
      skills: ['Terraform', 'Ansible', 'CloudFormation', 'Pulumi']
    },
    {
      title: 'Monitoring & Logging',
      icon: Database,
      color: 'from-yellow-500 to-orange-500',
      skills: ['Prometheus', 'Grafana', 'ELK Stack', 'DataDog']
    },
    {
      title: 'Security & Compliance',
      icon: Shield,
      color: 'from-indigo-500 to-purple-500',
      skills: ['HashiCorp Vault', 'SAST/DAST', 'OWASP', 'Compliance']
    }
  ];

  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Technical <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Proficient in modern DevOps tools and practices, with hands-on experience in cloud-native technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-slate-600 transition-all duration-300 group hover:transform hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} mr-4`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1 bg-slate-700 text-slate-300 rounded-full text-sm hover:bg-slate-600 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
