import React from 'react'
import ReusableTable from '../components/ReusableTable';
import { Link } from 'react-router-dom';

function TermAndCondition() {

  const columns = [
    { label: "Sl.no", key: "slNo" },
    { label: "Transaction Type", key: "status" },
    { label: "Points", key: "description" },
    { label: "Active Status", key: "isActive" },
    { label: "Action", key: "action" },
  ];
    const tableData = [
        {
          id: 1,
          status: "Rent",
          description: "Lorem Ipsum is a dummy text used as a placeholder text in designs ,Lorem Ipsum is a dummy text used as a placeholder text in designs Lorem Ipsum is a dummy text used as a placeholder text in designs Lorem Ipsum is a dummy text used as a placeholder text in designs Lorem Ipsum is a dummy text used as a placeholder text in designs Lorem Ipsum is a dummy text used as a placeholder text in designs",
          isActive: true,
          onDelete: (id) => alert(`Delete ${id}`),
          onEdit: (id) => alert(`Edit ${id}`),
        },
        {
          id: 2,
          status: "Sale",
          description: "Lorem Ipsum is a dummy text used as a placeholder text in designs ,Lorem Ipsum is a dummy text used as a placeholder text in designs Lorem Ipsum is a dummy text used as a placeholder text in designs Lorem Ipsum is a dummy text used as a placeholder text in designs Lorem Ipsum is a dummy text used as a placeholder text in designs Lorem Ipsum is a dummy text used as a placeholder text in designs",
          isActive: true,
          onDelete: (id) => alert(`Delete ${id}`),
          onEdit: (id) => alert(`Edit ${id}`),
        },
        {
          id: 3,
          status: "Rent",
          description: "Lorem Ipsum is a dummy text used as a placeholder text in designs ,Lorem Ipsum is a dummy text used as a placeholder text in designs Lorem Ipsum is a dummy text used as a placeholder text in designs Lorem Ipsum is a dummy text used as a placeholder text in designs Lorem Ipsum is a dummy text used as a placeholder text in designs Lorem Ipsum is a dummy text used as a placeholder text in designs",
          isActive: false,
          onDelete: (id) => alert(`Delete ${id}`),
          onEdit: (id) => alert(`Edit ${id}`),
        },
        // Add more data as needed
      ];
    
      return (
        <div className="p-8 bg-gray-100 min-h-screen">
          {/* <h1 className="text-2xl font-bold mb-4">T Status Table</h1> */}
          <div className='flex float-end'>
          <Link to="/term/form">
            <button className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600">
              + Add T&C
            </button>
          </Link>
          </div>
          
          <ReusableTable columns={columns} data={tableData} />
        </div>
      );
}

export default TermAndCondition

