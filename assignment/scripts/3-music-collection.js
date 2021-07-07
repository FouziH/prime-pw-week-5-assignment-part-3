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

  for (let indexAlbum = 0; indexAlbum < collection.length; indexAlbum++) {
    if (string === collection[indexAlbum]) {
      newArray.push(collection[indexAlbum]);
    }
  } //end of for loop
  return newArray;
} // end findByArtist

/*---------Calling && Testing------------------*/
//Adding 6 Artists to the collection
AddToCollection("DMX", "...And Then There Was X", 1999);
AddToCollection("Nas", "illmatic X", 1994);
AddToCollection("50 Cent", "Get Rich or Die Tryin", 2003);
AddToCollection("Nipsey Hussle", "Victory Lap", 2018);
AddToCollection("Dr. Dre", "Chronic 2001", 1999);
AddToCollection("Jay Z", "Reasonable Doubt", 1996);

//Loging the collection to the console
console.log("The Array should have 6 object elements", collection); // Output should be objects of the 6 artist that I added to the collection

//loging  the showCollection that takes collection as an argument to the console
console.log(showCollection(collection));

//Testing findByArist and passing information that is within my collection and information that is not in my collection array.

console.log(findByArtist("DMX"));
