class Circle {
  constructor(radius, color) {
    this.radius = radius;
    this.color = color;
  }
  circle() {
    console.log("circle with no specified radius and color");
  }
  circle(radius) {
    console.log(`circle with provided radius ie., ${radius}`);
  }
  circle(radius, color) {
    console.log(`circle with provided radius ${radius} and color ${color}`);
  }
  get radius() {
    return this._radius;
  }
  set radius(newRadius) {
    if (this.radius) {
      throw new Error(
        "radius value is already set for this circle and cannot be modified"
      );
    }
    this._radius = Number(newRadius);
  }
  get color() {
    return this._color;
  }
  set color(newcolor) {
    if (this.color) {
      throw new Error(
        "color is already set for this circle and cannot be modified"
      );
    }
    this._color = newcolor;
  }
  getArea() {
    return Math.PI * Math.pow(this._radius, 2);
  }
  getCircumference() {
    return 2 * Math.PI * this._radius;
  }
}

let circle1 = new Circle("10", "blue");
//circle1.color = "orange"
//circle1.radius = 20;
console.log(circle1.getArea());
