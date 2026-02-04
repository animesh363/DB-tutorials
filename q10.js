db.employees.find(
    {},
    {_id:0,name:1,department:1}
)
db.employees.find(
    {},
    {_id:0,name:1,dept:"$department"} //we have temprorly changed department->dept
)


db.users.insertOne(
    {
        name:"Animesh",
        age:21,
        address:{addr1:"50 verdin Ct", city:"Colums",state:"MP"}
    }
)
db.users.insertOne(
    {
        name:"Pranav",
        age:19,
        address:{addr1:"50 verdin Ct", city:"smp",state:"Bihar"}
    }
)

db.users.find(
    {},
    {
        name:1,
        age:1,
        "address.city":1,
        "address.state":1
    }
)

//? Add Skills array for all users and populate Java, Python

db.users.updateMany(
    {},
    {$push:{skills:["Java","Python"]}}
)

// $set → replaces the entire skills field with a new value.
// $push → adds a new element to the existing array (can create nested arrays).
// $addToSet → adds elements only if they don’t already exist (no duplicates).

//delete one or many use for deleting row but for colum we use unset

db.users.updateOne(
    {name:"Animesh"},
    {$addToSet:{Skills:".NET"}}

)

db.users.find({},
    {
        _id:0,
        name:1,
        skills:1
    }
)

//rows are deleted using deleteOne/deleteMany, and columns (fields) are removed using $unset.


db.users.aggregate([
    {$project:
        
    }
])
