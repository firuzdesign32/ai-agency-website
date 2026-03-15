import React from 'react';
import { AlertCircle, Rocket, Store, Briefcase } from 'lucide-react';

export default function TargetAudience() {
  return (
    <section id="about" className="audience-section section bg-secondary">
      <div className="container">
        <div className="audience-header text-center">
          <AlertCircle size={48} className="fomo-icon" />
          <h2 className="heading-lg">
            Don't Get <span className="text-gradient-accent">Left Behind</span>
          </h2>
          <p className="section-subtext">
            While you're calculating manual ad spend, your competitors are deploying autonomous AI pipelines. We build systems for:
          </p>
        </div>

        <div className="audience-cards">
          <div className="audience-card">
            <Rocket size={24} className="icon-neon" />
            <h3>Startup Founders</h3>
            <p className="text-secondary">Hyper-scale with lean teams. Get the output of a 20-person workforce without the bloat.</p>
          </div>
          
          <div className="audience-card">
            <Store size={24} className="icon-neon" />
            <h3>E-Commerce Brands</h3>
            <p className="text-secondary">Lower CPA and deliver true 1-to-1 personalized shopping experiences at massive scale.</p>
          </div>
          
          <div className="audience-card">
            <Briefcase size={24} className="icon-neon" />
            <h3>B2B SaaS</h3>
            <p className="text-secondary">Move past generic cold outreach. Close deals with highly data-driven, automated sales reps.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
