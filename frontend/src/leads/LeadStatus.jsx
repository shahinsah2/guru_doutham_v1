import React from 'react'
import ReusableTable from '../components/ReusableTable';

function LeadStatus() {
    const tableData = [
        {
          id: 1,
          status: "Cold",
          description: "Lorem Ipsum is a dummy text used as a placeholder text in designs",
          isActive: true,
          onDelete: (id) => alert(`Delete ${id}`),
          onEdit: (id) => alert(`Edit ${id}`),
        },
        {
          id: 2,
          status: "Warm",
          description: "Lorem Ipsum is a dummy text used as a placeholder text in designs",
          isActive: true,
          onDelete: (id) => alert(`Delete ${id}`),
          onEdit: (id) => alert(`Edit ${id}`),
        },
        {
          id: 3,
          status: "Interested",
          description: "Lorem Ipsum is a dummy text used as a placeholder text in designs",
          isActive: false,
          onDelete: (id) => alert(`Delete ${id}`),
          onEdit: (id) => alert(`Edit ${id}`),
        },
        // Add more data as needed
      ];
    
      return (
        <div className="p-8 bg-gray-100 min-h-screen">
          <h1 className="text-2xl font-bold mb-4">Lead Status Table</h1>
          <ReusableTable data={tableData} />
        </div>
      );
}

export default LeadStatus