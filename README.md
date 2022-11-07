
# _Pizza Parlor_

#### By _**Robert Onstott**_

#### _An ordering platform for a hypothetical pizza shop. Customers can input their order options and find out the price_

## Technologies Used

* _HTML_
* _JavaScript_
* _CSS_
* _Bootstrap_

## Description

Using object-oriented JavaScript, this site takes in customer input and stores their order in order, pizza, topping, gluten-free, condiment, drink, apparel, and delivery items, creating an information structure for the customer order that can generate a receipt for the customer, and an order ticket for the restaurant.

## Setup/Installation Requirements

* _Clone the repository to your own machine_
* _Open the index.html folder using a web browser of your choice_
* _Internet connection is required in order to enjoy all styling features_
* Go through the site and choose the selections that apply to the pizza that you want. You can add as many toppings as you want before adding the pizza to your order, and youcan add as many pizzas, drinks, condiments, and apparel items to your order as you want before selecting 'Review Order' to see your receipt and final price. 

## Test Driven Development

```Describe: function Pizza(name, size, crust, glutenFree)

Test: "It should create a new pizza object with size, crust, and glutenFree properties, as well as an empty topping object"
Code: 
  let margharita = new Pizza("margharita", "18", "thin", false);
  console.log(margharita);
Expected Output: 
  Pizza {
    name: 'margharita',
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

Test: "It should refactor the addTopping(); method so that it doesn't require an ID, or the assign ID method, and will just use the topping.name property as the object key inside of the Pizza.prototype.toppings object."
Code:
  let margharita = new Pizza("margharita", size, crust, gF);
  let artichokes = new Topping("artichokes", 3);
  let anchovies = new Topping("anchovies", 3.5);
  let olives = new Topping("olives", 2)
  margharita.addTopping(artichokes);
  margharita.addTopping(anchovies);
  margharita.addTopping(olives);
  console.log(margharita);
Expected Output:
  Pizza {
  pizza: 'margharita',
  toppings: {
    artichokes: Topping { name: 'artichokes', price: 3, id: 'artichokes' },
    anchovies: Topping { name: 'anchovies', price: 3.5, id: 'anchovies' },
    olives: Topping { name: 'olives', price: 2, id: 'olives' }
  },
  size: Size { size: '18 inch', price: 15 },
  crust: Crust { crust: 'thick', price: 4 },
  glutenFree: GlutenFree { glutenFree: false, price: 0 },
  toppingIndex: 0
}

Describe: function Size(size, price) 
Test: "It should create a size object with size and price properties"
Code: 
  let size = new Size("18 inch", 15);
  console.log(size);
Expected Output: 
  Size { size: '18 inch', price: 15 }

Describe: ^^^ The Crust and GlutenFree constructors are identical to the Size constructor described above, apart from constructor name and first property name, so I won't repeat them ^^^

Describe: Pizza.prototype.toppingCost();
Test: "It should add up the price properties of each topping contained within the toppings object of the pizza object, giving a total cost for all the toppings on the pizza" 
Code: 
  Pizza {
  pizza: 'margharita',
  toppings: {
    '1': Topping { name: 'artichokes', price: 3, id: 1 },
    '2': Topping { name: 'anchovies', price: 3.5, id: 2 },
    '3': Topping { name: 'olives', price: 2, id: 3 }
  },
  size: Size { size: '18 inch', price: 15 },
  crust: Crust { crust: 'thick', price: 4 },
  glutenFree: GlutenFree { glutenFree: false, price: 0 },
  toppingIndex: 3
}

  console.log (margharita.toppingCost());

Expected Output: 8.5

Describe: Pizza.prototype.totalcost(); 
Test: "It should add up all price values in the Pizza object and return a total cost as a new property in the pizza object"
Code: 
  Pizza {
  pizza: 'margharita',
  toppings: {
    '1': Topping { name: 'artichokes', price: 3, id: 1 },
    '2': Topping { name: 'anchovies', price: 3.5, id: 2 },
    '3': Topping { name: 'olives', price: 2, id: 3 }
  },
  size: Size { size: '18 inch', price: 15 },
  crust: Crust { crust: 'thick', price: 4 },
  glutenFree: GlutenFree { glutenFree: false, price: 0 },
  toppingIndex: 3
}

margharita.totalCost();
console.log(margharita.totalCost);
Expected Output: 
  totalCost: 27.5
 ```

## Known Bugs

* _No Known Bugs_

## License

_GPL_

Copyright (c) _NOV 2022_ _Robert Onstott_









