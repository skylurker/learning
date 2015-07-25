/* Eloquent Java Script */
/* Objects */

/* Vector type */
function Vector(x, y) {
  this.x = x;
  this.y = y;
};

Vector.prototype.plus = function(vector2) {
  return new Vector(this.x + vector2.x, this.y + vector2.y);
};
Vector.prototype.minus = function(vector2) {
  return new Vector(this.x - vector2.x, this.y - vector2.y);
};

Object.defineProperty(Vector.prototype, "length", {
  get: function() {return Math.sqrt(this.x * this.x + this.y * this.y);}
});

console.log(new Vector(1, 2).plus(new Vector(2, 3)));
console.log(new Vector(1, 2).minus(new Vector(2, 3)));
console.log(new Vector(3, 4).length);