import React, { useState } from "react";
import InputForm from "./components/InputForm";
import FlyerPreview from "./components/FlyerPreview";
import './styles.css';

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

  return (
    <div className={`container-fluid ${data.backgroundStyle} mb-3`}>
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