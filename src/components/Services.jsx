import React from 'react';
import { Bot, Mail, LineChart, Cpu, MessageSquare, Target } from 'lucide-react';

const services = [
  {
    icon: <Target size={32} />,
    title: 'AEO & Next-Gen SEO',
    description: 'We optimize your brand to be the #1 recommended answer on AI platforms like ChatGPT, Perplexity, and Google Gemini.'
  },
  {
    icon: <Mail size={32} />,
    title: 'Autonomous Lead Generation',
    description: 'Custom AI agents scrape intent data to draft hyper-personalized, 1-to-1 cold emails at massive scale.'
  },
  {
    icon: <LineChart size={32} />,
    title: 'Predictive Analytics',
    description: 'Machine learning models identify prospects ready to buy and existing customers at risk of churning.'
  },
  {
    icon: <Cpu size={32} />,
    title: 'Programmatic Generative Content',
    description: 'Auto-generate thousands of SEO-optimized blogs and high-converting ad creatives instantly with LLMs and Midjourney.'
  },
  {
    icon: <MessageSquare size={32} />,
    title: '24/7 AI Sales Agents',
    description: 'Advanced LLMs trained on your sales scripts negotiate, answer complex queries, and book meetings 24/7 on your site.'
  },
  {
    icon: <Bot size={32} />,
    title: 'Algorithmic Media Buying',
    description: 'AI handles your ad spend, utilizing real-time predictive algorithms to automatically adjust bids across Meta and Google.'
  }
];

export default function Services() {
  return (
    <section id="services" className="services-section section">
      <div className="container">
        <div className="section-header">
          <h2 className="heading-lg">
            Replace Your <span className="text-gradient">Agency.</span>
          </h2>
          <p className="section-subtext">Automated, highly lucrative systems designed for hyper-growth.</p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card group">
              <div className="service-icon-wrapper">
                {service.icon}
              </div>
              <h3 className="heading-md">{service.title}</h3>
              <p className="text-secondary">{service.description}</p>
              <div className="service-hover-effect"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
