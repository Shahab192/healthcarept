import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';

export default function BalanceFall() {
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

        <h1 className="text-5xl md:text-7xl font-serif mb-12 tracking-tight">Stability & Confidence: Stay Independent, Stay Safe.</h1>
        
        <p className="text-xl text-slate-charcoal/70 leading-relaxed mb-24">
          <strong className="text-slate-charcoal">The Approach:</strong> "Falls are the leading cause of injury for seniors, but they are not an inevitable part of aging. Our Balance and Vestibular program uses science-based sensory testing to identify exactly why you feel unsteady."
        </p>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-serif mb-4 text-bonsai-sage">Vertigo & BPPV</h3>
              <p className="text-slate-charcoal/70">Specialized maneuvers to clear "ear crystals" and stop the spinning sensation.</p>
            </div>
            <div>
              <h3 className="text-2xl font-serif mb-4 text-bonsai-sage">Neuropathy Support</h3>
              <p className="text-slate-charcoal/70">Helping those with limited foot sensation find their center of gravity.</p>
            </div>
            <div>
              <h3 className="text-2xl font-serif mb-4 text-bonsai-sage">Proprioception Training</h3>
              <p className="text-slate-charcoal/70">Re-training the brain and body to communicate effectively during movement.</p>
            </div>
          </div>
          <div className="bg-slate-charcoal/10 rounded-3xl h-96 flex items-center justify-center overflow-hidden">
            <img 
              src="/vestibular-therapy-balance-fall-prevention-walnut.png" 
              alt="Medical illustration of the human vestibular system and inner ear anatomy for vertigo and balance disorder rehabilitation." 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        <div className="bg-bonsai-sage/5 p-12 rounded-3xl mb-16">
          <h2 className="text-3xl font-serif mb-6">The HCPT Difference</h2>
          <p className="text-lg text-slate-charcoal/70 max-w-3xl">"Our clinic is 100% wheelchair accessible with ample storefront parking at 18856 Amar Rd, Unit #8. We've removed every barrier to your care."</p>
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
