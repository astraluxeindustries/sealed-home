import React from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import Button from '../components/UI/Button';

const Contact: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 font-serif">Get In Touch</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ready to improve your home's efficiency? We're here to help. Reach out to us via phone, email, or fill out the form below.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Cards */}
          <div className="space-y-6 lg:col-span-1">
             <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center text-center hover:border-brand-200 transition-colors">
                <div className="w-16 h-16 bg-brand-50 rounded-full flex items-center justify-center mb-6 text-brand-600">
                   <Phone className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Give Us A Call</h3>
                <p className="text-gray-500 text-sm mb-4">Monday - Friday, 8am - 6pm</p>
                <a href="tel:435-429-0974" className="text-2xl font-bold text-brand-600 hover:text-brand-700">(435) 429-0974</a>
             </div>

             <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center text-center hover:border-brand-200 transition-colors">
                <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mb-6 text-red-500">
                   <Mail className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Send Us A Message</h3>
                <p className="text-gray-500 text-sm mb-4">We reply within 24 hours</p>
                <a href="mailto:info@mysealedhome.com" className="font-medium text-gray-600 hover:text-brand-600">info@mysealedhome.com</a>
             </div>
          </div>

          {/* Form Section */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-xl p-8 md:p-12">
             <h2 className="text-2xl font-bold text-gray-900 mb-8">Send Us a Message</h2>
             <form className="space-y-6">
               <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 transition-all outline-none" placeholder="Your full name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 transition-all outline-none" placeholder="(555) 000-0000" />
                  </div>
               </div>

               <div>
                 <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                 <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 transition-all outline-none" placeholder="you@example.com" />
               </div>

               <div>
                 <label className="block text-sm font-medium text-gray-700 mb-2">Your Address (Optional)</label>
                 <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 transition-all outline-none" placeholder="Street Address, City, Zip" />
               </div>

               <div>
                 <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                 <textarea rows={5} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 transition-all outline-none resize-none" placeholder="How can we help you?"></textarea>
               </div>

               <div className="pt-4">
                 <Button type="submit" variant="primary" className="w-full md:w-auto px-10">
                   <Send className="w-4 h-4 mr-2" /> Send Message
                 </Button>
               </div>
             </form>
          </div>
        </div>

        <div className="mt-16 text-center">
           <div className="max-w-3xl mx-auto">
             <h3 className="text-lg font-bold text-gray-900 mb-4">Our Commitment</h3>
             <p className="text-gray-600 text-sm">
               At Sealed Home Efficiency, we're excited to help you improve the comfort and efficiency of your home. Our team is ready to answer any questions you may have about our services, the Aeroseal technology, or the process we use. We're here to guide you every step of the way.
             </p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;