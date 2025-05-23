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

  return (
    <div className="min-h-screen bg-blue-50 p-6">
      <header className="flex items-center justify-between mb-6">
        <img src="/logo.png" alt="IMS Logo" className="w-24" />
        <h1 className="text-2xl font-bold text-blue-900">Welcome, {code}</h1>
      </header>
      {vessels.map((vessel, idx) => (
        <div key={idx} className="mb-4 p-4 bg-white border-l-4 border-blue-800 shadow rounded">
          <h2 className="text-xl font-semibold text-blue-800">{vessel.name}</h2>
          <ul className="list-disc ml-6 mt-2 text-blue-900">
            {vessel.mges.map((mge, mgeIdx) => (
              <li key={mgeIdx}>{mge}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
