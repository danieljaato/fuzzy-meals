import fu from "../assets/fu.png";
import { 
  UtensilsCrossed, 
  CreditCard, 
  CheckCircle2, 
  Star,
  Flame, 
  Leaf, 
  Bike, 
  ShieldCheck 
} from 'lucide-react';

const detailedFeatures = [
  {
    icon: Flame,
    title: 'Hearth Wood-Smoked',
    description: 'Authentic Nigerian firewood aroma sealed in heavy Cast Iron Dutch ovens.',
    bgColor: 'bg-red-100',
    iconColor: 'text-red-500',
  },
  {
    icon: Leaf,
    title: '100% Fresh Produce',
    description: 'Farm-direct plum tomatoes, habaneros, and organic herbs picked at dawn.',
    bgColor: 'bg-green-100',
    iconColor: 'text-green-500',
  },
  {
    icon: Bike,
    title: '30-Min Rapid Drop',
    description: 'Dedicated fleet covering Ikoyi, VI, Lekki Phase 1, and Oniru at piping temperatures.',
    bgColor: 'bg-pink-100',
    iconColor: 'text-pink-500',
  },
  {
    icon: ShieldCheck,
    title: 'Paystack Escrow',
    description: 'One-click cards, USSD, and instant transfers with verified bank-grade encryption.',
    bgColor: 'bg-teal-100',
    iconColor: 'text-teal-600',
  },
];

function Hero() {
  // Overlapping avatar initials & colors
  const avatars = [
    { label: 'KO', bg: 'bg-pink-200 text-pink-800' },
    { label: 'TA', bg: 'bg-orange-200 text-orange-800' },
    { label: 'DE', bg: 'bg-sky-200 text-sky-800' },
    { label: '+2k', bg: 'bg-green-500 text-white' },
  ];

  // Bottom key feature pills
  const perkFeatures = [
    'Instant settlement',
    'Contactless delivery',
    'Warmth insulated bag',
  ];

  return (
    <div className="w-full min-h-screen bg-[#20b2a6]/10 p-6 md:p-12 flex flex-col gap-10">
      {/* Badges / Pill Tags */}
      <div className="animate-fade-in py-2 flex flex-row gap-6">
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#20b2a6]/10 border border-[#20b2a6]/30 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
          <span className="text-sm font-medium text-[#20b2a6]">
            Software Engineer . React Specialist
          </span>
        </div>

        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#20b2a6]/10 border border-[#20b2a6]/30 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
          <span className="text-sm font-medium text-[#20b2a6]">
            Software Engineer . React Specialist
          </span>
        </div>
      </div>

      {/* Main Two-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        
        {/* LEFT COLUMN: Heading, Paragraph, Rating & Action Buttons */}
        <div className="flex flex-col gap-6 text-slate-800 font-sans">
          <div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-none text-black">
              Fresh, Fiery &{' '}
              <span className="text-[#a43700]">Heartfelt</span> <br />
              Meals Delivered Hot.
            </h1>
          </div>

          <p className="text-gray-600 max-w-xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam vero
            provident velit quaerat in fuga, voluptatem optio magni expedita debitis,
            totam consequuntur ab cumque voluptates deserunt unde?
          </p>

          {/* Top Rating Section */}
          <div className="flex items-center gap-4 flex-wrap">
            {/* Overlapping Avatars */}
            <div className="flex -space-x-2 overflow-hidden">
              {avatars.map((avatar, idx) => (
                <div
                  key={idx}
                  className={`inline-flex items-center justify-center w-9 h-9 rounded-full text-xs font-bold border-2 border-white shadow-sm ${avatar.bg}`}
                >
                  {avatar.label}
                </div>
              ))}
            </div>

            {/* Rating Stars & Text */}
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 stroke-amber-400" />
                  ))}
                </div>
                <span className="font-bold text-slate-900 text-sm">4.9 / 5.0</span>
              </div>
              <p className="text-xs text-slate-500 font-medium">
                Over 2,400+ satisfied foodies in Lekki & VI
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3 flex-wrap">
            <button className="flex items-center gap-2 bg-[#8B263E] hover:bg-[#721f32] text-white font-medium px-6 py-3 rounded-full text-sm shadow-md transition-colors">
              <UtensilsCrossed className="w-4 h-4" />
              <span>Explore Full Menu</span>
            </button>

            <button className="flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium px-6 py-3 rounded-full text-sm transition-colors border border-slate-200">
              <CreditCard className="w-4 h-4 text-slate-600" />
              <span>Order via Paystack</span>
            </button>
          </div>

          {/* Bottom Feature Perks */}
          <div className="flex items-center gap-6 text-xs text-slate-600 font-medium flex-wrap">
            {perkFeatures.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN: Image Section */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md lg:max-w-lg">
            {/* Decorative background */}
            <div
              className="
                absolute
                -bottom-3
                -right-3
                sm:-bottom-4
                sm:-right-4
                w-full
                h-full
                border-2
                border-[#e6bd55]
                rounded-xl
              "
            />

            <img
              src={fu}
              alt="Dog at Tuf's Dogs Ville"
              className="
                relative
                z-10
                w-full
                h-[300px]
                sm:h-[380px]
                md:h-[440px]
                lg:h-[500px]
                object-cover
                rounded-xl
                shadow-xl
              "
            />
          </div>
        </div>

      </div>

      {/* FEATURE CARDS BOTTOM GRID */}
      <div className="w-full bg-[#e8f4f6] p-6 md:p-10 rounded-2xl mt-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {detailedFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="flex items-start gap-3 bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-sm border border-gray-100"
              >
                <div
                  className={`flex-shrink-0 p-2.5 rounded-lg ${feature.bgColor} ${feature.iconColor}`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 text-sm md:text-base leading-tight">
                    {feature.title}
                  </h3>
                  <p className="mt-1 text-xs text-slate-500 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Hero;