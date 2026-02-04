db.Products.insertMany([
  {
    name: "Laptop",
    category: "Electronics",
    price: 65000,
    stock: 10
  },
  {
    name: "Keyboard",
    category: "Accessories",
    price: 1500,
    stock: 50
  },
  {
    name: "Mouse",
    category: "Accessories",
    price: 800,
    stock: 60
  },
  {
    name: "Monitor",
    category: "Electronics",
    price: 12000,
    stock: 15
  },
  {
    name: "Headphones",
    category: "Accessories",
    price: 2500,
    stock: 30
  }
])


db.orders.insertOne({
    empid:ObjectId("69830812e24242d1a91e2621"),
    product:"laptop",
    orderValue:25000
})

db.orders.aggregate([
  {
    $lookup: {
      from: "employees",
      localField: "empid",
      foreignField: "_id",
      as: "users"
    }
  }
])


db.orders.aggregate([
  {
    $lookup: {
      from: "orders",
      localField: "_id",
      foreignField: "empid",
      as: "orders"
    }
  },
  {$unwind:"$orders"},
  {$project:{
    name:1,
    orders:1
  }}

])

//______________________________________________________________________________


db.orders.aggregate([
  {
    $project: {
      _id: 0,
      empid: 1,
      orderValue: 1,
    },
  },
]);

db.orders.aggregate([
  {
    $lookup: {
      from: "employees",
      localField: "empid",
      foreignField: "_id",
      as: "users",
    },
  },
]);

db.employees.aggregate([
  {
    $lookup: {
      from: "orders",
      localField: "_id",
      foreignField: "empid",
      as: "orders",
    },
  },
]);

db.employees.aggregate([
  {
    $lookup: {
      from: "orders",
      localField: "_id",
      foreignField: "empid",
      as: "orders",
    },
  },
  { $unwind: "$orders" },
  {
    $project: {
      name: 1,
      product: "$orders.product",
      orderValue: "$orders.orderValue",
    },
  },
]);

db.employees.aggregate([
  {
    $lookup: {
      from: "orders",
      let: { uid: "$_id" },
      pipeline: [
        {
          $match: {
            $expr: { $eq: ["$empid", "$$uid"] },
          },
        },
      ],
      as: "orders",
    },
  },
  {
    $project: {
      name: 1,
      product: "$orders.product",
      orderValue: "$orders.orderValue",
    },
  },
]);

db.employees.aggregate([
  {
    $lookup: {
      from: "orders",
      let: { uid: "$_id" },
      pipeline: [
        {
          $match: {
            $expr: { $eq: ["$empid", "$$uid"] },
          },
        },
      ],
      as: "orders",
    },
  },
  { $unwind: "$orders" },
  {
    $project: {
      name: 1,
      product: "$orders.product",
      orderValue: "$orders.orderValue",
    },
  },
]);

db.employees.aggregate([
  {
    $lookup: {
      from: "orders",
      let: { uid: "$_id" },
      pipeline: [
        {
          $match: {
            $expr: { $eq: ["$empid", "$$uid"] },
          },
        },
        {
          $project: {
            _id: 0,
            empid: 1,
            product: 1,
            orderValue: 1,
          },
        },
      ],
      as: "orders",
    },
  },
]);