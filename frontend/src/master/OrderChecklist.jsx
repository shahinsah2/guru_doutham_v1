import React from 'react'
import ReusableTable from '../components/ReusableTable';

function OrderChecklist() {

  const columns = [
    { label: "Sl.no", key: "slNo" },
    { label: "Order Checklist", key: "status" },
    { label: "Description", key: "description" },
    { label: "Active Status", key: "isActive" },
    { label: "Action", key: "action" },
  ];
    const tableData = [
        {
          id: 1,
          status: "Checklist 1",
          description: "Lorem Ipsum is a dummy text used as a placeholder text in designs",
          isActive: true,
          onDelete: (id) => alert(`Delete ${id}`),
          onEdit: (id) => alert(`Edit ${id}`),
        },
        {
          id: 2,
          status: "Checklist 2",
          description: "Lorem Ipsum is a dummy text used as a placeholder text in designs",
          isActive: true,
          onDelete: (id) => alert(`Delete ${id}`),
          onEdit: (id) => alert(`Edit ${id}`),
        },
        {
          id: 3,
          status: "Checklist 3",
          description: "Lorem Ipsum is a dummy text used as a placeholder text in designs",
          isActive: false,
          onDelete: (id) => alert(`Delete ${id}`),
          onEdit: (id) => alert(`Edit ${id}`),
        },
        // Add more data as needed
      ];
    
      return (
        <div className="p-8 bg-gray-100 min-h-screen">
          <h1 className="text-2xl font-bold mb-4">Order Status Table</h1>
          <ReusableTable columns={columns} data={tableData} />
        </div>
      );
}

export default OrderChecklist