export default function Footer() {
  return (
    <footer className="bg-slate-charcoal text-paper-white py-20 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-serif mb-6">HealthCare Physical Therapy, Inc.</h3>
            <p className="text-paper-white/70">18856 Amar Rd, Unit #8</p>
            <p className="text-paper-white/70">Walnut, CA 91789</p>
          </div>
          <div>
            <h3 className="text-xl font-serif mb-6">Contact</h3>
            <p className="text-paper-white/70">Phone: (626) 667-8600</p>
            <p className="text-paper-white/70">Email: info@healthcarept.com</p>
          </div>
          <div>
            <h3 className="text-xl font-serif mb-6">Hours</h3>
            <p className="text-paper-white/70">Mon - Fri: 8am - 5pm</p>
          </div>
        </div>
        <div className="mt-16 border-t border-paper-white/10 pt-8 text-center text-paper-white/50 text-sm">
          <p>&copy; 2026 HealthCare Physical Therapy, Inc. All rights reserved.</p>
          <p className="mt-2">
            Designed and Built by{' '}
            <a href="https://buildandbloom.studio" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              BuildandBloom.Studio
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
