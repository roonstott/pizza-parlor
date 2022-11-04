//Business Logic

function Pizza(size, crust, glutenFree) {
this.toppings = {},
this.size = size,
this.crust = crust,
this.glutenFree = glutenFree
this.toppingIndex = 0
}

Pizza.prototype.addTopping = function(topping) {
  topping.id = this.assignToppingId();
  this.toppings[topping.id] = topping;
}

Pizza.prototype.assignToppingId = function() {
  this.toppingIndex += 1;
  return this.toppingIndex;
}

function Topping(name, price) {
  this.name = name,
  this.price = price
}


//pizzaPrice will be put in with a property

function Order (condiments, delivery, gratuity) {
  this.customerInfo = {},
  this.shoppingCart = {},
  this.condiments = condiments,
  this.delivery = delivery,
  this.gratuity = gratuity
}

//totalCost will be put in with a property


//Test Code

let anchovies = new Topping("anchovies", 2.5);
let artichokes = new Topping("artichokes", 3);
let margharita = new Pizza("18", "thin", false);
margharita.addTopping(anchovies);
margharita.addTopping(artichokes);
console.log(margharita);



//User Interface Logic

