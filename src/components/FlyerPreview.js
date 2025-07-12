import React, { useRef } from 'react';
import html2canvas from 'html2canvas';
import moment from 'moment';
import '../styles.css';
import logo from '../assets/logo.png';

export default function FlyerPreview({ data }) {
  const ref = useRef();
  const baseColor = data.customBgColor || '#004225';

  // Convert hex color to rgba with given opacity
  function hexToRGBA(hex, alpha = 0.8) {
    let r = parseInt(hex.slice(1, 3), 16);
    let g = parseInt(hex.slice(3, 5), 16);
    let b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }

  const overlayColor = hexToRGBA(baseColor, 0.8);
  console.log(process.env.PUBLIC_URL)
const bgImageUrl = data.useBgImage && data.bgImageOption
  ? `${process.env.PUBLIC_URL}/backgrounds/${data.bgImageOption}`
  : null;
  console.log(bgImageUrl)
const flyerStyle = {
  backgroundImage: bgImageUrl
    ? `linear-gradient(to right, ${overlayColor}, ${overlayColor}), url(${bgImageUrl})`
    : `linear-gradient(to right, ${overlayColor}, ${overlayColor})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
};
  const handleDownload = () => {
    const flyer = document.getElementById('flyer-capture');
    if (!flyer) return;

    html2canvas(flyer, {
      scale: 2,
      useCORS: true,
      allowTaint: false,
      backgroundColor: null
    }).then(canvas => {
      const link = document.createElement('a');
      const filename = moment().format("DD-MM-YYYY_hh-mm-A");
      link.download = `Menu_${filename}.png`;
      link.href = canvas.toDataURL();
      link.click();
    }).catch(err => {
      console.error('Error capturing flyer:', err);
    });
  };

  const shareImageOnWhatsApp = async () => {
    const flyer = document.getElementById("flyer-capture");
    if (!flyer) return;

    const canvas = await html2canvas(flyer, { scale: 2, useCORS: true });

    canvas.toBlob(async (blob) => {
      const file = new File([blob], "flyer.png", { type: "image/png" });

      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        try {
          await navigator.share({
            files: [file],
            title: "Nidhi's Homely Kitchen",
            text: "Order homemade food 🍱",
          });
        } catch (err) {
          alert("Sharing cancelled or failed.");
        }
      } else {
        alert("Sharing not supported on this device/browser.");
      }
    }, "image/png");
  };

  return (
    <div className="px-2">
      <div className='d-flex'>
        <button className="btn-sm bg-primary text-white" onClick={handleDownload}>
          <i className="fas fa-download me-2"></i> Download
        </button>
        <button className="btn btn-success btn-sm mx-2" onClick={shareImageOnWhatsApp}>
          <i className="fab fa-whatsapp me-2"></i>Share
        </button>
      </div>

      <div id="flyer-capture" className="flyer-a4" style={flyerStyle}>
        <div className="flyer-header">
          <img src={data.logoUrl ? data.logoUrl : logo} className="flyer-logo" alt="Logo" />
          <div className="flyer-contact">
            <span className="flyer-phone fs-5">
              <i className="fab fa-whatsapp me-2"></i><i className="fas fa-phone me-2"></i> {data.phone || '+91-999999xxxx'}
            </span>
          </div>
        </div>

        <h1 className="flyer-title">{data.headline || "Delicious home made food"}</h1>

        <p className="flyer-description">
          {data.description || "Delicious home-cooked meals made with love, Bringing warmth and flavor straight to your plate."}
        </p>

        <img
          src={
            data.foodImageUrl?.trim()
              ? data.foodImageUrl
              : "https://www.jaypeehotels.com/blog/wp-content/uploads/2024/07/Blog-3-scaled.jpg"
          }
          className="flyer-food-img"
          alt="Dish"
        />

        <div className="flyer-pricing">
          <h3>Pricing List - Per plate</h3>
          <ul className="list-disc pl-5">
            {data.menu.map((item, i) => (
              <li key={i}>{item.label} - ₹{item.price}</li>
            ))}
          </ul>
          <small>
            <strong>Note:</strong> Dish preparation will take time, so please inform us in advance for preparation. We prepare all dishes according to the order using only fresh ingredients.
          </small>
        </div>

        <p className="flyer-thanks fs-6">Thank you for choosing {data.businessName || "Foodilicious"}!</p>

        <div className="flyer-footer">
          <span><strong>Only for Delivery!</strong> Time {data.timings || "8:00 AM to 11:00 PM"}</span>
          <strong className="flyer-delivery">FREE HOME DELIVERY</strong>
        </div>
      </div>
    </div>
  );
}
