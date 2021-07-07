console.log("***** Music Collection *****");

//Create a varibale collection that starts as an empty arry

let collection = [];

// Add a function named `addToCollection`. This function should:

//Creating a function called AddToCollection that
//takes two parameters (title, artist, yearsPublished)

function AddToCollection(title, artist, yearsPublished) {
  console.log("In AddToColection");
  //creating album object
  const album = {
    title: title,
    artist: artist,
    yearsPublished: yearsPublished,
  };

  //Using the push method to push album to the collection
  //array
  collection.push(album);

  //shipping the newly created object
  return album;
} //end AddToCollection

//Creating a function ShowCollection.
//This function should take an array as a parameter

function showCollection(array) {
  //using for of to loop through the array
  for (let getCollection of array) {
    //login the getcollection variable to the console
    console.log(
      `Album Information: ${getCollection.title} ${getCollection.artist} ${getCollection.yearsPublished}`
    );
    //console.log(collectionInfo);
  }

  //returning the array
  return array;
} // end showCollection

//Adding a function name findByArtist

function findByArtist(string) {
  //creating a new array called newArray and initialized to and empty array
  let newArray = [];

  for (let i = 0; i < collection.length; i++) {

    //using the if statement to test if string parameter is equal to my collection[i].key value
    if (
      string === collection[i].title ||
      string === collection[i].artist ||
      string === collection[i].yearsPublished
    ) {
        //if a match is found, we are pusging collection[i] to the new array we declared above
      newArray.push(collection[i]);

      //loging the search result to the console
      console.log(
        `Search resulted in: ${collection[i].title} ${collection[i].artist} ${collection[i].yearsPublished}`
      );
    }
  }//end of for loop

  //returning newArray
  return newArray;
} // end findByArtist


console.log("*******Stretch goals*********");



/*---------Calling && Testing------------------*/
//Adding 6 Artists to the collection
AddToCollection("DMX", "...And Then There Was X", 1999);
AddToCollection("Nas", "illmatic X", 1994);
AddToCollection("50 Cent", "Get Rich or Die Tryin", 2003);
AddToCollection("Nipsey Hussle", "Victory Lap", 2018);
AddToCollection("Dr. Dre", "Chronic 2001", 1999);
AddToCollection("Jay Z", "Reasonable Doubt", 1996);

//Loging the collection to the console
console.log("The Array should have 6 object elements: ", collection); // Output should be objects of the 6 artist that I added to the collection

//loging  the showCollection that takes collection as an argument to the console
console.log(showCollection(collection));

//Testing findByArist and passing information that is within my collection and information that is not in my collection array.

//1st test -- using the title of an album in my collection to see if I get an output

//calling the findByArist function and passing an argument 
findByArtist("Reasonable Doubt");

// 2nd test -- using the years to test if I get a result back from my collections
findByArtist(1999) // output should be 2 objects in my collection array DMX & Dr. Dr albums

//3rd testing -- using information I know not to be in my collection array. 

console.log(findByArtist("Biggie Smalls")) // output should be an empty array 


