import React from "react";

const mockData = {
  ABC123: [
    {
      name: "Vessel Alpha",
      mges: ["MGE 1", "MGE 2", "MGE 3", "MGE 4"],
    },
    {
      name: "Vessel Beta",
      mges: ["MGE 1", "MGE 2"],
    },
  ],
};

const Dashboard = () => {
  const code = localStorage.getItem("userCode");
  const vessels = mockData[code] || [];

  const handleLogout = () => {
    localStorage.removeItem("userCode");
    window.location.href = "/login";
  };

  return (
    <div className="min-h-screen bg-[#0a1a2f] text-white">
      <header className="flex items-center justify-between bg-[#04101e] px-6 py-4 shadow">
        <img src="/logo.png" alt="IMS Logo" className="w-28" />
        <button
          onClick={handleLogout}
          className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded text-sm"
        >
          Logout
        </button>
      </header>

      <div className="p-6 space-y-6 max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold text-white mb-4">
          Welcome, <span className="text-blue-300">{code}</span>
        </h1>

        {vessels.map((vessel, idx) => (
          <div
            key={idx}
            className="bg-white text-black rounded-xl p-6 shadow-md border-l-4 border-blue-700"
          >
            <h2 className="text-xl font-semibold text-blue-800 mb-2">
              {vessel.name}
            </h2>
            <div className="flex flex-wrap gap-4 mt-2">
              {vessel.mges.map((mge, i) => (
                <span
                  key={i}
                  className="bg-blue-100 text-blue-900 px-3 py-1 rounded-full text-sm"
                >
                  {mge}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
