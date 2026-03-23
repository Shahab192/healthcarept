import { motion } from 'motion/react';

export default function Home() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="bg-paper-white text-slate-charcoal">
      {/* Hero Section */}
      <section className="relative min-h-screen w-full flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
          style={{ backgroundImage: 'url(/dr-saeed-healthcare-physical-therapy-walnut-ca-storefront.png)', backgroundPosition: 'center top' }}
        >
          <div className="absolute inset-0 bg-black/15"></div>
        </div>
        <div className="relative z-10 px-4 md:px-12 max-w-2xl text-left">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-[105px] leading-[116.5px] font-serif mb-6 tracking-tight text-white">
            Living Life Pain-Free
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }} className="text-[22px] font-light text-white/90 mb-24 max-w-2xl">
            Hope through precision. A sanctuary for your recovery.
          </motion.p>
          <motion.a href="tel:626-667-8600" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.4 }} className="bg-deep-teal text-white px-12 py-4 rounded-full text-lg hover:bg-deep-teal/90 transition-colors">
            Schedule Appointment
          </motion.a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-4 border-t border-slate-charcoal/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-serif mb-12 tracking-[0.05em]">Doctor-Led Recovery. Patient-Centered Care.</h2>
          <p className="text-lg text-slate-charcoal/70 mb-8">At HealthCare Physical Therapy, we believe the best outcomes happen when care is personal. Unlike high-volume clinics where patients are passed between assistants, Dr. Saeed provides dedicated, one-on-one attention for every visit.</p>
          <p className="text-lg text-slate-charcoal/70">Located in the heart of Walnut, we specialize in high-level Manual Therapy and individualized exercise programs to help you return to the life you love. Whether you are recovering from surgery or managing chronic pain, our 'Sanctuary' approach ensures you never feel like just another number.</p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-4 border-t border-slate-charcoal/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-serif mb-16 tracking-[0.05em]">Specialized Paths to Recovery</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {[
              { title: 'Back & Spine Care', sub: 'Sciatica, herniated discs, and chronic neck pain relief.', link: '/services/back-spine' },
              { title: 'Sports Injury & Performance', sub: 'Rapid recovery protocols for ACL tears and impact injuries.', link: '/services/sports-injury' },
              { title: 'Post-Surgical Recovery', sub: 'Tailored rehabilitation to regain mobility and strength.', link: '/services/post-surgical' },
              { title: 'Balance & Fall Prevention', sub: 'Specialized programs to improve stability and confidence.', link: '/services/balance-fall' },
            ].map((service) => (
              <a key={service.title} href={service.link} className="block group border border-slate-charcoal/10 bg-white p-10 rounded-3xl shadow-lg transition-all duration-300 hover:-translate-y-1.5 hover:border-deep-teal">
                <h3 className="text-2xl font-serif mb-4 text-deep-teal">{service.title}</h3>
                <p className="text-slate-charcoal/70 mb-6">{service.sub}</p>
                <span className="text-deep-teal font-medium group-hover:underline">Learn More →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Signature Treatments Section */}
      <section className="py-24 px-4 border-t border-slate-charcoal/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-serif mb-4 tracking-[0.05em] text-slate-charcoal">Elite Techniques. Personal Precision.</h2>
          <p className="text-lg text-slate-charcoal/70 mb-16">We combine advanced manual therapy with evidence-based rehabilitation to accelerate your healing.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Manual Therapy', sub: 'Expert joint mobilization and soft tissue manipulation to restore motion.', icon: '/Manual therapy.png' },
              { title: 'Therapeutic Exercise', sub: 'Individualized movement prescriptions to fix the root cause of pain.', icon: '/Theraputic Exercise.png' },
              { title: 'Sports Performance', sub: 'Biomechanical analysis to get you back to the game stronger than before.', icon: '/Sports Performance.png' },
              { title: 'Post-Op Protocols', sub: 'Surgeon-coordinated care for safe, effective recovery after surgery.', icon: '/Post-Op.png' },
            ].map((item) => (
              <div key={item.title} className="bg-[#F9F8F4] border border-slate-charcoal/10 p-8 rounded-2xl">
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

      {/* Testimonials Section */}
      <section className="py-24 px-4 border-t border-slate-charcoal/10">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-serif mb-16 tracking-[0.05em]">Patient Milestones</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <blockquote className="italic text-slate-charcoal/70 border-l-2 border-plum-purple pl-6">"The best PT in Walnut. Dr. Saeed took the time to listen and identified the root cause of my back pain."</blockquote>
            <blockquote className="italic text-slate-charcoal/70 border-l-2 border-plum-purple pl-6">"Transitioned from a walker to walking unassisted. Friendly, professional, and knowledgeable."</blockquote>
            <blockquote className="italic text-slate-charcoal/70 border-l-2 border-plum-purple pl-6">"My tennis elbow is gone. Their sports-specific approach is unmatched."</blockquote>
          </div>
        </div>
      </section>

      {/* Our Facility Section */}
      <section className="py-24 px-4 border-t border-slate-charcoal/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-serif mb-16 tracking-tight text-slate-charcoal text-center">Walnut’s Clinic for Precision Healing.</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1: Comfort */}
            <div className="bg-[#F9F8F4] border border-slate-charcoal/5 p-10 rounded-3xl">
              <div className="mb-6">
                <svg className="w-12 h-12 text-deep-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
              </div>
              <h3 className="text-2xl font-serif mb-4 text-slate-charcoal">A Tranquil Sanctuary.</h3>
              <p className="text-slate-charcoal/70">We provide a modern, calm, and wheelchair-accessible space located directly in the heart of the Amar Road, Walnut West Plaza.</p>
            </div>

            {/* Card 2: Excellence */}
            <div className="bg-[#F9F8F4] border border-slate-charcoal/5 p-10 rounded-3xl">
              <div className="mb-6">
                <svg className="w-12 h-12 text-deep-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
              </div>
              <h3 className="text-2xl font-serif mb-4 text-slate-charcoal">Doctor-Led Care.</h3>
              <p className="text-slate-charcoal/70">You will always be treated by Dr. Saeed directly—not by an assistant. We prioritize unhurried, one-on-one manual therapy sessions.</p>
            </div>

            {/* Card 3: Action */}
            <div className="bg-[#F9F8F4] border border-slate-charcoal/5 p-10 rounded-3xl flex flex-col">
              <div className="mb-6">
                <svg className="w-12 h-12 text-deep-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="text-2xl font-serif mb-4 text-slate-charcoal">Start Your Recovery.</h3>
              <p className="text-slate-charcoal/70 mb-8 flex-grow">No referral needed. Direct Access allows you to get evaluated and begin healing today.</p>
            </div>
          </div>
          
          <div className="text-center mt-16">
            <a href="tel:626-667-8600" className="inline-block bg-deep-teal text-white px-12 py-5 rounded-full text-xl font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              Schedule Appointment
            </a>
          </div>
        </div>
      </section>

      {/* Serving Our Community Section */}
      <section className="py-24 px-4 border-t border-slate-charcoal/10 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-serif mb-12 tracking-[0.05em]">Serving Our Community</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {[
              { name: 'Walnut', link: '/cities/walnut' },
              { name: 'Diamond Bar', link: '/cities/diamond-bar' },
              { name: 'West Covina', link: '/cities/west-covina' },
              { name: 'Pomona', link: '/cities/pomona' },
              { name: 'City of Industry', link: '/cities/city-of-industry' },
              { name: 'Rowland Heights', link: '/cities/rowland-heights' },
              { name: 'Covina', link: '/cities/covina' },
              { name: 'San Dimas', link: '/cities/san-dimas' },
            ].map((city) => (
              <a key={city.name} href={city.link} className="text-plum-purple font-medium text-lg hover:text-deep-teal transition-colors">
                {city.name}
              </a>
            ))}
          </div>
          <a href="/service-area" className="text-deep-teal hover:underline">...and more</a>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 px-4 border-t border-slate-charcoal/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-serif mb-12 tracking-[0.05em]">Find Us</h2>
          <div className="w-full h-96 rounded-3xl overflow-hidden shadow-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3306.908053580547!2d-117.8765275246777!3d34.02047397315866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c32a76f1e8093d%3A0x6790b4d458641a96!2s18856%20Amar%20Rd%2C%20Walnut%2C%20CA%2091789!5e0!3m2!1sen!2sus!4v1711066500000!5m2!1sen!2sus&iconColor=008B8B" 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'grayscale(100%) hue-rotate(150deg)' }} 
              allowFullScreen={false} 
              loading="lazy"
              referrerPolicy="no-referrer"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 px-4 border-t border-slate-charcoal/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-serif mb-16">Frequently Asked Questions</h2>
          <div className="space-y-12">
            <div>
              <h4 className="text-lg font-medium mb-2">What should I expect during my first visit?</h4>
              <p className="text-slate-charcoal/70">Your first visit is all about discovery. Dr. Saeed or one of our specialists will perform a comprehensive evaluation of your movement, strength, and pain points. We listen to your goals and create a personalized roadmap for your recovery.</p>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-2">How long does a typical session last?</h4>
              <p className="text-slate-charcoal/70">Most sessions at HealthCare Physical Therapy, Inc. last between 45 to 60 minutes. We pride ourselves on providing thorough, focused care—we never rush our patients.</p>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-2">Do you accept my insurance?</h4>
              <p className="text-slate-charcoal/70">We work with a wide range of insurance providers, including many PPO plans, Medicare, and Worker’s Compensation. Please call our office at (909) 555-0123, and our staff will be happy to verify your benefits for you.</p>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-2">Is there parking available at the clinic?</h4>
              <p className="text-slate-charcoal/70">Yes! We are conveniently located in a professional plaza with ample, free storefront parking and full wheelchair accessibility to make your visit as stress-free as possible.</p>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
