class Movie {

  // a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.
  // b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.
  constructor(title, studio, rating = "PG") {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }

  // c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.
  getPG(movArr) {
    return movArr.filter((m) => m.rating === "PG");
  }
}

// d)Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”
const film1 = new Movie("Baasha", "Sathya Movies", "PG13");
const film2 = new Movie("Padaiyappa", "Arunachala Cine Creations");
const film3 = new Movie("Endhiran", "Sun Pictures");
const film4 = new Movie("Chandramukhi", "Sivaji Productions", "PG13");
console.log(new Movie().getPG([film1, film2, film3, film4]));
