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
      { label: "Mushroom Curry with Roti (4pcs), Salad, Raita, One Sweet Dish", price: 160 },
      { label: "Butter Paneer Masala with 4pcs roti, Salad, Raita, One Sweet Dish", price: 180 },
      { label: "Paneer Kaali Mirch with 4pcs roti, Salad, Raita, One Sweet Dish", price: 180 },
      { label: "Matar Paneer with Roti (4pcs), Salad, Raita, One Sweet Dish", price: 160 },
      { label: "Hing Aloo Sabji with Roti (4pcs), Salad, Raita, One sweet dish", price: 140 },
      { label: "Chilli Paneer & Fried Rice Combo", price: 140 },
      { label: "Aloo Matar Curry with Roti (4pcs), Salad, Raita, One sweet dish", price: 140 },
      { label: "Gatte Ki Sabji with Roti (4pcs), Salad, Raita, One sweet dish", price: 160 },
      { label: "Chole with Roti (4pcs), Salad, Raita, One sweet dish", price: 130 },
      { label: "Pindi Chole with Roti (4pcs), Salad, Raita, One sweet dish", price: 150 },
      { label: "Chole Bhature, Salad, Raita", price: 120 },
      { label: "Bhindi Sabji with Roti (4pcs), Salad, Raita , One Sweet Dish", price: 140 },
      { label: "Veg Shezwan Fried Rice", price: 120 },
      { label: "Tadka Dal, Rice, Roti, Bhindi, Salad, Raita", price: 140 },
      { label: "Rajma, Roti(4pcs), Salad, Raita, One sweet dish", price: 140 },
      { label: "Kadhi Rice Combo , Salad", price: 110 },
      { label: "Chole Rice Combo , Raita , Salad", price: 110 },
      { label: "Pindi Chole Rice Combo , Salad", price: 120 },
      { label: "Rajma Rice Combo , Raita , Salad", price: 120 },
      { label: "Tadka Dal Rice Combo, Salad", price: 110 },
      { label: "Dahi Tadka Rice, Salad", price: 100 },
      { label: "Mathe wale aloo, Roti (4pcs), Raita, Salad, One Sweet Dish", price: 140 },
      { label: "Rice/Jeera Rice", price: "50/60" },
      { label: "Tadka Dal, Lauki Jeera, 4 Roti, Rice, Raita, Salad", price: 120 },
      { label: "Paneer Bhurji, 4 Roti, Raita, Salad, One Sweet Dish", price: 160 },
      { label: "Khatmeetha Petha (Kaddu), 4 Roti/Paratha, Salad", price: 140 },
    ]
  },
   {
    label: 'Khichdi',
    items: [
      { label: "Moong Dal Khichdi with curd, Salad", price: 100 },
     
      { label: "Tehri/Veg Pulao, Salad, Raita", price: 110 },
    ]
  },
  {
    label: 'Breakfast',
    items: [
      { label: "Paneer Paratha (2pcs)", price: 120 },
      { label: "Sattu Paratha (2pcs)", price: 90 },
      { label: "Sattu Paratha (2pcs) with Baigan ka chokha, Salad", price: 120 },
      { label: "Aloo Paratha (2pcs)", price: 80 },
      { label: "Pyaz Paratha (2pcs)", price: 60 },
      { label: "Besan Chilla (2pcs)", price: 90 },
      { label: "Sooji Chilla(2pcs)", price: 80 },
      { label: "Veg Vermicelli", price: 80 },
      { label: "Sprouts", price: 100 },
      { label: "Veg Masala Oats", price: 80 },
      { label: "Veg Sandwich (2pcs)", price: 80 },
      { label: "Paneer Sandwich (4pcs)", price: 130 },
      { label: "Aloo Sandwich (2pcs)", price: 60 },
      { label: "Indori Poha", price: 80 },
      { label: "Upma", price: 80 },
      { label: "Poori(4pcs) with Masala Aloo", price: 100 },

      
    ]
  },
  {
    label: 'Drinks',
    items: [
      { label: "Masala Chaas", price: 60 },
      { label: "Lassi", price: 70 },
      { label: "Sattu Lassi", price: 70 },
      { label: "Adrak Chai", price: 30 },
      { label: "Masala Adrak Chai", price: 40 },
      { label: "Lemon Tea", price: 30 },
      { label: "Honey Lemon Tea", price: 45 },
      { label: "Cold Coffee", price: 60 },
      { label: "Hot Coffee", price: 50 },
      { label: "Dry Fruits Mango Shake", price: 90 },
      { label: "Banana Shake", price: 80 },
    ]
  },
  {
  label: 'Snacks',
  items: [
    { label: "Bread Pizza (2pcs)", price: 100 },
    { label: "Baked Mini Samosa Bucket (H-6pcs / F-12pcs)", price: "80/150" },
    { label: "Fried Mini Samosa Bucket (H-6pcs / F-12pcs)", price: "60/120" },
    { label: "Baked Sooji Bites", price: 100},
    { label: "Bread Roll (4pcs)", price: 80 },
    { label: "Veg Maggie", price: 70 },
    { label: "Veg Macroni", price: 80 },
    { label: "Veg Cheese Macroni", price: 100 },
    { label: "Dhokla (4pcs)", price: 100 },
    { label: "Lassi", price: 70 },
    { label: "Masala Chaas", price: 60 },
    { label: "Alloo Tikki Chaat (H/F)", price: "80,100" },
    { label: "Veg Momos (H-5pcs/F-10pcs)", price: "60,100" },
    { label: "Veg Schezwan Noodles", price: "110" },
    { label: "Pav Bhaji, Salad", price: 120 },

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
    "Feel the flavor, taste the care, authentic home-cooked meals beyond compare.",
  "Freshly cooked with love, delivered with care.",
  "Soulful meals, straight from a home kitchen.",
  "A taste of tradition in every bite you take.",
  "Wholesome meals that speak your language of comfort.",
  "Because nothing beats the taste of homemade food.",
  "Simple ingredients, magical flavors, cooked at home.",
  "Feeding hearts, not just hunger.",
  "Where your cravings meet comfort cooking.",
  "Every bite feels like coming home.",
  "Love, spice, and everything nice — homemade for you.",
  "Food that hugs you from the inside.",
  "Because home is where the food is warm and real.",
  "Authentic recipes, unforgettable taste.",
  "Let your taste buds travel home.",
  "Flavors rooted in love and tradition.",
  "Delicious food without stepping into the kitchen.",
  "For those who miss mom’s cooking.",
  "Meals that whisper nostalgia.",
  "Ghar ka khana, made just right.",
  "One bite, and you're back home.",
  "Comfort cooking for every craving.",
  "From our stove to your story.",
  "Slow-cooked, soul-filled, and satisfying.",
  "The home-cooked magic you’ve been missing.",
  "Good food, just like nani used to make.",
  "Meals crafted with care, not chemicals.",
  "Food that makes you feel hugged.",
  "Let our food do the comforting today.",
  "Served warm, seasoned with love.",
  "Freshly made daily, with heart and hands.",
  "Food that feels like a warm Sunday afternoon.",
  "No mess, no stress, just homestyle deliciousness.",
  "Not factory-made, but family-made.",
  "Fuel your day with feel-good food.",
  "Biryani to bhindi — all home-approved!",
  "For the love of roti-sabzi and beyond.",
  "Every order, a bite of comfort.",
  "Taste tested by homes, loved by many.",
  "Craving solved — homemade and wholesome.",
  "Tiffin-style meals with a homemade twist.",
  "Hearty meals, light on your stomach.",
  "Simple food, extraordinary taste.",
  "No preservatives, just pure passion.",
  "Taste built from tradition, served with love.",
  "Our kitchen, your second home.",
  "Every dish is a homemade promise.",
  "Food that’s as real as your roots.",
  "More than a meal — it’s a memory.",
  "Daily meals made the desi way.",
  "Because you deserve a break from cooking."
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

        {/* <div className="col-md-12 mb-3">
          <label>Choose Flyer Style</label>
          <input
            type="color"
            className="form-control form-control-color"
            value={data.customBgColor || "#ffffff"}
            onChange={e => setData({ ...data, customBgColor: e.target.value })}
          />
          
        </div> */}
        <div className="col-md-6 mb-3">
  <label>Choose Flyer Base Color (for gradient)</label>
  <input
    type="color"
    className="form-control form-control-color"
    value={data.customBgColor || "#ffffff"}
    onChange={e => setData({ ...data, customBgColor: e.target.value })}
  />
</div>
<div className="col-md-6 mb-3">
  <label>Enable Background Image</label>
  <div className="form-check form-switch">
    <input
      className="form-check-input"
      type="checkbox"
      checked={data.useBgImage}
      onChange={e => setData({ ...data, useBgImage: e.target.checked })}
    />
    <label className="form-check-label">{data.useBgImage ? "Enabled" : "Disabled"}</label>
  </div>
</div>

{data.useBgImage && (
  <div className="col-md-6 mb-3">
    <label>Select Background Image</label>
    <select
      className="form-select"
      value={data.bgImageOption}
      onChange={(e) => setData({ ...data, bgImageOption: e.target.value })}
    >
      <option value="" selected disabled>Select an option</option>
      <option value="food-bg.jpg">Food Image 1</option>
      <option value="food-bg1.jpg">Food Image 2</option>
      <option value="food-bg2.jpg">Food Image 3</option>
      <option value="food-bg3.jpg">Food Image 4</option>
      <option value="food-bg4.jpg">Food Image 5</option>
    </select>
  </div>
)}

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
           filter
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
