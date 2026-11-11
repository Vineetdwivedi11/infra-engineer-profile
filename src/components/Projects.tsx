import React from 'react';
import { Github, Terminal, CheckCircle2, ArrowRight } from 'lucide-react';

// NOTE: These are reference architectures I design and implement for clients.
// Add a real `repo` URL once the code is published; the Source button is hidden until then.
type Project = {
  title: string;
  category: string;
  problem: string;
  solution: string;
  flow: string[];
  codeFile: string;
  codeSnippet: string;
  highlights: string[];
  tags: string[];
  repo?: string;
};

const projects: Project[] = [
  {
    title: 'GitOps Platform on AWS EKS',
    category: 'Kubernetes / GitOps',
    problem: 'Manual kubectl deploys cause config drift and no audit trail between environments.',
    solution:
      'Production EKS cluster provisioned with Terraform, with ArgoCD as the single source of truth for every workload. Git is the only way to change the cluster.',
    flow: ['Git push', 'CI build', 'Image to ECR', 'ArgoCD sync', 'EKS rollout'],
    codeFile: 'argocd-application.yaml',
    codeSnippet: `apiVersion: argoproj.io/v1alpha1
kind: Application
metadata:
  name: web-app
spec:
  source:
    repoURL: https://git.example.com/platform.git
    path: apps/web/overlays/prod
  destination:
    namespace: web
  syncPolicy:
    automated: { prune: true, selfHeal: true }`,
    highlights: [
      'Multi-AZ node groups with cluster autoscaling',
      'Self-healing sync: manual drift is reverted automatically',
      'Environment overlays (dev / staging / prod) with Kustomize',
      'IRSA for least-privilege pod access to AWS',
    ],
    tags: ['EKS', 'Terraform', 'ArgoCD', 'Helm', 'Kustomize'],
  },
  {
    title: 'Zero-Downtime CI/CD Pipeline',
    category: 'CI/CD',
    problem: 'Releases need maintenance windows and rollbacks are slow and risky.',
    solution:
      'Jenkins pipeline that builds, tests, scans, and ships containers with blue-green deployments and automatic rollback on failed health checks.',
    flow: ['Commit', 'Build + test', 'Scan', 'Push image', 'Blue-green switch'],
    codeFile: 'Jenkinsfile',
    codeSnippet: `pipeline {
  agent any
  stages {
    stage('Test')  { steps { sh 'make test' } }
    stage('Scan')  { steps { sh 'trivy image app:$GIT_COMMIT' } }
    stage('Build') { steps { sh 'docker build -t app:$GIT_COMMIT .' } }
    stage('Deploy'){ steps { sh './deploy-bluegreen.sh' } }
  }
  post { failure { sh './rollback.sh' } }
}`,
    highlights: [
      'Parallel test stages and Docker layer caching for fast builds',
      'Health-check gated traffic switch with one-command rollback',
      'Branch-based pipelines with PR validation',
      'Slack notifications on every deploy',
    ],
    tags: ['Jenkins', 'Docker', 'Kubernetes', 'Trivy', 'Shell'],
  },
  {
    title: 'Observability Stack',
    category: 'Monitoring / SRE',
    problem: 'Teams find out about outages from customers, and debugging means SSH and grep.',
    solution:
      'Metrics, logs, and alerting in one stack with dashboards per service, SLO-based alerts, and runbooks linked from every alert.',
    flow: ['App metrics', 'Prometheus', 'Alertmanager', 'Slack / PagerDuty', 'Grafana'],
    codeFile: 'alert-rules.yaml',
    codeSnippet: `groups:
- name: slo
  rules:
  - alert: HighErrorRate
    expr: |
      sum(rate(http_requests_total{code=~"5.."}[5m]))
      / sum(rate(http_requests_total[5m])) > 0.02
    for: 10m
    labels: { severity: page }
    annotations:
      runbook: https://wiki.example.com/runbooks/5xx`,
    highlights: [
      'Golden-signal dashboards (latency, traffic, errors, saturation)',
      'Centralised logs with ELK and CloudWatch integration',
      'Alert routing by severity with on-call escalation',
      'Alerts based on symptoms, not noisy resource thresholds',
    ],
    tags: ['Prometheus', 'Grafana', 'ELK', 'CloudWatch', 'Alertmanager'],
  },
  {
    title: 'Multi-Environment AWS Foundation',
    category: 'Infrastructure as Code',
    problem: 'Hand-built cloud resources differ between environments and cannot be reproduced.',
    solution:
      'Reusable Terraform modules for networking, compute, and data, with remote state and locking, so dev, staging, and prod are built from the same code.',
    flow: ['Terraform plan', 'PR review', 'Apply', 'Remote state', 'Drift check'],
    codeFile: 'main.tf',
    codeSnippet: `module "vpc" {
  source   = "./modules/vpc"
  cidr     = var.cidr
  azs      = ["ap-south-1a", "ap-south-1b"]
}

terraform {
  backend "s3" {
    bucket         = "tf-state-prod"
    dynamodb_table = "tf-locks"
    encrypt        = true
  }
}`,
    highlights: [
      'Modular VPC, EC2, RDS, ELB, and Auto Scaling building blocks',
      'S3 + DynamoDB remote state with locking and encryption',
      'Plan-on-PR, apply-on-merge workflow',
      'Tagging and naming standards for cost allocation',
    ],
    tags: ['Terraform', 'AWS', 'VPC', 'RDS', 'Auto Scaling'],
  },
  {
    title: 'DevSecOps Pipeline',
    category: 'Security',
    problem: 'Security reviews happen at the end, so vulnerabilities and leaked secrets ship to production.',
    solution:
      'Security checks built into CI: code quality, dependency and image scanning, secret detection, and runtime secrets from Vault instead of env files.',
    flow: ['Secret scan', 'SAST', 'Dependency scan', 'Image scan', 'Policy gate'],
    codeFile: 'security-stage.sh',
    codeSnippet: `gitleaks detect --source . --exit-code 1
sonar-scanner -Dsonar.qualitygate.wait=true
trivy fs --severity HIGH,CRITICAL --exit-code 1 .
trivy image --severity CRITICAL --exit-code 1 "$IMAGE"`,
    highlights: [
      'Pipeline fails on critical vulnerabilities and leaked secrets',
      'Dynamic secrets from HashiCorp Vault',
      'SonarQube quality gates on every merge request',
      'OWASP-aligned checks mapped to the pipeline',
    ],
    tags: ['Vault', 'SonarQube', 'Trivy', 'OWASP', 'GitLab CI'],
  },
  {
    title: 'Cloud Cost & Performance Optimisation',
    category: 'FinOps / Scalability',
    problem: 'Cloud bills grow faster than traffic, and capacity is either wasted or too tight at peak.',
    solution:
      'Right-sizing from real usage data, autoscaling policies tuned through load testing, and scheduled shutdown of non-production environments.',
    flow: ['Measure', 'Load test', 'Right-size', 'Autoscale', 'Review monthly'],
    codeFile: 'hpa.yaml',
    codeSnippet: `apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
spec:
  minReplicas: 3
  maxReplicas: 20
  metrics:
  - type: Resource
    resource:
      name: cpu
      target: { type: Utilization, averageUtilization: 65 }`,
    highlights: [
      'Load testing to find real bottlenecks before launch',
      'Horizontal pod and node autoscaling with sensible limits',
      'Off-hours scheduling for dev and staging',
      'Cost dashboards by team and environment',
    ],
    tags: ['AWS', 'Kubernetes', 'HPA', 'Load Testing', 'CloudWatch'],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="bg-black border border-green-400 rounded-lg p-4 mb-8 font-mono inline-block">
            <div className="text-green-400 text-sm">
              <span className="text-gray-400">$ </span>
              <span className="text-blue-400">ls</span> ~/solutions
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-mono">
            <span className="text-green-400">~/</span>production
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">_solutions</span>
          </h2>
          <p className="text-lg md:text-xl text-green-400 max-w-3xl mx-auto font-mono">
            <span className="text-gray-400"># </span>Reference architectures I design and implement for client infrastructure
          </p>
        </div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className={`flex flex-col lg:flex-row gap-8 items-start ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Code preview */}
              <div className="w-full lg:w-1/2 min-w-0">
                <div className="bg-black border border-gray-700 rounded-xl overflow-hidden hover:border-green-400 transition-all duration-300">
                  <div className="bg-slate-800 border-b border-gray-700 p-2 flex items-center">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 rounded-full bg-red-500"></div>
                      <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    </div>
                    <span className="ml-2 text-green-400 text-xs font-mono">{project.codeFile}</span>
                  </div>
                  <pre className="p-4 font-mono text-xs sm:text-sm text-blue-400 overflow-x-auto">
                    {project.codeSnippet}
                  </pre>
                </div>

                {/* Flow */}
                <div className="mt-4 flex flex-wrap items-center gap-2 font-mono text-xs">
                  {project.flow.map((step, i) => (
                    <React.Fragment key={step}>
                      <span className="px-2 py-1 bg-black border border-gray-700 text-slate-300 rounded">{step}</span>
                      {i < project.flow.length - 1 && <ArrowRight className="w-3 h-3 text-green-400" aria-hidden />}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* Details */}
              <div className="w-full lg:w-1/2 space-y-5">
                <div>
                  <span className="inline-block mb-2 px-2 py-1 text-xs font-mono text-purple-300 border border-purple-500/40 rounded">
                    {project.category}
                  </span>
                  <div className="flex items-center gap-2 mb-3">
                    <Terminal className="w-5 h-5 text-green-400 shrink-0" />
                    <h3 className="text-2xl md:text-3xl font-bold text-white font-mono">{project.title}</h3>
                  </div>
                  <p className="text-slate-300 leading-relaxed mb-2">
                    <span className="text-red-400 font-mono text-sm">Problem: </span>
                    {project.problem}
                  </p>
                  <p className="text-slate-300 leading-relaxed">
                    <span className="text-green-400 font-mono text-sm">Solution: </span>
                    {project.solution}
                  </p>
                </div>

                <ul className="space-y-2">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-slate-300 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>

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

                <div className="flex flex-wrap gap-4">
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 border border-green-400 text-green-400 rounded-lg hover:bg-green-400 hover:text-black transition-colors font-mono"
                    >
                      <Github className="w-4 h-4" />
                      Source
                    </a>
                  )}
                  <a
                    href="#contact"
                    className="flex items-center gap-2 px-4 py-2 bg-green-600 text-black rounded-lg hover:bg-green-500 transition-colors font-mono font-bold"
                  >
                    Need something like this?
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
