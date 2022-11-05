//Business Logic

//The Two Primary Objects: Order and Pizza

function Order() {
  this.pizzas = {},
  this.condiments = {},
  this.drinks = {},
  this.others = {}
};

function Pizza(menuItem, size, style, glutenFree) {
this.menuItem = menuItem;
this.toppings = {},
this.size = size,
this.style = style,
this.glutenFree = glutenFree
}

//this will be a global order object, to act as a database
let order1 = new Order();

//The objects that will go into the Pizza properties

function Topping(name, price) {
  this.name = name,
  this.price = parseFloat(price);
}

function Size(size, price) {
  this.size = size;
  this.price = parseInt(price)
}

function Crust(crust, price) {
  this.crust = crust;
  this.price = parseFloat(price);
}

function GlutenFree(price) {
  let gfValue = parseInt(price);
  let cost;
  let gfTorF;
  if (gfValue) {
    cost = gfValue;
    gfTorF = true;
  } else { 
    cost = 0;
    gfTorF = false;
  }
  this.price = cost;
  this.glutenFree = gfTorF;
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
  totalCost += this.style.price;
  totalCost += this.glutenFree.price;
  this.totalCost = totalCost; 
}

//The objects that will go into the Order properties

function Condiment(name, price) {
  this.name = name;
  this.price = parseFloat(price);
}

function Drink(name, price) {
  this.name = name;
  this.price = parseFloat(price);
}

function Other(name, price) {
  this.name = name;
  this.price = parseFloat(price);
}

function Delivery(price) {
  let deliveryValue = parseInt(price);
  let cost;
  let deliverTorF;
  if (deliveryValue) {
    cost = deliveryValue;
    deliverTorF = true;
  } else { 
    cost = 0;
    deliverTorF = false;
  }
  this.price = cost;
  this.delivery = deliverTorF;
}

//Order Methods

Order.prototype.addPizza = function(pizza) {
  pizza.totalCost();
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

Order.prototype.inputCustomerInfo = function(customerName, phoneNumber, tip, delivery) {
  this.customerName = customerName;
  this.phoneNumber = phoneNumber;
  this.gratuity = tip;
  this.delivery = delivery;
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
  let totalCost = this.totalCost;
  let tipFraction = this.gratuity
  let tipAmount = totalCost * tipFraction;
  this.tipAmount = tipAmount;
  return tipAmount + totalCost;
}

//Test Code Pizza 

// let artichokes = new Topping("artichokes", 3);
// let anchovies = new Topping("anchovies", 3.5);
// let olives = new Topping("olives", 2)
// let size = new Size("18 inch", 15);
// let crust = new Crust("thick", 4);
// let gF = new GlutenFree(false, 0);
// let margharita = new Pizza("margharita", size, crust, gF);
// margharita.addTopping(artichokes);
// margharita.addTopping(artichokes);
// margharita.addTopping(anchovies);
// margharita.addTopping(olives);
// margharita.totalCost();
// console.log(margharita);
// console.log(margharita.totalCost);

//Test Code Order
// let cola = new Drink("CocaCola", "XL", 3);
// let ranch = new Condiment("ranch", .5);
// let tShirt = new Other("T-Shirt", 15);
// let deliver = new Delivery(true, 10);
// let robertIsHungry = new Order ("Robert", "971-998-8234", deliver, 25);
// robertIsHungry.addCondiment(ranch);
// robertIsHungry.addDrink(cola);
// robertIsHungry.addOther(tShirt);
// robertIsHungry.addPizza(margharita);
// console.log("***pizzaCost***", robertIsHungry.pizzaCost());
// console.log("***drinkCost***", robertIsHungry.drinkCost());
// console.log("***otherCost***", robertIsHungry.otherCost());
// console.log("***condimentCost***", robertIsHungry.condimentCost());
// console.log("***deliveryprice***", robertIsHungry.delivery.price);
// console.log("***totalCostBeforeTip***", robertIsHungry.totalCostBeforeTip());
// console.log("***this.totalCost***", robertIsHungry.totalCost);
// console.log("***totalCostWithTip***", robertIsHungry.totalCostWithTip());




//User Interface Logic

window.addEventListener("load", function(){
  let form = document.getElementById("form");
  form.addEventListener("submit", handleSubmit);
});

function handleSubmit (event) {
  event.preventDefault();

  console.log(order1);
  //Pizza
  const menuItem = document.getElementById("menuItem").value;
  const size = document.getElementById("size").value.split(":");
  const topping = document.getElementById("toppings").value.split(":");
  const style = document.getElementById("style").value.split(":");
  const gf = document.getElementById("gf").value;

  let sizeObj = new Size(size[1], size[0]);
  let toppingObj = new Topping(topping[1], topping[0]);
  let styleObj = new Crust(style[1], style[0]);
  let gfObj = new GlutenFree(gf);

  //Making the Pizza object

  let pizzaObj = new Pizza(menuItem, sizeObj, styleObj, gfObj);
  pizzaObj.addTopping(toppingObj);
  
  //Other Order Items

  const drink = document.getElementById("drinks").value.split(":");
  const condiment = document.getElementById("condiments").value.split(":");
  const other = document.getElementById("other").value.split(":");
  
  let drinkObj = new Drink(drink[1], drink[0]);
  let condimentObj = new Condiment(condiment[1], condiment[0]);
  let otherObj = new Other(other[1], other[0]);
  
  //Customer Info

  const name = document.getElementById("name").value;
  const phoneNumber = document.getElementById("phoneNumber").value;
  const tip = parseFloat(document.getElementById("tip").value);
  const delivery = document.getElementById("delivery").value;

  let deliveryObj = new Delivery(delivery);
  
  //Updating the Order object

  order1.addPizza(pizzaObj);
  order1.addCondiment(condimentObj);
  order1.addDrink(drinkObj);
  order1.addOther(otherObj);
  order1.inputCustomerInfo(name, phoneNumber, tip, deliveryObj);

  console.log(order1);
  console.log(order1.totalCostBeforeTip());
  console.log(order1.totalCostWithTip());

};