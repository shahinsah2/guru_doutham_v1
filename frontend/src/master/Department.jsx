import React from 'react'
import ReusableTable from '../components/ReusableTable';

function Department() {

  const columns = [
    { label: "Sl.no", key: "slNo" },
    { label: "Department", key: "status" },
    { label: "Description", key: "description" },
    { label: "Active Status", key: "isActive" },
    { label: "Action", key: "action" },
  ];
    const tableData = [
        {
          id: 1,
          status: "Service",
          description: "Lorem Ipsum is a dummy text used as a placeholder text in designs",
          isActive: true,
          onDelete: (id) => alert(`Delete ${id}`),
          onEdit: (id) => alert(`Edit ${id}`),
        },
        {
          id: 2,
          status: "Marketing",
          description: "Lorem Ipsum is a dummy text used as a placeholder text in designs",
          isActive: true,
          onDelete: (id) => alert(`Delete ${id}`),
          onEdit: (id) => alert(`Edit ${id}`),
        },
        {
          id: 3,
          status: "Technical Team",
          description: "Lorem Ipsum is a dummy text used as a placeholder text in designs",
          isActive: false,
          onDelete: (id) => alert(`Delete ${id}`),
          onEdit: (id) => alert(`Edit ${id}`),
        },
        // Add more data as needed
      ];
    
      return (
        <div className="p-8 bg-gray-100 min-h-screen">
          <h1 className="text-2xl font-bold mb-4">Department Status Table</h1>
          <ReusableTable columns={columns} data={tableData} />
        </div>
      );
}



export default Department