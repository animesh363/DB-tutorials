db.users.insertOne({
    _id: "u4",
    name: "Saurav",
    email: "saurav@gmail.com",
    password: "4321",
    role: "student",
})


db.users.find({
    email:"shubham@gmail.com",
    password:"1234",
})

db.modules.find({courseId:"c1"})


db.lession.find({courseId:"m1"})

db.enrollments.insertOne({
    courseId:'c1',
    studentId: 'u1'
})


//enroll u1 to c1

db.enrollments.insertOne({
    courseId:'c1',
    studentId:'u1',
})


//mark l1 complete when u1 hits complete button
db.lessionprogress.insertOne({
    studentId:'u1',
    lession:"l1",
    isCompleted:true
})

//check wheather l1 is completed or not

db.lessionProgress.find({
    lessionId:'l1',studentId:'u1'
})


//check password
db.users.updateOne(
    {_id:'u1'},
    {$set:{password:'abc'}}
)

//show profile details
db.users.find({_id:'u1'})


//Admininterface
//Users CRUD oprations
//Courses CRUD oprations
//Modules CRUD oprations
//lessions CRUD oprations
//Enrollment management
//progress tracking management




