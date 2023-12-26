/*=============== =================================Assignment 1: Array Operations =====================================*/


/*
let Fruits =[]

 Fruits =['apple','banana','orange']

                     console.log(Fruits)            output => //(3)['apple', 'banana', 'orange']

   


  Fruits.pop()                 // Remove the first fruit from the array.

                   

 console.log(Fruits)            output => (2)['apple', 'banana']


  Fruits.push('grapes')          // adding fruit into the array

  console.log(Fruits)           output => ['apple', 'banana', 'orange', 'grapes']


  Fruits[2] = 'pear'             //Update the second fruit in the array to "pear".

 console.log(Fruits)           output => ['apple', 'banana', 'pear']

 console.log(Fruits)


 ['apple', 'banana', 'pear']   => Final Output*/

 /*============================================     ENDED First assignment closed : ==================================== */



/*===========================================       Assignment 2: Object Operations ==========================================*/

/*
let person ={ };

console.log(person)              //  output  {}

let person={
	name:'john',
	age:30,
	city:'New York'
}


delete person.age                  // removing age property from person object


console.log(person)                // {name: 'john', city: 'New York'}


person.job = 'Engineer'           // Adding new property 

console.log(person)               //  'john', age: 30, city: 'New York', job: 'Engineer'}

person.city ='Sans Francisco'

console.log(person)                // Updating property into object person


console.log(person)   */             // final output after performing operation => {name: 'john', city: 'Sans Francisco', job: 'Engineer'}




/*=======================             Assignment 3: Array of Objects Operations              ===========================*/


  let cars =[
  {
    make: "Toyota",
    model: "Camry",
    year: 2018

  },

  {
     make: "Suzuki",
     model: "maruti",
     year: 2017

  
  },
  {
  	make: "mahindra",
    model: "scorpio",
    year: 2015

  }
]


/*console.log(cars)                // output => 
0:
{make: 'Toyota', model: 'Camry', year: 2018}
1
: 
{make: 'Suzuki', model: 'maruti', year: 2017}
2
: 
{make: 'mahindra', model: 'scorpio', year: 2015}
length
: 
3*/


//delete cars[0];

//console.log(cars)             // output => 


/*

{make: 'Suzuki', model: 'maruti', year: 2017}

{make: 'mahindra', model: 'scorpio', year: 2015}
length

*/









//  Add a new car object to the "cars" array with the following properties:


cars.push(
{ 
	make: "Honda",
    model: "Civic",
    year: 2020
}
)



//console.log(cars)

 /*   =============> output
0
: 
{make: 'Toyota', model: 'Camry', year: 2018}
1
: 
{make: 'Suzuki', model: 'maruti', year: 2017}
2
: 
{make: 'mahindra', model: 'scorpio', year: 2015}
3
: 
{make: 'Honda', model: 'Civic', year: 2020}
length
: 
4*/



//  Update the "model" property of the second car object in the array to "Accord".


cars[2].model ='Accord'

// console.log(cars)

// 0
// : 
// {make: 'Toyota', model: 'Camry', year: 2018}
// 1
// : 
// {make: 'Suzuki', model: 'maruti', year: 2017}
// 2
// : 
// {make: 'mahindra', model: 'Accord', year: 2015}
// 3
// : 
// {make: 'Honda', model: 'Civic', year: 2020}












/*================================  Ended Assignment 3: Array of Objects Operations          ===========================*/