import { PhoneCall, Mail, MapPin } from 'lucide-react';

function Contact() {
  return (
    <section className="relative w-full  py-16 sm:py-24 px-4 sm:px-8 md:px-12 overflow-hidden">
      
      {/* Hero Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-start gap-6">
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
        <h1 className="text-black  text-3xl sm:text-5xl md:text-6xl font-bold font-sans tracking-tight leading-tight max-w-3xl">
          We’d Love To Hear <br className="hidden sm:inline" />
          From You.
        </h1>

        {/* Subtitle */}
        <div className="text-gray-300 text-sm sm:text-base md:text-lg font-medium max-w-2xl space-y-2 leading-relaxed">
          <p>Have questions about reservations, catering, or bulk orders?</p>
          <p className="text-gray-400 text-xs sm:text-sm">
            Reach out to our team directly or visit our flagship restaurant in Lekki Phase 1, Lagos.
          </p>
        </div>

        {/* Quick Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full pt-6">
          <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm text-gray-200">
            <MapPin className="w-5 h-5 text-[#20b2a6] shrink-0" />
            <div className="text-xs sm:text-sm">
              <p className="font-semibold text-black">Location</p>
              <p className="text-gray-400">Admiralty Way, Lekki Phase 1, Lagos</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm text-gray-200">
            <PhoneCall className="w-5 h-5 text-[#20b2a6] shrink-0" />
            <div className="text-xs sm:text-sm">
              <p className="font-semibold text-black">Call Us</p>
              <p className="text-gray-400">+234 (0) 800 123 4567</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm text-gray-200">
            <Mail className="w-5 h-5 text-[#20b2a6] shrink-0" />
            <div className="text-xs sm:text-sm">
              <p className="font-semibold text-black">Email Us</p>
              <p className="text-gray-400">hello@jollofandgrill.ng</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;