import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import { FaClock } from "react-icons/fa";
import React, { useState } from "react";

export default function Cart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Falari",
      price: 90,
      quantity: 1,
      description:
        "Falari 4-Pack Men's Boxer Underwear 100% Cotton,Medium size.",
      shipping: "2-3 weeks",
      image:
        "https://i5.walmartimages.com/seo/Falari-4-Pack-Men-s-Boxer-Underwear-100-Cotton-Assorted-01-Medium_3867ee26-1bf4-424d-95c5-7e2e72b08357_1.8b5b1202c230d5db5752db324d821556.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF",
    },
    {
      id: 2,
      name: "Besiwah Heels",
      price: 150,
      quantity: 1,
      description:
        "Ladies High Heels Female Classic, Pointed High Heels, Green",
      shipping: "2-3 weeks",
      image:
        "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/34/489827/1.jpg?0196",
    },
  ]);

  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);

  const handleApplyCoupon = () => {
    console.log("Coupon applied:", coupon);
    if (coupon === "SAVE40") {
      console.log("Discount applied");
      setDiscount(totalPrice * 0.4);
    }
  };

  const incrementQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const discountedPrice = totalPrice - discount;

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Your Shopping Cart</h1>
        <div className="bg-blue-500 text-white p-2 mb-4 rounded">
          <p className="text-center">Get free delivery on orders over $500</p>
        </div>
        <div className="flex">
          <div className="w-3/4 pr-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b border-gray-200 py-2"
              >
                <div className="flex items-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-bold">{item.name}</h3>
                    <p className="text-gray-500">
                      <strong>${item.price}</strong>
                    </p>
                    <p className="text-gray-700">{item.description}</p>
                    <div className="flex items-center text-gray-700">
                      <FaClock className="mr-2" />
                      Shipping: {item.shipping}
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <button
                    onClick={() => decrementQuantity(item.id)}
                    className="bg-gray-200 text-gray-700 px-2 py-1 rounded-l"
                  >
                    -
                  </button>
                  <span className="px-2">{item.quantity}</span>
                  <button
                    onClick={() => incrementQuantity(item.id)}
                    className="bg-gray-200 text-gray-700 px-2 py-1 rounded-r"
                  >
                    +
                  </button>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="ml-4 text-red-500"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="w-1/4 bg-gray-100 p-4 rounded-lg">
            <h2 className="text-xl font-bold mb-4 text-center">
              Order Summary
            </h2>
            <p className="text-gray-700 text-center">
              Subtotal: <strong>${totalPrice}</strong>
            </p>
            <div className="flex justify-center mt-4">
              <input
                type="text"
                placeholder="Enter coupon code"
                className="border border-gray-300 px-2 py-1 rounded mr-2"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
              />
              <button
                onClick={handleApplyCoupon}
                className={`${
                  discount > 0 ? "bg-gray-500" : "bg-blue-500"
                } text-white px-4 py-1 rounded`}
              >
                Apply Coupon
              </button>
            </div>
            <p className="text-gray-700 text-center">
              Discount: <strong>${discount}</strong>
            </p>
            <p className="text-gray-700 text-center">
              Total: <strong>${discountedPrice}</strong>
            </p>
            <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded block mx-auto">
              <a href="/checkout" className="text-white">
                Proceed to Checkout
              </a>
            </button>
          </div>
        </div>
        <div className="text-center mt-4">
          <a href="/" className="font-bold">
            or Continue Shopping →
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
}
