
// create dshards
// in which 
// conf,confr, s1, s1r, s2, s2r

// These 6 folders represent servers locatted in 6 diffrent locations
//mongod --configsvr -replSet cf --dbpath "C:\Users\anime\Desktop\dbshards\conf" --port 27018
//mongod --configsvr -replSet cf --dbpath "C:\Users\anime\Desktop\dbshards\confr" --port 27019

//mongosh --port 27018

rs.initiate({
    _id: "cf",
    members:[
        {_id: 0, host: "localhost:27018"},
        {_id: 1, host: "localhost:27019"}
    ]
})

rs.config()
rs.status()





//mongod --shardsvr -replSet s1 --dbpath "C:\Users\anime\Desktop\dbshards\s1" --port 27020
//mongod --shardsvr -replSet s1 --dbpath "C:\Users\anime\Desktop\dbshards\s1r" --port 27021

//mongosh --port 27020
rs.initiate({
    _id: "s1",
    members:[
        {_id: 0, host: "localhost:27020"},
        {_id: 1, host: "localhost:27021"}
    ]
})

rs.config()
rs.status()






//mongod --shardsvr -replSet s2 --dbpath "C:\Users\anime\Desktop\dbshards\s2" --port 27022
//mongod --shardsvr -replSet s2 --dbpath "C:\Users\anime\Desktop\dbshards\s2r" --port 27023

//mongosh --port 27022  
rs.initiate({
    _id: "s2",
    members:[
        {_id: 0, host: "localhost:27022"},
        {_id: 1, host: "localhost:27023"}
    ]
})

rs.config()
rs.status()

//new tab
//mongos --configdb cf/localhost:27018,localhost:27019 --port 27050

//new tab
//mongosh --port 27050

//sh.addShard("s1/localhost:27020,localhost:27021")
//sh.addShard("s2/localhost:27022,localhost:27023")
//sh.status()


//use icici
//sh.enableSharding("icici")
//sh.shardCollection("icici.customers", {_id:1})

//sh.getShardedDataDistribution()

//show collection

db.customers.insertOne({_d:1,name:"Customer1",age:25})