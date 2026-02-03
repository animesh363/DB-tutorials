//db.employees.find({},{})

db.employees.find({department:"HR"})
db.employees.find(
    {department:"HR"},
    {_id:0,name:1,salary:1}
)
db.employees.find(
    {department:"HR",salary:48000}, // We can write multiple 
    {_id:0,name:1,salary:1}
)

db.employees.find().limit(3)//it will show top 3
db.employees.find().skip(1) //It will skip top 1

db.employees.find().limit(3).skip(1) //it will show 3 it is sure but it will skip first then it will show 2,34 th

db.employees.find().sort({name:1}) //sorting in the asending order
db.employees.find().sort({name:-1}) //sorting in the desending order

db.employees.find().skip(1).sort({name:1}) //skips 1 document, then sorts the remaining documents by name in ascending (A → Z) order.

db.employees.find().count() //total number of documents in the employees collection.