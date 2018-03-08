db.testdb.insert([{"name":"Sajib Biswas"},
	{"name":"Redwan Moin"},{"name":"Atikur Rahman"},{"name":"Nahid"}
	])

db.testdb.update({"name":"Sajib Biswas"},{"name":"Sajib Biswas","type":"begginer"})
db.testdb.update({"name":"Redwan Moin"},{"name":"Redwan Moin","type":"begginer"})
db.testdb.update({"name":"Atikur Rahman"},{"name":"Atikur Rahman","type":"begginer"})
db.testdb.update({"name":"Nahid"},{"name":"Nahid","type":"begginer"})

db.testdb.update({"type":"begginer"},{$set:{"type":"Intermediate"}})
db.testdb.update({"type":"begginer"},{$set:{"type":"Intermediate"}},{multi:true})

db.testdb.update({"type":"Intermediate"},{$set:{"age":25}},{multi:true})

// We Can InCrement Value

db.testdb.update({"type":"Intermediate"},{$inc:{"age":1}},{multi:true})

// Decrement Value By Setting it Value Negative
db.testdb.update({"name":"Rashin Mahmood"},{$inc:{"age":-10}})

// Add Anther Field of Balance
db.testdb.update({"type":"Intermediate"},{$set:{"balance":2000}},{multi:true})

db.testdb.update({"name":"Rabeya"},{$set:{"balance":8000}})


// Multiple Value
db.testdb.update({"type":"Intermediate"},{$mul:{"balance":1.5}},{multi:true})

db.testdb.update({"name":"Sajib Biswas"},{$inc:{"balance":-1500}})

db.testdb.update({"name":"Rabeya"},{$push:{"status":{"Jhori":80,"Boka":50,"Hingsa":60}}})


// Push Run Per Year Array but Only Consider Last 5
db.testdb.update({"name":"Sajib Biswas"},{$push:{"Best Home Run Year":{$each:[78,96,85,96,78,102],$slice:-5}}})

// Add Best Home Run Year if it Does not Exist
db.testdb.update({"name":"Sajib Biswas"},{$addToSet:{"Best Home Run Year":150}})

// Remove the Last Item in An Array
db.testdb.update({"name":"Sajib Biswas"},{$pop:{"Best Home Run Year":1}}) // Here 1 for last Item
db.testdb.update({"name":"Sajib Biswas"},{$pop:{"Best Home Run Year":-1}}) // Here -1 for First Item


// Remove Specific Item From an Array pull Command
db.testdb.update({"name":"Sajib Biswas"},{$pull:{"Best Home Run Year":78}})

// Droping a Collection
db.testdb.drop()

db.testdb.insert([{"name" : "Dale Cooper", "street" : "123 Main St", "city" : "Yakima", "state" : "WA", "dob" : new Date(1959, 2, 22), "sex" : "M", "gpa" : 3.5, "status" : "student", "tests" : [10, 9, 8], "contact info" : {"email" : "dc@aol.com", "phone" : "792-223-8901"}}, 
{"name" : "Harry Truman", "street" : "202 South St", "city" : "Vancouver", "state" : "WA", "dob" : new Date(1946, 1, 24), "sex" : "M", "gpa" : 3.4, "status" : "student", "tests" : [8, 9, 8], "contact info" : {"email" : "ht@aol.com", "phone" : "792-223-9810"}},
{"name" : "Shelly Johnson", "street" : "9 Pond Rd", "city" : "Sparks", "state" : "NV", "dob" : new Date(1970, 12, 12), "sex" : "F", "gpa" : 2.9, "status" : "dropout", "tests" : [10, 8, 0], "contact info" : {"email" : "sj@aol.com", "phone" : "792-223-6734"}},
{"name" : "Bobby Briggs", "street" : "14 12th St", "city" : "San Diego", "state" : "CA", "dob" : new Date(1967, 5, 24), "sex" : "M", "gpa" : 2.0, "status" : "student", "tests" : [5, 4, 6], "contact info" : {"email" : "bb@aol.com", "phone" : "792-223-6178"}},
{"name" : "Donna Hayward", "street" : "120 16th St", "city" : "Davenport", "state" : "IA", "dob" : new Date(1970, 3, 24), "sex" : "F", "gpa" : 3.7, "status" : "student", "tests" : [10, 8, 8], "contact info" : {"email" : "dh@aol.com", "phone" : "792-223-2001"}},
{"name" : "Audrey Horne", "street" : "342 19th St", "city" : "Detroit", "state" : "MI", "dob" : new Date(1965, 2, 1), "sex" : "F", "gpa" : 3.0, "status" : "student", "tests" : [9, 9, 8], "contact info" : {"email" : "ah@aol.com", "phone" : "792-223-2002"}},
{"name" : "James Hurley", "street" : "2578 Cliff St", "city" : "Queens", "state" : "NY", "dob" : new Date(1967, 1, 2), "sex" : "M", "gpa" : 2.9, "status" : "dropout", "tests" : [8, 9, 0], "contact info" : {"email" : "jh@aol.com", "phone" : "792-223-1890"}},
{"name" : "Lucy Moran", "street" : "178 Dover St", "city" : "Hollywood", "state" : "CA", "dob" : new Date(1954, 11, 27), "sex" : "F", "gpa" : 3.0, "status" : "student", "tests" : [9, 9, 8], "contact info" : {"email" : "lm@aol.com", "phone" : "792-223-9678"}},
{"name" : "Tommy Hill", "street" : "672 High Plains", "city" : "Tucson", "state" : "AZ", "dob" : new Date(1951, 12, 21), "sex" : "M", "gpa" : 3.7, "status" : "student", "tests" : [10, 9, 9], "contact info" : {"email" : "th@aol.com", "phone" : "792-223-1115"}},
{"name" : "Andy Brennan", "street" : "281 4th St", "city" : "Jacksonville", "state" : "NC", "dob" : new Date(1960, 12, 27), "sex" : "M", "gpa" : 2.5, "status" : "student", "tests" : [7, 9, 8], "contact info" : {"email" : "ab@aol.com", "phone" : "792-223-8902"}},
])

// I am Searching For a Student of state="WA" and Sex = "M"

db.testdb.find({"state":"WA","sex":"M"})

// If I wanted to read Only Specific Information[name, dateOfBirth]
db.testdb.find({"state":"WA","sex":"M"},{'name':1,'dob':1}).pretty()

// If We Want to Show not Shown the ID
db.testdb.find({"state":"WA","sex":"M"},{'name':1,'dob':1,"_id":0}).pretty()

// Find All Students those GPA is >3.0 and <=3.5
db.testdb.find({"gpa":{$gte:3.0,$lte:3.5}}).pretty()  // ($gt >> Greater Than) ($gte >> Greater than and Equal To)
//  ($lt >> Less Than) ($lte >> Less than and Equal To)



// Find All Students those GPA is >3.0 and <=3.5 Only Name and GPA

db.testdb.find({"gpa":{$gte:3.0,$lte:3.5}},{"name":1,"gpa":1,"_id":0}).pretty()


// If We find Year Search
// First Create a Date in JavaScript

year1969 = new Date('01/01/1969')

// Find People Whose Date of Birth is Greater than 1969

db.testdb.find({"dob":{$gt:year1969}},{"name":1,"dob":1,"_id":0}).pretty()


// Search for Not Equal To


// We are Looking for Student not Male
db.testdb.find({"sex":{$ne:"M"},"status":"student"},{"name":1,"sex":1,"status":1,"_id":0}) // $ne >> Not Equal To

// Find All The Students gpa in [3.4,3.5,3.6,3.7]

db.testdb.find({"gpa":{$in:[3.4,3.5,3.6,3.7]},"status":"student"},{"name":1,"gpa":1,"status":1,"_id":0}).pretty() // in Query


// Find All Student GPA except for [3.4,3.5,3.6,3.7]
db.testdb.find({"gpa":{$nin:[3.4,3.5,3.6,3.7]},"status":"student"},{"name":1,"gpa":1,"status":1,"_id":0}).pretty() // Not in Query

// OR search 

// Find All Students status="dropout" OR GPA Less Than 3.0

db.testdb.find({$or:[{"status":"dropout"},{"gpa":{$lt:3.0}}]},{"name":1,"_id":0,"gpa":1,"status":1})

// Find All Student Whose GPA NOT GREATER THAN 3.0
db.testdb.find({"gpa":{$not:{$gt:3.0}}},{"name":1,"_id":0,"gpa":1,"status":1}).pretty()

// Apply Limit

// Find 3 Students Whose GPA IS NOT GREATER THAN 3.0
db.testdb.find({"gpa":{$not:{$gt:3.0}}},{"name":1,"_id":0,"gpa":1,"status":1}).limit(3).pretty()

// Skiping Result

// Find All Students Whose GPA IS NOT GREATER THAN Skip First 3 Students
db.testdb.find({"gpa":{$not:{$gt:3.0}}},{"name":1,"_id":0,"gpa":1,"status":1}).skip(3).pretty()


// Sorting 

// Find All Student Sort BY Name
db.testdb.find({},{"name":1,"_id":0,"gpa":1,"status":1}).sort({"name":1}).pretty()
// Value 1 for Ascending Sort
// Value -1 for Descending Sort


//Find Last 4 Student

// Trick Find All Sort it in a Descending Order then Limit 4
db.testdb.find({},{"name":1,"_id":1,"gpa":1,"status":1}).sort({"_id":-1}).limit(4)

// The Above Query Alway Give You a Result of Descending Order

// Try to Use Another Trick

// First Count the Entry 
db.testdb.count() // It will Give you a Number of Records

// So the Another Trick For Find Last 4 Students
db.testdb.find({},{"name":1,"_id":1,"gpa":1,"status":1}).skip(db.testdb.count() -4)




// Regular Expression in Mongo DB

 // '/' Start of Regular Expression
 // '^' Beginning of Line
 // '.*' Any Number of Character
 // '$' End Line

// Find All Students Whose Name is Start With D
db.testdb.find({"name":/^D.*$/},{"name":1,"_id":0,"gpa":1,"status":1}).pretty()

// Find All Students Whose Any Test is Equal to 0
db.testdb.find({"tests":0},{"name":1,"_id":0,"tests":1}).pretty()


// Find All Students Whose Test Results Contains 0 and 10
db.testdb.find({"tests":{$all:[0,10]}},{"name":1,"_id":0,"tests":1}).pretty()

// Find All Students Who get 10 in there First Test
// Use Index in that Kind of Situation

db.testdb.find({"tests.0":10},{"name":1,"_id":0,"tests":1}).pretty()

//Count All Students Who get 10 in there First Test
db.testdb.find({"tests.0":10},{"name":1,"_id":0,"tests":1}).count()

// Add New Test Score 9 to 'Dale Cooper' >>>>> Push
db.testdb.update({"name":"Dale Cooper"},{$push:{"tests":9}})

// Now Find the Dale Cooper Test Array
db.testdb.find({"name":"Dale Cooper"},{"name":1,"_id":0,"tests":1}).pretty()

// Find All Students Who Takes 4 Tests
// That means the tests Array Size =4

db.testdb.find({"tests":{$size:4}},{"name":1,"_id":0,"tests":1})

// Find All Students Who Not Takes 4 Tests
// That means the tests Array Size !=4

db.testdb.find({"tests.length":{$ne:4}},{"name":1,"_id":0,"tests":1}).pretty()



// INDEXING AND AGGREGATION

// Now drop all data from the Collection
db.testdb.drop()

// Now Create 500000 Account Has Different Name and Random Age
for(var i=0;i<500000;i++){
	db.testdb.insert({"account":"Account "+i,"age":Math.floor(Math.random()*90)})
}

// Now Count the Entry
db.testdb.count()

// Now Find All the Account of Age 50 with Execution Status
db.testdb.find({"age":50}).explain("executionStats")

// Execution Status Shows it Takes 271 miliSeconds
// and Total Examine Document is 500000.
// This is not a Good Approach 

//Lets create a compound index based on first age and then account. 
//We start with age because we plan on querying for age. 
//Indexing should be based on improving the performance of a query

db.testdb.ensureIndex({"age":1,"account":1}) // This will Take Couple of Seconds to Complete the Indexing

// Now  we Execute the Exact Same Query As Before
db.testdb.find({"age":50}).explain("executionStats")

// Now The Execution time is reduced to 0 ms
// and Key Examine is 5580 nos
// Total Document Examine 5580

// Actual Indexing is "indexName" : "age_1_account_1"

// Another Important Command is get Index
db.testdb.getIndexes() // You Will See the 

// Now Drop the Index 
db.testdb.dropIndex("age_1_account_1")

// Search Account 'Account 100' and See the Execution Status
db.testdb.find({"account":"Account 100"}).explain("executionStats")

// Again its Take 261ms and Look Through(Examine) 500000 documents


// Since All of Our Account is Unique

// So ensure Our Account is Unique and then Search
db.testdb.ensureIndex({"account":1},{"unique":true})

// Now Rerun Query as Before
db.testdb.find({"account":"Account 100"}).explain("executionStats") // Its Execution Time 1ms and Examine only 1 Doc





