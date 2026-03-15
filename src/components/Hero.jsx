import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="bg-grid"></div>
      
      <div className="container hero-content">
        <div className="hero-text-area">
          <div className="badge pulse">
            <Sparkles size={16} className="sparkle-icon" />
            <span>AI Marketing Engine</span>
          </div>
          
          <h1 className="heading-xl">
            Outscale Your Competition With <span className="text-gradient-accent">Autonomous AI.</span>
          </h1>
          
          <p className="hero-subtext">
            We implement the AI systems your competitors are secretly using to scale. 
            Achieve 10x output with a fraction of the budget.
          </p>
          
          <div className="hero-cta-group">
            <button className="btn-primary">
              Build Your AI Engine <ArrowRight size={20} />
            </button>
            <span className="scarcity-text">Only 2 spots left this month</span>
          </div>
        </div>

        {/* 
          SPLINE 3D COMPONENT PLACEHOLDER
          The user will replace this div or URL with their actual Spline 3D Scene URL.
        */}
        <div className="spline-container">
          <Spline scene="https://prod.spline.design/wd67EtpTesH6GZYa/scene.splinecode" />
        </div>
      </div>
    </section>
  );
}
