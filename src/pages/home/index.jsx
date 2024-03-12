import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
// import Catalogue from "../catalogue";

export default function Home() {
  return (
    <>
      <Navbar />
      <div style={{ position: "relative" }}>
        <img
          src="https://images.unsplash.com/photo-1513569771920-c9e1d31714af?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="welcome-pic"
          className="w-full"
          style={{ height: "600px" }}
        />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <h1 style={{ color: "white", textAlign: "center", fontSize: "4vw" }}>
           Welcome to Beta Shopping Mall :)
          </h1>
        </div>
      </div>

      {/* <Catalogue /> */}
      <Footer />
    </>
  );
}
