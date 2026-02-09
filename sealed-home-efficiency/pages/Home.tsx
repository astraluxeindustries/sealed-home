import React from 'react';
import { motion } from 'framer-motion';
import { Play, CheckCircle2, Home as HomeIcon, Wind, Zap, Thermometer, Leaf, Clock, Award } from 'lucide-react';
import Button from '../components/UI/Button';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const features = [
    { title: "Real Savings", desc: "Save up to $850 annually on energy bills.", icon: Zap },
    { title: "Improved HVAC", desc: "Extend lifespan and improve performance.", icon: Wind },
    { title: "Eco-Friendly", desc: "Contribute to a healthier planet.", icon: Leaf },
    { title: "Fast Process", desc: "In and out in a few short hours.", icon: Clock },
    { title: "Comfort", desc: "Consistent temperature in every room.", icon: HomeIcon },
    { title: "Healthier Air", desc: "Reduce dust, allergens, and contaminants.", icon: Thermometer },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1595815771614-ade9d652a65d?q=80&w=2070&auto=format&fit=crop" 
            alt="Couple relaxing in comfortable home" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-900/90 to-brand-800/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight font-serif">
                Sealed Home <br/><span className="text-brand-300">Efficiency</span>
              </h1>
              <p className="text-xl text-gray-200 mb-10 leading-relaxed font-light">
                Your Trusted Partner in Home Comfort and Energy Savings. 
                Experience the difference of a perfectly sealed home.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/services">
                    <Button variant="primary" showArrow className="w-full sm:w-auto text-lg py-4">
                    Learn More
                    </Button>
                </Link>
                <button className="flex items-center justify-center px-8 py-3 text-sm font-semibold text-white border border-white/30 rounded-full hover:bg-white/10 transition-all group w-full sm:w-auto">
                  <span className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                    <Play className="w-4 h-4 text-brand-600 ml-1" fill="currentColor" />
                  </span>
                  Watch Video
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Intro / Video Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Welcome To Sealed Home Efficiency, Your Trusted Dealer For Aeroseal
              </h2>
              <div className="w-20 h-1 bg-brand-500 mb-8" />
              <p className="text-gray-600 mb-6 leading-relaxed">
                We are committed to improving lives by delivering comfort, healthy air, and substantial energy savings. Our mission is to help you make your home more comfortable, your family healthier, and the environment cleaner.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                With our proven technology, we ensure precise sealing in just a few hours, making your home a better place. The industry-leading duct and air sealing technology is now within your reach.
              </p>
              <Link to="/services">
                <Button variant="primary">Discover Our Process</Button>
              </Link>
            </motion.div>

            <motion.div
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
               className="relative rounded-2xl overflow-hidden shadow-2xl group cursor-pointer"
            >
              <img 
                src="https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg" 
                alt="Holmes and Holmes Aeroseal Feature" 
                className="w-full h-full object-cover aspect-video group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-colors">
                <div className="w-20 h-20 bg-brand-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-white font-medium text-lg">Holmes and Holmes Features Aeroseal Duct Sealing</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3 Step Process */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600">Making Your Home Better In 3 Easy Steps</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                step: "01", 
                title: "Beginning the Process", 
                desc: "We start by blocking all vents and registers to pressurize your system. Internal components are protected. This pressurization allows our technology to find all cracks and leaks.",
                img: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop" 
              },
              { 
                step: "02", 
                title: "Precision Sealing", 
                desc: "We distribute our non-toxic, water-based sealant formula throughout your duct system. We monitor performance in real-time. The process varies between 60 minutes to a couple of hours.",
                img: "https://images.unsplash.com/photo-1581094794329-cd811969d39b?q=80&w=2070&auto=format&fit=crop" 
              },
              { 
                step: "03", 
                title: "Experience the Difference", 
                desc: "Once finished, we provide a certificate of completion including before and after leakage measurements. Backed by a 10-year warranty, you'll feel the difference right away.",
                img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop" 
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="h-48 overflow-hidden relative">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                    <div className="absolute top-4 left-4 bg-brand-500 text-white font-bold text-lg px-3 py-1 rounded">
                        {item.step}
                    </div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Grid / Accordion Replacement */}
      <section className="py-24 bg-brand-900 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Why Choose Aeroseal?</h2>
              <p className="text-gray-300 mb-8 text-lg">
                Our technology ensures that you experience significant improvements in your home's comfort, air quality, and energy efficiency instantly.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                 {features.map((feature, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-start space-x-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors border border-white/10"
                    >
                        <feature.icon className="w-8 h-8 text-brand-300 shrink-0" />
                        <div>
                            <h4 className="font-semibold text-white">{feature.title}</h4>
                            <p className="text-sm text-gray-400 mt-1">{feature.desc}</p>
                        </div>
                    </motion.div>
                 ))}
              </div>
            </div>
            
            <div className="flex items-center justify-center">
                <div className="bg-white p-2 rounded-2xl rotate-3 shadow-2xl max-w-md">
                   <img 
                    src="https://images.unsplash.com/photo-1631557993077-8326284be59c?q=80&w=1932&auto=format&fit=crop" 
                    alt="HVAC Worker" 
                    className="rounded-xl w-full"
                   />
                   <div className="p-4 text-brand-900">
                       <div className="flex items-center justify-between mb-2">
                           <span className="font-bold text-lg">Certified Efficiency</span>
                           <Award className="w-6 h-6 text-brand-500" />
                       </div>
                       <p className="text-sm text-gray-600">Join thousands of happy homeowners who have sealed their comfort.</p>
                   </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
           <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Transform Your Home?</h2>
           <p className="text-xl text-gray-600 mb-10">
             Contact us today to learn more about our residential services or to schedule a consultation.
           </p>
           <div className="flex justify-center space-x-6">
             <Link to="/contact">
               <Button variant="primary" className="px-10 py-4 text-lg">Get A Quote</Button>
             </Link>
             <Link to="/services">
               <Button variant="secondary" className="px-10 py-4 text-lg">View Services</Button>
             </Link>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Home;