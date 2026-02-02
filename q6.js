// db.employee,updateOne({},{})

db.employees.updateOne(
    {email: "animesh.thakur@gmail.com"},
    {$set:{salary:150000}}  //$set updates only the specified field
)
db.employees.updateOne(
    {email: "animesh.thakur@gmail.com"},
    {$inc:{salary:50000}}  //$It will update dsalary by 50000
)
db.employees.updateMany(
    {},
    {$inc:{salary:50000}}  //all salary updates by 
)

db.employees.updateOne(
    {},
    {$set:{ points: 10 }}
 ); //

db.employees.updateOne(
  { email: "animesh.thakur@gmail.com" },
  { $set: { points: 10 } },
  { upsert: true }
)

db.employees.deleteOne(
    {email: "animesh.thakur@gmail.com"} 
)