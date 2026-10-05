import mywweb from '../assets/my wweb.png';
import { ArrowRight, CreditCard } from 'lucide-react';

function About() {
  return (
    <section
      className="
        relative
        w-full
        min-h-[600px]
        md:min-h-[700px]
        overflow-hidden
        bg-black
        bg-cover
        bg-center
        flex
        flex-col
        justify-center
        px-4
        sm:px-8
        md:px-12
        py-16
        sm:py-24
      "
      style={{ backgroundImage: `url(${mywweb})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/50 to-black/90 pointer-events-none" />

      {/* Hero Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-start gap-6">
        
        {/* Badges / Pill Tags */}
        <div className="animate-fade-in flex flex-row justify-start items-start">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#20b2a6]/10 border border-[#20b2a6]/30 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse shrink-0" />
            <span className="text-xs sm:text-sm font-medium text-[#20b2a6] whitespace-nowrap">
              🔥 #1 Rated Jollof & Grill Spot in Lekki
            </span>
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-white text-3xl sm:text-5xl md:text-6xl font-bold font-sans tracking-tight leading-tight max-w-3xl">
          From Humble Hearth To <br className="hidden sm:inline" />
          Lagos's Favorite Kitchen.
        </h1>

        {/* Subtitle / Paragraph */}
        <div className="text-gray-300 text-sm sm:text-base md:text-lg font-medium max-w-2xl space-y-2 leading-relaxed">
          <p>Experience the best of Nigerian cuisine in the heart of Lekki.</p>
          <p className="text-gray-400 text-xs sm:text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis saepe quidem, repudiandae molestiae impedit corporis at eius aspernatur tempora repellendus illo rem animi sed nulla fugit.
          </p>
        </div>

        {/* Call to Action Buttons */}
        <div className="flex items-center gap-3 flex-col sm:flex-row w-full sm:w-auto pt-2">
          <button className="w-full sm:w-auto justify-center flex items-center gap-2 bg-[#8B263E] hover:bg-[#721f32] active:scale-95 text-white font-medium px-6 py-3 rounded-full text-sm shadow-md transition-all cursor-pointer">
            <span>Explore Full Menu</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button className="w-full sm:w-auto justify-center flex items-center gap-2 bg-slate-100/90 hover:bg-white active:scale-95 text-slate-800 font-medium px-6 py-3 rounded-full text-sm transition-all border border-slate-200 cursor-pointer">
            <CreditCard className="w-4 h-4 text-slate-600" />
            <span>Order via Paystack</span>
          </button>
        </div>

      </div>
    </section>
  );
}

export default About;