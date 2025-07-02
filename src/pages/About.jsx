import React from 'react';
import './about.css';

export default function About() {
  return (
    <div className="about">
      <h2>About Palnadu Spices</h2>

      <p>
        <strong>Palnadu Spices</strong> was born out of a simple goal — to deliver pure, farm-fresh chillies to every home in India.
        In a world filled with chemical-based products, our mission is to bring you the original, organic taste straight from the heart of Andhra Pradesh.
      </p>

      <p>
        All our chillies are naturally grown, harvested by hand, and processed without any artificial colors or preservatives.
        We work directly with farmers in Palnadu to ensure quality, traceability, and trust.
      </p>

      <p>
        Whether it’s fiery <strong>Teja</strong>, aromatic <strong>Byadgi</strong>, bold <strong>Guntur</strong>, or flavorful <strong>Yellow Mirchi</strong>,
        each variety is dried, ground, and packed with utmost care.
      </p>

      <p>
        We ship across India using trusted courier partners to bring the heat and aroma of our land right to your kitchen shelf.
      </p>

      <h3 className="steps-heading">From Farm to Your Kitchen</h3>
      <div className="steps-container">
        <div className="step-card">
          <img src="/images/step1-farm.jpg" alt="Harvesting" />
          <p><strong>Step 1:</strong> Fresh chillies are handpicked directly from the farms.</p>
        </div>
        <div className="step-card">
          <img src="/images/step2-drying.jpg" alt="Drying" />
          <p><strong>Step 2:</strong> Sun-dried naturally without chemicals to retain flavor & color.</p>
        </div>
        <div className="step-card">
          <img src="/images/step3-grinding.jpg" alt="Grinding" />
          <p><strong>Step 3:</strong> Cleanly ground to fine powder using hygienic methods.</p>
        </div>
        <div className="step-card">
          <img src="/images/step4-packing.jpg" alt="Packing" />
          <p><strong>Step 4:</strong> Packed air-tight to preserve freshness and aroma.</p>
        </div>
        <div className="step-card">
          <img src="/images/step5-courier.jpg" alt="Courier Delivery" />
          <p><strong>Step 5:</strong> Delivered to your doorstep via fast and safe courier.</p>
        </div>
      </div>

      <h3 className="video-heading">Our Journey in Action</h3>
      <div className="video-container">
        <iframe
          width="640"
          height="360"
          src="https://www.youtube.com/embed/pf07w8CNRJU"
          title="How to farm Chilli | Chilli Farming / Chilli Cultivation | Hot Pepper Farming"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
