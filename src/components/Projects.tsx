import React from 'react';
import { ExternalLink, Github, TrendingUp, Clock, Users, Terminal, GitBranch, Database } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'K8s Multi-Cloud Orchestrator',
      description: 'Built a Kubernetes platform spanning AWS, Azure, and GCP with GitOps workflows, automated scaling, and disaster recovery.',
      image: 'photo-1486312338219-ce68d2c6f44d',
      codeSnippet: `apiVersion: apps/v1
kind: Deployment
metadata:
  name: web-app
spec:
  replicas: 3
  selector:
    matchLabels:
      app: web-app`,
      tags: ['K8s', 'Terraform', 'Istio', 'ArgoCD', 'Prometheus'],
      metrics: [
        { label: 'Uptime', value: '99.99%', icon: TrendingUp },
        { label: 'Deploy', value: '< 3min', icon: Clock },
        { label: 'Nodes', value: '50+', icon: Users }
      ],
      tech_stack: {
        infrastructure: 'Terraform + Ansible',
        orchestration: 'Kubernetes + Helm',
        monitoring: 'Prometheus + Grafana',
        cicd: 'GitLab CI + ArgoCD'
      },
      links: {
        github: '#',
        demo: '#'
      }
    },
    {
      title: 'Zero-Downtime CI/CD Pipeline',
      description: 'Engineered a fully automated pipeline with blue-green deployments, automated testing, and security scanning.',
      image: 'photo-1531297484001-80022131f5a1',
      codeSnippet: `pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh 'docker build -t app:v1.2.3 .'
      }
    }
    stage('Deploy') {
      steps {
        sh 'kubectl apply -f k8s/'
      }
    }
  }
}`,
      tags: ['Jenkins', 'Docker', 'K8s', 'SonarQube', 'Vault'],
      metrics: [
        { label: 'Deploy Time', value: '70% ↓', icon: TrendingUp },
        { label: 'Build Time', value: '< 2min', icon: Clock },
        { label: 'Daily Deploys', value: '100+', icon: Users }
      ],
      tech_stack: {
        cicd: 'Jenkins + Docker',
        security: 'SonarQube + Vault',
        deployment: 'Blue-Green K8s',
        testing: 'Jest + Cypress'
      },
      links: {
        github: '#',
        demo: '#'
      }
    },
    {
      title: 'Observability Stack 3.0',
      description: 'Comprehensive monitoring solution with distributed tracing, log aggregation, and predictive alerting using ML.',
      image: 'photo-1487058792275-0ad4aaf24ca7',
      codeSnippet: `global:
  scrape_interval: 15s
scrape_configs:
  - job_name: 'kubernetes-pods'
    kubernetes_sd_configs:
    - role: pod
    relabel_configs:
    - source_labels: [__meta_kubernetes_pod_annotation_prometheus_io_scrape]
      action: keep
      regex: true`,
      tags: ['Prometheus', 'Grafana', 'Jaeger', 'Fluentd', 'ML'],
      metrics: [
        { label: 'Metrics/sec', value: '50K+', icon: Database },
        { label: 'MTTR', value: '< 5min', icon: Clock },
        { label: 'Dashboards', value: '40+', icon: Users }
      ],
      tech_stack: {
        metrics: 'Prometheus + Grafana',
        tracing: 'Jaeger + OpenTelemetry',
        logging: 'Fluentd + Elasticsearch',
        alerting: 'AlertManager + PagerDuty'
      },
      links: {
        github: '#',
        demo: '#'
      }
    }
  ];

  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="bg-black border border-green-400 rounded-lg p-4 mb-8 font-mono inline-block">
            <div className="text-green-400 text-sm">
              <span className="text-gray-400">$ </span>
              <span className="text-blue-400">git</span> log --oneline --graph | <span className="text-blue-400">head</span> -n 10
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-mono">
            <span className="text-green-400">~/</span>production<span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">_deployments</span>
          </h2>
          <p className="text-xl text-green-400 max-w-3xl mx-auto font-mono">
            <span className="text-gray-400"># </span>Battle-tested solutions deployed at scale
          </p>
        </div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className={`flex flex-col lg:flex-row gap-8 items-start ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Project Preview */}
              <div className="lg:w-1/2">
                <div className="bg-black border border-gray-700 rounded-xl overflow-hidden hover:border-green-400 transition-all duration-300">
                  {/* Terminal Header */}
                  <div className="bg-slate-800 border-b border-gray-700 p-2 flex items-center">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 rounded-full bg-red-500"></div>
                      <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    </div>
                    <span className="ml-2 text-green-400 text-xs font-mono">
                      {project.title.toLowerCase().replace(/\s+/g, '-')}.yaml
                    </span>
                  </div>
                  
                  {/* Code Preview */}
                  <div className="p-4 font-mono text-sm">
                    <pre className="text-green-400 whitespace-pre-wrap">
                      <span className="text-gray-400"># {project.title} Configuration</span>
                      {'\n'}
                      <span className="text-blue-400">{project.codeSnippet}</span>
                    </pre>
                  </div>
                </div>
              </div>
              
              {/* Project Details */}
              <div className="lg:w-1/2 space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Terminal className="w-5 h-5 text-green-400" />
                    <h3 className="text-3xl font-bold text-white font-mono">{project.title}</h3>
                  </div>
                  <p className="text-slate-400 text-lg leading-relaxed">{project.description}</p>
                </div>
                
                {/* Tech Stack */}
                <div className="bg-black border border-gray-700 rounded-lg p-4 font-mono">
                  <div className="text-green-400 text-sm mb-3">
                    <span className="text-gray-400"># </span>Technology Stack
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    {Object.entries(project.tech_stack).map(([key, value]) => (
                      <div key={key} className="text-slate-300">
                        <span className="text-blue-400">{key}:</span> {value}
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 bg-green-600/20 text-green-400 rounded border border-green-600/30 text-sm font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4">
                  {project.metrics.map((metric) => (
                    <div key={metric.label} className="bg-black border border-gray-700 rounded-lg p-3 text-center">
                      <div className="flex justify-center mb-2">
                        <metric.icon className="w-4 h-4 text-green-400" />
                      </div>
                      <div className="text-lg font-bold text-white font-mono">{metric.value}</div>
                      <div className="text-slate-400 text-xs font-mono">{metric.label}</div>
                    </div>
                  ))}
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-4">
                  <a 
                    href={project.links.github}
                    className="flex items-center gap-2 px-4 py-2 border border-green-400 text-green-400 rounded-lg hover:bg-green-400 hover:text-black transition-colors font-mono"
                  >
                    <Github className="w-4 h-4" />
                    Source
                  </a>
                  <a 
                    href={project.links.demo}
                    className="flex items-center gap-2 px-4 py-2 bg-green-600 text-black rounded-lg hover:bg-green-500 transition-colors font-mono font-bold"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Status Footer */}
        <div className="mt-16 text-center">
          <div className="bg-black border border-green-400 rounded-lg p-4 font-mono text-green-400 text-sm inline-block">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                All systems operational
              </span>
              <span className="text-gray-400">|</span>
              <span>Load: 0.12</span>
              <span className="text-gray-400">|</span>
              <span>Mem: 45%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
