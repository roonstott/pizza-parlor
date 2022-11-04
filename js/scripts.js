//Business Logic

//The Two Primary Objects: Order and Pizza

function Order (name, phone, delivery, gratuity) {
  this.name = name,
  this.phoneNumber = phone,
  this.pizzas = {},
  this.condiments = {},
  this.drinks = {},
  this.others = {},
  this.delivery = delivery,
  this.gratuity = gratuity
} //totalCost will be put in with a method, as will price with gratuity

function Pizza(name, size, crust, glutenFree) {
this.pizza = name;
this.toppings = {},
this.size = size,
this.crust = crust,
this.glutenFree = glutenFree
this.toppingIndex = 0
}

//The objects that will go into the Pizza properties

function Topping(name, price) {
  this.name = name,
  this.price = price
}

function Size(size, price) {
  this.size = size;
  this.price = price;
}

function Crust(crust, price) {
  this.crust = crust;
  this.price = price;
}

function GlutenFree(boolean, price) {
  this.glutenFree = boolean;
  this.price = price;
}

//Pizza methods

Pizza.prototype.addTopping = function(topping) {
  let toppingID = topping.name
  this.toppings[toppingID] = topping;
}

Pizza.prototype.toppingCost = function () {
  let totalToppingPrice = 0;
  let toppings = this.toppings;
  let array = Object.keys(toppings);
  array.forEach(function(key){
    totalToppingPrice += toppings[key].price
  });
  return totalToppingPrice;
}

Pizza.prototype.totalCost = function () {
  let totalCost = this.toppingCost();
  totalCost += this.size.price;
  totalCost += this.crust.price;
  totalCost += this.glutenFree.price;
  this.totalCost = totalCost; 
}

//The objects that will go into the Order properties

function Condiment(name, price) {
  this.name = name;
  this.price = price;
}

function Drink(name, size, price) {
  this.name = name;
  this.size = size;
  this.price = price;
}

function Other(name, price) {
  this.name = name;
  this.price = price;
}

function Delivery(boolean, price) {
  this.delivery = boolean;
  this.price = price;
}

//Order Methods

Order.prototype.addPizza = function(pizza) {
  let pizzaID = pizza.name;
  this.pizzas[pizzaID] = pizza;
}

Order.prototype.addCondiment = function(condiment) {
  let condimentID = condiment.name;
  this.condiments[condimentID] = condiment;
}

Order.prototype.addDrink = function(drink) {
  let drinkID = drink.name;
  this.drinks[drinkID] = drink;
}

Order.prototype.addOther = function(other) {
  let otherID = other.name;
  this.others[otherID] = other;
}

Order.prototype.pizzaCost = function () {
  let totalPizzaPrice = 0;
  let pizzas = this.pizzas;
  let array = Object.keys(pizzas);
  array.forEach(function(key){
    totalPizzaPrice += pizzas[key].price
  });
  return totalPizzaPrice;
}

Order.prototype.condimentCost = function () {
  let totalCondimentPrice = 0;
  let condiments = this.condiments;
  let array = Object.keys(condiments);
  array.forEach(function(key){
    totalCondimentPrice += condiments[key].price
  });
  return totalCondimentPrice;
}

Order.prototype.condimentCost = function () {
  let totalCondimentPrice = 0;
  let condiments = this.condiments;
  let array = Object.keys(condiments);
  array.forEach(function(key){
    totalCondimentPrice += condiments[key].price
  });
  return totalCondimentPrice;
}




//Test Code

let artichokes = new Topping("artichokes", 3);
let anchovies = new Topping("anchovies", 3.5);
let olives = new Topping("olives", 2)
let size = new Size("18 inch", 15);
let crust = new Crust("thick", 4);
let gF = new GlutenFree(false, 0);
let margharita = new Pizza("margharita", size, crust, gF);
margharita.addTopping(artichokes);
margharita.addTopping(anchovies);
margharita.addTopping(olives);
console.log(margharita);
margharita.totalCost();
console.log(margharita.totalCost);

//User Interface Logic

