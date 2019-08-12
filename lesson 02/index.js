//
// const circle = {
//   radius: 1,
//   location: {
//     x: 1,
//     y: 1,
//   },
//   draw: function() {
//     console.log('draw');
//   }
// };
//
//
// circle.draw();

// ====================== Factory function

// function createCircle(radius) {
//   return {
//     radius,
//     draw: function() {
//       console.log('draw');
//     }
//   };
// }
//
// const circle = createCircle(1);
// circle.draw();

// ====================== Constructor function

// function createCircle(radius) {
//   return {
//     radius,
//     draw: function() {
//       console.log('draw');
//     }
//   };
// }
//
// const circle = createCircle(1);
// //
// function Circle(radius) {
//   this.radius = radius;
//   this.draw = function() {
//     console.log('draw');
//   }
// }
// const another = new Circle(1);

// ====================== Constructor property

// function Circle(radius) {
//   this.radius = radius;
//   this.draw = function() {
//     console.log('draw');
//   }
// }

// const Circle1 = new Function('radius',`this.radius = radius;
// this.draw = function() {
//   console.log('draw');
// }`)
//
// const circle = new Circle1(1);

// Circle.call({}, 1);
// Circle.apply({}, [1, 2, 3]);
//
// const another = new Circle(1);
