console.log("***** Music Collection *****");

//Create a varibale collection that starts as an empty arry

let collection = [];

//add a function named addToCollection. This. function should:
//* take in the album's title, artist, yearPublished as input parameters
//create a new object having the above properties
//add the new object to the end of the collectoin array
//return the newly created object

function addToCollection(title, artist, yearPublished) {
  //creating new obj called album
  const album = {
    title: title,
    artist: artist,
    yearPublished: yearPublished,

  };

  collection.push(album);
  return album;
}

//Add a function named showCollection. This function should:
//Takes an array as a parameters
//log the number of items in the arry
//loop over the array and console.log each album's information formation like
//Title by Artist, published in year

function showCollection(array) {
  //logn the length of my array collection
  console.log("The length of the array is:", array.length);

  //using for to loop through any array that is passed to showCollectionn
  for (let i = 0; i < array.length; i++) {
    //login each album information as the following
    console.log(
      `${array[i].title} by ${array[i].artist}, published in ${array[i].yearPublished}`
    );
  }
  //returning the array
  return array;
}

//Add a function named findByArtist. This function should:
// take in artist as a string parameter
//create and array to hold any results, empty to starts
//loop throught the collection and add any object with matching artist to the arry
//return the array with matching results. if no result are found, return an empty array

function findByArtist(string) {
  string = string.toLowerCase();
  // declared a new array and set it to empty
  let newArray = [];

  // using for loop to loop through the collection array
  for (let i = 0; i < collection.length; i++) {
    //using if statement to string param to my collection[i] spefically the artist property
    if (string === collection[i].artist.toLowerCase()) {
      //if string found matches any artist key, we are going to push collection[i].artist to the new array we declared above
      newArray.push(collection[i].artist);

      //login the result of the serach to the console
      console.log(`Your search resulted in: ${collection[i].artist}`);
    }
  }
  // we are shipping the newArray
  return newArray;
}

console.log("*******Stretch goals*********");

//Creating a function called search
function search(obj) {
  //Declared a new array and set it to empty array
  let newArray = [];

  //Declared a new object and set it empty object
  let newObject = {};

  //using the for of loop to iterate through my collection
  for ( let getCollection of collection ) {

    //using if statement to compare abject passed argument at key artist/ year to my getcollection at key artist/yearPublished
    if ( obj.artist === getCollection.artist && obj.year === getCollection.yearPublished ) {
      //if match is found
      //set newobject at key artist equal to getcollection at key artist
      newObject.artist = getCollection.artist;
      //if match is found
      //set newobject at key year equal to getcollection at key yearPublsied
      newObject.year = getCollection.yearPublished;

      //push the newObject to the newArry
      newArray.push(newObject);
    } // end of If statement

  }
  //If the newArray has length > 0
    if  ( newArray.length > 0   ) {

      //retunr newAwaray
          return newArray;
      } //end of if statment
      else { //begining of else statement

        // return the collection
      return collection
    }

}






/*---------Calling && Testing------------------*/
//Adding 6 Artists to the collection
addToCollection("...And Then There Was X", "DMX", 1999);
addToCollection("Ilmatic", "Nas", 1994);
addToCollection("Reasonable Doubt", "Jay Z", 1996);
addToCollection("Get Rich or Die Trying", "50 Cent", 2003);
addToCollection("Chronic 2001", "Dr. Dre", 1999);
addToCollection("Victory Lap", "Nipsey Hussle", 2018);

//login the acutal collection to the console
showCollection(collection);

//Loging the collection to the console
console.log("The Array should have 6 object elements: ", collection); // Output should be objects of the 6 artist that I added to the collection

//loging  the showCollection that takes collection as an argument to the console
console.log(showCollection(collection)); //output should be 6 objects within the array

//Testing findByArist and passing information that is within my collection and information that is not in my collection array.

//1st test -- using the title of an album in my collection to see if I get an output

//calling the findByArist function and passing an argument
console.log(findByArtist("nas")); // output should be "Your search resuled in: DMX"

// 2nd test -- searching for Nas to test if I get a result back from my collections
console.log(findByArtist("dmx")); // output should be "Your search resuled in: Nas"

//3rd testing -- using information I know not to be in my collection array.

console.log(findByArtist("Biggie Smalls")); // output should be an empty array  []


//Testing the Search Function and passing an object that has information you would find in my collections

console.log(search({ artist: "Nas", year: 1994 }));

//When an empty object is passed,  the function is returning the collection array as a whole
console.log(search({ }));

//When I pass an object that has information that doesnt match my collection, the function shouuld return the whole collection array

console.log(search({ artist: "Ray Charles", year: 1957 }))
