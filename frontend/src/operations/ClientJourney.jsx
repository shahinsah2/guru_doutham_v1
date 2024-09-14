import React from "react";
import {
  FaUser,
  FaClipboardList,
  FaQuoteRight,
  FaShoppingCart,
  FaTruck,
  FaCheckCircle,
} from "react-icons/fa";

const ClientJourney = () => {
  const data = [
    {
      icon: <FaUser className="text-blue-500" />,
      title: "Contacts",
      fields: [
        { label: "Date of First Contact", value: "17-01-2024" },
        { label: "Contact/Co. Name", value: "Anand Technologies" },
        { label: "Client Code", value: "1256" },
        { label: "Contact Person", value: "Anand" },
        { label: "Mobile Number", value: "9123456789" },
        { label: "Email", value: "Anand@gmail.com" },
        { label: "Client Owner", value: "Sreejith" },
      ],
    },
    {
      icon: <FaClipboardList className="text-blue-500" />,
      title: "Leads",
      fields: [
        { label: "Lead Date", value: "20-01-2024" },
        { label: "Lead Code", value: "7894" },
        { label: "Lead Type", value: "Rent" },
        { label: "Lead Owner", value: "Sreejith" },
        { label: "Lead Status", value: "Interested" },
      ],
    },
    {
      icon: <FaQuoteRight className="text-blue-500" />,
      title: "Quotation",
      fields: [
        { label: "Quotation Date", value: "28-01-2024" },
        { label: "Quotation Code", value: "7458" },
        { label: "Quotation Type", value: "Rent" },
        { label: "Quotation Amount", value: "55,000" },
        { label: "Executed By", value: "Abhiram" },
      ],
    },
    {
      icon: <FaShoppingCart className="text-blue-500" />,
      title: "Orders",
      fields: [
        { label: "Order Date", value: "05-02-2024" },
        { label: "Order Code", value: "8745" },
        { label: "Order Amount", value: "55,000" },
        { label: "Billing Contact", value: "Anand" },
        { label: "Payment Terms", value: "Prepaid" },
        { label: "Executive", value: "Abhiram" },
      ],
    },
    {
      icon: <FaTruck className="text-blue-500" />,
      title: "DC",
      fields: [
        { label: "DC Date", value: "08-02-2024" },
        { label: "DC Code", value: "8745" },
        { label: "Vehicle Number", value: "KA 05 AD 9956" },
        { label: "Delivered Staff", value: "Abhiram" },
        { label: "Receiver Ph.Number", value: "9123456789" },
        {
          label: "Shipping Address",
          value: "#12th Main Road, Jayanagar, Bangalore",
        },
        { label: "DC Status", value: "Delivered" },
      ],
    },
    {
      icon: <FaCheckCircle className="text-blue-500" />,
      title: "GRN",
      fields: [
        { label: "GRN Date", value: "05-07-2024" },
        { label: "GRN Code", value: "8974" },
        { label: "Informed Person", value: "Mr. Sathish" },
        { label: "Contact Number", value: "9123456789" },
        { label: "Received Person", value: "Abhiram" },
        { label: "Vehicle Number", value: "KA 05 AD 9956" },
      ],
    },
  ];

  return (
    <div className="container mx-auto p-4">
      {/* Search bar */}
      <div className="flex items-center mb-4">
        <input
          type="text"
          placeholder="Search By"
          className="border rounded px-4 py-2 mr-2"
        />
        <input
          type="text"
          placeholder="Enter Code/Name"
          className="border rounded px-4 py-2 mr-2"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Search
        </button>
      </div>

      {/* Journey sections */}
      <div className="grid grid-cols-1 gap-6">
        {data.map((section, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
            {/* Icon and Title */}
            <div className="flex items-center mb-4">
              <div className="text-3xl">{section.icon}</div>
              <h2 className="text-xl font-semibold ml-4">{section.title}</h2>
            </div>

            {/* Fields */}
            <div className="grid grid-cols-2 gap-4">
              {section.fields.map((field, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="font-medium text-gray-600">
                    {field.label}:
                  </span>
                  <span className="text-gray-800">{field.value}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientJourney;
