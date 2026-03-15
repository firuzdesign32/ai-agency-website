import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import TargetAudience from './components/TargetAudience';
import ContactCTA from './components/ContactCTA';

function App() {
  return (
    <div className="app-container">
      <nav className="navbar">
        <div className="container nav-content">
          <div className="logo">SYNAPSE<span className="text-gradient-accent">.AI</span></div>
          <div className="nav-links">
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <button className="btn-small">Get Audit</button>
          </div>
        </div>
      </nav>

      <main>
        <Hero />
        <Services />
        <TargetAudience />
        <ContactCTA />
      </main>

      <footer className="footer">
        <div className="container footer-content">
          <div className="logo-small">SYNAPSE.AI</div>
          <p className="text-secondary">© 2024 Synapse AI Agency. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
