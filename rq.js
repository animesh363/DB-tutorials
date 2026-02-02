db.products.insertMany([
    {name: "mouse", price:300},
    {name: "monitor", price:3300},
    {name: "charger", price:1300},
])
db.products.updateOne(
    {name: laptop, monitor, charger},

)
db.Products.find.sort()(
    {salary: {$gt}}
)

db.Prodicts.updateMany(
    {email:{$in: ["cathy@gmail.com","mike@gmail.com"]}}, //if present salary increamented by 1000
    {$inc: {salary:1000}}
)

db.Prodicts.find(
    {name:{$exists:false} }  //$exists is used in MongoDB to check whether a field is present or absent in a document
    
)