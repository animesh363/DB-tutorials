
mongosh 

use ('libraryDB')

db.createCollection("books")
db.createCollection("members")
db.createCollection("borrows")

show collections

//or
db.getCollectionNames();

            _______//!Insert one book_______

db.books.insertOne({
  title:     "The Pragmatic Programmer",
  author:    "Andrew Hunt",
  genre:     "Technology",
  year:      1999,
  copies:    5,
  available: 5,
  tags:      ["programming", "software", "career"],
  rating:    4.8
})
//finding a;ll the books available in the books collection
db.books.find()

//Insert many books at once
db.books.insertMany([
  {
    title: "Clean Code", author: "Robert C. Martin",
    genre: "Technology", year: 2008,
    copies: 3, available: 2,
    tags: ["programming", "best-practices"], rating: 4.7
  },
  {
    title: "Harry Potter", author: "J.K. Rowling",
    genre: "Fiction", year: 1997,
    copies: 10, available: 7,
    tags: ["fantasy", "magic"], rating: 4.9
  },
  {
    title: "Sapiens", author: "Yuval Noah Harari",
    genre: "History", year: 2011,
    copies: 4, available: 4,
    tags: ["history", "science", "human"], rating: 4.6
  },
  {
    title: "MongoDB: The Definitive Guide", author: "Kristina Chodorow",
    genre: "Technology", year: 2013,
    copies: 2, available: 0,
    tags: ["mongodb", "database", "nosql"], rating: 4.5
  },
  {
    title: "Atomic Habits", author: "James Clear",
    genre: "Self-Help", year: 2018,
    copies: 6, available: 3,
    tags: ["habits", "productivity"], rating: 4.8
  }
])

db.members.insertMany([
  { name: "Animesh Sharma", email: "animesh@lib.com",  phone: "9876543210", memberType: "student", joinDate: new Date("2024-01-15"), active: true },
  { name: "Priya Singh",    email: "priya@lib.com",    phone: "9123456789", memberType: "student", joinDate: new Date("2024-02-10"), active: true },
  { name: "Dr. Ramesh Kumar",email: "ramesh@lib.com",  phone: "9988776655", memberType: "staff",   joinDate: new Date("2023-06-01"), active: true },
  { name: "Neha Joshi",     email: "neha@lib.com",    phone: "9845612378", memberType: "student", joinDate: new Date("2024-03-20"), active: false }
])


// First get the IDs we need
const book1   = db.books.findOne({ title: "Clean Code" })._id
const member1 = db.members.findOne({ name: "Animesh Sharma" })._id

db.borrows.insertOne({
  bookId:     book1,
  memberId:   member1,
  borrowDate: new Date("2025-03-01"),
  dueDate:    new Date("2025-03-15"),
  returnDate: null,
  status:     "active",
  fine:       0
})


//!Finding

db.books.find({})                          // returns ALL books (cursor)
db.books.find({}).toArray()              // convert cursor → array
db.books.find({}).pretty()               // formatted output in mongosh
db.books.countDocuments({})               // how many total books?


//*Find one specific book

db.books.findOne({title: "Clean Code"})    // returns ONE document or null
db.books.findOne({author: "J.K. Rowling"})


//*Find with conditions

// Technology books only
db.books.find({ genre: "Technology" })
// Books available right now (available > 0)
db.books.find({ available: {$gt: 4.5} })
// Books rated 4.7 or above
db.books.find({ rating: {$gt: 4.7} })
// Active members only
db.members.find({ active: true})
// Find active borrows (not returned yet)
db.borrows.find({ status: "active" })


db.books.find({})
db.members.find({})

//!Update a single field — $set

// Book was returned: increase available count
db.books.updateOne(
  { title: "Clean Code" },
  { $set: { available: 3 } }
)

// Update member phone number
db.members.updateOne(
  { email: "animesh@lib.com" },
  { $set: { phone: "9000000001" } }
)

//Multiple operators together

// When a book is borrowed:
// - decrease available by 1    ($inc)
// - add borrower tag            ($push)
// - set lastBorrowedDate        ($set)
db.books.updateOne(
  { title: "Harry Potter" },
  {
    $inc:  { available: -1 },
    $push: { recentBorrowers: "Animesh Sharma" },
    $set:  { lastBorrowed: new Date() }
  }
)


//*Update many documents at once

// All Technology books: add "tech" tag if not already there
db.books.updateMany(
  { genre: "Technology" },
  { $addToSet: { tags: "tech" } }   // addToSet = push only if unique
)

// Deactivate all student members who haven't joined in 2024
db.members.updateMany(
  { memberType: "student", joinDate: { $lt: new Date("2024-01-01") } },
  { $set: { active: false } }
)



//*Upsert — insert if not found


// Update fine record — insert new one if this borrow has no fine yet
db.borrows.updateOne(
  { bookId: book1, memberId: member1 },
  { $set: { fine: 50, status: "overdue" } },
  { upsert: true }   // creates doc if filter matches nothing
)


//*findOneAndUpdate — get the updated doc back

// Returns the document AFTER update (useful in APIs)
const updated = db.books.findOneAndUpdate(
  { title: "Sapiens" },
  { $inc: { available: -1 } },
  { returnDocument: "after" }
)
console.log(updated.available)  // reflects new value immediately

//?till updation 