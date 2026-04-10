db.students.insertMany([
    { name: "Rahul Sharma", age: 19, class: "B.Tech", branch: "CSE" },
  { name: "Ananya Verma", age: 20, class: "B.Tech", branch: "IT" },
  { name: "Aman Gupta", age: 21, class: "B.Tech", branch: "ECE" },
  { name: "Neha Singh", age: 19, class: "B.Tech", branch: "CSE" },
  { name: "Rohit Kumar", age: 22, class: "B.Tech", branch: "ME" },
  { name: "Priya Mehta", age: 20, class: "B.Tech", branch: "AI & ML" },
  { name: "Karan Patel", age: 21, class: "B.Tech", branch: "CSE" },
  { name: "Simran Kaur", age: 19, class: "B.Tech", branch: "EEE" },
  { name: "Arjun Malhotra", age: 22, class: "B.Tech", branch: "CE" },
  { name: "Pooja Yadav", age: 20, class: "B.Tech", branch: "DS" }
])

db.students.aggregate([
    {$match:{branch:"IT",age:20}},  //i am findin guy from IT whose age is 20
    {$project:{_id:0, name:1}}      //showing only name 
])

db.students.aggregate([
    {$match:{age:{$gt:20}}},
    {$sort:{age:-1}}
])

db.students.aggregate([
    {$match: {$and: [
        {age:{$gt:15}},
        {branch:"CSE"}
    ]}},
    {$count:"name"}
])
db.students.aggregate([
    {$match: {$and: [
        {age:{$gt:15}},
        {branch:"CSE"}
    ]}},
    {$sort:{age:1}},      //sorting on the basis of name only
    {$project:{_id:0,name:1,age:1}}
])
db.students.aggregate([
    {$match: {$and: [
        {age:{$gt:15}},
        {branch:"CSE"}
    ]}},
    {$sort:{age:1,name:1}},  
    {$project:{_id:0,name:1,age:1}}
])


db.students.aggregate([
    {$match:{age:{$gte:20}}},
    {$sort:{age:1}},
    {$project:{name:1,_id:0,
        isValidAge:{$gt:["$age",20]}   //We have created a custum field isValidAge
    }}
])

db.students.aggregate([
    {$sortByCount:"$class"}
])

db.students.aggregate([
    {$match:{age:{$gte:20}}},
    {$sort:{age:1,name:1}},
    {$skip:3},
    {$limit:4},
    {$project:{_id:0,name:1,age:1}},
])

db.students.aggregate([
    {$sample:{size:2}},
    {$project:{_id:0,name:1,age:1}},
])

db.students.aggregate([
    {$group:{
        _id:"$class",
        class:{$sum:1}
    }}
])
db.students.aggregate([
    {$group:{
        _id:"$class",
        class:{$count:{}}
    }},
    {$sort:{count:1}}
])



