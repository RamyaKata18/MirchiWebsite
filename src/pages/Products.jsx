import React, { useState } from 'react';
import './Products.css';

const weights = [
  { label: '500g', value: '0.5' },
  { label: '1kg', value: '1' },
  { label: '2kg', value: '2' },
];

const products = [
  {
    id: 'teja',
    name: 'Teja Mirchi',
    variants: [
      {
        type: 'Raw',
        img: '/images/teja-raw.jpg',
        prices: { '0.5': 200, '1': 400, '2': 800 },
      },
      {
        type: 'Powder',
        img: '/images/teja-powder.jpg',
        prices: { '0.5': 210, '1': 420, '2': 840 },
      },
    ],
  },
  {
    id: 'sannam',
    name: 'Sannam Mirchi',
    variants: [
      {
        type: 'Raw',
        img: '/images/sannam-raw.jpg',
        prices: { '0.5': 190, '1': 380, '2': 760 },
      },
      {
        type: 'Powder',
        img: '/images/sannam-powder.jpg',
        prices: { '0.5': 200, '1': 400, '2': 800 },
      },
    ],
  },
  {
    id: 'aarumuru',
    name: 'Aarumuru Mirchi',
    variants: [
      {
        type: 'Raw',
        img: '/images/aarumuru-raw.jpg',
        prices: { '0.5': 180, '1': 360, '2': 720 },
      },
      {
        type: 'Powder',
        img: '/images/aarumuru-powder.jpg',
        prices: { '0.5': 190, '1': 380, '2': 760 },
      },
    ],
  },
  {
    id: 'byadgi',
    name: 'Byadgi Mirchi',
    variants: [
      {
        type: 'Raw',
        img: '/images/byadgi-raw.jpg',
        prices: { '0.5': 210, '1': 420, '2': 840 },
      },
      {
        type: 'Powder',
        img: '/images/byadgi-powder.jpg',
        prices: { '0.5': 220, '1': 440, '2': 880 },
      },
    ],
  },
  {
    id: 'guntur',
    name: 'Guntur Mirchi',
    variants: [
      {
        type: 'Raw',
        img: '/images/guntur-raw.jpg',
        prices: { '0.5': 158, '1': 316, '2': 632 },
      },
      {
        type: 'Powder',
        img: '/images/guntur-powder.jpg',
        prices: { '0.5': 165, '1': 330, '2': 660 },
      },
    ],
  },
  {
    id: 'yellowmirchi',
    name: 'Yellow Mirchi',
    variants: [
      {
        type: 'Raw',
        img: '/images/yellowmirchi-raw.jpg',
        prices: { '0.5': 195, '1': 390, '2': 780 },
      },
      {
        type: 'Powder',
        img: '/images/yellowmirchi-powder.jpg',
        prices: { '0.5': 205, '1': 410, '2': 820 },
      },
    ],
  },
];

export default function Products({ addToCart, removeFromCart, getCartQuantity }) {
  const [selectedWeights, setSelectedWeights] = useState({});
  const [addedMessages, setAddedMessages] = useState({});

  const handleWeightChange = (productId, variantType, weightValue) => {
    setSelectedWeights((prev) => ({
      ...prev,
      [`${productId}-${variantType}`]: weightValue,
    }));
  };

  const handleAdd = (product, variant, weight, price) => {
    addToCart({ id: product.id, name: product.name, type: variant.type, weight, price });

    const key = `${product.id}-${variant.type}-${weight}`;
    setAddedMessages((prev) => ({ ...prev, [key]: true }));
    setTimeout(() => {
      setAddedMessages((prev) => ({ ...prev, [key]: false }));
    }, 1500);
  };

  const handleRemove = (product, variant, weight) => {
    removeFromCart({ id: product.id, type: variant.type, weight });
  };

  return (
    <div className="products">
      <h2>Our Chilli Products</h2>
      <div className="product-grid">
        {products.map((product) =>
          product.variants.map((variant) => {
            const key = `${product.id}-${variant.type}`;
            const selectedWeight = selectedWeights[key] || '1';
            const price = variant.prices[selectedWeight];
            const quantity = getCartQuantity(product.id, variant.type, selectedWeight) || 0;
            const messageKey = `${product.id}-${variant.type}-${selectedWeight}`;

            return (
              <div className="product-card" key={messageKey}>
                <img src={variant.img} alt={`${product.name} ${variant.type}`} />
                <h3>
                  {product.name} ({variant.type})
                </h3>

                <select
                  value={selectedWeight}
                  onChange={(e) =>
                    handleWeightChange(product.id, variant.type, e.target.value)
                  }
                >
                  {weights.map((w) => (
                    <option key={w.value} value={w.value}>
                      {w.label}
                    </option>
                  ))}
                </select>

                <p>Price: ₹{price}</p>

                <div className="quantity-controls">
                  <button onClick={() => handleRemove(product, variant, selectedWeight)} disabled={quantity === 0}>
                    ➖
                  </button>
                  <span className="quantity">{quantity}</span>
                  <button onClick={() => handleAdd(product, variant, selectedWeight, price)}>
                    ➕
                  </button>
                </div>

                {addedMessages[messageKey] && (
                  <div className="added-message-box">
                    ✅ {product.name} ({variant.type}, {weights.find(w => w.value === selectedWeight)?.label}) added to cart!
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
