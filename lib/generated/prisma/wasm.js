
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.AddressScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  first_name: 'first_name',
  last_name: 'last_name',
  email: 'email',
  phone: 'phone',
  address_line1: 'address_line1',
  address_line2: 'address_line2',
  city: 'city',
  state: 'state',
  country: 'country',
  is_default_shipping: 'is_default_shipping',
  is_default_billing: 'is_default_billing',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.CartsScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  session_id: 'session_id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  status: 'status'
};

exports.Prisma.CartItemsScalarFieldEnum = {
  id: 'id',
  cart_id: 'cart_id',
  product_variant_id: 'product_variant_id',
  quantity: 'quantity'
};

exports.Prisma.OrdersScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  cart_id: 'cart_id',
  order_number: 'order_number',
  status: 'status',
  total_amount: 'total_amount',
  shipping_amount: 'shipping_amount',
  tax_amount: 'tax_amount',
  discount_amount: 'discount_amount',
  shipping_address_id: 'shipping_address_id',
  billing_address_id: 'billing_address_id',
  payment_status: 'payment_status',
  payment_method: 'payment_method',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.OrderItemsScalarFieldEnum = {
  id: 'id',
  order_id: 'order_id',
  product_variant_id: 'product_variant_id',
  quantity: 'quantity',
  unit_price: 'unit_price',
  total_price: 'total_price',
  created_at: 'created_at'
};

exports.Prisma.ProductsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  slug: 'slug',
  description: 'description',
  price: 'price',
  inventory_quantity: 'inventory_quantity',
  is_available: 'is_available',
  category_id: 'category_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.ProductImagesScalarFieldEnum = {
  id: 'id',
  product_id: 'product_id',
  url: 'url',
  is_primary: 'is_primary',
  display_order: 'display_order',
  created_at: 'created_at'
};

exports.Prisma.ProductVariantsScalarFieldEnum = {
  id: 'id',
  product_id: 'product_id',
  name: 'name',
  sku: 'sku',
  price: 'price',
  inventory_quantity: 'inventory_quantity',
  option1_value: 'option1_value',
  option2_value: 'option2_value',
  option3_value: 'option3_value',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.CategoryScalarFieldEnum = {
  id: 'id',
  name: 'name',
  slug: 'slug',
  description: 'description',
  image_url: 'image_url',
  display_order: 'display_order',
  parent_id: 'parent_id'
};

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  email: 'email',
  password_hash: 'password_hash',
  first_name: 'first_name',
  last_name: 'last_name',
  role: 'role',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.UserProfileScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  phone: 'phone',
  address_line1: 'address_line1',
  address_line2: 'address_line2',
  city: 'city',
  state: 'state',
  postal_code: 'postal_code',
  country: 'country',
  avatar_url: 'avatar_url',
  updated_at: 'updated_at'
};

exports.Prisma.SessionScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  token: 'token',
  expires_at: 'expires_at',
  data: 'data',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.JsonNullValueInput = {
  JsonNull: Prisma.JsonNull
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};
exports.Status = exports.$Enums.Status = {
  ACTIVE: 'ACTIVE',
  ABANDONED: 'ABANDONED',
  CONVERTED: 'CONVERTED'
};

exports.OrderStatus = exports.$Enums.OrderStatus = {
  PENDING: 'PENDING',
  PROCESSING: 'PROCESSING',
  SHIPPED: 'SHIPPED',
  DELIVERED: 'DELIVERED',
  CANCELLED: 'CANCELLED'
};

exports.PaymentStatus = exports.$Enums.PaymentStatus = {
  PENDING: 'PENDING',
  PAID: 'PAID',
  FAILED: 'FAILED',
  REFUNDED: 'REFUNDED'
};

exports.Role = exports.$Enums.Role = {
  CUSTOMER: 'CUSTOMER',
  ADMIN: 'ADMIN',
  MANAGER: 'MANAGER'
};

exports.Prisma.ModelName = {
  Address: 'Address',
  Carts: 'Carts',
  CartItems: 'CartItems',
  Orders: 'Orders',
  OrderItems: 'OrderItems',
  Products: 'Products',
  ProductImages: 'ProductImages',
  ProductVariants: 'ProductVariants',
  Category: 'Category',
  User: 'User',
  UserProfile: 'UserProfile',
  Session: 'Session'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
