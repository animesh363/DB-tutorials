//!         ____DBs____             

db.employees.find({department:"HR"}).count() //we will ge no of employee in HR department

db.employees.find(
    {department:{$eq:"HR"}} //equalto 
)
db.employees.find(
    {department:{$gt:"HR"}} //greater than 
)
db.employees.find(
    {department:{$gte:"HR"}} //greater than equal to
)
db.employees.find(
    {department:{$ne:"HR"}} //not equal to
)
db.employees.find(
    {department:{$lt:"HR"}} //less than
)
db.employees.find(
    {department:{$lte:"HR"}} //less than equal to
)


db.employees.find(
    {department:"HR",salary:{$gte:30000}} 
)
db.employees.find(
    {$and:[{department:"HR"},{salary:{$gte:30000}}]}  //Both conditions must be true
)

db.employees.find(
    {$:[{department:"HR"},{salary:{$gte:30000}}]}  //Both conditions must be true
)

