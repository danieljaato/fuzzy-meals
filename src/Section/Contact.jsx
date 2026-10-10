import { PhoneCall,  MapPin, Flame, Leaf, UtensilsCrossed } from 'lucide-react';
import React, { useState } from 'react';
import {  
  Clock, 
  Truck, 
  Send, 
  ShieldCheck, 
  Calendar, 
  Users, 
  Phone, 
  Mail, 
  User, 
  FileText 
} from 'lucide-react';


  const preferencesList = [
    'Halaal Certified', 
    'Vegetarian / Plant-Forward', 
    'Extra Pepper Simmer', 
    'Gluten-Sensitive'
  ];

const Nigerian = [
  {
    icon: Flame,
    title: 'The Fire & Hearth Philosophy',
    description:
      'Traditional slow-cooking over open hearths preserves the authentic flavors of our dishes, ensuring every bite is a journey back to our roots.',
  },
  {
    icon: Leaf,
    title: 'Farm-Fresh Sourcing',
    description:
      'We partner directly with local farmers across Nigeria to source fresh, organic ingredients delivered to our kitchens daily.',
  },
  
];

function Contact() {
  const [selectedPreferences, setSelectedPreferences] = useState(['Halaal Certified']);

  const togglePreference = (pref) => {
    setSelectedPreferences(prev => 
      prev.includes(pref) ? prev.filter(p => p !== pref) : [...prev, pref]
    );
  };

  const preferencesList = [
    'Halaal Certified', 
    'Vegetarian / Plant-Forward', 
    'Extra Pepper Simmer', 
    'Gluten-Sensitive'
  ];

  return (
    <section className="relative w-full bg-[#20b2a6]/[0.02] py-16 sm:py-24 px-4 sm:px-8 md:px-12 overflow-hidden">
      
      {/* Hero Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-start gap-12">
        
        {/* Top Contact Header Wrapper */}
        <div className="flex flex-col items-start gap-6 w-full">
          {/* Badge */}
          <div className="animate-fade-in flex flex-row justify-start items-start">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#20b2a6]/10 border border-[#20b2a6]/30 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse shrink-0" />
              <span className="text-xs sm:text-sm font-medium text-[#20b2a6] whitespace-nowrap">
                📞 Get In Touch
              </span>
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-tight sm:leading-none text-black">
            Get In Touch With Our{' '}
            <span className="text-[#a43700]">Hearth <br /> Team</span> <br className="hidden sm:inline text-[#a43700]" />
          </h1>

          {/* Subtitle */}
          <div className="text-slate-600 text-sm sm:text-base md:text-lg font-medium max-w-2xl space-y-2 leading-relaxed">
            <p>Have questions about reservations, catering, or bulk orders?</p>
            <p className="text-slate-500 text-xs sm:text-sm">
              Reach out to our team directly or visit our flagship restaurant in Lekki Phase 1, Lagos.
            </p>
          </div>

          {/* Quick Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full pt-2">
            <div className="flex items-center gap-3 p-4 rounded-xl bg-white/80 border border-slate-100 shadow-sm backdrop-blur-sm">
              <MapPin className="w-5 h-5 text-[#20b2a6] shrink-0" />
              <div className="text-xs sm:text-sm">
                <p className="font-semibold text-black">Location</p>
                <p className="text-slate-500">Admiralty Way, Lekki Phase 1, Lagos</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 rounded-xl bg-white/80 border border-slate-100 shadow-sm backdrop-blur-sm">
              <PhoneCall className="w-5 h-5 text-[#20b2a6] shrink-0" />
              <div className="text-xs sm:text-sm">
                <p className="font-semibold text-black">Call Us</p>
                <p className="text-slate-500">+234 (0) 800 123 4567</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 rounded-xl bg-white/80 border border-slate-100 shadow-sm backdrop-blur-sm">
              <Mail className="w-5 h-5 text-[#20b2a6] shrink-0" />
              <div className="text-xs sm:text-sm">
                <p className="font-semibold text-black">Email Us</p>
                <p className="text-slate-500">hello@jollofandgrill.ng</p>
              </div>
            </div>
          </div>
        </div>

        {/* Philosophy Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full pt-4 ">
          {Nigerian.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <div key={index} className="bg-[#20b2a6]/10 rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-600 mb-4">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-lg text-slate-900 mb-2">{card.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    {card.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>

<section className="relative w-full bg-[#faf9f5] py-16 sm:py-24 px-4 sm:px-8 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* LEFT COLUMN: Reservation Form (7 Cols) */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-100">
          
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Reserve a Table or Reach Out
            </h2>
            <p className="text-sm text-slate-500 mt-2 leading-relaxed">
              Whether you're booking an intimate dinner at our Lekki terrace, planning a corporate feast, or need direct kitchen assistance.
            </p>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
            
            {/* Full Name & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input 
                  type="text" 
                  placeholder="Adeyemi Adeleke" 
                  className="w-full px-4 py-3 rounded-xl bg-slate-50/80 border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#a43700]/20 focus:border-[#a43700] transition"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input 
                  type="email" 
                  placeholder="adeyemi@example.ng" 
                  className="w-full px-4 py-3 rounded-xl bg-slate-50/80 border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#a43700]/20 focus:border-[#a43700] transition"
                  required
                />
              </div>
            </div>

            {/* Phone Number & Subject */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input 
                  type="tel" 
                  placeholder="+234 803 123 4567" 
                  className="w-full px-4 py-3 rounded-xl bg-slate-50/80 border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#a43700]/20 focus:border-[#a43700] transition"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                  Subject <span className="text-red-500">*</span>
                </label>
                <select 
                  className="w-full px-4 py-3 rounded-xl bg-slate-50/80 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#a43700]/20 focus:border-[#a43700] transition"
                  defaultValue="Table Reservation (Lekki Hearth)"
                >
                  <option>Table Reservation (Lekki Hearth)</option>
                  <option>Catering Inquiry</option>
                  <option>Bulk Order / Delivery</option>
                  <option>General Support</option>
                </select>
              </div>
            </div>

            {/* Date & Time / Party Size */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                  Reservation Date & Time
                </label>
                <input 
                  type="datetime-local" 
                  className="w-full px-4 py-3 rounded-xl bg-slate-50/80 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#a43700]/20 focus:border-[#a43700] transition"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                  Party Size
                </label>
                <select 
                  className="w-full px-4 py-3 rounded-xl bg-slate-50/80 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#a43700]/20 focus:border-[#a43700] transition"
                  defaultValue="2"
                >
                  <option value="1">1 Guest (Solo Bar)</option>
                  <option value="2">2 Guests (Cozy Booth)</option>
                  <option value="4">4 Guests (Standard Table)</option>
                  <option value="6">6+ Guests (Family Table)</option>
                  <option value="10">10+ Guests (Terrace Feast)</option>
                </select>
              </div>
            </div>

            {/* Message & Special Requests */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                Message & Special Requests
              </label>
              <textarea 
                rows="4"
                placeholder="Share dietary allergies, celebratory preferences, or specifics about your inquiry..."
                className="w-full px-4 py-3 rounded-xl bg-slate-50/80 border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#a43700]/20 focus:border-[#a43700] transition resize-none"
              ></textarea>
            </div>

            {/* Dietary Preferences Badges */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-2">
                Dietary Preferences or Focus (Optional):
              </label>
              <div className="flex flex-wrap gap-2">
                {preferencesList.map((pref) => {
                  const isSelected = selectedPreferences.includes(pref);
                  return (
                    <button
                      type="button"
                      key={pref}
                      onClick={() => togglePreference(pref)}
                      className={`text-xs px-3.5 py-1.5 rounded-full font-medium transition border ${
                        isSelected 
                          ? 'bg-slate-900 text-white border-slate-900 shadow-sm' 
                          : 'bg-slate-50 text-slate-600 border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      {pref}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Footer Submit Bar */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-100">
              <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Instant SMS & Email Confirmation</span>
              </div>

              <button 
                type="submit" 
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#a43700] hover:bg-[#8e2f00] text-white font-medium text-sm transition shadow-md shadow-[#a43700]/20"
              >
                <span>Send Message</span>
                <Send className="w-4 h-4" />
              </button>
            </div>

          </form>
        </div>

        {/* RIGHT COLUMN: Restaurant Hub Cards (5 Cols) */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          
          {/* Card 1: Lekki Main Kitchen */}
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 relative overflow-hidden">
            <div className="absolute top-4 right-4 bg-emerald-50 text-emerald-700 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border border-emerald-100">
              Seated • Pickup • Delivery
            </div>

            <p className="text-[11px] font-bold tracking-wider uppercase text-[#a43700] mb-1">
              Flagship Restaurant & Terrace
            </p>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Lekki Main Kitchen</h3>

            <div className="space-y-2.5 text-sm text-slate-600 mb-5">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-1" />
                <span>14 Admiralty Way, Lekki Phase 1, Lagos, Nigeria</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-slate-400 shrink-0 mt-1" />
                <span>Monday – Sunday: <strong className="text-slate-800">8:00 AM – 10:30 PM</strong> daily</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Truck className="w-4 h-4 text-slate-400 shrink-0 mt-1" />
                <span className="text-xs text-slate-500">Delivery coverage: Ikoyi, Victoria Island, Lekki 1 & 2, Oniru, Chevron</span>
              </div>
            </div>

            {/* Embedded Mini Image Preview Banner matching UI style */}
            <div className="rounded-2xl overflow-hidden relative h-36 border border-slate-100 shadow-inner">
              <img 
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=600" 
                alt="Restaurant interior" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4">
                <span className="text-white text-xs font-semibold">Contact Us / Dine-In Atmosphere</span>
              </div>
            </div>
          </div>

          {/* Card 2: Ikeja Mainland Cloud Kitchen */}
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 relative">
            <div className="absolute top-4 right-4 bg-amber-50 text-amber-700 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border border-amber-100">
              Delivery & Pickup
            </div>

            <p className="text-[11px] font-bold tracking-wider uppercase text-[#a43700] mb-1">
              Mainland Express Hub
            </p>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Ikeja Mainland Cloud Kitchen</h3>

            <div className="space-y-2.5 text-sm text-slate-600">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-1" />
                <span>22 Isaac John Street, GRA Ikeja, Lagos, Nigeria</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-slate-400 shrink-0 mt-1" />
                <span>Monday – Saturday: <strong className="text-slate-800">9:00 AM – 10:00 PM</strong> | Sun: 11:00 AM – 9:00 PM</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Truck className="w-4 h-4 text-slate-400 shrink-0 mt-1" />
                <span className="text-xs text-slate-500">Delivery coverage: Ikeja GRA, Maryland, Magodo, Alausa, Ilupeju, Opebi</span>
              </div>
            </div>
          </div>

          {/* Card 3: Dual-Hub Sync Info Pill */}
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 flex items-center justify-between text-xs text-slate-600">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-semibold text-slate-900">Lagos Hearth Dispatch Map</span>
            </div>
            <span className="text-orange-600 font-medium">Dual-Hub Sync Active</span>
          </div>

        </div>

      </div>
    </section>
    </section>
  );
}

export default Contact;
