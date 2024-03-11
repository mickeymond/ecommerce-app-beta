export default function Loginform() {
  return (
    <div className="flex flex-col space-y-4">
      <label htmlFor="email" className="text-gray-700">
        Email:
      </label>
      <input
        id="email"
        name="email"
        type="email"
        placeholder="Enter your email"
        className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
      />
      <label htmlFor="password" className="text-gray-700">
        Password:
      </label>
      <input
        id="password"
        name="password"
        type="password"
        placeholder="Enter your password"
        className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
      />
      <button
        type="submit"
        className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-md"
      >
        Login
      </button>
    </div>
  );
}
