//***Business Logic***

//The Two Primary Objects: Order and Pizza

function Order() {
  this.pizzas = [],
  this.condiments = [],
  this.drinks = [],
  this.others = [],
  this.toppingQueue = [],
  this.toppingQueueNames = []
};

function Pizza(menuItem, size, style, glutenFree) {
this.menuItem = menuItem,
this.toppings = [],
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

function Style(style, price) {
  this.style = style;
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

Pizza.prototype.toppingCost = function () {
  let totalToppingPrice = 0;
  this.toppings.forEach(function(topping){
    totalToppingPrice += topping.price
  });
  return totalToppingPrice;
}

Pizza.prototype.totalCost = function () {
  let totalCost = this.toppingCost();
  totalCost += this.size.price;
  totalCost += this.style.price;
  totalCost += this.glutenFree.price;
  this.cost = totalCost;
  return totalCost;
}

//The objects that will go into the Order properties

function Condiment(name, price, qty) {
  this.name = name;
  this.price = parseFloat(price);
  this.qty = parseInt(qty);
  this.totalPrice = this.price * this.qty;
}

function Drink(name, price, qty) {
  this.name = name;
  this.price = parseFloat(price);
  this.qty = parseInt(qty);
  this.totalPrice = this.price * this.qty;
}

function Other(name, price, qty) {
  this.name = name;
  this.price = parseFloat(price);
  this.qty = parseInt(qty);
  this.totalPrice = this.price * this.qty;
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

Order.prototype.inputCustomerInfo = function(customerName, phoneNumber, tip, delivery) {
  this.customerName = customerName;
  this.phoneNumber = phoneNumber;
  this.gratuity = tip;
  this.delivery = delivery;
}

Order.prototype.pizzaCost = function () {
  let totalPizzaPrice = 0;
  this.pizzas.forEach(function(pizza){
    totalPizzaPrice += pizza.totalCost();
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

//***User Interface Logic: ***

window.addEventListener("load", function(){
  let toppingButton = document.getElementById("addTopping");
  toppingButton.addEventListener("click", insertTopping);
  let pizzaButton = document.getElementById("addPizza");
  pizzaButton.addEventListener("click", insertPizza);
  let drinkButton = document.getElementById("drinkBtn");
  drinkButton.addEventListener("click", insertDrink);
  let condoButton = document.getElementById("condoBtn");
  condoButton.addEventListener("click", insertCondiment);
  let otherButton = document.getElementById("otherBtn");
  otherButton.addEventListener("click", insertOther);
});

//function insertDrink

function insertDrink(event) {
  event.preventDefault();
  const drink = document.getElementById("drinks").value.split(":");
  const qty = document.getElementById("drinkQty").value;
  let drinkObj = new Drink(drink[1], drink[0], qty);
  order1.drinks.push(drinkObj);

  const drinkList = document.getElementById("drinkList");
  const li = document.createElement("li");
  li.append(`${drink[1]} x ${qty}:   $${drinkObj.totalPrice}`);
  drinkList.append(li);  
}

//function insertCondiment
function insertCondiment(event) {
  event.preventDefault();
  const condo = document.getElementById("condiments").value.split(":");
  const qty = document.getElementById("condoQty").value;
  let condoObj = new Condiment(condo[1], condo[0], qty);
  order1.condiments.push(condoObj);

  const condoList = document.getElementById("condoList");
  const li = document.createElement("li");
  li.append(`${condo[1]} x ${qty}:   $${condoObj.totalPrice}`);
  condoList.append(li);  
}

//function insertOther
function insertOther(event) {
  event.preventDefault();
  const other = document.getElementById("other").value.split(":");
  const qty = document.getElementById("otherQty").value;
  let otherObj = new Other(other[1], other[0], qty);
  order1.others.push(otherObj);

  const otherList = document.getElementById("otherList");
  const li = document.createElement("li");
  li.append(`${other[1]} x ${qty}:   $${otherObj.totalPrice}`);
  otherList.append(li);  
}

//function insertPizza
function insertPizza(event) {
  event.preventDefault();
  //Pizza:
  const menuItem = document.getElementById("menuItem").value;
  const size = document.getElementById("size").value.split(":");
  const style = document.getElementById("style").value.split(":");
  const gf = document.getElementById("gf").value;

  let sizeObj = new Size(size[1], size[0]);
  let styleObj = new Style(style[1], style[0]);
  let gfObj = new GlutenFree(gf);

  let pizzaObj = new Pizza(menuItem, sizeObj, styleObj, gfObj);

  //Getting Toppings from the queue:

  order1.toppingQueue.forEach(function(toppingObj) {
    pizzaObj.toppings.push(toppingObj);
  });

  //Add Pizza to Order, manage UI displays,  empty topping queue:

  order1.pizzas.push(pizzaObj);

  const pizDisp = document.getElementById("pizzaDisplay");
  const li = document.createElement("li");
  li.append(`${size[1]} ${menuItem} (${style[1]}, `)
  if (gfObj.glutenFree) {
    li.append("Gluten Free, ")
  };
  order1.toppingQueueNames.forEach(function(topping){
    li.append(` +${topping}`);
  });
  li.append(`) $${pizzaObj.totalCost()}`)
  pizDisp.append(li);

  const pizPriceDisp = document.getElementById("pizzaPriceDisplay");
  pizPriceDisp.innerHTML=(`$${order1.pizzaCost()}`);

  order1.toppingQueue = [];
  order1.toppingQueueNames = [];
  document.getElementById("toppingDisplay").innerHTML = "";
};

//function insertTopping
function insertTopping(event) {
  event.preventDefault();
  const topDisp = document.getElementById("toppingDisplay");
  const topping = document.getElementById("toppings").value.split(":");
  let toppingObj = new Topping(topping[1], topping[0]);
  if (topping[0] !== "0" && !order1.toppingQueueNames.includes(topping[1])) {
    order1.toppingQueue.push(toppingObj);
    order1.toppingQueueNames.push(topping[1]);
    const li = document.createElement(("li"));
    li.append(topping[1]);
    topDisp.append(li);    
  };
};



  
  // //Customer Info

  // const name = document.getElementById("name").value;
  // const phoneNumber = document.getElementById("phoneNumber").value;
  // const tip = parseFloat(document.getElementById("tip").value);
  // const delivery = document.getElementById("delivery").value;

  // let deliveryObj = new Delivery(delivery);
  
  // order1.inputCustomerInfo(name, phoneNumber, tip, deliveryObj);
