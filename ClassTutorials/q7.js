//create new fireld skills and add python as array

db.employees.updateOne(
    {},
    {$push: {skill:"Python"}}
)
db.employees.updateOne(
    {email:"john@gmail.com"},
    {$push: {skill:".NET"}}
)

db.employees.updateOne(
    {email:"john@gmail.com"},
    {$pop:{department:1}}
)

//->We use $push and $pop to modify ARRAY fields inside a document without replacing the whole document.