import React, { useState } from "react";
import InputForm from "./components/InputForm";
import FlyerPreview from "./components/FlyerPreview";
import { Dropdown } from 'primereact/dropdown';
import 'primereact/resources/themes/lara-light-blue/theme.css';    
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './styles.css';
import Tesseract from 'tesseract.js';

export default function App() {
  const [data, setData] = useState({
    businessName: "",
    headline: "",
    description: "",
    phone: "",
    timings: "",
    menu: [],
    newItemName: "",
    newItemPrice: "",
    logoUrl: "",
    foodImageUrl: "",
    backgroundStyle: "style3",
    flyerStyle: "classic",
    flyerBgColor: "#074721"
  });
const handleMenuImageUpload = (e) => {
  const file = e.target.files[0];
  if (!file) return;

  Tesseract.recognize(file, 'eng', { logger: m => console.log(m) })
    .then(({ data: { text } }) => {
      const extractedItems = extractMenuItemsFromText(text);
      if (extractedItems.length > 0) {
        setData((prev) => ({
          ...prev,
          menu: [...prev.menu, ...extractedItems],
        }));
      }
    })
    .catch(err => {
      console.error('OCR failed:', err);
      alert("Failed to extract menu from image.");
    });
};
function extractMenuItemsFromText(text) {
  const lines = text
    .split('\n')
    .map(line => line.trim())
    .filter(Boolean);

  const menuItems = [];

  lines.forEach(line => {
    // Remove leading bullets like •, *, -, or .
    const cleanLine = line.replace(/^[•*.\-–\s]+/, '');

    // Match "Dish Name - ₹110" or "Dish Name: ₹110" or "Dish Name - 110"
    const match = cleanLine.match(/(.+?)\s*[-:]\s*(?:₹\s*)?(\d{2,4})/);

    if (match) {
      const name = match[1].trim();
      const price = parseInt(match[2].trim(), 10);

      // Skip junk OCR entries
      if (price >= 10 && price <= 999) {
        menuItems.push({ label: name, price });
      }
    }
  });

  return menuItems;
}



  return (
    <div className={`container-fluid ${data.backgroundStyle} mb-3`}>
       <div className="d-flex justify-content-end pe-3">
        <div className="d-flex mx-2">
  <label>Upload Menu Image</label>
  <input
    type="file"
    className="form-control"
    accept="image/*"
    onChange={handleMenuImageUpload}
  />
</div>
  <div className="btn-group">
    <button
      className={`btn btn-sm ${data.backgroundStyle === 'style1' ? 'btn-primary' : 'btn-outline-primary'}`}
      onClick={() => setData({ ...data, backgroundStyle: 'style1' })}
      title="Warm Sunset"
    >
      🌅
    </button>
    <button
      className={`btn btn-sm ${data.backgroundStyle === 'style2' ? 'btn-success' : 'btn-outline-success'}`}
      onClick={() => setData({ ...data, backgroundStyle: 'style2' })}
      title="Cool Breeze"
    >
      🌬️
    </button>
    <button
      className={`btn btn-sm ${data.backgroundStyle === 'style3' ? 'btn-warning' : 'btn-outline-warning'}`}
      onClick={() => setData({ ...data, backgroundStyle: 'style3' })}
      title="Fresh Green"
    >
      🌿
    </button>
  </div>
</div>
      <div className="row">
        <div className="col-md-6">
          <InputForm data={data} setData={setData} />
        </div>
        <div className="col-md-6">
          <FlyerPreview data={data} />
        </div>
      </div>
    </div>
  );
}