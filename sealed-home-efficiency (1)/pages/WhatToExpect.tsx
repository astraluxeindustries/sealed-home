import React from 'react';
import { motion } from 'framer-motion';
import { Snowflake, CheckCircle } from 'lucide-react';

const WhatToExpect: React.FC = () => {
  return (
    <div className="pt-0">
       <section className="bg-brand-50 py-24">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
               <h1 className="text-4xl font-bold text-brand-900 mb-6 font-serif">What to Expect with Results</h1>
               <p className="text-xl text-gray-600">Sealed Home Efficiency</p>
            </div>

            <div className="flex flex-col lg:flex-row gap-16 items-start">
               <motion.div 
                 initial={{ opacity: 0, x: -30 }}
                 animate={{ opacity: 1, x: 0 }}
                 className="flex-1 text-gray-700 space-y-8"
               >
                 <p className="leading-relaxed text-lg">
                   At Sealed Home Efficiency, we believe in delivering tangible results that you can see and feel. Our use of Aeroseal technology ensures that you experience significant improvements in your home's comfort, air quality, and energy efficiency.
                 </p>
                 
                 <div className="space-y-4">
                   {[
                     "Comfort You Can Feel",
                     "Healthier Air for Your Family",
                     "Real Savings on Your Energy Bills",
                     "Improved HVAC Performance",
                     "Eco-Friendly Home",
                     "Fast and Easy Process"
                   ].map((item, i) => (
                     <div key={i} className="flex items-center text-brand-700 font-semibold p-4 bg-white rounded-lg shadow-sm border border-brand-100 hover:shadow-md transition-shadow">
                       <CheckCircle className="w-5 h-5 mr-3 text-brand-500" />
                       {item}
                     </div>
                   ))}
                 </div>
               </motion.div>

               <motion.div 
                 initial={{ opacity: 0, x: 30 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ delay: 0.2 }}
                 className="lg:w-1/3 w-full"
               >
                 <div className="bg-brand-600 rounded-2xl p-10 text-white text-center shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-10">
                        <Snowflake size={120} />
                    </div>
                    
                    <div className="relative z-10">
                        <div className="flex justify-center mb-6">
                            <Snowflake className="w-16 h-16" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4">Certified Results</h3>
                        <div className="h-0.5 w-16 bg-white/50 mx-auto mb-6"></div>
                        <p className="text-brand-50 text-sm leading-relaxed mb-6">
                            After the sealing process, we provide a certificate of completion showing the before and after results. This gives you a clear picture of the improvements made to your home's comfort and efficiency.
                        </p>
                        <p className="text-brand-50 text-sm leading-relaxed">
                            At Sealed Home Efficiency, we're proud to bring the benefits of Aeroseal to your home. Contact us today to learn more about our services or to schedule a consultation.
                        </p>
                    </div>
                 </div>
               </motion.div>
            </div>
         </div>
       </section>
    </div>
  );
};

export default WhatToExpect;