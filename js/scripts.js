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
}

function Pizza(name, size, crust, glutenFree) {
this.pizza = name;
this.toppings = {},
this.size = size,
this.crust = crust,
this.glutenFree = glutenFree
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
  let pizzaID = pizza.pizza;
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
    totalPizzaPrice += pizzas[key].totalCost;
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

Order.prototype.drinkCost = function () {
  let totalDrinkPrice = 0;
  let drinks = this.drinks;
  let array = Object.keys(drinks);
  array.forEach(function(key){
    totalDrinkPrice += drinks[key].price
  });
  return totalDrinkPrice;
}

Order.prototype.otherCost = function () {
  let totalOtherPrice = 0;
  let others = this.others;
  let array = Object.keys(others);
  array.forEach(function(key){
    totalOtherPrice += others[key].price
  });
  return totalOtherPrice;
}

Order.prototype.totalCostBeforeTip = function () {
  let totalCost = this.pizzaCost();
  totalCost += this.condimentCost();
  totalCost += this.drinkCost();
  totalCost += this.otherCost();
  totalCost += this.delivery.price;
  this.totalCost = totalCost;
  return totalCost;
}

Order.prototype.totalCostWithTip = function () {
  let grossCost = this.totalCost;
  let tipPercent = this.gratuity/100;
  let tipAmount = grossCost * tipPercent;
  this.tipAmount = tipAmount;
  return tipAmount + grossCost;
}

//Test Code Pizza 

let artichokes = new Topping("artichokes", 3);
let anchovies = new Topping("anchovies", 3.5);
let olives = new Topping("olives", 2)
let size = new Size("18 inch", 15);
let crust = new Crust("thick", 4);
let gF = new GlutenFree(false, 0);
let margharita = new Pizza("margharita", size, crust, gF);
margharita.addTopping(artichokes);
margharita.addTopping(artichokes);
margharita.addTopping(anchovies);
margharita.addTopping(olives);
margharita.totalCost();
console.log(margharita);
console.log(margharita.totalCost);
//Test Code Order
let cola = new Drink("CocaCola", "XL", 3);
let ranch = new Condiment("ranch", .5);
let tShirt = new Other("T-Shirt", 15);
let deliver = new Delivery(true, 10);
let robertIsHungry = new Order ("Robert", "971-998-8234", deliver, 25);
robertIsHungry.addCondiment(ranch);
robertIsHungry.addDrink(cola);
robertIsHungry.addOther(tShirt);
robertIsHungry.addPizza(margharita);
console.log("***pizzaCost***", robertIsHungry.pizzaCost());
console.log("***drinkCost***", robertIsHungry.drinkCost());
console.log("***otherCost***", robertIsHungry.otherCost());
console.log("***condimentCost***", robertIsHungry.condimentCost());
console.log("***deliveryprice***", robertIsHungry.delivery.price);
console.log("***totalCostBeforeTip***", robertIsHungry.totalCostBeforeTip());
console.log("***this.totalCost***", robertIsHungry.totalCost);
console.log("***totalCostWithTip***", robertIsHungry.totalCostWithTip());




//User Interface Logic

