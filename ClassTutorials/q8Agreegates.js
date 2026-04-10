db.employees.find(
  { email: "neha.gupta@company.com" }
).explain("executionStats")

db.employees.createIndex({email:1})

db.employees.getIndexes()

db.employees.dropIndex({email})
db.employees.find({},{_id:0, name:1}).sort({name:1})

db.employees.find({},{_id:0,name:1}).collation({locale:'en',strength:2}).sort({name:1})


db.employees.aggregate(
    [
        {},
        {},
        {}
    ]
)
db.employees.aggregate(
    [
        {$match:{department:"HR"}}
    ]
)
db.employees.aggregate(
    [
        {$project:{_id:0, department:0, salary:0}} // if you dont want you write those
    ]
)
db.employees.aggregate(
    [
        {$sort:{name:1}} 
    ]
)
db.employees.aggregate(
    [
        {$limit:3}
    ]
)
