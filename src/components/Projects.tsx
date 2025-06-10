
import React from 'react';
import { ExternalLink, Github, TrendingUp, Clock, Users } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Multi-Cloud Kubernetes Platform',
      description: 'Built a resilient Kubernetes platform spanning AWS, Azure, and GCP with automated failover and disaster recovery capabilities.',
      image: 'photo-1486312338219-ce68d2c6f44d',
      tags: ['Kubernetes', 'Terraform', 'Istio', 'ArgoCD'],
      metrics: [
        { label: 'Uptime', value: '99.9%', icon: TrendingUp },
        { label: 'Deploy Time', value: '< 5min', icon: Clock },
        { label: 'Teams Served', value: '15+', icon: Users }
      ],
      links: {
        github: '#',
        demo: '#'
      }
    },
    {
      title: 'CI/CD Pipeline Automation',
      description: 'Designed and implemented a comprehensive CI/CD pipeline reducing deployment time by 70% and increasing deployment frequency.',
      image: 'photo-1531297484001-80022131f5a1',
      tags: ['Jenkins', 'Docker', 'AWS', 'SonarQube'],
      metrics: [
        { label: 'Deploy Reduction', value: '70%', icon: TrendingUp },
        { label: 'Build Time', value: '< 3min', icon: Clock },
        { label: 'Deployments/Day', value: '50+', icon: Users }
      ],
      links: {
        github: '#',
        demo: '#'
      }
    },
    {
      title: 'Infrastructure Monitoring Stack',
      description: 'Implemented comprehensive monitoring and alerting system using Prometheus, Grafana, and ELK stack for real-time insights.',
      image: 'photo-1487058792275-0ad4aaf24ca7',
      tags: ['Prometheus', 'Grafana', 'ElasticSearch', 'Kibana'],
      metrics: [
        { label: 'Metrics Collected', value: '10K+', icon: TrendingUp },
        { label: 'Alert Response', value: '< 30s', icon: Clock },
        { label: 'Dashboards', value: '25+', icon: Users }
      ],
      links: {
        github: '#',
        demo: '#'
      }
    }
  ];

  return (
    <section className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Real-world DevOps solutions that improved efficiency, reliability, and scalability
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className={`flex flex-col lg:flex-row gap-8 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="lg:w-1/2">
                <div className="relative overflow-hidden rounded-xl bg-slate-900 border border-slate-700 group hover:border-slate-600 transition-all duration-300">
                  <img 
                    src={`https://images.unsplash.com/${project.image}?w=600&h=400&fit=crop`}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                </div>
              </div>
              
              <div className="lg:w-1/2 space-y-6">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">{project.title}</h3>
                  <p className="text-slate-400 text-lg leading-relaxed">{project.description}</p>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm border border-blue-600/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  {project.metrics.map((metric) => (
                    <div key={metric.label} className="text-center">
                      <div className="flex justify-center mb-2">
                        <metric.icon className="w-5 h-5 text-green-400" />
                      </div>
                      <div className="text-2xl font-bold text-white">{metric.value}</div>
                      <div className="text-slate-400 text-sm">{metric.label}</div>
                    </div>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a 
                    href={project.links.github}
                    className="flex items-center gap-2 px-4 py-2 border border-slate-600 text-slate-300 rounded-lg hover:bg-slate-700 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                  <a 
                    href={project.links.demo}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
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
