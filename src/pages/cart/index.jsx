import React, { useState } from 'react';
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";

export default function Cart() {
    const [cartItems, setCartItems] = useState([
        { id: 1, name: 'Product 1', price: 10, quantity: 1 },
        { id: 2, name: 'Product 2', price: 20, quantity: 1 }
    ]);

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

    return (
        <>
            <Navbar />
            <div className="container mx-auto p-4">
                <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
                <div className="bg-white p-4 shadow rounded-lg">
                    {cartItems.map((item) => (
                        <div key={item.id} className="flex items-center justify-between border-b border-gray-200 py-2">
                            <div className="flex items-center">
                                <span className="font-bold">{item.name}</span>
                                <span className="text-gray-500 ml-2">${item.price}</span>
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
                    <div className="flex justify-between mt-4">
                        <p className="text-lg">Subtotal: ${totalPrice}</p>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded">Checkout</button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
