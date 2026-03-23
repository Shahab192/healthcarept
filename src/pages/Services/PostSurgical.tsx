import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';

export default function PostSurgical() {
  const navigate = useNavigate();

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="min-h-screen bg-paper-white text-slate-charcoal py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <button 
          onClick={() => navigate(-1)}
          className="mb-12 px-6 py-2 border border-bonsai-sage text-bonsai-sage hover:bg-bonsai-sage hover:text-white transition-colors rounded-full"
        >
          ← Back
        </button>

        <h1 className="text-5xl md:text-7xl font-serif mb-8 tracking-tight">Precision Recovery: Your Path After Surgery.</h1>
        
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <p className="text-xl text-slate-charcoal/70 leading-relaxed">
            <strong className="text-slate-charcoal">The Approach:</strong> "Surgery is only the first step. The second—and most critical—is how you move afterward. We provide a structured, phase-based protocol that respects your surgeon’s guidelines while pushing your boundaries safely."
          </p>
          <div className="bg-slate-charcoal/10 rounded-3xl h-80 flex items-center justify-center overflow-hidden">
            <img 
              src="/post-surgical-knee-rehab-joint-recovery-walnut.png" 
              alt="Clinical diagram of the human knee joint and ligaments for post-operative physical therapy and joint replacement recovery." 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-24">
          <div className="bg-white p-8 rounded-2xl border border-slate-charcoal/10 shadow-sm">
            <h3 className="text-2xl font-serif mb-4 text-bonsai-sage">Joint Replacements</h3>
            <p className="text-slate-charcoal/70">Specialized care for Hip, Knee, and Shoulder replacements to restore full range of motion.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl border border-slate-charcoal/10 shadow-sm">
            <h3 className="text-2xl font-serif mb-4 text-bonsai-sage">Tendon Repairs</h3>
            <p className="text-slate-charcoal/70">Precise loading for ACL reconstructions, Rotator Cuff repairs, and Achilles ruptures.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl border border-slate-charcoal/10 shadow-sm">
            <h3 className="text-2xl font-serif mb-4 text-bonsai-sage">Scar Tissue Management</h3>
            <p className="text-slate-charcoal/70">Manual techniques to prevent adhesions and ensure smooth, pain-free movement.</p>
          </div>
        </div>

        <div className="bg-bonsai-sage/5 p-12 rounded-3xl mb-16">
          <h2 className="text-3xl font-serif mb-6">The HCPT Difference</h2>
          <p className="text-lg text-slate-charcoal/70 max-w-3xl">"We coordinate directly with your surgical team. You aren't just a number; you are a recovery mission."</p>
        </div>

        <div className="text-center">
          <a href="tel:626-667-8600" className="inline-block bg-terracotta text-white px-12 py-4 rounded-full text-lg hover:bg-terracotta/90 transition-colors">
            Schedule Evaluation
          </a>
        </div>
      </div>
    </motion.div>
  );
}
