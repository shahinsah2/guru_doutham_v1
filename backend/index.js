const express = require("express");
const cors = require("cors");
const connectDB = require("./config/database");
require("dotenv").config();

// DataBase connection
connectDB();

const app = express();

// Import routes

const branchRoutes = require("./routes/branchRoutes");
const userRoutes = require("./routes/userRoutes");
const contactTypeRoutes = require("./routes/contactTypeRoutes");
const taxRoutes = require("./routes/taxRoutes");
const brandRoutes = require("./routes/inventory/brandRoutes");

// const stockLocationRoutes = require("./routes/stockLocationRoutes");
const customerRoutes = require("./routes/customerRoutes");
const leadRoutes = require("./routes/leadRoutes");
const productRoutes = require("./routes/inventory/productRoutes");
// const categoryRoutes = require('./routes/inventory/CategoryRoutes');   details
const MasterRoutes = require("./routes/MasterRoutes");
const servicePriorityRoutes = require("./routes/servicePriorityRoutes");
const departmentRoutes = require("./routes/departmentRoutes");
const orderChecklistRoutes = require("./routes/orderChecklistRoutes");
const serviceStatusRoutes = require("./routes/serviceStatusRoutes");
const leadChecklistRoutes = require("./routes/leadChecklistRoutes");
const termsRoutes = require("./routes/termsRoutes");
const locationRoutes = require("./routes/locationRoutes")
const purchaseRequestRoutes = require('./routes/procurement/purchaseRequestRoutes');
const poQuotationRoutes = require('./routes/procurement/poQuotationRoutes');
const purchaseOrderRoutes = require('./routes/procurement/purchaseOrderRoutes');
const supplierRoutes = require('./routes/procurement/supplierRoutes');
const productLibRoutes = require('./routes/product_library/productRoutes');
const clientSaleRoutes = require('./routes/client/clientSaleRoutes');
const clientRentRoutes = require('./routes/client/clientRentRoutes');
const itemSpecificationRoutes = require('./routes/product_library/itemSpecificationRoutes');
const gradeRoutes = require('./routes/product_library/gradeRoutes');
const itemVariantRoutes = require('./routes/product_library/itemVariantRoutes');
const assetRoutes = require('./routes/product_library/assetRoutes');
const roleRoutes = require("./routes/roleRoutes");
const productCategoryRoutes = require("./routes/product_library/productCategoryRoutes");
const stockLocationRoutes = require("./routes/product_library/stockLocationRoutes");
const userPerformanceRoutes = require('./routes/user_performance/userPerformanceRoutes');
const contactRoutes = require('./routes/crm/contactRoutes');
const deliveryChallanRoutes = require('./routes/operations/deliveryChallanRoutes');
const grnRoutes = require("./routes/operations/grn.routes");  //dub
const serviceRoutes = require("./routes/operations/serviceRoutes");


// Middleware
app.use(
  cors({
    origin: true, // Allow all origins
    credentials: true, // Allow credentials if you are using cookies
  })
);

app.use(express.json());

// Set Referrer Policy
app.use((req, res, next) => {
  res.setHeader("Referrer-Policy", "no-referrer"); // Change to your desired policy
  next();
});

// Register routes
app.use("/api/roles", roleRoutes);
app.use("/api/branches", branchRoutes);
app.use("/api/users", userRoutes);
app.use("/api/contact-types", contactTypeRoutes);
app.use("/api/taxes", taxRoutes);
app.use("/api/brands", brandRoutes);
app.use("/api/product-categories", productCategoryRoutes);
// app.use("/api/stock-locations", stockLocationRoutes);   it's details
app.use("/api/customers", customerRoutes);
app.use("/api/leads", leadRoutes);
app.use("/api/products", productRoutes);
// app.use('/api/category', categoryRoutes)
app.use("/api/master", MasterRoutes);
app.use("/api/service-priorities", servicePriorityRoutes);
app.use("/api/departments", departmentRoutes);
app.use("/api/order-checklist", orderChecklistRoutes);
app.use("/api/service-status", serviceStatusRoutes);
app.use("/api/lead-checklist", leadChecklistRoutes);
app.use("/api/terms-and-conditions", termsRoutes);
app.use("/api/location", locationRoutes);
app.use('/api/purchase-requests', purchaseRequestRoutes);
app.use('/api/po-quotations', poQuotationRoutes);
app.use('/api/purchase-orders', purchaseOrderRoutes);
app.use('/api/suppliers', supplierRoutes);
app.use('/api', productLibRoutes);
app.use('/api/client-sales', clientSaleRoutes);
app.use('/api/client-rents', clientRentRoutes);
app.use('/api/item-specifications', itemSpecificationRoutes);
app.use('/api/grades', gradeRoutes);
app.use('/api/item-variants', itemVariantRoutes);
app.use('/api/assets', assetRoutes);
app.use("/api/stock-locations", stockLocationRoutes);
app.use('/api/user-performance', userPerformanceRoutes);
app.use('/api/contacts', contactRoutes);
app.use('/api/delivery-challans', deliveryChallanRoutes);
app.use("/api/grn", grnRoutes);
app.use("/api/services", serviceRoutes);



// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
