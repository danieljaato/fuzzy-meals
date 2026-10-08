import mywweb from '../assets/my wweb.png';
import { ArrowRight, CreditCard, Flame } from 'lucide-react';

function About() {
  return (
    <div className="w-full">
      {/* Hero Section */}
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
<header className="relative z-10 -mt-12 mx-4 sm:mx-6 lg:mx-8 max-w-7xl bg-white rounded-xl shadow-xl border border-slate-100 py-6 px-4 sm:px-6 lg:px-8">
  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
    <div className="border-r border-slate-100 last:border-0">
      <span className="block text-3xl font-extrabold text-red-600">100k+</span>
      <span className="text-xs text-slate-500 font-medium uppercase tracking-wider">Meals Served Daily</span>
    </div>
    <div className="border-r border-slate-100 last:border-0">
      <span className="block text-3xl font-extrabold text-slate-900">2.7k</span>
      <span className="text-xs text-slate-500 font-medium uppercase tracking-wider">Local Farmers Partnered</span>
    </div>
    <div className="border-r border-slate-100 last:border-0">
      <span className="block text-3xl font-extrabold text-slate-900">35+</span>
      <span className="text-xs text-slate-500 font-medium uppercase tracking-wider">Authentic Recipes</span>
    </div>
    <div>
      <span className="block text-3xl font-extrabold text-slate-900">99.8%</span>
      <span className="text-xs text-slate-500 font-medium uppercase tracking-wider">Customer Satisfaction</span>
    </div>
  </div>
</header>
      <div className="bg-slate-50 text-slate-800 font-sans antialiased">
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
          {/* Sacred Craft Section */}
          <section>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
                  Our Sacred Craft & Food Philosophy
                </h2>
              </div>
              <p className="max-w-md text-sm text-slate-600">
                We blend centuries-old culinary traditions with modern sustainability practices to bring rich, vibrant flavors directly to your table.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-600 mb-4">
                    <Flame className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-lg text-slate-900 mb-2">The Fire & Hearth Philosophy</h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    Traditional slow-cooking over open hearths
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default About;