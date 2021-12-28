

// Bind :


// Both call and apply are one-time use methods—if you call the method with the this context it will have it, but the original function will remain unchanged.

// Sometimes, you might need to use a method over and over with the this context of another object, and in that case you could use the bind method to create a brand new function with an explicitly bound this.

// example :

// const braveNewTnStory = story.bind(book)

// braveNewTnStory().







// Call and Apply :


// call and apply are very similar—they invoke a function with a specified this context, and optional arguments. The only difference between call and apply is that call requires the arguments to be passed in one-by-one, and apply takes the arguments as an array.

// In this example, we'll create an object, and create a function that references this but has no this context.


// example :


// const book = {
//   title: 'Brave New Tamilnadu',
//   author: 'vigneshkalit'hass,
// }

// function story() {
//   console.log(`${this.title} was written by ${this.author}.`)
// }

// story()






var user = {
    name: 'abdul',
    age:23,
    getName:function(sirname){
        console.log('user name is' + " "+ this.name + sirname);
    }
}

var user2 = {
    name: 'hrithik',
    age: 27
}
user.getName('kaliq');

var x = user.getName.bind(user2);
x("roshan")

user.getName.call(user2,"roshan");
user.getName.call(user2,"vikas");





// protoype inheritance



// When it comes to inheritance, JavaScript only has one construct: objects. 
// Each object has a private property which holds a link to another object called its prototype.
//  That prototype object has a prototype of its own, and so on until an object is reached
//   with null as its prototype. By definition, null has no prototype, and acts as the final 
//   link in this prototype chain.


// exaple :

// function display(a,b){
//     this.name=a;
//     this.age=b;

// }
// display.prototype.year= "1st year";
// display.prototype.details=function(){
//     return this.name+" "+this.age+" "+ this.year;
// };
// var s1=new display("vignesh",23);
// var s2=new display("maadhev",26);
// document.getElementById("h").innerHTML=s2.details();