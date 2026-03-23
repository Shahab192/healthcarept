import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function SportsInjury() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Walnut Sports Physical Therapy | Elite Recovery';
    const metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = 'Elite Sports Physical Therapy and Biomechanical Analysis in Walnut, CA.';
    document.head.appendChild(metaDescription);
    return () => { document.head.removeChild(metaDescription); };
  }, []);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="min-h-screen bg-paper-white text-slate-charcoal py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <button onClick={() => navigate('/')} className="mb-12 px-6 py-2 border border-bonsai-sage text-bonsai-sage hover:bg-bonsai-sage hover:text-white transition-colors rounded-full">← Home</button>

        <h1 className="text-5xl md:text-7xl font-serif mb-12 tracking-tight">Elite Recovery: Built for the Modern Athlete.</h1>
        
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <div className="bg-slate-charcoal/10 rounded-3xl h-96 flex items-center justify-center border-l-4 border-bonsai-sage overflow-hidden">
            <img 
              src="/sports-injury-physical-therapy-performance-walnut-ca.png" 
              alt="Dynamic musculoskeletal system diagram of an athlete used for sports injury rehabilitation and biomechanical analysis." 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <p className="text-xl text-slate-charcoal/70 leading-relaxed">
            <strong className="text-slate-charcoal">The Approach:</strong> "A sports injury is a mechanical failure under stress. We analyze your movement patterns—the way you pivot, run, or throw—to find the flaw that led to the injury. We don't just get you back to the game; we make you harder to break."
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-24">
          <div className="bg-white p-8 rounded-2xl border border-slate-charcoal/10 shadow-lg hover:border-bonsai-sage transition-colors">
            <h3 className="text-2xl font-serif mb-4 text-bonsai-sage">Lower Extremity Power</h3>
            <p className="text-slate-charcoal/70">ACL/MCL recovery, meniscus tears, and high-ankle sprains.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl border border-slate-charcoal/10 shadow-lg hover:border-bonsai-sage transition-colors">
            <h3 className="text-2xl font-serif mb-4 text-bonsai-sage">Overhead & Throwing</h3>
            <p className="text-slate-charcoal/70">Rotator cuff stability, Tennis Elbow (Lateral Epicondylitis), and "Pitcher's Shoulder."</p>
          </div>
          <div className="bg-white p-8 rounded-2xl border border-slate-charcoal/10 shadow-lg hover:border-bonsai-sage transition-colors">
            <h3 className="text-2xl font-serif mb-4 text-bonsai-sage">Impact & Running</h3>
            <p className="text-slate-charcoal/70">Stress fracture recovery, Shin Splints, and Plantar Fasciitis.</p>
          </div>
        </div>

        <div className="bg-bonsai-sage/5 p-12 rounded-3xl mb-16">
          <h2 className="text-3xl font-serif mb-6">The HCPT Difference</h2>
          <p className="text-lg text-slate-charcoal/70 max-w-3xl">"Our sports rehab is performance-based. We use progressive loading and agility drills to ensure your first game back isn't your last."</p>
        </div>
      </div>
    </motion.div>
  );
}
