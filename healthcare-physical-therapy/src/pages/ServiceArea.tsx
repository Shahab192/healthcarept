import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';

export default function ServiceArea() {
  const navigate = useNavigate();

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="min-h-screen bg-paper-white text-slate-charcoal py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <button 
          onClick={() => navigate(-1)}
          className="mb-12 px-6 py-2 border border-bonsai-sage text-bonsai-sage hover:bg-bonsai-sage hover:text-white transition-colors rounded-full"
        >
          ← Back
        </button>

        <h1 className="text-5xl md:text-7xl font-serif mb-8 tracking-tight">Serving Walnut and the Greater San Gabriel Valley</h1>
        <p className="text-lg text-slate-charcoal/70 mb-16">Expert physical therapy and sports rehabilitation serving Walnut, Diamond Bar, West Covina, and surrounding communities. Doctor-led care within 30 minutes of your home.</p>

        <section className="mb-16">
          <h2 className="text-3xl font-serif mb-6">Our Core Community</h2>
          <p className="text-lg text-slate-charcoal/70 mb-4">“Located in the heart of Walnut at the Amar Road Professional Plaza, we are the primary choice for personalized, one-on-one physical therapy for residents in our immediate neighborhood.”</p>
          <p className="text-lg font-medium">Primary Cities: Walnut, Diamond Bar, West Covina, Rowland Heights.</p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-serif mb-6">Extended Service Area</h2>
          <p className="text-lg text-slate-charcoal/70 mb-8">“Our clinic is easily accessible via the 57, 60, and 10 freeways, making us a convenient 'recovery sanctuary' for patients commuting from across the region.”</p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-medium mb-2">North</h3>
              <p className="text-slate-charcoal/70">San Dimas, Covina, Glendora, Azusa, La Verne.</p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">East</h3>
              <p className="text-slate-charcoal/70">Pomona, Montclair, Claremont, Chino, Chino Hills.</p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">South</h3>
              <p className="text-slate-charcoal/70">City of Industry, Hacienda Heights, La Puente.</p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">West</h3>
              <p className="text-slate-charcoal/70">West Covina, Baldwin Park, El Monte.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-serif mb-6">Why Patients Travel to HCPT</h2>
          <ul className="space-y-6 text-lg text-slate-charcoal/70">
            <li><strong className="text-slate-charcoal">Easy Commute:</strong> Ample storefront parking and a quiet, professional plaza setting.</li>
            <li><strong className="text-slate-charcoal">Doctor-Led Excellence:</strong> Patients from across the valley choose us to ensure they work directly with Dr. Saeed, rather than assistants at high-volume clinics.</li>
            <li><strong className="text-slate-charcoal">Centralized Location:</strong> Perfectly situated for those living in Diamond Bar or Pomona who work in the City of Industry or West Covina.</li>
          </ul>
        </section>
      </div>
    </motion.div>
  );
}
