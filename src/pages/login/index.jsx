import Loginform from "../../components/loginform";

export default function Login() {
  return (
    <div className="grid grid-cols-12 h-screen">
      <div
        className="col-span-6 bg-cover bg-no-repeat bg-center relative"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1580440282860-8555b1ae102c?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          minHeight: '100%',
          height: '100vh', 
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-40"></div>
        {/* Empty element to push content */}
      </div>
      <div className="col-span-6 flex items-center justify-center px-8 py-12 bg-white rounded-md shadow-md">
        <Loginform />
      </div>
    </div>
  );
}
