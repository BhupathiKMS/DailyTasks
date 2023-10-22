class Movie {
  constructor(title, studio, rating = "PG") {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }
  getPG(movArr) {
    return movArr.filter((m) => m.rating === "PG");
  }
}
const film1 = new Movie("Baasha", "Sathya Movies", "PG13");
const film2 = new Movie("Padaiyappa", "Arunachala Cine Creations");
const film3 = new Movie("Endhiran", "Sun Pictures");
const film4 = new Movie("Chandramukhi", "Sivaji Productions", "PG13");
console.log(new Movie().getPG([film1, film2, film3, film4]));
