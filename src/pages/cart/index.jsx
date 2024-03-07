import React, { useState } from 'react';
import Footer from '../../components/footer';
import Navbar from '../../components/navbar';
import { FaClock } from 'react-icons/fa';

export default function Cart() {
    const [cartItems, setCartItems] = useState([
        { id: 1, name: 'Product 1', price: 10, quantity: 1, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', shipping: '2-3 weeks', image: 'https://via.placeholder.com/150' },
        { id: 2, name: 'Product 2', price: 20, quantity: 1, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', shipping: '2-3 weeks', image: 'https://via.placeholder.com/150' }
    ]);
    const [coupon, setCoupon] = useState('');
    const [discount, setDiscount] = useState(0);

    const handleApplyCoupon = () => {
        // Apply coupon logic here
        // For example, if the coupon is "SAVE20", set discount to 20%
        if (coupon === 'SAVE20') {
            setDiscount(totalPrice * 0.2);
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

    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    const discountedPrice = totalPrice - discount;

    return (
        <>
            <Navbar />
            <div className="container mx-auto p-4">
                <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
                <div className="bg-blue-500 text-white p-2 mb-4 rounded">
                    <p className="text-center">Get free delivery on orders over $500</p>
                </div>
                <div className="flex">
                    <div className="w-3/4 pr-4">
                        {cartItems.map((item) => (
                            <div key={item.id} className="flex items-center justify-between border-b border-gray-200 py-2">
                                <div className="flex items-center">
                                    <img src={item.image} alt={item.name} className="w-16 h-16 object-cover mr-4" />
                                    <div>
                                        <h3 className="font-bold">{item.name}</h3>
                                        <p className="text-gray-500">${item.price}</p>
                                        <p className="text-gray-700">{item.description}</p>
                                        <div className="flex items-center text-gray-700">
                                            <FaClock className="mr-2" />
                                            Shipping: {item.shipping}
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <button onClick={() => decrementQuantity(item.id)} className="bg-gray-200 text-gray-700 px-2 py-1 rounded-l">
                                        -
                                    </button>
                                    <span className="px-2">{item.quantity}</span>
                                    <button onClick={() => incrementQuantity(item.id)} className="bg-gray-200 text-gray-700 px-2 py-1 rounded-r">
                                        +
                                    </button>
                                    <button onClick={() => removeItem(item.id)} className="ml-4 text-red-500">
                                        Remove
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="w-1/4 bg-gray-100 p-4 rounded-lg">
                        <h2 className="text-xl font-bold mb-4 text-center">Order Summary</h2>
                        <p className="text-gray-700 text-center">Subtotal: ${totalPrice}</p>
                        <div className="flex justify-center mt-4">
                            <input type="text" placeholder="Enter coupon code" className="border border-gray-300 px-2 py-1 rounded mr-2" value={coupon} onChange={(e) => setCoupon(e.target.value)} />
                            <button onClick={handleApplyCoupon} className="bg-blue-500 text-white px-4 py-1 rounded">Apply Coupon</button>
                        </div>
                        <p className="text-gray-700 text-center">Discount: ${discount}</p>
                        <p className="text-gray-700 text-center">Total: ${discountedPrice}</p>
                        <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded block mx-auto">Checkout</button>
                    </div>
                </div>
                <div className="text-center mt-4">
                    <a href="#" className="font-bold">or Continue Shopping →</a>
                </div>
            </div>
            <Footer />
        </>
    );
}
