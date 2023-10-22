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
    this._radius = newRadius;
  }
  get color() {
    return this._color;
  }
  set color(newcolor) {
    this._color = newcolor;
  }
  getArea() {
    return Math.PI * Math.pow(this._radius, 2);
  }
  getCircumference() {
    return 2 * Math.PI * this._radius;
  }
}

let circle1 = new Circle(10, "blue");
console.log(circle1.getArea());
