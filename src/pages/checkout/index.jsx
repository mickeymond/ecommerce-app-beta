import Footer from "../../components/footer";
import Navbar from "../../components/navbar";

export default function Checkout() {
  return (
        <> 
        <div className="flex justify-center">
            <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-2/3 mt-8 flex">
                {/* Checkout form */}
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-3/4 mr-4">
                    <h1 className="text-2xl font-bold mb-4">Checkout</h1>
                    {/* Name */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Name
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="name"
                            type="text"
                            placeholder="Enter your name"
                        />
                    </div>
                    {/* Email */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                        />
                    </div>
                    {/* Address */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
                            Address
                        </label>
                        <textarea
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="address"
                            placeholder="Enter your address"
                        ></textarea>
                    </div>
                    {/* Payment */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Payment Method
                        </label>
                        <select
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        >
                            <option>PayPal</option>
                            <option>Credit Card</option>
                        </select>
                    </div>
                    {/* Checkout button */}
                    <div className="flex items-center justify-between">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="button"
                        >
                            Checkout
                        </button>
                    </div>
                </form>
                {/* Order Summary */}
                <aside className="w-1/4 bg-gray-100 p-4 rounded shadow-md">
                    <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
                    {/* Items list */}
                    <ul>
                        <li className="flex justify-between mb-2">
                            <span>Product 1</span>
                            <span>$20.00</span>
                        </li>
                        <li className="flex justify-between mb-2">
                            <span>Product 2</span>
                            <span>$30.00</span>
                        </li>
                    </ul>
                    <hr className="my-4" />
                    {/* Total */}
                    <div className="flex justify-between">
                        <span>Total:</span>
                        <span>$50.00</span>
                    </div>
                </aside>
            </div>
        </div>
         </>

  );
    

    





















      {/* <div>
        <h3>Contact Information</h3>
        <label>Email address</label>
        <input type="text" placeholder="Email address"></input>
        <h3>Shipping Information</h3>
        <label>Firstname</label>
        <input type="text" placeholder="Firstname"></input>
        <label>Lastname</label>
        <input type="text" placeholder="Lastname"></input>
        <label>Company</label>
        <input type="text" placeholder=""></input>
        <label>Address</label>
        <input type="text"></input>
        <label>Apartment</label>
        <input type="text"></input>
        <label>City</label>
        <input type="text"></input>
        <label>Country</label>
        <input type="text"></input>
        <label>State</label>
        <input type="text"></input>
        <label>Postal Code</label>
        <input type="text"></input>
        <label>Phone</label>
        <input type="text"></input>
      </div> */}
    
  
}
