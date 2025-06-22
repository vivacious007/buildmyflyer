// import React from "react";

// export default function FlyerPreview({ data }) {
//   const flyerClass = `preview-box flyer-${data.flyerStyle}`;

//   return (
//     <div className={flyerClass} style={{ backgroundColor: data.customBgColor || ' #074721' }}>
//       <div className="flyer-header">
//         <h1>{data.businessName}</h1>
//         {data.logoUrl && (
//           <img src={data.logoUrl} alt="Logo" className="flyer-logo" />
//         )}
//       </div>

//       <h2>{data.headline}</h2>
//       <p>{data.description}</p>

//       {data.foodImageUrl && (
//         <img src={data.foodImageUrl} alt="Dish" className="flyer-image" />
//       )}

//       <ul>
//         {data.menu.map((item, idx) => (
//           <li key={idx}>
//             {item.name} - ₹{item.price}
//           </li>
//         ))}
//       </ul>

//       <p><strong>Call Now:</strong> {data.phone}</p>
//       <p><strong>Timings:</strong> {data.timings}</p>
//     </div>
//   );
// }

// src/components/FlyerPreview.js
import React, { useRef } from 'react';
import html2canvas from 'html2canvas';
import { toPng } from 'html-to-image';
import "../styles.css";

export default function FlyerPreview({ data }) {
    const ref = useRef();

 const handleDownload = () => {
  const flyer = document.getElementById('flyer-capture');
  if (!flyer) return;

  html2canvas(flyer, {
    scale: 2,           // for better quality
    useCORS: true,      // if using external images
    allowTaint: false,
    backgroundColor: null // keep transparency or set your bg
  }).then(canvas => {
    const link = document.createElement('a');
    link.download = 'flyer.png';
    link.href = canvas.toDataURL();
    link.click();
  }).catch(err => {
    console.error('Error capturing flyer:', err);
  });
};
const shareImageOnWhatsApp = async () => {
  const flyer = document.getElementById("flyer-capture");
  if (!flyer) return;

  const canvas = await html2canvas(flyer);
  canvas.toBlob((blob) => {
    const file = new File([blob], "flyer.png", { type: "image/png" });

    if (navigator.canShare && navigator.canShare({ files: [file] })) {
      navigator.share({
        files: [file],
        title: "Nidhi's Homely Kitchen",
        text: "Order homemade biryani from Nidhi's Homely Kitchen 🍽️",
      });
    } else {
      alert("Sharing is not supported on this device.");
    }
  });
};
  return (
    <div>
        <div className='d-flex'>

     <button className="mt-4 px-4 py-2 bg-blue-600 text-white" onClick={handleDownload}>
        Download Flyer
      </button>
<button className="btn btn-success mt-2" onClick={shareImageOnWhatsApp}>
  <i className="fab fa-whatsapp me-2"></i>Share Flyer on WhatsApp
</button>
        </div>
    <div  id="flyer-capture" className="flyer-a4" style={{ backgroundColor: data.customBgColor || "#004225" }}>
      <div  className="flyer-header">
        {data.logoUrl && <img src={data.logoUrl} className="flyer-logo" alt="Logo" />}
        <div className="flyer-contact">
          <span className="flyer-phone fs-5"> <i className="fab fa-whatsapp me-2"></i><i className="fas fa-phone me-2"></i> {data.phone || '+91-999999xxxx'}</span>
        </div>
      </div>

      <h1 className="flyer-title">{data.headline || "Delicious home made food"}</h1>

      <p className="flyer-description">
        {data.description || "A fragrant, flavorful dish made with long-grain basmati rice, and a blend of aromatic spices. Every bite delivers the perfect balance of heat, herbs, and savory goodness."}
      </p>

      {data.foodImageUrl && <img src={data.foodImageUrl} className="flyer-food-img" alt="Dish" />}

      <div className="flyer-pricing">
        <h3>Pricing List - Per plate</h3>
        <ul class="list-disc pl-5">
          {data.menu.map((item, i) => (
            <li key={i}>{item.name} - ₹{item.price}</li>
          ))}
        </ul>
        <small>
          <strong>Note:</strong> Dish preparation will take time, so please inform us in advance for preparation. We prepare all dishes according to the order using only fresh ingredients.
        </small>
      </div>

      <p className="flyer-thanks fs-6">Thank you for choosing {data.businessName || "Foodilicious"}!</p>

      <div className="flyer-footer">
        <span><strong>Only for Delivery!</strong> Time {data.timings || "6:00 PM to 11:00 PM"}</span>
        <strong className="flyer-delivery">FREE HOME DELIVERY</strong>
      </div>
    </div>
    </div>
  );
}