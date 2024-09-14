import React from "react";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import { users } from "../assets/dummyMasterData";
import Toolbar from "../components/Toolbar";
import { Link } from "react-router-dom";
import StockActions from "../components/StockActions";

const Brands = () => {
  return (
    <>
      <Toolbar />
      <div className="p-3">
        <table className="min-w-full bg-white border-collapse border border-gray-200">
          <thead>
            <tr>
              <th className="py-2 px-3 border border-gray-300">Product Image</th>
              <th className="py-2 px-3 border border-gray-300">Product ID</th>
              <th className="py-2 px-3 border border-gray-300">Product Name </th>
              <th className="py-2 px-3 border border-gray-300">Category</th>
              <th className="py-2 px-3 border border-gray-300">Brand</th>
              <th className="py-2 px-3 border border-gray-300">Description</th>
              <th className="py-2 px-3 border border-gray-300">Specifications</th>
              <th className="py-2 px-3 border border-gray-300">Product Status</th>
              <th className="py-2 px-3 border border-gray-300">Purchase Price</th>
              <th className="py-2 px-3 border border-gray-300">Price Per Date </th>
              <th className="py-2 px-3 border border-gray-300">Price 1/month</th>
              <th className="py-2 px-3 border border-gray-300">Price 6/month</th>
              <th className="py-2 px-3 border border-gray-300">Price 1 year</th>
              
              <th className="py-2 px-3 border border-gray-300">
                Active Status
              </th>
              <th className="py-2 px-3 border border-gray-300">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index} className="border border-gray-200">
                <td className="py-2 px-4 border border-gray-300">
                <div className="flex">
                <input type="checkbox" className="toggle-checkbox" />{" "}
                <img src="https://s3-alpha-sig.figma.com/img/3ee9/eb26/4b9d27120ea1c1bf039f2772f32d0b79?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=edueex2cc2hGItEQnhpRlntBsxjSL-XiG460eNFe~d3tQTpb~LW~mOJi0GSeLjVvQHft5vVM5LrkfBWIAVpaHq1Sxi-aspkY5-THNhsO3Y2ps5tX38i0oPga-aKycoz3scHfadd9zGR50eN99fNJ6Ymjku3QYyNsRZnV5m~A~kRUGQhojKcl1xb0XRbCs2lUPJN94fEL8opHDvHARNtScrhGijIqD4oSybJJymMy75MUfGny002cxZwMTIbWz5lgx1uiZRJxvp6-B2hGKnrq3Q47Ois-XkL1JTYypCbiSnttXciFABEf4Kv4bmuzA7zPTCB2pD5E6ws1UBV2zuxAfQ__" alt="laptop"/>
                </div>
                </td>
                <td className="py-2 px-4 border border-gray-300">
                  {/* {user.role} */} 15456
                </td>
                <td className="py-2 px-4 border border-gray-300">
                  {/* {user.email} */}HP 15s 12th Gen
                </td>
                <td className="py-2 px-4 border border-gray-300">
                  {/* {user.phone} */} Laptop
                </td>
                <td className="py-2 px-4 border border-gray-300">
                  {/* {user.username} */} HP
                </td>
                <td className="py-2 px-4 border border-gray-300">
                  {/* {user.password} */} Lorem ipsum dolor sit amet, consectetuer adipisc rem ipsu...
                </td>
                <td className="py-2 px-4 border border-gray-300">
                  {/* {user.password} */}RAM: 16 GB Graphics: 4GB + 1.5GB Disk type: SSD...
                </td>
                <td className="py-2 px-4 border border-gray-300">
                  {/* <input type="checkbox" className="toggle-checkbox" />{" "} */}
                  {/* {user.name} */} Pending..
                </td>
                <td className="py-2 px-4 border border-gray-300">
                  {/* {user.role} */} ₹58000/-
                </td>
                <td className="py-2 px-4 border border-gray-300">
                  {/* {user.email} */}₹58000/-
                </td>
                <td className="py-2 px-4 border border-gray-300">
                  {/* {user.phone} */} ₹193333.33/-
                </td>
                <td className="py-2 px-4 border border-gray-300">
                  {/* {user.username} */} ₹193333.33/-
                </td>
                <td className="py-2 px-4 border border-gray-300">
                  {/* {user.password} */} ₹193333.33/-
                </td>
              
                <td className="py-2 px-4 border border-gray-300">
                  {user.status ? (
                    <span className="bg-green-500 text-white px-2 py-1 rounded">
                      Active
                    </span>
                  ) : (
                    <span className="bg-red-500 text-white px-2 py-1 rounded">
                      Inactive
                    </span>
                  )}
                </td>
                <td className="py-2 border border-gray-300">
                  <button className="px-2 py-1 bg-red-500 text-white rounded mr-2">
                    <FaTrashAlt />
                  </button>
                  <Link to="/inventory/product/form">
                    {" "}
                    <button className="px-2 py-1 bg-blue-500 text-white rounded">
                      <FaEdit />
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* Pagination */}
        <div className="flex justify-center mt-4">
          <button className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">
            &lt;
          </button>
          <button className="px-3 py-1 bg-blue-500 text-white rounded mx-1">
            1
          </button>
          <button className="px-3 py-1 bg-gray-200 rounded mx-1">2</button>
          <button className="px-3 py-1 bg-gray-200 rounded mx-1">3</button>
          <span className="px-3 py-1">...</span>
          <button className="px-3 py-1 bg-gray-200 rounded mx-1">7</button>
          <button className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">
            &gt;
          </button>
        </div>
      </div>
      <StockActions/>
    </>
  );
};

export default Brands;
