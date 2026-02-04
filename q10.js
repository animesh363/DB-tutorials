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
        address:{addr1:"50 verdin Ct", city:"Colums",state:"OH"}
    }
)