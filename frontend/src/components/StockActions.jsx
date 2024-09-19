// src/components/StockActions.js
import React from "react";
import { FaFileImport, FaFileExport, FaHandshake } from "react-icons/fa"; // Importing specific icons from react-icons

const StockActions = () => {
  return (
    <div className="fixed bottom-4 right-4 bg-gray-100 p-4 flex gap-4 rounded shadow-lg">
      {/* Import Stock Button */}
      <button className="flex items-center text-blue-500 hover:text-blue-700">
        <FaFileImport className="mr-2" />
        Import Stock
      </button>

      {/* Export Stock Button */}
      <button className="flex items-center text-blue-500 hover:text-blue-700">
        <FaFileExport className="mr-2" />
        Export Stock
      </button>

      {/* Reconcile Stock Button */}
      <button className="flex items-center text-blue-500 hover:text-blue-700">
        <FaHandshake className="mr-2" />
        Reconcile Stock
      </button>
    </div>
  );
};

export default StockActions;
