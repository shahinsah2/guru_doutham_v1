const express = require("express");
const cors = require("cors");
const connectDB = require("./config/database");
require("dotenv").config();

// DataBase connection
connectDB();

const app = express();

// Import routes
const roleRoutes = require("./routes/roleRoutes");
const branchRoutes = require("./routes/branchRoutes");
const userRoutes = require("./routes/userRoutes");
const contactTypeRoutes = require("./routes/contactTypeRoutes");
const taxRoutes = require("./routes/taxRoutes");
const brandRoutes = require("./routes/inventory/brandRoutes");
const productCategoryRoutes = require("./routes/productCategoryRoutes");
const stockLocationRoutes = require("./routes/stockLocationRoutes");
const customerRoutes = require("./routes/customerRoutes");
const leadRoutes = require("./routes/leadRoutes");
const productRoutes = require('./routes/inventory/productRoutes');   
// const categoryRoutes = require('./routes/inventory/CategoryRoutes');
const MasterRoutes = require('./routes/MasterRoutes')
const servicePriorityRoutes = require('./routes/servicePriorityRoutes');

// Middleware
app.use(cors({
  origin: true, // Allow all origins
  credentials: true, // Allow credentials if you are using cookies
}));

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
app.use("/api/stock-locations", stockLocationRoutes);
app.use("/api/customers", customerRoutes);
app.use("/api/leads", leadRoutes);
app.use('/api/products', productRoutes)
// app.use('/api/category', categoryRoutes)
app.use('/api/master', MasterRoutes)
app.use('/api/service-priorities', servicePriorityRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
