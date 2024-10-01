const mongoose = require("mongoose");

const permissionSchema = new mongoose.Schema({
  add: { type: Boolean, default: false },
  edit: { type: Boolean, default: false },
  delete: { type: Boolean, default: false },
  active: { type: Boolean, default: false },
  deactivate: { type: Boolean, default: false },
  search: { type: Boolean, default: false },
  print: { type: Boolean, default: false },
  import: { type: Boolean, default: false },
  export: { type: Boolean, default: false },
});

const modulePermissionsSchema = new mongoose.Schema(
  {
    userRole: permissionSchema,
    country: permissionSchema,
    city: permissionSchema,
    branches: permissionSchema,
    contactsType: permissionSchema,
    taxList: permissionSchema,
    brand: permissionSchema,
    category: permissionSchema,
    product: permissionSchema,
    stockLocations: permissionSchema,
    services: permissionSchema,
    payment: permissionSchema,
    purchaseOrder: permissionSchema,
    suppliers: permissionSchema,
    leads: permissionSchema,
    customer: permissionSchema,
    quotations: permissionSchema,
    orders: permissionSchema,
    grn: permissionSchema,
    deliveryChallans: permissionSchema,
    invoices: permissionSchema,
    reports: permissionSchema,
  },
  { _id: false }
);

const masterSchema = new mongoose.Schema(
  {
    role: {
      type: String,
      enum: ["Manager", "HR", "TL", "Employee"],
      required: true,
    },
    permissions: modulePermissionsSchema, // Assign permissions to each master role
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Master", masterSchema);









// const mongoose = require('mongoose');

// // Define the permissions for each module
// const permissionSchema = new mongoose.Schema({
//   add: { type: Boolean, default: false },
//   edit: { type: Boolean, default: false },
//   delete: { type: Boolean, default: false },
//   active: { type: Boolean, default: false },
//   deactivate: { type: Boolean, default: false },
//   search: { type: Boolean, default: false },
//   print: { type: Boolean, default: false },
//   import: { type: Boolean, default: false },
//   export: { type: Boolean, default: false },
// }, { _id: false });

// // Define module permissions for all modules
// const modulePermissionsSchema = new mongoose.Schema({
//   userRole: permissionSchema,
//   country: permissionSchema,
//   city: permissionSchema,
//   branches: permissionSchema,
//   contactsType: permissionSchema,
//   taxList: permissionSchema,
//   brand: permissionSchema,
//   category: permissionSchema,
//   product: permissionSchema,
//   stockLocations: permissionSchema,
//   services: permissionSchema,
//   payment: permissionSchema,
//   purchaseOrder: permissionSchema,
//   suppliers: permissionSchema,
//   leads: permissionSchema,
//   customer: permissionSchema,
//   quotations: permissionSchema,
//   orders: permissionSchema,
//   grn: permissionSchema,
//   deliveryChallans: permissionSchema,
//   invoices: permissionSchema,
//   reports: permissionSchema,
// }, { _id: false });

// // Define the master schema that includes dynamic roles and permissions
// const masterSchema = new mongoose.Schema({
//   role: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Role',
//     required: true,
//   },
//   permissions: modulePermissionsSchema,
//   status: {
//     type: String,
//     enum: ['active', 'inactive'],
//     default: 'active',
//   },
//   isActive: { type: Boolean, default: true },
// }, { timestamps: true });

// module.exports = mongoose.model('Master', masterSchema);
