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