import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [code, setCode] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (code.trim()) {
      localStorage.setItem("userCode", code);
      navigate("/");
    }
  };

  return (
    <div
      className="h-screen flex flex-col items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          'linear-gradient(to bottom right, rgba(0, 34, 64, 0.6), rgba(0, 51, 102, 0.6)), url("/shutterstock_2512846529.jpg")',
      }}
    >
      <img src="/logo.png" alt="IMS Logo" className="w-32 mb-6" />
      <div className="p-6 bg-white bg-opacity-90 shadow-xl rounded-xl text-black w-80">
        <h2 className="text-xl font-semibold mb-4 text-center text-blue-900">
          Customer Login
        </h2>
        <input
          type="text"
          placeholder="Enter your code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="border p-2 rounded w-full mb-4"
        />
        <button
          onClick={handleLogin}
          className="bg-blue-800 hover:bg-blue-900 text-white px-4 py-2 rounded w-full"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
