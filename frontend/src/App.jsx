import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Login from "./components/auth/Login";
import ForgotPassword from "./components/auth/ForgotPassword";
import ChangePassword from "./components/auth/ChangePassword";
import Sidebar from "./components/layout/Sidebar";
import Header from "./components/layout/Header";
import UserTable from "./components/UserTable";
import AddUserForm from "./master/AddUserForm";
import Roles from "./master/Roles";
import AddRoleForm from "./master/AddRoleForm";
import Address from "./master/Address";
import Branches from "./master/Branches";
import AddressState from "./master/AddressState";
import AddressCity from "./master/AddressCity";
import AddAddressForm from "./master/AddAddressForm";
import AddBranchForm from "./master/AddBranchForm";
import Contacts from "./crm/Contacts";
import AddContactForm from "./master/AddContactForm";
import TaxList from "./master/TaxList";
import AddTaxListForm from "./master/AddTaxListForm";
import Brands from "./inventory/Brands";
import AddProductForm from "./inventory/AddProductForm";
import Group from "./inventory/Group";
import AddGroupForm from "./inventory/AddGroupForm";
import Brand from "./inventory/Brand";
import AddForm from "./components/AddForm";
import StockLocation from "./inventory/StockLocation";
import Service from "./inventory/Service";
import PurchedOrders from "./procurement/PurchedOrders";
import AddPurchaseForm from "./procurement/AddPurchaseForm";
import Suppliers from "./procurement/Suppliers";
import AddSuppliersForm from "./procurement/AddSuppliersForm";
import Contact from "./master/Contact";
import AddContactsForm from "./crm/AddContactsForm";
import Leads from "./crm/Leads";
import Quotations from "./crm/Quotations";
import Orders from "./crm/Orders";
import DeliveryChallans from "./operations/DeliveryChallans";
import Grns from "./operations/Grns";
import Invoices from "./operations/Invoices";
import RentalQuotation from "./components/RentalQuotation";
import Dashboard from "./components/Dashboard";
import AddLeadForm from "./crm/AddLeadform";
import AddOrder from "./crm/AddOrder";
import CreateQuotationForm from "./crm/CreateQuotationForm";
import ProfileAccessCard from "./master/ProfileAccessCard";
import EditProfile from "./master/EditProfile";
import FollowUpHistory from "./crm/FollowUpHistory";
import FollowUpForm from "./crm/FollowUpForm";
import ClientJourney from "./operations/ClientJourney";
import RoleList from "./RoleList";
import EditRoleForm from "./master/EditRoleForm";
import EditBranchForm from "./master/EditBranchForm";
import AddBrandForm from "./inventory/AddBrandForm";
import EditBrandForm from "./inventory/EditBrandForm";
import AddStockLocation from "./inventory/AddStockLocation";
import EditStockLocation from "./inventory/EditStockLocation";
import EditContactTypeForm from "./master/EditContactTypeForm";
import ContactTypeForm from "./master/ContactTypeForm";
import AddTaxForm from "./master/AddTaxForm";
import EditTaxForm from "./master/EditTaxForm";

function App() {
  const location = useLocation();

  // List of authentication routes where Sidebar and Header should not be displayed
  const authRoutes = ["/login", "/forgot-password", "/change-password"];

  const isAuthRoute = authRoutes.includes(location.pathname);

  return (
    <div className="flex">
      {!isAuthRoute && <Sidebar />}
      <div className={`flex-1 ${isAuthRoute ? "" : "ml-1"}`}>
        {/* Adjust margin if Sidebar is hidden */}
        {!isAuthRoute && <Header />}
        <Routes>
          {/* Authentication Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/change-password" element={<ChangePassword />} />
          {/* Other Application Routes */}
          <Route path="/" element={<UserTable />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/inventory/products" element={<Brands />} />
          <Route path="/inventory/service" element={<Service />} />
          <Route path="/inventory/products/brand" element={<Brands />} />
          <Route path="/inventory/products/assembled" element={<Brands />} />
          <Route path="/inventory/products/monitor" element={<Brands />} />
          <Route path="/inventory/product/form" element={<AddProductForm />} />
          <Route path="/inventory/group" element={<Group />} />
          <Route path="/inventory/group/form" element={<AddGroupForm />} />
          <Route path="/inventory/brands" element={<Brand />} />
          {/* <Route path="/brands" element={<Brands />} /> */}
          <Route path="inventory/brands/form" element={<AddBrandForm />} />
          <Route path="/brands/form/:id" element={<EditBrandForm />} />
          {/* <Route
            path="/inventory/brands/form"
            element={
              <AddForm
                title="Brand Details:"
                tx1="Brand Number*"
                tx2="Brand*"
                lnk="/inventory/brands"
              />
            }
          /> */}
          <Route path="/inventory/product-categories" element={<Brand />} />
          <Route
            path="/inventory/product-categories/form"
            element={
              <AddForm
                title="Product Category  Details:"
                tx1="Category Number*"
                tx2="Category*"
                lnk="/inventory/product-categories"
              />
            }
          />
          <Route
            path="/inventory/stock-locations"
            element={<StockLocation />}
          />
          <Route
            path="/inventory/stock-locations/form"
            element={<AddStockLocation />}
          />
          <Route
            path="/inventory/stock-locations/:id"
            element={<EditStockLocation />}
          />
          {/* <Route path="/stock-locations" element={<StockLocations />} /> */}
          {/* <Route path="/stock-locations/add" element={<AddStockLocation />} /> */}
          {/* <Route path="/stock-locations/edit/:id" element={<EditStockLocation />} /> */}
          {/* procurement   routes */}
          {/* <Route path="/procurement" element={<div>Procurement Page</div>} /> */}
          <Route
            path="/procurement/purchase-orders"
            element={<PurchedOrders />}
          />
          <Route
            path="/procurement/purchase-orders/form"
            element={<AddPurchaseForm />}
          />
          <Route path="/procurement/suppliers" element={<Suppliers />} />
          <Route
            path="/procurement/suppliers/form"
            element={<AddSuppliersForm />}
          />
          {/* CRM   routes */}
          <Route path="/crm/contacts" element={<Contacts />} />
          <Route path="/crm/contacts/form" element={<AddContactsForm />} />
          <Route path="/crm/leads" element={<Leads />} />
          <Route path="/crm/leads/form" element={<AddLeadForm />} />
          <Route
            path="/crm/leads/follow-history"
            element={<FollowUpHistory />}
          />
          <Route path="/crm/leads/follow-up-form" element={<FollowUpForm />} />
          <Route path="/crm/quotations" element={<Quotations />} />
          <Route
            path="/crm/quotations/form"
            element={<CreateQuotationForm />}
          />
          <Route path="/crm/orders" element={<Orders />} />
          <Route
            path="/crm/orders/add"
            element={
              <AddForm
                title="Order Details:"
                tx1="Order No*"
                tx2="Order Date*"
                lnk="/crm/orders"
              />
            }
          />
          {/* Operation   routes */}
          <Route path="/operation/challans" element={<DeliveryChallans />} />/
          <Route path="/operation/grn" element={<Grns />} />
          <Route path="/operation/journey" element={<ClientJourney />} />
          <Route path="/operation/invoices" element={<Invoices />} />
          <Route path="/addmaster" element={<AddUserForm />} />
          <Route path="/roles" element={<Roles />} />
          <Route path="/address" element={<Address />} />
          <Route path="/address/state" element={<AddressState />} />
          <Route path="/address/city" element={<AddressCity />} />
          <Route path="/address/city/form" element={<AddAddressForm />} />
          <Route path="/roles/form" element={<AddRoleForm />} />
          <Route path="/roles/form/:id" element={<EditRoleForm />} />
          <Route path="/branches" element={<Branches />} />
          <Route path="/branch/form" element={<AddBranchForm />} />
          <Route path="/branch/form/:id" element={<EditBranchForm />} />
          <Route path="/contacts" element={<Contact />} />
          <Route path="/contacts/form" element={<ContactTypeForm />} />
          <Route path="/contact/edit/id" element={<EditContactTypeForm />} />
          <Route path="/tax-list" element={<TaxList />} />
          <Route path="/tax-list/form" element={<AddTaxListForm />} />
          <Route path="/add-tax" element={<AddTaxForm />} />
          <Route path="/edit-tax/:id" element={<EditTaxForm />} />
          {/* Add more routes as needed <AddContactForm />
          
             <Route path="/" element={<TaxList />} />
        <Route path="/add-tax" element={<AddTaxForm />} />
        <Route path="/edit-tax/:id" element={<EditTaxForm />} />
          */}
          <Route path="/rental" element={<RentalQuotation />} />
          <Route path="/profile-access" element={<ProfileAccessCard />} />
          <Route path="/profile-access/edit" element={<EditProfile />} />
          <Route path="/test" element={<RoleList />} />
          <Route
            path="*"
            element={
              <div className="middleAll text-8xl mt-5">
                404 - Page Not Found
              </div>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
