import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

export default function Profile() {
  return (
    <>
      <Navbar />

      <div className="border h-screen flex mt-2 p-5 gap-4">
        <div className="">
          <div className="profile-card border rounded w-72 pt-2 bg-slate-200">
            <img
              src="https://images.unsplash.com/photo-1484608856193-968d2be4080e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80"
              className="object-cover h-40 w-40 rounded-full mx-auto"
            />
            <h3 className="text-center font-bold">Customer 1</h3>
            <div className="money text-center mb-2">
              <div className="balance">
                Balance <br></br>
                GH₵ 0.00
              </div>
            </div>
          </div>
          <div className="adverts border mt-2 text-center cursor-pointer rounded bg-slate-200">
            My adverts
          </div>
          <div className="account-info text-center bg-slate-200 mt-3 rounded cursor-pointer">
            Account information
          </div>
          <div className="feedback text-center bg-slate-200 mt-3 cursor-pointer">
            My feedback
          </div>
        </div>
        <div className=" flex-1 mr-2 border bg-slate-200 rounded">
          <h3 className="text-center font-bold flex justify-center items-center h-12">
            My Orders{" "}
            <span>
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 ml-2"
                fill="black"
                viewBox="0 0 24 24"
                stroke="white"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </span>
          </h3>
          <hr border-black />
        </div>
      </div>

      <Footer />
    </>
  );
}
