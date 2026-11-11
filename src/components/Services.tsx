import React from 'react';
import { Cloud, GitBranch, Boxes, Activity, ShieldCheck, Wallet, ArrowRight } from 'lucide-react';

const services = [
  { icon: Cloud, title: 'Cloud Infrastructure on AWS', text: 'VPC, EC2, RDS, ELB, Auto Scaling and S3 designed for availability and cost, built as Terraform code.' },
  { icon: GitBranch, title: 'CI/CD Pipelines', text: 'Jenkins, GitLab CI or GitHub Actions pipelines with automated tests, scans, and safe deployments.' },
  { icon: Boxes, title: 'Docker & Kubernetes', text: 'Containerise your apps and run them on Kubernetes or EKS, with GitOps-based delivery.' },
  { icon: Activity, title: 'Monitoring & Alerting', text: 'Prometheus, Grafana and ELK setup with dashboards and alerts that tell you before users do.' },
  { icon: ShieldCheck, title: 'DevSecOps', text: 'Vulnerability and secret scanning in the pipeline, plus secrets management with Vault.' },
  { icon: Wallet, title: 'Cost & Performance Audit', text: 'Review of your cloud bill and load behaviour with a prioritised list of savings and fixes.' },
];

const steps = [
  { n: '01', title: 'Discovery call', text: 'We discuss your stack, pain points and goals.' },
  { n: '02', title: 'Proposal', text: 'Clear scope, timeline and fixed or hourly pricing.' },
  { n: '03', title: 'Build', text: 'Everything delivered as code in your repositories, with regular updates.' },
  { n: '04', title: 'Handover', text: 'Documentation, runbooks and a walkthrough for your team.' },
];

const Services = () => (
  <section id="services" className="py-20 bg-black">
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-mono">
          <span className="text-green-400">./</span>services
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">_available</span>
        </h2>
        <p className="text-lg md:text-xl text-green-400 max-w-3xl mx-auto font-mono">
          <span className="text-gray-400"># </span>Available for freelance and contract DevOps work
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {services.map((s) => (
          <div key={s.title} className="bg-slate-900 border border-gray-700 hover:border-green-400 rounded-xl p-6 transition-colors">
            <s.icon className="w-8 h-8 text-green-400 mb-4" />
            <h3 className="text-lg font-semibold text-white font-mono mb-2">{s.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{s.text}</p>
          </div>
        ))}
      </div>

      <h3 className="text-2xl font-bold text-white font-mono text-center mb-8">How we work together</h3>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
        {steps.map((s) => (
          <div key={s.n} className="bg-slate-900 border border-gray-700 rounded-xl p-5">
            <div className="text-green-400 font-mono text-2xl mb-2">{s.n}</div>
            <div className="text-white font-semibold mb-1">{s.title}</div>
            <p className="text-slate-400 text-sm">{s.text}</p>
          </div>
        ))}
      </div>

      <div className="text-center">
        <a
          href="#contact"
          className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-black px-8 py-4 rounded-lg font-mono font-bold transition-colors"
        >
          Book a free discovery call <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  </section>
);

export default Services;
