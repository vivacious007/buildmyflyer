import React from "react";
import { Dropdown } from 'primereact/dropdown';
import { InputMask } from 'primereact/inputmask';
import { OrderList } from 'primereact/orderlist';
import { AutoComplete } from 'primereact/autocomplete';
export default function InputForm({ data, setData }) {
  const [selectedMenuItem, setSelectedMenuItem] = React.useState(null);
  const predefinedMenuItems = [
 {
    label: 'Lunch',
    items: [
      { label: "Mushroom Curry with Paratha / Roti (4pcs), Salad, Raita, One Sweet Dish", price: 180 },
      { label: "Matar Paneer with Paratha / Roti (4pcs), Salad, Raita, One Sweet Dish", price: 180 },
      { label: "Hing Aloo Sabji with Paratha/Roti (4pcs), Salad, Raita, One sweet dish", price: 140 },
      { label: "Gatte Ki Sabji with Paratha/Roti (4pcs), Salad, Raita, One sweet dish", price: 160 },
      { label: "Chole with Paratha/Roti (4pcs), Salad, Raita, One sweet dish", price: 140 },
      { label: "Bhindi Sabji with Paratha / Roti (4pcs), Salad, Raita , One Sweet Dish", price: 100 },
      { label: "Veg Shezwan Fried Rice", price: 120 },
      { label: "Tadka Dal, Rice, Roti, Jeera Aloo, Salad, Raita", price: 120 },
      { label: "Kadhi Rice Combo , Raita , Salad", price: 110 },
      { label: "Chole Rice Combo , Raita , Salad", price: 110 }
    ]
  },
  {
    label: 'Breakfast',
    items: [
      { label: "Paneer Paratha (2pcs)", price: 120 },
      { label: "Aloo Paratha (2pcs)", price: 80 },
      { label: "Pyaz Paratha (2pcs)", price: 60 }
    ]
  },
  {
    label: 'Drinks',
    items: [
      { label: "Masala Chaas", price: 60 },
      { label: "Lassi", price: 70 },
      { label: "Sattu Lassi", price: 70 },
      { label: "Adrak Chai", price: 30 },
      { label: "Dry Fruits Mango Shake", price: 90 },
    ]
  },
  {
  label: 'Snacks',
  items: [
    { label: "Bread Pizza (2pcs)", price: 100 },
    { label: "Baked Mini Samosa Bucket (H-6pcs / F-12pcs)", price: "80/150" },
    { label: "Fried Mini Samosa Bucket (H-6pcs / F-12pcs)", price: "60/120" },
    { label: "Sooji Bites", price: 80 },
    { label: "Bread Roll (4pcs)", price: 80 },
    { label: "Veg Aatta Maggie", price: 70 },
    { label: "Veg Macroni", price: 80 },
    { label: "Dhokla (4pcs)", price: 100 },
    { label: "Veg Sandwich (2pcs)", price: 80 },
    { label: "Aloo Sandwich (2pcs)", price: 60 },
    { label: "Lassi", price: 70 },
    { label: "Masala Chaas", price: 60 },
    { label: "Alloo Tikki Chaat (H/F)", price: "80,100" },
    { label: "Veg Momos (H-5pcs/F-10pcs)", price: "60,100" },

  ]
}
];
 const groupedItemTemplate = (option) => {
        return (
            <div className="flex align-items-center">
                <div>{option.label}</div>
            </div>
        );
    };
   const addMenuItem = () => {
    if (selectedMenuItem) {
      setData({
        ...data,
        menu: [...data.menu, selectedMenuItem]
      });
      setSelectedMenuItem(null);
    }
  };

  const descriptionOptions = [
    "Delicious home-cooked meals made with love, Bringing warmth and flavor straight to your plate.",
    "Wholesome, tasty food just like home, Every bite a memory, every meal a delight.",
    "Freshly made with handpicked ingredients, Our food brings comfort, joy, and satisfaction.",
    "Craving the taste of real homemade food? We’ve got your hunger covered—deliciously!",
    "Taste the tradition in every bite, home-cooked meals made just right.",
    "Flavors that feel like home, cooked with love, served with warmth.",
    "Not just food, it’s a feeling, every dish tells a homely story.",
    "Skip the takeout, choose comfort instead, enjoy fresh meals just like mom made.",
    "Homemade goodness, pure and true, prepared fresh every day for you.",
    "Your daily dose of homemade delight, healthy, hearty, and cooked just right.",
    "The love of home in every meal, simple, soulful, and oh-so-real.",
    "Bringing back the joy of homemade food, comfort in every spoonful and mood.",
    "No shortcuts, no compromise, only real food that satisfies.",
    "Feel the flavor, taste the care, authentic home-cooked meals beyond compare."
  ];

  return (
    <div className="form-container">
      <h2 className="mb-3 text-center">Flyer Builder</h2>

      <div className="row">
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
          <div className="input-group">
            <span className="input-group-text">Delicious Home Made</span>
            <select
              className="form-select"
              value={data.mealType || ""}
              onChange={(e) => {
                const meal = e.target.value;
                setData({
                  ...data,
                  mealType: meal,
                  headline: `Delicious Home Made ${meal}`
                });
              }}
            >
              <option value="">Select</option>
              <option value="Snacks">Snacks</option>
              <option value="Lunch">Lunch</option>
              <option value="Dinner">Dinner</option>
              <option value="Breakfast">Breakfast</option>
            </select>
          </div>
        </div>

        <div className="col-md-12 mb-3">
          <label>Description</label>
          <Dropdown
            value={descriptionOptions.includes(data.description) ? data.description : null}
            options={descriptionOptions}
            onChange={(e) => setData({ ...data, description: e.value })}
            placeholder="Select a description"
            className="w-100 mb-2"
          />
          <input
            type="text"
            className="form-control"
            placeholder="Or type your custom description"
            value={!descriptionOptions.includes(data.description) ? data.description : ""}
            onChange={(e) => setData({ ...data, description: e.target.value })}
          />
        </div>

        <div className="col-md-6 mb-3">
          <label>Phone</label>
          <InputMask
            className="form-control"
            mask="99999 99999"
            placeholder="e.g. 98765 43210"
            value={data.phone}
            onChange={e => setData({ ...data, phone: e.value })}
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
            onChange={(e) => {
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
            value={data.foodImageUrl || ""}
            placeholder="Paste Food Image URL or leave blank"
            onChange={(e) => setData({ ...data, foodImageUrl: e.target.value })}
          />
        </div>

        <div className="col-md-12 mb-3">
          <label>Choose Flyer Style</label>
          <input
            type="color"
            className="form-control form-control-color"
            value={data.customBgColor || "#ffffff"}
            onChange={e => setData({ ...data, customBgColor: e.target.value })}
          />
        </div>

        <div className="col-md-10 mb-3">
          <label>Select Menu Item</label>
          <Dropdown
            value={selectedMenuItem}
            options={predefinedMenuItems}
            onChange={(e) => setSelectedMenuItem(e.value)}
            placeholder="Select a menu item"
            className="w-100"
            optionLabel="label" 
            optionGroupLabel="label" optionGroupChildren="items" optionGroupTemplate={groupedItemTemplate} 
           checkmark={true}  highlightOnSelect={true}
           editable
          />
        </div>
        <div className="col-md-2 mb-3 d-flex align-items-end">
          <button className="btn btn-success w-100" onClick={addMenuItem}>Add</button>
        </div>
{/* Display and edit existing menu items */}
      {data.menu.length > 0 && (
        <div className="col-12 mb-4">
          <label className="form-label">Menu Items</label>
          <OrderList
            value={data.menu}
            onChange={(e) => setData({ ...data, menu: e.value })}
            itemTemplate={(item) => {
  const index = data.menu.findIndex((i) => i === item);
  return (
    <div className="d-flex align-items-center w-100 gap-2">
      <input
        type="text"
        className="form-control"
        value={item.label }
        onChange={(e) => {
          const updated = [...data.menu];
          updated[index] = { ...updated[index], name: e.target.value };
          setData({ ...data, menu: updated });
        }}
        onKeyDown={(e) => e.stopPropagation()}
      />
      <input
        type="text"
        className="form-control"
        value={item.price}
        onChange={(e) => {
          const updated = [...data.menu];
          updated[index] = { ...updated[index], price: e.target.value };
          setData({ ...data, menu: updated });
        }}
        onKeyDown={(e) => e.stopPropagation()}
      />
      <button
        type="button"
        className="btn btn-danger"
        onClick={() => {
          const updated = data.menu.filter((_, i) => i !== index);
          setData({ ...data, menu: updated });
        }}
      >
        <i className="fas fa-trash" />
      </button>
    </div>
  );
}}
            dragdrop
            header="Drag to reorder"
            style={{ width: "100%" }}
          />
        </div>
      )}
      </div>
    </div>
  );
}
