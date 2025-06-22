import React from "react";

export default function InputForm({ data, setData }) {
  const addMenuItem = () => {
    if (data.newItemName && data.newItemPrice) {
      setData({
        ...data,
        menu: [...data.menu, { name: data.newItemName, price: data.newItemPrice }],
        newItemName: "",
        newItemPrice: ""
      });
    }
  };

  return (
    <div className="form-container">
      <h2 className="mb-3 text-center">Flyer Builder</h2>

      <div className="row">
        {/* Basic Info */}
        <div className="col-md-6 mb-3">
          <label>Business Name</label>
          <input
            className="form-control"
            value={data.businessName}
            placeholder="Enter your business home"
            onChange={e => setData({ ...data, businessName: e.target.value })}
          />
        </div>
        <div className="col-md-6 mb-3">
          <label>Headline</label>
          <input
            className="form-control"
            value={data.headline}
            placeholder="Flyer Headline"
            onChange={e => setData({ ...data, headline: e.target.value })}
          />
        </div>

        <div className="col-md-12 mb-3">
          <label>Description</label>
          <textarea
            className="form-control"
            value={data.description}
            placeholder="Add description of food, eg. Details about your delicious birani."
            onChange={e => setData({ ...data, description: e.target.value })}
          />
        </div>

        <div className="col-md-6 mb-3">
          <label>Phone</label>
          <input
            className="form-control"
            value={data.phone}
            placeholder="+91-999999xxxx"
            onChange={e => setData({ ...data, phone: e.target.value })}
          />
        </div>
        <div className="col-md-6 mb-3">
          <label>Timings</label>
          <input
            className="form-control"
            value={data.timings}
            onChange={e => setData({ ...data, timings: e.target.value })}
          />
        </div>

        {/* Image Inputs */}
        <div className="col-md-6 mb-3">
          <label>Upload Logo</label>
          <input
            className="form-control"
            type="file"
            accept="image/*"
            onChange={e => {
              const file = e.target.files[0];
              if (file) {
                const logoUrl = URL.createObjectURL(file);
                setData({ ...data, logoUrl });
              }
            }}
          />
        </div>
        <div className="col-md-6 mb-3">
          <label>Paste Logo Image URL</label>
          <input
            className="form-control"
            type="text"
            value={data.logoUrl}
            onChange={e => setData({ ...data, logoUrl: e.target.value })}
          />
        </div>

        <div className="col-md-6 mb-3">
          <label>Upload Food Image</label>
          <input
            className="form-control"
            type="file"
            accept="image/*"
            onChange={e => {
              const file = e.target.files[0];
              if (file) {
                const foodImageUrl = URL.createObjectURL(file);
                setData({ ...data, foodImageUrl });
              }
            }}
          />
        </div>
        <div className="col-md-6 mb-3">
          <label>Paste Food Image URL</label>
          <input
            className="form-control"
            type="text"
            value={data.foodImageUrl}
            onChange={e => setData({ ...data, foodImageUrl: e.target.value })}
          />
        </div>

        {/* Design Options */}
        <div className="col-md-6 mb-3">
          <label>Choose Background Style</label>
          <select
            className="form-select"
            value={data.backgroundStyle}
            onChange={e => setData({ ...data, backgroundStyle: e.target.value })}
          >
            <option value="style1">Warm Sunset</option>
            <option value="style2">Cool Breeze</option>
            <option value="style3">Fresh Green</option>
          </select>
        </div>
        <div className="col-md-6 mb-3">
          <label>Choose Flyer Style</label>
       <input
    type="color"
    className="form-control form-control-color"
    value={data.customBgColor || "#ffffff"}
    onChange={e => setData({ ...data, customBgColor: e.target.value })}
  />
        </div>

        {/* Menu Section */}
        <div className="col-md-6 mb-3">
          <label>Menu Item Name</label>
          <input
            className="form-control"
            placeholder="e.g. Chicken Biryani"
            value={data.newItemName}
            onChange={e => setData({ ...data, newItemName: e.target.value })}
          />
        </div>
        <div className="col-md-4 mb-3">
          <label>Price</label>
          <input
            className="form-control"
            placeholder="₹"
            value={data.newItemPrice}
            onChange={e => setData({ ...data, newItemPrice: e.target.value })}
          />
        </div>
        <div className="col-md-2 mb-3 d-flex align-items-end">
          <button className="btn btn-success w-100" onClick={addMenuItem}>Add</button>
        </div>

        {data.menu.length > 0 && (
          <div className="col-12 mb-3">
            <label className="form-label">Menu Items</label>
            {data.menu.map((item, index) => (
              <div key={index} className="d-flex align-items-center mb-2">
                <input
                  type="text"
                  className="form-control me-2"
                  value={item.name}
                  onChange={(e) => {
                    const updatedMenu = [...data.menu];
                    updatedMenu[index].name = e.target.value;
                    setData({ ...data, menu: updatedMenu });
                  }}
                />
                <input
                  type="text"
                  className="form-control me-2"
                  value={item.price}
                  onChange={(e) => {
                    const updatedMenu = [...data.menu];
                    updatedMenu[index].price = e.target.value;
                    setData({ ...data, menu: updatedMenu });
                  }}
                />
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    const updatedMenu = data.menu.filter((_, i) => i !== index);
                    setData({ ...data, menu: updatedMenu });
                  }}
                >
                   <i className="fas fa-trash me-2 bg-danger text-white"></i>
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
