de.users.insertOne(
    {name:"Animesh",age:21}
);


db.users.find()

db.employees

db.employees.insertMany([
  {
    name: "Animesh Thakur",
    email: "animesh.thakur@gmail.com",
    department: "Engineering",
    salary: 72000,
    location: ["Delhi", "Bangalore"],
    date: new Date()
  },
  {
    name: "Riya Sharma",
    email: "riya.sharma@company.com",
    department: "HR",
    salary: 48000,
    location: ["Mumbai", "Pune"],
    date: new Date()
  },
  {
    name: "Arjun Verma",
    email: "arjun.verma@company.com",
    department: "Finance",
    salary: 65000,
    location: ["Hyderabad", "Chennai"],
    date: new Date()
  },
  {
    name: "Neha Gupta",
    email: "neha.gupta@company.com",
    department: "Marketing",
    salary: 54000,
    location: ["Noida", "Gurgaon"],
    date: new Date()
  },
  {
    name: "Rohit Mehta",
    email: "rohit.mehta@company.com",
    department: "IT Support",
    salary: 50000,
    location: ["Jaipur", "Ahmedabad"],
    date: new Date()
  }
]);
