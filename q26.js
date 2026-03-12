/*====================================================
MONGODB USER MANAGEMENT – COMPLETE STEP-BY-STEP GUIDE
====================================================

PURPOSE:
This guide explains how to correctly set up MongoDB user management,
including admin (root) user creation, authentication, normal users,
permissions, and when server restart is required.

----------------------------------------------------
IMPORTANT CONCEPTS
----------------------------------------------------

1. MongoDB uses Role-Based Access Control (RBAC)
2. Users are stored as: username@database
3. Admin (root) users MUST be created in the "admin" database
4. Restart is required ONLY when enabling or disabling authentication
5. Creating, deleting, or modifying users NEVER requires restart

----------------------------------------------------
PHASE 1: START MONGODB WITHOUT AUTHENTICATION
----------------------------------------------------

(Only required for first-time setup)

Start MongoDB normally (no --auth):

Terminal / CMD:
mongod

OR
Start MongoDB Server from Windows Services

At this stage:
- No authentication
- Anyone can access MongoDB
- Used ONLY to create first admin user

----------------------------------------------------
PHASE 2: CREATE ADMIN (ROOT) USER
(NO RESTART REQUIRED)
----------------------------------------------------

Open Mongo shell:
mongosh

Switch to admin database:
use admin

Create admin user:
db.createUser({
  user: "admin",
  pwd: "admin123",
  roles: [
    { role: "root", db: "admin" }
  ]
})

Result:
- Admin user created successfully
- Full access to MongoDB

IMPORTANT:
Do NOT restart yet.

----------------------------------------------------
PHASE 3: ENABLE AUTHENTICATION
(RESTART REQUIRED HERE)
----------------------------------------------------

Stop MongoDB server.

Restart MongoDB WITH authentication:

Option 1 (Manual):
mongod --auth

Option 2 (Windows):
Restart MongoDB Server from Services

After this step:
- MongoDB is locked
- All operations require login

----------------------------------------------------
PHASE 4: LOGIN AS ADMIN
(NO RESTART REQUIRED)
----------------------------------------------------

From terminal (NOT inside mongosh):

mongosh --username admin --authenticationDatabase admin

Enter password:
admin123

Verify login:
use admin
show users

Expected output:
admin@admin

----------------------------------------------------
PHASE 5: CREATE NORMAL USERS
(NO RESTART REQUIRED)
----------------------------------------------------

Remain logged in as admin.

Switch to admin database:
use admin

Create read-only user (user1):
db.createUser({
  user: "user1",
  pwd: "user1",
  roles: [
    { role: "read", db: "lpuTest" }
  ]
})

Create another read-only user (user2):
db.createUser({
  user: "user2",
  pwd: "user2",
  roles: [
    { role: "read", db: "lpuTest" }
  ]
})

Result:
- user1 and user2 created
- They can only READ data from lpuTest database

----------------------------------------------------
PHASE 6: LOGIN AS NORMAL USER
(NO RESTART REQUIRED)
----------------------------------------------------

Login from terminal:

mongosh --username user1 --authenticationDatabase admin

Switch to allowed database:
use lpuTest

Test read:
db.students.find()
(Allowed)

Test write:
db.students.insertOne({ name: "Test", age: 22 })
(Not allowed – permission denied)

----------------------------------------------------
COMMON ERRORS AND MEANINGS
----------------------------------------------------

Error:
MongoServerError: Unauthorized
Meaning:
- Authentication is enabled
- You are not logged in or lack permission

Error:
User "admin@admin" already exists
Meaning:
- Admin user is already created correctly
- Do NOT recreate, just login

Error:
Missing required argument at position 0 (insertOne)
Meaning:
- insertOne() needs a document
Correct usage:
db.collection.insertOne({ key: value })

----------------------------------------------------
WHEN TO RESTART MONGODB (VERY IMPORTANT)
----------------------------------------------------

Restart REQUIRED:
- Enabling authentication (--auth)
- Disabling authentication

Restart NOT required:
- Creating users
- Deleting users
- Granting roles
- Logging in
- Querying data

----------------------------------------------------
ROLE SUMMARY
----------------------------------------------------

read       → Can read data only
readWrite → Can read and write data
dbAdmin   → Manage indexes and stats
root      → Full access to entire MongoDB

----------------------------------------------------
FINAL MEMORY RULE
----------------------------------------------------

"Restart MongoDB only when you change how the server starts,
not when you manage users."

====================================================
END OF DOCUMENT
====================================================

*/
