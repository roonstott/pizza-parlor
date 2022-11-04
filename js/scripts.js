//Business Logic

function Pizza(name, size, crust, glutenFree) {
this.pizza = name;
this.toppings = {},
this.size = size,
this.crust = crust,
this.glutenFree = glutenFree
this.toppingIndex = 0
}

//pizzaPrice will be put in with a property

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

function GlutenFree(gf, price) {
  this.glutenFree = gf;
  this.price = price;
}

Pizza.prototype.addTopping = function(topping) {
  topping.id = this.assignToppingId();
  this.toppings[topping.id] = topping;
}

Pizza.prototype.assignToppingId = function() {
  this.toppingIndex += 1;
  return this.toppingIndex;
}

function Order (name, phone, delivery, gratuity) {
  this.name = name,
  this.phoneNumber = phone,
  this.shoppingCart = {},
  this.condiments = {},
  this.drinks = {},
  this.other = {},
  this.delivery = delivery,
  this.gratuity = gratuity
}

//totalCost will be put in with a property


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


Pizza.prototype.toppingCost = function () {
  tops = this.toppings[2].price;
  console.log(tops)
}

margharita.toppingCost();



//User Interface Logic

