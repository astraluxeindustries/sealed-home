import React from 'react';
import { motion } from 'framer-motion';
import { Settings, Shield, Activity, ThermometerSun, Leaf, Zap } from 'lucide-react';
import Button from '../components/UI/Button';
import { Link } from 'react-router-dom';

const ResidentialServices: React.FC = () => {
  return (
    <div className="pt-0">
      {/* Header */}
      <section className="relative bg-brand-900 py-32">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1504384308090-c54be3852f33?q=80&w=2070&auto=format&fit=crop" 
            alt="HVAC Tech" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-serif">Residential Services</h1>
            <p className="text-brand-100 uppercase tracking-widest text-sm font-semibold">Enhancing Comfort and Efficiency In Your Home</p>
          </motion.div>
        </div>
      </section>

      {/* Intro Text */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            At Sealed Home Efficiency, we understand the importance of a comfortable and energy-efficient home. That's why we offer residential services using Aeroseal technology, a proven solution for sealing air ducts and improving the overall performance of your heating and cooling systems.
          </p>
          <div className="h-px bg-gray-200 w-full mb-12" />
          
          <h2 className="text-3xl font-bold text-brand-900 mb-10">Why Choose Sealed Home Efficiency for Your Home?</h2>
          
          <div className="grid md:grid-cols-2 gap-10">
            {[
              { 
                title: "Improved Comfort", 
                desc: "By sealing your air ducts, we can help ensure that air is evenly distributed throughout your home. No more hot or cold spots - just consistent comfort in every room.",
                icon: ThermometerSun
              },
              { 
                title: "Healthier Indoor Air", 
                desc: "Our sealing process can reduce the amount of dust and allergens that can enter your home through leaky ducts, leading to healthier indoor air.",
                icon: Shield
              },
              { 
                title: "Energy Savings", 
                desc: "Sealed ducts mean your heating and cooling system doesn't have to work as hard to maintain your desired temperature. This can lead to significant savings on your energy bills.",
                icon: Zap
              },
              { 
                title: "Longer HVAC System Life", 
                desc: "By reducing the strain on your heating and cooling system, our services can help extend the life of your HVAC equipment.",
                icon: Activity
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start"
              >
                <div className="bg-brand-50 p-3 rounded-lg mr-4 text-brand-600">
                  <item.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blue Cards Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Our Commitment",
                content: "We are committed to making a difference in the lives of our customers. Our mission is to help you create a living or working environment that not only feels good but also contributes to your health and wellbeing. We strive to make your homes and businesses more comfortable, your families and employees healthier, and the environment cleaner."
              },
              {
                title: "Real-Time Results",
                content: "With Sealed Home Efficiency, you can have peace of mind seeing real-time results while the cracks are being sealed. We provide a certificate of completion showing the before and after sealing results."
              },
              {
                title: "Our Technology",
                content: "Our technology is simple yet effective. We connect our proven technology to your home or business' heating & air system to distribute the sealing formula. This non-toxic, water-based formula effectively seals all the holes in the air ducts and vents, ensuring the air goes where it's needed - not where it doesn't."
              }
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-brand-700 text-white p-10 rounded-xl shadow-xl hover:-translate-y-2 transition-transform duration-300"
              >
                <h3 className="text-2xl font-bold mb-6 border-b border-brand-500 pb-4">{card.title}</h3>
                <p className="text-brand-100 text-sm leading-relaxed">{card.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
             <div className="absolute inset-0">
               <img src="https://images.unsplash.com/photo-1565514020176-db9944a66713?q=80&w=2064&auto=format&fit=crop" className="w-full h-full object-cover" alt="Join Us" />
               <div className="absolute inset-0 bg-gray-900/80" />
             </div>
             
             <div className="relative z-10 p-12 md:p-24 text-center md:text-left flex flex-col md:flex-row items-center justify-between">
               <div className="max-w-2xl">
                 <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Join Us in Making a Difference</h2>
                 <p className="text-gray-300 leading-relaxed">
                   We invite you to join us in making a difference. Let's work together to create more comfortable, healthier, and energy-efficient spaces. Contact us today to learn more about our services or to schedule a consultation.
                 </p>
               </div>
               <div className="mt-8 md:mt-0 md:ml-8 flex-shrink-0">
                 <Link to="/contact">
                    <Button variant="primary" className="!bg-brand-500 hover:!bg-brand-400">Request Consultation</Button>
                 </Link>
               </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResidentialServices;