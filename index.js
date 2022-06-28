/*
You have been given a list of products which is having property productName, quantity and description.


PROBLEM STATEMENTS:

1. you need to write a function say, getUniqueProductCount which should return count of each Product(as an object) present in the given list of Products considering Product Name as Key.

Sample Output for the given listOfProducts will be :

{
  "TV": 2,
  "AC": 2,
  "FAN": 1
}



2. you need to write a function say, getUniquePrducts which should return an array of objects by grouping the products based on the productName and summing up the quantity for the same products present in the given list of Products considering Product Name as Key.

Sample Output for the given listOfProducts will be :

[{
    productName: "TV",
    quantity: 20,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 10,
    description: "air conditioner"
  },
  {
    productName: "FAN",
    quantity: 10,
     description: "Ceiling Fan"
  }
]

*/




const listOfProducts = [{
    productName: "TV",
    quantity: 10,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
  },
  {
    productName: "TV",
    quantity: 10,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
  },
  {
    productName: "FAN",
    quantity: 10,
    description: "Ceiling Fan"
  }
];



//<<<<<<<<<<<<<<<<<<<<<<solution1>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//solution of problem 1;

// function getUniqueProductCount(item){
//     let map = new Map();
//     for( var key of item){
//         if(map.has(key.productName) === false){
//             map.set(key.productName,1)
//         }
//          else{
//              var put = (map.get(key.productName)+1)
//              map.set(key.productName,put)
//          }
//     }
//     return map;
// }

// console.log(getUniqueProductCount(listOfProducts));



function getUniqueProductCount(item){
    var output = {};
    for (var i=0; i<item.length; i++) {
        if(output[item[i].productName] === undefined) {
            output[item[i].productName] = 1;
        }
        else {
            output[item[i].productName]++;
        }
    }
    return output;
}

console.log(getUniqueProductCount(listOfProducts));




//<<<<<<<<<<<<<<<<<<<<<<<Solution2>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


//solution of problem 2;

function getUniquePrducts(item){
    for(var i = 0; i < item.length; i++){
        for(var j=i+1; j<item.length; j++){
            if (item[i].productName === item[j].productName) {
                item[i].quantity += item[j].quantity
                item[j] = ""
            }
        }

    }
    return item.filter((elem) => elem !== "");
}

console.log(getUniquePrducts(listOfProducts))
