// src/components/Sidebar.js
import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  FaLayerGroup,
  FaBox,
  FaTags,
  FaClipboardList,
  FaCreditCard,
  FaFileAlt,
  FaTruck,
  FaChartBar,
  FaUser,
  FaUserShield,
  FaMapMarkerAlt,
  FaCodeBranch,
  FaAddressBook,
  FaPercentage,
<<<<<<< HEAD
  FaBuilding,
  FaRegListAlt,
  FaClipboardCheck,
=======
>>>>>>> b870aace61b44fa149e89572f19647c46a9ee2d6
} from "react-icons/fa";

const Sidebar = () => {
  const location = useLocation();
  const isInventoryRoute = location.pathname.startsWith("/inventory");
  const isProcurementRoute = location.pathname.startsWith("/procurement");
  const isCRMRoute = location.pathname.startsWith("/crm");
  const isOperationRoute = location.pathname.startsWith("/operation");
  const isDashboardRoute = location.pathname.startsWith("/dashboard");

  if (isDashboardRoute) {
    return null;
  }

  const linkClasses =
    "block py-2.5 px-4 m-2 rounded flex items-center flex-col hover:bg-gray-200";
  const activeLinkClasses = "bg-black text-white";

  return (
    <div className="w-24 h-screen bg-gray-100">
      {isInventoryRoute ? (
        <nav className="mt-10">
          <NavLink
            to="/inventory/products"
            className={({ isActive }) =>
              isActive ? `${linkClasses} ${activeLinkClasses}` : linkClasses
            }
          >
            <FaBox className="mb-1" /> Products
          </NavLink>
          <NavLink
            to="/inventory/group"
            className={({ isActive }) =>
              isActive ? `${linkClasses} ${activeLinkClasses}` : linkClasses
            }
          >
            <FaTags className="mb-1" /> Group
          </NavLink>
          <NavLink
            to="/inventory/brands"
            className={({ isActive }) =>
              isActive ? `${linkClasses} ${activeLinkClasses}` : linkClasses
            }
          >
            <FaLayerGroup className="mb-1" /> Brands
          </NavLink>
          <NavLink
            to="/inventory/product-categories"
            className={({ isActive }) =>
              isActive ? `${linkClasses} ${activeLinkClasses}` : linkClasses
            }
          >
            <FaTags className="mb-1" /> Product Categories
          </NavLink>
          <NavLink
            to="/inventory/stock-locations"
            className={({ isActive }) =>
              isActive ? `${linkClasses} ${activeLinkClasses}` : linkClasses
            }
          >
            <FaMapMarkerAlt className="mb-1" /> Stock Locations
          </NavLink>
          <NavLink
            to="/inventory/service"
            className={({ isActive }) =>
              isActive ? `${linkClasses} ${activeLinkClasses}` : linkClasses
            }
          >
            <FaMapMarkerAlt className="mb-1" /> Service
          </NavLink>
        </nav>
      ) : isProcurementRoute ? (
        <nav className="mt-10">
          <NavLink
            to="/procurement/purchase-orders"
            className={({ isActive }) =>
              isActive ? `${linkClasses} ${activeLinkClasses}` : linkClasses
            }
          >
            <FaClipboardList className="mb-1" /> Purchase Orders
          </NavLink>
          <NavLink
            to="/procurement/payments"
            className={({ isActive }) =>
              isActive ? `${linkClasses} ${activeLinkClasses}` : linkClasses
            }
          >
            <FaCreditCard className="mb-1" /> Payments
          </NavLink>
          <NavLink
            to="/procurement/suppliers"
            className={({ isActive }) =>
              isActive ? `${linkClasses} ${activeLinkClasses}` : linkClasses
            }
          >
            <FaTruck className="mb-1" /> Suppliers
          </NavLink>
        </nav>
      ) : isCRMRoute ? (
        <nav className="mt-10">
          <NavLink
            to="/crm/contacts"
            className={({ isActive }) =>
              isActive ? `${linkClasses} ${activeLinkClasses}` : linkClasses
            }
          >
            <FaClipboardList className="mb-1" />
            Contacts
          </NavLink>
          <NavLink
            to="/crm/leads"
            className={({ isActive }) =>
              isActive ? `${linkClasses} ${activeLinkClasses}` : linkClasses
            }
          >
            <FaCreditCard className="mb-1" /> Leads
          </NavLink>
          <NavLink
            to="/crm/quotations"
            className={({ isActive }) =>
              isActive ? `${linkClasses} ${activeLinkClasses}` : linkClasses
            }
          >
            <FaFileAlt className="mb-1" /> Quotations
          </NavLink>
          <NavLink
            to="/crm/orders"
            className={({ isActive }) =>
              isActive ? `${linkClasses} ${activeLinkClasses}` : linkClasses
            }
          >
            <FaTruck className="mb-1" /> Orders
          </NavLink>
        </nav>
      ) : isOperationRoute ? (
        <nav className="mt-10">
          <NavLink
            to="/operation/challans"
            className={({ isActive }) =>
              isActive ? `${linkClasses} ${activeLinkClasses}` : linkClasses
            }
          >
            <FaClipboardList className="mb-1" />
            Delivery Challans
          </NavLink>
          <NavLink
            to="/operation/grn"
            className={({ isActive }) =>
              isActive ? `${linkClasses} ${activeLinkClasses}` : linkClasses
            }
          >
            <FaCreditCard className="mb-1" /> GRN
          </NavLink>
          <NavLink
            to="/operation/invoices"
            className={({ isActive }) =>
              isActive ? `${linkClasses} ${activeLinkClasses}` : linkClasses
            }
          >
            <FaFileAlt className="mb-1" /> Invoices
          </NavLink>
          <NavLink
            to="/operation/automate"
            className={({ isActive }) =>
              isActive ? `${linkClasses} ${activeLinkClasses}` : linkClasses
            }
          >
            <FaTruck className="mb-1" /> Automate
          </NavLink>
          <NavLink
            to="/operation/journey"
            className={({ isActive }) =>
              isActive ? `${linkClasses} ${activeLinkClasses}` : linkClasses
            }
          >
            <FaTruck className="mb-1" /> Client Journey
          </NavLink>
          <NavLink
            to="/operation/reports"
            className={({ isActive }) =>
              isActive ? `${linkClasses} ${activeLinkClasses}` : linkClasses
            }
          >
            <FaChartBar className="mb-1" /> Reports
          </NavLink>
        </nav>
      ) : (
        <nav className="mt-10">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? `${linkClasses} ${activeLinkClasses}` : linkClasses
            }
          >
            <FaUser className="mb-1" />
            User
          </NavLink>
          <NavLink
            to="/roles"
            className={({ isActive }) =>
              isActive ? `${linkClasses} ${activeLinkClasses}` : linkClasses
            }
          >
            <FaUserShield className="mb-1" />
            Roles
          </NavLink>
          <NavLink
            to="/address"
            className={({ isActive }) =>
              isActive ? `${linkClasses} ${activeLinkClasses}` : linkClasses
            }
          >
            <FaMapMarkerAlt className="mb-1" />
            Address
          </NavLink>
          <NavLink
            to="/branches"
            className={({ isActive }) =>
              isActive ? `${linkClasses} ${activeLinkClasses}` : linkClasses
            }
          >
            <FaCodeBranch className="mb-1" />
            Branches
          </NavLink>
          <NavLink
            to="/contacts"
            className={({ isActive }) =>
              isActive ? `${linkClasses} ${activeLinkClasses}` : linkClasses
            }
          >
            <FaAddressBook className="mb-1" />
            Contacts Type
          </NavLink>
          <NavLink
            to="/tax-list"
            className={({ isActive }) =>
              isActive ? `${linkClasses} ${activeLinkClasses}` : linkClasses
            }
          >
            <FaPercentage className="mb-1" />
            Tax List
          </NavLink>
          <NavLink
            to="/tax-lis"
            className={({ isActive }) =>
              isActive ? `${linkClasses} ${activeLinkClasses}` : linkClasses
            }
          >
<<<<<<< HEAD
            <FaBuilding className="mb-1" />
=======
            
>>>>>>> b870aace61b44fa149e89572f19647c46a9ee2d6
            Department
          </NavLink>
          <NavLink
            to="/tax-li"
            className={({ isActive }) =>
              isActive ? `${linkClasses} ${activeLinkClasses}` : linkClasses
            }
          >
<<<<<<< HEAD
            <FaRegListAlt className="mb-1" />
=======
            
>>>>>>> b870aace61b44fa149e89572f19647c46a9ee2d6
            Lead Status
          </NavLink>
          <NavLink
            to="/tax-l"
            className={({ isActive }) =>
              isActive ? `${linkClasses} ${activeLinkClasses}` : linkClasses
            }
          >
<<<<<<< HEAD
            <FaRegListAlt className="mb-1" />
=======
            
>>>>>>> b870aace61b44fa149e89572f19647c46a9ee2d6
            Service Status
          </NavLink>
          <NavLink
            to="/tax"
            className={({ isActive }) =>
              isActive ? `${linkClasses} ${activeLinkClasses}` : linkClasses
            }
          >
<<<<<<< HEAD
            <FaFileAlt className="mb-1" />
=======
            
>>>>>>> b870aace61b44fa149e89572f19647c46a9ee2d6
            Terms & Conditions
          </NavLink>
          <NavLink
            to="/ta"
            className={({ isActive }) =>
              isActive ? `${linkClasses} ${activeLinkClasses}` : linkClasses
            }
          >
<<<<<<< HEAD
            <FaClipboardCheck className="mb-1" />
            Order Checklist
=======
            
           Order Checklist
>>>>>>> b870aace61b44fa149e89572f19647c46a9ee2d6
          </NavLink>
        </nav>
      )}
    </div>
  );
};

export default Sidebar;
