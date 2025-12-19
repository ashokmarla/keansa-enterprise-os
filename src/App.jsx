import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  Database, 
  Workflow, 
  Brain, 
  ArrowRight, 
  ArrowUpRight,
  CheckCircle, 
  Zap, 
  Shield,
  Globe,
  Layers,
  GitBranch,
  Clock,
  Users,
  BarChart3,
  MessageSquare,
  Sparkles,
  Target,
  TrendingUp,
  RefreshCw,
  Lock,
  ChevronRight,
  X,
  Cookie
} from 'lucide-react';

// Configuration - Update these URLs as needed
const CONFIG = {
  dataSyncUrl: 'https://data-sync-ai-frontend-production.up.railway.app', // Update with actual URL
  keansaWebsite: 'https://www.keansa.nl',
  privacyPolicy: 'https://www.keansa.nl/privacy',
  cookiePolicy: 'https://www.keansa.nl/cookies',
};

// Cookie Consent Banner
const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('keansa-cookie-consent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('keansa-cookie-consent', 'accepted');
    setShowBanner(false);
  };

  const declineCookies = () => {
    localStorage.setItem('keansa-cookie-consent', 'declined');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-slide-up">
      <div className="max-w-4xl mx-auto glass rounded-2xl p-6 border border-white/10">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
          <div className="flex items-center gap-3 text-cyan-400">
            <Cookie size={24} />
          </div>
          <div className="flex-1">
            <p className="text-white/80 text-sm leading-relaxed">
              We use cookies to enhance your experience and analyze site traffic. 
              By continuing to browse, you agree to our use of cookies. 
              <a href={CONFIG.cookiePolicy} target="_blank" rel="noopener noreferrer" 
                 className="text-cyan-400 hover:text-cyan-300 underline ml-1">
                Learn more
              </a>
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={declineCookies}
              className="px-4 py-2 text-sm text-white/60 hover:text-white transition-colors"
            >
              Decline
            </button>
            <button
              onClick={acceptCookies}
              className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-teal-500 text-white text-sm font-medium rounded-lg hover:opacity-90 transition-opacity"
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Header Component
const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-40 transition-all duration-300 ${
      scrolled ? 'glass py-4' : 'py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-xl flex items-center justify-center transform group-hover:scale-105 transition-transform">
            <span className="text-white font-bold text-lg font-display">K</span>
          </div>
          <div>
            <div className="text-white font-display font-semibold text-lg">Enterprise OS</div>
            <div className="text-white/40 text-xs">by Keansa</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className={`text-sm font-medium transition-colors ${
            location.pathname === '/' ? 'text-cyan-400' : 'text-white/60 hover:text-white'
          }`}>
            Products
          </Link>
          <a href={CONFIG.keansaWebsite} target="_blank" rel="noopener noreferrer"
             className="text-sm font-medium text-white/60 hover:text-white transition-colors flex items-center gap-1">
            Keansa.nl <ArrowUpRight size={14} />
          </a>
          <a href={`${CONFIG.keansaWebsite}#contact`} target="_blank" rel="noopener noreferrer"
             className="px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-lg text-sm font-medium text-white transition-all">
            Contact Sales
          </a>
        </nav>
      </div>
    </header>
  );
};

// Footer Component with GDPR
const Footer = () => {
  return (
    <footer className="border-t border-white/5 mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg font-display">K</span>
              </div>
              <div>
                <div className="text-white font-display font-semibold">Enterprise OS</div>
                <div className="text-white/40 text-xs">by Keansa Solutions</div>
              </div>
            </div>
            <p className="text-white/50 text-sm max-w-md leading-relaxed">
              AI-powered solutions for Enterprise Performance Management. 
              Transforming how organizations sync data, align plans, and make decisions.
            </p>
          </div>

          <div>
            <h4 className="text-white font-display font-semibold mb-4">Products</h4>
            <div className="space-y-2">
              <a href={CONFIG.dataSyncUrl} className="block text-white/50 hover:text-white text-sm transition-colors">
                Data Sync AI
              </a>
              <Link to="/plansync" className="block text-white/50 hover:text-white text-sm transition-colors">
                Plan Sync AI
              </Link>
              <Link to="/decisionsync" className="block text-white/50 hover:text-white text-sm transition-colors">
                Decision Sync AI
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-white font-display font-semibold mb-4">Company</h4>
            <div className="space-y-2">
              <a href={CONFIG.keansaWebsite} target="_blank" rel="noopener noreferrer" 
                 className="block text-white/50 hover:text-white text-sm transition-colors">
                About Keansa
              </a>
              <a href={`${CONFIG.keansaWebsite}#contact`} target="_blank" rel="noopener noreferrer"
                 className="block text-white/50 hover:text-white text-sm transition-colors">
                Contact
              </a>
              <a href={CONFIG.privacyPolicy} target="_blank" rel="noopener noreferrer"
                 className="block text-white/50 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>

        {/* GDPR Footer */}
        <div className="pt-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-white/40 text-xs text-center md:text-left">
              © {new Date().getFullYear()} Keansa Solutions. All rights reserved. 
              <span className="mx-2">|</span>
              We are GDPR compliant and committed to protecting your data privacy.
            </div>
            <div className="flex items-center gap-6 text-xs">
              <a href={CONFIG.privacyPolicy} target="_blank" rel="noopener noreferrer"
                 className="text-white/40 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href={CONFIG.cookiePolicy} target="_blank" rel="noopener noreferrer"
                 className="text-white/40 hover:text-white transition-colors">
                Cookie Policy
              </a>
              <a href={`${CONFIG.keansaWebsite}/terms`} target="_blank" rel="noopener noreferrer"
                 className="text-white/40 hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
          <div className="mt-4 text-center">
            <p className="text-white/30 text-xs">
              Your data is processed in accordance with the EU General Data Protection Regulation (GDPR). 
              We only collect data necessary for providing our services and never share your information with third parties without consent.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Product Card Component
const ProductCard = ({ product, index }) => {
  const icons = {
    database: Database,
    workflow: Workflow,
    brain: Brain
  };
  const Icon = icons[product.icon];

  return (
    <div 
      className="group relative animate-fade-in"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-teal-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative glass rounded-3xl p-8 h-full glass-hover transition-all duration-300 group-hover:translate-y-[-4px]">
        {/* Icon */}
        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${product.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="text-white" size={28} />
        </div>

        {/* Content */}
        <h3 className="text-2xl font-display font-bold text-white mb-3">
          {product.name}
        </h3>
        <p className="text-white/60 mb-6 leading-relaxed">
          {product.description}
        </p>

        {/* Features */}
        <div className="space-y-3 mb-8">
          {product.features.map((feature, i) => (
            <div key={i} className="flex items-center gap-3">
              <CheckCircle className="text-cyan-400 flex-shrink-0" size={16} />
              <span className="text-white/70 text-sm">{feature}</span>
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className="flex flex-col gap-3 mt-auto">
          <a
            href={product.launchUrl}
            target={product.external ? "_blank" : "_self"}
            rel={product.external ? "noopener noreferrer" : ""}
            className="w-full py-3.5 bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-semibold rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-all group/btn"
          >
            Launch {product.name}
            <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
          </a>
          <a
            href={product.knowMoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 border border-white/10 hover:border-white/20 text-white/80 hover:text-white font-medium rounded-xl flex items-center justify-center gap-2 transition-all"
          >
            Know More
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </div>
  );
};

// Home Page
const HomePage = () => {
  const products = [
    {
      name: 'Data Sync AI',
      icon: 'database',
      gradient: 'from-cyan-500 to-blue-600',
      description: 'Universal data integration across all EPM platforms. AI-powered mapping, validation, and real-time synchronization.',
      features: ['Auto-mapping with AI', 'Real-time sync', 'Universal connectors', 'Data validation'],
      launchUrl: CONFIG.dataSyncUrl,
      knowMoreUrl: `${CONFIG.keansaWebsite}#datasync`,
      external: true
    },
    {
      name: 'Plan Sync AI',
      icon: 'workflow',
      gradient: 'from-teal-500 to-emerald-600',
      description: 'Synchronize planning across multiple systems. Ensure consistency, resolve conflicts, and maintain version control.',
      features: ['Multi-platform sync', 'Version control', 'Conflict resolution', 'Workflow automation'],
      launchUrl: '/plansync',
      knowMoreUrl: `${CONFIG.keansaWebsite}#plansync`,
      external: false
    },
    {
      name: 'Decision Sync AI',
      icon: 'brain',
      gradient: 'from-violet-500 to-purple-600',
      description: 'AI-powered decision intelligence. Predictive analytics, smart recommendations, and natural language insights.',
      features: ['Predictive analytics', 'Smart recommendations', 'Natural language queries', 'Impact analysis'],
      launchUrl: '/decisionsync',
      knowMoreUrl: `${CONFIG.keansaWebsite}#decisionsync`,
      external: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-mesh noise">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-0 left-1/2 w-[600px] h-[600px] bg-gradient-radial from-cyan-500/5 to-transparent" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-sm font-medium mb-8 animate-fade-in">
              <Sparkles size={16} />
              AI-Powered Enterprise Solutions
            </div>
            
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 animate-slide-up">
              <span className="text-white">Keansa</span>
              <br />
              <span className="text-gradient glow-text">Enterprise OS</span>
            </h1>
            
            <p className="text-xl text-white/60 leading-relaxed animate-slide-up delay-200 max-w-2xl mx-auto">
              The unified AI platform for Enterprise Performance Management. 
              Sync your data, align your plans, and amplify your decisions.
            </p>
          </div>

          {/* Product Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <ProductCard key={product.name} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Why Enterprise OS?
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto">
              A unified platform designed for modern enterprise performance management
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: Zap, title: 'Lightning Fast', desc: 'Real-time processing and instant insights' },
              { icon: Shield, title: 'Enterprise Security', desc: 'SOC 2 compliant with end-to-end encryption' },
              { icon: Globe, title: 'Global Scale', desc: 'Built for multi-region, multi-currency operations' },
              { icon: Layers, title: 'Seamless Integration', desc: 'Connect with 50+ EPM platforms and ERPs' },
            ].map((feature, i) => (
              <div key={i} className="glass rounded-2xl p-6 text-center glass-hover transition-all">
                <feature.icon className="text-cyan-400 mx-auto mb-4" size={28} />
                <h3 className="text-white font-display font-semibold mb-2">{feature.title}</h3>
                <p className="text-white/50 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="glass rounded-3xl p-12 glow">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Ready to Transform Your EPM?
            </h2>
            <p className="text-white/60 mb-8 max-w-xl mx-auto">
              Join leading enterprises already using Keansa Enterprise OS to drive performance.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href={`${CONFIG.keansaWebsite}#contact`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-semibold rounded-xl hover:opacity-90 transition-all flex items-center justify-center gap-2"
              >
                Schedule Demo <ArrowRight size={18} />
              </a>
              <a
                href={CONFIG.keansaWebsite}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border border-white/10 hover:border-white/20 text-white font-medium rounded-xl transition-all flex items-center justify-center gap-2"
              >
                Learn More <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Plan Sync AI Page
const PlanSyncPage = () => {
  const features = [
    {
      icon: GitBranch,
      title: 'Multi-Platform Sync',
      description: 'Seamlessly synchronize plans across Anaplan, Jedox, Board, OneStream, and more.'
    },
    {
      icon: Clock,
      title: 'Version Control',
      description: 'Complete history tracking with the ability to compare, rollback, and branch planning versions.'
    },
    {
      icon: RefreshCw,
      title: 'Conflict Resolution',
      description: 'AI-powered detection and resolution of planning conflicts across business units.'
    },
    {
      icon: Users,
      title: 'Collaborative Workflows',
      description: 'Streamlined approval processes with role-based access and real-time collaboration.'
    },
    {
      icon: Target,
      title: 'Scenario Management',
      description: 'Create, compare, and analyze multiple planning scenarios across platforms.'
    },
    {
      icon: Lock,
      title: 'Governance & Compliance',
      description: 'Full audit trail with compliance tracking for SOX, GDPR, and internal policies.'
    }
  ];

  const useCases = [
    'Cross-platform budget alignment',
    'Corporate-to-divisional planning',
    'Rolling forecast synchronization',
    'Headcount planning across HR and Finance',
    'Supply chain and demand planning integration'
  ];

  return (
    <div className="min-h-screen bg-gradient-mesh noise">
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-20 right-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 left-20 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Link to="/" className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm mb-8 transition-colors">
            <ChevronRight size={16} className="rotate-180" /> Back to Products
          </Link>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-sm font-medium mb-6">
                <Workflow size={16} />
                Enterprise Planning
              </div>
              
              <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
                Plan Sync AI
              </h1>
              
              <p className="text-xl text-white/60 leading-relaxed mb-8">
                Unify planning across your entire enterprise. Ensure consistency, resolve conflicts, 
                and maintain perfect alignment between all your planning platforms.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`${CONFIG.keansaWebsite}#contact`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-semibold rounded-xl hover:opacity-90 transition-all flex items-center justify-center gap-2"
                >
                  Request Demo <ArrowRight size={18} />
                </a>
                <a
                  href={`${CONFIG.keansaWebsite}#plansync`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 border border-white/10 hover:border-white/20 text-white font-medium rounded-xl transition-all flex items-center justify-center gap-2"
                >
                  Learn More <ArrowUpRight size={18} />
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="glass rounded-3xl p-8 glow">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center mb-6">
                  <Workflow className="text-white" size={40} />
                </div>
                <div className="space-y-4">
                  {['Anaplan', 'Jedox', 'Board', 'OneStream'].map((platform, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                      <CheckCircle className="text-teal-400" size={20} />
                      <span className="text-white">{platform}</span>
                      <span className="ml-auto text-teal-400 text-sm">Synced</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Powerful Features
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto">
              Everything you need to synchronize planning across your enterprise
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <div key={i} className="glass rounded-2xl p-6 glass-hover transition-all">
                <feature.icon className="text-teal-400 mb-4" size={28} />
                <h3 className="text-white font-display font-semibold mb-2">{feature.title}</h3>
                <p className="text-white/50 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                Use Cases
              </h2>
              <div className="space-y-4">
                {useCases.map((useCase, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 glass rounded-xl">
                    <div className="w-8 h-8 bg-teal-500/20 rounded-lg flex items-center justify-center text-teal-400 font-bold text-sm">
                      {i + 1}
                    </div>
                    <span className="text-white">{useCase}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass rounded-3xl p-8">
              <h3 className="text-xl font-display font-semibold text-white mb-6">
                Coming Soon
              </h3>
              <p className="text-white/60 mb-6">
                Plan Sync AI is currently in development. Join our early access program to be among the first to experience the future of unified planning.
              </p>
              <a
                href={`${CONFIG.keansaWebsite}#contact`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-semibold rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-all"
              >
                Join Early Access <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Decision Sync AI Page
const DecisionSyncPage = () => {
  const features = [
    {
      icon: TrendingUp,
      title: 'Predictive Analytics',
      description: 'ML-powered forecasting that learns from your data to predict trends and outcomes.'
    },
    {
      icon: Brain,
      title: 'Smart Recommendations',
      description: 'AI suggests optimal actions based on historical patterns and current context.'
    },
    {
      icon: MessageSquare,
      title: 'Natural Language Queries',
      description: 'Ask questions in plain English and get instant insights from your data.'
    },
    {
      icon: BarChart3,
      title: 'Anomaly Detection',
      description: 'Automatically identify unusual patterns and outliers that need attention.'
    },
    {
      icon: Target,
      title: 'What-If Scenarios',
      description: 'Simulate different scenarios and understand potential impacts before deciding.'
    },
    {
      icon: Layers,
      title: 'Impact Assessment',
      description: 'Understand downstream effects of decisions across your entire organization.'
    }
  ];

  const capabilities = [
    { label: 'Demand Forecasting', value: '95% accuracy' },
    { label: 'Budget Optimization', value: '30% savings' },
    { label: 'Risk Assessment', value: 'Real-time' },
    { label: 'Performance Analysis', value: '360° view' }
  ];

  return (
    <div className="min-h-screen bg-gradient-mesh noise">
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Link to="/" className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm mb-8 transition-colors">
            <ChevronRight size={16} className="rotate-180" /> Back to Products
          </Link>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm font-medium mb-6">
                <Brain size={16} />
                Decision Intelligence
              </div>
              
              <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
                Decision Sync AI
              </h1>
              
              <p className="text-xl text-white/60 leading-relaxed mb-8">
                Transform data into actionable insights. Leverage AI to predict outcomes, 
                get smart recommendations, and make better decisions faster.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`${CONFIG.keansaWebsite}#contact`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-gradient-to-r from-violet-500 to-purple-500 text-white font-semibold rounded-xl hover:opacity-90 transition-all flex items-center justify-center gap-2"
                >
                  Request Demo <ArrowRight size={18} />
                </a>
                <a
                  href={`${CONFIG.keansaWebsite}#decisionsync`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 border border-white/10 hover:border-white/20 text-white font-medium rounded-xl transition-all flex items-center justify-center gap-2"
                >
                  Learn More <ArrowUpRight size={18} />
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="glass rounded-3xl p-8 glow">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center mb-6">
                  <Brain className="text-white" size={40} />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {capabilities.map((cap, i) => (
                    <div key={i} className="p-4 bg-white/5 rounded-lg text-center">
                      <div className="text-violet-400 font-bold text-lg">{cap.value}</div>
                      <div className="text-white/50 text-sm">{cap.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              AI-Powered Capabilities
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto">
              Harness the power of AI to transform how your organization makes decisions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <div key={i} className="glass rounded-2xl p-6 glass-hover transition-all">
                <feature.icon className="text-violet-400 mb-4" size={28} />
                <h3 className="text-white font-display font-semibold mb-2">{feature.title}</h3>
                <p className="text-white/50 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              How It Works
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Connect', desc: 'Link your EPM platforms and data sources' },
              { step: '02', title: 'Analyze', desc: 'AI processes and learns from your data' },
              { step: '03', title: 'Predict', desc: 'Get forecasts and trend predictions' },
              { step: '04', title: 'Decide', desc: 'Make informed decisions with confidence' }
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className="glass rounded-2xl p-6 text-center h-full">
                  <div className="text-4xl font-display font-bold text-violet-400/30 mb-4">{item.step}</div>
                  <h3 className="text-white font-display font-semibold mb-2">{item.title}</h3>
                  <p className="text-white/50 text-sm">{item.desc}</p>
                </div>
                {i < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-white/20">
                    <ChevronRight size={24} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="glass rounded-3xl p-12 text-center glow">
            <h3 className="text-xl font-display font-semibold text-white mb-4">
              Coming Soon
            </h3>
            <p className="text-white/60 mb-8 max-w-xl mx-auto">
              Decision Sync AI is currently in development. Be the first to experience 
              AI-powered decision intelligence for your enterprise.
            </p>
            <a
              href={`${CONFIG.keansaWebsite}#contact`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex px-8 py-4 bg-gradient-to-r from-violet-500 to-purple-500 text-white font-semibold rounded-xl hover:opacity-90 transition-all items-center gap-2"
            >
              Join Early Access <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

// Main App Component
function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/plansync" element={<PlanSyncPage />} />
          <Route path="/decisionsync" element={<DecisionSyncPage />} />
        </Routes>
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
}

export default App;
