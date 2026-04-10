db.employees.aggregate(
    [
        {$match:{department:"HR"}},
        {$project:{name:1,email:1,_id:0}},
        {$sort:{name:1}},
        {$limit:3},
        {$skip:1}

    ]
)
db.employees.aggregate(
    [
        {
            $group:{
                _id:"$department",
                total:{$sum:"$salary"}
            }
        }

    ]
)
db.employees.aggregate(
    [
        {
            $group:{
                _id:"$department",
                total:{$sum:"$salary"} //top departments salary
            }

        },
        {$sort:{total:-1}},
        {$limit:2}

    ]
)
db.employees.aggregate(
    [
        {
            $group:{
                _id:"$department",
                Total:{$sum:"$salary"},  //It will show Highest Lowest and Average in Each department
                Highest:{$max:"$salary"},
                Lowest:{$min:"$salary"},
                Average:{$avg:"$salary"}
            }

        }
    ]
)
db.employees.aggregate(
    [
        {$project:{_id:0,name:1,salary:1}}
    ]
)
db.employees.aggregate(
    [
        {$project:{_id:0,name:1,salary:1,annualSal:{$multiply:[12,"$salary"]} }}
    ]
)

