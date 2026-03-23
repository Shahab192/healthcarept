import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';

interface CityLandingProps {
  cityName: string;
  patientReview: string;
  reviewerName: string;
  localConnectionCopy: string;
  seoFocus: string;
}

export default function CityLandingTemplate({ cityName, patientReview, reviewerName, localConnectionCopy, seoFocus }: CityLandingProps) {
  const navigate = useNavigate();

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="min-h-screen bg-paper-white text-slate-charcoal">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
          style={{ backgroundImage: 'url(/dr-saeed-healthcare-physical-therapy-walnut-ca-storefront.png)', backgroundPosition: 'center top' }}
        >
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        <h1 className="relative z-10 text-5xl md:text-7xl font-serif text-white tracking-tight">Physical Therapy in {cityName}</h1>
      </section>

      {/* Main Content */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Column A: Proof */}
          <div className="bg-plum-purple/5 p-12 rounded-3xl">
            <blockquote className="text-2xl font-serif italic text-slate-charcoal mb-6">"{patientReview}"</blockquote>
            <cite className="text-lg font-medium text-slate-charcoal/70">— {reviewerName}, {cityName}</cite>
          </div>

          {/* Column B: Context */}
          <div>
            <h2 className="text-3xl font-serif mb-6 text-deep-teal">Serving {cityName}</h2>
            <p className="text-lg text-slate-charcoal/70 mb-8">{localConnectionCopy}</p>
            <button 
              onClick={() => navigate('/contact')}
              className="bg-deep-teal text-white px-8 py-3 rounded-full hover:bg-deep-teal/90 transition-colors"
            >
              Schedule Your {cityName} Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Signature Treatments Section */}
      <section className="py-24 px-4 border-t border-slate-charcoal/10 bg-[#F9F8F4]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-serif mb-12 text-center text-deep-teal">Signature Treatments</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Manual Therapy', sub: 'Expert joint mobilization and soft tissue manipulation.', icon: '/Manual therapy.png' },
              { title: 'Therapeutic Exercise', sub: 'Individualized movement prescriptions.', icon: '/Theraputic Exercise.png' },
              { title: 'Sports Performance', sub: 'Biomechanical analysis for athletes.', icon: '/Sports Performance.png' },
              { title: 'Post-Op Protocols', sub: 'Surgeon-coordinated recovery.', icon: '/Post-Op.png' },
            ].map((item) => (
              <div key={item.title} className="bg-white border border-slate-charcoal/10 p-8 rounded-2xl">
                <div className="mb-4">
                  <img src={item.icon} alt={item.title} className="w-12 h-12 object-contain" />
                </div>
                <h3 className="text-xl font-serif mb-3 text-slate-charcoal">{item.title}</h3>
                <p className="text-slate-charcoal/70 text-sm">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
