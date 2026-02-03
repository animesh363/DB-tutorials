db.employees.find(
  { email: "neha.gupta@company.com" }
).explain("executionStats")

db.employees.createIndex({email:1})

db.employees.getIndexes()

db.employees.dropIndex
db.employees.find({},{_id:0, name:1}).sort({name:1})

db.employees.find({},{_id:0,name:1}).collation({locale:'en',strength:2}).sort({name:1})


db.employees.agregate(
    [
        {},
        {},
        {}
    ]
)
