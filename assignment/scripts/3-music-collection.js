console.log("***** Music Collection *****");

//Create a varibale collection that starts as an empty arry

let collection = [];

// Add a function named `addToCollection`. This function should:

//Creating a function called AddToCollection that
//takes two parameters (title, artist, yearsPublished)

function AddToCollection(artist, title, yearsPublished) {
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

  return album;
} //end AddToCollection

/*---------Calling && Testing------------------*/


//Adding 6 Artists to the collection
AddToCollection("DMX", "...And Then There Was X", 1999);
AddToCollection("Nas", "illmatic X", 1994);
AddToCollection("50 Cent", "Get Rich or Die Tryin", 2003);
AddToCollection("Nipsey Hussle", "Victory Lap", 2018);
AddToCollection("Dr. Dre", "Chronic 2001", 1999);
AddToCollection("Jay Z", "Reasonable Doubt", 1996);

//Loging the collection to the console
console.log(collection); // Output should be objects of the 6 artist that I added to the collection
