import React, { useState } from 'react';
import { ShoppingCart, Search, Plus, Minus, X, Trash2 } from 'lucide-react';

// Sample menu items based on the Mama Cass menu
const INITIAL_PRODUCTS = [
  { id: 1, name: 'Smoky Jollof Rice', price: 2000, category: 'Rice' },
  { id: 2, name: 'Fried Plantain (Dodo)', price: 800, category: 'Sides' },
  { id: 3, name: 'Roasted Chicken', price: 4500, category: 'Protein' },
  { id: 4, name: 'Pounded Yam', price: 800, category: 'Swallow' },
  { id: 5, name: 'Egusi Soup', price: 1500, category: 'Soups' },
  { id: 6, name: 'Suya Spaghetti', price: 3500, category: 'Pasta' },
  { id: 7, name: 'Moi Moi', price: 1000, category: 'Sides' },
  { id: 8, name: 'Supreme Ice Cream 500ML', price: 2800, category: 'Drinks & Desserts' },
];

export default function FoodOrderingApp() {
  const [products] = useState(INITIAL_PRODUCTS);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Filter products based on search query and category
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Cart operations
  const addToCart = (product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (id, delta) => {
    setCart(prevCart =>
      prevCart.map(item => {
        if (item.id === id) {
          const newQty = item.quantity + delta;
          return newQty > 0 ? { ...item, quantity: newQty } : null;
        }
        return item;
      }).filter(Boolean)
    );
  };

  const removeFromCart = (id) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  const totalItemsCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const categories = ['All', 'Rice', 'Sides', 'Protein', 'Swallow', 'Soups', 'Pasta', 'Drinks & Desserts'];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
     

      {/* Hero / Banner */}
      <section className="bg-[#a43700] text-white py-12 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-3">Order Your Favorite Nigerian Meals</h1>
        <p className="text-[#a43700] max-w-xl mx-auto text-base sm:text-lg">Hot, fresh, and home-style dishes delivered straight to your door.</p>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Search & Filters */}
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-8">
          {/* Search Bar */}
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3.5 top-3.5 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search meals..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 shadow-sm transition"
            />
          </div>

          {/* Categories Pill Scroll */}
          <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition ${
                  selectedCategory === category
                    ? 'bg-[#a43700] text-white shadow-sm'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col hover:shadow-md transition">
              <div className="h-48 bg-gray-100 flex items-center justify-center text-gray-400 relative">
                <span className="text-sm font-medium">Meal Preview</span>
              </div>
              <div className="p-5 flex flex-col flex-grow justify-between">
                <div>
                  <span className="text-xs font-semibold text-red-600 uppercase tracking-wider">{product.category}</span>
                  <h3 className="font-bold text-gray-800 text-lg mt-1 mb-2">{product.name}</h3>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-lg font-extrabold text-gray-900">₦{product.price.toLocaleString()}.00</span>
                  <button
                    onClick={() => addToCart(product)}
                    className="bg-[#a43700] hover:bg-[#8a2c00] text-white text-sm font-semibold px-4 py-2 rounded-xl transition flex items-center gap-1.5 shadow-sm"
                  >
                    <Plus className="w-4 h-4" /> Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">No meals found matching your search.</p>
          </div>
        )}
      </main>

      {/* Cart Drawer Overlay */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div className="absolute inset-0 bg-black/50 transition-opacity" onClick={() => setIsCartOpen(false)} />
          
          <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
            <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col">
              
              {/* Drawer Header */}
              <div className="p-6 border-b border-gray-100 flex items-center justify-between">
                <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                  <ShoppingCart className="w-5 h-5 text-red-600" /> Your Cart
                </h2>
                <button onClick={() => setIsCartOpen(false)} className="text-gray-400 hover:text-gray-600 p-1 rounded-lg">
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Cart Items list */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {cart.length === 0 ? (
                  <div className="text-center py-20">
                    <ShoppingCart className="w-16 h-16 text-gray-200 mx-auto mb-4" />
                    <p className="text-gray-800 font-bold text-lg mb-1">Your Cart is Empty!</p>
                    <p className="text-gray-500 text-sm">It looks like you haven't added any items yet.</p>
                  </div>
                ) : (
                  cart.map((item) => (
                    <div key={item.id} className="flex items-center justify-between bg-gray-50 p-4 rounded-xl border border-gray-100">
                      <div className="flex-1 pr-4">
                        <h4 className="font-semibold text-gray-800 text-sm">{item.name}</h4>
                        <span className="text-xs text-red-600 font-bold">₦{item.price.toLocaleString()}.00</span>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center border border-gray-200 bg-white rounded-lg overflow-hidden shadow-xs">
                          <button onClick={() => updateQuantity(item.id, -1)} className="p-1.5 hover:bg-gray-100 text-gray-600 transition">
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="px-3 text-sm font-bold">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, 1)} className="p-1.5 hover:bg-gray-100 text-gray-600 transition">
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        
                        <button onClick={() => removeFromCart(item.id)} className="text-gray-400 hover:text-red-600 transition">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Drawer Footer */}
              {cart.length > 0 && (
                <div className="p-6 border-t border-gray-100 bg-gray-50">
                  <div className="flex justify-between text-base font-semibold text-gray-900 mb-4">
                    <span>Subtotal</span>
                    <span>₦{subtotal.toLocaleString()}.00</span>
                  </div>
                  <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3.5 rounded-xl font-bold transition shadow-sm">
                    Proceed to Checkout
                  </button>
                </div>
              )}

            </div>
          </div>
        </div>
      )}
    </div>
  );
}