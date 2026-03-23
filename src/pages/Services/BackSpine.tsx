import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function BackSpine() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Spine Specialist Diamond Bar | Back & Spine Care';
    const metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = 'Advanced Spine Health and Physical Therapy in Diamond Bar and Walnut.';
    document.head.appendChild(metaDescription);
    return () => { document.head.removeChild(metaDescription); };
  }, []);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="min-h-screen bg-paper-white text-slate-charcoal py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <button onClick={() => navigate('/')} className="mb-12 px-6 py-2 border border-bonsai-sage text-bonsai-sage hover:bg-bonsai-sage hover:text-white transition-colors rounded-full">← Home</button>

        <h1 className="text-5xl md:text-7xl font-serif mb-12 tracking-tight">Advanced Spine Health: Stability & Relief.</h1>
        
        <div className="grid md:grid-cols-2 gap-16 items-start mb-24">
          <p className="text-xl text-slate-charcoal/70 leading-relaxed">
            <strong className="text-slate-charcoal">The Approach:</strong> "Your spine is the central pillar of your movement. We don't just treat the 'ache'; we use mechanical diagnosis to determine if your pain is postural, structural, or nerve-related. Our goal is to decompress the spine and re-train the muscles that support it."
          </p>
          <div className="bg-slate-charcoal/10 rounded-3xl h-96 flex items-center justify-center border-t-4 border-bonsai-sage overflow-hidden">
            <img 
              src="/back-spine-rehab-walnut-ca-spine-alignment.png" 
              alt="Anatomical illustration of the human vertebral column for back pain and sciatica treatment at HealthCare Physical Therapy in Walnut." 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-24">
          <div className="border-t-2 border-slate-charcoal/20 pt-8">
            <h3 className="text-2xl font-serif mb-4 text-bonsai-sage">Sciatica & Disc Issues</h3>
            <p className="text-slate-charcoal/70">Targeted decompression and directional preference exercises to relieve radiating leg pain.</p>
          </div>
          <div className="border-t-2 border-slate-charcoal/20 pt-8">
            <h3 className="text-2xl font-serif mb-4 text-bonsai-sage">Herniated & Degenerative Discs</h3>
            <p className="text-slate-charcoal/70">Strengthening the deep "multifidus" muscles to provide a natural internal brace for your vertebrae.</p>
          </div>
          <div className="border-t-2 border-slate-charcoal/20 pt-8">
            <h3 className="text-2xl font-serif mb-4 text-bonsai-sage">Chronic Neck & Whiplash</h3>
            <p className="text-slate-charcoal/70">Restoring cervical mobility and correcting "tech-neck" posture to eliminate tension headaches.</p>
          </div>
        </div>

        <div className="bg-bonsai-sage/5 p-12 rounded-3xl mb-16">
          <h2 className="text-3xl font-serif mb-6">The HCPT Difference</h2>
          <p className="text-lg text-slate-charcoal/70 max-w-3xl">"We empower you with 'Self-Treatment' strategies. You’ll leave our Walnut clinic knowing exactly which movements heal your spine and which ones aggravate it."</p>
        </div>
      </div>
    </motion.div>
  );
}
