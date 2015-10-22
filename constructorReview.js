//Create a Animal Constructor that has the following parameters. species, name, legs, 
//color, food (which is an array of foods they can eat).

var Animal = function(species, name, legs, color, food) {
  this.species = species;
  this.name = name;
  this.legs = legs;
  this.color = color;
  this.food = ['skin', 'bark', 'deer'];
};


//Now create a person function that creates an object and returns it (not in constructor 
//form) that has the following parameters. name, age, height, gender

var Person = {
  this.name = name,
    this.age = age,
    this.height = height,
    this.gender = gender
};


//Create a animal array and a person array.

var animales = ['cheetah', 'moose', 'cat'];

var personajes = ['king', 'president', 'ceo'];


//Create two instances of Animal and push those into your animal array

animales.push(new Animal('lion', 'king', 4, 'yellow', ['skin']));
animales.push(new Animal('seal', 'woosbag', 4, 'black', ['bark']));


//Create two instances of person and push those into your person array.

personajes.push(new Person('seth', 29, 57, 'male'));
personajes.push(new Person('kara', 30, 55, 'female'));


//Now we want every instance of Animal to have a eat method. This method will choose a 
//random item in that instances food array, then alert "(name) ' ate ' (whichever food 
//was chosen)".

alert(animal.name + 'ate ' + animal.food);


//At this point, if we wanted to add something to every istance of person could we? 

//Yes or no? and why or why not?



/*
  1) What happens when you use the 'new' keyword to call a Constructor function?  It 
  creates a new object.
  2) What's a good way to describe the keyword 'this'.
    It refers to the immediate object being called and that object will be to the left of
    the .this call.
  3) Can a normal function which creates an object and then returns that object use the 
  //prototype?
  Yes.
  4) What happens if you forget to use 'new' when calling a constructor?
  It'll return the definition of the constructor.
*/