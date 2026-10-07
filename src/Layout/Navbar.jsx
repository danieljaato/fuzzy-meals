import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  X,
  MapPin,
  ShoppingBag,
  ShieldCheck,
  ChevronDown,
  Zap,
} from "lucide-react";
import { usePaystackPayment } from "react-paystack";
import { useCart } from "../context/CartContext";
import DAN from "../assets/DAN.png";

const Navbar = () => {
  const [location, setLocation] = useState("Victoria Island, Lagos");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Consume shared cart state and setter
  const { cart, setCart } = useCart();

  // Single Add-To-Cart Handler
  const handleAddToCart = (itemName, price) => {
    setCart((prev) => ({
      ...prev,
      count: (prev?.count || 0) + 1,
      total: (prev?.total || 0) + price,
      items: [...(prev?.items || []), { name: itemName, price }],
    }));
  };

  // Handler to close mobile menu
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const paystackConfig = {
    reference: new Date().getTime().toString(),
    email: "customer@example.com",
    amount: (cart?.total > 0 ? cart.total : 5000) * 100, // Dynamic amount in kobo
    publicKey: "pk_test_xxxxxxxxxxxxxxxxxxxxxxxx",
  };

  const initializePayment = usePaystackPayment(paystackConfig);

  const handlePayment = () => {
    const onSuccess = (reference) => {
      console.log("Payment successful", reference);
    };

    const onClose = () => {
      console.log("Payment cancelled");
    };

    initializePayment({ onSuccess, onClose });
  };

  return (
    <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <nav className="max-w-8xl mx-auto px-4 py-3 flex items-center justify-between gap-2">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 font-bold tracking-tight shrink-0"
          onClick={closeMobileMenu}
        >
          <img
            src={DAN}
            alt="Fuzzy Meals Logo"
            className="w-40 object-contain"
          />
          <span className="text-sm font-bold text-[#a43700]">
            Fuzzy Meals
          </span>
        </Link>

        {/* Location Dropdown */}
        <div className="hidden md:flex items-center gap-3">
          <div className="flex items-center gap-1.5 text-indigo-700 font-semibold text-sm">
            <MapPin className="w-4 h-4 text-indigo-600" />
            <div className="relative flex items-center">
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="appearance-none bg-transparent pr-5 text-indigo-500 font-semibold focus:outline-none cursor-pointer text-sm"
              >
                <option value="Victoria Island, Lagos">Victoria Island, Lagos</option>
                <option value="Ikeja, Lagos">Ikeja, Lagos</option>
                <option value="Lekki Phase 1, Lagos">Lekki Phase 1, Lagos</option>
              </select>
              <ChevronDown className="w-3 h-3 text-indigo-600 absolute right-0 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-2">
          <Link to="/" className="px-4 py-2 text-sm text-gray-600 hover:text-white rounded-full hover:bg-[#a43700] transition-colors">Home</Link>
          <Link to="/menu" className="px-4 py-2 text-sm text-gray-600 hover:text-white rounded-full hover:bg-[#a43700] transition-colors">Menu</Link>
          <Link to="/about" className="px-4 py-2 text-sm text-gray-600 hover:text-white rounded-full hover:bg-[#a43700] transition-colors">About</Link>
          <Link to="/contact" className="px-4 py-2 text-sm text-gray-600 hover:text-white rounded-full hover:bg-[#a43700] transition-colors">Contact</Link>
          <Link to="/specials" className="px-4 py-2 text-sm text-gray-600 hover:text-white rounded-full hover:bg-[#a43700] transition-colors">Specials</Link>
        </div>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-2">
          <div className="flex items-center gap-1 text-[10px] font-bold tracking-wide text-sky-600 bg-sky-50 border border-sky-200 px-2.5 py-1 rounded-full">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>PAYSTACKSECURED</span>
          </div>

          {/* Cart Button displaying dynamic count */}
          <button
            type="button"
            onClick={handlePayment}
            className="flex items-center gap-2 bg-rose-50 hover:bg-rose-100 text-rose-600 font-semibold px-3 py-1.5 rounded-full text-sm transition-colors cursor-pointer"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Cart</span>
            <span className="bg-rose-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
              {cart?.count || 0}
            </span>
          </button>

          <a
            href="https://wa.me/2348061118674"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#a43700] hover:bg-[#7f2a00] text-white font-semibold px-4 py-2 rounded-full text-sm tracking-wide transition-colors"
          >
            Order now
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          className="md:hidden text-[#a43700]"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Ticker Banner */}
      <div className="flex animate-marquee bg-rose-50 text-xs py-1.5 px-4 border-b border-rose-100 items-center justify-between">
        <div className="flex items-center gap-1.5 text-rose-700 font-medium">
          <Zap className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
          <span>Island Express Live (25-35m)</span>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white shadow-md">
          <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col gap-2">
            <Link to="/" onClick={closeMobileMenu} className="px-4 py-3 rounded-lg text-gray-700 hover:bg-[#a43700] hover:text-white transition-colors">Home</Link>
            <Link to="/menu" onClick={closeMobileMenu} className="px-4 py-3 rounded-lg text-gray-700 hover:bg-[#a43700] hover:text-white transition-colors">Menu</Link>
            <Link to="/about" onClick={closeMobileMenu} className="px-4 py-3 rounded-lg text-gray-700 hover:bg-[#a43700] hover:text-white transition-colors">About</Link>
            <Link to="/contact" onClick={closeMobileMenu} className="px-4 py-3 rounded-lg text-gray-700 hover:bg-[#a43700] hover:text-white transition-colors">Contact</Link>
            <Link to="/specials" onClick={closeMobileMenu} className="px-4 py-3 rounded-lg text-gray-700 hover:bg-[#a43700] hover:text-white transition-colors">Specials</Link>

            {/* Mobile Cart */}
            <button
              type="button"
              onClick={() => {
                closeMobileMenu();
                handlePayment();
              }}
              className="mt-2 flex items-center justify-center gap-2 bg-rose-50 hover:bg-rose-100 text-rose-600 font-semibold px-4 py-3 rounded-lg transition-colors cursor-pointer"
            >
              <ShoppingBag className="w-5 h-5" />
              Cart
              <span className="bg-rose-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                {cart?.count || 0}
              </span>
            </button>

            <a
              href="https://wa.me/2348061118674"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMobileMenu}
              className="mt-2 text-center bg-[#a43700] hover:bg-[#7f2a00] text-white font-semibold px-4 py-2 rounded-full transition-colors"
            >
              Order now
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;