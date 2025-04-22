
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Address
 * 
 */
export type Address = $Result.DefaultSelection<Prisma.$AddressPayload>
/**
 * Model Carts
 * 
 */
export type Carts = $Result.DefaultSelection<Prisma.$CartsPayload>
/**
 * Model CartItems
 * 
 */
export type CartItems = $Result.DefaultSelection<Prisma.$CartItemsPayload>
/**
 * Model Orders
 * 
 */
export type Orders = $Result.DefaultSelection<Prisma.$OrdersPayload>
/**
 * Model OrderItems
 * 
 */
export type OrderItems = $Result.DefaultSelection<Prisma.$OrderItemsPayload>
/**
 * Model Products
 * 
 */
export type Products = $Result.DefaultSelection<Prisma.$ProductsPayload>
/**
 * Model ProductImages
 * 
 */
export type ProductImages = $Result.DefaultSelection<Prisma.$ProductImagesPayload>
/**
 * Model ProductVariants
 * 
 */
export type ProductVariants = $Result.DefaultSelection<Prisma.$ProductVariantsPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model UserProfile
 * 
 */
export type UserProfile = $Result.DefaultSelection<Prisma.$UserProfilePayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Status: {
  ACTIVE: 'ACTIVE',
  ABANDONED: 'ABANDONED',
  CONVERTED: 'CONVERTED'
};

export type Status = (typeof Status)[keyof typeof Status]


export const OrderStatus: {
  PENDING: 'PENDING',
  PROCESSING: 'PROCESSING',
  SHIPPED: 'SHIPPED',
  DELIVERED: 'DELIVERED',
  CANCELLED: 'CANCELLED'
};

export type OrderStatus = (typeof OrderStatus)[keyof typeof OrderStatus]


export const PaymentStatus: {
  PENDING: 'PENDING',
  PAID: 'PAID',
  FAILED: 'FAILED',
  REFUNDED: 'REFUNDED'
};

export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus]


export const Role: {
  CUSTOMER: 'CUSTOMER',
  ADMIN: 'ADMIN',
  MANAGER: 'MANAGER'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Status = $Enums.Status

export const Status: typeof $Enums.Status

export type OrderStatus = $Enums.OrderStatus

export const OrderStatus: typeof $Enums.OrderStatus

export type PaymentStatus = $Enums.PaymentStatus

export const PaymentStatus: typeof $Enums.PaymentStatus

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Addresses
 * const addresses = await prisma.address.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Addresses
   * const addresses = await prisma.address.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.address`: Exposes CRUD operations for the **Address** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Addresses
    * const addresses = await prisma.address.findMany()
    * ```
    */
  get address(): Prisma.AddressDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.carts`: Exposes CRUD operations for the **Carts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Carts
    * const carts = await prisma.carts.findMany()
    * ```
    */
  get carts(): Prisma.CartsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cartItems`: Exposes CRUD operations for the **CartItems** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CartItems
    * const cartItems = await prisma.cartItems.findMany()
    * ```
    */
  get cartItems(): Prisma.CartItemsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orders`: Exposes CRUD operations for the **Orders** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.orders.findMany()
    * ```
    */
  get orders(): Prisma.OrdersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orderItems`: Exposes CRUD operations for the **OrderItems** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrderItems
    * const orderItems = await prisma.orderItems.findMany()
    * ```
    */
  get orderItems(): Prisma.OrderItemsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.products`: Exposes CRUD operations for the **Products** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.products.findMany()
    * ```
    */
  get products(): Prisma.ProductsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productImages`: Exposes CRUD operations for the **ProductImages** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductImages
    * const productImages = await prisma.productImages.findMany()
    * ```
    */
  get productImages(): Prisma.ProductImagesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productVariants`: Exposes CRUD operations for the **ProductVariants** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductVariants
    * const productVariants = await prisma.productVariants.findMany()
    * ```
    */
  get productVariants(): Prisma.ProductVariantsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userProfile`: Exposes CRUD operations for the **UserProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserProfiles
    * const userProfiles = await prisma.userProfile.findMany()
    * ```
    */
  get userProfile(): Prisma.UserProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
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

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "address" | "carts" | "cartItems" | "orders" | "orderItems" | "products" | "productImages" | "productVariants" | "category" | "user" | "userProfile" | "session"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Address: {
        payload: Prisma.$AddressPayload<ExtArgs>
        fields: Prisma.AddressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AddressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AddressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          findFirst: {
            args: Prisma.AddressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AddressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          findMany: {
            args: Prisma.AddressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>[]
          }
          create: {
            args: Prisma.AddressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          createMany: {
            args: Prisma.AddressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AddressCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>[]
          }
          delete: {
            args: Prisma.AddressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          update: {
            args: Prisma.AddressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          deleteMany: {
            args: Prisma.AddressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AddressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AddressUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>[]
          }
          upsert: {
            args: Prisma.AddressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          aggregate: {
            args: Prisma.AddressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAddress>
          }
          groupBy: {
            args: Prisma.AddressGroupByArgs<ExtArgs>
            result: $Utils.Optional<AddressGroupByOutputType>[]
          }
          count: {
            args: Prisma.AddressCountArgs<ExtArgs>
            result: $Utils.Optional<AddressCountAggregateOutputType> | number
          }
        }
      }
      Carts: {
        payload: Prisma.$CartsPayload<ExtArgs>
        fields: Prisma.CartsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CartsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CartsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartsPayload>
          }
          findFirst: {
            args: Prisma.CartsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CartsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartsPayload>
          }
          findMany: {
            args: Prisma.CartsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartsPayload>[]
          }
          create: {
            args: Prisma.CartsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartsPayload>
          }
          createMany: {
            args: Prisma.CartsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CartsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartsPayload>[]
          }
          delete: {
            args: Prisma.CartsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartsPayload>
          }
          update: {
            args: Prisma.CartsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartsPayload>
          }
          deleteMany: {
            args: Prisma.CartsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CartsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CartsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartsPayload>[]
          }
          upsert: {
            args: Prisma.CartsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartsPayload>
          }
          aggregate: {
            args: Prisma.CartsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCarts>
          }
          groupBy: {
            args: Prisma.CartsGroupByArgs<ExtArgs>
            result: $Utils.Optional<CartsGroupByOutputType>[]
          }
          count: {
            args: Prisma.CartsCountArgs<ExtArgs>
            result: $Utils.Optional<CartsCountAggregateOutputType> | number
          }
        }
      }
      CartItems: {
        payload: Prisma.$CartItemsPayload<ExtArgs>
        fields: Prisma.CartItemsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CartItemsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CartItemsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemsPayload>
          }
          findFirst: {
            args: Prisma.CartItemsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CartItemsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemsPayload>
          }
          findMany: {
            args: Prisma.CartItemsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemsPayload>[]
          }
          create: {
            args: Prisma.CartItemsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemsPayload>
          }
          createMany: {
            args: Prisma.CartItemsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CartItemsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemsPayload>[]
          }
          delete: {
            args: Prisma.CartItemsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemsPayload>
          }
          update: {
            args: Prisma.CartItemsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemsPayload>
          }
          deleteMany: {
            args: Prisma.CartItemsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CartItemsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CartItemsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemsPayload>[]
          }
          upsert: {
            args: Prisma.CartItemsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemsPayload>
          }
          aggregate: {
            args: Prisma.CartItemsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCartItems>
          }
          groupBy: {
            args: Prisma.CartItemsGroupByArgs<ExtArgs>
            result: $Utils.Optional<CartItemsGroupByOutputType>[]
          }
          count: {
            args: Prisma.CartItemsCountArgs<ExtArgs>
            result: $Utils.Optional<CartItemsCountAggregateOutputType> | number
          }
        }
      }
      Orders: {
        payload: Prisma.$OrdersPayload<ExtArgs>
        fields: Prisma.OrdersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrdersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrdersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          findFirst: {
            args: Prisma.OrdersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrdersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          findMany: {
            args: Prisma.OrdersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>[]
          }
          create: {
            args: Prisma.OrdersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          createMany: {
            args: Prisma.OrdersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrdersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>[]
          }
          delete: {
            args: Prisma.OrdersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          update: {
            args: Prisma.OrdersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          deleteMany: {
            args: Prisma.OrdersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrdersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrdersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>[]
          }
          upsert: {
            args: Prisma.OrdersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          aggregate: {
            args: Prisma.OrdersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrders>
          }
          groupBy: {
            args: Prisma.OrdersGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrdersGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrdersCountArgs<ExtArgs>
            result: $Utils.Optional<OrdersCountAggregateOutputType> | number
          }
        }
      }
      OrderItems: {
        payload: Prisma.$OrderItemsPayload<ExtArgs>
        fields: Prisma.OrderItemsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderItemsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderItemsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemsPayload>
          }
          findFirst: {
            args: Prisma.OrderItemsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderItemsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemsPayload>
          }
          findMany: {
            args: Prisma.OrderItemsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemsPayload>[]
          }
          create: {
            args: Prisma.OrderItemsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemsPayload>
          }
          createMany: {
            args: Prisma.OrderItemsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderItemsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemsPayload>[]
          }
          delete: {
            args: Prisma.OrderItemsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemsPayload>
          }
          update: {
            args: Prisma.OrderItemsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemsPayload>
          }
          deleteMany: {
            args: Prisma.OrderItemsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderItemsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrderItemsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemsPayload>[]
          }
          upsert: {
            args: Prisma.OrderItemsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemsPayload>
          }
          aggregate: {
            args: Prisma.OrderItemsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrderItems>
          }
          groupBy: {
            args: Prisma.OrderItemsGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderItemsGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderItemsCountArgs<ExtArgs>
            result: $Utils.Optional<OrderItemsCountAggregateOutputType> | number
          }
        }
      }
      Products: {
        payload: Prisma.$ProductsPayload<ExtArgs>
        fields: Prisma.ProductsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          findFirst: {
            args: Prisma.ProductsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          findMany: {
            args: Prisma.ProductsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>[]
          }
          create: {
            args: Prisma.ProductsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          createMany: {
            args: Prisma.ProductsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>[]
          }
          delete: {
            args: Prisma.ProductsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          update: {
            args: Prisma.ProductsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          deleteMany: {
            args: Prisma.ProductsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>[]
          }
          upsert: {
            args: Prisma.ProductsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          aggregate: {
            args: Prisma.ProductsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProducts>
          }
          groupBy: {
            args: Prisma.ProductsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductsCountArgs<ExtArgs>
            result: $Utils.Optional<ProductsCountAggregateOutputType> | number
          }
        }
      }
      ProductImages: {
        payload: Prisma.$ProductImagesPayload<ExtArgs>
        fields: Prisma.ProductImagesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductImagesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductImagesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagesPayload>
          }
          findFirst: {
            args: Prisma.ProductImagesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductImagesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagesPayload>
          }
          findMany: {
            args: Prisma.ProductImagesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagesPayload>[]
          }
          create: {
            args: Prisma.ProductImagesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagesPayload>
          }
          createMany: {
            args: Prisma.ProductImagesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductImagesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagesPayload>[]
          }
          delete: {
            args: Prisma.ProductImagesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagesPayload>
          }
          update: {
            args: Prisma.ProductImagesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagesPayload>
          }
          deleteMany: {
            args: Prisma.ProductImagesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductImagesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductImagesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagesPayload>[]
          }
          upsert: {
            args: Prisma.ProductImagesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagesPayload>
          }
          aggregate: {
            args: Prisma.ProductImagesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductImages>
          }
          groupBy: {
            args: Prisma.ProductImagesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductImagesGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductImagesCountArgs<ExtArgs>
            result: $Utils.Optional<ProductImagesCountAggregateOutputType> | number
          }
        }
      }
      ProductVariants: {
        payload: Prisma.$ProductVariantsPayload<ExtArgs>
        fields: Prisma.ProductVariantsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductVariantsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductVariantsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantsPayload>
          }
          findFirst: {
            args: Prisma.ProductVariantsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductVariantsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantsPayload>
          }
          findMany: {
            args: Prisma.ProductVariantsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantsPayload>[]
          }
          create: {
            args: Prisma.ProductVariantsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantsPayload>
          }
          createMany: {
            args: Prisma.ProductVariantsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductVariantsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantsPayload>[]
          }
          delete: {
            args: Prisma.ProductVariantsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantsPayload>
          }
          update: {
            args: Prisma.ProductVariantsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantsPayload>
          }
          deleteMany: {
            args: Prisma.ProductVariantsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductVariantsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductVariantsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantsPayload>[]
          }
          upsert: {
            args: Prisma.ProductVariantsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantsPayload>
          }
          aggregate: {
            args: Prisma.ProductVariantsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductVariants>
          }
          groupBy: {
            args: Prisma.ProductVariantsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductVariantsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductVariantsCountArgs<ExtArgs>
            result: $Utils.Optional<ProductVariantsCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      UserProfile: {
        payload: Prisma.$UserProfilePayload<ExtArgs>
        fields: Prisma.UserProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          findFirst: {
            args: Prisma.UserProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          findMany: {
            args: Prisma.UserProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>[]
          }
          create: {
            args: Prisma.UserProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          createMany: {
            args: Prisma.UserProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>[]
          }
          delete: {
            args: Prisma.UserProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          update: {
            args: Prisma.UserProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          deleteMany: {
            args: Prisma.UserProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>[]
          }
          upsert: {
            args: Prisma.UserProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          aggregate: {
            args: Prisma.UserProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserProfile>
          }
          groupBy: {
            args: Prisma.UserProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserProfileCountArgs<ExtArgs>
            result: $Utils.Optional<UserProfileCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    address?: AddressOmit
    carts?: CartsOmit
    cartItems?: CartItemsOmit
    orders?: OrdersOmit
    orderItems?: OrderItemsOmit
    products?: ProductsOmit
    productImages?: ProductImagesOmit
    productVariants?: ProductVariantsOmit
    category?: CategoryOmit
    user?: UserOmit
    userProfile?: UserProfileOmit
    session?: SessionOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type AddressCountOutputType
   */

  export type AddressCountOutputType = {
    shipping_orders: number
    billing_orders: number
  }

  export type AddressCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shipping_orders?: boolean | AddressCountOutputTypeCountShipping_ordersArgs
    billing_orders?: boolean | AddressCountOutputTypeCountBilling_ordersArgs
  }

  // Custom InputTypes
  /**
   * AddressCountOutputType without action
   */
  export type AddressCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddressCountOutputType
     */
    select?: AddressCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AddressCountOutputType without action
   */
  export type AddressCountOutputTypeCountShipping_ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrdersWhereInput
  }

  /**
   * AddressCountOutputType without action
   */
  export type AddressCountOutputTypeCountBilling_ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrdersWhereInput
  }


  /**
   * Count Type CartsCountOutputType
   */

  export type CartsCountOutputType = {
    cart_items: number
    orders: number
  }

  export type CartsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cart_items?: boolean | CartsCountOutputTypeCountCart_itemsArgs
    orders?: boolean | CartsCountOutputTypeCountOrdersArgs
  }

  // Custom InputTypes
  /**
   * CartsCountOutputType without action
   */
  export type CartsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartsCountOutputType
     */
    select?: CartsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CartsCountOutputType without action
   */
  export type CartsCountOutputTypeCountCart_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CartItemsWhereInput
  }

  /**
   * CartsCountOutputType without action
   */
  export type CartsCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrdersWhereInput
  }


  /**
   * Count Type OrdersCountOutputType
   */

  export type OrdersCountOutputType = {
    order_items: number
  }

  export type OrdersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order_items?: boolean | OrdersCountOutputTypeCountOrder_itemsArgs
  }

  // Custom InputTypes
  /**
   * OrdersCountOutputType without action
   */
  export type OrdersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdersCountOutputType
     */
    select?: OrdersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrdersCountOutputType without action
   */
  export type OrdersCountOutputTypeCountOrder_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemsWhereInput
  }


  /**
   * Count Type ProductsCountOutputType
   */

  export type ProductsCountOutputType = {
    product_images: number
    product_variant: number
  }

  export type ProductsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product_images?: boolean | ProductsCountOutputTypeCountProduct_imagesArgs
    product_variant?: boolean | ProductsCountOutputTypeCountProduct_variantArgs
  }

  // Custom InputTypes
  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsCountOutputType
     */
    select?: ProductsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeCountProduct_imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductImagesWhereInput
  }

  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeCountProduct_variantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductVariantsWhereInput
  }


  /**
   * Count Type ProductVariantsCountOutputType
   */

  export type ProductVariantsCountOutputType = {
    cart_items: number
    order_items: number
  }

  export type ProductVariantsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cart_items?: boolean | ProductVariantsCountOutputTypeCountCart_itemsArgs
    order_items?: boolean | ProductVariantsCountOutputTypeCountOrder_itemsArgs
  }

  // Custom InputTypes
  /**
   * ProductVariantsCountOutputType without action
   */
  export type ProductVariantsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariantsCountOutputType
     */
    select?: ProductVariantsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductVariantsCountOutputType without action
   */
  export type ProductVariantsCountOutputTypeCountCart_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CartItemsWhereInput
  }

  /**
   * ProductVariantsCountOutputType without action
   */
  export type ProductVariantsCountOutputTypeCountOrder_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemsWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    subcategories: number
    products: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subcategories?: boolean | CategoryCountOutputTypeCountSubcategoriesArgs
    products?: boolean | CategoryCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountSubcategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductsWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    user_profile: number
    cart: number
    orders: number
    address: number
    session: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_profile?: boolean | UserCountOutputTypeCountUser_profileArgs
    cart?: boolean | UserCountOutputTypeCountCartArgs
    orders?: boolean | UserCountOutputTypeCountOrdersArgs
    address?: boolean | UserCountOutputTypeCountAddressArgs
    session?: boolean | UserCountOutputTypeCountSessionArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUser_profileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserProfileWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCartArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CartsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrdersWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAddressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AddressWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }


  /**
   * Count Type SessionCountOutputType
   */

  export type SessionCountOutputType = {
    cart: number
  }

  export type SessionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cart?: boolean | SessionCountOutputTypeCountCartArgs
  }

  // Custom InputTypes
  /**
   * SessionCountOutputType without action
   */
  export type SessionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionCountOutputType
     */
    select?: SessionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SessionCountOutputType without action
   */
  export type SessionCountOutputTypeCountCartArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CartsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Address
   */

  export type AggregateAddress = {
    _count: AddressCountAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  export type AddressMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    first_name: string | null
    last_name: string | null
    email: string | null
    phone: string | null
    address_line1: string | null
    address_line2: string | null
    city: string | null
    state: string | null
    country: string | null
    is_default_shipping: boolean | null
    is_default_billing: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type AddressMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    first_name: string | null
    last_name: string | null
    email: string | null
    phone: string | null
    address_line1: string | null
    address_line2: string | null
    city: string | null
    state: string | null
    country: string | null
    is_default_shipping: boolean | null
    is_default_billing: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type AddressCountAggregateOutputType = {
    id: number
    user_id: number
    first_name: number
    last_name: number
    email: number
    phone: number
    address_line1: number
    address_line2: number
    city: number
    state: number
    country: number
    is_default_shipping: number
    is_default_billing: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type AddressMinAggregateInputType = {
    id?: true
    user_id?: true
    first_name?: true
    last_name?: true
    email?: true
    phone?: true
    address_line1?: true
    address_line2?: true
    city?: true
    state?: true
    country?: true
    is_default_shipping?: true
    is_default_billing?: true
    created_at?: true
    updated_at?: true
  }

  export type AddressMaxAggregateInputType = {
    id?: true
    user_id?: true
    first_name?: true
    last_name?: true
    email?: true
    phone?: true
    address_line1?: true
    address_line2?: true
    city?: true
    state?: true
    country?: true
    is_default_shipping?: true
    is_default_billing?: true
    created_at?: true
    updated_at?: true
  }

  export type AddressCountAggregateInputType = {
    id?: true
    user_id?: true
    first_name?: true
    last_name?: true
    email?: true
    phone?: true
    address_line1?: true
    address_line2?: true
    city?: true
    state?: true
    country?: true
    is_default_shipping?: true
    is_default_billing?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type AddressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Address to aggregate.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Addresses
    **/
    _count?: true | AddressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AddressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AddressMaxAggregateInputType
  }

  export type GetAddressAggregateType<T extends AddressAggregateArgs> = {
        [P in keyof T & keyof AggregateAddress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAddress[P]>
      : GetScalarType<T[P], AggregateAddress[P]>
  }




  export type AddressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AddressWhereInput
    orderBy?: AddressOrderByWithAggregationInput | AddressOrderByWithAggregationInput[]
    by: AddressScalarFieldEnum[] | AddressScalarFieldEnum
    having?: AddressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AddressCountAggregateInputType | true
    _min?: AddressMinAggregateInputType
    _max?: AddressMaxAggregateInputType
  }

  export type AddressGroupByOutputType = {
    id: string
    user_id: string | null
    first_name: string
    last_name: string
    email: string
    phone: string | null
    address_line1: string
    address_line2: string
    city: string
    state: string
    country: string
    is_default_shipping: boolean
    is_default_billing: boolean
    created_at: Date
    updated_at: Date
    _count: AddressCountAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  type GetAddressGroupByPayload<T extends AddressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AddressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AddressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AddressGroupByOutputType[P]>
            : GetScalarType<T[P], AddressGroupByOutputType[P]>
        }
      >
    >


  export type AddressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    phone?: boolean
    address_line1?: boolean
    address_line2?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    is_default_shipping?: boolean
    is_default_billing?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | Address$userArgs<ExtArgs>
    shipping_orders?: boolean | Address$shipping_ordersArgs<ExtArgs>
    billing_orders?: boolean | Address$billing_ordersArgs<ExtArgs>
    _count?: boolean | AddressCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["address"]>

  export type AddressSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    phone?: boolean
    address_line1?: boolean
    address_line2?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    is_default_shipping?: boolean
    is_default_billing?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | Address$userArgs<ExtArgs>
  }, ExtArgs["result"]["address"]>

  export type AddressSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    phone?: boolean
    address_line1?: boolean
    address_line2?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    is_default_shipping?: boolean
    is_default_billing?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | Address$userArgs<ExtArgs>
  }, ExtArgs["result"]["address"]>

  export type AddressSelectScalar = {
    id?: boolean
    user_id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    phone?: boolean
    address_line1?: boolean
    address_line2?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    is_default_shipping?: boolean
    is_default_billing?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type AddressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "first_name" | "last_name" | "email" | "phone" | "address_line1" | "address_line2" | "city" | "state" | "country" | "is_default_shipping" | "is_default_billing" | "created_at" | "updated_at", ExtArgs["result"]["address"]>
  export type AddressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Address$userArgs<ExtArgs>
    shipping_orders?: boolean | Address$shipping_ordersArgs<ExtArgs>
    billing_orders?: boolean | Address$billing_ordersArgs<ExtArgs>
    _count?: boolean | AddressCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AddressIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Address$userArgs<ExtArgs>
  }
  export type AddressIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Address$userArgs<ExtArgs>
  }

  export type $AddressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Address"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
      shipping_orders: Prisma.$OrdersPayload<ExtArgs>[]
      billing_orders: Prisma.$OrdersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string | null
      first_name: string
      last_name: string
      email: string
      phone: string | null
      address_line1: string
      address_line2: string
      city: string
      state: string
      country: string
      is_default_shipping: boolean
      is_default_billing: boolean
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["address"]>
    composites: {}
  }

  type AddressGetPayload<S extends boolean | null | undefined | AddressDefaultArgs> = $Result.GetResult<Prisma.$AddressPayload, S>

  type AddressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AddressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AddressCountAggregateInputType | true
    }

  export interface AddressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Address'], meta: { name: 'Address' } }
    /**
     * Find zero or one Address that matches the filter.
     * @param {AddressFindUniqueArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AddressFindUniqueArgs>(args: SelectSubset<T, AddressFindUniqueArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Address that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AddressFindUniqueOrThrowArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AddressFindUniqueOrThrowArgs>(args: SelectSubset<T, AddressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Address that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindFirstArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AddressFindFirstArgs>(args?: SelectSubset<T, AddressFindFirstArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Address that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindFirstOrThrowArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AddressFindFirstOrThrowArgs>(args?: SelectSubset<T, AddressFindFirstOrThrowArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Addresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Addresses
     * const addresses = await prisma.address.findMany()
     * 
     * // Get first 10 Addresses
     * const addresses = await prisma.address.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const addressWithIdOnly = await prisma.address.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AddressFindManyArgs>(args?: SelectSubset<T, AddressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Address.
     * @param {AddressCreateArgs} args - Arguments to create a Address.
     * @example
     * // Create one Address
     * const Address = await prisma.address.create({
     *   data: {
     *     // ... data to create a Address
     *   }
     * })
     * 
     */
    create<T extends AddressCreateArgs>(args: SelectSubset<T, AddressCreateArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Addresses.
     * @param {AddressCreateManyArgs} args - Arguments to create many Addresses.
     * @example
     * // Create many Addresses
     * const address = await prisma.address.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AddressCreateManyArgs>(args?: SelectSubset<T, AddressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Addresses and returns the data saved in the database.
     * @param {AddressCreateManyAndReturnArgs} args - Arguments to create many Addresses.
     * @example
     * // Create many Addresses
     * const address = await prisma.address.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Addresses and only return the `id`
     * const addressWithIdOnly = await prisma.address.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AddressCreateManyAndReturnArgs>(args?: SelectSubset<T, AddressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Address.
     * @param {AddressDeleteArgs} args - Arguments to delete one Address.
     * @example
     * // Delete one Address
     * const Address = await prisma.address.delete({
     *   where: {
     *     // ... filter to delete one Address
     *   }
     * })
     * 
     */
    delete<T extends AddressDeleteArgs>(args: SelectSubset<T, AddressDeleteArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Address.
     * @param {AddressUpdateArgs} args - Arguments to update one Address.
     * @example
     * // Update one Address
     * const address = await prisma.address.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AddressUpdateArgs>(args: SelectSubset<T, AddressUpdateArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Addresses.
     * @param {AddressDeleteManyArgs} args - Arguments to filter Addresses to delete.
     * @example
     * // Delete a few Addresses
     * const { count } = await prisma.address.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AddressDeleteManyArgs>(args?: SelectSubset<T, AddressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Addresses
     * const address = await prisma.address.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AddressUpdateManyArgs>(args: SelectSubset<T, AddressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Addresses and returns the data updated in the database.
     * @param {AddressUpdateManyAndReturnArgs} args - Arguments to update many Addresses.
     * @example
     * // Update many Addresses
     * const address = await prisma.address.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Addresses and only return the `id`
     * const addressWithIdOnly = await prisma.address.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AddressUpdateManyAndReturnArgs>(args: SelectSubset<T, AddressUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Address.
     * @param {AddressUpsertArgs} args - Arguments to update or create a Address.
     * @example
     * // Update or create a Address
     * const address = await prisma.address.upsert({
     *   create: {
     *     // ... data to create a Address
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Address we want to update
     *   }
     * })
     */
    upsert<T extends AddressUpsertArgs>(args: SelectSubset<T, AddressUpsertArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressCountArgs} args - Arguments to filter Addresses to count.
     * @example
     * // Count the number of Addresses
     * const count = await prisma.address.count({
     *   where: {
     *     // ... the filter for the Addresses we want to count
     *   }
     * })
    **/
    count<T extends AddressCountArgs>(
      args?: Subset<T, AddressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AddressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AddressAggregateArgs>(args: Subset<T, AddressAggregateArgs>): Prisma.PrismaPromise<GetAddressAggregateType<T>>

    /**
     * Group by Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AddressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AddressGroupByArgs['orderBy'] }
        : { orderBy?: AddressGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AddressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAddressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Address model
   */
  readonly fields: AddressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Address.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AddressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends Address$userArgs<ExtArgs> = {}>(args?: Subset<T, Address$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    shipping_orders<T extends Address$shipping_ordersArgs<ExtArgs> = {}>(args?: Subset<T, Address$shipping_ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    billing_orders<T extends Address$billing_ordersArgs<ExtArgs> = {}>(args?: Subset<T, Address$billing_ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Address model
   */
  interface AddressFieldRefs {
    readonly id: FieldRef<"Address", 'String'>
    readonly user_id: FieldRef<"Address", 'String'>
    readonly first_name: FieldRef<"Address", 'String'>
    readonly last_name: FieldRef<"Address", 'String'>
    readonly email: FieldRef<"Address", 'String'>
    readonly phone: FieldRef<"Address", 'String'>
    readonly address_line1: FieldRef<"Address", 'String'>
    readonly address_line2: FieldRef<"Address", 'String'>
    readonly city: FieldRef<"Address", 'String'>
    readonly state: FieldRef<"Address", 'String'>
    readonly country: FieldRef<"Address", 'String'>
    readonly is_default_shipping: FieldRef<"Address", 'Boolean'>
    readonly is_default_billing: FieldRef<"Address", 'Boolean'>
    readonly created_at: FieldRef<"Address", 'DateTime'>
    readonly updated_at: FieldRef<"Address", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Address findUnique
   */
  export type AddressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address findUniqueOrThrow
   */
  export type AddressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address findFirst
   */
  export type AddressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Addresses.
     */
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address findFirstOrThrow
   */
  export type AddressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Addresses.
     */
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address findMany
   */
  export type AddressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Addresses to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address create
   */
  export type AddressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The data needed to create a Address.
     */
    data: XOR<AddressCreateInput, AddressUncheckedCreateInput>
  }

  /**
   * Address createMany
   */
  export type AddressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Addresses.
     */
    data: AddressCreateManyInput | AddressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Address createManyAndReturn
   */
  export type AddressCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * The data used to create many Addresses.
     */
    data: AddressCreateManyInput | AddressCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Address update
   */
  export type AddressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The data needed to update a Address.
     */
    data: XOR<AddressUpdateInput, AddressUncheckedUpdateInput>
    /**
     * Choose, which Address to update.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address updateMany
   */
  export type AddressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Addresses.
     */
    data: XOR<AddressUpdateManyMutationInput, AddressUncheckedUpdateManyInput>
    /**
     * Filter which Addresses to update
     */
    where?: AddressWhereInput
    /**
     * Limit how many Addresses to update.
     */
    limit?: number
  }

  /**
   * Address updateManyAndReturn
   */
  export type AddressUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * The data used to update Addresses.
     */
    data: XOR<AddressUpdateManyMutationInput, AddressUncheckedUpdateManyInput>
    /**
     * Filter which Addresses to update
     */
    where?: AddressWhereInput
    /**
     * Limit how many Addresses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Address upsert
   */
  export type AddressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The filter to search for the Address to update in case it exists.
     */
    where: AddressWhereUniqueInput
    /**
     * In case the Address found by the `where` argument doesn't exist, create a new Address with this data.
     */
    create: XOR<AddressCreateInput, AddressUncheckedCreateInput>
    /**
     * In case the Address was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AddressUpdateInput, AddressUncheckedUpdateInput>
  }

  /**
   * Address delete
   */
  export type AddressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter which Address to delete.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address deleteMany
   */
  export type AddressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Addresses to delete
     */
    where?: AddressWhereInput
    /**
     * Limit how many Addresses to delete.
     */
    limit?: number
  }

  /**
   * Address.user
   */
  export type Address$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Address.shipping_orders
   */
  export type Address$shipping_ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    where?: OrdersWhereInput
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    cursor?: OrdersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * Address.billing_orders
   */
  export type Address$billing_ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    where?: OrdersWhereInput
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    cursor?: OrdersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * Address without action
   */
  export type AddressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
  }


  /**
   * Model Carts
   */

  export type AggregateCarts = {
    _count: CartsCountAggregateOutputType | null
    _min: CartsMinAggregateOutputType | null
    _max: CartsMaxAggregateOutputType | null
  }

  export type CartsMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    session_id: string | null
    created_at: Date | null
    updated_at: Date | null
    status: $Enums.Status | null
  }

  export type CartsMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    session_id: string | null
    created_at: Date | null
    updated_at: Date | null
    status: $Enums.Status | null
  }

  export type CartsCountAggregateOutputType = {
    id: number
    user_id: number
    session_id: number
    created_at: number
    updated_at: number
    status: number
    _all: number
  }


  export type CartsMinAggregateInputType = {
    id?: true
    user_id?: true
    session_id?: true
    created_at?: true
    updated_at?: true
    status?: true
  }

  export type CartsMaxAggregateInputType = {
    id?: true
    user_id?: true
    session_id?: true
    created_at?: true
    updated_at?: true
    status?: true
  }

  export type CartsCountAggregateInputType = {
    id?: true
    user_id?: true
    session_id?: true
    created_at?: true
    updated_at?: true
    status?: true
    _all?: true
  }

  export type CartsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Carts to aggregate.
     */
    where?: CartsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carts to fetch.
     */
    orderBy?: CartsOrderByWithRelationInput | CartsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CartsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Carts
    **/
    _count?: true | CartsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CartsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CartsMaxAggregateInputType
  }

  export type GetCartsAggregateType<T extends CartsAggregateArgs> = {
        [P in keyof T & keyof AggregateCarts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCarts[P]>
      : GetScalarType<T[P], AggregateCarts[P]>
  }




  export type CartsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CartsWhereInput
    orderBy?: CartsOrderByWithAggregationInput | CartsOrderByWithAggregationInput[]
    by: CartsScalarFieldEnum[] | CartsScalarFieldEnum
    having?: CartsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CartsCountAggregateInputType | true
    _min?: CartsMinAggregateInputType
    _max?: CartsMaxAggregateInputType
  }

  export type CartsGroupByOutputType = {
    id: string
    user_id: string | null
    session_id: string
    created_at: Date
    updated_at: Date
    status: $Enums.Status
    _count: CartsCountAggregateOutputType | null
    _min: CartsMinAggregateOutputType | null
    _max: CartsMaxAggregateOutputType | null
  }

  type GetCartsGroupByPayload<T extends CartsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CartsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CartsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CartsGroupByOutputType[P]>
            : GetScalarType<T[P], CartsGroupByOutputType[P]>
        }
      >
    >


  export type CartsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    session_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    status?: boolean
    users?: boolean | Carts$usersArgs<ExtArgs>
    session?: boolean | SessionDefaultArgs<ExtArgs>
    cart_items?: boolean | Carts$cart_itemsArgs<ExtArgs>
    orders?: boolean | Carts$ordersArgs<ExtArgs>
    _count?: boolean | CartsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["carts"]>

  export type CartsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    session_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    status?: boolean
    users?: boolean | Carts$usersArgs<ExtArgs>
    session?: boolean | SessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["carts"]>

  export type CartsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    session_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    status?: boolean
    users?: boolean | Carts$usersArgs<ExtArgs>
    session?: boolean | SessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["carts"]>

  export type CartsSelectScalar = {
    id?: boolean
    user_id?: boolean
    session_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    status?: boolean
  }

  export type CartsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "session_id" | "created_at" | "updated_at" | "status", ExtArgs["result"]["carts"]>
  export type CartsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Carts$usersArgs<ExtArgs>
    session?: boolean | SessionDefaultArgs<ExtArgs>
    cart_items?: boolean | Carts$cart_itemsArgs<ExtArgs>
    orders?: boolean | Carts$ordersArgs<ExtArgs>
    _count?: boolean | CartsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CartsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Carts$usersArgs<ExtArgs>
    session?: boolean | SessionDefaultArgs<ExtArgs>
  }
  export type CartsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Carts$usersArgs<ExtArgs>
    session?: boolean | SessionDefaultArgs<ExtArgs>
  }

  export type $CartsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Carts"
    objects: {
      users: Prisma.$UserPayload<ExtArgs> | null
      session: Prisma.$SessionPayload<ExtArgs>
      cart_items: Prisma.$CartItemsPayload<ExtArgs>[]
      orders: Prisma.$OrdersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string | null
      session_id: string
      created_at: Date
      updated_at: Date
      status: $Enums.Status
    }, ExtArgs["result"]["carts"]>
    composites: {}
  }

  type CartsGetPayload<S extends boolean | null | undefined | CartsDefaultArgs> = $Result.GetResult<Prisma.$CartsPayload, S>

  type CartsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CartsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CartsCountAggregateInputType | true
    }

  export interface CartsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Carts'], meta: { name: 'Carts' } }
    /**
     * Find zero or one Carts that matches the filter.
     * @param {CartsFindUniqueArgs} args - Arguments to find a Carts
     * @example
     * // Get one Carts
     * const carts = await prisma.carts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CartsFindUniqueArgs>(args: SelectSubset<T, CartsFindUniqueArgs<ExtArgs>>): Prisma__CartsClient<$Result.GetResult<Prisma.$CartsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Carts that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CartsFindUniqueOrThrowArgs} args - Arguments to find a Carts
     * @example
     * // Get one Carts
     * const carts = await prisma.carts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CartsFindUniqueOrThrowArgs>(args: SelectSubset<T, CartsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CartsClient<$Result.GetResult<Prisma.$CartsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Carts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartsFindFirstArgs} args - Arguments to find a Carts
     * @example
     * // Get one Carts
     * const carts = await prisma.carts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CartsFindFirstArgs>(args?: SelectSubset<T, CartsFindFirstArgs<ExtArgs>>): Prisma__CartsClient<$Result.GetResult<Prisma.$CartsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Carts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartsFindFirstOrThrowArgs} args - Arguments to find a Carts
     * @example
     * // Get one Carts
     * const carts = await prisma.carts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CartsFindFirstOrThrowArgs>(args?: SelectSubset<T, CartsFindFirstOrThrowArgs<ExtArgs>>): Prisma__CartsClient<$Result.GetResult<Prisma.$CartsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Carts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Carts
     * const carts = await prisma.carts.findMany()
     * 
     * // Get first 10 Carts
     * const carts = await prisma.carts.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cartsWithIdOnly = await prisma.carts.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CartsFindManyArgs>(args?: SelectSubset<T, CartsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Carts.
     * @param {CartsCreateArgs} args - Arguments to create a Carts.
     * @example
     * // Create one Carts
     * const Carts = await prisma.carts.create({
     *   data: {
     *     // ... data to create a Carts
     *   }
     * })
     * 
     */
    create<T extends CartsCreateArgs>(args: SelectSubset<T, CartsCreateArgs<ExtArgs>>): Prisma__CartsClient<$Result.GetResult<Prisma.$CartsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Carts.
     * @param {CartsCreateManyArgs} args - Arguments to create many Carts.
     * @example
     * // Create many Carts
     * const carts = await prisma.carts.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CartsCreateManyArgs>(args?: SelectSubset<T, CartsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Carts and returns the data saved in the database.
     * @param {CartsCreateManyAndReturnArgs} args - Arguments to create many Carts.
     * @example
     * // Create many Carts
     * const carts = await prisma.carts.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Carts and only return the `id`
     * const cartsWithIdOnly = await prisma.carts.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CartsCreateManyAndReturnArgs>(args?: SelectSubset<T, CartsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Carts.
     * @param {CartsDeleteArgs} args - Arguments to delete one Carts.
     * @example
     * // Delete one Carts
     * const Carts = await prisma.carts.delete({
     *   where: {
     *     // ... filter to delete one Carts
     *   }
     * })
     * 
     */
    delete<T extends CartsDeleteArgs>(args: SelectSubset<T, CartsDeleteArgs<ExtArgs>>): Prisma__CartsClient<$Result.GetResult<Prisma.$CartsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Carts.
     * @param {CartsUpdateArgs} args - Arguments to update one Carts.
     * @example
     * // Update one Carts
     * const carts = await prisma.carts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CartsUpdateArgs>(args: SelectSubset<T, CartsUpdateArgs<ExtArgs>>): Prisma__CartsClient<$Result.GetResult<Prisma.$CartsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Carts.
     * @param {CartsDeleteManyArgs} args - Arguments to filter Carts to delete.
     * @example
     * // Delete a few Carts
     * const { count } = await prisma.carts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CartsDeleteManyArgs>(args?: SelectSubset<T, CartsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Carts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Carts
     * const carts = await prisma.carts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CartsUpdateManyArgs>(args: SelectSubset<T, CartsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Carts and returns the data updated in the database.
     * @param {CartsUpdateManyAndReturnArgs} args - Arguments to update many Carts.
     * @example
     * // Update many Carts
     * const carts = await prisma.carts.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Carts and only return the `id`
     * const cartsWithIdOnly = await prisma.carts.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CartsUpdateManyAndReturnArgs>(args: SelectSubset<T, CartsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Carts.
     * @param {CartsUpsertArgs} args - Arguments to update or create a Carts.
     * @example
     * // Update or create a Carts
     * const carts = await prisma.carts.upsert({
     *   create: {
     *     // ... data to create a Carts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Carts we want to update
     *   }
     * })
     */
    upsert<T extends CartsUpsertArgs>(args: SelectSubset<T, CartsUpsertArgs<ExtArgs>>): Prisma__CartsClient<$Result.GetResult<Prisma.$CartsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Carts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartsCountArgs} args - Arguments to filter Carts to count.
     * @example
     * // Count the number of Carts
     * const count = await prisma.carts.count({
     *   where: {
     *     // ... the filter for the Carts we want to count
     *   }
     * })
    **/
    count<T extends CartsCountArgs>(
      args?: Subset<T, CartsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CartsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Carts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CartsAggregateArgs>(args: Subset<T, CartsAggregateArgs>): Prisma.PrismaPromise<GetCartsAggregateType<T>>

    /**
     * Group by Carts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CartsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CartsGroupByArgs['orderBy'] }
        : { orderBy?: CartsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CartsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCartsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Carts model
   */
  readonly fields: CartsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Carts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CartsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Carts$usersArgs<ExtArgs> = {}>(args?: Subset<T, Carts$usersArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    session<T extends SessionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SessionDefaultArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    cart_items<T extends Carts$cart_itemsArgs<ExtArgs> = {}>(args?: Subset<T, Carts$cart_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartItemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    orders<T extends Carts$ordersArgs<ExtArgs> = {}>(args?: Subset<T, Carts$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Carts model
   */
  interface CartsFieldRefs {
    readonly id: FieldRef<"Carts", 'String'>
    readonly user_id: FieldRef<"Carts", 'String'>
    readonly session_id: FieldRef<"Carts", 'String'>
    readonly created_at: FieldRef<"Carts", 'DateTime'>
    readonly updated_at: FieldRef<"Carts", 'DateTime'>
    readonly status: FieldRef<"Carts", 'Status'>
  }
    

  // Custom InputTypes
  /**
   * Carts findUnique
   */
  export type CartsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carts
     */
    select?: CartsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carts
     */
    omit?: CartsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartsInclude<ExtArgs> | null
    /**
     * Filter, which Carts to fetch.
     */
    where: CartsWhereUniqueInput
  }

  /**
   * Carts findUniqueOrThrow
   */
  export type CartsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carts
     */
    select?: CartsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carts
     */
    omit?: CartsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartsInclude<ExtArgs> | null
    /**
     * Filter, which Carts to fetch.
     */
    where: CartsWhereUniqueInput
  }

  /**
   * Carts findFirst
   */
  export type CartsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carts
     */
    select?: CartsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carts
     */
    omit?: CartsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartsInclude<ExtArgs> | null
    /**
     * Filter, which Carts to fetch.
     */
    where?: CartsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carts to fetch.
     */
    orderBy?: CartsOrderByWithRelationInput | CartsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Carts.
     */
    cursor?: CartsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Carts.
     */
    distinct?: CartsScalarFieldEnum | CartsScalarFieldEnum[]
  }

  /**
   * Carts findFirstOrThrow
   */
  export type CartsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carts
     */
    select?: CartsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carts
     */
    omit?: CartsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartsInclude<ExtArgs> | null
    /**
     * Filter, which Carts to fetch.
     */
    where?: CartsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carts to fetch.
     */
    orderBy?: CartsOrderByWithRelationInput | CartsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Carts.
     */
    cursor?: CartsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Carts.
     */
    distinct?: CartsScalarFieldEnum | CartsScalarFieldEnum[]
  }

  /**
   * Carts findMany
   */
  export type CartsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carts
     */
    select?: CartsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carts
     */
    omit?: CartsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartsInclude<ExtArgs> | null
    /**
     * Filter, which Carts to fetch.
     */
    where?: CartsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carts to fetch.
     */
    orderBy?: CartsOrderByWithRelationInput | CartsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Carts.
     */
    cursor?: CartsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carts.
     */
    skip?: number
    distinct?: CartsScalarFieldEnum | CartsScalarFieldEnum[]
  }

  /**
   * Carts create
   */
  export type CartsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carts
     */
    select?: CartsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carts
     */
    omit?: CartsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartsInclude<ExtArgs> | null
    /**
     * The data needed to create a Carts.
     */
    data: XOR<CartsCreateInput, CartsUncheckedCreateInput>
  }

  /**
   * Carts createMany
   */
  export type CartsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Carts.
     */
    data: CartsCreateManyInput | CartsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Carts createManyAndReturn
   */
  export type CartsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carts
     */
    select?: CartsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Carts
     */
    omit?: CartsOmit<ExtArgs> | null
    /**
     * The data used to create many Carts.
     */
    data: CartsCreateManyInput | CartsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Carts update
   */
  export type CartsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carts
     */
    select?: CartsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carts
     */
    omit?: CartsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartsInclude<ExtArgs> | null
    /**
     * The data needed to update a Carts.
     */
    data: XOR<CartsUpdateInput, CartsUncheckedUpdateInput>
    /**
     * Choose, which Carts to update.
     */
    where: CartsWhereUniqueInput
  }

  /**
   * Carts updateMany
   */
  export type CartsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Carts.
     */
    data: XOR<CartsUpdateManyMutationInput, CartsUncheckedUpdateManyInput>
    /**
     * Filter which Carts to update
     */
    where?: CartsWhereInput
    /**
     * Limit how many Carts to update.
     */
    limit?: number
  }

  /**
   * Carts updateManyAndReturn
   */
  export type CartsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carts
     */
    select?: CartsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Carts
     */
    omit?: CartsOmit<ExtArgs> | null
    /**
     * The data used to update Carts.
     */
    data: XOR<CartsUpdateManyMutationInput, CartsUncheckedUpdateManyInput>
    /**
     * Filter which Carts to update
     */
    where?: CartsWhereInput
    /**
     * Limit how many Carts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Carts upsert
   */
  export type CartsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carts
     */
    select?: CartsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carts
     */
    omit?: CartsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartsInclude<ExtArgs> | null
    /**
     * The filter to search for the Carts to update in case it exists.
     */
    where: CartsWhereUniqueInput
    /**
     * In case the Carts found by the `where` argument doesn't exist, create a new Carts with this data.
     */
    create: XOR<CartsCreateInput, CartsUncheckedCreateInput>
    /**
     * In case the Carts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CartsUpdateInput, CartsUncheckedUpdateInput>
  }

  /**
   * Carts delete
   */
  export type CartsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carts
     */
    select?: CartsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carts
     */
    omit?: CartsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartsInclude<ExtArgs> | null
    /**
     * Filter which Carts to delete.
     */
    where: CartsWhereUniqueInput
  }

  /**
   * Carts deleteMany
   */
  export type CartsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Carts to delete
     */
    where?: CartsWhereInput
    /**
     * Limit how many Carts to delete.
     */
    limit?: number
  }

  /**
   * Carts.users
   */
  export type Carts$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Carts.cart_items
   */
  export type Carts$cart_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItems
     */
    select?: CartItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItems
     */
    omit?: CartItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemsInclude<ExtArgs> | null
    where?: CartItemsWhereInput
    orderBy?: CartItemsOrderByWithRelationInput | CartItemsOrderByWithRelationInput[]
    cursor?: CartItemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CartItemsScalarFieldEnum | CartItemsScalarFieldEnum[]
  }

  /**
   * Carts.orders
   */
  export type Carts$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    where?: OrdersWhereInput
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    cursor?: OrdersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * Carts without action
   */
  export type CartsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carts
     */
    select?: CartsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carts
     */
    omit?: CartsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartsInclude<ExtArgs> | null
  }


  /**
   * Model CartItems
   */

  export type AggregateCartItems = {
    _count: CartItemsCountAggregateOutputType | null
    _avg: CartItemsAvgAggregateOutputType | null
    _sum: CartItemsSumAggregateOutputType | null
    _min: CartItemsMinAggregateOutputType | null
    _max: CartItemsMaxAggregateOutputType | null
  }

  export type CartItemsAvgAggregateOutputType = {
    quantity: number | null
  }

  export type CartItemsSumAggregateOutputType = {
    quantity: number | null
  }

  export type CartItemsMinAggregateOutputType = {
    id: string | null
    cart_id: string | null
    product_variant_id: string | null
    quantity: number | null
  }

  export type CartItemsMaxAggregateOutputType = {
    id: string | null
    cart_id: string | null
    product_variant_id: string | null
    quantity: number | null
  }

  export type CartItemsCountAggregateOutputType = {
    id: number
    cart_id: number
    product_variant_id: number
    quantity: number
    _all: number
  }


  export type CartItemsAvgAggregateInputType = {
    quantity?: true
  }

  export type CartItemsSumAggregateInputType = {
    quantity?: true
  }

  export type CartItemsMinAggregateInputType = {
    id?: true
    cart_id?: true
    product_variant_id?: true
    quantity?: true
  }

  export type CartItemsMaxAggregateInputType = {
    id?: true
    cart_id?: true
    product_variant_id?: true
    quantity?: true
  }

  export type CartItemsCountAggregateInputType = {
    id?: true
    cart_id?: true
    product_variant_id?: true
    quantity?: true
    _all?: true
  }

  export type CartItemsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CartItems to aggregate.
     */
    where?: CartItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CartItems to fetch.
     */
    orderBy?: CartItemsOrderByWithRelationInput | CartItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CartItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CartItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CartItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CartItems
    **/
    _count?: true | CartItemsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CartItemsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CartItemsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CartItemsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CartItemsMaxAggregateInputType
  }

  export type GetCartItemsAggregateType<T extends CartItemsAggregateArgs> = {
        [P in keyof T & keyof AggregateCartItems]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCartItems[P]>
      : GetScalarType<T[P], AggregateCartItems[P]>
  }




  export type CartItemsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CartItemsWhereInput
    orderBy?: CartItemsOrderByWithAggregationInput | CartItemsOrderByWithAggregationInput[]
    by: CartItemsScalarFieldEnum[] | CartItemsScalarFieldEnum
    having?: CartItemsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CartItemsCountAggregateInputType | true
    _avg?: CartItemsAvgAggregateInputType
    _sum?: CartItemsSumAggregateInputType
    _min?: CartItemsMinAggregateInputType
    _max?: CartItemsMaxAggregateInputType
  }

  export type CartItemsGroupByOutputType = {
    id: string
    cart_id: string
    product_variant_id: string
    quantity: number
    _count: CartItemsCountAggregateOutputType | null
    _avg: CartItemsAvgAggregateOutputType | null
    _sum: CartItemsSumAggregateOutputType | null
    _min: CartItemsMinAggregateOutputType | null
    _max: CartItemsMaxAggregateOutputType | null
  }

  type GetCartItemsGroupByPayload<T extends CartItemsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CartItemsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CartItemsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CartItemsGroupByOutputType[P]>
            : GetScalarType<T[P], CartItemsGroupByOutputType[P]>
        }
      >
    >


  export type CartItemsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cart_id?: boolean
    product_variant_id?: boolean
    quantity?: boolean
    product_variant?: boolean | ProductVariantsDefaultArgs<ExtArgs>
    carts?: boolean | CartsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cartItems"]>

  export type CartItemsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cart_id?: boolean
    product_variant_id?: boolean
    quantity?: boolean
    product_variant?: boolean | ProductVariantsDefaultArgs<ExtArgs>
    carts?: boolean | CartsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cartItems"]>

  export type CartItemsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cart_id?: boolean
    product_variant_id?: boolean
    quantity?: boolean
    product_variant?: boolean | ProductVariantsDefaultArgs<ExtArgs>
    carts?: boolean | CartsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cartItems"]>

  export type CartItemsSelectScalar = {
    id?: boolean
    cart_id?: boolean
    product_variant_id?: boolean
    quantity?: boolean
  }

  export type CartItemsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cart_id" | "product_variant_id" | "quantity", ExtArgs["result"]["cartItems"]>
  export type CartItemsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product_variant?: boolean | ProductVariantsDefaultArgs<ExtArgs>
    carts?: boolean | CartsDefaultArgs<ExtArgs>
  }
  export type CartItemsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product_variant?: boolean | ProductVariantsDefaultArgs<ExtArgs>
    carts?: boolean | CartsDefaultArgs<ExtArgs>
  }
  export type CartItemsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product_variant?: boolean | ProductVariantsDefaultArgs<ExtArgs>
    carts?: boolean | CartsDefaultArgs<ExtArgs>
  }

  export type $CartItemsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CartItems"
    objects: {
      product_variant: Prisma.$ProductVariantsPayload<ExtArgs>
      carts: Prisma.$CartsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      cart_id: string
      product_variant_id: string
      quantity: number
    }, ExtArgs["result"]["cartItems"]>
    composites: {}
  }

  type CartItemsGetPayload<S extends boolean | null | undefined | CartItemsDefaultArgs> = $Result.GetResult<Prisma.$CartItemsPayload, S>

  type CartItemsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CartItemsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CartItemsCountAggregateInputType | true
    }

  export interface CartItemsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CartItems'], meta: { name: 'CartItems' } }
    /**
     * Find zero or one CartItems that matches the filter.
     * @param {CartItemsFindUniqueArgs} args - Arguments to find a CartItems
     * @example
     * // Get one CartItems
     * const cartItems = await prisma.cartItems.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CartItemsFindUniqueArgs>(args: SelectSubset<T, CartItemsFindUniqueArgs<ExtArgs>>): Prisma__CartItemsClient<$Result.GetResult<Prisma.$CartItemsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CartItems that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CartItemsFindUniqueOrThrowArgs} args - Arguments to find a CartItems
     * @example
     * // Get one CartItems
     * const cartItems = await prisma.cartItems.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CartItemsFindUniqueOrThrowArgs>(args: SelectSubset<T, CartItemsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CartItemsClient<$Result.GetResult<Prisma.$CartItemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CartItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemsFindFirstArgs} args - Arguments to find a CartItems
     * @example
     * // Get one CartItems
     * const cartItems = await prisma.cartItems.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CartItemsFindFirstArgs>(args?: SelectSubset<T, CartItemsFindFirstArgs<ExtArgs>>): Prisma__CartItemsClient<$Result.GetResult<Prisma.$CartItemsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CartItems that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemsFindFirstOrThrowArgs} args - Arguments to find a CartItems
     * @example
     * // Get one CartItems
     * const cartItems = await prisma.cartItems.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CartItemsFindFirstOrThrowArgs>(args?: SelectSubset<T, CartItemsFindFirstOrThrowArgs<ExtArgs>>): Prisma__CartItemsClient<$Result.GetResult<Prisma.$CartItemsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CartItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CartItems
     * const cartItems = await prisma.cartItems.findMany()
     * 
     * // Get first 10 CartItems
     * const cartItems = await prisma.cartItems.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cartItemsWithIdOnly = await prisma.cartItems.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CartItemsFindManyArgs>(args?: SelectSubset<T, CartItemsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartItemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CartItems.
     * @param {CartItemsCreateArgs} args - Arguments to create a CartItems.
     * @example
     * // Create one CartItems
     * const CartItems = await prisma.cartItems.create({
     *   data: {
     *     // ... data to create a CartItems
     *   }
     * })
     * 
     */
    create<T extends CartItemsCreateArgs>(args: SelectSubset<T, CartItemsCreateArgs<ExtArgs>>): Prisma__CartItemsClient<$Result.GetResult<Prisma.$CartItemsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CartItems.
     * @param {CartItemsCreateManyArgs} args - Arguments to create many CartItems.
     * @example
     * // Create many CartItems
     * const cartItems = await prisma.cartItems.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CartItemsCreateManyArgs>(args?: SelectSubset<T, CartItemsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CartItems and returns the data saved in the database.
     * @param {CartItemsCreateManyAndReturnArgs} args - Arguments to create many CartItems.
     * @example
     * // Create many CartItems
     * const cartItems = await prisma.cartItems.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CartItems and only return the `id`
     * const cartItemsWithIdOnly = await prisma.cartItems.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CartItemsCreateManyAndReturnArgs>(args?: SelectSubset<T, CartItemsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartItemsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CartItems.
     * @param {CartItemsDeleteArgs} args - Arguments to delete one CartItems.
     * @example
     * // Delete one CartItems
     * const CartItems = await prisma.cartItems.delete({
     *   where: {
     *     // ... filter to delete one CartItems
     *   }
     * })
     * 
     */
    delete<T extends CartItemsDeleteArgs>(args: SelectSubset<T, CartItemsDeleteArgs<ExtArgs>>): Prisma__CartItemsClient<$Result.GetResult<Prisma.$CartItemsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CartItems.
     * @param {CartItemsUpdateArgs} args - Arguments to update one CartItems.
     * @example
     * // Update one CartItems
     * const cartItems = await prisma.cartItems.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CartItemsUpdateArgs>(args: SelectSubset<T, CartItemsUpdateArgs<ExtArgs>>): Prisma__CartItemsClient<$Result.GetResult<Prisma.$CartItemsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CartItems.
     * @param {CartItemsDeleteManyArgs} args - Arguments to filter CartItems to delete.
     * @example
     * // Delete a few CartItems
     * const { count } = await prisma.cartItems.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CartItemsDeleteManyArgs>(args?: SelectSubset<T, CartItemsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CartItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CartItems
     * const cartItems = await prisma.cartItems.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CartItemsUpdateManyArgs>(args: SelectSubset<T, CartItemsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CartItems and returns the data updated in the database.
     * @param {CartItemsUpdateManyAndReturnArgs} args - Arguments to update many CartItems.
     * @example
     * // Update many CartItems
     * const cartItems = await prisma.cartItems.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CartItems and only return the `id`
     * const cartItemsWithIdOnly = await prisma.cartItems.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CartItemsUpdateManyAndReturnArgs>(args: SelectSubset<T, CartItemsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartItemsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CartItems.
     * @param {CartItemsUpsertArgs} args - Arguments to update or create a CartItems.
     * @example
     * // Update or create a CartItems
     * const cartItems = await prisma.cartItems.upsert({
     *   create: {
     *     // ... data to create a CartItems
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CartItems we want to update
     *   }
     * })
     */
    upsert<T extends CartItemsUpsertArgs>(args: SelectSubset<T, CartItemsUpsertArgs<ExtArgs>>): Prisma__CartItemsClient<$Result.GetResult<Prisma.$CartItemsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CartItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemsCountArgs} args - Arguments to filter CartItems to count.
     * @example
     * // Count the number of CartItems
     * const count = await prisma.cartItems.count({
     *   where: {
     *     // ... the filter for the CartItems we want to count
     *   }
     * })
    **/
    count<T extends CartItemsCountArgs>(
      args?: Subset<T, CartItemsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CartItemsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CartItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CartItemsAggregateArgs>(args: Subset<T, CartItemsAggregateArgs>): Prisma.PrismaPromise<GetCartItemsAggregateType<T>>

    /**
     * Group by CartItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CartItemsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CartItemsGroupByArgs['orderBy'] }
        : { orderBy?: CartItemsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CartItemsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCartItemsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CartItems model
   */
  readonly fields: CartItemsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CartItems.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CartItemsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product_variant<T extends ProductVariantsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductVariantsDefaultArgs<ExtArgs>>): Prisma__ProductVariantsClient<$Result.GetResult<Prisma.$ProductVariantsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    carts<T extends CartsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CartsDefaultArgs<ExtArgs>>): Prisma__CartsClient<$Result.GetResult<Prisma.$CartsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CartItems model
   */
  interface CartItemsFieldRefs {
    readonly id: FieldRef<"CartItems", 'String'>
    readonly cart_id: FieldRef<"CartItems", 'String'>
    readonly product_variant_id: FieldRef<"CartItems", 'String'>
    readonly quantity: FieldRef<"CartItems", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * CartItems findUnique
   */
  export type CartItemsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItems
     */
    select?: CartItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItems
     */
    omit?: CartItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemsInclude<ExtArgs> | null
    /**
     * Filter, which CartItems to fetch.
     */
    where: CartItemsWhereUniqueInput
  }

  /**
   * CartItems findUniqueOrThrow
   */
  export type CartItemsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItems
     */
    select?: CartItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItems
     */
    omit?: CartItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemsInclude<ExtArgs> | null
    /**
     * Filter, which CartItems to fetch.
     */
    where: CartItemsWhereUniqueInput
  }

  /**
   * CartItems findFirst
   */
  export type CartItemsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItems
     */
    select?: CartItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItems
     */
    omit?: CartItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemsInclude<ExtArgs> | null
    /**
     * Filter, which CartItems to fetch.
     */
    where?: CartItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CartItems to fetch.
     */
    orderBy?: CartItemsOrderByWithRelationInput | CartItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CartItems.
     */
    cursor?: CartItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CartItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CartItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CartItems.
     */
    distinct?: CartItemsScalarFieldEnum | CartItemsScalarFieldEnum[]
  }

  /**
   * CartItems findFirstOrThrow
   */
  export type CartItemsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItems
     */
    select?: CartItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItems
     */
    omit?: CartItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemsInclude<ExtArgs> | null
    /**
     * Filter, which CartItems to fetch.
     */
    where?: CartItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CartItems to fetch.
     */
    orderBy?: CartItemsOrderByWithRelationInput | CartItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CartItems.
     */
    cursor?: CartItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CartItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CartItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CartItems.
     */
    distinct?: CartItemsScalarFieldEnum | CartItemsScalarFieldEnum[]
  }

  /**
   * CartItems findMany
   */
  export type CartItemsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItems
     */
    select?: CartItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItems
     */
    omit?: CartItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemsInclude<ExtArgs> | null
    /**
     * Filter, which CartItems to fetch.
     */
    where?: CartItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CartItems to fetch.
     */
    orderBy?: CartItemsOrderByWithRelationInput | CartItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CartItems.
     */
    cursor?: CartItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CartItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CartItems.
     */
    skip?: number
    distinct?: CartItemsScalarFieldEnum | CartItemsScalarFieldEnum[]
  }

  /**
   * CartItems create
   */
  export type CartItemsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItems
     */
    select?: CartItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItems
     */
    omit?: CartItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemsInclude<ExtArgs> | null
    /**
     * The data needed to create a CartItems.
     */
    data: XOR<CartItemsCreateInput, CartItemsUncheckedCreateInput>
  }

  /**
   * CartItems createMany
   */
  export type CartItemsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CartItems.
     */
    data: CartItemsCreateManyInput | CartItemsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CartItems createManyAndReturn
   */
  export type CartItemsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItems
     */
    select?: CartItemsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CartItems
     */
    omit?: CartItemsOmit<ExtArgs> | null
    /**
     * The data used to create many CartItems.
     */
    data: CartItemsCreateManyInput | CartItemsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CartItems update
   */
  export type CartItemsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItems
     */
    select?: CartItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItems
     */
    omit?: CartItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemsInclude<ExtArgs> | null
    /**
     * The data needed to update a CartItems.
     */
    data: XOR<CartItemsUpdateInput, CartItemsUncheckedUpdateInput>
    /**
     * Choose, which CartItems to update.
     */
    where: CartItemsWhereUniqueInput
  }

  /**
   * CartItems updateMany
   */
  export type CartItemsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CartItems.
     */
    data: XOR<CartItemsUpdateManyMutationInput, CartItemsUncheckedUpdateManyInput>
    /**
     * Filter which CartItems to update
     */
    where?: CartItemsWhereInput
    /**
     * Limit how many CartItems to update.
     */
    limit?: number
  }

  /**
   * CartItems updateManyAndReturn
   */
  export type CartItemsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItems
     */
    select?: CartItemsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CartItems
     */
    omit?: CartItemsOmit<ExtArgs> | null
    /**
     * The data used to update CartItems.
     */
    data: XOR<CartItemsUpdateManyMutationInput, CartItemsUncheckedUpdateManyInput>
    /**
     * Filter which CartItems to update
     */
    where?: CartItemsWhereInput
    /**
     * Limit how many CartItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CartItems upsert
   */
  export type CartItemsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItems
     */
    select?: CartItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItems
     */
    omit?: CartItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemsInclude<ExtArgs> | null
    /**
     * The filter to search for the CartItems to update in case it exists.
     */
    where: CartItemsWhereUniqueInput
    /**
     * In case the CartItems found by the `where` argument doesn't exist, create a new CartItems with this data.
     */
    create: XOR<CartItemsCreateInput, CartItemsUncheckedCreateInput>
    /**
     * In case the CartItems was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CartItemsUpdateInput, CartItemsUncheckedUpdateInput>
  }

  /**
   * CartItems delete
   */
  export type CartItemsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItems
     */
    select?: CartItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItems
     */
    omit?: CartItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemsInclude<ExtArgs> | null
    /**
     * Filter which CartItems to delete.
     */
    where: CartItemsWhereUniqueInput
  }

  /**
   * CartItems deleteMany
   */
  export type CartItemsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CartItems to delete
     */
    where?: CartItemsWhereInput
    /**
     * Limit how many CartItems to delete.
     */
    limit?: number
  }

  /**
   * CartItems without action
   */
  export type CartItemsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItems
     */
    select?: CartItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItems
     */
    omit?: CartItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemsInclude<ExtArgs> | null
  }


  /**
   * Model Orders
   */

  export type AggregateOrders = {
    _count: OrdersCountAggregateOutputType | null
    _avg: OrdersAvgAggregateOutputType | null
    _sum: OrdersSumAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  export type OrdersAvgAggregateOutputType = {
    total_amount: Decimal | null
    shipping_amount: Decimal | null
    tax_amount: Decimal | null
    discount_amount: Decimal | null
  }

  export type OrdersSumAggregateOutputType = {
    total_amount: Decimal | null
    shipping_amount: Decimal | null
    tax_amount: Decimal | null
    discount_amount: Decimal | null
  }

  export type OrdersMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    cart_id: string | null
    order_number: string | null
    status: $Enums.OrderStatus | null
    total_amount: Decimal | null
    shipping_amount: Decimal | null
    tax_amount: Decimal | null
    discount_amount: Decimal | null
    shipping_address_id: string | null
    billing_address_id: string | null
    payment_status: $Enums.PaymentStatus | null
    payment_method: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type OrdersMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    cart_id: string | null
    order_number: string | null
    status: $Enums.OrderStatus | null
    total_amount: Decimal | null
    shipping_amount: Decimal | null
    tax_amount: Decimal | null
    discount_amount: Decimal | null
    shipping_address_id: string | null
    billing_address_id: string | null
    payment_status: $Enums.PaymentStatus | null
    payment_method: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type OrdersCountAggregateOutputType = {
    id: number
    user_id: number
    cart_id: number
    order_number: number
    status: number
    total_amount: number
    shipping_amount: number
    tax_amount: number
    discount_amount: number
    shipping_address_id: number
    billing_address_id: number
    payment_status: number
    payment_method: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type OrdersAvgAggregateInputType = {
    total_amount?: true
    shipping_amount?: true
    tax_amount?: true
    discount_amount?: true
  }

  export type OrdersSumAggregateInputType = {
    total_amount?: true
    shipping_amount?: true
    tax_amount?: true
    discount_amount?: true
  }

  export type OrdersMinAggregateInputType = {
    id?: true
    user_id?: true
    cart_id?: true
    order_number?: true
    status?: true
    total_amount?: true
    shipping_amount?: true
    tax_amount?: true
    discount_amount?: true
    shipping_address_id?: true
    billing_address_id?: true
    payment_status?: true
    payment_method?: true
    created_at?: true
    updated_at?: true
  }

  export type OrdersMaxAggregateInputType = {
    id?: true
    user_id?: true
    cart_id?: true
    order_number?: true
    status?: true
    total_amount?: true
    shipping_amount?: true
    tax_amount?: true
    discount_amount?: true
    shipping_address_id?: true
    billing_address_id?: true
    payment_status?: true
    payment_method?: true
    created_at?: true
    updated_at?: true
  }

  export type OrdersCountAggregateInputType = {
    id?: true
    user_id?: true
    cart_id?: true
    order_number?: true
    status?: true
    total_amount?: true
    shipping_amount?: true
    tax_amount?: true
    discount_amount?: true
    shipping_address_id?: true
    billing_address_id?: true
    payment_status?: true
    payment_method?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type OrdersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to aggregate.
     */
    where?: OrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrdersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrdersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrdersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrdersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrdersMaxAggregateInputType
  }

  export type GetOrdersAggregateType<T extends OrdersAggregateArgs> = {
        [P in keyof T & keyof AggregateOrders]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrders[P]>
      : GetScalarType<T[P], AggregateOrders[P]>
  }




  export type OrdersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrdersWhereInput
    orderBy?: OrdersOrderByWithAggregationInput | OrdersOrderByWithAggregationInput[]
    by: OrdersScalarFieldEnum[] | OrdersScalarFieldEnum
    having?: OrdersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrdersCountAggregateInputType | true
    _avg?: OrdersAvgAggregateInputType
    _sum?: OrdersSumAggregateInputType
    _min?: OrdersMinAggregateInputType
    _max?: OrdersMaxAggregateInputType
  }

  export type OrdersGroupByOutputType = {
    id: string
    user_id: string | null
    cart_id: string
    order_number: string
    status: $Enums.OrderStatus
    total_amount: Decimal
    shipping_amount: Decimal
    tax_amount: Decimal
    discount_amount: Decimal
    shipping_address_id: string
    billing_address_id: string
    payment_status: $Enums.PaymentStatus
    payment_method: string
    created_at: Date
    updated_at: Date
    _count: OrdersCountAggregateOutputType | null
    _avg: OrdersAvgAggregateOutputType | null
    _sum: OrdersSumAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  type GetOrdersGroupByPayload<T extends OrdersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrdersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrdersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrdersGroupByOutputType[P]>
            : GetScalarType<T[P], OrdersGroupByOutputType[P]>
        }
      >
    >


  export type OrdersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    cart_id?: boolean
    order_number?: boolean
    status?: boolean
    total_amount?: boolean
    shipping_amount?: boolean
    tax_amount?: boolean
    discount_amount?: boolean
    shipping_address_id?: boolean
    billing_address_id?: boolean
    payment_status?: boolean
    payment_method?: boolean
    created_at?: boolean
    updated_at?: boolean
    shipping_address?: boolean | AddressDefaultArgs<ExtArgs>
    billing_address?: boolean | AddressDefaultArgs<ExtArgs>
    carts?: boolean | CartsDefaultArgs<ExtArgs>
    user?: boolean | Orders$userArgs<ExtArgs>
    order_items?: boolean | Orders$order_itemsArgs<ExtArgs>
    _count?: boolean | OrdersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orders"]>

  export type OrdersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    cart_id?: boolean
    order_number?: boolean
    status?: boolean
    total_amount?: boolean
    shipping_amount?: boolean
    tax_amount?: boolean
    discount_amount?: boolean
    shipping_address_id?: boolean
    billing_address_id?: boolean
    payment_status?: boolean
    payment_method?: boolean
    created_at?: boolean
    updated_at?: boolean
    shipping_address?: boolean | AddressDefaultArgs<ExtArgs>
    billing_address?: boolean | AddressDefaultArgs<ExtArgs>
    carts?: boolean | CartsDefaultArgs<ExtArgs>
    user?: boolean | Orders$userArgs<ExtArgs>
  }, ExtArgs["result"]["orders"]>

  export type OrdersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    cart_id?: boolean
    order_number?: boolean
    status?: boolean
    total_amount?: boolean
    shipping_amount?: boolean
    tax_amount?: boolean
    discount_amount?: boolean
    shipping_address_id?: boolean
    billing_address_id?: boolean
    payment_status?: boolean
    payment_method?: boolean
    created_at?: boolean
    updated_at?: boolean
    shipping_address?: boolean | AddressDefaultArgs<ExtArgs>
    billing_address?: boolean | AddressDefaultArgs<ExtArgs>
    carts?: boolean | CartsDefaultArgs<ExtArgs>
    user?: boolean | Orders$userArgs<ExtArgs>
  }, ExtArgs["result"]["orders"]>

  export type OrdersSelectScalar = {
    id?: boolean
    user_id?: boolean
    cart_id?: boolean
    order_number?: boolean
    status?: boolean
    total_amount?: boolean
    shipping_amount?: boolean
    tax_amount?: boolean
    discount_amount?: boolean
    shipping_address_id?: boolean
    billing_address_id?: boolean
    payment_status?: boolean
    payment_method?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type OrdersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "cart_id" | "order_number" | "status" | "total_amount" | "shipping_amount" | "tax_amount" | "discount_amount" | "shipping_address_id" | "billing_address_id" | "payment_status" | "payment_method" | "created_at" | "updated_at", ExtArgs["result"]["orders"]>
  export type OrdersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shipping_address?: boolean | AddressDefaultArgs<ExtArgs>
    billing_address?: boolean | AddressDefaultArgs<ExtArgs>
    carts?: boolean | CartsDefaultArgs<ExtArgs>
    user?: boolean | Orders$userArgs<ExtArgs>
    order_items?: boolean | Orders$order_itemsArgs<ExtArgs>
    _count?: boolean | OrdersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrdersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shipping_address?: boolean | AddressDefaultArgs<ExtArgs>
    billing_address?: boolean | AddressDefaultArgs<ExtArgs>
    carts?: boolean | CartsDefaultArgs<ExtArgs>
    user?: boolean | Orders$userArgs<ExtArgs>
  }
  export type OrdersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shipping_address?: boolean | AddressDefaultArgs<ExtArgs>
    billing_address?: boolean | AddressDefaultArgs<ExtArgs>
    carts?: boolean | CartsDefaultArgs<ExtArgs>
    user?: boolean | Orders$userArgs<ExtArgs>
  }

  export type $OrdersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Orders"
    objects: {
      shipping_address: Prisma.$AddressPayload<ExtArgs>
      billing_address: Prisma.$AddressPayload<ExtArgs>
      carts: Prisma.$CartsPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs> | null
      order_items: Prisma.$OrderItemsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string | null
      cart_id: string
      order_number: string
      status: $Enums.OrderStatus
      total_amount: Prisma.Decimal
      shipping_amount: Prisma.Decimal
      tax_amount: Prisma.Decimal
      discount_amount: Prisma.Decimal
      shipping_address_id: string
      billing_address_id: string
      payment_status: $Enums.PaymentStatus
      payment_method: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["orders"]>
    composites: {}
  }

  type OrdersGetPayload<S extends boolean | null | undefined | OrdersDefaultArgs> = $Result.GetResult<Prisma.$OrdersPayload, S>

  type OrdersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrdersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrdersCountAggregateInputType | true
    }

  export interface OrdersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Orders'], meta: { name: 'Orders' } }
    /**
     * Find zero or one Orders that matches the filter.
     * @param {OrdersFindUniqueArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrdersFindUniqueArgs>(args: SelectSubset<T, OrdersFindUniqueArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Orders that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrdersFindUniqueOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrdersFindUniqueOrThrowArgs>(args: SelectSubset<T, OrdersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersFindFirstArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrdersFindFirstArgs>(args?: SelectSubset<T, OrdersFindFirstArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orders that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersFindFirstOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrdersFindFirstOrThrowArgs>(args?: SelectSubset<T, OrdersFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.orders.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.orders.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ordersWithIdOnly = await prisma.orders.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrdersFindManyArgs>(args?: SelectSubset<T, OrdersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Orders.
     * @param {OrdersCreateArgs} args - Arguments to create a Orders.
     * @example
     * // Create one Orders
     * const Orders = await prisma.orders.create({
     *   data: {
     *     // ... data to create a Orders
     *   }
     * })
     * 
     */
    create<T extends OrdersCreateArgs>(args: SelectSubset<T, OrdersCreateArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {OrdersCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const orders = await prisma.orders.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrdersCreateManyArgs>(args?: SelectSubset<T, OrdersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {OrdersCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const orders = await prisma.orders.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orders and only return the `id`
     * const ordersWithIdOnly = await prisma.orders.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrdersCreateManyAndReturnArgs>(args?: SelectSubset<T, OrdersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Orders.
     * @param {OrdersDeleteArgs} args - Arguments to delete one Orders.
     * @example
     * // Delete one Orders
     * const Orders = await prisma.orders.delete({
     *   where: {
     *     // ... filter to delete one Orders
     *   }
     * })
     * 
     */
    delete<T extends OrdersDeleteArgs>(args: SelectSubset<T, OrdersDeleteArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Orders.
     * @param {OrdersUpdateArgs} args - Arguments to update one Orders.
     * @example
     * // Update one Orders
     * const orders = await prisma.orders.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrdersUpdateArgs>(args: SelectSubset<T, OrdersUpdateArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {OrdersDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.orders.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrdersDeleteManyArgs>(args?: SelectSubset<T, OrdersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const orders = await prisma.orders.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrdersUpdateManyArgs>(args: SelectSubset<T, OrdersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders and returns the data updated in the database.
     * @param {OrdersUpdateManyAndReturnArgs} args - Arguments to update many Orders.
     * @example
     * // Update many Orders
     * const orders = await prisma.orders.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Orders and only return the `id`
     * const ordersWithIdOnly = await prisma.orders.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrdersUpdateManyAndReturnArgs>(args: SelectSubset<T, OrdersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Orders.
     * @param {OrdersUpsertArgs} args - Arguments to update or create a Orders.
     * @example
     * // Update or create a Orders
     * const orders = await prisma.orders.upsert({
     *   create: {
     *     // ... data to create a Orders
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Orders we want to update
     *   }
     * })
     */
    upsert<T extends OrdersUpsertArgs>(args: SelectSubset<T, OrdersUpsertArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.orders.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrdersCountArgs>(
      args?: Subset<T, OrdersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrdersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrdersAggregateArgs>(args: Subset<T, OrdersAggregateArgs>): Prisma.PrismaPromise<GetOrdersAggregateType<T>>

    /**
     * Group by Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrdersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrdersGroupByArgs['orderBy'] }
        : { orderBy?: OrdersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrdersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrdersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Orders model
   */
  readonly fields: OrdersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Orders.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrdersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    shipping_address<T extends AddressDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AddressDefaultArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    billing_address<T extends AddressDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AddressDefaultArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    carts<T extends CartsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CartsDefaultArgs<ExtArgs>>): Prisma__CartsClient<$Result.GetResult<Prisma.$CartsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends Orders$userArgs<ExtArgs> = {}>(args?: Subset<T, Orders$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    order_items<T extends Orders$order_itemsArgs<ExtArgs> = {}>(args?: Subset<T, Orders$order_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Orders model
   */
  interface OrdersFieldRefs {
    readonly id: FieldRef<"Orders", 'String'>
    readonly user_id: FieldRef<"Orders", 'String'>
    readonly cart_id: FieldRef<"Orders", 'String'>
    readonly order_number: FieldRef<"Orders", 'String'>
    readonly status: FieldRef<"Orders", 'OrderStatus'>
    readonly total_amount: FieldRef<"Orders", 'Decimal'>
    readonly shipping_amount: FieldRef<"Orders", 'Decimal'>
    readonly tax_amount: FieldRef<"Orders", 'Decimal'>
    readonly discount_amount: FieldRef<"Orders", 'Decimal'>
    readonly shipping_address_id: FieldRef<"Orders", 'String'>
    readonly billing_address_id: FieldRef<"Orders", 'String'>
    readonly payment_status: FieldRef<"Orders", 'PaymentStatus'>
    readonly payment_method: FieldRef<"Orders", 'String'>
    readonly created_at: FieldRef<"Orders", 'DateTime'>
    readonly updated_at: FieldRef<"Orders", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Orders findUnique
   */
  export type OrdersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where: OrdersWhereUniqueInput
  }

  /**
   * Orders findUniqueOrThrow
   */
  export type OrdersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where: OrdersWhereUniqueInput
  }

  /**
   * Orders findFirst
   */
  export type OrdersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * Orders findFirstOrThrow
   */
  export type OrdersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * Orders findMany
   */
  export type OrdersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * Orders create
   */
  export type OrdersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * The data needed to create a Orders.
     */
    data: XOR<OrdersCreateInput, OrdersUncheckedCreateInput>
  }

  /**
   * Orders createMany
   */
  export type OrdersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrdersCreateManyInput | OrdersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Orders createManyAndReturn
   */
  export type OrdersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * The data used to create many Orders.
     */
    data: OrdersCreateManyInput | OrdersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Orders update
   */
  export type OrdersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * The data needed to update a Orders.
     */
    data: XOR<OrdersUpdateInput, OrdersUncheckedUpdateInput>
    /**
     * Choose, which Orders to update.
     */
    where: OrdersWhereUniqueInput
  }

  /**
   * Orders updateMany
   */
  export type OrdersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrdersUpdateManyMutationInput, OrdersUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrdersWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
  }

  /**
   * Orders updateManyAndReturn
   */
  export type OrdersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * The data used to update Orders.
     */
    data: XOR<OrdersUpdateManyMutationInput, OrdersUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrdersWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Orders upsert
   */
  export type OrdersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * The filter to search for the Orders to update in case it exists.
     */
    where: OrdersWhereUniqueInput
    /**
     * In case the Orders found by the `where` argument doesn't exist, create a new Orders with this data.
     */
    create: XOR<OrdersCreateInput, OrdersUncheckedCreateInput>
    /**
     * In case the Orders was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrdersUpdateInput, OrdersUncheckedUpdateInput>
  }

  /**
   * Orders delete
   */
  export type OrdersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter which Orders to delete.
     */
    where: OrdersWhereUniqueInput
  }

  /**
   * Orders deleteMany
   */
  export type OrdersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrdersWhereInput
    /**
     * Limit how many Orders to delete.
     */
    limit?: number
  }

  /**
   * Orders.user
   */
  export type Orders$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Orders.order_items
   */
  export type Orders$order_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItems
     */
    select?: OrderItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItems
     */
    omit?: OrderItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemsInclude<ExtArgs> | null
    where?: OrderItemsWhereInput
    orderBy?: OrderItemsOrderByWithRelationInput | OrderItemsOrderByWithRelationInput[]
    cursor?: OrderItemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderItemsScalarFieldEnum | OrderItemsScalarFieldEnum[]
  }

  /**
   * Orders without action
   */
  export type OrdersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
  }


  /**
   * Model OrderItems
   */

  export type AggregateOrderItems = {
    _count: OrderItemsCountAggregateOutputType | null
    _avg: OrderItemsAvgAggregateOutputType | null
    _sum: OrderItemsSumAggregateOutputType | null
    _min: OrderItemsMinAggregateOutputType | null
    _max: OrderItemsMaxAggregateOutputType | null
  }

  export type OrderItemsAvgAggregateOutputType = {
    quantity: number | null
    unit_price: Decimal | null
    total_price: Decimal | null
  }

  export type OrderItemsSumAggregateOutputType = {
    quantity: number | null
    unit_price: Decimal | null
    total_price: Decimal | null
  }

  export type OrderItemsMinAggregateOutputType = {
    id: string | null
    order_id: string | null
    product_variant_id: string | null
    quantity: number | null
    unit_price: Decimal | null
    total_price: Decimal | null
    created_at: Date | null
  }

  export type OrderItemsMaxAggregateOutputType = {
    id: string | null
    order_id: string | null
    product_variant_id: string | null
    quantity: number | null
    unit_price: Decimal | null
    total_price: Decimal | null
    created_at: Date | null
  }

  export type OrderItemsCountAggregateOutputType = {
    id: number
    order_id: number
    product_variant_id: number
    quantity: number
    unit_price: number
    total_price: number
    created_at: number
    _all: number
  }


  export type OrderItemsAvgAggregateInputType = {
    quantity?: true
    unit_price?: true
    total_price?: true
  }

  export type OrderItemsSumAggregateInputType = {
    quantity?: true
    unit_price?: true
    total_price?: true
  }

  export type OrderItemsMinAggregateInputType = {
    id?: true
    order_id?: true
    product_variant_id?: true
    quantity?: true
    unit_price?: true
    total_price?: true
    created_at?: true
  }

  export type OrderItemsMaxAggregateInputType = {
    id?: true
    order_id?: true
    product_variant_id?: true
    quantity?: true
    unit_price?: true
    total_price?: true
    created_at?: true
  }

  export type OrderItemsCountAggregateInputType = {
    id?: true
    order_id?: true
    product_variant_id?: true
    quantity?: true
    unit_price?: true
    total_price?: true
    created_at?: true
    _all?: true
  }

  export type OrderItemsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderItems to aggregate.
     */
    where?: OrderItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemsOrderByWithRelationInput | OrderItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrderItems
    **/
    _count?: true | OrderItemsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderItemsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderItemsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderItemsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderItemsMaxAggregateInputType
  }

  export type GetOrderItemsAggregateType<T extends OrderItemsAggregateArgs> = {
        [P in keyof T & keyof AggregateOrderItems]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrderItems[P]>
      : GetScalarType<T[P], AggregateOrderItems[P]>
  }




  export type OrderItemsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemsWhereInput
    orderBy?: OrderItemsOrderByWithAggregationInput | OrderItemsOrderByWithAggregationInput[]
    by: OrderItemsScalarFieldEnum[] | OrderItemsScalarFieldEnum
    having?: OrderItemsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderItemsCountAggregateInputType | true
    _avg?: OrderItemsAvgAggregateInputType
    _sum?: OrderItemsSumAggregateInputType
    _min?: OrderItemsMinAggregateInputType
    _max?: OrderItemsMaxAggregateInputType
  }

  export type OrderItemsGroupByOutputType = {
    id: string
    order_id: string
    product_variant_id: string
    quantity: number
    unit_price: Decimal
    total_price: Decimal
    created_at: Date
    _count: OrderItemsCountAggregateOutputType | null
    _avg: OrderItemsAvgAggregateOutputType | null
    _sum: OrderItemsSumAggregateOutputType | null
    _min: OrderItemsMinAggregateOutputType | null
    _max: OrderItemsMaxAggregateOutputType | null
  }

  type GetOrderItemsGroupByPayload<T extends OrderItemsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderItemsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderItemsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderItemsGroupByOutputType[P]>
            : GetScalarType<T[P], OrderItemsGroupByOutputType[P]>
        }
      >
    >


  export type OrderItemsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order_id?: boolean
    product_variant_id?: boolean
    quantity?: boolean
    unit_price?: boolean
    total_price?: boolean
    created_at?: boolean
    product_variant?: boolean | ProductVariantsDefaultArgs<ExtArgs>
    orders?: boolean | OrdersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderItems"]>

  export type OrderItemsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order_id?: boolean
    product_variant_id?: boolean
    quantity?: boolean
    unit_price?: boolean
    total_price?: boolean
    created_at?: boolean
    product_variant?: boolean | ProductVariantsDefaultArgs<ExtArgs>
    orders?: boolean | OrdersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderItems"]>

  export type OrderItemsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order_id?: boolean
    product_variant_id?: boolean
    quantity?: boolean
    unit_price?: boolean
    total_price?: boolean
    created_at?: boolean
    product_variant?: boolean | ProductVariantsDefaultArgs<ExtArgs>
    orders?: boolean | OrdersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderItems"]>

  export type OrderItemsSelectScalar = {
    id?: boolean
    order_id?: boolean
    product_variant_id?: boolean
    quantity?: boolean
    unit_price?: boolean
    total_price?: boolean
    created_at?: boolean
  }

  export type OrderItemsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "order_id" | "product_variant_id" | "quantity" | "unit_price" | "total_price" | "created_at", ExtArgs["result"]["orderItems"]>
  export type OrderItemsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product_variant?: boolean | ProductVariantsDefaultArgs<ExtArgs>
    orders?: boolean | OrdersDefaultArgs<ExtArgs>
  }
  export type OrderItemsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product_variant?: boolean | ProductVariantsDefaultArgs<ExtArgs>
    orders?: boolean | OrdersDefaultArgs<ExtArgs>
  }
  export type OrderItemsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product_variant?: boolean | ProductVariantsDefaultArgs<ExtArgs>
    orders?: boolean | OrdersDefaultArgs<ExtArgs>
  }

  export type $OrderItemsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrderItems"
    objects: {
      product_variant: Prisma.$ProductVariantsPayload<ExtArgs>
      orders: Prisma.$OrdersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      order_id: string
      product_variant_id: string
      quantity: number
      unit_price: Prisma.Decimal
      total_price: Prisma.Decimal
      created_at: Date
    }, ExtArgs["result"]["orderItems"]>
    composites: {}
  }

  type OrderItemsGetPayload<S extends boolean | null | undefined | OrderItemsDefaultArgs> = $Result.GetResult<Prisma.$OrderItemsPayload, S>

  type OrderItemsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderItemsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderItemsCountAggregateInputType | true
    }

  export interface OrderItemsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrderItems'], meta: { name: 'OrderItems' } }
    /**
     * Find zero or one OrderItems that matches the filter.
     * @param {OrderItemsFindUniqueArgs} args - Arguments to find a OrderItems
     * @example
     * // Get one OrderItems
     * const orderItems = await prisma.orderItems.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderItemsFindUniqueArgs>(args: SelectSubset<T, OrderItemsFindUniqueArgs<ExtArgs>>): Prisma__OrderItemsClient<$Result.GetResult<Prisma.$OrderItemsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OrderItems that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderItemsFindUniqueOrThrowArgs} args - Arguments to find a OrderItems
     * @example
     * // Get one OrderItems
     * const orderItems = await prisma.orderItems.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderItemsFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderItemsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderItemsClient<$Result.GetResult<Prisma.$OrderItemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemsFindFirstArgs} args - Arguments to find a OrderItems
     * @example
     * // Get one OrderItems
     * const orderItems = await prisma.orderItems.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderItemsFindFirstArgs>(args?: SelectSubset<T, OrderItemsFindFirstArgs<ExtArgs>>): Prisma__OrderItemsClient<$Result.GetResult<Prisma.$OrderItemsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderItems that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemsFindFirstOrThrowArgs} args - Arguments to find a OrderItems
     * @example
     * // Get one OrderItems
     * const orderItems = await prisma.orderItems.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderItemsFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderItemsFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderItemsClient<$Result.GetResult<Prisma.$OrderItemsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OrderItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrderItems
     * const orderItems = await prisma.orderItems.findMany()
     * 
     * // Get first 10 OrderItems
     * const orderItems = await prisma.orderItems.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderItemsWithIdOnly = await prisma.orderItems.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderItemsFindManyArgs>(args?: SelectSubset<T, OrderItemsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OrderItems.
     * @param {OrderItemsCreateArgs} args - Arguments to create a OrderItems.
     * @example
     * // Create one OrderItems
     * const OrderItems = await prisma.orderItems.create({
     *   data: {
     *     // ... data to create a OrderItems
     *   }
     * })
     * 
     */
    create<T extends OrderItemsCreateArgs>(args: SelectSubset<T, OrderItemsCreateArgs<ExtArgs>>): Prisma__OrderItemsClient<$Result.GetResult<Prisma.$OrderItemsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OrderItems.
     * @param {OrderItemsCreateManyArgs} args - Arguments to create many OrderItems.
     * @example
     * // Create many OrderItems
     * const orderItems = await prisma.orderItems.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderItemsCreateManyArgs>(args?: SelectSubset<T, OrderItemsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OrderItems and returns the data saved in the database.
     * @param {OrderItemsCreateManyAndReturnArgs} args - Arguments to create many OrderItems.
     * @example
     * // Create many OrderItems
     * const orderItems = await prisma.orderItems.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OrderItems and only return the `id`
     * const orderItemsWithIdOnly = await prisma.orderItems.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderItemsCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderItemsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OrderItems.
     * @param {OrderItemsDeleteArgs} args - Arguments to delete one OrderItems.
     * @example
     * // Delete one OrderItems
     * const OrderItems = await prisma.orderItems.delete({
     *   where: {
     *     // ... filter to delete one OrderItems
     *   }
     * })
     * 
     */
    delete<T extends OrderItemsDeleteArgs>(args: SelectSubset<T, OrderItemsDeleteArgs<ExtArgs>>): Prisma__OrderItemsClient<$Result.GetResult<Prisma.$OrderItemsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OrderItems.
     * @param {OrderItemsUpdateArgs} args - Arguments to update one OrderItems.
     * @example
     * // Update one OrderItems
     * const orderItems = await prisma.orderItems.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderItemsUpdateArgs>(args: SelectSubset<T, OrderItemsUpdateArgs<ExtArgs>>): Prisma__OrderItemsClient<$Result.GetResult<Prisma.$OrderItemsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OrderItems.
     * @param {OrderItemsDeleteManyArgs} args - Arguments to filter OrderItems to delete.
     * @example
     * // Delete a few OrderItems
     * const { count } = await prisma.orderItems.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderItemsDeleteManyArgs>(args?: SelectSubset<T, OrderItemsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrderItems
     * const orderItems = await prisma.orderItems.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderItemsUpdateManyArgs>(args: SelectSubset<T, OrderItemsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderItems and returns the data updated in the database.
     * @param {OrderItemsUpdateManyAndReturnArgs} args - Arguments to update many OrderItems.
     * @example
     * // Update many OrderItems
     * const orderItems = await prisma.orderItems.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OrderItems and only return the `id`
     * const orderItemsWithIdOnly = await prisma.orderItems.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrderItemsUpdateManyAndReturnArgs>(args: SelectSubset<T, OrderItemsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OrderItems.
     * @param {OrderItemsUpsertArgs} args - Arguments to update or create a OrderItems.
     * @example
     * // Update or create a OrderItems
     * const orderItems = await prisma.orderItems.upsert({
     *   create: {
     *     // ... data to create a OrderItems
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrderItems we want to update
     *   }
     * })
     */
    upsert<T extends OrderItemsUpsertArgs>(args: SelectSubset<T, OrderItemsUpsertArgs<ExtArgs>>): Prisma__OrderItemsClient<$Result.GetResult<Prisma.$OrderItemsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemsCountArgs} args - Arguments to filter OrderItems to count.
     * @example
     * // Count the number of OrderItems
     * const count = await prisma.orderItems.count({
     *   where: {
     *     // ... the filter for the OrderItems we want to count
     *   }
     * })
    **/
    count<T extends OrderItemsCountArgs>(
      args?: Subset<T, OrderItemsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderItemsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderItemsAggregateArgs>(args: Subset<T, OrderItemsAggregateArgs>): Prisma.PrismaPromise<GetOrderItemsAggregateType<T>>

    /**
     * Group by OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderItemsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderItemsGroupByArgs['orderBy'] }
        : { orderBy?: OrderItemsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderItemsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderItemsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrderItems model
   */
  readonly fields: OrderItemsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrderItems.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderItemsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product_variant<T extends ProductVariantsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductVariantsDefaultArgs<ExtArgs>>): Prisma__ProductVariantsClient<$Result.GetResult<Prisma.$ProductVariantsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    orders<T extends OrdersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrdersDefaultArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OrderItems model
   */
  interface OrderItemsFieldRefs {
    readonly id: FieldRef<"OrderItems", 'String'>
    readonly order_id: FieldRef<"OrderItems", 'String'>
    readonly product_variant_id: FieldRef<"OrderItems", 'String'>
    readonly quantity: FieldRef<"OrderItems", 'Int'>
    readonly unit_price: FieldRef<"OrderItems", 'Decimal'>
    readonly total_price: FieldRef<"OrderItems", 'Decimal'>
    readonly created_at: FieldRef<"OrderItems", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OrderItems findUnique
   */
  export type OrderItemsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItems
     */
    select?: OrderItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItems
     */
    omit?: OrderItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemsInclude<ExtArgs> | null
    /**
     * Filter, which OrderItems to fetch.
     */
    where: OrderItemsWhereUniqueInput
  }

  /**
   * OrderItems findUniqueOrThrow
   */
  export type OrderItemsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItems
     */
    select?: OrderItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItems
     */
    omit?: OrderItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemsInclude<ExtArgs> | null
    /**
     * Filter, which OrderItems to fetch.
     */
    where: OrderItemsWhereUniqueInput
  }

  /**
   * OrderItems findFirst
   */
  export type OrderItemsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItems
     */
    select?: OrderItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItems
     */
    omit?: OrderItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemsInclude<ExtArgs> | null
    /**
     * Filter, which OrderItems to fetch.
     */
    where?: OrderItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemsOrderByWithRelationInput | OrderItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderItems.
     */
    cursor?: OrderItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderItems.
     */
    distinct?: OrderItemsScalarFieldEnum | OrderItemsScalarFieldEnum[]
  }

  /**
   * OrderItems findFirstOrThrow
   */
  export type OrderItemsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItems
     */
    select?: OrderItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItems
     */
    omit?: OrderItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemsInclude<ExtArgs> | null
    /**
     * Filter, which OrderItems to fetch.
     */
    where?: OrderItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemsOrderByWithRelationInput | OrderItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderItems.
     */
    cursor?: OrderItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderItems.
     */
    distinct?: OrderItemsScalarFieldEnum | OrderItemsScalarFieldEnum[]
  }

  /**
   * OrderItems findMany
   */
  export type OrderItemsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItems
     */
    select?: OrderItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItems
     */
    omit?: OrderItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemsInclude<ExtArgs> | null
    /**
     * Filter, which OrderItems to fetch.
     */
    where?: OrderItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemsOrderByWithRelationInput | OrderItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrderItems.
     */
    cursor?: OrderItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    distinct?: OrderItemsScalarFieldEnum | OrderItemsScalarFieldEnum[]
  }

  /**
   * OrderItems create
   */
  export type OrderItemsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItems
     */
    select?: OrderItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItems
     */
    omit?: OrderItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemsInclude<ExtArgs> | null
    /**
     * The data needed to create a OrderItems.
     */
    data: XOR<OrderItemsCreateInput, OrderItemsUncheckedCreateInput>
  }

  /**
   * OrderItems createMany
   */
  export type OrderItemsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrderItems.
     */
    data: OrderItemsCreateManyInput | OrderItemsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OrderItems createManyAndReturn
   */
  export type OrderItemsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItems
     */
    select?: OrderItemsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItems
     */
    omit?: OrderItemsOmit<ExtArgs> | null
    /**
     * The data used to create many OrderItems.
     */
    data: OrderItemsCreateManyInput | OrderItemsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrderItems update
   */
  export type OrderItemsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItems
     */
    select?: OrderItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItems
     */
    omit?: OrderItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemsInclude<ExtArgs> | null
    /**
     * The data needed to update a OrderItems.
     */
    data: XOR<OrderItemsUpdateInput, OrderItemsUncheckedUpdateInput>
    /**
     * Choose, which OrderItems to update.
     */
    where: OrderItemsWhereUniqueInput
  }

  /**
   * OrderItems updateMany
   */
  export type OrderItemsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrderItems.
     */
    data: XOR<OrderItemsUpdateManyMutationInput, OrderItemsUncheckedUpdateManyInput>
    /**
     * Filter which OrderItems to update
     */
    where?: OrderItemsWhereInput
    /**
     * Limit how many OrderItems to update.
     */
    limit?: number
  }

  /**
   * OrderItems updateManyAndReturn
   */
  export type OrderItemsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItems
     */
    select?: OrderItemsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItems
     */
    omit?: OrderItemsOmit<ExtArgs> | null
    /**
     * The data used to update OrderItems.
     */
    data: XOR<OrderItemsUpdateManyMutationInput, OrderItemsUncheckedUpdateManyInput>
    /**
     * Filter which OrderItems to update
     */
    where?: OrderItemsWhereInput
    /**
     * Limit how many OrderItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrderItems upsert
   */
  export type OrderItemsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItems
     */
    select?: OrderItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItems
     */
    omit?: OrderItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemsInclude<ExtArgs> | null
    /**
     * The filter to search for the OrderItems to update in case it exists.
     */
    where: OrderItemsWhereUniqueInput
    /**
     * In case the OrderItems found by the `where` argument doesn't exist, create a new OrderItems with this data.
     */
    create: XOR<OrderItemsCreateInput, OrderItemsUncheckedCreateInput>
    /**
     * In case the OrderItems was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderItemsUpdateInput, OrderItemsUncheckedUpdateInput>
  }

  /**
   * OrderItems delete
   */
  export type OrderItemsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItems
     */
    select?: OrderItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItems
     */
    omit?: OrderItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemsInclude<ExtArgs> | null
    /**
     * Filter which OrderItems to delete.
     */
    where: OrderItemsWhereUniqueInput
  }

  /**
   * OrderItems deleteMany
   */
  export type OrderItemsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderItems to delete
     */
    where?: OrderItemsWhereInput
    /**
     * Limit how many OrderItems to delete.
     */
    limit?: number
  }

  /**
   * OrderItems without action
   */
  export type OrderItemsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItems
     */
    select?: OrderItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItems
     */
    omit?: OrderItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemsInclude<ExtArgs> | null
  }


  /**
   * Model Products
   */

  export type AggregateProducts = {
    _count: ProductsCountAggregateOutputType | null
    _avg: ProductsAvgAggregateOutputType | null
    _sum: ProductsSumAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
  }

  export type ProductsAvgAggregateOutputType = {
    price: Decimal | null
    inventory_quantity: number | null
  }

  export type ProductsSumAggregateOutputType = {
    price: Decimal | null
    inventory_quantity: number | null
  }

  export type ProductsMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    description: string | null
    price: Decimal | null
    inventory_quantity: number | null
    is_available: boolean | null
    category_id: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ProductsMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    description: string | null
    price: Decimal | null
    inventory_quantity: number | null
    is_available: boolean | null
    category_id: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ProductsCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    description: number
    price: number
    inventory_quantity: number
    is_available: number
    category_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ProductsAvgAggregateInputType = {
    price?: true
    inventory_quantity?: true
  }

  export type ProductsSumAggregateInputType = {
    price?: true
    inventory_quantity?: true
  }

  export type ProductsMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    price?: true
    inventory_quantity?: true
    is_available?: true
    category_id?: true
    created_at?: true
    updated_at?: true
  }

  export type ProductsMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    price?: true
    inventory_quantity?: true
    is_available?: true
    category_id?: true
    created_at?: true
    updated_at?: true
  }

  export type ProductsCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    price?: true
    inventory_quantity?: true
    is_available?: true
    category_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ProductsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to aggregate.
     */
    where?: ProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductsOrderByWithRelationInput | ProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductsMaxAggregateInputType
  }

  export type GetProductsAggregateType<T extends ProductsAggregateArgs> = {
        [P in keyof T & keyof AggregateProducts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProducts[P]>
      : GetScalarType<T[P], AggregateProducts[P]>
  }




  export type ProductsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductsWhereInput
    orderBy?: ProductsOrderByWithAggregationInput | ProductsOrderByWithAggregationInput[]
    by: ProductsScalarFieldEnum[] | ProductsScalarFieldEnum
    having?: ProductsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductsCountAggregateInputType | true
    _avg?: ProductsAvgAggregateInputType
    _sum?: ProductsSumAggregateInputType
    _min?: ProductsMinAggregateInputType
    _max?: ProductsMaxAggregateInputType
  }

  export type ProductsGroupByOutputType = {
    id: string
    name: string
    slug: string
    description: string
    price: Decimal
    inventory_quantity: number
    is_available: boolean
    category_id: string
    created_at: Date
    updated_at: Date
    _count: ProductsCountAggregateOutputType | null
    _avg: ProductsAvgAggregateOutputType | null
    _sum: ProductsSumAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
  }

  type GetProductsGroupByPayload<T extends ProductsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductsGroupByOutputType[P]>
            : GetScalarType<T[P], ProductsGroupByOutputType[P]>
        }
      >
    >


  export type ProductsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    price?: boolean
    inventory_quantity?: boolean
    is_available?: boolean
    category_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    product_images?: boolean | Products$product_imagesArgs<ExtArgs>
    product_variant?: boolean | Products$product_variantArgs<ExtArgs>
    _count?: boolean | ProductsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["products"]>

  export type ProductsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    price?: boolean
    inventory_quantity?: boolean
    is_available?: boolean
    category_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["products"]>

  export type ProductsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    price?: boolean
    inventory_quantity?: boolean
    is_available?: boolean
    category_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["products"]>

  export type ProductsSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    price?: boolean
    inventory_quantity?: boolean
    is_available?: boolean
    category_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type ProductsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "description" | "price" | "inventory_quantity" | "is_available" | "category_id" | "created_at" | "updated_at", ExtArgs["result"]["products"]>
  export type ProductsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    product_images?: boolean | Products$product_imagesArgs<ExtArgs>
    product_variant?: boolean | Products$product_variantArgs<ExtArgs>
    _count?: boolean | ProductsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }
  export type ProductsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }

  export type $ProductsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Products"
    objects: {
      category: Prisma.$CategoryPayload<ExtArgs>
      product_images: Prisma.$ProductImagesPayload<ExtArgs>[]
      product_variant: Prisma.$ProductVariantsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      description: string
      price: Prisma.Decimal
      inventory_quantity: number
      is_available: boolean
      category_id: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["products"]>
    composites: {}
  }

  type ProductsGetPayload<S extends boolean | null | undefined | ProductsDefaultArgs> = $Result.GetResult<Prisma.$ProductsPayload, S>

  type ProductsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductsCountAggregateInputType | true
    }

  export interface ProductsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Products'], meta: { name: 'Products' } }
    /**
     * Find zero or one Products that matches the filter.
     * @param {ProductsFindUniqueArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductsFindUniqueArgs>(args: SelectSubset<T, ProductsFindUniqueArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Products that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductsFindUniqueOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductsFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsFindFirstArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductsFindFirstArgs>(args?: SelectSubset<T, ProductsFindFirstArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Products that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsFindFirstOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductsFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.products.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.products.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productsWithIdOnly = await prisma.products.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductsFindManyArgs>(args?: SelectSubset<T, ProductsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Products.
     * @param {ProductsCreateArgs} args - Arguments to create a Products.
     * @example
     * // Create one Products
     * const Products = await prisma.products.create({
     *   data: {
     *     // ... data to create a Products
     *   }
     * })
     * 
     */
    create<T extends ProductsCreateArgs>(args: SelectSubset<T, ProductsCreateArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {ProductsCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const products = await prisma.products.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductsCreateManyArgs>(args?: SelectSubset<T, ProductsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductsCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const products = await prisma.products.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productsWithIdOnly = await prisma.products.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductsCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Products.
     * @param {ProductsDeleteArgs} args - Arguments to delete one Products.
     * @example
     * // Delete one Products
     * const Products = await prisma.products.delete({
     *   where: {
     *     // ... filter to delete one Products
     *   }
     * })
     * 
     */
    delete<T extends ProductsDeleteArgs>(args: SelectSubset<T, ProductsDeleteArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Products.
     * @param {ProductsUpdateArgs} args - Arguments to update one Products.
     * @example
     * // Update one Products
     * const products = await prisma.products.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductsUpdateArgs>(args: SelectSubset<T, ProductsUpdateArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductsDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.products.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductsDeleteManyArgs>(args?: SelectSubset<T, ProductsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const products = await prisma.products.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductsUpdateManyArgs>(args: SelectSubset<T, ProductsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {ProductsUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const products = await prisma.products.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `id`
     * const productsWithIdOnly = await prisma.products.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProductsUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Products.
     * @param {ProductsUpsertArgs} args - Arguments to update or create a Products.
     * @example
     * // Update or create a Products
     * const products = await prisma.products.upsert({
     *   create: {
     *     // ... data to create a Products
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Products we want to update
     *   }
     * })
     */
    upsert<T extends ProductsUpsertArgs>(args: SelectSubset<T, ProductsUpsertArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.products.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductsCountArgs>(
      args?: Subset<T, ProductsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductsAggregateArgs>(args: Subset<T, ProductsAggregateArgs>): Prisma.PrismaPromise<GetProductsAggregateType<T>>

    /**
     * Group by Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductsGroupByArgs['orderBy'] }
        : { orderBy?: ProductsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Products model
   */
  readonly fields: ProductsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Products.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    product_images<T extends Products$product_imagesArgs<ExtArgs> = {}>(args?: Subset<T, Products$product_imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductImagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    product_variant<T extends Products$product_variantArgs<ExtArgs> = {}>(args?: Subset<T, Products$product_variantArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductVariantsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Products model
   */
  interface ProductsFieldRefs {
    readonly id: FieldRef<"Products", 'String'>
    readonly name: FieldRef<"Products", 'String'>
    readonly slug: FieldRef<"Products", 'String'>
    readonly description: FieldRef<"Products", 'String'>
    readonly price: FieldRef<"Products", 'Decimal'>
    readonly inventory_quantity: FieldRef<"Products", 'Int'>
    readonly is_available: FieldRef<"Products", 'Boolean'>
    readonly category_id: FieldRef<"Products", 'String'>
    readonly created_at: FieldRef<"Products", 'DateTime'>
    readonly updated_at: FieldRef<"Products", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Products findUnique
   */
  export type ProductsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where: ProductsWhereUniqueInput
  }

  /**
   * Products findUniqueOrThrow
   */
  export type ProductsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where: ProductsWhereUniqueInput
  }

  /**
   * Products findFirst
   */
  export type ProductsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductsOrderByWithRelationInput | ProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * Products findFirstOrThrow
   */
  export type ProductsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductsOrderByWithRelationInput | ProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * Products findMany
   */
  export type ProductsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductsOrderByWithRelationInput | ProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * Products create
   */
  export type ProductsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * The data needed to create a Products.
     */
    data: XOR<ProductsCreateInput, ProductsUncheckedCreateInput>
  }

  /**
   * Products createMany
   */
  export type ProductsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductsCreateManyInput | ProductsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Products createManyAndReturn
   */
  export type ProductsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * The data used to create many Products.
     */
    data: ProductsCreateManyInput | ProductsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Products update
   */
  export type ProductsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * The data needed to update a Products.
     */
    data: XOR<ProductsUpdateInput, ProductsUncheckedUpdateInput>
    /**
     * Choose, which Products to update.
     */
    where: ProductsWhereUniqueInput
  }

  /**
   * Products updateMany
   */
  export type ProductsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductsUpdateManyMutationInput, ProductsUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductsWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Products updateManyAndReturn
   */
  export type ProductsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * The data used to update Products.
     */
    data: XOR<ProductsUpdateManyMutationInput, ProductsUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductsWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Products upsert
   */
  export type ProductsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * The filter to search for the Products to update in case it exists.
     */
    where: ProductsWhereUniqueInput
    /**
     * In case the Products found by the `where` argument doesn't exist, create a new Products with this data.
     */
    create: XOR<ProductsCreateInput, ProductsUncheckedCreateInput>
    /**
     * In case the Products was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductsUpdateInput, ProductsUncheckedUpdateInput>
  }

  /**
   * Products delete
   */
  export type ProductsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter which Products to delete.
     */
    where: ProductsWhereUniqueInput
  }

  /**
   * Products deleteMany
   */
  export type ProductsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductsWhereInput
    /**
     * Limit how many Products to delete.
     */
    limit?: number
  }

  /**
   * Products.product_images
   */
  export type Products$product_imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImages
     */
    select?: ProductImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImages
     */
    omit?: ProductImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImagesInclude<ExtArgs> | null
    where?: ProductImagesWhereInput
    orderBy?: ProductImagesOrderByWithRelationInput | ProductImagesOrderByWithRelationInput[]
    cursor?: ProductImagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductImagesScalarFieldEnum | ProductImagesScalarFieldEnum[]
  }

  /**
   * Products.product_variant
   */
  export type Products$product_variantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariants
     */
    select?: ProductVariantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariants
     */
    omit?: ProductVariantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantsInclude<ExtArgs> | null
    where?: ProductVariantsWhereInput
    orderBy?: ProductVariantsOrderByWithRelationInput | ProductVariantsOrderByWithRelationInput[]
    cursor?: ProductVariantsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductVariantsScalarFieldEnum | ProductVariantsScalarFieldEnum[]
  }

  /**
   * Products without action
   */
  export type ProductsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
  }


  /**
   * Model ProductImages
   */

  export type AggregateProductImages = {
    _count: ProductImagesCountAggregateOutputType | null
    _avg: ProductImagesAvgAggregateOutputType | null
    _sum: ProductImagesSumAggregateOutputType | null
    _min: ProductImagesMinAggregateOutputType | null
    _max: ProductImagesMaxAggregateOutputType | null
  }

  export type ProductImagesAvgAggregateOutputType = {
    display_order: number | null
  }

  export type ProductImagesSumAggregateOutputType = {
    display_order: number | null
  }

  export type ProductImagesMinAggregateOutputType = {
    id: string | null
    product_id: string | null
    url: string | null
    is_primary: boolean | null
    display_order: number | null
    created_at: Date | null
  }

  export type ProductImagesMaxAggregateOutputType = {
    id: string | null
    product_id: string | null
    url: string | null
    is_primary: boolean | null
    display_order: number | null
    created_at: Date | null
  }

  export type ProductImagesCountAggregateOutputType = {
    id: number
    product_id: number
    url: number
    is_primary: number
    display_order: number
    created_at: number
    _all: number
  }


  export type ProductImagesAvgAggregateInputType = {
    display_order?: true
  }

  export type ProductImagesSumAggregateInputType = {
    display_order?: true
  }

  export type ProductImagesMinAggregateInputType = {
    id?: true
    product_id?: true
    url?: true
    is_primary?: true
    display_order?: true
    created_at?: true
  }

  export type ProductImagesMaxAggregateInputType = {
    id?: true
    product_id?: true
    url?: true
    is_primary?: true
    display_order?: true
    created_at?: true
  }

  export type ProductImagesCountAggregateInputType = {
    id?: true
    product_id?: true
    url?: true
    is_primary?: true
    display_order?: true
    created_at?: true
    _all?: true
  }

  export type ProductImagesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductImages to aggregate.
     */
    where?: ProductImagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductImages to fetch.
     */
    orderBy?: ProductImagesOrderByWithRelationInput | ProductImagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductImagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductImages
    **/
    _count?: true | ProductImagesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductImagesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductImagesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductImagesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductImagesMaxAggregateInputType
  }

  export type GetProductImagesAggregateType<T extends ProductImagesAggregateArgs> = {
        [P in keyof T & keyof AggregateProductImages]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductImages[P]>
      : GetScalarType<T[P], AggregateProductImages[P]>
  }




  export type ProductImagesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductImagesWhereInput
    orderBy?: ProductImagesOrderByWithAggregationInput | ProductImagesOrderByWithAggregationInput[]
    by: ProductImagesScalarFieldEnum[] | ProductImagesScalarFieldEnum
    having?: ProductImagesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductImagesCountAggregateInputType | true
    _avg?: ProductImagesAvgAggregateInputType
    _sum?: ProductImagesSumAggregateInputType
    _min?: ProductImagesMinAggregateInputType
    _max?: ProductImagesMaxAggregateInputType
  }

  export type ProductImagesGroupByOutputType = {
    id: string
    product_id: string
    url: string
    is_primary: boolean
    display_order: number
    created_at: Date
    _count: ProductImagesCountAggregateOutputType | null
    _avg: ProductImagesAvgAggregateOutputType | null
    _sum: ProductImagesSumAggregateOutputType | null
    _min: ProductImagesMinAggregateOutputType | null
    _max: ProductImagesMaxAggregateOutputType | null
  }

  type GetProductImagesGroupByPayload<T extends ProductImagesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductImagesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductImagesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductImagesGroupByOutputType[P]>
            : GetScalarType<T[P], ProductImagesGroupByOutputType[P]>
        }
      >
    >


  export type ProductImagesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    product_id?: boolean
    url?: boolean
    is_primary?: boolean
    display_order?: boolean
    created_at?: boolean
    product?: boolean | ProductsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productImages"]>

  export type ProductImagesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    product_id?: boolean
    url?: boolean
    is_primary?: boolean
    display_order?: boolean
    created_at?: boolean
    product?: boolean | ProductsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productImages"]>

  export type ProductImagesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    product_id?: boolean
    url?: boolean
    is_primary?: boolean
    display_order?: boolean
    created_at?: boolean
    product?: boolean | ProductsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productImages"]>

  export type ProductImagesSelectScalar = {
    id?: boolean
    product_id?: boolean
    url?: boolean
    is_primary?: boolean
    display_order?: boolean
    created_at?: boolean
  }

  export type ProductImagesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "product_id" | "url" | "is_primary" | "display_order" | "created_at", ExtArgs["result"]["productImages"]>
  export type ProductImagesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductsDefaultArgs<ExtArgs>
  }
  export type ProductImagesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductsDefaultArgs<ExtArgs>
  }
  export type ProductImagesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductsDefaultArgs<ExtArgs>
  }

  export type $ProductImagesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductImages"
    objects: {
      product: Prisma.$ProductsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      product_id: string
      url: string
      is_primary: boolean
      display_order: number
      created_at: Date
    }, ExtArgs["result"]["productImages"]>
    composites: {}
  }

  type ProductImagesGetPayload<S extends boolean | null | undefined | ProductImagesDefaultArgs> = $Result.GetResult<Prisma.$ProductImagesPayload, S>

  type ProductImagesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductImagesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductImagesCountAggregateInputType | true
    }

  export interface ProductImagesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductImages'], meta: { name: 'ProductImages' } }
    /**
     * Find zero or one ProductImages that matches the filter.
     * @param {ProductImagesFindUniqueArgs} args - Arguments to find a ProductImages
     * @example
     * // Get one ProductImages
     * const productImages = await prisma.productImages.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductImagesFindUniqueArgs>(args: SelectSubset<T, ProductImagesFindUniqueArgs<ExtArgs>>): Prisma__ProductImagesClient<$Result.GetResult<Prisma.$ProductImagesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductImages that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductImagesFindUniqueOrThrowArgs} args - Arguments to find a ProductImages
     * @example
     * // Get one ProductImages
     * const productImages = await prisma.productImages.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductImagesFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductImagesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductImagesClient<$Result.GetResult<Prisma.$ProductImagesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductImagesFindFirstArgs} args - Arguments to find a ProductImages
     * @example
     * // Get one ProductImages
     * const productImages = await prisma.productImages.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductImagesFindFirstArgs>(args?: SelectSubset<T, ProductImagesFindFirstArgs<ExtArgs>>): Prisma__ProductImagesClient<$Result.GetResult<Prisma.$ProductImagesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductImages that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductImagesFindFirstOrThrowArgs} args - Arguments to find a ProductImages
     * @example
     * // Get one ProductImages
     * const productImages = await prisma.productImages.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductImagesFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductImagesFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductImagesClient<$Result.GetResult<Prisma.$ProductImagesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductImagesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductImages
     * const productImages = await prisma.productImages.findMany()
     * 
     * // Get first 10 ProductImages
     * const productImages = await prisma.productImages.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productImagesWithIdOnly = await prisma.productImages.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductImagesFindManyArgs>(args?: SelectSubset<T, ProductImagesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductImagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductImages.
     * @param {ProductImagesCreateArgs} args - Arguments to create a ProductImages.
     * @example
     * // Create one ProductImages
     * const ProductImages = await prisma.productImages.create({
     *   data: {
     *     // ... data to create a ProductImages
     *   }
     * })
     * 
     */
    create<T extends ProductImagesCreateArgs>(args: SelectSubset<T, ProductImagesCreateArgs<ExtArgs>>): Prisma__ProductImagesClient<$Result.GetResult<Prisma.$ProductImagesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductImages.
     * @param {ProductImagesCreateManyArgs} args - Arguments to create many ProductImages.
     * @example
     * // Create many ProductImages
     * const productImages = await prisma.productImages.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductImagesCreateManyArgs>(args?: SelectSubset<T, ProductImagesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProductImages and returns the data saved in the database.
     * @param {ProductImagesCreateManyAndReturnArgs} args - Arguments to create many ProductImages.
     * @example
     * // Create many ProductImages
     * const productImages = await prisma.productImages.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProductImages and only return the `id`
     * const productImagesWithIdOnly = await prisma.productImages.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductImagesCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductImagesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductImagesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProductImages.
     * @param {ProductImagesDeleteArgs} args - Arguments to delete one ProductImages.
     * @example
     * // Delete one ProductImages
     * const ProductImages = await prisma.productImages.delete({
     *   where: {
     *     // ... filter to delete one ProductImages
     *   }
     * })
     * 
     */
    delete<T extends ProductImagesDeleteArgs>(args: SelectSubset<T, ProductImagesDeleteArgs<ExtArgs>>): Prisma__ProductImagesClient<$Result.GetResult<Prisma.$ProductImagesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductImages.
     * @param {ProductImagesUpdateArgs} args - Arguments to update one ProductImages.
     * @example
     * // Update one ProductImages
     * const productImages = await prisma.productImages.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductImagesUpdateArgs>(args: SelectSubset<T, ProductImagesUpdateArgs<ExtArgs>>): Prisma__ProductImagesClient<$Result.GetResult<Prisma.$ProductImagesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductImages.
     * @param {ProductImagesDeleteManyArgs} args - Arguments to filter ProductImages to delete.
     * @example
     * // Delete a few ProductImages
     * const { count } = await prisma.productImages.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductImagesDeleteManyArgs>(args?: SelectSubset<T, ProductImagesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductImagesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductImages
     * const productImages = await prisma.productImages.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductImagesUpdateManyArgs>(args: SelectSubset<T, ProductImagesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductImages and returns the data updated in the database.
     * @param {ProductImagesUpdateManyAndReturnArgs} args - Arguments to update many ProductImages.
     * @example
     * // Update many ProductImages
     * const productImages = await prisma.productImages.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProductImages and only return the `id`
     * const productImagesWithIdOnly = await prisma.productImages.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProductImagesUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductImagesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductImagesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProductImages.
     * @param {ProductImagesUpsertArgs} args - Arguments to update or create a ProductImages.
     * @example
     * // Update or create a ProductImages
     * const productImages = await prisma.productImages.upsert({
     *   create: {
     *     // ... data to create a ProductImages
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductImages we want to update
     *   }
     * })
     */
    upsert<T extends ProductImagesUpsertArgs>(args: SelectSubset<T, ProductImagesUpsertArgs<ExtArgs>>): Prisma__ProductImagesClient<$Result.GetResult<Prisma.$ProductImagesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProductImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductImagesCountArgs} args - Arguments to filter ProductImages to count.
     * @example
     * // Count the number of ProductImages
     * const count = await prisma.productImages.count({
     *   where: {
     *     // ... the filter for the ProductImages we want to count
     *   }
     * })
    **/
    count<T extends ProductImagesCountArgs>(
      args?: Subset<T, ProductImagesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductImagesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductImagesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductImagesAggregateArgs>(args: Subset<T, ProductImagesAggregateArgs>): Prisma.PrismaPromise<GetProductImagesAggregateType<T>>

    /**
     * Group by ProductImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductImagesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductImagesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductImagesGroupByArgs['orderBy'] }
        : { orderBy?: ProductImagesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductImagesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductImagesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductImages model
   */
  readonly fields: ProductImagesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductImages.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductImagesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductsDefaultArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProductImages model
   */
  interface ProductImagesFieldRefs {
    readonly id: FieldRef<"ProductImages", 'String'>
    readonly product_id: FieldRef<"ProductImages", 'String'>
    readonly url: FieldRef<"ProductImages", 'String'>
    readonly is_primary: FieldRef<"ProductImages", 'Boolean'>
    readonly display_order: FieldRef<"ProductImages", 'Int'>
    readonly created_at: FieldRef<"ProductImages", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProductImages findUnique
   */
  export type ProductImagesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImages
     */
    select?: ProductImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImages
     */
    omit?: ProductImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImagesInclude<ExtArgs> | null
    /**
     * Filter, which ProductImages to fetch.
     */
    where: ProductImagesWhereUniqueInput
  }

  /**
   * ProductImages findUniqueOrThrow
   */
  export type ProductImagesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImages
     */
    select?: ProductImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImages
     */
    omit?: ProductImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImagesInclude<ExtArgs> | null
    /**
     * Filter, which ProductImages to fetch.
     */
    where: ProductImagesWhereUniqueInput
  }

  /**
   * ProductImages findFirst
   */
  export type ProductImagesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImages
     */
    select?: ProductImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImages
     */
    omit?: ProductImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImagesInclude<ExtArgs> | null
    /**
     * Filter, which ProductImages to fetch.
     */
    where?: ProductImagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductImages to fetch.
     */
    orderBy?: ProductImagesOrderByWithRelationInput | ProductImagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductImages.
     */
    cursor?: ProductImagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductImages.
     */
    distinct?: ProductImagesScalarFieldEnum | ProductImagesScalarFieldEnum[]
  }

  /**
   * ProductImages findFirstOrThrow
   */
  export type ProductImagesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImages
     */
    select?: ProductImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImages
     */
    omit?: ProductImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImagesInclude<ExtArgs> | null
    /**
     * Filter, which ProductImages to fetch.
     */
    where?: ProductImagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductImages to fetch.
     */
    orderBy?: ProductImagesOrderByWithRelationInput | ProductImagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductImages.
     */
    cursor?: ProductImagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductImages.
     */
    distinct?: ProductImagesScalarFieldEnum | ProductImagesScalarFieldEnum[]
  }

  /**
   * ProductImages findMany
   */
  export type ProductImagesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImages
     */
    select?: ProductImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImages
     */
    omit?: ProductImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImagesInclude<ExtArgs> | null
    /**
     * Filter, which ProductImages to fetch.
     */
    where?: ProductImagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductImages to fetch.
     */
    orderBy?: ProductImagesOrderByWithRelationInput | ProductImagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductImages.
     */
    cursor?: ProductImagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductImages.
     */
    skip?: number
    distinct?: ProductImagesScalarFieldEnum | ProductImagesScalarFieldEnum[]
  }

  /**
   * ProductImages create
   */
  export type ProductImagesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImages
     */
    select?: ProductImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImages
     */
    omit?: ProductImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImagesInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductImages.
     */
    data: XOR<ProductImagesCreateInput, ProductImagesUncheckedCreateInput>
  }

  /**
   * ProductImages createMany
   */
  export type ProductImagesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductImages.
     */
    data: ProductImagesCreateManyInput | ProductImagesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductImages createManyAndReturn
   */
  export type ProductImagesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImages
     */
    select?: ProductImagesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImages
     */
    omit?: ProductImagesOmit<ExtArgs> | null
    /**
     * The data used to create many ProductImages.
     */
    data: ProductImagesCreateManyInput | ProductImagesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImagesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductImages update
   */
  export type ProductImagesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImages
     */
    select?: ProductImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImages
     */
    omit?: ProductImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImagesInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductImages.
     */
    data: XOR<ProductImagesUpdateInput, ProductImagesUncheckedUpdateInput>
    /**
     * Choose, which ProductImages to update.
     */
    where: ProductImagesWhereUniqueInput
  }

  /**
   * ProductImages updateMany
   */
  export type ProductImagesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductImages.
     */
    data: XOR<ProductImagesUpdateManyMutationInput, ProductImagesUncheckedUpdateManyInput>
    /**
     * Filter which ProductImages to update
     */
    where?: ProductImagesWhereInput
    /**
     * Limit how many ProductImages to update.
     */
    limit?: number
  }

  /**
   * ProductImages updateManyAndReturn
   */
  export type ProductImagesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImages
     */
    select?: ProductImagesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImages
     */
    omit?: ProductImagesOmit<ExtArgs> | null
    /**
     * The data used to update ProductImages.
     */
    data: XOR<ProductImagesUpdateManyMutationInput, ProductImagesUncheckedUpdateManyInput>
    /**
     * Filter which ProductImages to update
     */
    where?: ProductImagesWhereInput
    /**
     * Limit how many ProductImages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImagesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductImages upsert
   */
  export type ProductImagesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImages
     */
    select?: ProductImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImages
     */
    omit?: ProductImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImagesInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductImages to update in case it exists.
     */
    where: ProductImagesWhereUniqueInput
    /**
     * In case the ProductImages found by the `where` argument doesn't exist, create a new ProductImages with this data.
     */
    create: XOR<ProductImagesCreateInput, ProductImagesUncheckedCreateInput>
    /**
     * In case the ProductImages was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductImagesUpdateInput, ProductImagesUncheckedUpdateInput>
  }

  /**
   * ProductImages delete
   */
  export type ProductImagesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImages
     */
    select?: ProductImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImages
     */
    omit?: ProductImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImagesInclude<ExtArgs> | null
    /**
     * Filter which ProductImages to delete.
     */
    where: ProductImagesWhereUniqueInput
  }

  /**
   * ProductImages deleteMany
   */
  export type ProductImagesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductImages to delete
     */
    where?: ProductImagesWhereInput
    /**
     * Limit how many ProductImages to delete.
     */
    limit?: number
  }

  /**
   * ProductImages without action
   */
  export type ProductImagesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImages
     */
    select?: ProductImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImages
     */
    omit?: ProductImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImagesInclude<ExtArgs> | null
  }


  /**
   * Model ProductVariants
   */

  export type AggregateProductVariants = {
    _count: ProductVariantsCountAggregateOutputType | null
    _avg: ProductVariantsAvgAggregateOutputType | null
    _sum: ProductVariantsSumAggregateOutputType | null
    _min: ProductVariantsMinAggregateOutputType | null
    _max: ProductVariantsMaxAggregateOutputType | null
  }

  export type ProductVariantsAvgAggregateOutputType = {
    price: Decimal | null
    inventory_quantity: number | null
  }

  export type ProductVariantsSumAggregateOutputType = {
    price: Decimal | null
    inventory_quantity: number | null
  }

  export type ProductVariantsMinAggregateOutputType = {
    id: string | null
    product_id: string | null
    name: string | null
    sku: string | null
    price: Decimal | null
    inventory_quantity: number | null
    option1_value: string | null
    option2_value: string | null
    option3_value: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ProductVariantsMaxAggregateOutputType = {
    id: string | null
    product_id: string | null
    name: string | null
    sku: string | null
    price: Decimal | null
    inventory_quantity: number | null
    option1_value: string | null
    option2_value: string | null
    option3_value: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ProductVariantsCountAggregateOutputType = {
    id: number
    product_id: number
    name: number
    sku: number
    price: number
    inventory_quantity: number
    option1_value: number
    option2_value: number
    option3_value: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ProductVariantsAvgAggregateInputType = {
    price?: true
    inventory_quantity?: true
  }

  export type ProductVariantsSumAggregateInputType = {
    price?: true
    inventory_quantity?: true
  }

  export type ProductVariantsMinAggregateInputType = {
    id?: true
    product_id?: true
    name?: true
    sku?: true
    price?: true
    inventory_quantity?: true
    option1_value?: true
    option2_value?: true
    option3_value?: true
    created_at?: true
    updated_at?: true
  }

  export type ProductVariantsMaxAggregateInputType = {
    id?: true
    product_id?: true
    name?: true
    sku?: true
    price?: true
    inventory_quantity?: true
    option1_value?: true
    option2_value?: true
    option3_value?: true
    created_at?: true
    updated_at?: true
  }

  export type ProductVariantsCountAggregateInputType = {
    id?: true
    product_id?: true
    name?: true
    sku?: true
    price?: true
    inventory_quantity?: true
    option1_value?: true
    option2_value?: true
    option3_value?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ProductVariantsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductVariants to aggregate.
     */
    where?: ProductVariantsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductVariants to fetch.
     */
    orderBy?: ProductVariantsOrderByWithRelationInput | ProductVariantsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductVariantsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductVariants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductVariants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductVariants
    **/
    _count?: true | ProductVariantsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductVariantsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductVariantsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductVariantsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductVariantsMaxAggregateInputType
  }

  export type GetProductVariantsAggregateType<T extends ProductVariantsAggregateArgs> = {
        [P in keyof T & keyof AggregateProductVariants]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductVariants[P]>
      : GetScalarType<T[P], AggregateProductVariants[P]>
  }




  export type ProductVariantsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductVariantsWhereInput
    orderBy?: ProductVariantsOrderByWithAggregationInput | ProductVariantsOrderByWithAggregationInput[]
    by: ProductVariantsScalarFieldEnum[] | ProductVariantsScalarFieldEnum
    having?: ProductVariantsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductVariantsCountAggregateInputType | true
    _avg?: ProductVariantsAvgAggregateInputType
    _sum?: ProductVariantsSumAggregateInputType
    _min?: ProductVariantsMinAggregateInputType
    _max?: ProductVariantsMaxAggregateInputType
  }

  export type ProductVariantsGroupByOutputType = {
    id: string
    product_id: string
    name: string
    sku: string
    price: Decimal | null
    inventory_quantity: number
    option1_value: string | null
    option2_value: string | null
    option3_value: string | null
    created_at: Date
    updated_at: Date
    _count: ProductVariantsCountAggregateOutputType | null
    _avg: ProductVariantsAvgAggregateOutputType | null
    _sum: ProductVariantsSumAggregateOutputType | null
    _min: ProductVariantsMinAggregateOutputType | null
    _max: ProductVariantsMaxAggregateOutputType | null
  }

  type GetProductVariantsGroupByPayload<T extends ProductVariantsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductVariantsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductVariantsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductVariantsGroupByOutputType[P]>
            : GetScalarType<T[P], ProductVariantsGroupByOutputType[P]>
        }
      >
    >


  export type ProductVariantsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    product_id?: boolean
    name?: boolean
    sku?: boolean
    price?: boolean
    inventory_quantity?: boolean
    option1_value?: boolean
    option2_value?: boolean
    option3_value?: boolean
    created_at?: boolean
    updated_at?: boolean
    product?: boolean | ProductsDefaultArgs<ExtArgs>
    cart_items?: boolean | ProductVariants$cart_itemsArgs<ExtArgs>
    order_items?: boolean | ProductVariants$order_itemsArgs<ExtArgs>
    _count?: boolean | ProductVariantsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productVariants"]>

  export type ProductVariantsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    product_id?: boolean
    name?: boolean
    sku?: boolean
    price?: boolean
    inventory_quantity?: boolean
    option1_value?: boolean
    option2_value?: boolean
    option3_value?: boolean
    created_at?: boolean
    updated_at?: boolean
    product?: boolean | ProductsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productVariants"]>

  export type ProductVariantsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    product_id?: boolean
    name?: boolean
    sku?: boolean
    price?: boolean
    inventory_quantity?: boolean
    option1_value?: boolean
    option2_value?: boolean
    option3_value?: boolean
    created_at?: boolean
    updated_at?: boolean
    product?: boolean | ProductsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productVariants"]>

  export type ProductVariantsSelectScalar = {
    id?: boolean
    product_id?: boolean
    name?: boolean
    sku?: boolean
    price?: boolean
    inventory_quantity?: boolean
    option1_value?: boolean
    option2_value?: boolean
    option3_value?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type ProductVariantsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "product_id" | "name" | "sku" | "price" | "inventory_quantity" | "option1_value" | "option2_value" | "option3_value" | "created_at" | "updated_at", ExtArgs["result"]["productVariants"]>
  export type ProductVariantsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductsDefaultArgs<ExtArgs>
    cart_items?: boolean | ProductVariants$cart_itemsArgs<ExtArgs>
    order_items?: boolean | ProductVariants$order_itemsArgs<ExtArgs>
    _count?: boolean | ProductVariantsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductVariantsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductsDefaultArgs<ExtArgs>
  }
  export type ProductVariantsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductsDefaultArgs<ExtArgs>
  }

  export type $ProductVariantsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductVariants"
    objects: {
      product: Prisma.$ProductsPayload<ExtArgs>
      cart_items: Prisma.$CartItemsPayload<ExtArgs>[]
      order_items: Prisma.$OrderItemsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      product_id: string
      name: string
      sku: string
      price: Prisma.Decimal | null
      inventory_quantity: number
      option1_value: string | null
      option2_value: string | null
      option3_value: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["productVariants"]>
    composites: {}
  }

  type ProductVariantsGetPayload<S extends boolean | null | undefined | ProductVariantsDefaultArgs> = $Result.GetResult<Prisma.$ProductVariantsPayload, S>

  type ProductVariantsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductVariantsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductVariantsCountAggregateInputType | true
    }

  export interface ProductVariantsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductVariants'], meta: { name: 'ProductVariants' } }
    /**
     * Find zero or one ProductVariants that matches the filter.
     * @param {ProductVariantsFindUniqueArgs} args - Arguments to find a ProductVariants
     * @example
     * // Get one ProductVariants
     * const productVariants = await prisma.productVariants.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductVariantsFindUniqueArgs>(args: SelectSubset<T, ProductVariantsFindUniqueArgs<ExtArgs>>): Prisma__ProductVariantsClient<$Result.GetResult<Prisma.$ProductVariantsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductVariants that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductVariantsFindUniqueOrThrowArgs} args - Arguments to find a ProductVariants
     * @example
     * // Get one ProductVariants
     * const productVariants = await prisma.productVariants.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductVariantsFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductVariantsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductVariantsClient<$Result.GetResult<Prisma.$ProductVariantsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductVariants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVariantsFindFirstArgs} args - Arguments to find a ProductVariants
     * @example
     * // Get one ProductVariants
     * const productVariants = await prisma.productVariants.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductVariantsFindFirstArgs>(args?: SelectSubset<T, ProductVariantsFindFirstArgs<ExtArgs>>): Prisma__ProductVariantsClient<$Result.GetResult<Prisma.$ProductVariantsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductVariants that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVariantsFindFirstOrThrowArgs} args - Arguments to find a ProductVariants
     * @example
     * // Get one ProductVariants
     * const productVariants = await prisma.productVariants.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductVariantsFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductVariantsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductVariantsClient<$Result.GetResult<Prisma.$ProductVariantsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductVariants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVariantsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductVariants
     * const productVariants = await prisma.productVariants.findMany()
     * 
     * // Get first 10 ProductVariants
     * const productVariants = await prisma.productVariants.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productVariantsWithIdOnly = await prisma.productVariants.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductVariantsFindManyArgs>(args?: SelectSubset<T, ProductVariantsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductVariantsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductVariants.
     * @param {ProductVariantsCreateArgs} args - Arguments to create a ProductVariants.
     * @example
     * // Create one ProductVariants
     * const ProductVariants = await prisma.productVariants.create({
     *   data: {
     *     // ... data to create a ProductVariants
     *   }
     * })
     * 
     */
    create<T extends ProductVariantsCreateArgs>(args: SelectSubset<T, ProductVariantsCreateArgs<ExtArgs>>): Prisma__ProductVariantsClient<$Result.GetResult<Prisma.$ProductVariantsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductVariants.
     * @param {ProductVariantsCreateManyArgs} args - Arguments to create many ProductVariants.
     * @example
     * // Create many ProductVariants
     * const productVariants = await prisma.productVariants.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductVariantsCreateManyArgs>(args?: SelectSubset<T, ProductVariantsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProductVariants and returns the data saved in the database.
     * @param {ProductVariantsCreateManyAndReturnArgs} args - Arguments to create many ProductVariants.
     * @example
     * // Create many ProductVariants
     * const productVariants = await prisma.productVariants.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProductVariants and only return the `id`
     * const productVariantsWithIdOnly = await prisma.productVariants.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductVariantsCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductVariantsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductVariantsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProductVariants.
     * @param {ProductVariantsDeleteArgs} args - Arguments to delete one ProductVariants.
     * @example
     * // Delete one ProductVariants
     * const ProductVariants = await prisma.productVariants.delete({
     *   where: {
     *     // ... filter to delete one ProductVariants
     *   }
     * })
     * 
     */
    delete<T extends ProductVariantsDeleteArgs>(args: SelectSubset<T, ProductVariantsDeleteArgs<ExtArgs>>): Prisma__ProductVariantsClient<$Result.GetResult<Prisma.$ProductVariantsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductVariants.
     * @param {ProductVariantsUpdateArgs} args - Arguments to update one ProductVariants.
     * @example
     * // Update one ProductVariants
     * const productVariants = await prisma.productVariants.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductVariantsUpdateArgs>(args: SelectSubset<T, ProductVariantsUpdateArgs<ExtArgs>>): Prisma__ProductVariantsClient<$Result.GetResult<Prisma.$ProductVariantsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductVariants.
     * @param {ProductVariantsDeleteManyArgs} args - Arguments to filter ProductVariants to delete.
     * @example
     * // Delete a few ProductVariants
     * const { count } = await prisma.productVariants.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductVariantsDeleteManyArgs>(args?: SelectSubset<T, ProductVariantsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductVariants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVariantsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductVariants
     * const productVariants = await prisma.productVariants.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductVariantsUpdateManyArgs>(args: SelectSubset<T, ProductVariantsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductVariants and returns the data updated in the database.
     * @param {ProductVariantsUpdateManyAndReturnArgs} args - Arguments to update many ProductVariants.
     * @example
     * // Update many ProductVariants
     * const productVariants = await prisma.productVariants.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProductVariants and only return the `id`
     * const productVariantsWithIdOnly = await prisma.productVariants.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProductVariantsUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductVariantsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductVariantsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProductVariants.
     * @param {ProductVariantsUpsertArgs} args - Arguments to update or create a ProductVariants.
     * @example
     * // Update or create a ProductVariants
     * const productVariants = await prisma.productVariants.upsert({
     *   create: {
     *     // ... data to create a ProductVariants
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductVariants we want to update
     *   }
     * })
     */
    upsert<T extends ProductVariantsUpsertArgs>(args: SelectSubset<T, ProductVariantsUpsertArgs<ExtArgs>>): Prisma__ProductVariantsClient<$Result.GetResult<Prisma.$ProductVariantsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProductVariants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVariantsCountArgs} args - Arguments to filter ProductVariants to count.
     * @example
     * // Count the number of ProductVariants
     * const count = await prisma.productVariants.count({
     *   where: {
     *     // ... the filter for the ProductVariants we want to count
     *   }
     * })
    **/
    count<T extends ProductVariantsCountArgs>(
      args?: Subset<T, ProductVariantsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductVariantsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductVariants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVariantsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductVariantsAggregateArgs>(args: Subset<T, ProductVariantsAggregateArgs>): Prisma.PrismaPromise<GetProductVariantsAggregateType<T>>

    /**
     * Group by ProductVariants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVariantsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductVariantsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductVariantsGroupByArgs['orderBy'] }
        : { orderBy?: ProductVariantsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductVariantsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductVariantsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductVariants model
   */
  readonly fields: ProductVariantsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductVariants.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductVariantsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductsDefaultArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    cart_items<T extends ProductVariants$cart_itemsArgs<ExtArgs> = {}>(args?: Subset<T, ProductVariants$cart_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartItemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    order_items<T extends ProductVariants$order_itemsArgs<ExtArgs> = {}>(args?: Subset<T, ProductVariants$order_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProductVariants model
   */
  interface ProductVariantsFieldRefs {
    readonly id: FieldRef<"ProductVariants", 'String'>
    readonly product_id: FieldRef<"ProductVariants", 'String'>
    readonly name: FieldRef<"ProductVariants", 'String'>
    readonly sku: FieldRef<"ProductVariants", 'String'>
    readonly price: FieldRef<"ProductVariants", 'Decimal'>
    readonly inventory_quantity: FieldRef<"ProductVariants", 'Int'>
    readonly option1_value: FieldRef<"ProductVariants", 'String'>
    readonly option2_value: FieldRef<"ProductVariants", 'String'>
    readonly option3_value: FieldRef<"ProductVariants", 'String'>
    readonly created_at: FieldRef<"ProductVariants", 'DateTime'>
    readonly updated_at: FieldRef<"ProductVariants", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProductVariants findUnique
   */
  export type ProductVariantsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariants
     */
    select?: ProductVariantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariants
     */
    omit?: ProductVariantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantsInclude<ExtArgs> | null
    /**
     * Filter, which ProductVariants to fetch.
     */
    where: ProductVariantsWhereUniqueInput
  }

  /**
   * ProductVariants findUniqueOrThrow
   */
  export type ProductVariantsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariants
     */
    select?: ProductVariantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariants
     */
    omit?: ProductVariantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantsInclude<ExtArgs> | null
    /**
     * Filter, which ProductVariants to fetch.
     */
    where: ProductVariantsWhereUniqueInput
  }

  /**
   * ProductVariants findFirst
   */
  export type ProductVariantsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariants
     */
    select?: ProductVariantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariants
     */
    omit?: ProductVariantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantsInclude<ExtArgs> | null
    /**
     * Filter, which ProductVariants to fetch.
     */
    where?: ProductVariantsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductVariants to fetch.
     */
    orderBy?: ProductVariantsOrderByWithRelationInput | ProductVariantsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductVariants.
     */
    cursor?: ProductVariantsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductVariants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductVariants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductVariants.
     */
    distinct?: ProductVariantsScalarFieldEnum | ProductVariantsScalarFieldEnum[]
  }

  /**
   * ProductVariants findFirstOrThrow
   */
  export type ProductVariantsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariants
     */
    select?: ProductVariantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariants
     */
    omit?: ProductVariantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantsInclude<ExtArgs> | null
    /**
     * Filter, which ProductVariants to fetch.
     */
    where?: ProductVariantsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductVariants to fetch.
     */
    orderBy?: ProductVariantsOrderByWithRelationInput | ProductVariantsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductVariants.
     */
    cursor?: ProductVariantsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductVariants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductVariants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductVariants.
     */
    distinct?: ProductVariantsScalarFieldEnum | ProductVariantsScalarFieldEnum[]
  }

  /**
   * ProductVariants findMany
   */
  export type ProductVariantsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariants
     */
    select?: ProductVariantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariants
     */
    omit?: ProductVariantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantsInclude<ExtArgs> | null
    /**
     * Filter, which ProductVariants to fetch.
     */
    where?: ProductVariantsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductVariants to fetch.
     */
    orderBy?: ProductVariantsOrderByWithRelationInput | ProductVariantsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductVariants.
     */
    cursor?: ProductVariantsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductVariants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductVariants.
     */
    skip?: number
    distinct?: ProductVariantsScalarFieldEnum | ProductVariantsScalarFieldEnum[]
  }

  /**
   * ProductVariants create
   */
  export type ProductVariantsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariants
     */
    select?: ProductVariantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariants
     */
    omit?: ProductVariantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantsInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductVariants.
     */
    data: XOR<ProductVariantsCreateInput, ProductVariantsUncheckedCreateInput>
  }

  /**
   * ProductVariants createMany
   */
  export type ProductVariantsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductVariants.
     */
    data: ProductVariantsCreateManyInput | ProductVariantsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductVariants createManyAndReturn
   */
  export type ProductVariantsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariants
     */
    select?: ProductVariantsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariants
     */
    omit?: ProductVariantsOmit<ExtArgs> | null
    /**
     * The data used to create many ProductVariants.
     */
    data: ProductVariantsCreateManyInput | ProductVariantsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductVariants update
   */
  export type ProductVariantsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariants
     */
    select?: ProductVariantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariants
     */
    omit?: ProductVariantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantsInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductVariants.
     */
    data: XOR<ProductVariantsUpdateInput, ProductVariantsUncheckedUpdateInput>
    /**
     * Choose, which ProductVariants to update.
     */
    where: ProductVariantsWhereUniqueInput
  }

  /**
   * ProductVariants updateMany
   */
  export type ProductVariantsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductVariants.
     */
    data: XOR<ProductVariantsUpdateManyMutationInput, ProductVariantsUncheckedUpdateManyInput>
    /**
     * Filter which ProductVariants to update
     */
    where?: ProductVariantsWhereInput
    /**
     * Limit how many ProductVariants to update.
     */
    limit?: number
  }

  /**
   * ProductVariants updateManyAndReturn
   */
  export type ProductVariantsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariants
     */
    select?: ProductVariantsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariants
     */
    omit?: ProductVariantsOmit<ExtArgs> | null
    /**
     * The data used to update ProductVariants.
     */
    data: XOR<ProductVariantsUpdateManyMutationInput, ProductVariantsUncheckedUpdateManyInput>
    /**
     * Filter which ProductVariants to update
     */
    where?: ProductVariantsWhereInput
    /**
     * Limit how many ProductVariants to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductVariants upsert
   */
  export type ProductVariantsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariants
     */
    select?: ProductVariantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariants
     */
    omit?: ProductVariantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantsInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductVariants to update in case it exists.
     */
    where: ProductVariantsWhereUniqueInput
    /**
     * In case the ProductVariants found by the `where` argument doesn't exist, create a new ProductVariants with this data.
     */
    create: XOR<ProductVariantsCreateInput, ProductVariantsUncheckedCreateInput>
    /**
     * In case the ProductVariants was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductVariantsUpdateInput, ProductVariantsUncheckedUpdateInput>
  }

  /**
   * ProductVariants delete
   */
  export type ProductVariantsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariants
     */
    select?: ProductVariantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariants
     */
    omit?: ProductVariantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantsInclude<ExtArgs> | null
    /**
     * Filter which ProductVariants to delete.
     */
    where: ProductVariantsWhereUniqueInput
  }

  /**
   * ProductVariants deleteMany
   */
  export type ProductVariantsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductVariants to delete
     */
    where?: ProductVariantsWhereInput
    /**
     * Limit how many ProductVariants to delete.
     */
    limit?: number
  }

  /**
   * ProductVariants.cart_items
   */
  export type ProductVariants$cart_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItems
     */
    select?: CartItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItems
     */
    omit?: CartItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemsInclude<ExtArgs> | null
    where?: CartItemsWhereInput
    orderBy?: CartItemsOrderByWithRelationInput | CartItemsOrderByWithRelationInput[]
    cursor?: CartItemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CartItemsScalarFieldEnum | CartItemsScalarFieldEnum[]
  }

  /**
   * ProductVariants.order_items
   */
  export type ProductVariants$order_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItems
     */
    select?: OrderItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItems
     */
    omit?: OrderItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemsInclude<ExtArgs> | null
    where?: OrderItemsWhereInput
    orderBy?: OrderItemsOrderByWithRelationInput | OrderItemsOrderByWithRelationInput[]
    cursor?: OrderItemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderItemsScalarFieldEnum | OrderItemsScalarFieldEnum[]
  }

  /**
   * ProductVariants without action
   */
  export type ProductVariantsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariants
     */
    select?: ProductVariantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariants
     */
    omit?: ProductVariantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantsInclude<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    display_order: number | null
  }

  export type CategorySumAggregateOutputType = {
    display_order: number | null
  }

  export type CategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    description: string | null
    image_url: string | null
    display_order: number | null
    parent_id: string | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    description: string | null
    image_url: string | null
    display_order: number | null
    parent_id: string | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    description: number
    image_url: number
    display_order: number
    parent_id: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    display_order?: true
  }

  export type CategorySumAggregateInputType = {
    display_order?: true
  }

  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    image_url?: true
    display_order?: true
    parent_id?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    image_url?: true
    display_order?: true
    parent_id?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    image_url?: true
    display_order?: true
    parent_id?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: string
    name: string
    slug: string
    description: string | null
    image_url: string | null
    display_order: number
    parent_id: string | null
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    image_url?: boolean
    display_order?: boolean
    parent_id?: boolean
    parent?: boolean | Category$parentArgs<ExtArgs>
    subcategories?: boolean | Category$subcategoriesArgs<ExtArgs>
    products?: boolean | Category$productsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    image_url?: boolean
    display_order?: boolean
    parent_id?: boolean
    parent?: boolean | Category$parentArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    image_url?: boolean
    display_order?: boolean
    parent_id?: boolean
    parent?: boolean | Category$parentArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    image_url?: boolean
    display_order?: boolean
    parent_id?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "description" | "image_url" | "display_order" | "parent_id", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | Category$parentArgs<ExtArgs>
    subcategories?: boolean | Category$subcategoriesArgs<ExtArgs>
    products?: boolean | Category$productsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | Category$parentArgs<ExtArgs>
  }
  export type CategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | Category$parentArgs<ExtArgs>
  }

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      parent: Prisma.$CategoryPayload<ExtArgs> | null
      subcategories: Prisma.$CategoryPayload<ExtArgs>[]
      products: Prisma.$ProductsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      description: string | null
      image_url: string | null
      display_order: number
      parent_id: string | null
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    parent<T extends Category$parentArgs<ExtArgs> = {}>(args?: Subset<T, Category$parentArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    subcategories<T extends Category$subcategoriesArgs<ExtArgs> = {}>(args?: Subset<T, Category$subcategoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    products<T extends Category$productsArgs<ExtArgs> = {}>(args?: Subset<T, Category$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'String'>
    readonly name: FieldRef<"Category", 'String'>
    readonly slug: FieldRef<"Category", 'String'>
    readonly description: FieldRef<"Category", 'String'>
    readonly image_url: FieldRef<"Category", 'String'>
    readonly display_order: FieldRef<"Category", 'Int'>
    readonly parent_id: FieldRef<"Category", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category updateManyAndReturn
   */
  export type CategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category.parent
   */
  export type Category$parentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
  }

  /**
   * Category.subcategories
   */
  export type Category$subcategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    cursor?: CategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category.products
   */
  export type Category$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    where?: ProductsWhereInput
    orderBy?: ProductsOrderByWithRelationInput | ProductsOrderByWithRelationInput[]
    cursor?: ProductsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password_hash: string | null
    first_name: string | null
    last_name: string | null
    role: $Enums.Role | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password_hash: string | null
    first_name: string | null
    last_name: string | null
    role: $Enums.Role | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password_hash: number
    first_name: number
    last_name: number
    role: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password_hash?: true
    first_name?: true
    last_name?: true
    role?: true
    created_at?: true
    updated_at?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password_hash?: true
    first_name?: true
    last_name?: true
    role?: true
    created_at?: true
    updated_at?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password_hash?: true
    first_name?: true
    last_name?: true
    role?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password_hash: string
    first_name: string
    last_name: string
    role: $Enums.Role
    created_at: Date
    updated_at: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password_hash?: boolean
    first_name?: boolean
    last_name?: boolean
    role?: boolean
    created_at?: boolean
    updated_at?: boolean
    user_profile?: boolean | User$user_profileArgs<ExtArgs>
    cart?: boolean | User$cartArgs<ExtArgs>
    orders?: boolean | User$ordersArgs<ExtArgs>
    address?: boolean | User$addressArgs<ExtArgs>
    session?: boolean | User$sessionArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password_hash?: boolean
    first_name?: boolean
    last_name?: boolean
    role?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password_hash?: boolean
    first_name?: boolean
    last_name?: boolean
    role?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password_hash?: boolean
    first_name?: boolean
    last_name?: boolean
    role?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password_hash" | "first_name" | "last_name" | "role" | "created_at" | "updated_at", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_profile?: boolean | User$user_profileArgs<ExtArgs>
    cart?: boolean | User$cartArgs<ExtArgs>
    orders?: boolean | User$ordersArgs<ExtArgs>
    address?: boolean | User$addressArgs<ExtArgs>
    session?: boolean | User$sessionArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      user_profile: Prisma.$UserProfilePayload<ExtArgs>[]
      cart: Prisma.$CartsPayload<ExtArgs>[]
      orders: Prisma.$OrdersPayload<ExtArgs>[]
      address: Prisma.$AddressPayload<ExtArgs>[]
      session: Prisma.$SessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password_hash: string
      first_name: string
      last_name: string
      role: $Enums.Role
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user_profile<T extends User$user_profileArgs<ExtArgs> = {}>(args?: Subset<T, User$user_profileArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    cart<T extends User$cartArgs<ExtArgs> = {}>(args?: Subset<T, User$cartArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    orders<T extends User$ordersArgs<ExtArgs> = {}>(args?: Subset<T, User$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    address<T extends User$addressArgs<ExtArgs> = {}>(args?: Subset<T, User$addressArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    session<T extends User$sessionArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password_hash: FieldRef<"User", 'String'>
    readonly first_name: FieldRef<"User", 'String'>
    readonly last_name: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly created_at: FieldRef<"User", 'DateTime'>
    readonly updated_at: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.user_profile
   */
  export type User$user_profileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    where?: UserProfileWhereInput
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    cursor?: UserProfileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserProfileScalarFieldEnum | UserProfileScalarFieldEnum[]
  }

  /**
   * User.cart
   */
  export type User$cartArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carts
     */
    select?: CartsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carts
     */
    omit?: CartsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartsInclude<ExtArgs> | null
    where?: CartsWhereInput
    orderBy?: CartsOrderByWithRelationInput | CartsOrderByWithRelationInput[]
    cursor?: CartsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CartsScalarFieldEnum | CartsScalarFieldEnum[]
  }

  /**
   * User.orders
   */
  export type User$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    where?: OrdersWhereInput
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    cursor?: OrdersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * User.address
   */
  export type User$addressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    where?: AddressWhereInput
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    cursor?: AddressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * User.session
   */
  export type User$sessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model UserProfile
   */

  export type AggregateUserProfile = {
    _count: UserProfileCountAggregateOutputType | null
    _min: UserProfileMinAggregateOutputType | null
    _max: UserProfileMaxAggregateOutputType | null
  }

  export type UserProfileMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    phone: string | null
    address_line1: string | null
    address_line2: string | null
    city: string | null
    state: string | null
    postal_code: string | null
    country: string | null
    avatar_url: string | null
    updated_at: Date | null
  }

  export type UserProfileMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    phone: string | null
    address_line1: string | null
    address_line2: string | null
    city: string | null
    state: string | null
    postal_code: string | null
    country: string | null
    avatar_url: string | null
    updated_at: Date | null
  }

  export type UserProfileCountAggregateOutputType = {
    id: number
    user_id: number
    phone: number
    address_line1: number
    address_line2: number
    city: number
    state: number
    postal_code: number
    country: number
    avatar_url: number
    updated_at: number
    _all: number
  }


  export type UserProfileMinAggregateInputType = {
    id?: true
    user_id?: true
    phone?: true
    address_line1?: true
    address_line2?: true
    city?: true
    state?: true
    postal_code?: true
    country?: true
    avatar_url?: true
    updated_at?: true
  }

  export type UserProfileMaxAggregateInputType = {
    id?: true
    user_id?: true
    phone?: true
    address_line1?: true
    address_line2?: true
    city?: true
    state?: true
    postal_code?: true
    country?: true
    avatar_url?: true
    updated_at?: true
  }

  export type UserProfileCountAggregateInputType = {
    id?: true
    user_id?: true
    phone?: true
    address_line1?: true
    address_line2?: true
    city?: true
    state?: true
    postal_code?: true
    country?: true
    avatar_url?: true
    updated_at?: true
    _all?: true
  }

  export type UserProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserProfile to aggregate.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserProfiles
    **/
    _count?: true | UserProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserProfileMaxAggregateInputType
  }

  export type GetUserProfileAggregateType<T extends UserProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateUserProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserProfile[P]>
      : GetScalarType<T[P], AggregateUserProfile[P]>
  }




  export type UserProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserProfileWhereInput
    orderBy?: UserProfileOrderByWithAggregationInput | UserProfileOrderByWithAggregationInput[]
    by: UserProfileScalarFieldEnum[] | UserProfileScalarFieldEnum
    having?: UserProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserProfileCountAggregateInputType | true
    _min?: UserProfileMinAggregateInputType
    _max?: UserProfileMaxAggregateInputType
  }

  export type UserProfileGroupByOutputType = {
    id: string
    user_id: string
    phone: string
    address_line1: string | null
    address_line2: string | null
    city: string | null
    state: string | null
    postal_code: string | null
    country: string | null
    avatar_url: string | null
    updated_at: Date
    _count: UserProfileCountAggregateOutputType | null
    _min: UserProfileMinAggregateOutputType | null
    _max: UserProfileMaxAggregateOutputType | null
  }

  type GetUserProfileGroupByPayload<T extends UserProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserProfileGroupByOutputType[P]>
            : GetScalarType<T[P], UserProfileGroupByOutputType[P]>
        }
      >
    >


  export type UserProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    phone?: boolean
    address_line1?: boolean
    address_line2?: boolean
    city?: boolean
    state?: boolean
    postal_code?: boolean
    country?: boolean
    avatar_url?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userProfile"]>

  export type UserProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    phone?: boolean
    address_line1?: boolean
    address_line2?: boolean
    city?: boolean
    state?: boolean
    postal_code?: boolean
    country?: boolean
    avatar_url?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userProfile"]>

  export type UserProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    phone?: boolean
    address_line1?: boolean
    address_line2?: boolean
    city?: boolean
    state?: boolean
    postal_code?: boolean
    country?: boolean
    avatar_url?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userProfile"]>

  export type UserProfileSelectScalar = {
    id?: boolean
    user_id?: boolean
    phone?: boolean
    address_line1?: boolean
    address_line2?: boolean
    city?: boolean
    state?: boolean
    postal_code?: boolean
    country?: boolean
    avatar_url?: boolean
    updated_at?: boolean
  }

  export type UserProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "phone" | "address_line1" | "address_line2" | "city" | "state" | "postal_code" | "country" | "avatar_url" | "updated_at", ExtArgs["result"]["userProfile"]>
  export type UserProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserProfile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      phone: string
      address_line1: string | null
      address_line2: string | null
      city: string | null
      state: string | null
      postal_code: string | null
      country: string | null
      avatar_url: string | null
      updated_at: Date
    }, ExtArgs["result"]["userProfile"]>
    composites: {}
  }

  type UserProfileGetPayload<S extends boolean | null | undefined | UserProfileDefaultArgs> = $Result.GetResult<Prisma.$UserProfilePayload, S>

  type UserProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserProfileCountAggregateInputType | true
    }

  export interface UserProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserProfile'], meta: { name: 'UserProfile' } }
    /**
     * Find zero or one UserProfile that matches the filter.
     * @param {UserProfileFindUniqueArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserProfileFindUniqueArgs>(args: SelectSubset<T, UserProfileFindUniqueArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserProfileFindUniqueOrThrowArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, UserProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindFirstArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserProfileFindFirstArgs>(args?: SelectSubset<T, UserProfileFindFirstArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindFirstOrThrowArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, UserProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserProfiles
     * const userProfiles = await prisma.userProfile.findMany()
     * 
     * // Get first 10 UserProfiles
     * const userProfiles = await prisma.userProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userProfileWithIdOnly = await prisma.userProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserProfileFindManyArgs>(args?: SelectSubset<T, UserProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserProfile.
     * @param {UserProfileCreateArgs} args - Arguments to create a UserProfile.
     * @example
     * // Create one UserProfile
     * const UserProfile = await prisma.userProfile.create({
     *   data: {
     *     // ... data to create a UserProfile
     *   }
     * })
     * 
     */
    create<T extends UserProfileCreateArgs>(args: SelectSubset<T, UserProfileCreateArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserProfiles.
     * @param {UserProfileCreateManyArgs} args - Arguments to create many UserProfiles.
     * @example
     * // Create many UserProfiles
     * const userProfile = await prisma.userProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserProfileCreateManyArgs>(args?: SelectSubset<T, UserProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserProfiles and returns the data saved in the database.
     * @param {UserProfileCreateManyAndReturnArgs} args - Arguments to create many UserProfiles.
     * @example
     * // Create many UserProfiles
     * const userProfile = await prisma.userProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserProfiles and only return the `id`
     * const userProfileWithIdOnly = await prisma.userProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, UserProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserProfile.
     * @param {UserProfileDeleteArgs} args - Arguments to delete one UserProfile.
     * @example
     * // Delete one UserProfile
     * const UserProfile = await prisma.userProfile.delete({
     *   where: {
     *     // ... filter to delete one UserProfile
     *   }
     * })
     * 
     */
    delete<T extends UserProfileDeleteArgs>(args: SelectSubset<T, UserProfileDeleteArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserProfile.
     * @param {UserProfileUpdateArgs} args - Arguments to update one UserProfile.
     * @example
     * // Update one UserProfile
     * const userProfile = await prisma.userProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserProfileUpdateArgs>(args: SelectSubset<T, UserProfileUpdateArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserProfiles.
     * @param {UserProfileDeleteManyArgs} args - Arguments to filter UserProfiles to delete.
     * @example
     * // Delete a few UserProfiles
     * const { count } = await prisma.userProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserProfileDeleteManyArgs>(args?: SelectSubset<T, UserProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserProfiles
     * const userProfile = await prisma.userProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserProfileUpdateManyArgs>(args: SelectSubset<T, UserProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserProfiles and returns the data updated in the database.
     * @param {UserProfileUpdateManyAndReturnArgs} args - Arguments to update many UserProfiles.
     * @example
     * // Update many UserProfiles
     * const userProfile = await prisma.userProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserProfiles and only return the `id`
     * const userProfileWithIdOnly = await prisma.userProfile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, UserProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserProfile.
     * @param {UserProfileUpsertArgs} args - Arguments to update or create a UserProfile.
     * @example
     * // Update or create a UserProfile
     * const userProfile = await prisma.userProfile.upsert({
     *   create: {
     *     // ... data to create a UserProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserProfile we want to update
     *   }
     * })
     */
    upsert<T extends UserProfileUpsertArgs>(args: SelectSubset<T, UserProfileUpsertArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileCountArgs} args - Arguments to filter UserProfiles to count.
     * @example
     * // Count the number of UserProfiles
     * const count = await prisma.userProfile.count({
     *   where: {
     *     // ... the filter for the UserProfiles we want to count
     *   }
     * })
    **/
    count<T extends UserProfileCountArgs>(
      args?: Subset<T, UserProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserProfileAggregateArgs>(args: Subset<T, UserProfileAggregateArgs>): Prisma.PrismaPromise<GetUserProfileAggregateType<T>>

    /**
     * Group by UserProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserProfileGroupByArgs['orderBy'] }
        : { orderBy?: UserProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserProfile model
   */
  readonly fields: UserProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserProfile model
   */
  interface UserProfileFieldRefs {
    readonly id: FieldRef<"UserProfile", 'String'>
    readonly user_id: FieldRef<"UserProfile", 'String'>
    readonly phone: FieldRef<"UserProfile", 'String'>
    readonly address_line1: FieldRef<"UserProfile", 'String'>
    readonly address_line2: FieldRef<"UserProfile", 'String'>
    readonly city: FieldRef<"UserProfile", 'String'>
    readonly state: FieldRef<"UserProfile", 'String'>
    readonly postal_code: FieldRef<"UserProfile", 'String'>
    readonly country: FieldRef<"UserProfile", 'String'>
    readonly avatar_url: FieldRef<"UserProfile", 'String'>
    readonly updated_at: FieldRef<"UserProfile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserProfile findUnique
   */
  export type UserProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile findUniqueOrThrow
   */
  export type UserProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile findFirst
   */
  export type UserProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserProfiles.
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserProfiles.
     */
    distinct?: UserProfileScalarFieldEnum | UserProfileScalarFieldEnum[]
  }

  /**
   * UserProfile findFirstOrThrow
   */
  export type UserProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserProfiles.
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserProfiles.
     */
    distinct?: UserProfileScalarFieldEnum | UserProfileScalarFieldEnum[]
  }

  /**
   * UserProfile findMany
   */
  export type UserProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfiles to fetch.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserProfiles.
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    distinct?: UserProfileScalarFieldEnum | UserProfileScalarFieldEnum[]
  }

  /**
   * UserProfile create
   */
  export type UserProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a UserProfile.
     */
    data: XOR<UserProfileCreateInput, UserProfileUncheckedCreateInput>
  }

  /**
   * UserProfile createMany
   */
  export type UserProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserProfiles.
     */
    data: UserProfileCreateManyInput | UserProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserProfile createManyAndReturn
   */
  export type UserProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * The data used to create many UserProfiles.
     */
    data: UserProfileCreateManyInput | UserProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserProfile update
   */
  export type UserProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a UserProfile.
     */
    data: XOR<UserProfileUpdateInput, UserProfileUncheckedUpdateInput>
    /**
     * Choose, which UserProfile to update.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile updateMany
   */
  export type UserProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserProfiles.
     */
    data: XOR<UserProfileUpdateManyMutationInput, UserProfileUncheckedUpdateManyInput>
    /**
     * Filter which UserProfiles to update
     */
    where?: UserProfileWhereInput
    /**
     * Limit how many UserProfiles to update.
     */
    limit?: number
  }

  /**
   * UserProfile updateManyAndReturn
   */
  export type UserProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * The data used to update UserProfiles.
     */
    data: XOR<UserProfileUpdateManyMutationInput, UserProfileUncheckedUpdateManyInput>
    /**
     * Filter which UserProfiles to update
     */
    where?: UserProfileWhereInput
    /**
     * Limit how many UserProfiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserProfile upsert
   */
  export type UserProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the UserProfile to update in case it exists.
     */
    where: UserProfileWhereUniqueInput
    /**
     * In case the UserProfile found by the `where` argument doesn't exist, create a new UserProfile with this data.
     */
    create: XOR<UserProfileCreateInput, UserProfileUncheckedCreateInput>
    /**
     * In case the UserProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserProfileUpdateInput, UserProfileUncheckedUpdateInput>
  }

  /**
   * UserProfile delete
   */
  export type UserProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter which UserProfile to delete.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile deleteMany
   */
  export type UserProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserProfiles to delete
     */
    where?: UserProfileWhereInput
    /**
     * Limit how many UserProfiles to delete.
     */
    limit?: number
  }

  /**
   * UserProfile without action
   */
  export type UserProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    token: string | null
    expires_at: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    token: string | null
    expires_at: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    user_id: number
    token: number
    expires_at: number
    data: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    user_id?: true
    token?: true
    expires_at?: true
    created_at?: true
    updated_at?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    user_id?: true
    token?: true
    expires_at?: true
    created_at?: true
    updated_at?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    user_id?: true
    token?: true
    expires_at?: true
    data?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    user_id: string | null
    token: string
    expires_at: Date
    data: JsonValue
    created_at: Date
    updated_at: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    token?: boolean
    expires_at?: boolean
    data?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | Session$userArgs<ExtArgs>
    cart?: boolean | Session$cartArgs<ExtArgs>
    _count?: boolean | SessionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    token?: boolean
    expires_at?: boolean
    data?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | Session$userArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    token?: boolean
    expires_at?: boolean
    data?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | Session$userArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    user_id?: boolean
    token?: boolean
    expires_at?: boolean
    data?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "token" | "expires_at" | "data" | "created_at" | "updated_at", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Session$userArgs<ExtArgs>
    cart?: boolean | Session$cartArgs<ExtArgs>
    _count?: boolean | SessionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Session$userArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Session$userArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
      cart: Prisma.$CartsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string | null
      token: string
      expires_at: Date
      data: Prisma.JsonValue
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends Session$userArgs<ExtArgs> = {}>(args?: Subset<T, Session$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    cart<T extends Session$cartArgs<ExtArgs> = {}>(args?: Subset<T, Session$cartArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly user_id: FieldRef<"Session", 'String'>
    readonly token: FieldRef<"Session", 'String'>
    readonly expires_at: FieldRef<"Session", 'DateTime'>
    readonly data: FieldRef<"Session", 'Json'>
    readonly created_at: FieldRef<"Session", 'DateTime'>
    readonly updated_at: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session.user
   */
  export type Session$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Session.cart
   */
  export type Session$cartArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carts
     */
    select?: CartsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carts
     */
    omit?: CartsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartsInclude<ExtArgs> | null
    where?: CartsWhereInput
    orderBy?: CartsOrderByWithRelationInput | CartsOrderByWithRelationInput[]
    cursor?: CartsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CartsScalarFieldEnum | CartsScalarFieldEnum[]
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AddressScalarFieldEnum: {
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

  export type AddressScalarFieldEnum = (typeof AddressScalarFieldEnum)[keyof typeof AddressScalarFieldEnum]


  export const CartsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    session_id: 'session_id',
    created_at: 'created_at',
    updated_at: 'updated_at',
    status: 'status'
  };

  export type CartsScalarFieldEnum = (typeof CartsScalarFieldEnum)[keyof typeof CartsScalarFieldEnum]


  export const CartItemsScalarFieldEnum: {
    id: 'id',
    cart_id: 'cart_id',
    product_variant_id: 'product_variant_id',
    quantity: 'quantity'
  };

  export type CartItemsScalarFieldEnum = (typeof CartItemsScalarFieldEnum)[keyof typeof CartItemsScalarFieldEnum]


  export const OrdersScalarFieldEnum: {
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

  export type OrdersScalarFieldEnum = (typeof OrdersScalarFieldEnum)[keyof typeof OrdersScalarFieldEnum]


  export const OrderItemsScalarFieldEnum: {
    id: 'id',
    order_id: 'order_id',
    product_variant_id: 'product_variant_id',
    quantity: 'quantity',
    unit_price: 'unit_price',
    total_price: 'total_price',
    created_at: 'created_at'
  };

  export type OrderItemsScalarFieldEnum = (typeof OrderItemsScalarFieldEnum)[keyof typeof OrderItemsScalarFieldEnum]


  export const ProductsScalarFieldEnum: {
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

  export type ProductsScalarFieldEnum = (typeof ProductsScalarFieldEnum)[keyof typeof ProductsScalarFieldEnum]


  export const ProductImagesScalarFieldEnum: {
    id: 'id',
    product_id: 'product_id',
    url: 'url',
    is_primary: 'is_primary',
    display_order: 'display_order',
    created_at: 'created_at'
  };

  export type ProductImagesScalarFieldEnum = (typeof ProductImagesScalarFieldEnum)[keyof typeof ProductImagesScalarFieldEnum]


  export const ProductVariantsScalarFieldEnum: {
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

  export type ProductVariantsScalarFieldEnum = (typeof ProductVariantsScalarFieldEnum)[keyof typeof ProductVariantsScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    description: 'description',
    image_url: 'image_url',
    display_order: 'display_order',
    parent_id: 'parent_id'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password_hash: 'password_hash',
    first_name: 'first_name',
    last_name: 'last_name',
    role: 'role',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const UserProfileScalarFieldEnum: {
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

  export type UserProfileScalarFieldEnum = (typeof UserProfileScalarFieldEnum)[keyof typeof UserProfileScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    token: 'token',
    expires_at: 'expires_at',
    data: 'data',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Status'
   */
  export type EnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status'>
    


  /**
   * Reference to a field of type 'Status[]'
   */
  export type ListEnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'OrderStatus'
   */
  export type EnumOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderStatus'>
    


  /**
   * Reference to a field of type 'OrderStatus[]'
   */
  export type ListEnumOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderStatus[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'PaymentStatus'
   */
  export type EnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus'>
    


  /**
   * Reference to a field of type 'PaymentStatus[]'
   */
  export type ListEnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type AddressWhereInput = {
    AND?: AddressWhereInput | AddressWhereInput[]
    OR?: AddressWhereInput[]
    NOT?: AddressWhereInput | AddressWhereInput[]
    id?: UuidFilter<"Address"> | string
    user_id?: UuidNullableFilter<"Address"> | string | null
    first_name?: StringFilter<"Address"> | string
    last_name?: StringFilter<"Address"> | string
    email?: StringFilter<"Address"> | string
    phone?: StringNullableFilter<"Address"> | string | null
    address_line1?: StringFilter<"Address"> | string
    address_line2?: StringFilter<"Address"> | string
    city?: StringFilter<"Address"> | string
    state?: StringFilter<"Address"> | string
    country?: StringFilter<"Address"> | string
    is_default_shipping?: BoolFilter<"Address"> | boolean
    is_default_billing?: BoolFilter<"Address"> | boolean
    created_at?: DateTimeFilter<"Address"> | Date | string
    updated_at?: DateTimeFilter<"Address"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    shipping_orders?: OrdersListRelationFilter
    billing_orders?: OrdersListRelationFilter
  }

  export type AddressOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    address_line1?: SortOrder
    address_line2?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    is_default_shipping?: SortOrder
    is_default_billing?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user?: UserOrderByWithRelationInput
    shipping_orders?: OrdersOrderByRelationAggregateInput
    billing_orders?: OrdersOrderByRelationAggregateInput
  }

  export type AddressWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AddressWhereInput | AddressWhereInput[]
    OR?: AddressWhereInput[]
    NOT?: AddressWhereInput | AddressWhereInput[]
    user_id?: UuidNullableFilter<"Address"> | string | null
    first_name?: StringFilter<"Address"> | string
    last_name?: StringFilter<"Address"> | string
    email?: StringFilter<"Address"> | string
    phone?: StringNullableFilter<"Address"> | string | null
    address_line1?: StringFilter<"Address"> | string
    address_line2?: StringFilter<"Address"> | string
    city?: StringFilter<"Address"> | string
    state?: StringFilter<"Address"> | string
    country?: StringFilter<"Address"> | string
    is_default_shipping?: BoolFilter<"Address"> | boolean
    is_default_billing?: BoolFilter<"Address"> | boolean
    created_at?: DateTimeFilter<"Address"> | Date | string
    updated_at?: DateTimeFilter<"Address"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    shipping_orders?: OrdersListRelationFilter
    billing_orders?: OrdersListRelationFilter
  }, "id">

  export type AddressOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    address_line1?: SortOrder
    address_line2?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    is_default_shipping?: SortOrder
    is_default_billing?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: AddressCountOrderByAggregateInput
    _max?: AddressMaxOrderByAggregateInput
    _min?: AddressMinOrderByAggregateInput
  }

  export type AddressScalarWhereWithAggregatesInput = {
    AND?: AddressScalarWhereWithAggregatesInput | AddressScalarWhereWithAggregatesInput[]
    OR?: AddressScalarWhereWithAggregatesInput[]
    NOT?: AddressScalarWhereWithAggregatesInput | AddressScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Address"> | string
    user_id?: UuidNullableWithAggregatesFilter<"Address"> | string | null
    first_name?: StringWithAggregatesFilter<"Address"> | string
    last_name?: StringWithAggregatesFilter<"Address"> | string
    email?: StringWithAggregatesFilter<"Address"> | string
    phone?: StringNullableWithAggregatesFilter<"Address"> | string | null
    address_line1?: StringWithAggregatesFilter<"Address"> | string
    address_line2?: StringWithAggregatesFilter<"Address"> | string
    city?: StringWithAggregatesFilter<"Address"> | string
    state?: StringWithAggregatesFilter<"Address"> | string
    country?: StringWithAggregatesFilter<"Address"> | string
    is_default_shipping?: BoolWithAggregatesFilter<"Address"> | boolean
    is_default_billing?: BoolWithAggregatesFilter<"Address"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"Address"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Address"> | Date | string
  }

  export type CartsWhereInput = {
    AND?: CartsWhereInput | CartsWhereInput[]
    OR?: CartsWhereInput[]
    NOT?: CartsWhereInput | CartsWhereInput[]
    id?: UuidFilter<"Carts"> | string
    user_id?: UuidNullableFilter<"Carts"> | string | null
    session_id?: UuidFilter<"Carts"> | string
    created_at?: DateTimeFilter<"Carts"> | Date | string
    updated_at?: DateTimeFilter<"Carts"> | Date | string
    status?: EnumStatusFilter<"Carts"> | $Enums.Status
    users?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    session?: XOR<SessionScalarRelationFilter, SessionWhereInput>
    cart_items?: CartItemsListRelationFilter
    orders?: OrdersListRelationFilter
  }

  export type CartsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    session_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    status?: SortOrder
    users?: UserOrderByWithRelationInput
    session?: SessionOrderByWithRelationInput
    cart_items?: CartItemsOrderByRelationAggregateInput
    orders?: OrdersOrderByRelationAggregateInput
  }

  export type CartsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CartsWhereInput | CartsWhereInput[]
    OR?: CartsWhereInput[]
    NOT?: CartsWhereInput | CartsWhereInput[]
    user_id?: UuidNullableFilter<"Carts"> | string | null
    session_id?: UuidFilter<"Carts"> | string
    created_at?: DateTimeFilter<"Carts"> | Date | string
    updated_at?: DateTimeFilter<"Carts"> | Date | string
    status?: EnumStatusFilter<"Carts"> | $Enums.Status
    users?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    session?: XOR<SessionScalarRelationFilter, SessionWhereInput>
    cart_items?: CartItemsListRelationFilter
    orders?: OrdersListRelationFilter
  }, "id">

  export type CartsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    session_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    status?: SortOrder
    _count?: CartsCountOrderByAggregateInput
    _max?: CartsMaxOrderByAggregateInput
    _min?: CartsMinOrderByAggregateInput
  }

  export type CartsScalarWhereWithAggregatesInput = {
    AND?: CartsScalarWhereWithAggregatesInput | CartsScalarWhereWithAggregatesInput[]
    OR?: CartsScalarWhereWithAggregatesInput[]
    NOT?: CartsScalarWhereWithAggregatesInput | CartsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Carts"> | string
    user_id?: UuidNullableWithAggregatesFilter<"Carts"> | string | null
    session_id?: UuidWithAggregatesFilter<"Carts"> | string
    created_at?: DateTimeWithAggregatesFilter<"Carts"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Carts"> | Date | string
    status?: EnumStatusWithAggregatesFilter<"Carts"> | $Enums.Status
  }

  export type CartItemsWhereInput = {
    AND?: CartItemsWhereInput | CartItemsWhereInput[]
    OR?: CartItemsWhereInput[]
    NOT?: CartItemsWhereInput | CartItemsWhereInput[]
    id?: UuidFilter<"CartItems"> | string
    cart_id?: UuidFilter<"CartItems"> | string
    product_variant_id?: UuidFilter<"CartItems"> | string
    quantity?: IntFilter<"CartItems"> | number
    product_variant?: XOR<ProductVariantsScalarRelationFilter, ProductVariantsWhereInput>
    carts?: XOR<CartsScalarRelationFilter, CartsWhereInput>
  }

  export type CartItemsOrderByWithRelationInput = {
    id?: SortOrder
    cart_id?: SortOrder
    product_variant_id?: SortOrder
    quantity?: SortOrder
    product_variant?: ProductVariantsOrderByWithRelationInput
    carts?: CartsOrderByWithRelationInput
  }

  export type CartItemsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    cart_id_product_variant_id?: CartItemsCart_idProduct_variant_idCompoundUniqueInput
    AND?: CartItemsWhereInput | CartItemsWhereInput[]
    OR?: CartItemsWhereInput[]
    NOT?: CartItemsWhereInput | CartItemsWhereInput[]
    cart_id?: UuidFilter<"CartItems"> | string
    product_variant_id?: UuidFilter<"CartItems"> | string
    quantity?: IntFilter<"CartItems"> | number
    product_variant?: XOR<ProductVariantsScalarRelationFilter, ProductVariantsWhereInput>
    carts?: XOR<CartsScalarRelationFilter, CartsWhereInput>
  }, "id" | "cart_id_product_variant_id">

  export type CartItemsOrderByWithAggregationInput = {
    id?: SortOrder
    cart_id?: SortOrder
    product_variant_id?: SortOrder
    quantity?: SortOrder
    _count?: CartItemsCountOrderByAggregateInput
    _avg?: CartItemsAvgOrderByAggregateInput
    _max?: CartItemsMaxOrderByAggregateInput
    _min?: CartItemsMinOrderByAggregateInput
    _sum?: CartItemsSumOrderByAggregateInput
  }

  export type CartItemsScalarWhereWithAggregatesInput = {
    AND?: CartItemsScalarWhereWithAggregatesInput | CartItemsScalarWhereWithAggregatesInput[]
    OR?: CartItemsScalarWhereWithAggregatesInput[]
    NOT?: CartItemsScalarWhereWithAggregatesInput | CartItemsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"CartItems"> | string
    cart_id?: UuidWithAggregatesFilter<"CartItems"> | string
    product_variant_id?: UuidWithAggregatesFilter<"CartItems"> | string
    quantity?: IntWithAggregatesFilter<"CartItems"> | number
  }

  export type OrdersWhereInput = {
    AND?: OrdersWhereInput | OrdersWhereInput[]
    OR?: OrdersWhereInput[]
    NOT?: OrdersWhereInput | OrdersWhereInput[]
    id?: UuidFilter<"Orders"> | string
    user_id?: UuidNullableFilter<"Orders"> | string | null
    cart_id?: UuidFilter<"Orders"> | string
    order_number?: StringFilter<"Orders"> | string
    status?: EnumOrderStatusFilter<"Orders"> | $Enums.OrderStatus
    total_amount?: DecimalFilter<"Orders"> | Decimal | DecimalJsLike | number | string
    shipping_amount?: DecimalFilter<"Orders"> | Decimal | DecimalJsLike | number | string
    tax_amount?: DecimalFilter<"Orders"> | Decimal | DecimalJsLike | number | string
    discount_amount?: DecimalFilter<"Orders"> | Decimal | DecimalJsLike | number | string
    shipping_address_id?: UuidFilter<"Orders"> | string
    billing_address_id?: UuidFilter<"Orders"> | string
    payment_status?: EnumPaymentStatusFilter<"Orders"> | $Enums.PaymentStatus
    payment_method?: StringFilter<"Orders"> | string
    created_at?: DateTimeFilter<"Orders"> | Date | string
    updated_at?: DateTimeFilter<"Orders"> | Date | string
    shipping_address?: XOR<AddressScalarRelationFilter, AddressWhereInput>
    billing_address?: XOR<AddressScalarRelationFilter, AddressWhereInput>
    carts?: XOR<CartsScalarRelationFilter, CartsWhereInput>
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    order_items?: OrderItemsListRelationFilter
  }

  export type OrdersOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    cart_id?: SortOrder
    order_number?: SortOrder
    status?: SortOrder
    total_amount?: SortOrder
    shipping_amount?: SortOrder
    tax_amount?: SortOrder
    discount_amount?: SortOrder
    shipping_address_id?: SortOrder
    billing_address_id?: SortOrder
    payment_status?: SortOrder
    payment_method?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    shipping_address?: AddressOrderByWithRelationInput
    billing_address?: AddressOrderByWithRelationInput
    carts?: CartsOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    order_items?: OrderItemsOrderByRelationAggregateInput
  }

  export type OrdersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    order_number?: string
    AND?: OrdersWhereInput | OrdersWhereInput[]
    OR?: OrdersWhereInput[]
    NOT?: OrdersWhereInput | OrdersWhereInput[]
    user_id?: UuidNullableFilter<"Orders"> | string | null
    cart_id?: UuidFilter<"Orders"> | string
    status?: EnumOrderStatusFilter<"Orders"> | $Enums.OrderStatus
    total_amount?: DecimalFilter<"Orders"> | Decimal | DecimalJsLike | number | string
    shipping_amount?: DecimalFilter<"Orders"> | Decimal | DecimalJsLike | number | string
    tax_amount?: DecimalFilter<"Orders"> | Decimal | DecimalJsLike | number | string
    discount_amount?: DecimalFilter<"Orders"> | Decimal | DecimalJsLike | number | string
    shipping_address_id?: UuidFilter<"Orders"> | string
    billing_address_id?: UuidFilter<"Orders"> | string
    payment_status?: EnumPaymentStatusFilter<"Orders"> | $Enums.PaymentStatus
    payment_method?: StringFilter<"Orders"> | string
    created_at?: DateTimeFilter<"Orders"> | Date | string
    updated_at?: DateTimeFilter<"Orders"> | Date | string
    shipping_address?: XOR<AddressScalarRelationFilter, AddressWhereInput>
    billing_address?: XOR<AddressScalarRelationFilter, AddressWhereInput>
    carts?: XOR<CartsScalarRelationFilter, CartsWhereInput>
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    order_items?: OrderItemsListRelationFilter
  }, "id" | "order_number">

  export type OrdersOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    cart_id?: SortOrder
    order_number?: SortOrder
    status?: SortOrder
    total_amount?: SortOrder
    shipping_amount?: SortOrder
    tax_amount?: SortOrder
    discount_amount?: SortOrder
    shipping_address_id?: SortOrder
    billing_address_id?: SortOrder
    payment_status?: SortOrder
    payment_method?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: OrdersCountOrderByAggregateInput
    _avg?: OrdersAvgOrderByAggregateInput
    _max?: OrdersMaxOrderByAggregateInput
    _min?: OrdersMinOrderByAggregateInput
    _sum?: OrdersSumOrderByAggregateInput
  }

  export type OrdersScalarWhereWithAggregatesInput = {
    AND?: OrdersScalarWhereWithAggregatesInput | OrdersScalarWhereWithAggregatesInput[]
    OR?: OrdersScalarWhereWithAggregatesInput[]
    NOT?: OrdersScalarWhereWithAggregatesInput | OrdersScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Orders"> | string
    user_id?: UuidNullableWithAggregatesFilter<"Orders"> | string | null
    cart_id?: UuidWithAggregatesFilter<"Orders"> | string
    order_number?: StringWithAggregatesFilter<"Orders"> | string
    status?: EnumOrderStatusWithAggregatesFilter<"Orders"> | $Enums.OrderStatus
    total_amount?: DecimalWithAggregatesFilter<"Orders"> | Decimal | DecimalJsLike | number | string
    shipping_amount?: DecimalWithAggregatesFilter<"Orders"> | Decimal | DecimalJsLike | number | string
    tax_amount?: DecimalWithAggregatesFilter<"Orders"> | Decimal | DecimalJsLike | number | string
    discount_amount?: DecimalWithAggregatesFilter<"Orders"> | Decimal | DecimalJsLike | number | string
    shipping_address_id?: UuidWithAggregatesFilter<"Orders"> | string
    billing_address_id?: UuidWithAggregatesFilter<"Orders"> | string
    payment_status?: EnumPaymentStatusWithAggregatesFilter<"Orders"> | $Enums.PaymentStatus
    payment_method?: StringWithAggregatesFilter<"Orders"> | string
    created_at?: DateTimeWithAggregatesFilter<"Orders"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Orders"> | Date | string
  }

  export type OrderItemsWhereInput = {
    AND?: OrderItemsWhereInput | OrderItemsWhereInput[]
    OR?: OrderItemsWhereInput[]
    NOT?: OrderItemsWhereInput | OrderItemsWhereInput[]
    id?: UuidFilter<"OrderItems"> | string
    order_id?: UuidFilter<"OrderItems"> | string
    product_variant_id?: UuidFilter<"OrderItems"> | string
    quantity?: IntFilter<"OrderItems"> | number
    unit_price?: DecimalFilter<"OrderItems"> | Decimal | DecimalJsLike | number | string
    total_price?: DecimalFilter<"OrderItems"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFilter<"OrderItems"> | Date | string
    product_variant?: XOR<ProductVariantsScalarRelationFilter, ProductVariantsWhereInput>
    orders?: XOR<OrdersScalarRelationFilter, OrdersWhereInput>
  }

  export type OrderItemsOrderByWithRelationInput = {
    id?: SortOrder
    order_id?: SortOrder
    product_variant_id?: SortOrder
    quantity?: SortOrder
    unit_price?: SortOrder
    total_price?: SortOrder
    created_at?: SortOrder
    product_variant?: ProductVariantsOrderByWithRelationInput
    orders?: OrdersOrderByWithRelationInput
  }

  export type OrderItemsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    order_id_product_variant_id?: OrderItemsOrder_idProduct_variant_idCompoundUniqueInput
    AND?: OrderItemsWhereInput | OrderItemsWhereInput[]
    OR?: OrderItemsWhereInput[]
    NOT?: OrderItemsWhereInput | OrderItemsWhereInput[]
    order_id?: UuidFilter<"OrderItems"> | string
    product_variant_id?: UuidFilter<"OrderItems"> | string
    quantity?: IntFilter<"OrderItems"> | number
    unit_price?: DecimalFilter<"OrderItems"> | Decimal | DecimalJsLike | number | string
    total_price?: DecimalFilter<"OrderItems"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFilter<"OrderItems"> | Date | string
    product_variant?: XOR<ProductVariantsScalarRelationFilter, ProductVariantsWhereInput>
    orders?: XOR<OrdersScalarRelationFilter, OrdersWhereInput>
  }, "id" | "order_id_product_variant_id">

  export type OrderItemsOrderByWithAggregationInput = {
    id?: SortOrder
    order_id?: SortOrder
    product_variant_id?: SortOrder
    quantity?: SortOrder
    unit_price?: SortOrder
    total_price?: SortOrder
    created_at?: SortOrder
    _count?: OrderItemsCountOrderByAggregateInput
    _avg?: OrderItemsAvgOrderByAggregateInput
    _max?: OrderItemsMaxOrderByAggregateInput
    _min?: OrderItemsMinOrderByAggregateInput
    _sum?: OrderItemsSumOrderByAggregateInput
  }

  export type OrderItemsScalarWhereWithAggregatesInput = {
    AND?: OrderItemsScalarWhereWithAggregatesInput | OrderItemsScalarWhereWithAggregatesInput[]
    OR?: OrderItemsScalarWhereWithAggregatesInput[]
    NOT?: OrderItemsScalarWhereWithAggregatesInput | OrderItemsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"OrderItems"> | string
    order_id?: UuidWithAggregatesFilter<"OrderItems"> | string
    product_variant_id?: UuidWithAggregatesFilter<"OrderItems"> | string
    quantity?: IntWithAggregatesFilter<"OrderItems"> | number
    unit_price?: DecimalWithAggregatesFilter<"OrderItems"> | Decimal | DecimalJsLike | number | string
    total_price?: DecimalWithAggregatesFilter<"OrderItems"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeWithAggregatesFilter<"OrderItems"> | Date | string
  }

  export type ProductsWhereInput = {
    AND?: ProductsWhereInput | ProductsWhereInput[]
    OR?: ProductsWhereInput[]
    NOT?: ProductsWhereInput | ProductsWhereInput[]
    id?: UuidFilter<"Products"> | string
    name?: StringFilter<"Products"> | string
    slug?: StringFilter<"Products"> | string
    description?: StringFilter<"Products"> | string
    price?: DecimalFilter<"Products"> | Decimal | DecimalJsLike | number | string
    inventory_quantity?: IntFilter<"Products"> | number
    is_available?: BoolFilter<"Products"> | boolean
    category_id?: UuidFilter<"Products"> | string
    created_at?: DateTimeFilter<"Products"> | Date | string
    updated_at?: DateTimeFilter<"Products"> | Date | string
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    product_images?: ProductImagesListRelationFilter
    product_variant?: ProductVariantsListRelationFilter
  }

  export type ProductsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    price?: SortOrder
    inventory_quantity?: SortOrder
    is_available?: SortOrder
    category_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    category?: CategoryOrderByWithRelationInput
    product_images?: ProductImagesOrderByRelationAggregateInput
    product_variant?: ProductVariantsOrderByRelationAggregateInput
  }

  export type ProductsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: ProductsWhereInput | ProductsWhereInput[]
    OR?: ProductsWhereInput[]
    NOT?: ProductsWhereInput | ProductsWhereInput[]
    name?: StringFilter<"Products"> | string
    description?: StringFilter<"Products"> | string
    price?: DecimalFilter<"Products"> | Decimal | DecimalJsLike | number | string
    inventory_quantity?: IntFilter<"Products"> | number
    is_available?: BoolFilter<"Products"> | boolean
    category_id?: UuidFilter<"Products"> | string
    created_at?: DateTimeFilter<"Products"> | Date | string
    updated_at?: DateTimeFilter<"Products"> | Date | string
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    product_images?: ProductImagesListRelationFilter
    product_variant?: ProductVariantsListRelationFilter
  }, "id" | "slug">

  export type ProductsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    price?: SortOrder
    inventory_quantity?: SortOrder
    is_available?: SortOrder
    category_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: ProductsCountOrderByAggregateInput
    _avg?: ProductsAvgOrderByAggregateInput
    _max?: ProductsMaxOrderByAggregateInput
    _min?: ProductsMinOrderByAggregateInput
    _sum?: ProductsSumOrderByAggregateInput
  }

  export type ProductsScalarWhereWithAggregatesInput = {
    AND?: ProductsScalarWhereWithAggregatesInput | ProductsScalarWhereWithAggregatesInput[]
    OR?: ProductsScalarWhereWithAggregatesInput[]
    NOT?: ProductsScalarWhereWithAggregatesInput | ProductsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Products"> | string
    name?: StringWithAggregatesFilter<"Products"> | string
    slug?: StringWithAggregatesFilter<"Products"> | string
    description?: StringWithAggregatesFilter<"Products"> | string
    price?: DecimalWithAggregatesFilter<"Products"> | Decimal | DecimalJsLike | number | string
    inventory_quantity?: IntWithAggregatesFilter<"Products"> | number
    is_available?: BoolWithAggregatesFilter<"Products"> | boolean
    category_id?: UuidWithAggregatesFilter<"Products"> | string
    created_at?: DateTimeWithAggregatesFilter<"Products"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Products"> | Date | string
  }

  export type ProductImagesWhereInput = {
    AND?: ProductImagesWhereInput | ProductImagesWhereInput[]
    OR?: ProductImagesWhereInput[]
    NOT?: ProductImagesWhereInput | ProductImagesWhereInput[]
    id?: UuidFilter<"ProductImages"> | string
    product_id?: UuidFilter<"ProductImages"> | string
    url?: StringFilter<"ProductImages"> | string
    is_primary?: BoolFilter<"ProductImages"> | boolean
    display_order?: IntFilter<"ProductImages"> | number
    created_at?: DateTimeFilter<"ProductImages"> | Date | string
    product?: XOR<ProductsScalarRelationFilter, ProductsWhereInput>
  }

  export type ProductImagesOrderByWithRelationInput = {
    id?: SortOrder
    product_id?: SortOrder
    url?: SortOrder
    is_primary?: SortOrder
    display_order?: SortOrder
    created_at?: SortOrder
    product?: ProductsOrderByWithRelationInput
  }

  export type ProductImagesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProductImagesWhereInput | ProductImagesWhereInput[]
    OR?: ProductImagesWhereInput[]
    NOT?: ProductImagesWhereInput | ProductImagesWhereInput[]
    product_id?: UuidFilter<"ProductImages"> | string
    url?: StringFilter<"ProductImages"> | string
    is_primary?: BoolFilter<"ProductImages"> | boolean
    display_order?: IntFilter<"ProductImages"> | number
    created_at?: DateTimeFilter<"ProductImages"> | Date | string
    product?: XOR<ProductsScalarRelationFilter, ProductsWhereInput>
  }, "id">

  export type ProductImagesOrderByWithAggregationInput = {
    id?: SortOrder
    product_id?: SortOrder
    url?: SortOrder
    is_primary?: SortOrder
    display_order?: SortOrder
    created_at?: SortOrder
    _count?: ProductImagesCountOrderByAggregateInput
    _avg?: ProductImagesAvgOrderByAggregateInput
    _max?: ProductImagesMaxOrderByAggregateInput
    _min?: ProductImagesMinOrderByAggregateInput
    _sum?: ProductImagesSumOrderByAggregateInput
  }

  export type ProductImagesScalarWhereWithAggregatesInput = {
    AND?: ProductImagesScalarWhereWithAggregatesInput | ProductImagesScalarWhereWithAggregatesInput[]
    OR?: ProductImagesScalarWhereWithAggregatesInput[]
    NOT?: ProductImagesScalarWhereWithAggregatesInput | ProductImagesScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"ProductImages"> | string
    product_id?: UuidWithAggregatesFilter<"ProductImages"> | string
    url?: StringWithAggregatesFilter<"ProductImages"> | string
    is_primary?: BoolWithAggregatesFilter<"ProductImages"> | boolean
    display_order?: IntWithAggregatesFilter<"ProductImages"> | number
    created_at?: DateTimeWithAggregatesFilter<"ProductImages"> | Date | string
  }

  export type ProductVariantsWhereInput = {
    AND?: ProductVariantsWhereInput | ProductVariantsWhereInput[]
    OR?: ProductVariantsWhereInput[]
    NOT?: ProductVariantsWhereInput | ProductVariantsWhereInput[]
    id?: UuidFilter<"ProductVariants"> | string
    product_id?: UuidFilter<"ProductVariants"> | string
    name?: StringFilter<"ProductVariants"> | string
    sku?: StringFilter<"ProductVariants"> | string
    price?: DecimalNullableFilter<"ProductVariants"> | Decimal | DecimalJsLike | number | string | null
    inventory_quantity?: IntFilter<"ProductVariants"> | number
    option1_value?: StringNullableFilter<"ProductVariants"> | string | null
    option2_value?: StringNullableFilter<"ProductVariants"> | string | null
    option3_value?: StringNullableFilter<"ProductVariants"> | string | null
    created_at?: DateTimeFilter<"ProductVariants"> | Date | string
    updated_at?: DateTimeFilter<"ProductVariants"> | Date | string
    product?: XOR<ProductsScalarRelationFilter, ProductsWhereInput>
    cart_items?: CartItemsListRelationFilter
    order_items?: OrderItemsListRelationFilter
  }

  export type ProductVariantsOrderByWithRelationInput = {
    id?: SortOrder
    product_id?: SortOrder
    name?: SortOrder
    sku?: SortOrder
    price?: SortOrderInput | SortOrder
    inventory_quantity?: SortOrder
    option1_value?: SortOrderInput | SortOrder
    option2_value?: SortOrderInput | SortOrder
    option3_value?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    product?: ProductsOrderByWithRelationInput
    cart_items?: CartItemsOrderByRelationAggregateInput
    order_items?: OrderItemsOrderByRelationAggregateInput
  }

  export type ProductVariantsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sku?: string
    AND?: ProductVariantsWhereInput | ProductVariantsWhereInput[]
    OR?: ProductVariantsWhereInput[]
    NOT?: ProductVariantsWhereInput | ProductVariantsWhereInput[]
    product_id?: UuidFilter<"ProductVariants"> | string
    name?: StringFilter<"ProductVariants"> | string
    price?: DecimalNullableFilter<"ProductVariants"> | Decimal | DecimalJsLike | number | string | null
    inventory_quantity?: IntFilter<"ProductVariants"> | number
    option1_value?: StringNullableFilter<"ProductVariants"> | string | null
    option2_value?: StringNullableFilter<"ProductVariants"> | string | null
    option3_value?: StringNullableFilter<"ProductVariants"> | string | null
    created_at?: DateTimeFilter<"ProductVariants"> | Date | string
    updated_at?: DateTimeFilter<"ProductVariants"> | Date | string
    product?: XOR<ProductsScalarRelationFilter, ProductsWhereInput>
    cart_items?: CartItemsListRelationFilter
    order_items?: OrderItemsListRelationFilter
  }, "id" | "sku">

  export type ProductVariantsOrderByWithAggregationInput = {
    id?: SortOrder
    product_id?: SortOrder
    name?: SortOrder
    sku?: SortOrder
    price?: SortOrderInput | SortOrder
    inventory_quantity?: SortOrder
    option1_value?: SortOrderInput | SortOrder
    option2_value?: SortOrderInput | SortOrder
    option3_value?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: ProductVariantsCountOrderByAggregateInput
    _avg?: ProductVariantsAvgOrderByAggregateInput
    _max?: ProductVariantsMaxOrderByAggregateInput
    _min?: ProductVariantsMinOrderByAggregateInput
    _sum?: ProductVariantsSumOrderByAggregateInput
  }

  export type ProductVariantsScalarWhereWithAggregatesInput = {
    AND?: ProductVariantsScalarWhereWithAggregatesInput | ProductVariantsScalarWhereWithAggregatesInput[]
    OR?: ProductVariantsScalarWhereWithAggregatesInput[]
    NOT?: ProductVariantsScalarWhereWithAggregatesInput | ProductVariantsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"ProductVariants"> | string
    product_id?: UuidWithAggregatesFilter<"ProductVariants"> | string
    name?: StringWithAggregatesFilter<"ProductVariants"> | string
    sku?: StringWithAggregatesFilter<"ProductVariants"> | string
    price?: DecimalNullableWithAggregatesFilter<"ProductVariants"> | Decimal | DecimalJsLike | number | string | null
    inventory_quantity?: IntWithAggregatesFilter<"ProductVariants"> | number
    option1_value?: StringNullableWithAggregatesFilter<"ProductVariants"> | string | null
    option2_value?: StringNullableWithAggregatesFilter<"ProductVariants"> | string | null
    option3_value?: StringNullableWithAggregatesFilter<"ProductVariants"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"ProductVariants"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"ProductVariants"> | Date | string
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: UuidFilter<"Category"> | string
    name?: StringFilter<"Category"> | string
    slug?: StringFilter<"Category"> | string
    description?: StringNullableFilter<"Category"> | string | null
    image_url?: StringNullableFilter<"Category"> | string | null
    display_order?: IntFilter<"Category"> | number
    parent_id?: StringNullableFilter<"Category"> | string | null
    parent?: XOR<CategoryNullableScalarRelationFilter, CategoryWhereInput> | null
    subcategories?: CategoryListRelationFilter
    products?: ProductsListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    image_url?: SortOrderInput | SortOrder
    display_order?: SortOrder
    parent_id?: SortOrderInput | SortOrder
    parent?: CategoryOrderByWithRelationInput
    subcategories?: CategoryOrderByRelationAggregateInput
    products?: ProductsOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    name?: StringFilter<"Category"> | string
    description?: StringNullableFilter<"Category"> | string | null
    image_url?: StringNullableFilter<"Category"> | string | null
    display_order?: IntFilter<"Category"> | number
    parent_id?: StringNullableFilter<"Category"> | string | null
    parent?: XOR<CategoryNullableScalarRelationFilter, CategoryWhereInput> | null
    subcategories?: CategoryListRelationFilter
    products?: ProductsListRelationFilter
  }, "id" | "slug">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    image_url?: SortOrderInput | SortOrder
    display_order?: SortOrder
    parent_id?: SortOrderInput | SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _avg?: CategoryAvgOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
    _sum?: CategorySumOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Category"> | string
    name?: StringWithAggregatesFilter<"Category"> | string
    slug?: StringWithAggregatesFilter<"Category"> | string
    description?: StringNullableWithAggregatesFilter<"Category"> | string | null
    image_url?: StringNullableWithAggregatesFilter<"Category"> | string | null
    display_order?: IntWithAggregatesFilter<"Category"> | number
    parent_id?: StringNullableWithAggregatesFilter<"Category"> | string | null
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: UuidFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password_hash?: StringFilter<"User"> | string
    first_name?: StringFilter<"User"> | string
    last_name?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    user_profile?: UserProfileListRelationFilter
    cart?: CartsListRelationFilter
    orders?: OrdersListRelationFilter
    address?: AddressListRelationFilter
    session?: SessionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_profile?: UserProfileOrderByRelationAggregateInput
    cart?: CartsOrderByRelationAggregateInput
    orders?: OrdersOrderByRelationAggregateInput
    address?: AddressOrderByRelationAggregateInput
    session?: SessionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password_hash?: StringFilter<"User"> | string
    first_name?: StringFilter<"User"> | string
    last_name?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    user_profile?: UserProfileListRelationFilter
    cart?: CartsListRelationFilter
    orders?: OrdersListRelationFilter
    address?: AddressListRelationFilter
    session?: SessionListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password_hash?: StringWithAggregatesFilter<"User"> | string
    first_name?: StringWithAggregatesFilter<"User"> | string
    last_name?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    created_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type UserProfileWhereInput = {
    AND?: UserProfileWhereInput | UserProfileWhereInput[]
    OR?: UserProfileWhereInput[]
    NOT?: UserProfileWhereInput | UserProfileWhereInput[]
    id?: UuidFilter<"UserProfile"> | string
    user_id?: UuidFilter<"UserProfile"> | string
    phone?: StringFilter<"UserProfile"> | string
    address_line1?: StringNullableFilter<"UserProfile"> | string | null
    address_line2?: StringNullableFilter<"UserProfile"> | string | null
    city?: StringNullableFilter<"UserProfile"> | string | null
    state?: StringNullableFilter<"UserProfile"> | string | null
    postal_code?: StringNullableFilter<"UserProfile"> | string | null
    country?: StringNullableFilter<"UserProfile"> | string | null
    avatar_url?: StringNullableFilter<"UserProfile"> | string | null
    updated_at?: DateTimeFilter<"UserProfile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserProfileOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    phone?: SortOrder
    address_line1?: SortOrderInput | SortOrder
    address_line2?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    postal_code?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    avatar_url?: SortOrderInput | SortOrder
    updated_at?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserProfileWhereInput | UserProfileWhereInput[]
    OR?: UserProfileWhereInput[]
    NOT?: UserProfileWhereInput | UserProfileWhereInput[]
    user_id?: UuidFilter<"UserProfile"> | string
    phone?: StringFilter<"UserProfile"> | string
    address_line1?: StringNullableFilter<"UserProfile"> | string | null
    address_line2?: StringNullableFilter<"UserProfile"> | string | null
    city?: StringNullableFilter<"UserProfile"> | string | null
    state?: StringNullableFilter<"UserProfile"> | string | null
    postal_code?: StringNullableFilter<"UserProfile"> | string | null
    country?: StringNullableFilter<"UserProfile"> | string | null
    avatar_url?: StringNullableFilter<"UserProfile"> | string | null
    updated_at?: DateTimeFilter<"UserProfile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type UserProfileOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    phone?: SortOrder
    address_line1?: SortOrderInput | SortOrder
    address_line2?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    postal_code?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    avatar_url?: SortOrderInput | SortOrder
    updated_at?: SortOrder
    _count?: UserProfileCountOrderByAggregateInput
    _max?: UserProfileMaxOrderByAggregateInput
    _min?: UserProfileMinOrderByAggregateInput
  }

  export type UserProfileScalarWhereWithAggregatesInput = {
    AND?: UserProfileScalarWhereWithAggregatesInput | UserProfileScalarWhereWithAggregatesInput[]
    OR?: UserProfileScalarWhereWithAggregatesInput[]
    NOT?: UserProfileScalarWhereWithAggregatesInput | UserProfileScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"UserProfile"> | string
    user_id?: UuidWithAggregatesFilter<"UserProfile"> | string
    phone?: StringWithAggregatesFilter<"UserProfile"> | string
    address_line1?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    address_line2?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    city?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    state?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    postal_code?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    country?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    avatar_url?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    updated_at?: DateTimeWithAggregatesFilter<"UserProfile"> | Date | string
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: UuidFilter<"Session"> | string
    user_id?: UuidNullableFilter<"Session"> | string | null
    token?: StringFilter<"Session"> | string
    expires_at?: DateTimeFilter<"Session"> | Date | string
    data?: JsonFilter<"Session">
    created_at?: DateTimeFilter<"Session"> | Date | string
    updated_at?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    cart?: CartsListRelationFilter
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    token?: SortOrder
    expires_at?: SortOrder
    data?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user?: UserOrderByWithRelationInput
    cart?: CartsOrderByRelationAggregateInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    user_id?: UuidNullableFilter<"Session"> | string | null
    expires_at?: DateTimeFilter<"Session"> | Date | string
    data?: JsonFilter<"Session">
    created_at?: DateTimeFilter<"Session"> | Date | string
    updated_at?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    cart?: CartsListRelationFilter
  }, "id" | "token">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    token?: SortOrder
    expires_at?: SortOrder
    data?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Session"> | string
    user_id?: UuidNullableWithAggregatesFilter<"Session"> | string | null
    token?: StringWithAggregatesFilter<"Session"> | string
    expires_at?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    data?: JsonWithAggregatesFilter<"Session">
    created_at?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type AddressCreateInput = {
    id?: string
    first_name: string
    last_name: string
    email: string
    phone?: string | null
    address_line1: string
    address_line2: string
    city: string
    state: string
    country: string
    is_default_shipping: boolean
    is_default_billing: boolean
    created_at?: Date | string
    updated_at?: Date | string
    user?: UserCreateNestedOneWithoutAddressInput
    shipping_orders?: OrdersCreateNestedManyWithoutShipping_addressInput
    billing_orders?: OrdersCreateNestedManyWithoutBilling_addressInput
  }

  export type AddressUncheckedCreateInput = {
    id?: string
    user_id?: string | null
    first_name: string
    last_name: string
    email: string
    phone?: string | null
    address_line1: string
    address_line2: string
    city: string
    state: string
    country: string
    is_default_shipping: boolean
    is_default_billing: boolean
    created_at?: Date | string
    updated_at?: Date | string
    shipping_orders?: OrdersUncheckedCreateNestedManyWithoutShipping_addressInput
    billing_orders?: OrdersUncheckedCreateNestedManyWithoutBilling_addressInput
  }

  export type AddressUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address_line1?: StringFieldUpdateOperationsInput | string
    address_line2?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    is_default_shipping?: BoolFieldUpdateOperationsInput | boolean
    is_default_billing?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutAddressNestedInput
    shipping_orders?: OrdersUpdateManyWithoutShipping_addressNestedInput
    billing_orders?: OrdersUpdateManyWithoutBilling_addressNestedInput
  }

  export type AddressUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address_line1?: StringFieldUpdateOperationsInput | string
    address_line2?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    is_default_shipping?: BoolFieldUpdateOperationsInput | boolean
    is_default_billing?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    shipping_orders?: OrdersUncheckedUpdateManyWithoutShipping_addressNestedInput
    billing_orders?: OrdersUncheckedUpdateManyWithoutBilling_addressNestedInput
  }

  export type AddressCreateManyInput = {
    id?: string
    user_id?: string | null
    first_name: string
    last_name: string
    email: string
    phone?: string | null
    address_line1: string
    address_line2: string
    city: string
    state: string
    country: string
    is_default_shipping: boolean
    is_default_billing: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type AddressUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address_line1?: StringFieldUpdateOperationsInput | string
    address_line2?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    is_default_shipping?: BoolFieldUpdateOperationsInput | boolean
    is_default_billing?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AddressUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address_line1?: StringFieldUpdateOperationsInput | string
    address_line2?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    is_default_shipping?: BoolFieldUpdateOperationsInput | boolean
    is_default_billing?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CartsCreateInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string
    status: $Enums.Status
    users?: UserCreateNestedOneWithoutCartInput
    session: SessionCreateNestedOneWithoutCartInput
    cart_items?: CartItemsCreateNestedManyWithoutCartsInput
    orders?: OrdersCreateNestedManyWithoutCartsInput
  }

  export type CartsUncheckedCreateInput = {
    id?: string
    user_id?: string | null
    session_id: string
    created_at?: Date | string
    updated_at?: Date | string
    status: $Enums.Status
    cart_items?: CartItemsUncheckedCreateNestedManyWithoutCartsInput
    orders?: OrdersUncheckedCreateNestedManyWithoutCartsInput
  }

  export type CartsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    users?: UserUpdateOneWithoutCartNestedInput
    session?: SessionUpdateOneRequiredWithoutCartNestedInput
    cart_items?: CartItemsUpdateManyWithoutCartsNestedInput
    orders?: OrdersUpdateManyWithoutCartsNestedInput
  }

  export type CartsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    session_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    cart_items?: CartItemsUncheckedUpdateManyWithoutCartsNestedInput
    orders?: OrdersUncheckedUpdateManyWithoutCartsNestedInput
  }

  export type CartsCreateManyInput = {
    id?: string
    user_id?: string | null
    session_id: string
    created_at?: Date | string
    updated_at?: Date | string
    status: $Enums.Status
  }

  export type CartsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type CartsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    session_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type CartItemsCreateInput = {
    id?: string
    quantity: number
    product_variant: ProductVariantsCreateNestedOneWithoutCart_itemsInput
    carts: CartsCreateNestedOneWithoutCart_itemsInput
  }

  export type CartItemsUncheckedCreateInput = {
    id?: string
    cart_id: string
    product_variant_id: string
    quantity: number
  }

  export type CartItemsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    product_variant?: ProductVariantsUpdateOneRequiredWithoutCart_itemsNestedInput
    carts?: CartsUpdateOneRequiredWithoutCart_itemsNestedInput
  }

  export type CartItemsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cart_id?: StringFieldUpdateOperationsInput | string
    product_variant_id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type CartItemsCreateManyInput = {
    id?: string
    cart_id: string
    product_variant_id: string
    quantity: number
  }

  export type CartItemsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type CartItemsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    cart_id?: StringFieldUpdateOperationsInput | string
    product_variant_id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type OrdersCreateInput = {
    id?: string
    order_number: string
    status: $Enums.OrderStatus
    total_amount: Decimal | DecimalJsLike | number | string
    shipping_amount: Decimal | DecimalJsLike | number | string
    tax_amount: Decimal | DecimalJsLike | number | string
    discount_amount: Decimal | DecimalJsLike | number | string
    payment_status: $Enums.PaymentStatus
    payment_method: string
    created_at?: Date | string
    updated_at?: Date | string
    shipping_address: AddressCreateNestedOneWithoutShipping_ordersInput
    billing_address: AddressCreateNestedOneWithoutBilling_ordersInput
    carts: CartsCreateNestedOneWithoutOrdersInput
    user?: UserCreateNestedOneWithoutOrdersInput
    order_items?: OrderItemsCreateNestedManyWithoutOrdersInput
  }

  export type OrdersUncheckedCreateInput = {
    id?: string
    user_id?: string | null
    cart_id: string
    order_number: string
    status: $Enums.OrderStatus
    total_amount: Decimal | DecimalJsLike | number | string
    shipping_amount: Decimal | DecimalJsLike | number | string
    tax_amount: Decimal | DecimalJsLike | number | string
    discount_amount: Decimal | DecimalJsLike | number | string
    shipping_address_id: string
    billing_address_id: string
    payment_status: $Enums.PaymentStatus
    payment_method: string
    created_at?: Date | string
    updated_at?: Date | string
    order_items?: OrderItemsUncheckedCreateNestedManyWithoutOrdersInput
  }

  export type OrdersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_number?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shipping_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tax_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    payment_method?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    shipping_address?: AddressUpdateOneRequiredWithoutShipping_ordersNestedInput
    billing_address?: AddressUpdateOneRequiredWithoutBilling_ordersNestedInput
    carts?: CartsUpdateOneRequiredWithoutOrdersNestedInput
    user?: UserUpdateOneWithoutOrdersNestedInput
    order_items?: OrderItemsUpdateManyWithoutOrdersNestedInput
  }

  export type OrdersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    cart_id?: StringFieldUpdateOperationsInput | string
    order_number?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shipping_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tax_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shipping_address_id?: StringFieldUpdateOperationsInput | string
    billing_address_id?: StringFieldUpdateOperationsInput | string
    payment_status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    payment_method?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    order_items?: OrderItemsUncheckedUpdateManyWithoutOrdersNestedInput
  }

  export type OrdersCreateManyInput = {
    id?: string
    user_id?: string | null
    cart_id: string
    order_number: string
    status: $Enums.OrderStatus
    total_amount: Decimal | DecimalJsLike | number | string
    shipping_amount: Decimal | DecimalJsLike | number | string
    tax_amount: Decimal | DecimalJsLike | number | string
    discount_amount: Decimal | DecimalJsLike | number | string
    shipping_address_id: string
    billing_address_id: string
    payment_status: $Enums.PaymentStatus
    payment_method: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type OrdersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_number?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shipping_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tax_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    payment_method?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrdersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    cart_id?: StringFieldUpdateOperationsInput | string
    order_number?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shipping_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tax_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shipping_address_id?: StringFieldUpdateOperationsInput | string
    billing_address_id?: StringFieldUpdateOperationsInput | string
    payment_status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    payment_method?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemsCreateInput = {
    id?: string
    quantity: number
    unit_price: Decimal | DecimalJsLike | number | string
    total_price: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    product_variant: ProductVariantsCreateNestedOneWithoutOrder_itemsInput
    orders: OrdersCreateNestedOneWithoutOrder_itemsInput
  }

  export type OrderItemsUncheckedCreateInput = {
    id?: string
    order_id: string
    product_variant_id: string
    quantity: number
    unit_price: Decimal | DecimalJsLike | number | string
    total_price: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
  }

  export type OrderItemsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    product_variant?: ProductVariantsUpdateOneRequiredWithoutOrder_itemsNestedInput
    orders?: OrdersUpdateOneRequiredWithoutOrder_itemsNestedInput
  }

  export type OrderItemsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_id?: StringFieldUpdateOperationsInput | string
    product_variant_id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemsCreateManyInput = {
    id?: string
    order_id: string
    product_variant_id: string
    quantity: number
    unit_price: Decimal | DecimalJsLike | number | string
    total_price: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
  }

  export type OrderItemsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_id?: StringFieldUpdateOperationsInput | string
    product_variant_id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductsCreateInput = {
    id?: string
    name: string
    slug: string
    description: string
    price: Decimal | DecimalJsLike | number | string
    inventory_quantity: number
    is_available: boolean
    created_at?: Date | string
    updated_at?: Date | string
    category: CategoryCreateNestedOneWithoutProductsInput
    product_images?: ProductImagesCreateNestedManyWithoutProductInput
    product_variant?: ProductVariantsCreateNestedManyWithoutProductInput
  }

  export type ProductsUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    description: string
    price: Decimal | DecimalJsLike | number | string
    inventory_quantity: number
    is_available: boolean
    category_id: string
    created_at?: Date | string
    updated_at?: Date | string
    product_images?: ProductImagesUncheckedCreateNestedManyWithoutProductInput
    product_variant?: ProductVariantsUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    inventory_quantity?: IntFieldUpdateOperationsInput | number
    is_available?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput
    product_images?: ProductImagesUpdateManyWithoutProductNestedInput
    product_variant?: ProductVariantsUpdateManyWithoutProductNestedInput
  }

  export type ProductsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    inventory_quantity?: IntFieldUpdateOperationsInput | number
    is_available?: BoolFieldUpdateOperationsInput | boolean
    category_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    product_images?: ProductImagesUncheckedUpdateManyWithoutProductNestedInput
    product_variant?: ProductVariantsUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductsCreateManyInput = {
    id?: string
    name: string
    slug: string
    description: string
    price: Decimal | DecimalJsLike | number | string
    inventory_quantity: number
    is_available: boolean
    category_id: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ProductsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    inventory_quantity?: IntFieldUpdateOperationsInput | number
    is_available?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    inventory_quantity?: IntFieldUpdateOperationsInput | number
    is_available?: BoolFieldUpdateOperationsInput | boolean
    category_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductImagesCreateInput = {
    id?: string
    url: string
    is_primary: boolean
    display_order?: number
    created_at?: Date | string
    product: ProductsCreateNestedOneWithoutProduct_imagesInput
  }

  export type ProductImagesUncheckedCreateInput = {
    id?: string
    product_id: string
    url: string
    is_primary: boolean
    display_order?: number
    created_at?: Date | string
  }

  export type ProductImagesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    is_primary?: BoolFieldUpdateOperationsInput | boolean
    display_order?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductsUpdateOneRequiredWithoutProduct_imagesNestedInput
  }

  export type ProductImagesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    product_id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    is_primary?: BoolFieldUpdateOperationsInput | boolean
    display_order?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductImagesCreateManyInput = {
    id?: string
    product_id: string
    url: string
    is_primary: boolean
    display_order?: number
    created_at?: Date | string
  }

  export type ProductImagesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    is_primary?: BoolFieldUpdateOperationsInput | boolean
    display_order?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductImagesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    product_id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    is_primary?: BoolFieldUpdateOperationsInput | boolean
    display_order?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductVariantsCreateInput = {
    id?: string
    name: string
    sku: string
    price?: Decimal | DecimalJsLike | number | string | null
    inventory_quantity: number
    option1_value?: string | null
    option2_value?: string | null
    option3_value?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    product: ProductsCreateNestedOneWithoutProduct_variantInput
    cart_items?: CartItemsCreateNestedManyWithoutProduct_variantInput
    order_items?: OrderItemsCreateNestedManyWithoutProduct_variantInput
  }

  export type ProductVariantsUncheckedCreateInput = {
    id?: string
    product_id: string
    name: string
    sku: string
    price?: Decimal | DecimalJsLike | number | string | null
    inventory_quantity: number
    option1_value?: string | null
    option2_value?: string | null
    option3_value?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    cart_items?: CartItemsUncheckedCreateNestedManyWithoutProduct_variantInput
    order_items?: OrderItemsUncheckedCreateNestedManyWithoutProduct_variantInput
  }

  export type ProductVariantsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    inventory_quantity?: IntFieldUpdateOperationsInput | number
    option1_value?: NullableStringFieldUpdateOperationsInput | string | null
    option2_value?: NullableStringFieldUpdateOperationsInput | string | null
    option3_value?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductsUpdateOneRequiredWithoutProduct_variantNestedInput
    cart_items?: CartItemsUpdateManyWithoutProduct_variantNestedInput
    order_items?: OrderItemsUpdateManyWithoutProduct_variantNestedInput
  }

  export type ProductVariantsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    product_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    inventory_quantity?: IntFieldUpdateOperationsInput | number
    option1_value?: NullableStringFieldUpdateOperationsInput | string | null
    option2_value?: NullableStringFieldUpdateOperationsInput | string | null
    option3_value?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    cart_items?: CartItemsUncheckedUpdateManyWithoutProduct_variantNestedInput
    order_items?: OrderItemsUncheckedUpdateManyWithoutProduct_variantNestedInput
  }

  export type ProductVariantsCreateManyInput = {
    id?: string
    product_id: string
    name: string
    sku: string
    price?: Decimal | DecimalJsLike | number | string | null
    inventory_quantity: number
    option1_value?: string | null
    option2_value?: string | null
    option3_value?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ProductVariantsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    inventory_quantity?: IntFieldUpdateOperationsInput | number
    option1_value?: NullableStringFieldUpdateOperationsInput | string | null
    option2_value?: NullableStringFieldUpdateOperationsInput | string | null
    option3_value?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductVariantsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    product_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    inventory_quantity?: IntFieldUpdateOperationsInput | number
    option1_value?: NullableStringFieldUpdateOperationsInput | string | null
    option2_value?: NullableStringFieldUpdateOperationsInput | string | null
    option3_value?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryCreateInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    image_url?: string | null
    display_order?: number
    parent?: CategoryCreateNestedOneWithoutSubcategoriesInput
    subcategories?: CategoryCreateNestedManyWithoutParentInput
    products?: ProductsCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    image_url?: string | null
    display_order?: number
    parent_id?: string | null
    subcategories?: CategoryUncheckedCreateNestedManyWithoutParentInput
    products?: ProductsUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    display_order?: IntFieldUpdateOperationsInput | number
    parent?: CategoryUpdateOneWithoutSubcategoriesNestedInput
    subcategories?: CategoryUpdateManyWithoutParentNestedInput
    products?: ProductsUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    display_order?: IntFieldUpdateOperationsInput | number
    parent_id?: NullableStringFieldUpdateOperationsInput | string | null
    subcategories?: CategoryUncheckedUpdateManyWithoutParentNestedInput
    products?: ProductsUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    image_url?: string | null
    display_order?: number
    parent_id?: string | null
  }

  export type CategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    display_order?: IntFieldUpdateOperationsInput | number
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    display_order?: IntFieldUpdateOperationsInput | number
    parent_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password_hash: string
    first_name: string
    last_name: string
    role: $Enums.Role
    created_at?: Date | string
    updated_at?: Date | string
    user_profile?: UserProfileCreateNestedManyWithoutUserInput
    cart?: CartsCreateNestedManyWithoutUsersInput
    orders?: OrdersCreateNestedManyWithoutUserInput
    address?: AddressCreateNestedManyWithoutUserInput
    session?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password_hash: string
    first_name: string
    last_name: string
    role: $Enums.Role
    created_at?: Date | string
    updated_at?: Date | string
    user_profile?: UserProfileUncheckedCreateNestedManyWithoutUserInput
    cart?: CartsUncheckedCreateNestedManyWithoutUsersInput
    orders?: OrdersUncheckedCreateNestedManyWithoutUserInput
    address?: AddressUncheckedCreateNestedManyWithoutUserInput
    session?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_profile?: UserProfileUpdateManyWithoutUserNestedInput
    cart?: CartsUpdateManyWithoutUsersNestedInput
    orders?: OrdersUpdateManyWithoutUserNestedInput
    address?: AddressUpdateManyWithoutUserNestedInput
    session?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_profile?: UserProfileUncheckedUpdateManyWithoutUserNestedInput
    cart?: CartsUncheckedUpdateManyWithoutUsersNestedInput
    orders?: OrdersUncheckedUpdateManyWithoutUserNestedInput
    address?: AddressUncheckedUpdateManyWithoutUserNestedInput
    session?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password_hash: string
    first_name: string
    last_name: string
    role: $Enums.Role
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProfileCreateInput = {
    id?: string
    phone: string
    address_line1?: string | null
    address_line2?: string | null
    city?: string | null
    state?: string | null
    postal_code?: string | null
    country?: string | null
    avatar_url?: string | null
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutUser_profileInput
  }

  export type UserProfileUncheckedCreateInput = {
    id?: string
    user_id: string
    phone: string
    address_line1?: string | null
    address_line2?: string | null
    city?: string | null
    state?: string | null
    postal_code?: string | null
    country?: string | null
    avatar_url?: string | null
    updated_at?: Date | string
  }

  export type UserProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address_line1?: NullableStringFieldUpdateOperationsInput | string | null
    address_line2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUser_profileNestedInput
  }

  export type UserProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address_line1?: NullableStringFieldUpdateOperationsInput | string | null
    address_line2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProfileCreateManyInput = {
    id?: string
    user_id: string
    phone: string
    address_line1?: string | null
    address_line2?: string | null
    city?: string | null
    state?: string | null
    postal_code?: string | null
    country?: string | null
    avatar_url?: string | null
    updated_at?: Date | string
  }

  export type UserProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address_line1?: NullableStringFieldUpdateOperationsInput | string | null
    address_line2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address_line1?: NullableStringFieldUpdateOperationsInput | string | null
    address_line2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateInput = {
    id?: string
    token: string
    expires_at: Date | string
    data: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    user?: UserCreateNestedOneWithoutSessionInput
    cart?: CartsCreateNestedManyWithoutSessionInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    user_id?: string | null
    token: string
    expires_at: Date | string
    data: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    cart?: CartsUncheckedCreateNestedManyWithoutSessionInput
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    data?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutSessionNestedInput
    cart?: CartsUpdateManyWithoutSessionNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    token?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    data?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    cart?: CartsUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type SessionCreateManyInput = {
    id?: string
    user_id?: string | null
    token: string
    expires_at: Date | string
    data: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    data?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    token?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    data?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type OrdersListRelationFilter = {
    every?: OrdersWhereInput
    some?: OrdersWhereInput
    none?: OrdersWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type OrdersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AddressCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address_line1?: SortOrder
    address_line2?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    is_default_shipping?: SortOrder
    is_default_billing?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type AddressMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address_line1?: SortOrder
    address_line2?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    is_default_shipping?: SortOrder
    is_default_billing?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type AddressMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address_line1?: SortOrder
    address_line2?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    is_default_shipping?: SortOrder
    is_default_billing?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type SessionScalarRelationFilter = {
    is?: SessionWhereInput
    isNot?: SessionWhereInput
  }

  export type CartItemsListRelationFilter = {
    every?: CartItemsWhereInput
    some?: CartItemsWhereInput
    none?: CartItemsWhereInput
  }

  export type CartItemsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CartsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    session_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    status?: SortOrder
  }

  export type CartsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    session_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    status?: SortOrder
  }

  export type CartsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    session_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    status?: SortOrder
  }

  export type EnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type ProductVariantsScalarRelationFilter = {
    is?: ProductVariantsWhereInput
    isNot?: ProductVariantsWhereInput
  }

  export type CartsScalarRelationFilter = {
    is?: CartsWhereInput
    isNot?: CartsWhereInput
  }

  export type CartItemsCart_idProduct_variant_idCompoundUniqueInput = {
    cart_id: string
    product_variant_id: string
  }

  export type CartItemsCountOrderByAggregateInput = {
    id?: SortOrder
    cart_id?: SortOrder
    product_variant_id?: SortOrder
    quantity?: SortOrder
  }

  export type CartItemsAvgOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type CartItemsMaxOrderByAggregateInput = {
    id?: SortOrder
    cart_id?: SortOrder
    product_variant_id?: SortOrder
    quantity?: SortOrder
  }

  export type CartItemsMinOrderByAggregateInput = {
    id?: SortOrder
    cart_id?: SortOrder
    product_variant_id?: SortOrder
    quantity?: SortOrder
  }

  export type CartItemsSumOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type EnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type AddressScalarRelationFilter = {
    is?: AddressWhereInput
    isNot?: AddressWhereInput
  }

  export type OrderItemsListRelationFilter = {
    every?: OrderItemsWhereInput
    some?: OrderItemsWhereInput
    none?: OrderItemsWhereInput
  }

  export type OrderItemsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrdersCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    cart_id?: SortOrder
    order_number?: SortOrder
    status?: SortOrder
    total_amount?: SortOrder
    shipping_amount?: SortOrder
    tax_amount?: SortOrder
    discount_amount?: SortOrder
    shipping_address_id?: SortOrder
    billing_address_id?: SortOrder
    payment_status?: SortOrder
    payment_method?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type OrdersAvgOrderByAggregateInput = {
    total_amount?: SortOrder
    shipping_amount?: SortOrder
    tax_amount?: SortOrder
    discount_amount?: SortOrder
  }

  export type OrdersMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    cart_id?: SortOrder
    order_number?: SortOrder
    status?: SortOrder
    total_amount?: SortOrder
    shipping_amount?: SortOrder
    tax_amount?: SortOrder
    discount_amount?: SortOrder
    shipping_address_id?: SortOrder
    billing_address_id?: SortOrder
    payment_status?: SortOrder
    payment_method?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type OrdersMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    cart_id?: SortOrder
    order_number?: SortOrder
    status?: SortOrder
    total_amount?: SortOrder
    shipping_amount?: SortOrder
    tax_amount?: SortOrder
    discount_amount?: SortOrder
    shipping_address_id?: SortOrder
    billing_address_id?: SortOrder
    payment_status?: SortOrder
    payment_method?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type OrdersSumOrderByAggregateInput = {
    total_amount?: SortOrder
    shipping_amount?: SortOrder
    tax_amount?: SortOrder
    discount_amount?: SortOrder
  }

  export type EnumOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumOrderStatusFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type EnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type OrdersScalarRelationFilter = {
    is?: OrdersWhereInput
    isNot?: OrdersWhereInput
  }

  export type OrderItemsOrder_idProduct_variant_idCompoundUniqueInput = {
    order_id: string
    product_variant_id: string
  }

  export type OrderItemsCountOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    product_variant_id?: SortOrder
    quantity?: SortOrder
    unit_price?: SortOrder
    total_price?: SortOrder
    created_at?: SortOrder
  }

  export type OrderItemsAvgOrderByAggregateInput = {
    quantity?: SortOrder
    unit_price?: SortOrder
    total_price?: SortOrder
  }

  export type OrderItemsMaxOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    product_variant_id?: SortOrder
    quantity?: SortOrder
    unit_price?: SortOrder
    total_price?: SortOrder
    created_at?: SortOrder
  }

  export type OrderItemsMinOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    product_variant_id?: SortOrder
    quantity?: SortOrder
    unit_price?: SortOrder
    total_price?: SortOrder
    created_at?: SortOrder
  }

  export type OrderItemsSumOrderByAggregateInput = {
    quantity?: SortOrder
    unit_price?: SortOrder
    total_price?: SortOrder
  }

  export type CategoryScalarRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type ProductImagesListRelationFilter = {
    every?: ProductImagesWhereInput
    some?: ProductImagesWhereInput
    none?: ProductImagesWhereInput
  }

  export type ProductVariantsListRelationFilter = {
    every?: ProductVariantsWhereInput
    some?: ProductVariantsWhereInput
    none?: ProductVariantsWhereInput
  }

  export type ProductImagesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductVariantsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    price?: SortOrder
    inventory_quantity?: SortOrder
    is_available?: SortOrder
    category_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ProductsAvgOrderByAggregateInput = {
    price?: SortOrder
    inventory_quantity?: SortOrder
  }

  export type ProductsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    price?: SortOrder
    inventory_quantity?: SortOrder
    is_available?: SortOrder
    category_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ProductsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    price?: SortOrder
    inventory_quantity?: SortOrder
    is_available?: SortOrder
    category_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ProductsSumOrderByAggregateInput = {
    price?: SortOrder
    inventory_quantity?: SortOrder
  }

  export type ProductsScalarRelationFilter = {
    is?: ProductsWhereInput
    isNot?: ProductsWhereInput
  }

  export type ProductImagesCountOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    url?: SortOrder
    is_primary?: SortOrder
    display_order?: SortOrder
    created_at?: SortOrder
  }

  export type ProductImagesAvgOrderByAggregateInput = {
    display_order?: SortOrder
  }

  export type ProductImagesMaxOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    url?: SortOrder
    is_primary?: SortOrder
    display_order?: SortOrder
    created_at?: SortOrder
  }

  export type ProductImagesMinOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    url?: SortOrder
    is_primary?: SortOrder
    display_order?: SortOrder
    created_at?: SortOrder
  }

  export type ProductImagesSumOrderByAggregateInput = {
    display_order?: SortOrder
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type ProductVariantsCountOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    name?: SortOrder
    sku?: SortOrder
    price?: SortOrder
    inventory_quantity?: SortOrder
    option1_value?: SortOrder
    option2_value?: SortOrder
    option3_value?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ProductVariantsAvgOrderByAggregateInput = {
    price?: SortOrder
    inventory_quantity?: SortOrder
  }

  export type ProductVariantsMaxOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    name?: SortOrder
    sku?: SortOrder
    price?: SortOrder
    inventory_quantity?: SortOrder
    option1_value?: SortOrder
    option2_value?: SortOrder
    option3_value?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ProductVariantsMinOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    name?: SortOrder
    sku?: SortOrder
    price?: SortOrder
    inventory_quantity?: SortOrder
    option1_value?: SortOrder
    option2_value?: SortOrder
    option3_value?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ProductVariantsSumOrderByAggregateInput = {
    price?: SortOrder
    inventory_quantity?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type CategoryNullableScalarRelationFilter = {
    is?: CategoryWhereInput | null
    isNot?: CategoryWhereInput | null
  }

  export type CategoryListRelationFilter = {
    every?: CategoryWhereInput
    some?: CategoryWhereInput
    none?: CategoryWhereInput
  }

  export type ProductsListRelationFilter = {
    every?: ProductsWhereInput
    some?: ProductsWhereInput
    none?: ProductsWhereInput
  }

  export type CategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    image_url?: SortOrder
    display_order?: SortOrder
    parent_id?: SortOrder
  }

  export type CategoryAvgOrderByAggregateInput = {
    display_order?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    image_url?: SortOrder
    display_order?: SortOrder
    parent_id?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    image_url?: SortOrder
    display_order?: SortOrder
    parent_id?: SortOrder
  }

  export type CategorySumOrderByAggregateInput = {
    display_order?: SortOrder
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type UserProfileListRelationFilter = {
    every?: UserProfileWhereInput
    some?: UserProfileWhereInput
    none?: UserProfileWhereInput
  }

  export type CartsListRelationFilter = {
    every?: CartsWhereInput
    some?: CartsWhereInput
    none?: CartsWhereInput
  }

  export type AddressListRelationFilter = {
    every?: AddressWhereInput
    some?: AddressWhereInput
    none?: AddressWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type UserProfileOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CartsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AddressOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserProfileCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    phone?: SortOrder
    address_line1?: SortOrder
    address_line2?: SortOrder
    city?: SortOrder
    state?: SortOrder
    postal_code?: SortOrder
    country?: SortOrder
    avatar_url?: SortOrder
    updated_at?: SortOrder
  }

  export type UserProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    phone?: SortOrder
    address_line1?: SortOrder
    address_line2?: SortOrder
    city?: SortOrder
    state?: SortOrder
    postal_code?: SortOrder
    country?: SortOrder
    avatar_url?: SortOrder
    updated_at?: SortOrder
  }

  export type UserProfileMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    phone?: SortOrder
    address_line1?: SortOrder
    address_line2?: SortOrder
    city?: SortOrder
    state?: SortOrder
    postal_code?: SortOrder
    country?: SortOrder
    avatar_url?: SortOrder
    updated_at?: SortOrder
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    token?: SortOrder
    expires_at?: SortOrder
    data?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    token?: SortOrder
    expires_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    token?: SortOrder
    expires_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type UserCreateNestedOneWithoutAddressInput = {
    create?: XOR<UserCreateWithoutAddressInput, UserUncheckedCreateWithoutAddressInput>
    connectOrCreate?: UserCreateOrConnectWithoutAddressInput
    connect?: UserWhereUniqueInput
  }

  export type OrdersCreateNestedManyWithoutShipping_addressInput = {
    create?: XOR<OrdersCreateWithoutShipping_addressInput, OrdersUncheckedCreateWithoutShipping_addressInput> | OrdersCreateWithoutShipping_addressInput[] | OrdersUncheckedCreateWithoutShipping_addressInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutShipping_addressInput | OrdersCreateOrConnectWithoutShipping_addressInput[]
    createMany?: OrdersCreateManyShipping_addressInputEnvelope
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
  }

  export type OrdersCreateNestedManyWithoutBilling_addressInput = {
    create?: XOR<OrdersCreateWithoutBilling_addressInput, OrdersUncheckedCreateWithoutBilling_addressInput> | OrdersCreateWithoutBilling_addressInput[] | OrdersUncheckedCreateWithoutBilling_addressInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutBilling_addressInput | OrdersCreateOrConnectWithoutBilling_addressInput[]
    createMany?: OrdersCreateManyBilling_addressInputEnvelope
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
  }

  export type OrdersUncheckedCreateNestedManyWithoutShipping_addressInput = {
    create?: XOR<OrdersCreateWithoutShipping_addressInput, OrdersUncheckedCreateWithoutShipping_addressInput> | OrdersCreateWithoutShipping_addressInput[] | OrdersUncheckedCreateWithoutShipping_addressInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutShipping_addressInput | OrdersCreateOrConnectWithoutShipping_addressInput[]
    createMany?: OrdersCreateManyShipping_addressInputEnvelope
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
  }

  export type OrdersUncheckedCreateNestedManyWithoutBilling_addressInput = {
    create?: XOR<OrdersCreateWithoutBilling_addressInput, OrdersUncheckedCreateWithoutBilling_addressInput> | OrdersCreateWithoutBilling_addressInput[] | OrdersUncheckedCreateWithoutBilling_addressInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutBilling_addressInput | OrdersCreateOrConnectWithoutBilling_addressInput[]
    createMany?: OrdersCreateManyBilling_addressInputEnvelope
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneWithoutAddressNestedInput = {
    create?: XOR<UserCreateWithoutAddressInput, UserUncheckedCreateWithoutAddressInput>
    connectOrCreate?: UserCreateOrConnectWithoutAddressInput
    upsert?: UserUpsertWithoutAddressInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAddressInput, UserUpdateWithoutAddressInput>, UserUncheckedUpdateWithoutAddressInput>
  }

  export type OrdersUpdateManyWithoutShipping_addressNestedInput = {
    create?: XOR<OrdersCreateWithoutShipping_addressInput, OrdersUncheckedCreateWithoutShipping_addressInput> | OrdersCreateWithoutShipping_addressInput[] | OrdersUncheckedCreateWithoutShipping_addressInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutShipping_addressInput | OrdersCreateOrConnectWithoutShipping_addressInput[]
    upsert?: OrdersUpsertWithWhereUniqueWithoutShipping_addressInput | OrdersUpsertWithWhereUniqueWithoutShipping_addressInput[]
    createMany?: OrdersCreateManyShipping_addressInputEnvelope
    set?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    disconnect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    delete?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    update?: OrdersUpdateWithWhereUniqueWithoutShipping_addressInput | OrdersUpdateWithWhereUniqueWithoutShipping_addressInput[]
    updateMany?: OrdersUpdateManyWithWhereWithoutShipping_addressInput | OrdersUpdateManyWithWhereWithoutShipping_addressInput[]
    deleteMany?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
  }

  export type OrdersUpdateManyWithoutBilling_addressNestedInput = {
    create?: XOR<OrdersCreateWithoutBilling_addressInput, OrdersUncheckedCreateWithoutBilling_addressInput> | OrdersCreateWithoutBilling_addressInput[] | OrdersUncheckedCreateWithoutBilling_addressInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutBilling_addressInput | OrdersCreateOrConnectWithoutBilling_addressInput[]
    upsert?: OrdersUpsertWithWhereUniqueWithoutBilling_addressInput | OrdersUpsertWithWhereUniqueWithoutBilling_addressInput[]
    createMany?: OrdersCreateManyBilling_addressInputEnvelope
    set?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    disconnect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    delete?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    update?: OrdersUpdateWithWhereUniqueWithoutBilling_addressInput | OrdersUpdateWithWhereUniqueWithoutBilling_addressInput[]
    updateMany?: OrdersUpdateManyWithWhereWithoutBilling_addressInput | OrdersUpdateManyWithWhereWithoutBilling_addressInput[]
    deleteMany?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
  }

  export type OrdersUncheckedUpdateManyWithoutShipping_addressNestedInput = {
    create?: XOR<OrdersCreateWithoutShipping_addressInput, OrdersUncheckedCreateWithoutShipping_addressInput> | OrdersCreateWithoutShipping_addressInput[] | OrdersUncheckedCreateWithoutShipping_addressInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutShipping_addressInput | OrdersCreateOrConnectWithoutShipping_addressInput[]
    upsert?: OrdersUpsertWithWhereUniqueWithoutShipping_addressInput | OrdersUpsertWithWhereUniqueWithoutShipping_addressInput[]
    createMany?: OrdersCreateManyShipping_addressInputEnvelope
    set?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    disconnect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    delete?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    update?: OrdersUpdateWithWhereUniqueWithoutShipping_addressInput | OrdersUpdateWithWhereUniqueWithoutShipping_addressInput[]
    updateMany?: OrdersUpdateManyWithWhereWithoutShipping_addressInput | OrdersUpdateManyWithWhereWithoutShipping_addressInput[]
    deleteMany?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
  }

  export type OrdersUncheckedUpdateManyWithoutBilling_addressNestedInput = {
    create?: XOR<OrdersCreateWithoutBilling_addressInput, OrdersUncheckedCreateWithoutBilling_addressInput> | OrdersCreateWithoutBilling_addressInput[] | OrdersUncheckedCreateWithoutBilling_addressInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutBilling_addressInput | OrdersCreateOrConnectWithoutBilling_addressInput[]
    upsert?: OrdersUpsertWithWhereUniqueWithoutBilling_addressInput | OrdersUpsertWithWhereUniqueWithoutBilling_addressInput[]
    createMany?: OrdersCreateManyBilling_addressInputEnvelope
    set?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    disconnect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    delete?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    update?: OrdersUpdateWithWhereUniqueWithoutBilling_addressInput | OrdersUpdateWithWhereUniqueWithoutBilling_addressInput[]
    updateMany?: OrdersUpdateManyWithWhereWithoutBilling_addressInput | OrdersUpdateManyWithWhereWithoutBilling_addressInput[]
    deleteMany?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCartInput = {
    create?: XOR<UserCreateWithoutCartInput, UserUncheckedCreateWithoutCartInput>
    connectOrCreate?: UserCreateOrConnectWithoutCartInput
    connect?: UserWhereUniqueInput
  }

  export type SessionCreateNestedOneWithoutCartInput = {
    create?: XOR<SessionCreateWithoutCartInput, SessionUncheckedCreateWithoutCartInput>
    connectOrCreate?: SessionCreateOrConnectWithoutCartInput
    connect?: SessionWhereUniqueInput
  }

  export type CartItemsCreateNestedManyWithoutCartsInput = {
    create?: XOR<CartItemsCreateWithoutCartsInput, CartItemsUncheckedCreateWithoutCartsInput> | CartItemsCreateWithoutCartsInput[] | CartItemsUncheckedCreateWithoutCartsInput[]
    connectOrCreate?: CartItemsCreateOrConnectWithoutCartsInput | CartItemsCreateOrConnectWithoutCartsInput[]
    createMany?: CartItemsCreateManyCartsInputEnvelope
    connect?: CartItemsWhereUniqueInput | CartItemsWhereUniqueInput[]
  }

  export type OrdersCreateNestedManyWithoutCartsInput = {
    create?: XOR<OrdersCreateWithoutCartsInput, OrdersUncheckedCreateWithoutCartsInput> | OrdersCreateWithoutCartsInput[] | OrdersUncheckedCreateWithoutCartsInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutCartsInput | OrdersCreateOrConnectWithoutCartsInput[]
    createMany?: OrdersCreateManyCartsInputEnvelope
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
  }

  export type CartItemsUncheckedCreateNestedManyWithoutCartsInput = {
    create?: XOR<CartItemsCreateWithoutCartsInput, CartItemsUncheckedCreateWithoutCartsInput> | CartItemsCreateWithoutCartsInput[] | CartItemsUncheckedCreateWithoutCartsInput[]
    connectOrCreate?: CartItemsCreateOrConnectWithoutCartsInput | CartItemsCreateOrConnectWithoutCartsInput[]
    createMany?: CartItemsCreateManyCartsInputEnvelope
    connect?: CartItemsWhereUniqueInput | CartItemsWhereUniqueInput[]
  }

  export type OrdersUncheckedCreateNestedManyWithoutCartsInput = {
    create?: XOR<OrdersCreateWithoutCartsInput, OrdersUncheckedCreateWithoutCartsInput> | OrdersCreateWithoutCartsInput[] | OrdersUncheckedCreateWithoutCartsInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutCartsInput | OrdersCreateOrConnectWithoutCartsInput[]
    createMany?: OrdersCreateManyCartsInputEnvelope
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
  }

  export type EnumStatusFieldUpdateOperationsInput = {
    set?: $Enums.Status
  }

  export type UserUpdateOneWithoutCartNestedInput = {
    create?: XOR<UserCreateWithoutCartInput, UserUncheckedCreateWithoutCartInput>
    connectOrCreate?: UserCreateOrConnectWithoutCartInput
    upsert?: UserUpsertWithoutCartInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCartInput, UserUpdateWithoutCartInput>, UserUncheckedUpdateWithoutCartInput>
  }

  export type SessionUpdateOneRequiredWithoutCartNestedInput = {
    create?: XOR<SessionCreateWithoutCartInput, SessionUncheckedCreateWithoutCartInput>
    connectOrCreate?: SessionCreateOrConnectWithoutCartInput
    upsert?: SessionUpsertWithoutCartInput
    connect?: SessionWhereUniqueInput
    update?: XOR<XOR<SessionUpdateToOneWithWhereWithoutCartInput, SessionUpdateWithoutCartInput>, SessionUncheckedUpdateWithoutCartInput>
  }

  export type CartItemsUpdateManyWithoutCartsNestedInput = {
    create?: XOR<CartItemsCreateWithoutCartsInput, CartItemsUncheckedCreateWithoutCartsInput> | CartItemsCreateWithoutCartsInput[] | CartItemsUncheckedCreateWithoutCartsInput[]
    connectOrCreate?: CartItemsCreateOrConnectWithoutCartsInput | CartItemsCreateOrConnectWithoutCartsInput[]
    upsert?: CartItemsUpsertWithWhereUniqueWithoutCartsInput | CartItemsUpsertWithWhereUniqueWithoutCartsInput[]
    createMany?: CartItemsCreateManyCartsInputEnvelope
    set?: CartItemsWhereUniqueInput | CartItemsWhereUniqueInput[]
    disconnect?: CartItemsWhereUniqueInput | CartItemsWhereUniqueInput[]
    delete?: CartItemsWhereUniqueInput | CartItemsWhereUniqueInput[]
    connect?: CartItemsWhereUniqueInput | CartItemsWhereUniqueInput[]
    update?: CartItemsUpdateWithWhereUniqueWithoutCartsInput | CartItemsUpdateWithWhereUniqueWithoutCartsInput[]
    updateMany?: CartItemsUpdateManyWithWhereWithoutCartsInput | CartItemsUpdateManyWithWhereWithoutCartsInput[]
    deleteMany?: CartItemsScalarWhereInput | CartItemsScalarWhereInput[]
  }

  export type OrdersUpdateManyWithoutCartsNestedInput = {
    create?: XOR<OrdersCreateWithoutCartsInput, OrdersUncheckedCreateWithoutCartsInput> | OrdersCreateWithoutCartsInput[] | OrdersUncheckedCreateWithoutCartsInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutCartsInput | OrdersCreateOrConnectWithoutCartsInput[]
    upsert?: OrdersUpsertWithWhereUniqueWithoutCartsInput | OrdersUpsertWithWhereUniqueWithoutCartsInput[]
    createMany?: OrdersCreateManyCartsInputEnvelope
    set?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    disconnect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    delete?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    update?: OrdersUpdateWithWhereUniqueWithoutCartsInput | OrdersUpdateWithWhereUniqueWithoutCartsInput[]
    updateMany?: OrdersUpdateManyWithWhereWithoutCartsInput | OrdersUpdateManyWithWhereWithoutCartsInput[]
    deleteMany?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
  }

  export type CartItemsUncheckedUpdateManyWithoutCartsNestedInput = {
    create?: XOR<CartItemsCreateWithoutCartsInput, CartItemsUncheckedCreateWithoutCartsInput> | CartItemsCreateWithoutCartsInput[] | CartItemsUncheckedCreateWithoutCartsInput[]
    connectOrCreate?: CartItemsCreateOrConnectWithoutCartsInput | CartItemsCreateOrConnectWithoutCartsInput[]
    upsert?: CartItemsUpsertWithWhereUniqueWithoutCartsInput | CartItemsUpsertWithWhereUniqueWithoutCartsInput[]
    createMany?: CartItemsCreateManyCartsInputEnvelope
    set?: CartItemsWhereUniqueInput | CartItemsWhereUniqueInput[]
    disconnect?: CartItemsWhereUniqueInput | CartItemsWhereUniqueInput[]
    delete?: CartItemsWhereUniqueInput | CartItemsWhereUniqueInput[]
    connect?: CartItemsWhereUniqueInput | CartItemsWhereUniqueInput[]
    update?: CartItemsUpdateWithWhereUniqueWithoutCartsInput | CartItemsUpdateWithWhereUniqueWithoutCartsInput[]
    updateMany?: CartItemsUpdateManyWithWhereWithoutCartsInput | CartItemsUpdateManyWithWhereWithoutCartsInput[]
    deleteMany?: CartItemsScalarWhereInput | CartItemsScalarWhereInput[]
  }

  export type OrdersUncheckedUpdateManyWithoutCartsNestedInput = {
    create?: XOR<OrdersCreateWithoutCartsInput, OrdersUncheckedCreateWithoutCartsInput> | OrdersCreateWithoutCartsInput[] | OrdersUncheckedCreateWithoutCartsInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutCartsInput | OrdersCreateOrConnectWithoutCartsInput[]
    upsert?: OrdersUpsertWithWhereUniqueWithoutCartsInput | OrdersUpsertWithWhereUniqueWithoutCartsInput[]
    createMany?: OrdersCreateManyCartsInputEnvelope
    set?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    disconnect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    delete?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    update?: OrdersUpdateWithWhereUniqueWithoutCartsInput | OrdersUpdateWithWhereUniqueWithoutCartsInput[]
    updateMany?: OrdersUpdateManyWithWhereWithoutCartsInput | OrdersUpdateManyWithWhereWithoutCartsInput[]
    deleteMany?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
  }

  export type ProductVariantsCreateNestedOneWithoutCart_itemsInput = {
    create?: XOR<ProductVariantsCreateWithoutCart_itemsInput, ProductVariantsUncheckedCreateWithoutCart_itemsInput>
    connectOrCreate?: ProductVariantsCreateOrConnectWithoutCart_itemsInput
    connect?: ProductVariantsWhereUniqueInput
  }

  export type CartsCreateNestedOneWithoutCart_itemsInput = {
    create?: XOR<CartsCreateWithoutCart_itemsInput, CartsUncheckedCreateWithoutCart_itemsInput>
    connectOrCreate?: CartsCreateOrConnectWithoutCart_itemsInput
    connect?: CartsWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProductVariantsUpdateOneRequiredWithoutCart_itemsNestedInput = {
    create?: XOR<ProductVariantsCreateWithoutCart_itemsInput, ProductVariantsUncheckedCreateWithoutCart_itemsInput>
    connectOrCreate?: ProductVariantsCreateOrConnectWithoutCart_itemsInput
    upsert?: ProductVariantsUpsertWithoutCart_itemsInput
    connect?: ProductVariantsWhereUniqueInput
    update?: XOR<XOR<ProductVariantsUpdateToOneWithWhereWithoutCart_itemsInput, ProductVariantsUpdateWithoutCart_itemsInput>, ProductVariantsUncheckedUpdateWithoutCart_itemsInput>
  }

  export type CartsUpdateOneRequiredWithoutCart_itemsNestedInput = {
    create?: XOR<CartsCreateWithoutCart_itemsInput, CartsUncheckedCreateWithoutCart_itemsInput>
    connectOrCreate?: CartsCreateOrConnectWithoutCart_itemsInput
    upsert?: CartsUpsertWithoutCart_itemsInput
    connect?: CartsWhereUniqueInput
    update?: XOR<XOR<CartsUpdateToOneWithWhereWithoutCart_itemsInput, CartsUpdateWithoutCart_itemsInput>, CartsUncheckedUpdateWithoutCart_itemsInput>
  }

  export type AddressCreateNestedOneWithoutShipping_ordersInput = {
    create?: XOR<AddressCreateWithoutShipping_ordersInput, AddressUncheckedCreateWithoutShipping_ordersInput>
    connectOrCreate?: AddressCreateOrConnectWithoutShipping_ordersInput
    connect?: AddressWhereUniqueInput
  }

  export type AddressCreateNestedOneWithoutBilling_ordersInput = {
    create?: XOR<AddressCreateWithoutBilling_ordersInput, AddressUncheckedCreateWithoutBilling_ordersInput>
    connectOrCreate?: AddressCreateOrConnectWithoutBilling_ordersInput
    connect?: AddressWhereUniqueInput
  }

  export type CartsCreateNestedOneWithoutOrdersInput = {
    create?: XOR<CartsCreateWithoutOrdersInput, CartsUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: CartsCreateOrConnectWithoutOrdersInput
    connect?: CartsWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutOrdersInput = {
    create?: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrdersInput
    connect?: UserWhereUniqueInput
  }

  export type OrderItemsCreateNestedManyWithoutOrdersInput = {
    create?: XOR<OrderItemsCreateWithoutOrdersInput, OrderItemsUncheckedCreateWithoutOrdersInput> | OrderItemsCreateWithoutOrdersInput[] | OrderItemsUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: OrderItemsCreateOrConnectWithoutOrdersInput | OrderItemsCreateOrConnectWithoutOrdersInput[]
    createMany?: OrderItemsCreateManyOrdersInputEnvelope
    connect?: OrderItemsWhereUniqueInput | OrderItemsWhereUniqueInput[]
  }

  export type OrderItemsUncheckedCreateNestedManyWithoutOrdersInput = {
    create?: XOR<OrderItemsCreateWithoutOrdersInput, OrderItemsUncheckedCreateWithoutOrdersInput> | OrderItemsCreateWithoutOrdersInput[] | OrderItemsUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: OrderItemsCreateOrConnectWithoutOrdersInput | OrderItemsCreateOrConnectWithoutOrdersInput[]
    createMany?: OrderItemsCreateManyOrdersInputEnvelope
    connect?: OrderItemsWhereUniqueInput | OrderItemsWhereUniqueInput[]
  }

  export type EnumOrderStatusFieldUpdateOperationsInput = {
    set?: $Enums.OrderStatus
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type EnumPaymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentStatus
  }

  export type AddressUpdateOneRequiredWithoutShipping_ordersNestedInput = {
    create?: XOR<AddressCreateWithoutShipping_ordersInput, AddressUncheckedCreateWithoutShipping_ordersInput>
    connectOrCreate?: AddressCreateOrConnectWithoutShipping_ordersInput
    upsert?: AddressUpsertWithoutShipping_ordersInput
    connect?: AddressWhereUniqueInput
    update?: XOR<XOR<AddressUpdateToOneWithWhereWithoutShipping_ordersInput, AddressUpdateWithoutShipping_ordersInput>, AddressUncheckedUpdateWithoutShipping_ordersInput>
  }

  export type AddressUpdateOneRequiredWithoutBilling_ordersNestedInput = {
    create?: XOR<AddressCreateWithoutBilling_ordersInput, AddressUncheckedCreateWithoutBilling_ordersInput>
    connectOrCreate?: AddressCreateOrConnectWithoutBilling_ordersInput
    upsert?: AddressUpsertWithoutBilling_ordersInput
    connect?: AddressWhereUniqueInput
    update?: XOR<XOR<AddressUpdateToOneWithWhereWithoutBilling_ordersInput, AddressUpdateWithoutBilling_ordersInput>, AddressUncheckedUpdateWithoutBilling_ordersInput>
  }

  export type CartsUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<CartsCreateWithoutOrdersInput, CartsUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: CartsCreateOrConnectWithoutOrdersInput
    upsert?: CartsUpsertWithoutOrdersInput
    connect?: CartsWhereUniqueInput
    update?: XOR<XOR<CartsUpdateToOneWithWhereWithoutOrdersInput, CartsUpdateWithoutOrdersInput>, CartsUncheckedUpdateWithoutOrdersInput>
  }

  export type UserUpdateOneWithoutOrdersNestedInput = {
    create?: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrdersInput
    upsert?: UserUpsertWithoutOrdersInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOrdersInput, UserUpdateWithoutOrdersInput>, UserUncheckedUpdateWithoutOrdersInput>
  }

  export type OrderItemsUpdateManyWithoutOrdersNestedInput = {
    create?: XOR<OrderItemsCreateWithoutOrdersInput, OrderItemsUncheckedCreateWithoutOrdersInput> | OrderItemsCreateWithoutOrdersInput[] | OrderItemsUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: OrderItemsCreateOrConnectWithoutOrdersInput | OrderItemsCreateOrConnectWithoutOrdersInput[]
    upsert?: OrderItemsUpsertWithWhereUniqueWithoutOrdersInput | OrderItemsUpsertWithWhereUniqueWithoutOrdersInput[]
    createMany?: OrderItemsCreateManyOrdersInputEnvelope
    set?: OrderItemsWhereUniqueInput | OrderItemsWhereUniqueInput[]
    disconnect?: OrderItemsWhereUniqueInput | OrderItemsWhereUniqueInput[]
    delete?: OrderItemsWhereUniqueInput | OrderItemsWhereUniqueInput[]
    connect?: OrderItemsWhereUniqueInput | OrderItemsWhereUniqueInput[]
    update?: OrderItemsUpdateWithWhereUniqueWithoutOrdersInput | OrderItemsUpdateWithWhereUniqueWithoutOrdersInput[]
    updateMany?: OrderItemsUpdateManyWithWhereWithoutOrdersInput | OrderItemsUpdateManyWithWhereWithoutOrdersInput[]
    deleteMany?: OrderItemsScalarWhereInput | OrderItemsScalarWhereInput[]
  }

  export type OrderItemsUncheckedUpdateManyWithoutOrdersNestedInput = {
    create?: XOR<OrderItemsCreateWithoutOrdersInput, OrderItemsUncheckedCreateWithoutOrdersInput> | OrderItemsCreateWithoutOrdersInput[] | OrderItemsUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: OrderItemsCreateOrConnectWithoutOrdersInput | OrderItemsCreateOrConnectWithoutOrdersInput[]
    upsert?: OrderItemsUpsertWithWhereUniqueWithoutOrdersInput | OrderItemsUpsertWithWhereUniqueWithoutOrdersInput[]
    createMany?: OrderItemsCreateManyOrdersInputEnvelope
    set?: OrderItemsWhereUniqueInput | OrderItemsWhereUniqueInput[]
    disconnect?: OrderItemsWhereUniqueInput | OrderItemsWhereUniqueInput[]
    delete?: OrderItemsWhereUniqueInput | OrderItemsWhereUniqueInput[]
    connect?: OrderItemsWhereUniqueInput | OrderItemsWhereUniqueInput[]
    update?: OrderItemsUpdateWithWhereUniqueWithoutOrdersInput | OrderItemsUpdateWithWhereUniqueWithoutOrdersInput[]
    updateMany?: OrderItemsUpdateManyWithWhereWithoutOrdersInput | OrderItemsUpdateManyWithWhereWithoutOrdersInput[]
    deleteMany?: OrderItemsScalarWhereInput | OrderItemsScalarWhereInput[]
  }

  export type ProductVariantsCreateNestedOneWithoutOrder_itemsInput = {
    create?: XOR<ProductVariantsCreateWithoutOrder_itemsInput, ProductVariantsUncheckedCreateWithoutOrder_itemsInput>
    connectOrCreate?: ProductVariantsCreateOrConnectWithoutOrder_itemsInput
    connect?: ProductVariantsWhereUniqueInput
  }

  export type OrdersCreateNestedOneWithoutOrder_itemsInput = {
    create?: XOR<OrdersCreateWithoutOrder_itemsInput, OrdersUncheckedCreateWithoutOrder_itemsInput>
    connectOrCreate?: OrdersCreateOrConnectWithoutOrder_itemsInput
    connect?: OrdersWhereUniqueInput
  }

  export type ProductVariantsUpdateOneRequiredWithoutOrder_itemsNestedInput = {
    create?: XOR<ProductVariantsCreateWithoutOrder_itemsInput, ProductVariantsUncheckedCreateWithoutOrder_itemsInput>
    connectOrCreate?: ProductVariantsCreateOrConnectWithoutOrder_itemsInput
    upsert?: ProductVariantsUpsertWithoutOrder_itemsInput
    connect?: ProductVariantsWhereUniqueInput
    update?: XOR<XOR<ProductVariantsUpdateToOneWithWhereWithoutOrder_itemsInput, ProductVariantsUpdateWithoutOrder_itemsInput>, ProductVariantsUncheckedUpdateWithoutOrder_itemsInput>
  }

  export type OrdersUpdateOneRequiredWithoutOrder_itemsNestedInput = {
    create?: XOR<OrdersCreateWithoutOrder_itemsInput, OrdersUncheckedCreateWithoutOrder_itemsInput>
    connectOrCreate?: OrdersCreateOrConnectWithoutOrder_itemsInput
    upsert?: OrdersUpsertWithoutOrder_itemsInput
    connect?: OrdersWhereUniqueInput
    update?: XOR<XOR<OrdersUpdateToOneWithWhereWithoutOrder_itemsInput, OrdersUpdateWithoutOrder_itemsInput>, OrdersUncheckedUpdateWithoutOrder_itemsInput>
  }

  export type CategoryCreateNestedOneWithoutProductsInput = {
    create?: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutProductsInput
    connect?: CategoryWhereUniqueInput
  }

  export type ProductImagesCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductImagesCreateWithoutProductInput, ProductImagesUncheckedCreateWithoutProductInput> | ProductImagesCreateWithoutProductInput[] | ProductImagesUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductImagesCreateOrConnectWithoutProductInput | ProductImagesCreateOrConnectWithoutProductInput[]
    createMany?: ProductImagesCreateManyProductInputEnvelope
    connect?: ProductImagesWhereUniqueInput | ProductImagesWhereUniqueInput[]
  }

  export type ProductVariantsCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductVariantsCreateWithoutProductInput, ProductVariantsUncheckedCreateWithoutProductInput> | ProductVariantsCreateWithoutProductInput[] | ProductVariantsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductVariantsCreateOrConnectWithoutProductInput | ProductVariantsCreateOrConnectWithoutProductInput[]
    createMany?: ProductVariantsCreateManyProductInputEnvelope
    connect?: ProductVariantsWhereUniqueInput | ProductVariantsWhereUniqueInput[]
  }

  export type ProductImagesUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductImagesCreateWithoutProductInput, ProductImagesUncheckedCreateWithoutProductInput> | ProductImagesCreateWithoutProductInput[] | ProductImagesUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductImagesCreateOrConnectWithoutProductInput | ProductImagesCreateOrConnectWithoutProductInput[]
    createMany?: ProductImagesCreateManyProductInputEnvelope
    connect?: ProductImagesWhereUniqueInput | ProductImagesWhereUniqueInput[]
  }

  export type ProductVariantsUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductVariantsCreateWithoutProductInput, ProductVariantsUncheckedCreateWithoutProductInput> | ProductVariantsCreateWithoutProductInput[] | ProductVariantsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductVariantsCreateOrConnectWithoutProductInput | ProductVariantsCreateOrConnectWithoutProductInput[]
    createMany?: ProductVariantsCreateManyProductInputEnvelope
    connect?: ProductVariantsWhereUniqueInput | ProductVariantsWhereUniqueInput[]
  }

  export type CategoryUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutProductsInput
    upsert?: CategoryUpsertWithoutProductsInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutProductsInput, CategoryUpdateWithoutProductsInput>, CategoryUncheckedUpdateWithoutProductsInput>
  }

  export type ProductImagesUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductImagesCreateWithoutProductInput, ProductImagesUncheckedCreateWithoutProductInput> | ProductImagesCreateWithoutProductInput[] | ProductImagesUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductImagesCreateOrConnectWithoutProductInput | ProductImagesCreateOrConnectWithoutProductInput[]
    upsert?: ProductImagesUpsertWithWhereUniqueWithoutProductInput | ProductImagesUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductImagesCreateManyProductInputEnvelope
    set?: ProductImagesWhereUniqueInput | ProductImagesWhereUniqueInput[]
    disconnect?: ProductImagesWhereUniqueInput | ProductImagesWhereUniqueInput[]
    delete?: ProductImagesWhereUniqueInput | ProductImagesWhereUniqueInput[]
    connect?: ProductImagesWhereUniqueInput | ProductImagesWhereUniqueInput[]
    update?: ProductImagesUpdateWithWhereUniqueWithoutProductInput | ProductImagesUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductImagesUpdateManyWithWhereWithoutProductInput | ProductImagesUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductImagesScalarWhereInput | ProductImagesScalarWhereInput[]
  }

  export type ProductVariantsUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductVariantsCreateWithoutProductInput, ProductVariantsUncheckedCreateWithoutProductInput> | ProductVariantsCreateWithoutProductInput[] | ProductVariantsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductVariantsCreateOrConnectWithoutProductInput | ProductVariantsCreateOrConnectWithoutProductInput[]
    upsert?: ProductVariantsUpsertWithWhereUniqueWithoutProductInput | ProductVariantsUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductVariantsCreateManyProductInputEnvelope
    set?: ProductVariantsWhereUniqueInput | ProductVariantsWhereUniqueInput[]
    disconnect?: ProductVariantsWhereUniqueInput | ProductVariantsWhereUniqueInput[]
    delete?: ProductVariantsWhereUniqueInput | ProductVariantsWhereUniqueInput[]
    connect?: ProductVariantsWhereUniqueInput | ProductVariantsWhereUniqueInput[]
    update?: ProductVariantsUpdateWithWhereUniqueWithoutProductInput | ProductVariantsUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductVariantsUpdateManyWithWhereWithoutProductInput | ProductVariantsUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductVariantsScalarWhereInput | ProductVariantsScalarWhereInput[]
  }

  export type ProductImagesUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductImagesCreateWithoutProductInput, ProductImagesUncheckedCreateWithoutProductInput> | ProductImagesCreateWithoutProductInput[] | ProductImagesUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductImagesCreateOrConnectWithoutProductInput | ProductImagesCreateOrConnectWithoutProductInput[]
    upsert?: ProductImagesUpsertWithWhereUniqueWithoutProductInput | ProductImagesUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductImagesCreateManyProductInputEnvelope
    set?: ProductImagesWhereUniqueInput | ProductImagesWhereUniqueInput[]
    disconnect?: ProductImagesWhereUniqueInput | ProductImagesWhereUniqueInput[]
    delete?: ProductImagesWhereUniqueInput | ProductImagesWhereUniqueInput[]
    connect?: ProductImagesWhereUniqueInput | ProductImagesWhereUniqueInput[]
    update?: ProductImagesUpdateWithWhereUniqueWithoutProductInput | ProductImagesUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductImagesUpdateManyWithWhereWithoutProductInput | ProductImagesUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductImagesScalarWhereInput | ProductImagesScalarWhereInput[]
  }

  export type ProductVariantsUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductVariantsCreateWithoutProductInput, ProductVariantsUncheckedCreateWithoutProductInput> | ProductVariantsCreateWithoutProductInput[] | ProductVariantsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductVariantsCreateOrConnectWithoutProductInput | ProductVariantsCreateOrConnectWithoutProductInput[]
    upsert?: ProductVariantsUpsertWithWhereUniqueWithoutProductInput | ProductVariantsUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductVariantsCreateManyProductInputEnvelope
    set?: ProductVariantsWhereUniqueInput | ProductVariantsWhereUniqueInput[]
    disconnect?: ProductVariantsWhereUniqueInput | ProductVariantsWhereUniqueInput[]
    delete?: ProductVariantsWhereUniqueInput | ProductVariantsWhereUniqueInput[]
    connect?: ProductVariantsWhereUniqueInput | ProductVariantsWhereUniqueInput[]
    update?: ProductVariantsUpdateWithWhereUniqueWithoutProductInput | ProductVariantsUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductVariantsUpdateManyWithWhereWithoutProductInput | ProductVariantsUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductVariantsScalarWhereInput | ProductVariantsScalarWhereInput[]
  }

  export type ProductsCreateNestedOneWithoutProduct_imagesInput = {
    create?: XOR<ProductsCreateWithoutProduct_imagesInput, ProductsUncheckedCreateWithoutProduct_imagesInput>
    connectOrCreate?: ProductsCreateOrConnectWithoutProduct_imagesInput
    connect?: ProductsWhereUniqueInput
  }

  export type ProductsUpdateOneRequiredWithoutProduct_imagesNestedInput = {
    create?: XOR<ProductsCreateWithoutProduct_imagesInput, ProductsUncheckedCreateWithoutProduct_imagesInput>
    connectOrCreate?: ProductsCreateOrConnectWithoutProduct_imagesInput
    upsert?: ProductsUpsertWithoutProduct_imagesInput
    connect?: ProductsWhereUniqueInput
    update?: XOR<XOR<ProductsUpdateToOneWithWhereWithoutProduct_imagesInput, ProductsUpdateWithoutProduct_imagesInput>, ProductsUncheckedUpdateWithoutProduct_imagesInput>
  }

  export type ProductsCreateNestedOneWithoutProduct_variantInput = {
    create?: XOR<ProductsCreateWithoutProduct_variantInput, ProductsUncheckedCreateWithoutProduct_variantInput>
    connectOrCreate?: ProductsCreateOrConnectWithoutProduct_variantInput
    connect?: ProductsWhereUniqueInput
  }

  export type CartItemsCreateNestedManyWithoutProduct_variantInput = {
    create?: XOR<CartItemsCreateWithoutProduct_variantInput, CartItemsUncheckedCreateWithoutProduct_variantInput> | CartItemsCreateWithoutProduct_variantInput[] | CartItemsUncheckedCreateWithoutProduct_variantInput[]
    connectOrCreate?: CartItemsCreateOrConnectWithoutProduct_variantInput | CartItemsCreateOrConnectWithoutProduct_variantInput[]
    createMany?: CartItemsCreateManyProduct_variantInputEnvelope
    connect?: CartItemsWhereUniqueInput | CartItemsWhereUniqueInput[]
  }

  export type OrderItemsCreateNestedManyWithoutProduct_variantInput = {
    create?: XOR<OrderItemsCreateWithoutProduct_variantInput, OrderItemsUncheckedCreateWithoutProduct_variantInput> | OrderItemsCreateWithoutProduct_variantInput[] | OrderItemsUncheckedCreateWithoutProduct_variantInput[]
    connectOrCreate?: OrderItemsCreateOrConnectWithoutProduct_variantInput | OrderItemsCreateOrConnectWithoutProduct_variantInput[]
    createMany?: OrderItemsCreateManyProduct_variantInputEnvelope
    connect?: OrderItemsWhereUniqueInput | OrderItemsWhereUniqueInput[]
  }

  export type CartItemsUncheckedCreateNestedManyWithoutProduct_variantInput = {
    create?: XOR<CartItemsCreateWithoutProduct_variantInput, CartItemsUncheckedCreateWithoutProduct_variantInput> | CartItemsCreateWithoutProduct_variantInput[] | CartItemsUncheckedCreateWithoutProduct_variantInput[]
    connectOrCreate?: CartItemsCreateOrConnectWithoutProduct_variantInput | CartItemsCreateOrConnectWithoutProduct_variantInput[]
    createMany?: CartItemsCreateManyProduct_variantInputEnvelope
    connect?: CartItemsWhereUniqueInput | CartItemsWhereUniqueInput[]
  }

  export type OrderItemsUncheckedCreateNestedManyWithoutProduct_variantInput = {
    create?: XOR<OrderItemsCreateWithoutProduct_variantInput, OrderItemsUncheckedCreateWithoutProduct_variantInput> | OrderItemsCreateWithoutProduct_variantInput[] | OrderItemsUncheckedCreateWithoutProduct_variantInput[]
    connectOrCreate?: OrderItemsCreateOrConnectWithoutProduct_variantInput | OrderItemsCreateOrConnectWithoutProduct_variantInput[]
    createMany?: OrderItemsCreateManyProduct_variantInputEnvelope
    connect?: OrderItemsWhereUniqueInput | OrderItemsWhereUniqueInput[]
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type ProductsUpdateOneRequiredWithoutProduct_variantNestedInput = {
    create?: XOR<ProductsCreateWithoutProduct_variantInput, ProductsUncheckedCreateWithoutProduct_variantInput>
    connectOrCreate?: ProductsCreateOrConnectWithoutProduct_variantInput
    upsert?: ProductsUpsertWithoutProduct_variantInput
    connect?: ProductsWhereUniqueInput
    update?: XOR<XOR<ProductsUpdateToOneWithWhereWithoutProduct_variantInput, ProductsUpdateWithoutProduct_variantInput>, ProductsUncheckedUpdateWithoutProduct_variantInput>
  }

  export type CartItemsUpdateManyWithoutProduct_variantNestedInput = {
    create?: XOR<CartItemsCreateWithoutProduct_variantInput, CartItemsUncheckedCreateWithoutProduct_variantInput> | CartItemsCreateWithoutProduct_variantInput[] | CartItemsUncheckedCreateWithoutProduct_variantInput[]
    connectOrCreate?: CartItemsCreateOrConnectWithoutProduct_variantInput | CartItemsCreateOrConnectWithoutProduct_variantInput[]
    upsert?: CartItemsUpsertWithWhereUniqueWithoutProduct_variantInput | CartItemsUpsertWithWhereUniqueWithoutProduct_variantInput[]
    createMany?: CartItemsCreateManyProduct_variantInputEnvelope
    set?: CartItemsWhereUniqueInput | CartItemsWhereUniqueInput[]
    disconnect?: CartItemsWhereUniqueInput | CartItemsWhereUniqueInput[]
    delete?: CartItemsWhereUniqueInput | CartItemsWhereUniqueInput[]
    connect?: CartItemsWhereUniqueInput | CartItemsWhereUniqueInput[]
    update?: CartItemsUpdateWithWhereUniqueWithoutProduct_variantInput | CartItemsUpdateWithWhereUniqueWithoutProduct_variantInput[]
    updateMany?: CartItemsUpdateManyWithWhereWithoutProduct_variantInput | CartItemsUpdateManyWithWhereWithoutProduct_variantInput[]
    deleteMany?: CartItemsScalarWhereInput | CartItemsScalarWhereInput[]
  }

  export type OrderItemsUpdateManyWithoutProduct_variantNestedInput = {
    create?: XOR<OrderItemsCreateWithoutProduct_variantInput, OrderItemsUncheckedCreateWithoutProduct_variantInput> | OrderItemsCreateWithoutProduct_variantInput[] | OrderItemsUncheckedCreateWithoutProduct_variantInput[]
    connectOrCreate?: OrderItemsCreateOrConnectWithoutProduct_variantInput | OrderItemsCreateOrConnectWithoutProduct_variantInput[]
    upsert?: OrderItemsUpsertWithWhereUniqueWithoutProduct_variantInput | OrderItemsUpsertWithWhereUniqueWithoutProduct_variantInput[]
    createMany?: OrderItemsCreateManyProduct_variantInputEnvelope
    set?: OrderItemsWhereUniqueInput | OrderItemsWhereUniqueInput[]
    disconnect?: OrderItemsWhereUniqueInput | OrderItemsWhereUniqueInput[]
    delete?: OrderItemsWhereUniqueInput | OrderItemsWhereUniqueInput[]
    connect?: OrderItemsWhereUniqueInput | OrderItemsWhereUniqueInput[]
    update?: OrderItemsUpdateWithWhereUniqueWithoutProduct_variantInput | OrderItemsUpdateWithWhereUniqueWithoutProduct_variantInput[]
    updateMany?: OrderItemsUpdateManyWithWhereWithoutProduct_variantInput | OrderItemsUpdateManyWithWhereWithoutProduct_variantInput[]
    deleteMany?: OrderItemsScalarWhereInput | OrderItemsScalarWhereInput[]
  }

  export type CartItemsUncheckedUpdateManyWithoutProduct_variantNestedInput = {
    create?: XOR<CartItemsCreateWithoutProduct_variantInput, CartItemsUncheckedCreateWithoutProduct_variantInput> | CartItemsCreateWithoutProduct_variantInput[] | CartItemsUncheckedCreateWithoutProduct_variantInput[]
    connectOrCreate?: CartItemsCreateOrConnectWithoutProduct_variantInput | CartItemsCreateOrConnectWithoutProduct_variantInput[]
    upsert?: CartItemsUpsertWithWhereUniqueWithoutProduct_variantInput | CartItemsUpsertWithWhereUniqueWithoutProduct_variantInput[]
    createMany?: CartItemsCreateManyProduct_variantInputEnvelope
    set?: CartItemsWhereUniqueInput | CartItemsWhereUniqueInput[]
    disconnect?: CartItemsWhereUniqueInput | CartItemsWhereUniqueInput[]
    delete?: CartItemsWhereUniqueInput | CartItemsWhereUniqueInput[]
    connect?: CartItemsWhereUniqueInput | CartItemsWhereUniqueInput[]
    update?: CartItemsUpdateWithWhereUniqueWithoutProduct_variantInput | CartItemsUpdateWithWhereUniqueWithoutProduct_variantInput[]
    updateMany?: CartItemsUpdateManyWithWhereWithoutProduct_variantInput | CartItemsUpdateManyWithWhereWithoutProduct_variantInput[]
    deleteMany?: CartItemsScalarWhereInput | CartItemsScalarWhereInput[]
  }

  export type OrderItemsUncheckedUpdateManyWithoutProduct_variantNestedInput = {
    create?: XOR<OrderItemsCreateWithoutProduct_variantInput, OrderItemsUncheckedCreateWithoutProduct_variantInput> | OrderItemsCreateWithoutProduct_variantInput[] | OrderItemsUncheckedCreateWithoutProduct_variantInput[]
    connectOrCreate?: OrderItemsCreateOrConnectWithoutProduct_variantInput | OrderItemsCreateOrConnectWithoutProduct_variantInput[]
    upsert?: OrderItemsUpsertWithWhereUniqueWithoutProduct_variantInput | OrderItemsUpsertWithWhereUniqueWithoutProduct_variantInput[]
    createMany?: OrderItemsCreateManyProduct_variantInputEnvelope
    set?: OrderItemsWhereUniqueInput | OrderItemsWhereUniqueInput[]
    disconnect?: OrderItemsWhereUniqueInput | OrderItemsWhereUniqueInput[]
    delete?: OrderItemsWhereUniqueInput | OrderItemsWhereUniqueInput[]
    connect?: OrderItemsWhereUniqueInput | OrderItemsWhereUniqueInput[]
    update?: OrderItemsUpdateWithWhereUniqueWithoutProduct_variantInput | OrderItemsUpdateWithWhereUniqueWithoutProduct_variantInput[]
    updateMany?: OrderItemsUpdateManyWithWhereWithoutProduct_variantInput | OrderItemsUpdateManyWithWhereWithoutProduct_variantInput[]
    deleteMany?: OrderItemsScalarWhereInput | OrderItemsScalarWhereInput[]
  }

  export type CategoryCreateNestedOneWithoutSubcategoriesInput = {
    create?: XOR<CategoryCreateWithoutSubcategoriesInput, CategoryUncheckedCreateWithoutSubcategoriesInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutSubcategoriesInput
    connect?: CategoryWhereUniqueInput
  }

  export type CategoryCreateNestedManyWithoutParentInput = {
    create?: XOR<CategoryCreateWithoutParentInput, CategoryUncheckedCreateWithoutParentInput> | CategoryCreateWithoutParentInput[] | CategoryUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutParentInput | CategoryCreateOrConnectWithoutParentInput[]
    createMany?: CategoryCreateManyParentInputEnvelope
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type ProductsCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProductsCreateWithoutCategoryInput, ProductsUncheckedCreateWithoutCategoryInput> | ProductsCreateWithoutCategoryInput[] | ProductsUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductsCreateOrConnectWithoutCategoryInput | ProductsCreateOrConnectWithoutCategoryInput[]
    createMany?: ProductsCreateManyCategoryInputEnvelope
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
  }

  export type CategoryUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<CategoryCreateWithoutParentInput, CategoryUncheckedCreateWithoutParentInput> | CategoryCreateWithoutParentInput[] | CategoryUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutParentInput | CategoryCreateOrConnectWithoutParentInput[]
    createMany?: CategoryCreateManyParentInputEnvelope
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type ProductsUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProductsCreateWithoutCategoryInput, ProductsUncheckedCreateWithoutCategoryInput> | ProductsCreateWithoutCategoryInput[] | ProductsUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductsCreateOrConnectWithoutCategoryInput | ProductsCreateOrConnectWithoutCategoryInput[]
    createMany?: ProductsCreateManyCategoryInputEnvelope
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
  }

  export type CategoryUpdateOneWithoutSubcategoriesNestedInput = {
    create?: XOR<CategoryCreateWithoutSubcategoriesInput, CategoryUncheckedCreateWithoutSubcategoriesInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutSubcategoriesInput
    upsert?: CategoryUpsertWithoutSubcategoriesInput
    disconnect?: CategoryWhereInput | boolean
    delete?: CategoryWhereInput | boolean
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutSubcategoriesInput, CategoryUpdateWithoutSubcategoriesInput>, CategoryUncheckedUpdateWithoutSubcategoriesInput>
  }

  export type CategoryUpdateManyWithoutParentNestedInput = {
    create?: XOR<CategoryCreateWithoutParentInput, CategoryUncheckedCreateWithoutParentInput> | CategoryCreateWithoutParentInput[] | CategoryUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutParentInput | CategoryCreateOrConnectWithoutParentInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutParentInput | CategoryUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: CategoryCreateManyParentInputEnvelope
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutParentInput | CategoryUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutParentInput | CategoryUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type ProductsUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProductsCreateWithoutCategoryInput, ProductsUncheckedCreateWithoutCategoryInput> | ProductsCreateWithoutCategoryInput[] | ProductsUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductsCreateOrConnectWithoutCategoryInput | ProductsCreateOrConnectWithoutCategoryInput[]
    upsert?: ProductsUpsertWithWhereUniqueWithoutCategoryInput | ProductsUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ProductsCreateManyCategoryInputEnvelope
    set?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    disconnect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    delete?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    update?: ProductsUpdateWithWhereUniqueWithoutCategoryInput | ProductsUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProductsUpdateManyWithWhereWithoutCategoryInput | ProductsUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProductsScalarWhereInput | ProductsScalarWhereInput[]
  }

  export type CategoryUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<CategoryCreateWithoutParentInput, CategoryUncheckedCreateWithoutParentInput> | CategoryCreateWithoutParentInput[] | CategoryUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutParentInput | CategoryCreateOrConnectWithoutParentInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutParentInput | CategoryUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: CategoryCreateManyParentInputEnvelope
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutParentInput | CategoryUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutParentInput | CategoryUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type ProductsUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProductsCreateWithoutCategoryInput, ProductsUncheckedCreateWithoutCategoryInput> | ProductsCreateWithoutCategoryInput[] | ProductsUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductsCreateOrConnectWithoutCategoryInput | ProductsCreateOrConnectWithoutCategoryInput[]
    upsert?: ProductsUpsertWithWhereUniqueWithoutCategoryInput | ProductsUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ProductsCreateManyCategoryInputEnvelope
    set?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    disconnect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    delete?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    update?: ProductsUpdateWithWhereUniqueWithoutCategoryInput | ProductsUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProductsUpdateManyWithWhereWithoutCategoryInput | ProductsUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProductsScalarWhereInput | ProductsScalarWhereInput[]
  }

  export type UserProfileCreateNestedManyWithoutUserInput = {
    create?: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput> | UserProfileCreateWithoutUserInput[] | UserProfileUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserProfileCreateOrConnectWithoutUserInput | UserProfileCreateOrConnectWithoutUserInput[]
    createMany?: UserProfileCreateManyUserInputEnvelope
    connect?: UserProfileWhereUniqueInput | UserProfileWhereUniqueInput[]
  }

  export type CartsCreateNestedManyWithoutUsersInput = {
    create?: XOR<CartsCreateWithoutUsersInput, CartsUncheckedCreateWithoutUsersInput> | CartsCreateWithoutUsersInput[] | CartsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: CartsCreateOrConnectWithoutUsersInput | CartsCreateOrConnectWithoutUsersInput[]
    createMany?: CartsCreateManyUsersInputEnvelope
    connect?: CartsWhereUniqueInput | CartsWhereUniqueInput[]
  }

  export type OrdersCreateNestedManyWithoutUserInput = {
    create?: XOR<OrdersCreateWithoutUserInput, OrdersUncheckedCreateWithoutUserInput> | OrdersCreateWithoutUserInput[] | OrdersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutUserInput | OrdersCreateOrConnectWithoutUserInput[]
    createMany?: OrdersCreateManyUserInputEnvelope
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
  }

  export type AddressCreateNestedManyWithoutUserInput = {
    create?: XOR<AddressCreateWithoutUserInput, AddressUncheckedCreateWithoutUserInput> | AddressCreateWithoutUserInput[] | AddressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AddressCreateOrConnectWithoutUserInput | AddressCreateOrConnectWithoutUserInput[]
    createMany?: AddressCreateManyUserInputEnvelope
    connect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type UserProfileUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput> | UserProfileCreateWithoutUserInput[] | UserProfileUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserProfileCreateOrConnectWithoutUserInput | UserProfileCreateOrConnectWithoutUserInput[]
    createMany?: UserProfileCreateManyUserInputEnvelope
    connect?: UserProfileWhereUniqueInput | UserProfileWhereUniqueInput[]
  }

  export type CartsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<CartsCreateWithoutUsersInput, CartsUncheckedCreateWithoutUsersInput> | CartsCreateWithoutUsersInput[] | CartsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: CartsCreateOrConnectWithoutUsersInput | CartsCreateOrConnectWithoutUsersInput[]
    createMany?: CartsCreateManyUsersInputEnvelope
    connect?: CartsWhereUniqueInput | CartsWhereUniqueInput[]
  }

  export type OrdersUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<OrdersCreateWithoutUserInput, OrdersUncheckedCreateWithoutUserInput> | OrdersCreateWithoutUserInput[] | OrdersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutUserInput | OrdersCreateOrConnectWithoutUserInput[]
    createMany?: OrdersCreateManyUserInputEnvelope
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
  }

  export type AddressUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AddressCreateWithoutUserInput, AddressUncheckedCreateWithoutUserInput> | AddressCreateWithoutUserInput[] | AddressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AddressCreateOrConnectWithoutUserInput | AddressCreateOrConnectWithoutUserInput[]
    createMany?: AddressCreateManyUserInputEnvelope
    connect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type UserProfileUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput> | UserProfileCreateWithoutUserInput[] | UserProfileUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserProfileCreateOrConnectWithoutUserInput | UserProfileCreateOrConnectWithoutUserInput[]
    upsert?: UserProfileUpsertWithWhereUniqueWithoutUserInput | UserProfileUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserProfileCreateManyUserInputEnvelope
    set?: UserProfileWhereUniqueInput | UserProfileWhereUniqueInput[]
    disconnect?: UserProfileWhereUniqueInput | UserProfileWhereUniqueInput[]
    delete?: UserProfileWhereUniqueInput | UserProfileWhereUniqueInput[]
    connect?: UserProfileWhereUniqueInput | UserProfileWhereUniqueInput[]
    update?: UserProfileUpdateWithWhereUniqueWithoutUserInput | UserProfileUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserProfileUpdateManyWithWhereWithoutUserInput | UserProfileUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserProfileScalarWhereInput | UserProfileScalarWhereInput[]
  }

  export type CartsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<CartsCreateWithoutUsersInput, CartsUncheckedCreateWithoutUsersInput> | CartsCreateWithoutUsersInput[] | CartsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: CartsCreateOrConnectWithoutUsersInput | CartsCreateOrConnectWithoutUsersInput[]
    upsert?: CartsUpsertWithWhereUniqueWithoutUsersInput | CartsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: CartsCreateManyUsersInputEnvelope
    set?: CartsWhereUniqueInput | CartsWhereUniqueInput[]
    disconnect?: CartsWhereUniqueInput | CartsWhereUniqueInput[]
    delete?: CartsWhereUniqueInput | CartsWhereUniqueInput[]
    connect?: CartsWhereUniqueInput | CartsWhereUniqueInput[]
    update?: CartsUpdateWithWhereUniqueWithoutUsersInput | CartsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: CartsUpdateManyWithWhereWithoutUsersInput | CartsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: CartsScalarWhereInput | CartsScalarWhereInput[]
  }

  export type OrdersUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrdersCreateWithoutUserInput, OrdersUncheckedCreateWithoutUserInput> | OrdersCreateWithoutUserInput[] | OrdersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutUserInput | OrdersCreateOrConnectWithoutUserInput[]
    upsert?: OrdersUpsertWithWhereUniqueWithoutUserInput | OrdersUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrdersCreateManyUserInputEnvelope
    set?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    disconnect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    delete?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    update?: OrdersUpdateWithWhereUniqueWithoutUserInput | OrdersUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrdersUpdateManyWithWhereWithoutUserInput | OrdersUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
  }

  export type AddressUpdateManyWithoutUserNestedInput = {
    create?: XOR<AddressCreateWithoutUserInput, AddressUncheckedCreateWithoutUserInput> | AddressCreateWithoutUserInput[] | AddressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AddressCreateOrConnectWithoutUserInput | AddressCreateOrConnectWithoutUserInput[]
    upsert?: AddressUpsertWithWhereUniqueWithoutUserInput | AddressUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AddressCreateManyUserInputEnvelope
    set?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    disconnect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    delete?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    connect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    update?: AddressUpdateWithWhereUniqueWithoutUserInput | AddressUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AddressUpdateManyWithWhereWithoutUserInput | AddressUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AddressScalarWhereInput | AddressScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type UserProfileUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput> | UserProfileCreateWithoutUserInput[] | UserProfileUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserProfileCreateOrConnectWithoutUserInput | UserProfileCreateOrConnectWithoutUserInput[]
    upsert?: UserProfileUpsertWithWhereUniqueWithoutUserInput | UserProfileUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserProfileCreateManyUserInputEnvelope
    set?: UserProfileWhereUniqueInput | UserProfileWhereUniqueInput[]
    disconnect?: UserProfileWhereUniqueInput | UserProfileWhereUniqueInput[]
    delete?: UserProfileWhereUniqueInput | UserProfileWhereUniqueInput[]
    connect?: UserProfileWhereUniqueInput | UserProfileWhereUniqueInput[]
    update?: UserProfileUpdateWithWhereUniqueWithoutUserInput | UserProfileUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserProfileUpdateManyWithWhereWithoutUserInput | UserProfileUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserProfileScalarWhereInput | UserProfileScalarWhereInput[]
  }

  export type CartsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<CartsCreateWithoutUsersInput, CartsUncheckedCreateWithoutUsersInput> | CartsCreateWithoutUsersInput[] | CartsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: CartsCreateOrConnectWithoutUsersInput | CartsCreateOrConnectWithoutUsersInput[]
    upsert?: CartsUpsertWithWhereUniqueWithoutUsersInput | CartsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: CartsCreateManyUsersInputEnvelope
    set?: CartsWhereUniqueInput | CartsWhereUniqueInput[]
    disconnect?: CartsWhereUniqueInput | CartsWhereUniqueInput[]
    delete?: CartsWhereUniqueInput | CartsWhereUniqueInput[]
    connect?: CartsWhereUniqueInput | CartsWhereUniqueInput[]
    update?: CartsUpdateWithWhereUniqueWithoutUsersInput | CartsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: CartsUpdateManyWithWhereWithoutUsersInput | CartsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: CartsScalarWhereInput | CartsScalarWhereInput[]
  }

  export type OrdersUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrdersCreateWithoutUserInput, OrdersUncheckedCreateWithoutUserInput> | OrdersCreateWithoutUserInput[] | OrdersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutUserInput | OrdersCreateOrConnectWithoutUserInput[]
    upsert?: OrdersUpsertWithWhereUniqueWithoutUserInput | OrdersUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrdersCreateManyUserInputEnvelope
    set?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    disconnect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    delete?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    update?: OrdersUpdateWithWhereUniqueWithoutUserInput | OrdersUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrdersUpdateManyWithWhereWithoutUserInput | OrdersUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
  }

  export type AddressUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AddressCreateWithoutUserInput, AddressUncheckedCreateWithoutUserInput> | AddressCreateWithoutUserInput[] | AddressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AddressCreateOrConnectWithoutUserInput | AddressCreateOrConnectWithoutUserInput[]
    upsert?: AddressUpsertWithWhereUniqueWithoutUserInput | AddressUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AddressCreateManyUserInputEnvelope
    set?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    disconnect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    delete?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    connect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    update?: AddressUpdateWithWhereUniqueWithoutUserInput | AddressUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AddressUpdateManyWithWhereWithoutUserInput | AddressUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AddressScalarWhereInput | AddressScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutUser_profileInput = {
    create?: XOR<UserCreateWithoutUser_profileInput, UserUncheckedCreateWithoutUser_profileInput>
    connectOrCreate?: UserCreateOrConnectWithoutUser_profileInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUser_profileNestedInput = {
    create?: XOR<UserCreateWithoutUser_profileInput, UserUncheckedCreateWithoutUser_profileInput>
    connectOrCreate?: UserCreateOrConnectWithoutUser_profileInput
    upsert?: UserUpsertWithoutUser_profileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUser_profileInput, UserUpdateWithoutUser_profileInput>, UserUncheckedUpdateWithoutUser_profileInput>
  }

  export type UserCreateNestedOneWithoutSessionInput = {
    create?: XOR<UserCreateWithoutSessionInput, UserUncheckedCreateWithoutSessionInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionInput
    connect?: UserWhereUniqueInput
  }

  export type CartsCreateNestedManyWithoutSessionInput = {
    create?: XOR<CartsCreateWithoutSessionInput, CartsUncheckedCreateWithoutSessionInput> | CartsCreateWithoutSessionInput[] | CartsUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: CartsCreateOrConnectWithoutSessionInput | CartsCreateOrConnectWithoutSessionInput[]
    createMany?: CartsCreateManySessionInputEnvelope
    connect?: CartsWhereUniqueInput | CartsWhereUniqueInput[]
  }

  export type CartsUncheckedCreateNestedManyWithoutSessionInput = {
    create?: XOR<CartsCreateWithoutSessionInput, CartsUncheckedCreateWithoutSessionInput> | CartsCreateWithoutSessionInput[] | CartsUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: CartsCreateOrConnectWithoutSessionInput | CartsCreateOrConnectWithoutSessionInput[]
    createMany?: CartsCreateManySessionInputEnvelope
    connect?: CartsWhereUniqueInput | CartsWhereUniqueInput[]
  }

  export type UserUpdateOneWithoutSessionNestedInput = {
    create?: XOR<UserCreateWithoutSessionInput, UserUncheckedCreateWithoutSessionInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionInput
    upsert?: UserUpsertWithoutSessionInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionInput, UserUpdateWithoutSessionInput>, UserUncheckedUpdateWithoutSessionInput>
  }

  export type CartsUpdateManyWithoutSessionNestedInput = {
    create?: XOR<CartsCreateWithoutSessionInput, CartsUncheckedCreateWithoutSessionInput> | CartsCreateWithoutSessionInput[] | CartsUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: CartsCreateOrConnectWithoutSessionInput | CartsCreateOrConnectWithoutSessionInput[]
    upsert?: CartsUpsertWithWhereUniqueWithoutSessionInput | CartsUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: CartsCreateManySessionInputEnvelope
    set?: CartsWhereUniqueInput | CartsWhereUniqueInput[]
    disconnect?: CartsWhereUniqueInput | CartsWhereUniqueInput[]
    delete?: CartsWhereUniqueInput | CartsWhereUniqueInput[]
    connect?: CartsWhereUniqueInput | CartsWhereUniqueInput[]
    update?: CartsUpdateWithWhereUniqueWithoutSessionInput | CartsUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: CartsUpdateManyWithWhereWithoutSessionInput | CartsUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: CartsScalarWhereInput | CartsScalarWhereInput[]
  }

  export type CartsUncheckedUpdateManyWithoutSessionNestedInput = {
    create?: XOR<CartsCreateWithoutSessionInput, CartsUncheckedCreateWithoutSessionInput> | CartsCreateWithoutSessionInput[] | CartsUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: CartsCreateOrConnectWithoutSessionInput | CartsCreateOrConnectWithoutSessionInput[]
    upsert?: CartsUpsertWithWhereUniqueWithoutSessionInput | CartsUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: CartsCreateManySessionInputEnvelope
    set?: CartsWhereUniqueInput | CartsWhereUniqueInput[]
    disconnect?: CartsWhereUniqueInput | CartsWhereUniqueInput[]
    delete?: CartsWhereUniqueInput | CartsWhereUniqueInput[]
    connect?: CartsWhereUniqueInput | CartsWhereUniqueInput[]
    update?: CartsUpdateWithWhereUniqueWithoutSessionInput | CartsUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: CartsUpdateManyWithWhereWithoutSessionInput | CartsUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: CartsScalarWhereInput | CartsScalarWhereInput[]
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type NestedEnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedEnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumOrderStatusFilter<$PrismaModel>
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type UserCreateWithoutAddressInput = {
    id?: string
    email: string
    password_hash: string
    first_name: string
    last_name: string
    role: $Enums.Role
    created_at?: Date | string
    updated_at?: Date | string
    user_profile?: UserProfileCreateNestedManyWithoutUserInput
    cart?: CartsCreateNestedManyWithoutUsersInput
    orders?: OrdersCreateNestedManyWithoutUserInput
    session?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAddressInput = {
    id?: string
    email: string
    password_hash: string
    first_name: string
    last_name: string
    role: $Enums.Role
    created_at?: Date | string
    updated_at?: Date | string
    user_profile?: UserProfileUncheckedCreateNestedManyWithoutUserInput
    cart?: CartsUncheckedCreateNestedManyWithoutUsersInput
    orders?: OrdersUncheckedCreateNestedManyWithoutUserInput
    session?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAddressInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAddressInput, UserUncheckedCreateWithoutAddressInput>
  }

  export type OrdersCreateWithoutShipping_addressInput = {
    id?: string
    order_number: string
    status: $Enums.OrderStatus
    total_amount: Decimal | DecimalJsLike | number | string
    shipping_amount: Decimal | DecimalJsLike | number | string
    tax_amount: Decimal | DecimalJsLike | number | string
    discount_amount: Decimal | DecimalJsLike | number | string
    payment_status: $Enums.PaymentStatus
    payment_method: string
    created_at?: Date | string
    updated_at?: Date | string
    billing_address: AddressCreateNestedOneWithoutBilling_ordersInput
    carts: CartsCreateNestedOneWithoutOrdersInput
    user?: UserCreateNestedOneWithoutOrdersInput
    order_items?: OrderItemsCreateNestedManyWithoutOrdersInput
  }

  export type OrdersUncheckedCreateWithoutShipping_addressInput = {
    id?: string
    user_id?: string | null
    cart_id: string
    order_number: string
    status: $Enums.OrderStatus
    total_amount: Decimal | DecimalJsLike | number | string
    shipping_amount: Decimal | DecimalJsLike | number | string
    tax_amount: Decimal | DecimalJsLike | number | string
    discount_amount: Decimal | DecimalJsLike | number | string
    billing_address_id: string
    payment_status: $Enums.PaymentStatus
    payment_method: string
    created_at?: Date | string
    updated_at?: Date | string
    order_items?: OrderItemsUncheckedCreateNestedManyWithoutOrdersInput
  }

  export type OrdersCreateOrConnectWithoutShipping_addressInput = {
    where: OrdersWhereUniqueInput
    create: XOR<OrdersCreateWithoutShipping_addressInput, OrdersUncheckedCreateWithoutShipping_addressInput>
  }

  export type OrdersCreateManyShipping_addressInputEnvelope = {
    data: OrdersCreateManyShipping_addressInput | OrdersCreateManyShipping_addressInput[]
    skipDuplicates?: boolean
  }

  export type OrdersCreateWithoutBilling_addressInput = {
    id?: string
    order_number: string
    status: $Enums.OrderStatus
    total_amount: Decimal | DecimalJsLike | number | string
    shipping_amount: Decimal | DecimalJsLike | number | string
    tax_amount: Decimal | DecimalJsLike | number | string
    discount_amount: Decimal | DecimalJsLike | number | string
    payment_status: $Enums.PaymentStatus
    payment_method: string
    created_at?: Date | string
    updated_at?: Date | string
    shipping_address: AddressCreateNestedOneWithoutShipping_ordersInput
    carts: CartsCreateNestedOneWithoutOrdersInput
    user?: UserCreateNestedOneWithoutOrdersInput
    order_items?: OrderItemsCreateNestedManyWithoutOrdersInput
  }

  export type OrdersUncheckedCreateWithoutBilling_addressInput = {
    id?: string
    user_id?: string | null
    cart_id: string
    order_number: string
    status: $Enums.OrderStatus
    total_amount: Decimal | DecimalJsLike | number | string
    shipping_amount: Decimal | DecimalJsLike | number | string
    tax_amount: Decimal | DecimalJsLike | number | string
    discount_amount: Decimal | DecimalJsLike | number | string
    shipping_address_id: string
    payment_status: $Enums.PaymentStatus
    payment_method: string
    created_at?: Date | string
    updated_at?: Date | string
    order_items?: OrderItemsUncheckedCreateNestedManyWithoutOrdersInput
  }

  export type OrdersCreateOrConnectWithoutBilling_addressInput = {
    where: OrdersWhereUniqueInput
    create: XOR<OrdersCreateWithoutBilling_addressInput, OrdersUncheckedCreateWithoutBilling_addressInput>
  }

  export type OrdersCreateManyBilling_addressInputEnvelope = {
    data: OrdersCreateManyBilling_addressInput | OrdersCreateManyBilling_addressInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutAddressInput = {
    update: XOR<UserUpdateWithoutAddressInput, UserUncheckedUpdateWithoutAddressInput>
    create: XOR<UserCreateWithoutAddressInput, UserUncheckedCreateWithoutAddressInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAddressInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAddressInput, UserUncheckedUpdateWithoutAddressInput>
  }

  export type UserUpdateWithoutAddressInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_profile?: UserProfileUpdateManyWithoutUserNestedInput
    cart?: CartsUpdateManyWithoutUsersNestedInput
    orders?: OrdersUpdateManyWithoutUserNestedInput
    session?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAddressInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_profile?: UserProfileUncheckedUpdateManyWithoutUserNestedInput
    cart?: CartsUncheckedUpdateManyWithoutUsersNestedInput
    orders?: OrdersUncheckedUpdateManyWithoutUserNestedInput
    session?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type OrdersUpsertWithWhereUniqueWithoutShipping_addressInput = {
    where: OrdersWhereUniqueInput
    update: XOR<OrdersUpdateWithoutShipping_addressInput, OrdersUncheckedUpdateWithoutShipping_addressInput>
    create: XOR<OrdersCreateWithoutShipping_addressInput, OrdersUncheckedCreateWithoutShipping_addressInput>
  }

  export type OrdersUpdateWithWhereUniqueWithoutShipping_addressInput = {
    where: OrdersWhereUniqueInput
    data: XOR<OrdersUpdateWithoutShipping_addressInput, OrdersUncheckedUpdateWithoutShipping_addressInput>
  }

  export type OrdersUpdateManyWithWhereWithoutShipping_addressInput = {
    where: OrdersScalarWhereInput
    data: XOR<OrdersUpdateManyMutationInput, OrdersUncheckedUpdateManyWithoutShipping_addressInput>
  }

  export type OrdersScalarWhereInput = {
    AND?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
    OR?: OrdersScalarWhereInput[]
    NOT?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
    id?: UuidFilter<"Orders"> | string
    user_id?: UuidNullableFilter<"Orders"> | string | null
    cart_id?: UuidFilter<"Orders"> | string
    order_number?: StringFilter<"Orders"> | string
    status?: EnumOrderStatusFilter<"Orders"> | $Enums.OrderStatus
    total_amount?: DecimalFilter<"Orders"> | Decimal | DecimalJsLike | number | string
    shipping_amount?: DecimalFilter<"Orders"> | Decimal | DecimalJsLike | number | string
    tax_amount?: DecimalFilter<"Orders"> | Decimal | DecimalJsLike | number | string
    discount_amount?: DecimalFilter<"Orders"> | Decimal | DecimalJsLike | number | string
    shipping_address_id?: UuidFilter<"Orders"> | string
    billing_address_id?: UuidFilter<"Orders"> | string
    payment_status?: EnumPaymentStatusFilter<"Orders"> | $Enums.PaymentStatus
    payment_method?: StringFilter<"Orders"> | string
    created_at?: DateTimeFilter<"Orders"> | Date | string
    updated_at?: DateTimeFilter<"Orders"> | Date | string
  }

  export type OrdersUpsertWithWhereUniqueWithoutBilling_addressInput = {
    where: OrdersWhereUniqueInput
    update: XOR<OrdersUpdateWithoutBilling_addressInput, OrdersUncheckedUpdateWithoutBilling_addressInput>
    create: XOR<OrdersCreateWithoutBilling_addressInput, OrdersUncheckedCreateWithoutBilling_addressInput>
  }

  export type OrdersUpdateWithWhereUniqueWithoutBilling_addressInput = {
    where: OrdersWhereUniqueInput
    data: XOR<OrdersUpdateWithoutBilling_addressInput, OrdersUncheckedUpdateWithoutBilling_addressInput>
  }

  export type OrdersUpdateManyWithWhereWithoutBilling_addressInput = {
    where: OrdersScalarWhereInput
    data: XOR<OrdersUpdateManyMutationInput, OrdersUncheckedUpdateManyWithoutBilling_addressInput>
  }

  export type UserCreateWithoutCartInput = {
    id?: string
    email: string
    password_hash: string
    first_name: string
    last_name: string
    role: $Enums.Role
    created_at?: Date | string
    updated_at?: Date | string
    user_profile?: UserProfileCreateNestedManyWithoutUserInput
    orders?: OrdersCreateNestedManyWithoutUserInput
    address?: AddressCreateNestedManyWithoutUserInput
    session?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCartInput = {
    id?: string
    email: string
    password_hash: string
    first_name: string
    last_name: string
    role: $Enums.Role
    created_at?: Date | string
    updated_at?: Date | string
    user_profile?: UserProfileUncheckedCreateNestedManyWithoutUserInput
    orders?: OrdersUncheckedCreateNestedManyWithoutUserInput
    address?: AddressUncheckedCreateNestedManyWithoutUserInput
    session?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCartInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCartInput, UserUncheckedCreateWithoutCartInput>
  }

  export type SessionCreateWithoutCartInput = {
    id?: string
    token: string
    expires_at: Date | string
    data: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    user?: UserCreateNestedOneWithoutSessionInput
  }

  export type SessionUncheckedCreateWithoutCartInput = {
    id?: string
    user_id?: string | null
    token: string
    expires_at: Date | string
    data: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type SessionCreateOrConnectWithoutCartInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutCartInput, SessionUncheckedCreateWithoutCartInput>
  }

  export type CartItemsCreateWithoutCartsInput = {
    id?: string
    quantity: number
    product_variant: ProductVariantsCreateNestedOneWithoutCart_itemsInput
  }

  export type CartItemsUncheckedCreateWithoutCartsInput = {
    id?: string
    product_variant_id: string
    quantity: number
  }

  export type CartItemsCreateOrConnectWithoutCartsInput = {
    where: CartItemsWhereUniqueInput
    create: XOR<CartItemsCreateWithoutCartsInput, CartItemsUncheckedCreateWithoutCartsInput>
  }

  export type CartItemsCreateManyCartsInputEnvelope = {
    data: CartItemsCreateManyCartsInput | CartItemsCreateManyCartsInput[]
    skipDuplicates?: boolean
  }

  export type OrdersCreateWithoutCartsInput = {
    id?: string
    order_number: string
    status: $Enums.OrderStatus
    total_amount: Decimal | DecimalJsLike | number | string
    shipping_amount: Decimal | DecimalJsLike | number | string
    tax_amount: Decimal | DecimalJsLike | number | string
    discount_amount: Decimal | DecimalJsLike | number | string
    payment_status: $Enums.PaymentStatus
    payment_method: string
    created_at?: Date | string
    updated_at?: Date | string
    shipping_address: AddressCreateNestedOneWithoutShipping_ordersInput
    billing_address: AddressCreateNestedOneWithoutBilling_ordersInput
    user?: UserCreateNestedOneWithoutOrdersInput
    order_items?: OrderItemsCreateNestedManyWithoutOrdersInput
  }

  export type OrdersUncheckedCreateWithoutCartsInput = {
    id?: string
    user_id?: string | null
    order_number: string
    status: $Enums.OrderStatus
    total_amount: Decimal | DecimalJsLike | number | string
    shipping_amount: Decimal | DecimalJsLike | number | string
    tax_amount: Decimal | DecimalJsLike | number | string
    discount_amount: Decimal | DecimalJsLike | number | string
    shipping_address_id: string
    billing_address_id: string
    payment_status: $Enums.PaymentStatus
    payment_method: string
    created_at?: Date | string
    updated_at?: Date | string
    order_items?: OrderItemsUncheckedCreateNestedManyWithoutOrdersInput
  }

  export type OrdersCreateOrConnectWithoutCartsInput = {
    where: OrdersWhereUniqueInput
    create: XOR<OrdersCreateWithoutCartsInput, OrdersUncheckedCreateWithoutCartsInput>
  }

  export type OrdersCreateManyCartsInputEnvelope = {
    data: OrdersCreateManyCartsInput | OrdersCreateManyCartsInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCartInput = {
    update: XOR<UserUpdateWithoutCartInput, UserUncheckedUpdateWithoutCartInput>
    create: XOR<UserCreateWithoutCartInput, UserUncheckedCreateWithoutCartInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCartInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCartInput, UserUncheckedUpdateWithoutCartInput>
  }

  export type UserUpdateWithoutCartInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_profile?: UserProfileUpdateManyWithoutUserNestedInput
    orders?: OrdersUpdateManyWithoutUserNestedInput
    address?: AddressUpdateManyWithoutUserNestedInput
    session?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCartInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_profile?: UserProfileUncheckedUpdateManyWithoutUserNestedInput
    orders?: OrdersUncheckedUpdateManyWithoutUserNestedInput
    address?: AddressUncheckedUpdateManyWithoutUserNestedInput
    session?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SessionUpsertWithoutCartInput = {
    update: XOR<SessionUpdateWithoutCartInput, SessionUncheckedUpdateWithoutCartInput>
    create: XOR<SessionCreateWithoutCartInput, SessionUncheckedCreateWithoutCartInput>
    where?: SessionWhereInput
  }

  export type SessionUpdateToOneWithWhereWithoutCartInput = {
    where?: SessionWhereInput
    data: XOR<SessionUpdateWithoutCartInput, SessionUncheckedUpdateWithoutCartInput>
  }

  export type SessionUpdateWithoutCartInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    data?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutSessionNestedInput
  }

  export type SessionUncheckedUpdateWithoutCartInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    token?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    data?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CartItemsUpsertWithWhereUniqueWithoutCartsInput = {
    where: CartItemsWhereUniqueInput
    update: XOR<CartItemsUpdateWithoutCartsInput, CartItemsUncheckedUpdateWithoutCartsInput>
    create: XOR<CartItemsCreateWithoutCartsInput, CartItemsUncheckedCreateWithoutCartsInput>
  }

  export type CartItemsUpdateWithWhereUniqueWithoutCartsInput = {
    where: CartItemsWhereUniqueInput
    data: XOR<CartItemsUpdateWithoutCartsInput, CartItemsUncheckedUpdateWithoutCartsInput>
  }

  export type CartItemsUpdateManyWithWhereWithoutCartsInput = {
    where: CartItemsScalarWhereInput
    data: XOR<CartItemsUpdateManyMutationInput, CartItemsUncheckedUpdateManyWithoutCartsInput>
  }

  export type CartItemsScalarWhereInput = {
    AND?: CartItemsScalarWhereInput | CartItemsScalarWhereInput[]
    OR?: CartItemsScalarWhereInput[]
    NOT?: CartItemsScalarWhereInput | CartItemsScalarWhereInput[]
    id?: UuidFilter<"CartItems"> | string
    cart_id?: UuidFilter<"CartItems"> | string
    product_variant_id?: UuidFilter<"CartItems"> | string
    quantity?: IntFilter<"CartItems"> | number
  }

  export type OrdersUpsertWithWhereUniqueWithoutCartsInput = {
    where: OrdersWhereUniqueInput
    update: XOR<OrdersUpdateWithoutCartsInput, OrdersUncheckedUpdateWithoutCartsInput>
    create: XOR<OrdersCreateWithoutCartsInput, OrdersUncheckedCreateWithoutCartsInput>
  }

  export type OrdersUpdateWithWhereUniqueWithoutCartsInput = {
    where: OrdersWhereUniqueInput
    data: XOR<OrdersUpdateWithoutCartsInput, OrdersUncheckedUpdateWithoutCartsInput>
  }

  export type OrdersUpdateManyWithWhereWithoutCartsInput = {
    where: OrdersScalarWhereInput
    data: XOR<OrdersUpdateManyMutationInput, OrdersUncheckedUpdateManyWithoutCartsInput>
  }

  export type ProductVariantsCreateWithoutCart_itemsInput = {
    id?: string
    name: string
    sku: string
    price?: Decimal | DecimalJsLike | number | string | null
    inventory_quantity: number
    option1_value?: string | null
    option2_value?: string | null
    option3_value?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    product: ProductsCreateNestedOneWithoutProduct_variantInput
    order_items?: OrderItemsCreateNestedManyWithoutProduct_variantInput
  }

  export type ProductVariantsUncheckedCreateWithoutCart_itemsInput = {
    id?: string
    product_id: string
    name: string
    sku: string
    price?: Decimal | DecimalJsLike | number | string | null
    inventory_quantity: number
    option1_value?: string | null
    option2_value?: string | null
    option3_value?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    order_items?: OrderItemsUncheckedCreateNestedManyWithoutProduct_variantInput
  }

  export type ProductVariantsCreateOrConnectWithoutCart_itemsInput = {
    where: ProductVariantsWhereUniqueInput
    create: XOR<ProductVariantsCreateWithoutCart_itemsInput, ProductVariantsUncheckedCreateWithoutCart_itemsInput>
  }

  export type CartsCreateWithoutCart_itemsInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string
    status: $Enums.Status
    users?: UserCreateNestedOneWithoutCartInput
    session: SessionCreateNestedOneWithoutCartInput
    orders?: OrdersCreateNestedManyWithoutCartsInput
  }

  export type CartsUncheckedCreateWithoutCart_itemsInput = {
    id?: string
    user_id?: string | null
    session_id: string
    created_at?: Date | string
    updated_at?: Date | string
    status: $Enums.Status
    orders?: OrdersUncheckedCreateNestedManyWithoutCartsInput
  }

  export type CartsCreateOrConnectWithoutCart_itemsInput = {
    where: CartsWhereUniqueInput
    create: XOR<CartsCreateWithoutCart_itemsInput, CartsUncheckedCreateWithoutCart_itemsInput>
  }

  export type ProductVariantsUpsertWithoutCart_itemsInput = {
    update: XOR<ProductVariantsUpdateWithoutCart_itemsInput, ProductVariantsUncheckedUpdateWithoutCart_itemsInput>
    create: XOR<ProductVariantsCreateWithoutCart_itemsInput, ProductVariantsUncheckedCreateWithoutCart_itemsInput>
    where?: ProductVariantsWhereInput
  }

  export type ProductVariantsUpdateToOneWithWhereWithoutCart_itemsInput = {
    where?: ProductVariantsWhereInput
    data: XOR<ProductVariantsUpdateWithoutCart_itemsInput, ProductVariantsUncheckedUpdateWithoutCart_itemsInput>
  }

  export type ProductVariantsUpdateWithoutCart_itemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    inventory_quantity?: IntFieldUpdateOperationsInput | number
    option1_value?: NullableStringFieldUpdateOperationsInput | string | null
    option2_value?: NullableStringFieldUpdateOperationsInput | string | null
    option3_value?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductsUpdateOneRequiredWithoutProduct_variantNestedInput
    order_items?: OrderItemsUpdateManyWithoutProduct_variantNestedInput
  }

  export type ProductVariantsUncheckedUpdateWithoutCart_itemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    product_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    inventory_quantity?: IntFieldUpdateOperationsInput | number
    option1_value?: NullableStringFieldUpdateOperationsInput | string | null
    option2_value?: NullableStringFieldUpdateOperationsInput | string | null
    option3_value?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    order_items?: OrderItemsUncheckedUpdateManyWithoutProduct_variantNestedInput
  }

  export type CartsUpsertWithoutCart_itemsInput = {
    update: XOR<CartsUpdateWithoutCart_itemsInput, CartsUncheckedUpdateWithoutCart_itemsInput>
    create: XOR<CartsCreateWithoutCart_itemsInput, CartsUncheckedCreateWithoutCart_itemsInput>
    where?: CartsWhereInput
  }

  export type CartsUpdateToOneWithWhereWithoutCart_itemsInput = {
    where?: CartsWhereInput
    data: XOR<CartsUpdateWithoutCart_itemsInput, CartsUncheckedUpdateWithoutCart_itemsInput>
  }

  export type CartsUpdateWithoutCart_itemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    users?: UserUpdateOneWithoutCartNestedInput
    session?: SessionUpdateOneRequiredWithoutCartNestedInput
    orders?: OrdersUpdateManyWithoutCartsNestedInput
  }

  export type CartsUncheckedUpdateWithoutCart_itemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    session_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    orders?: OrdersUncheckedUpdateManyWithoutCartsNestedInput
  }

  export type AddressCreateWithoutShipping_ordersInput = {
    id?: string
    first_name: string
    last_name: string
    email: string
    phone?: string | null
    address_line1: string
    address_line2: string
    city: string
    state: string
    country: string
    is_default_shipping: boolean
    is_default_billing: boolean
    created_at?: Date | string
    updated_at?: Date | string
    user?: UserCreateNestedOneWithoutAddressInput
    billing_orders?: OrdersCreateNestedManyWithoutBilling_addressInput
  }

  export type AddressUncheckedCreateWithoutShipping_ordersInput = {
    id?: string
    user_id?: string | null
    first_name: string
    last_name: string
    email: string
    phone?: string | null
    address_line1: string
    address_line2: string
    city: string
    state: string
    country: string
    is_default_shipping: boolean
    is_default_billing: boolean
    created_at?: Date | string
    updated_at?: Date | string
    billing_orders?: OrdersUncheckedCreateNestedManyWithoutBilling_addressInput
  }

  export type AddressCreateOrConnectWithoutShipping_ordersInput = {
    where: AddressWhereUniqueInput
    create: XOR<AddressCreateWithoutShipping_ordersInput, AddressUncheckedCreateWithoutShipping_ordersInput>
  }

  export type AddressCreateWithoutBilling_ordersInput = {
    id?: string
    first_name: string
    last_name: string
    email: string
    phone?: string | null
    address_line1: string
    address_line2: string
    city: string
    state: string
    country: string
    is_default_shipping: boolean
    is_default_billing: boolean
    created_at?: Date | string
    updated_at?: Date | string
    user?: UserCreateNestedOneWithoutAddressInput
    shipping_orders?: OrdersCreateNestedManyWithoutShipping_addressInput
  }

  export type AddressUncheckedCreateWithoutBilling_ordersInput = {
    id?: string
    user_id?: string | null
    first_name: string
    last_name: string
    email: string
    phone?: string | null
    address_line1: string
    address_line2: string
    city: string
    state: string
    country: string
    is_default_shipping: boolean
    is_default_billing: boolean
    created_at?: Date | string
    updated_at?: Date | string
    shipping_orders?: OrdersUncheckedCreateNestedManyWithoutShipping_addressInput
  }

  export type AddressCreateOrConnectWithoutBilling_ordersInput = {
    where: AddressWhereUniqueInput
    create: XOR<AddressCreateWithoutBilling_ordersInput, AddressUncheckedCreateWithoutBilling_ordersInput>
  }

  export type CartsCreateWithoutOrdersInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string
    status: $Enums.Status
    users?: UserCreateNestedOneWithoutCartInput
    session: SessionCreateNestedOneWithoutCartInput
    cart_items?: CartItemsCreateNestedManyWithoutCartsInput
  }

  export type CartsUncheckedCreateWithoutOrdersInput = {
    id?: string
    user_id?: string | null
    session_id: string
    created_at?: Date | string
    updated_at?: Date | string
    status: $Enums.Status
    cart_items?: CartItemsUncheckedCreateNestedManyWithoutCartsInput
  }

  export type CartsCreateOrConnectWithoutOrdersInput = {
    where: CartsWhereUniqueInput
    create: XOR<CartsCreateWithoutOrdersInput, CartsUncheckedCreateWithoutOrdersInput>
  }

  export type UserCreateWithoutOrdersInput = {
    id?: string
    email: string
    password_hash: string
    first_name: string
    last_name: string
    role: $Enums.Role
    created_at?: Date | string
    updated_at?: Date | string
    user_profile?: UserProfileCreateNestedManyWithoutUserInput
    cart?: CartsCreateNestedManyWithoutUsersInput
    address?: AddressCreateNestedManyWithoutUserInput
    session?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOrdersInput = {
    id?: string
    email: string
    password_hash: string
    first_name: string
    last_name: string
    role: $Enums.Role
    created_at?: Date | string
    updated_at?: Date | string
    user_profile?: UserProfileUncheckedCreateNestedManyWithoutUserInput
    cart?: CartsUncheckedCreateNestedManyWithoutUsersInput
    address?: AddressUncheckedCreateNestedManyWithoutUserInput
    session?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOrdersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
  }

  export type OrderItemsCreateWithoutOrdersInput = {
    id?: string
    quantity: number
    unit_price: Decimal | DecimalJsLike | number | string
    total_price: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    product_variant: ProductVariantsCreateNestedOneWithoutOrder_itemsInput
  }

  export type OrderItemsUncheckedCreateWithoutOrdersInput = {
    id?: string
    product_variant_id: string
    quantity: number
    unit_price: Decimal | DecimalJsLike | number | string
    total_price: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
  }

  export type OrderItemsCreateOrConnectWithoutOrdersInput = {
    where: OrderItemsWhereUniqueInput
    create: XOR<OrderItemsCreateWithoutOrdersInput, OrderItemsUncheckedCreateWithoutOrdersInput>
  }

  export type OrderItemsCreateManyOrdersInputEnvelope = {
    data: OrderItemsCreateManyOrdersInput | OrderItemsCreateManyOrdersInput[]
    skipDuplicates?: boolean
  }

  export type AddressUpsertWithoutShipping_ordersInput = {
    update: XOR<AddressUpdateWithoutShipping_ordersInput, AddressUncheckedUpdateWithoutShipping_ordersInput>
    create: XOR<AddressCreateWithoutShipping_ordersInput, AddressUncheckedCreateWithoutShipping_ordersInput>
    where?: AddressWhereInput
  }

  export type AddressUpdateToOneWithWhereWithoutShipping_ordersInput = {
    where?: AddressWhereInput
    data: XOR<AddressUpdateWithoutShipping_ordersInput, AddressUncheckedUpdateWithoutShipping_ordersInput>
  }

  export type AddressUpdateWithoutShipping_ordersInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address_line1?: StringFieldUpdateOperationsInput | string
    address_line2?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    is_default_shipping?: BoolFieldUpdateOperationsInput | boolean
    is_default_billing?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutAddressNestedInput
    billing_orders?: OrdersUpdateManyWithoutBilling_addressNestedInput
  }

  export type AddressUncheckedUpdateWithoutShipping_ordersInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address_line1?: StringFieldUpdateOperationsInput | string
    address_line2?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    is_default_shipping?: BoolFieldUpdateOperationsInput | boolean
    is_default_billing?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    billing_orders?: OrdersUncheckedUpdateManyWithoutBilling_addressNestedInput
  }

  export type AddressUpsertWithoutBilling_ordersInput = {
    update: XOR<AddressUpdateWithoutBilling_ordersInput, AddressUncheckedUpdateWithoutBilling_ordersInput>
    create: XOR<AddressCreateWithoutBilling_ordersInput, AddressUncheckedCreateWithoutBilling_ordersInput>
    where?: AddressWhereInput
  }

  export type AddressUpdateToOneWithWhereWithoutBilling_ordersInput = {
    where?: AddressWhereInput
    data: XOR<AddressUpdateWithoutBilling_ordersInput, AddressUncheckedUpdateWithoutBilling_ordersInput>
  }

  export type AddressUpdateWithoutBilling_ordersInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address_line1?: StringFieldUpdateOperationsInput | string
    address_line2?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    is_default_shipping?: BoolFieldUpdateOperationsInput | boolean
    is_default_billing?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutAddressNestedInput
    shipping_orders?: OrdersUpdateManyWithoutShipping_addressNestedInput
  }

  export type AddressUncheckedUpdateWithoutBilling_ordersInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address_line1?: StringFieldUpdateOperationsInput | string
    address_line2?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    is_default_shipping?: BoolFieldUpdateOperationsInput | boolean
    is_default_billing?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    shipping_orders?: OrdersUncheckedUpdateManyWithoutShipping_addressNestedInput
  }

  export type CartsUpsertWithoutOrdersInput = {
    update: XOR<CartsUpdateWithoutOrdersInput, CartsUncheckedUpdateWithoutOrdersInput>
    create: XOR<CartsCreateWithoutOrdersInput, CartsUncheckedCreateWithoutOrdersInput>
    where?: CartsWhereInput
  }

  export type CartsUpdateToOneWithWhereWithoutOrdersInput = {
    where?: CartsWhereInput
    data: XOR<CartsUpdateWithoutOrdersInput, CartsUncheckedUpdateWithoutOrdersInput>
  }

  export type CartsUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    users?: UserUpdateOneWithoutCartNestedInput
    session?: SessionUpdateOneRequiredWithoutCartNestedInput
    cart_items?: CartItemsUpdateManyWithoutCartsNestedInput
  }

  export type CartsUncheckedUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    session_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    cart_items?: CartItemsUncheckedUpdateManyWithoutCartsNestedInput
  }

  export type UserUpsertWithoutOrdersInput = {
    update: XOR<UserUpdateWithoutOrdersInput, UserUncheckedUpdateWithoutOrdersInput>
    create: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOrdersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOrdersInput, UserUncheckedUpdateWithoutOrdersInput>
  }

  export type UserUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_profile?: UserProfileUpdateManyWithoutUserNestedInput
    cart?: CartsUpdateManyWithoutUsersNestedInput
    address?: AddressUpdateManyWithoutUserNestedInput
    session?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_profile?: UserProfileUncheckedUpdateManyWithoutUserNestedInput
    cart?: CartsUncheckedUpdateManyWithoutUsersNestedInput
    address?: AddressUncheckedUpdateManyWithoutUserNestedInput
    session?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type OrderItemsUpsertWithWhereUniqueWithoutOrdersInput = {
    where: OrderItemsWhereUniqueInput
    update: XOR<OrderItemsUpdateWithoutOrdersInput, OrderItemsUncheckedUpdateWithoutOrdersInput>
    create: XOR<OrderItemsCreateWithoutOrdersInput, OrderItemsUncheckedCreateWithoutOrdersInput>
  }

  export type OrderItemsUpdateWithWhereUniqueWithoutOrdersInput = {
    where: OrderItemsWhereUniqueInput
    data: XOR<OrderItemsUpdateWithoutOrdersInput, OrderItemsUncheckedUpdateWithoutOrdersInput>
  }

  export type OrderItemsUpdateManyWithWhereWithoutOrdersInput = {
    where: OrderItemsScalarWhereInput
    data: XOR<OrderItemsUpdateManyMutationInput, OrderItemsUncheckedUpdateManyWithoutOrdersInput>
  }

  export type OrderItemsScalarWhereInput = {
    AND?: OrderItemsScalarWhereInput | OrderItemsScalarWhereInput[]
    OR?: OrderItemsScalarWhereInput[]
    NOT?: OrderItemsScalarWhereInput | OrderItemsScalarWhereInput[]
    id?: UuidFilter<"OrderItems"> | string
    order_id?: UuidFilter<"OrderItems"> | string
    product_variant_id?: UuidFilter<"OrderItems"> | string
    quantity?: IntFilter<"OrderItems"> | number
    unit_price?: DecimalFilter<"OrderItems"> | Decimal | DecimalJsLike | number | string
    total_price?: DecimalFilter<"OrderItems"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFilter<"OrderItems"> | Date | string
  }

  export type ProductVariantsCreateWithoutOrder_itemsInput = {
    id?: string
    name: string
    sku: string
    price?: Decimal | DecimalJsLike | number | string | null
    inventory_quantity: number
    option1_value?: string | null
    option2_value?: string | null
    option3_value?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    product: ProductsCreateNestedOneWithoutProduct_variantInput
    cart_items?: CartItemsCreateNestedManyWithoutProduct_variantInput
  }

  export type ProductVariantsUncheckedCreateWithoutOrder_itemsInput = {
    id?: string
    product_id: string
    name: string
    sku: string
    price?: Decimal | DecimalJsLike | number | string | null
    inventory_quantity: number
    option1_value?: string | null
    option2_value?: string | null
    option3_value?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    cart_items?: CartItemsUncheckedCreateNestedManyWithoutProduct_variantInput
  }

  export type ProductVariantsCreateOrConnectWithoutOrder_itemsInput = {
    where: ProductVariantsWhereUniqueInput
    create: XOR<ProductVariantsCreateWithoutOrder_itemsInput, ProductVariantsUncheckedCreateWithoutOrder_itemsInput>
  }

  export type OrdersCreateWithoutOrder_itemsInput = {
    id?: string
    order_number: string
    status: $Enums.OrderStatus
    total_amount: Decimal | DecimalJsLike | number | string
    shipping_amount: Decimal | DecimalJsLike | number | string
    tax_amount: Decimal | DecimalJsLike | number | string
    discount_amount: Decimal | DecimalJsLike | number | string
    payment_status: $Enums.PaymentStatus
    payment_method: string
    created_at?: Date | string
    updated_at?: Date | string
    shipping_address: AddressCreateNestedOneWithoutShipping_ordersInput
    billing_address: AddressCreateNestedOneWithoutBilling_ordersInput
    carts: CartsCreateNestedOneWithoutOrdersInput
    user?: UserCreateNestedOneWithoutOrdersInput
  }

  export type OrdersUncheckedCreateWithoutOrder_itemsInput = {
    id?: string
    user_id?: string | null
    cart_id: string
    order_number: string
    status: $Enums.OrderStatus
    total_amount: Decimal | DecimalJsLike | number | string
    shipping_amount: Decimal | DecimalJsLike | number | string
    tax_amount: Decimal | DecimalJsLike | number | string
    discount_amount: Decimal | DecimalJsLike | number | string
    shipping_address_id: string
    billing_address_id: string
    payment_status: $Enums.PaymentStatus
    payment_method: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type OrdersCreateOrConnectWithoutOrder_itemsInput = {
    where: OrdersWhereUniqueInput
    create: XOR<OrdersCreateWithoutOrder_itemsInput, OrdersUncheckedCreateWithoutOrder_itemsInput>
  }

  export type ProductVariantsUpsertWithoutOrder_itemsInput = {
    update: XOR<ProductVariantsUpdateWithoutOrder_itemsInput, ProductVariantsUncheckedUpdateWithoutOrder_itemsInput>
    create: XOR<ProductVariantsCreateWithoutOrder_itemsInput, ProductVariantsUncheckedCreateWithoutOrder_itemsInput>
    where?: ProductVariantsWhereInput
  }

  export type ProductVariantsUpdateToOneWithWhereWithoutOrder_itemsInput = {
    where?: ProductVariantsWhereInput
    data: XOR<ProductVariantsUpdateWithoutOrder_itemsInput, ProductVariantsUncheckedUpdateWithoutOrder_itemsInput>
  }

  export type ProductVariantsUpdateWithoutOrder_itemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    inventory_quantity?: IntFieldUpdateOperationsInput | number
    option1_value?: NullableStringFieldUpdateOperationsInput | string | null
    option2_value?: NullableStringFieldUpdateOperationsInput | string | null
    option3_value?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductsUpdateOneRequiredWithoutProduct_variantNestedInput
    cart_items?: CartItemsUpdateManyWithoutProduct_variantNestedInput
  }

  export type ProductVariantsUncheckedUpdateWithoutOrder_itemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    product_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    inventory_quantity?: IntFieldUpdateOperationsInput | number
    option1_value?: NullableStringFieldUpdateOperationsInput | string | null
    option2_value?: NullableStringFieldUpdateOperationsInput | string | null
    option3_value?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    cart_items?: CartItemsUncheckedUpdateManyWithoutProduct_variantNestedInput
  }

  export type OrdersUpsertWithoutOrder_itemsInput = {
    update: XOR<OrdersUpdateWithoutOrder_itemsInput, OrdersUncheckedUpdateWithoutOrder_itemsInput>
    create: XOR<OrdersCreateWithoutOrder_itemsInput, OrdersUncheckedCreateWithoutOrder_itemsInput>
    where?: OrdersWhereInput
  }

  export type OrdersUpdateToOneWithWhereWithoutOrder_itemsInput = {
    where?: OrdersWhereInput
    data: XOR<OrdersUpdateWithoutOrder_itemsInput, OrdersUncheckedUpdateWithoutOrder_itemsInput>
  }

  export type OrdersUpdateWithoutOrder_itemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_number?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shipping_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tax_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    payment_method?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    shipping_address?: AddressUpdateOneRequiredWithoutShipping_ordersNestedInput
    billing_address?: AddressUpdateOneRequiredWithoutBilling_ordersNestedInput
    carts?: CartsUpdateOneRequiredWithoutOrdersNestedInput
    user?: UserUpdateOneWithoutOrdersNestedInput
  }

  export type OrdersUncheckedUpdateWithoutOrder_itemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    cart_id?: StringFieldUpdateOperationsInput | string
    order_number?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shipping_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tax_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shipping_address_id?: StringFieldUpdateOperationsInput | string
    billing_address_id?: StringFieldUpdateOperationsInput | string
    payment_status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    payment_method?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryCreateWithoutProductsInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    image_url?: string | null
    display_order?: number
    parent?: CategoryCreateNestedOneWithoutSubcategoriesInput
    subcategories?: CategoryCreateNestedManyWithoutParentInput
  }

  export type CategoryUncheckedCreateWithoutProductsInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    image_url?: string | null
    display_order?: number
    parent_id?: string | null
    subcategories?: CategoryUncheckedCreateNestedManyWithoutParentInput
  }

  export type CategoryCreateOrConnectWithoutProductsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
  }

  export type ProductImagesCreateWithoutProductInput = {
    id?: string
    url: string
    is_primary: boolean
    display_order?: number
    created_at?: Date | string
  }

  export type ProductImagesUncheckedCreateWithoutProductInput = {
    id?: string
    url: string
    is_primary: boolean
    display_order?: number
    created_at?: Date | string
  }

  export type ProductImagesCreateOrConnectWithoutProductInput = {
    where: ProductImagesWhereUniqueInput
    create: XOR<ProductImagesCreateWithoutProductInput, ProductImagesUncheckedCreateWithoutProductInput>
  }

  export type ProductImagesCreateManyProductInputEnvelope = {
    data: ProductImagesCreateManyProductInput | ProductImagesCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type ProductVariantsCreateWithoutProductInput = {
    id?: string
    name: string
    sku: string
    price?: Decimal | DecimalJsLike | number | string | null
    inventory_quantity: number
    option1_value?: string | null
    option2_value?: string | null
    option3_value?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    cart_items?: CartItemsCreateNestedManyWithoutProduct_variantInput
    order_items?: OrderItemsCreateNestedManyWithoutProduct_variantInput
  }

  export type ProductVariantsUncheckedCreateWithoutProductInput = {
    id?: string
    name: string
    sku: string
    price?: Decimal | DecimalJsLike | number | string | null
    inventory_quantity: number
    option1_value?: string | null
    option2_value?: string | null
    option3_value?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    cart_items?: CartItemsUncheckedCreateNestedManyWithoutProduct_variantInput
    order_items?: OrderItemsUncheckedCreateNestedManyWithoutProduct_variantInput
  }

  export type ProductVariantsCreateOrConnectWithoutProductInput = {
    where: ProductVariantsWhereUniqueInput
    create: XOR<ProductVariantsCreateWithoutProductInput, ProductVariantsUncheckedCreateWithoutProductInput>
  }

  export type ProductVariantsCreateManyProductInputEnvelope = {
    data: ProductVariantsCreateManyProductInput | ProductVariantsCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type CategoryUpsertWithoutProductsInput = {
    update: XOR<CategoryUpdateWithoutProductsInput, CategoryUncheckedUpdateWithoutProductsInput>
    create: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutProductsInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutProductsInput, CategoryUncheckedUpdateWithoutProductsInput>
  }

  export type CategoryUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    display_order?: IntFieldUpdateOperationsInput | number
    parent?: CategoryUpdateOneWithoutSubcategoriesNestedInput
    subcategories?: CategoryUpdateManyWithoutParentNestedInput
  }

  export type CategoryUncheckedUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    display_order?: IntFieldUpdateOperationsInput | number
    parent_id?: NullableStringFieldUpdateOperationsInput | string | null
    subcategories?: CategoryUncheckedUpdateManyWithoutParentNestedInput
  }

  export type ProductImagesUpsertWithWhereUniqueWithoutProductInput = {
    where: ProductImagesWhereUniqueInput
    update: XOR<ProductImagesUpdateWithoutProductInput, ProductImagesUncheckedUpdateWithoutProductInput>
    create: XOR<ProductImagesCreateWithoutProductInput, ProductImagesUncheckedCreateWithoutProductInput>
  }

  export type ProductImagesUpdateWithWhereUniqueWithoutProductInput = {
    where: ProductImagesWhereUniqueInput
    data: XOR<ProductImagesUpdateWithoutProductInput, ProductImagesUncheckedUpdateWithoutProductInput>
  }

  export type ProductImagesUpdateManyWithWhereWithoutProductInput = {
    where: ProductImagesScalarWhereInput
    data: XOR<ProductImagesUpdateManyMutationInput, ProductImagesUncheckedUpdateManyWithoutProductInput>
  }

  export type ProductImagesScalarWhereInput = {
    AND?: ProductImagesScalarWhereInput | ProductImagesScalarWhereInput[]
    OR?: ProductImagesScalarWhereInput[]
    NOT?: ProductImagesScalarWhereInput | ProductImagesScalarWhereInput[]
    id?: UuidFilter<"ProductImages"> | string
    product_id?: UuidFilter<"ProductImages"> | string
    url?: StringFilter<"ProductImages"> | string
    is_primary?: BoolFilter<"ProductImages"> | boolean
    display_order?: IntFilter<"ProductImages"> | number
    created_at?: DateTimeFilter<"ProductImages"> | Date | string
  }

  export type ProductVariantsUpsertWithWhereUniqueWithoutProductInput = {
    where: ProductVariantsWhereUniqueInput
    update: XOR<ProductVariantsUpdateWithoutProductInput, ProductVariantsUncheckedUpdateWithoutProductInput>
    create: XOR<ProductVariantsCreateWithoutProductInput, ProductVariantsUncheckedCreateWithoutProductInput>
  }

  export type ProductVariantsUpdateWithWhereUniqueWithoutProductInput = {
    where: ProductVariantsWhereUniqueInput
    data: XOR<ProductVariantsUpdateWithoutProductInput, ProductVariantsUncheckedUpdateWithoutProductInput>
  }

  export type ProductVariantsUpdateManyWithWhereWithoutProductInput = {
    where: ProductVariantsScalarWhereInput
    data: XOR<ProductVariantsUpdateManyMutationInput, ProductVariantsUncheckedUpdateManyWithoutProductInput>
  }

  export type ProductVariantsScalarWhereInput = {
    AND?: ProductVariantsScalarWhereInput | ProductVariantsScalarWhereInput[]
    OR?: ProductVariantsScalarWhereInput[]
    NOT?: ProductVariantsScalarWhereInput | ProductVariantsScalarWhereInput[]
    id?: UuidFilter<"ProductVariants"> | string
    product_id?: UuidFilter<"ProductVariants"> | string
    name?: StringFilter<"ProductVariants"> | string
    sku?: StringFilter<"ProductVariants"> | string
    price?: DecimalNullableFilter<"ProductVariants"> | Decimal | DecimalJsLike | number | string | null
    inventory_quantity?: IntFilter<"ProductVariants"> | number
    option1_value?: StringNullableFilter<"ProductVariants"> | string | null
    option2_value?: StringNullableFilter<"ProductVariants"> | string | null
    option3_value?: StringNullableFilter<"ProductVariants"> | string | null
    created_at?: DateTimeFilter<"ProductVariants"> | Date | string
    updated_at?: DateTimeFilter<"ProductVariants"> | Date | string
  }

  export type ProductsCreateWithoutProduct_imagesInput = {
    id?: string
    name: string
    slug: string
    description: string
    price: Decimal | DecimalJsLike | number | string
    inventory_quantity: number
    is_available: boolean
    created_at?: Date | string
    updated_at?: Date | string
    category: CategoryCreateNestedOneWithoutProductsInput
    product_variant?: ProductVariantsCreateNestedManyWithoutProductInput
  }

  export type ProductsUncheckedCreateWithoutProduct_imagesInput = {
    id?: string
    name: string
    slug: string
    description: string
    price: Decimal | DecimalJsLike | number | string
    inventory_quantity: number
    is_available: boolean
    category_id: string
    created_at?: Date | string
    updated_at?: Date | string
    product_variant?: ProductVariantsUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductsCreateOrConnectWithoutProduct_imagesInput = {
    where: ProductsWhereUniqueInput
    create: XOR<ProductsCreateWithoutProduct_imagesInput, ProductsUncheckedCreateWithoutProduct_imagesInput>
  }

  export type ProductsUpsertWithoutProduct_imagesInput = {
    update: XOR<ProductsUpdateWithoutProduct_imagesInput, ProductsUncheckedUpdateWithoutProduct_imagesInput>
    create: XOR<ProductsCreateWithoutProduct_imagesInput, ProductsUncheckedCreateWithoutProduct_imagesInput>
    where?: ProductsWhereInput
  }

  export type ProductsUpdateToOneWithWhereWithoutProduct_imagesInput = {
    where?: ProductsWhereInput
    data: XOR<ProductsUpdateWithoutProduct_imagesInput, ProductsUncheckedUpdateWithoutProduct_imagesInput>
  }

  export type ProductsUpdateWithoutProduct_imagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    inventory_quantity?: IntFieldUpdateOperationsInput | number
    is_available?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput
    product_variant?: ProductVariantsUpdateManyWithoutProductNestedInput
  }

  export type ProductsUncheckedUpdateWithoutProduct_imagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    inventory_quantity?: IntFieldUpdateOperationsInput | number
    is_available?: BoolFieldUpdateOperationsInput | boolean
    category_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    product_variant?: ProductVariantsUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductsCreateWithoutProduct_variantInput = {
    id?: string
    name: string
    slug: string
    description: string
    price: Decimal | DecimalJsLike | number | string
    inventory_quantity: number
    is_available: boolean
    created_at?: Date | string
    updated_at?: Date | string
    category: CategoryCreateNestedOneWithoutProductsInput
    product_images?: ProductImagesCreateNestedManyWithoutProductInput
  }

  export type ProductsUncheckedCreateWithoutProduct_variantInput = {
    id?: string
    name: string
    slug: string
    description: string
    price: Decimal | DecimalJsLike | number | string
    inventory_quantity: number
    is_available: boolean
    category_id: string
    created_at?: Date | string
    updated_at?: Date | string
    product_images?: ProductImagesUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductsCreateOrConnectWithoutProduct_variantInput = {
    where: ProductsWhereUniqueInput
    create: XOR<ProductsCreateWithoutProduct_variantInput, ProductsUncheckedCreateWithoutProduct_variantInput>
  }

  export type CartItemsCreateWithoutProduct_variantInput = {
    id?: string
    quantity: number
    carts: CartsCreateNestedOneWithoutCart_itemsInput
  }

  export type CartItemsUncheckedCreateWithoutProduct_variantInput = {
    id?: string
    cart_id: string
    quantity: number
  }

  export type CartItemsCreateOrConnectWithoutProduct_variantInput = {
    where: CartItemsWhereUniqueInput
    create: XOR<CartItemsCreateWithoutProduct_variantInput, CartItemsUncheckedCreateWithoutProduct_variantInput>
  }

  export type CartItemsCreateManyProduct_variantInputEnvelope = {
    data: CartItemsCreateManyProduct_variantInput | CartItemsCreateManyProduct_variantInput[]
    skipDuplicates?: boolean
  }

  export type OrderItemsCreateWithoutProduct_variantInput = {
    id?: string
    quantity: number
    unit_price: Decimal | DecimalJsLike | number | string
    total_price: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    orders: OrdersCreateNestedOneWithoutOrder_itemsInput
  }

  export type OrderItemsUncheckedCreateWithoutProduct_variantInput = {
    id?: string
    order_id: string
    quantity: number
    unit_price: Decimal | DecimalJsLike | number | string
    total_price: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
  }

  export type OrderItemsCreateOrConnectWithoutProduct_variantInput = {
    where: OrderItemsWhereUniqueInput
    create: XOR<OrderItemsCreateWithoutProduct_variantInput, OrderItemsUncheckedCreateWithoutProduct_variantInput>
  }

  export type OrderItemsCreateManyProduct_variantInputEnvelope = {
    data: OrderItemsCreateManyProduct_variantInput | OrderItemsCreateManyProduct_variantInput[]
    skipDuplicates?: boolean
  }

  export type ProductsUpsertWithoutProduct_variantInput = {
    update: XOR<ProductsUpdateWithoutProduct_variantInput, ProductsUncheckedUpdateWithoutProduct_variantInput>
    create: XOR<ProductsCreateWithoutProduct_variantInput, ProductsUncheckedCreateWithoutProduct_variantInput>
    where?: ProductsWhereInput
  }

  export type ProductsUpdateToOneWithWhereWithoutProduct_variantInput = {
    where?: ProductsWhereInput
    data: XOR<ProductsUpdateWithoutProduct_variantInput, ProductsUncheckedUpdateWithoutProduct_variantInput>
  }

  export type ProductsUpdateWithoutProduct_variantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    inventory_quantity?: IntFieldUpdateOperationsInput | number
    is_available?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput
    product_images?: ProductImagesUpdateManyWithoutProductNestedInput
  }

  export type ProductsUncheckedUpdateWithoutProduct_variantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    inventory_quantity?: IntFieldUpdateOperationsInput | number
    is_available?: BoolFieldUpdateOperationsInput | boolean
    category_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    product_images?: ProductImagesUncheckedUpdateManyWithoutProductNestedInput
  }

  export type CartItemsUpsertWithWhereUniqueWithoutProduct_variantInput = {
    where: CartItemsWhereUniqueInput
    update: XOR<CartItemsUpdateWithoutProduct_variantInput, CartItemsUncheckedUpdateWithoutProduct_variantInput>
    create: XOR<CartItemsCreateWithoutProduct_variantInput, CartItemsUncheckedCreateWithoutProduct_variantInput>
  }

  export type CartItemsUpdateWithWhereUniqueWithoutProduct_variantInput = {
    where: CartItemsWhereUniqueInput
    data: XOR<CartItemsUpdateWithoutProduct_variantInput, CartItemsUncheckedUpdateWithoutProduct_variantInput>
  }

  export type CartItemsUpdateManyWithWhereWithoutProduct_variantInput = {
    where: CartItemsScalarWhereInput
    data: XOR<CartItemsUpdateManyMutationInput, CartItemsUncheckedUpdateManyWithoutProduct_variantInput>
  }

  export type OrderItemsUpsertWithWhereUniqueWithoutProduct_variantInput = {
    where: OrderItemsWhereUniqueInput
    update: XOR<OrderItemsUpdateWithoutProduct_variantInput, OrderItemsUncheckedUpdateWithoutProduct_variantInput>
    create: XOR<OrderItemsCreateWithoutProduct_variantInput, OrderItemsUncheckedCreateWithoutProduct_variantInput>
  }

  export type OrderItemsUpdateWithWhereUniqueWithoutProduct_variantInput = {
    where: OrderItemsWhereUniqueInput
    data: XOR<OrderItemsUpdateWithoutProduct_variantInput, OrderItemsUncheckedUpdateWithoutProduct_variantInput>
  }

  export type OrderItemsUpdateManyWithWhereWithoutProduct_variantInput = {
    where: OrderItemsScalarWhereInput
    data: XOR<OrderItemsUpdateManyMutationInput, OrderItemsUncheckedUpdateManyWithoutProduct_variantInput>
  }

  export type CategoryCreateWithoutSubcategoriesInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    image_url?: string | null
    display_order?: number
    parent?: CategoryCreateNestedOneWithoutSubcategoriesInput
    products?: ProductsCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutSubcategoriesInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    image_url?: string | null
    display_order?: number
    parent_id?: string | null
    products?: ProductsUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutSubcategoriesInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutSubcategoriesInput, CategoryUncheckedCreateWithoutSubcategoriesInput>
  }

  export type CategoryCreateWithoutParentInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    image_url?: string | null
    display_order?: number
    subcategories?: CategoryCreateNestedManyWithoutParentInput
    products?: ProductsCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutParentInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    image_url?: string | null
    display_order?: number
    subcategories?: CategoryUncheckedCreateNestedManyWithoutParentInput
    products?: ProductsUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutParentInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutParentInput, CategoryUncheckedCreateWithoutParentInput>
  }

  export type CategoryCreateManyParentInputEnvelope = {
    data: CategoryCreateManyParentInput | CategoryCreateManyParentInput[]
    skipDuplicates?: boolean
  }

  export type ProductsCreateWithoutCategoryInput = {
    id?: string
    name: string
    slug: string
    description: string
    price: Decimal | DecimalJsLike | number | string
    inventory_quantity: number
    is_available: boolean
    created_at?: Date | string
    updated_at?: Date | string
    product_images?: ProductImagesCreateNestedManyWithoutProductInput
    product_variant?: ProductVariantsCreateNestedManyWithoutProductInput
  }

  export type ProductsUncheckedCreateWithoutCategoryInput = {
    id?: string
    name: string
    slug: string
    description: string
    price: Decimal | DecimalJsLike | number | string
    inventory_quantity: number
    is_available: boolean
    created_at?: Date | string
    updated_at?: Date | string
    product_images?: ProductImagesUncheckedCreateNestedManyWithoutProductInput
    product_variant?: ProductVariantsUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductsCreateOrConnectWithoutCategoryInput = {
    where: ProductsWhereUniqueInput
    create: XOR<ProductsCreateWithoutCategoryInput, ProductsUncheckedCreateWithoutCategoryInput>
  }

  export type ProductsCreateManyCategoryInputEnvelope = {
    data: ProductsCreateManyCategoryInput | ProductsCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type CategoryUpsertWithoutSubcategoriesInput = {
    update: XOR<CategoryUpdateWithoutSubcategoriesInput, CategoryUncheckedUpdateWithoutSubcategoriesInput>
    create: XOR<CategoryCreateWithoutSubcategoriesInput, CategoryUncheckedCreateWithoutSubcategoriesInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutSubcategoriesInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutSubcategoriesInput, CategoryUncheckedUpdateWithoutSubcategoriesInput>
  }

  export type CategoryUpdateWithoutSubcategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    display_order?: IntFieldUpdateOperationsInput | number
    parent?: CategoryUpdateOneWithoutSubcategoriesNestedInput
    products?: ProductsUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutSubcategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    display_order?: IntFieldUpdateOperationsInput | number
    parent_id?: NullableStringFieldUpdateOperationsInput | string | null
    products?: ProductsUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUpsertWithWhereUniqueWithoutParentInput = {
    where: CategoryWhereUniqueInput
    update: XOR<CategoryUpdateWithoutParentInput, CategoryUncheckedUpdateWithoutParentInput>
    create: XOR<CategoryCreateWithoutParentInput, CategoryUncheckedCreateWithoutParentInput>
  }

  export type CategoryUpdateWithWhereUniqueWithoutParentInput = {
    where: CategoryWhereUniqueInput
    data: XOR<CategoryUpdateWithoutParentInput, CategoryUncheckedUpdateWithoutParentInput>
  }

  export type CategoryUpdateManyWithWhereWithoutParentInput = {
    where: CategoryScalarWhereInput
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyWithoutParentInput>
  }

  export type CategoryScalarWhereInput = {
    AND?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
    OR?: CategoryScalarWhereInput[]
    NOT?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
    id?: UuidFilter<"Category"> | string
    name?: StringFilter<"Category"> | string
    slug?: StringFilter<"Category"> | string
    description?: StringNullableFilter<"Category"> | string | null
    image_url?: StringNullableFilter<"Category"> | string | null
    display_order?: IntFilter<"Category"> | number
    parent_id?: StringNullableFilter<"Category"> | string | null
  }

  export type ProductsUpsertWithWhereUniqueWithoutCategoryInput = {
    where: ProductsWhereUniqueInput
    update: XOR<ProductsUpdateWithoutCategoryInput, ProductsUncheckedUpdateWithoutCategoryInput>
    create: XOR<ProductsCreateWithoutCategoryInput, ProductsUncheckedCreateWithoutCategoryInput>
  }

  export type ProductsUpdateWithWhereUniqueWithoutCategoryInput = {
    where: ProductsWhereUniqueInput
    data: XOR<ProductsUpdateWithoutCategoryInput, ProductsUncheckedUpdateWithoutCategoryInput>
  }

  export type ProductsUpdateManyWithWhereWithoutCategoryInput = {
    where: ProductsScalarWhereInput
    data: XOR<ProductsUpdateManyMutationInput, ProductsUncheckedUpdateManyWithoutCategoryInput>
  }

  export type ProductsScalarWhereInput = {
    AND?: ProductsScalarWhereInput | ProductsScalarWhereInput[]
    OR?: ProductsScalarWhereInput[]
    NOT?: ProductsScalarWhereInput | ProductsScalarWhereInput[]
    id?: UuidFilter<"Products"> | string
    name?: StringFilter<"Products"> | string
    slug?: StringFilter<"Products"> | string
    description?: StringFilter<"Products"> | string
    price?: DecimalFilter<"Products"> | Decimal | DecimalJsLike | number | string
    inventory_quantity?: IntFilter<"Products"> | number
    is_available?: BoolFilter<"Products"> | boolean
    category_id?: UuidFilter<"Products"> | string
    created_at?: DateTimeFilter<"Products"> | Date | string
    updated_at?: DateTimeFilter<"Products"> | Date | string
  }

  export type UserProfileCreateWithoutUserInput = {
    id?: string
    phone: string
    address_line1?: string | null
    address_line2?: string | null
    city?: string | null
    state?: string | null
    postal_code?: string | null
    country?: string | null
    avatar_url?: string | null
    updated_at?: Date | string
  }

  export type UserProfileUncheckedCreateWithoutUserInput = {
    id?: string
    phone: string
    address_line1?: string | null
    address_line2?: string | null
    city?: string | null
    state?: string | null
    postal_code?: string | null
    country?: string | null
    avatar_url?: string | null
    updated_at?: Date | string
  }

  export type UserProfileCreateOrConnectWithoutUserInput = {
    where: UserProfileWhereUniqueInput
    create: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
  }

  export type UserProfileCreateManyUserInputEnvelope = {
    data: UserProfileCreateManyUserInput | UserProfileCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CartsCreateWithoutUsersInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string
    status: $Enums.Status
    session: SessionCreateNestedOneWithoutCartInput
    cart_items?: CartItemsCreateNestedManyWithoutCartsInput
    orders?: OrdersCreateNestedManyWithoutCartsInput
  }

  export type CartsUncheckedCreateWithoutUsersInput = {
    id?: string
    session_id: string
    created_at?: Date | string
    updated_at?: Date | string
    status: $Enums.Status
    cart_items?: CartItemsUncheckedCreateNestedManyWithoutCartsInput
    orders?: OrdersUncheckedCreateNestedManyWithoutCartsInput
  }

  export type CartsCreateOrConnectWithoutUsersInput = {
    where: CartsWhereUniqueInput
    create: XOR<CartsCreateWithoutUsersInput, CartsUncheckedCreateWithoutUsersInput>
  }

  export type CartsCreateManyUsersInputEnvelope = {
    data: CartsCreateManyUsersInput | CartsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type OrdersCreateWithoutUserInput = {
    id?: string
    order_number: string
    status: $Enums.OrderStatus
    total_amount: Decimal | DecimalJsLike | number | string
    shipping_amount: Decimal | DecimalJsLike | number | string
    tax_amount: Decimal | DecimalJsLike | number | string
    discount_amount: Decimal | DecimalJsLike | number | string
    payment_status: $Enums.PaymentStatus
    payment_method: string
    created_at?: Date | string
    updated_at?: Date | string
    shipping_address: AddressCreateNestedOneWithoutShipping_ordersInput
    billing_address: AddressCreateNestedOneWithoutBilling_ordersInput
    carts: CartsCreateNestedOneWithoutOrdersInput
    order_items?: OrderItemsCreateNestedManyWithoutOrdersInput
  }

  export type OrdersUncheckedCreateWithoutUserInput = {
    id?: string
    cart_id: string
    order_number: string
    status: $Enums.OrderStatus
    total_amount: Decimal | DecimalJsLike | number | string
    shipping_amount: Decimal | DecimalJsLike | number | string
    tax_amount: Decimal | DecimalJsLike | number | string
    discount_amount: Decimal | DecimalJsLike | number | string
    shipping_address_id: string
    billing_address_id: string
    payment_status: $Enums.PaymentStatus
    payment_method: string
    created_at?: Date | string
    updated_at?: Date | string
    order_items?: OrderItemsUncheckedCreateNestedManyWithoutOrdersInput
  }

  export type OrdersCreateOrConnectWithoutUserInput = {
    where: OrdersWhereUniqueInput
    create: XOR<OrdersCreateWithoutUserInput, OrdersUncheckedCreateWithoutUserInput>
  }

  export type OrdersCreateManyUserInputEnvelope = {
    data: OrdersCreateManyUserInput | OrdersCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AddressCreateWithoutUserInput = {
    id?: string
    first_name: string
    last_name: string
    email: string
    phone?: string | null
    address_line1: string
    address_line2: string
    city: string
    state: string
    country: string
    is_default_shipping: boolean
    is_default_billing: boolean
    created_at?: Date | string
    updated_at?: Date | string
    shipping_orders?: OrdersCreateNestedManyWithoutShipping_addressInput
    billing_orders?: OrdersCreateNestedManyWithoutBilling_addressInput
  }

  export type AddressUncheckedCreateWithoutUserInput = {
    id?: string
    first_name: string
    last_name: string
    email: string
    phone?: string | null
    address_line1: string
    address_line2: string
    city: string
    state: string
    country: string
    is_default_shipping: boolean
    is_default_billing: boolean
    created_at?: Date | string
    updated_at?: Date | string
    shipping_orders?: OrdersUncheckedCreateNestedManyWithoutShipping_addressInput
    billing_orders?: OrdersUncheckedCreateNestedManyWithoutBilling_addressInput
  }

  export type AddressCreateOrConnectWithoutUserInput = {
    where: AddressWhereUniqueInput
    create: XOR<AddressCreateWithoutUserInput, AddressUncheckedCreateWithoutUserInput>
  }

  export type AddressCreateManyUserInputEnvelope = {
    data: AddressCreateManyUserInput | AddressCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    token: string
    expires_at: Date | string
    data: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    cart?: CartsCreateNestedManyWithoutSessionInput
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    token: string
    expires_at: Date | string
    data: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    cart?: CartsUncheckedCreateNestedManyWithoutSessionInput
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserProfileUpsertWithWhereUniqueWithoutUserInput = {
    where: UserProfileWhereUniqueInput
    update: XOR<UserProfileUpdateWithoutUserInput, UserProfileUncheckedUpdateWithoutUserInput>
    create: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
  }

  export type UserProfileUpdateWithWhereUniqueWithoutUserInput = {
    where: UserProfileWhereUniqueInput
    data: XOR<UserProfileUpdateWithoutUserInput, UserProfileUncheckedUpdateWithoutUserInput>
  }

  export type UserProfileUpdateManyWithWhereWithoutUserInput = {
    where: UserProfileScalarWhereInput
    data: XOR<UserProfileUpdateManyMutationInput, UserProfileUncheckedUpdateManyWithoutUserInput>
  }

  export type UserProfileScalarWhereInput = {
    AND?: UserProfileScalarWhereInput | UserProfileScalarWhereInput[]
    OR?: UserProfileScalarWhereInput[]
    NOT?: UserProfileScalarWhereInput | UserProfileScalarWhereInput[]
    id?: UuidFilter<"UserProfile"> | string
    user_id?: UuidFilter<"UserProfile"> | string
    phone?: StringFilter<"UserProfile"> | string
    address_line1?: StringNullableFilter<"UserProfile"> | string | null
    address_line2?: StringNullableFilter<"UserProfile"> | string | null
    city?: StringNullableFilter<"UserProfile"> | string | null
    state?: StringNullableFilter<"UserProfile"> | string | null
    postal_code?: StringNullableFilter<"UserProfile"> | string | null
    country?: StringNullableFilter<"UserProfile"> | string | null
    avatar_url?: StringNullableFilter<"UserProfile"> | string | null
    updated_at?: DateTimeFilter<"UserProfile"> | Date | string
  }

  export type CartsUpsertWithWhereUniqueWithoutUsersInput = {
    where: CartsWhereUniqueInput
    update: XOR<CartsUpdateWithoutUsersInput, CartsUncheckedUpdateWithoutUsersInput>
    create: XOR<CartsCreateWithoutUsersInput, CartsUncheckedCreateWithoutUsersInput>
  }

  export type CartsUpdateWithWhereUniqueWithoutUsersInput = {
    where: CartsWhereUniqueInput
    data: XOR<CartsUpdateWithoutUsersInput, CartsUncheckedUpdateWithoutUsersInput>
  }

  export type CartsUpdateManyWithWhereWithoutUsersInput = {
    where: CartsScalarWhereInput
    data: XOR<CartsUpdateManyMutationInput, CartsUncheckedUpdateManyWithoutUsersInput>
  }

  export type CartsScalarWhereInput = {
    AND?: CartsScalarWhereInput | CartsScalarWhereInput[]
    OR?: CartsScalarWhereInput[]
    NOT?: CartsScalarWhereInput | CartsScalarWhereInput[]
    id?: UuidFilter<"Carts"> | string
    user_id?: UuidNullableFilter<"Carts"> | string | null
    session_id?: UuidFilter<"Carts"> | string
    created_at?: DateTimeFilter<"Carts"> | Date | string
    updated_at?: DateTimeFilter<"Carts"> | Date | string
    status?: EnumStatusFilter<"Carts"> | $Enums.Status
  }

  export type OrdersUpsertWithWhereUniqueWithoutUserInput = {
    where: OrdersWhereUniqueInput
    update: XOR<OrdersUpdateWithoutUserInput, OrdersUncheckedUpdateWithoutUserInput>
    create: XOR<OrdersCreateWithoutUserInput, OrdersUncheckedCreateWithoutUserInput>
  }

  export type OrdersUpdateWithWhereUniqueWithoutUserInput = {
    where: OrdersWhereUniqueInput
    data: XOR<OrdersUpdateWithoutUserInput, OrdersUncheckedUpdateWithoutUserInput>
  }

  export type OrdersUpdateManyWithWhereWithoutUserInput = {
    where: OrdersScalarWhereInput
    data: XOR<OrdersUpdateManyMutationInput, OrdersUncheckedUpdateManyWithoutUserInput>
  }

  export type AddressUpsertWithWhereUniqueWithoutUserInput = {
    where: AddressWhereUniqueInput
    update: XOR<AddressUpdateWithoutUserInput, AddressUncheckedUpdateWithoutUserInput>
    create: XOR<AddressCreateWithoutUserInput, AddressUncheckedCreateWithoutUserInput>
  }

  export type AddressUpdateWithWhereUniqueWithoutUserInput = {
    where: AddressWhereUniqueInput
    data: XOR<AddressUpdateWithoutUserInput, AddressUncheckedUpdateWithoutUserInput>
  }

  export type AddressUpdateManyWithWhereWithoutUserInput = {
    where: AddressScalarWhereInput
    data: XOR<AddressUpdateManyMutationInput, AddressUncheckedUpdateManyWithoutUserInput>
  }

  export type AddressScalarWhereInput = {
    AND?: AddressScalarWhereInput | AddressScalarWhereInput[]
    OR?: AddressScalarWhereInput[]
    NOT?: AddressScalarWhereInput | AddressScalarWhereInput[]
    id?: UuidFilter<"Address"> | string
    user_id?: UuidNullableFilter<"Address"> | string | null
    first_name?: StringFilter<"Address"> | string
    last_name?: StringFilter<"Address"> | string
    email?: StringFilter<"Address"> | string
    phone?: StringNullableFilter<"Address"> | string | null
    address_line1?: StringFilter<"Address"> | string
    address_line2?: StringFilter<"Address"> | string
    city?: StringFilter<"Address"> | string
    state?: StringFilter<"Address"> | string
    country?: StringFilter<"Address"> | string
    is_default_shipping?: BoolFilter<"Address"> | boolean
    is_default_billing?: BoolFilter<"Address"> | boolean
    created_at?: DateTimeFilter<"Address"> | Date | string
    updated_at?: DateTimeFilter<"Address"> | Date | string
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: UuidFilter<"Session"> | string
    user_id?: UuidNullableFilter<"Session"> | string | null
    token?: StringFilter<"Session"> | string
    expires_at?: DateTimeFilter<"Session"> | Date | string
    data?: JsonFilter<"Session">
    created_at?: DateTimeFilter<"Session"> | Date | string
    updated_at?: DateTimeFilter<"Session"> | Date | string
  }

  export type UserCreateWithoutUser_profileInput = {
    id?: string
    email: string
    password_hash: string
    first_name: string
    last_name: string
    role: $Enums.Role
    created_at?: Date | string
    updated_at?: Date | string
    cart?: CartsCreateNestedManyWithoutUsersInput
    orders?: OrdersCreateNestedManyWithoutUserInput
    address?: AddressCreateNestedManyWithoutUserInput
    session?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUser_profileInput = {
    id?: string
    email: string
    password_hash: string
    first_name: string
    last_name: string
    role: $Enums.Role
    created_at?: Date | string
    updated_at?: Date | string
    cart?: CartsUncheckedCreateNestedManyWithoutUsersInput
    orders?: OrdersUncheckedCreateNestedManyWithoutUserInput
    address?: AddressUncheckedCreateNestedManyWithoutUserInput
    session?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUser_profileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUser_profileInput, UserUncheckedCreateWithoutUser_profileInput>
  }

  export type UserUpsertWithoutUser_profileInput = {
    update: XOR<UserUpdateWithoutUser_profileInput, UserUncheckedUpdateWithoutUser_profileInput>
    create: XOR<UserCreateWithoutUser_profileInput, UserUncheckedCreateWithoutUser_profileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUser_profileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUser_profileInput, UserUncheckedUpdateWithoutUser_profileInput>
  }

  export type UserUpdateWithoutUser_profileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    cart?: CartsUpdateManyWithoutUsersNestedInput
    orders?: OrdersUpdateManyWithoutUserNestedInput
    address?: AddressUpdateManyWithoutUserNestedInput
    session?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUser_profileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    cart?: CartsUncheckedUpdateManyWithoutUsersNestedInput
    orders?: OrdersUncheckedUpdateManyWithoutUserNestedInput
    address?: AddressUncheckedUpdateManyWithoutUserNestedInput
    session?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSessionInput = {
    id?: string
    email: string
    password_hash: string
    first_name: string
    last_name: string
    role: $Enums.Role
    created_at?: Date | string
    updated_at?: Date | string
    user_profile?: UserProfileCreateNestedManyWithoutUserInput
    cart?: CartsCreateNestedManyWithoutUsersInput
    orders?: OrdersCreateNestedManyWithoutUserInput
    address?: AddressCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionInput = {
    id?: string
    email: string
    password_hash: string
    first_name: string
    last_name: string
    role: $Enums.Role
    created_at?: Date | string
    updated_at?: Date | string
    user_profile?: UserProfileUncheckedCreateNestedManyWithoutUserInput
    cart?: CartsUncheckedCreateNestedManyWithoutUsersInput
    orders?: OrdersUncheckedCreateNestedManyWithoutUserInput
    address?: AddressUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionInput, UserUncheckedCreateWithoutSessionInput>
  }

  export type CartsCreateWithoutSessionInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string
    status: $Enums.Status
    users?: UserCreateNestedOneWithoutCartInput
    cart_items?: CartItemsCreateNestedManyWithoutCartsInput
    orders?: OrdersCreateNestedManyWithoutCartsInput
  }

  export type CartsUncheckedCreateWithoutSessionInput = {
    id?: string
    user_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    status: $Enums.Status
    cart_items?: CartItemsUncheckedCreateNestedManyWithoutCartsInput
    orders?: OrdersUncheckedCreateNestedManyWithoutCartsInput
  }

  export type CartsCreateOrConnectWithoutSessionInput = {
    where: CartsWhereUniqueInput
    create: XOR<CartsCreateWithoutSessionInput, CartsUncheckedCreateWithoutSessionInput>
  }

  export type CartsCreateManySessionInputEnvelope = {
    data: CartsCreateManySessionInput | CartsCreateManySessionInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutSessionInput = {
    update: XOR<UserUpdateWithoutSessionInput, UserUncheckedUpdateWithoutSessionInput>
    create: XOR<UserCreateWithoutSessionInput, UserUncheckedCreateWithoutSessionInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionInput, UserUncheckedUpdateWithoutSessionInput>
  }

  export type UserUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_profile?: UserProfileUpdateManyWithoutUserNestedInput
    cart?: CartsUpdateManyWithoutUsersNestedInput
    orders?: OrdersUpdateManyWithoutUserNestedInput
    address?: AddressUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_profile?: UserProfileUncheckedUpdateManyWithoutUserNestedInput
    cart?: CartsUncheckedUpdateManyWithoutUsersNestedInput
    orders?: OrdersUncheckedUpdateManyWithoutUserNestedInput
    address?: AddressUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CartsUpsertWithWhereUniqueWithoutSessionInput = {
    where: CartsWhereUniqueInput
    update: XOR<CartsUpdateWithoutSessionInput, CartsUncheckedUpdateWithoutSessionInput>
    create: XOR<CartsCreateWithoutSessionInput, CartsUncheckedCreateWithoutSessionInput>
  }

  export type CartsUpdateWithWhereUniqueWithoutSessionInput = {
    where: CartsWhereUniqueInput
    data: XOR<CartsUpdateWithoutSessionInput, CartsUncheckedUpdateWithoutSessionInput>
  }

  export type CartsUpdateManyWithWhereWithoutSessionInput = {
    where: CartsScalarWhereInput
    data: XOR<CartsUpdateManyMutationInput, CartsUncheckedUpdateManyWithoutSessionInput>
  }

  export type OrdersCreateManyShipping_addressInput = {
    id?: string
    user_id?: string | null
    cart_id: string
    order_number: string
    status: $Enums.OrderStatus
    total_amount: Decimal | DecimalJsLike | number | string
    shipping_amount: Decimal | DecimalJsLike | number | string
    tax_amount: Decimal | DecimalJsLike | number | string
    discount_amount: Decimal | DecimalJsLike | number | string
    billing_address_id: string
    payment_status: $Enums.PaymentStatus
    payment_method: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type OrdersCreateManyBilling_addressInput = {
    id?: string
    user_id?: string | null
    cart_id: string
    order_number: string
    status: $Enums.OrderStatus
    total_amount: Decimal | DecimalJsLike | number | string
    shipping_amount: Decimal | DecimalJsLike | number | string
    tax_amount: Decimal | DecimalJsLike | number | string
    discount_amount: Decimal | DecimalJsLike | number | string
    shipping_address_id: string
    payment_status: $Enums.PaymentStatus
    payment_method: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type OrdersUpdateWithoutShipping_addressInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_number?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shipping_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tax_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    payment_method?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    billing_address?: AddressUpdateOneRequiredWithoutBilling_ordersNestedInput
    carts?: CartsUpdateOneRequiredWithoutOrdersNestedInput
    user?: UserUpdateOneWithoutOrdersNestedInput
    order_items?: OrderItemsUpdateManyWithoutOrdersNestedInput
  }

  export type OrdersUncheckedUpdateWithoutShipping_addressInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    cart_id?: StringFieldUpdateOperationsInput | string
    order_number?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shipping_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tax_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    billing_address_id?: StringFieldUpdateOperationsInput | string
    payment_status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    payment_method?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    order_items?: OrderItemsUncheckedUpdateManyWithoutOrdersNestedInput
  }

  export type OrdersUncheckedUpdateManyWithoutShipping_addressInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    cart_id?: StringFieldUpdateOperationsInput | string
    order_number?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shipping_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tax_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    billing_address_id?: StringFieldUpdateOperationsInput | string
    payment_status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    payment_method?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrdersUpdateWithoutBilling_addressInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_number?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shipping_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tax_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    payment_method?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    shipping_address?: AddressUpdateOneRequiredWithoutShipping_ordersNestedInput
    carts?: CartsUpdateOneRequiredWithoutOrdersNestedInput
    user?: UserUpdateOneWithoutOrdersNestedInput
    order_items?: OrderItemsUpdateManyWithoutOrdersNestedInput
  }

  export type OrdersUncheckedUpdateWithoutBilling_addressInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    cart_id?: StringFieldUpdateOperationsInput | string
    order_number?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shipping_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tax_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shipping_address_id?: StringFieldUpdateOperationsInput | string
    payment_status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    payment_method?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    order_items?: OrderItemsUncheckedUpdateManyWithoutOrdersNestedInput
  }

  export type OrdersUncheckedUpdateManyWithoutBilling_addressInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    cart_id?: StringFieldUpdateOperationsInput | string
    order_number?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shipping_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tax_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shipping_address_id?: StringFieldUpdateOperationsInput | string
    payment_status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    payment_method?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CartItemsCreateManyCartsInput = {
    id?: string
    product_variant_id: string
    quantity: number
  }

  export type OrdersCreateManyCartsInput = {
    id?: string
    user_id?: string | null
    order_number: string
    status: $Enums.OrderStatus
    total_amount: Decimal | DecimalJsLike | number | string
    shipping_amount: Decimal | DecimalJsLike | number | string
    tax_amount: Decimal | DecimalJsLike | number | string
    discount_amount: Decimal | DecimalJsLike | number | string
    shipping_address_id: string
    billing_address_id: string
    payment_status: $Enums.PaymentStatus
    payment_method: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CartItemsUpdateWithoutCartsInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    product_variant?: ProductVariantsUpdateOneRequiredWithoutCart_itemsNestedInput
  }

  export type CartItemsUncheckedUpdateWithoutCartsInput = {
    id?: StringFieldUpdateOperationsInput | string
    product_variant_id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type CartItemsUncheckedUpdateManyWithoutCartsInput = {
    id?: StringFieldUpdateOperationsInput | string
    product_variant_id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type OrdersUpdateWithoutCartsInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_number?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shipping_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tax_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    payment_method?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    shipping_address?: AddressUpdateOneRequiredWithoutShipping_ordersNestedInput
    billing_address?: AddressUpdateOneRequiredWithoutBilling_ordersNestedInput
    user?: UserUpdateOneWithoutOrdersNestedInput
    order_items?: OrderItemsUpdateManyWithoutOrdersNestedInput
  }

  export type OrdersUncheckedUpdateWithoutCartsInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    order_number?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shipping_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tax_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shipping_address_id?: StringFieldUpdateOperationsInput | string
    billing_address_id?: StringFieldUpdateOperationsInput | string
    payment_status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    payment_method?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    order_items?: OrderItemsUncheckedUpdateManyWithoutOrdersNestedInput
  }

  export type OrdersUncheckedUpdateManyWithoutCartsInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    order_number?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shipping_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tax_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shipping_address_id?: StringFieldUpdateOperationsInput | string
    billing_address_id?: StringFieldUpdateOperationsInput | string
    payment_status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    payment_method?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemsCreateManyOrdersInput = {
    id?: string
    product_variant_id: string
    quantity: number
    unit_price: Decimal | DecimalJsLike | number | string
    total_price: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
  }

  export type OrderItemsUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    product_variant?: ProductVariantsUpdateOneRequiredWithoutOrder_itemsNestedInput
  }

  export type OrderItemsUncheckedUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    product_variant_id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemsUncheckedUpdateManyWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    product_variant_id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductImagesCreateManyProductInput = {
    id?: string
    url: string
    is_primary: boolean
    display_order?: number
    created_at?: Date | string
  }

  export type ProductVariantsCreateManyProductInput = {
    id?: string
    name: string
    sku: string
    price?: Decimal | DecimalJsLike | number | string | null
    inventory_quantity: number
    option1_value?: string | null
    option2_value?: string | null
    option3_value?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ProductImagesUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    is_primary?: BoolFieldUpdateOperationsInput | boolean
    display_order?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductImagesUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    is_primary?: BoolFieldUpdateOperationsInput | boolean
    display_order?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductImagesUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    is_primary?: BoolFieldUpdateOperationsInput | boolean
    display_order?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductVariantsUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    inventory_quantity?: IntFieldUpdateOperationsInput | number
    option1_value?: NullableStringFieldUpdateOperationsInput | string | null
    option2_value?: NullableStringFieldUpdateOperationsInput | string | null
    option3_value?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    cart_items?: CartItemsUpdateManyWithoutProduct_variantNestedInput
    order_items?: OrderItemsUpdateManyWithoutProduct_variantNestedInput
  }

  export type ProductVariantsUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    inventory_quantity?: IntFieldUpdateOperationsInput | number
    option1_value?: NullableStringFieldUpdateOperationsInput | string | null
    option2_value?: NullableStringFieldUpdateOperationsInput | string | null
    option3_value?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    cart_items?: CartItemsUncheckedUpdateManyWithoutProduct_variantNestedInput
    order_items?: OrderItemsUncheckedUpdateManyWithoutProduct_variantNestedInput
  }

  export type ProductVariantsUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    inventory_quantity?: IntFieldUpdateOperationsInput | number
    option1_value?: NullableStringFieldUpdateOperationsInput | string | null
    option2_value?: NullableStringFieldUpdateOperationsInput | string | null
    option3_value?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CartItemsCreateManyProduct_variantInput = {
    id?: string
    cart_id: string
    quantity: number
  }

  export type OrderItemsCreateManyProduct_variantInput = {
    id?: string
    order_id: string
    quantity: number
    unit_price: Decimal | DecimalJsLike | number | string
    total_price: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
  }

  export type CartItemsUpdateWithoutProduct_variantInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    carts?: CartsUpdateOneRequiredWithoutCart_itemsNestedInput
  }

  export type CartItemsUncheckedUpdateWithoutProduct_variantInput = {
    id?: StringFieldUpdateOperationsInput | string
    cart_id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type CartItemsUncheckedUpdateManyWithoutProduct_variantInput = {
    id?: StringFieldUpdateOperationsInput | string
    cart_id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type OrderItemsUpdateWithoutProduct_variantInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrdersUpdateOneRequiredWithoutOrder_itemsNestedInput
  }

  export type OrderItemsUncheckedUpdateWithoutProduct_variantInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemsUncheckedUpdateManyWithoutProduct_variantInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryCreateManyParentInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    image_url?: string | null
    display_order?: number
  }

  export type ProductsCreateManyCategoryInput = {
    id?: string
    name: string
    slug: string
    description: string
    price: Decimal | DecimalJsLike | number | string
    inventory_quantity: number
    is_available: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CategoryUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    display_order?: IntFieldUpdateOperationsInput | number
    subcategories?: CategoryUpdateManyWithoutParentNestedInput
    products?: ProductsUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    display_order?: IntFieldUpdateOperationsInput | number
    subcategories?: CategoryUncheckedUpdateManyWithoutParentNestedInput
    products?: ProductsUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateManyWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    display_order?: IntFieldUpdateOperationsInput | number
  }

  export type ProductsUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    inventory_quantity?: IntFieldUpdateOperationsInput | number
    is_available?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    product_images?: ProductImagesUpdateManyWithoutProductNestedInput
    product_variant?: ProductVariantsUpdateManyWithoutProductNestedInput
  }

  export type ProductsUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    inventory_quantity?: IntFieldUpdateOperationsInput | number
    is_available?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    product_images?: ProductImagesUncheckedUpdateManyWithoutProductNestedInput
    product_variant?: ProductVariantsUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductsUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    inventory_quantity?: IntFieldUpdateOperationsInput | number
    is_available?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProfileCreateManyUserInput = {
    id?: string
    phone: string
    address_line1?: string | null
    address_line2?: string | null
    city?: string | null
    state?: string | null
    postal_code?: string | null
    country?: string | null
    avatar_url?: string | null
    updated_at?: Date | string
  }

  export type CartsCreateManyUsersInput = {
    id?: string
    session_id: string
    created_at?: Date | string
    updated_at?: Date | string
    status: $Enums.Status
  }

  export type OrdersCreateManyUserInput = {
    id?: string
    cart_id: string
    order_number: string
    status: $Enums.OrderStatus
    total_amount: Decimal | DecimalJsLike | number | string
    shipping_amount: Decimal | DecimalJsLike | number | string
    tax_amount: Decimal | DecimalJsLike | number | string
    discount_amount: Decimal | DecimalJsLike | number | string
    shipping_address_id: string
    billing_address_id: string
    payment_status: $Enums.PaymentStatus
    payment_method: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type AddressCreateManyUserInput = {
    id?: string
    first_name: string
    last_name: string
    email: string
    phone?: string | null
    address_line1: string
    address_line2: string
    city: string
    state: string
    country: string
    is_default_shipping: boolean
    is_default_billing: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type SessionCreateManyUserInput = {
    id?: string
    token: string
    expires_at: Date | string
    data: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserProfileUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address_line1?: NullableStringFieldUpdateOperationsInput | string | null
    address_line2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProfileUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address_line1?: NullableStringFieldUpdateOperationsInput | string | null
    address_line2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProfileUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address_line1?: NullableStringFieldUpdateOperationsInput | string | null
    address_line2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CartsUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    session?: SessionUpdateOneRequiredWithoutCartNestedInput
    cart_items?: CartItemsUpdateManyWithoutCartsNestedInput
    orders?: OrdersUpdateManyWithoutCartsNestedInput
  }

  export type CartsUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    session_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    cart_items?: CartItemsUncheckedUpdateManyWithoutCartsNestedInput
    orders?: OrdersUncheckedUpdateManyWithoutCartsNestedInput
  }

  export type CartsUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    session_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type OrdersUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_number?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shipping_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tax_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    payment_method?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    shipping_address?: AddressUpdateOneRequiredWithoutShipping_ordersNestedInput
    billing_address?: AddressUpdateOneRequiredWithoutBilling_ordersNestedInput
    carts?: CartsUpdateOneRequiredWithoutOrdersNestedInput
    order_items?: OrderItemsUpdateManyWithoutOrdersNestedInput
  }

  export type OrdersUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    cart_id?: StringFieldUpdateOperationsInput | string
    order_number?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shipping_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tax_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shipping_address_id?: StringFieldUpdateOperationsInput | string
    billing_address_id?: StringFieldUpdateOperationsInput | string
    payment_status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    payment_method?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    order_items?: OrderItemsUncheckedUpdateManyWithoutOrdersNestedInput
  }

  export type OrdersUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    cart_id?: StringFieldUpdateOperationsInput | string
    order_number?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shipping_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tax_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shipping_address_id?: StringFieldUpdateOperationsInput | string
    billing_address_id?: StringFieldUpdateOperationsInput | string
    payment_status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    payment_method?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AddressUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address_line1?: StringFieldUpdateOperationsInput | string
    address_line2?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    is_default_shipping?: BoolFieldUpdateOperationsInput | boolean
    is_default_billing?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    shipping_orders?: OrdersUpdateManyWithoutShipping_addressNestedInput
    billing_orders?: OrdersUpdateManyWithoutBilling_addressNestedInput
  }

  export type AddressUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address_line1?: StringFieldUpdateOperationsInput | string
    address_line2?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    is_default_shipping?: BoolFieldUpdateOperationsInput | boolean
    is_default_billing?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    shipping_orders?: OrdersUncheckedUpdateManyWithoutShipping_addressNestedInput
    billing_orders?: OrdersUncheckedUpdateManyWithoutBilling_addressNestedInput
  }

  export type AddressUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address_line1?: StringFieldUpdateOperationsInput | string
    address_line2?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    is_default_shipping?: BoolFieldUpdateOperationsInput | boolean
    is_default_billing?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    data?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    cart?: CartsUpdateManyWithoutSessionNestedInput
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    data?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    cart?: CartsUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    data?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CartsCreateManySessionInput = {
    id?: string
    user_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    status: $Enums.Status
  }

  export type CartsUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    users?: UserUpdateOneWithoutCartNestedInput
    cart_items?: CartItemsUpdateManyWithoutCartsNestedInput
    orders?: OrdersUpdateManyWithoutCartsNestedInput
  }

  export type CartsUncheckedUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    cart_items?: CartItemsUncheckedUpdateManyWithoutCartsNestedInput
    orders?: OrdersUncheckedUpdateManyWithoutCartsNestedInput
  }

  export type CartsUncheckedUpdateManyWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}