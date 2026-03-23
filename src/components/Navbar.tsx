import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full z-100 bg-white/80 backdrop-blur-sm border-b border-slate-charcoal/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex items-center">
            <img src="/logo.png" alt="HealthCare Physical Therapy, Inc. Logo" className="h-12 w-auto" />
          </Link>
          <div className="hidden md:flex space-x-8 text-sm text-slate-charcoal/70">
            <a href="#about" className="hover:text-deep-teal">About</a>
            <a href="#services" className="hover:text-deep-teal">Services</a>
            <a href="#faq" className="hover:text-deep-teal">FAQ</a>
          </div>
          <a href="tel:626-667-8600" className="bg-deep-teal text-white px-6 py-2 rounded-full text-sm hover:bg-deep-teal/90 transition-colors">
            (626) 667-8600
          </a>
        </div>
      </div>
    </nav>
  );
}
