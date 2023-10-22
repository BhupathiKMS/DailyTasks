class UberRide {
  constructor(source, destination, distance = 10) {
    this.source = source;
    this.destination = destination;
    this.distance = distance;
  }
  costPerKm() {
    return 30;
  }
  calculateFare() {
    if (this.distance < 10) {
      this.distance = 10;
    }
    const fare = Number(this.distance) * this.costPerKm();
    return fare;
  }
  displayFare() {
    if (this.distance <= 10) {
      console.log(
        `Distance between ${this.source} and ${this.destination} is less than 10 km. you are charged with base fare`
      );
    }
    console.log(`Fare is Rs.${this.calculateFare()}`);
  }
}

const raid1 = new UberRide("Tambaram Sanitorium", "Tambaram", 5);
raid1.displayFare();
