// SAME KEY AND VALUE
function createInstructor(firstName, lastName){
    return {
      firstName: firstName,
      lastName: lastName
    }
  }


// SMAE KEY AND VALUE ES2015 VERSION
function createInstructor(){
    return {
        firstName,
        lastName,
    };
};

// COMPUTED PROPERTY NAMES
// var favoriteNumber = 42;

// var instructor = {
//   firstName: "Colt"
// }

// instructor[favoriteNumber] = "That is my favorite!"

// COMPUTED PROPERTY NAMES ES2015 VERSION
const favoriteNumber = 48;
const instructor = {
    [favoriteNumber]: "Forty-Eight"
}
console.log(instructor.favoriteNumber)

// OBJECT METHODS
// var instructor = {
//   firstName: "Colt",
//   sayHi: function(){
//     return "Hi!";
//   },
//   sayBye: function(){
//     return this.firstName + " says bye!";
//   }
// }

// OBJECT METHODS ES2015

let theInstructor = {
  firstname: 'Colt',
  sayHi(){
    return "hi"
  },
  sayBye(){
    return this.firstname + "says bye";
  }
};