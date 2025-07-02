import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Cart from './pages/Cart';
import Contact from './pages/Contact';

function App() {
  const [cart, setCart] = useState([]);

  // ✅ Add item or increase quantity
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (item) =>
          item.id === product.id &&
          item.weight === product.weight &&
          item.type === product.type
      );

      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id &&
          item.weight === product.weight &&
          item.type === product.type
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // ✅ Decrease quantity or remove item completely
  const removeFromCartQuantity = (product) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === product.id &&
          item.type === product.type &&
          item.weight === product.weight
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // ✅ Get quantity of a product in cart
  const getCartQuantity = (id, type, weight) => {
    const item = cart.find(
      (i) => i.id === id && i.type === type && i.weight === weight
    );
    return item ? item.quantity : 0;
  };

  // ✅ Remove full item from cart by index (used in Cart page)
  const removeFromCart = (indexToRemove) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== indexToRemove));
  };

  // ✅ Clear all items
  const clearCart = () => {
    setCart([]);
  };

  return (
    <>
      <Navbar cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)} />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/products"
            element={
              <Products
                addToCart={addToCart}
                removeFromCart={removeFromCartQuantity}
                getCartQuantity={getCartQuantity}
              />
            }
          />
          <Route path="/about" element={<About />} />
          <Route
            path="/cart"
            element={
              <Cart
                cart={cart}
                removeFromCart={removeFromCart}
                clearCart={clearCart}
              />
            }
          />
            <Route path="/contact" element={<Contact />} />
        </Routes>
      
      </div>
      <footer className="footer">
        © 2025 Palnadu Natural Spices. All rights reserved.
      </footer>
    </>
  );
}

export default App;
