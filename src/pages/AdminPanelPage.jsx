import React from 'react';

const AdminPanel = () => {
  return (
    <div className="min-h-screen bg-gray-200">
      <header className="bg-blue-500 text-white p-4">
        <h1 className="text-xl font-semibold">Admin Panel</h1>
      </header>

      <div className="p-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Dashboard</h2>
          <p>Welcome to the Admin Panel</p>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
