import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Layout/Navbar.jsx";
import  Hero  from './Section/Hero';
import About from "./Section/About.jsx";
import Menu from "./Section/Menu.jsx";
import Contact from "./Section/Contact.jsx";
import Specials from "./Section/Specials.jsx";
import OrderOnline from "./Section/OrderOnline.jsx";
import PartnerSecure from "./Section/PartnerSecure.jsx";
import Cart from "./Section/Cart.jsx";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="min-h-screen overflow-x-hidden">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/about" element={<About />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/specials" element={<Specials />} />
              <Route path="/OrderOnline" element={<OrderOnline />} />
              <Route path="/PartnerSecure" element={<PartnerSecure />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;