import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import { useState, useEffect, useCallback } from "react";

export default function Cart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Strawberry",
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1623227866882-c005c26dfe41?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "strawberry",
      price: 20,
    },
    {
      id: 2,
      name: "Banana",
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1528825871115-3581a5387919?q=80&w=1430&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "banana",
      price: 30,
    },
    {
      id: 3,
      name: "Bell pepper",
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1573067485648-4cb2618b5e09?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "bell peppers",
      price: 50,
    },
  ]);

  const calculateSubtotal = useCallback(() => {
    return cartItems.reduce(
      (total, item) => total + item.quantity * item.price,
      0
    );
  }, [cartItems]);

  useEffect(() => {
    // Update subtotal whenever cartItems change
    const subtotal = calculateSubtotal();
    // update cart
    console.log("Subtotal:", subtotal);
  }, [cartItems, calculateSubtotal]);

  const handleRemoveItem = (itemId) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
  };

  const handleQuantityChange = (itemId, newQuantity) => {
    const updatedCart = cartItems.map((item) =>
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedCart);
  };

  const increaseQuantity = (itemId) => {
    const updatedCart = cartItems.map((item) =>
      item.id === itemId
        ? { ...item, quantity: parseInt(item.quantity, 10) + 1 }
        : item
    );
    setCartItems(updatedCart);
  };

  const decreaseQuantity = (itemId) => {
    const updatedCart = cartItems.map((item) =>
      item.id === itemId && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCartItems(updatedCart);
  };

  return (
    <>
      <Navbar />

      <section>
        <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div class="mx-auto max-w-3xl">
            <header class="text-center">
              <h1 class="text-xl font-bold text-gray-900 sm:text-3xl">
                Your Cart
              </h1>
            </header>

            <div class="mt-8">
              <ul class="space-y-4">
                {cartItems.map((item) => (
                  <li class="flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.alt}
                      class="size-16 rounded object-cover"
                    />

                    <div>
                      <h2 class="text-sm text-gray-900">{item.name}</h2>

                      <dl class="mt-0.5 space-y-px text-[10px] text-gray-600">
                        <div>
                          <dt class="inline">Price:</dt>
                          <dd class="inline">{item.price}</dd>
                        </div>
                      </dl>
                    </div>

                    <div class="flex flex-1 items-center justify-end gap-2">
                      <form>
                        <label
                          htmlFor={`Line${item.id}Qty`}
                          className="sr-only"
                        >
                          Quantity
                        </label>
                        <div class="flex items-center gap-1">
                          <button
                            onClick={() => decreaseQuantity(item.id)}
                            type="button"
                            class="size-10 leading-10 text-gray-600 transition hover:opacity-75"
                          >
                            &minus;
                          </button>

                          <input
                            type="number"
                            min="1"
                            value={item.quantity}
                            id={`Line${item.id}Qty`}
                            className="h-8 w-12 rounded border-gray-200 bg-gray-50 p-0 text-center text-xs text-gray-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                            onChange={() => {}}
                            onBlur={() =>
                              handleQuantityChange(item.id, item.quantity)
                            }
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                e.preventDefault();
                                e.target.blur();
                                handleQuantityChange(item.id, item.quantity);
                              }
                            }}
                            readOnly
                          />
                          <button
                            onClick={() => increaseQuantity(item.id)}
                            type="button"
                            class="size-10 leading-10 text-gray-600 transition hover:opacity-75"
                          >
                            +
                          </button>
                        </div>
                      </form>

                      <button
                        onClick={() => handleRemoveItem(item.id)}
                        class="text-gray-600 transition hover:text-red-600"
                      >
                        <span class="sr-only">Remove item</span>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="h-4 w-4"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                          />
                        </svg>
                      </button>
                    </div>
                  </li>
                ))}
              </ul>

              <div class="mt-8 flex justify-end border-t border-gray-100 pt-8">
                <div class="w-screen max-w-lg space-y-4">
                  <dl class="space-y-0.5 text-sm text-gray-700">
                    <div class="flex justify-between">
                      <dt>Subtotal</dt>
                      <dd>${calculateSubtotal()}</dd>
                    </div>

                    <div class="flex justify-between !text-base font-medium">
                      <dt>Total</dt>
                      <dd>${calculateSubtotal()}</dd>{" "}
                    </div>
                  </dl>

                  <div class="flex justify-end">
                    <span class="inline-flex items-center justify-center rounded-full bg-indigo-100 px-2.5 py-0.5 text-indigo-700"></span>
                  </div>

                  <div class="flex justify-end">
                    <button class="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600">
                      Checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
