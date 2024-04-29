// searching == queries

// ##Searching
// 	1)Exact Searching == query.js
// 	2)Not-Exact Searching/ Regex Searching

[
    { name: "nitan", age: 29, isMarried: false },
    { name: "sandip", age: 25, isMarried: false },
    { name: "nitan", age: 26, isMarried: true },
    { name: "rishav", age: 20, isMarried: false },
    { name: "nitan", age: 29, isMarried: true },
    { name: "chhimi", age: 15, isMarried: true },
    { name: "narendra", age: 27, isMarried: false },
    { name: "shidhant", age: 16, isMarried: false },
    { name: "kriston", age: 22, isMarried: false },
  ];
  
//   1)Exact Searching == query.js

  // in search value matter, type does not matter
  .find({})
  .find({name:"nitan"})
  .find({name:"nitan", age:29})
  .find({age:29})
  .find({age:"29"})
  .find({age:22, isMarried:"false"})

.find({name: {$in:["sandip", "narendra", "kriston"]}}) //in = include
.find({age: {$in: ["25", "30", "35"]}})
.find({age: {$gte:20, $lt:30}})
  //number

  .find({age: 25})
  .find({age: {$gt: 25}}) //greater than
  .find({age: {$gte:25}}) //greater than or equal to
  .find({age: {$lt: 25}})
  .find({age: {$lte: 25}}) //less than or equal to
  .find({age: {$ne:25}}) //not equal to


//or, and 
.find({name: {$or: [{name: "nitan"}, {name: "kriston"}]})
.find({name: {$and: [{name: "nitan"},{age:29}]})


##Searching
	1)Exact Searching == query.js
	2)Not-Exact Searching/ Regex Searching

	Regex Searching => .find({name: /nitan/})
				.find({name: /nitan/i}) //case insensitive
				.find({name: /^nitan/})//that starts with ni
				.find({name: /ni/}) //display any results that include "ni" even if it is the middle of words
				.find({name: /ni$/}) //that ends with "ni"

// ################################ SORT ####################################
        [
          {name:"ac",age:29, isMarried:false},
          {name:"b",age:40, isMarried:false},
          {name:"ab",age:50, isMarried:false},
          {name:"ab",age:60, isMarried:false},
          {name:"c",age:40, isMarried:false},
      ]

      //number sort work properly unlike javascript
      find({}).sort("name")
      // irrespective of javascript sort, mongoose sort works on number sort.
	  .find({}).sort("name") //=> ascending sort
	  .find({}).sort("-name") //=> descending sort
	  .find({}).sort("name age")// => those who have same name, sort them with age in ascending order
    .find({}).sort("name -age") // => those who have same name, sort them with age in descending order

    // ######################################### Pagination #########################################

   let data = [
      {name:"nitan",age:29, isMarried:false},
      {name:"sandip",age:25, isMarried:false},
      {name:"nitan",age:26, isMarried:true},
      {name:"rishav",age:20, isMarried:false},
      {name:"nitan",age:29, isMarried:true},
      {name:"chhimi",age:15, isMarried:true},
      {name:"narendra",age:27, isMarried:false},
      {name:"shidhant",age:16, isMarried:false},
      {name:"kriston",age:22, isMarried:false},
    ]

    .find({}).skip("4") //it skips 4 datas from top
    .find({}).limit("3") //show max of 3 data and not more than that

    //the order is => find, sort, select, skip, limit
    .find({}).limit("3").skip("2") //first it skips hte upper two rows then prints the remaining 3

    //output = {name:"nitan",age:26, isMarried:true},
      // {name:"rishav",age:20, isMarried:false},
      // {name:"nitan",age:29, isMarried:true},

      
