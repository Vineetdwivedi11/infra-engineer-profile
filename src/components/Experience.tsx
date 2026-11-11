
import React from 'react';
import { MapPin, Calendar, Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'DevOps Engineer',
      company: 'C3ihub, IIT Kanpur',
      location: 'Kanpur, Uttar Pradesh, India',
      period: '2021 - Present (5+ years)',
      description: [
        'Designed and optimized Jenkins CI/CD pipelines, reducing deployment times by 40% and improving release reliability.',
        'Automated multi-environment infrastructure provisioning with Terraform, giving consistent, repeatable and scalable deployments.',
        'Deployed and operated containerized applications on Docker and Kubernetes for better portability and scalability.',
        'Managed AWS infrastructure end to end: EC2, S3, RDS, VPC, ELB, EBS, Auto Scaling and CloudWatch.',
        'Built monitoring and observability with Prometheus, Grafana, the ELK Stack and CloudWatch for proactive issue detection.',
        'Tuned resources and ran load tests to improve system stability, performance and scalability.',
        'Worked with cross-functional teams to enforce CI/CD, deployment automation and reliability best practices.'
      ],
      technologies: ['AWS', 'Kubernetes', 'Docker', 'Terraform', 'Jenkins', 'Prometheus', 'Grafana', 'ELK']
    },
    // {
    //   title: 'DevOps Engineer',
    //   company: 'InnovateTech',
    //   location: 'Austin, TX',
    //   period: '2020 - 2022',
    //   description: [
    //     'Designed and maintained CI/CD pipelines for 20+ development teams',
    //     'Automated infrastructure provisioning using Terraform and Ansible',
    //     'Reduced deployment time from hours to minutes through pipeline optimization'
    //   ],
    //   technologies: ['Azure', 'Docker', 'Jenkins', 'Ansible', 'Grafana']
    // },
    
  ];

  return (
    <section id="experience" className="py-20 bg-slate-900">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Professional <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Journey</span>
          </h2>
          <p className="text-xl text-slate-400">
            5+ years of building robust infrastructure and helping teams ship faster
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={exp.title} className="relative flex items-start">
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-blue-500 rounded-full border-4 border-slate-900 z-10"></div>
                
                {/* Content */}
                <div className="ml-20 bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-slate-600 transition-all duration-300 w-full group">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-2 text-blue-400 font-semibold text-lg mt-1">
                        <Briefcase className="w-4 h-4" />
                        {exp.company}
                      </div>
                    </div>
                    
                    <div className="flex flex-col md:items-end gap-2 mt-2 md:mt-0">
                      <div className="flex items-center gap-2 text-slate-400">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-2 text-slate-400">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-slate-300 flex items-start">
                        <span className="text-blue-400 mr-2 mt-1">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-slate-700 text-slate-300 rounded-full text-sm hover:bg-slate-600 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
