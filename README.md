Describe: function Pizza(size, crust, glutenFree)

Test: "It should create a new pizza object with size, crust, and glutenFree properties, as well as an empty topping object"
Code: 
  let margharita = new Pizza("18", "thin", false);
  console.log(margharita);
Expected Output: 
  Pizza {
    toppings: {},
    size: '18',
    crust: 'thin',
    glutenFree: false,
    toppingIndex: 0
  }

Describe: function Topping(name, price)

Test: "It should create a new topping object with a name and price properties"
Code: 
  let anchovies = new Topping("anchovies", 2.5);
  console.log(anchovies); 
Expected Output: 
  Topping { name: 'anchovies', price: 2.5 }

Describe: Pizza.prototype.assignToppingId = function()
Test: "It should be called on a pizza object to increment the topping index by 1, and then it should return the topping index value"
Code: 
  console.log(margharita.assignToppingId())
  console.log(margharita)
Expected Output: 
  1
Pizza {
  toppings: {},
  size: '18',
  crust: 'thin',
  glutenFree: false,
  toppingIndex: 1
}

Describe: Pizza.prototype.addToppings(topping);
Test: "It should add a topping to the toppings object of the pizza object. It will increment the toppingIndex by 1 and assign a topping ID to the topping. 
Code: 
  let margharita = new Pizza("18", "thin", false);
  let anchovies = new Topping("anchovies", 2.5);
  margharita.addTopping(anchovies);
  console.log(margharita);
Expected Output: 
  Pizza {
  toppings: { '1': Topping { name: 'anchovies', price: 2.5, id: 1 } },
  size: '18',
  crust: 'thin',
  glutenFree: false,
  toppingIndex: 1
}

Describe: 
