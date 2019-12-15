var Pizza = (flavour, size, crust, quantity, meats, veggies, cheese); {
  this.flavour = flavour;
  this.size = size;
  this.crust = crust;
  // this.toppings = toppings;
  this.quantity = quantity;
  this.meats = meats;
  this.veggies = veggies;
  this.cheese = cheese;
}

function pickFlavour () {
  var flavor = document.getElementById("flavour").value;
  return parseInt(flavor);
}

function pickSize (){
  var size = document.getElementById("size").value;
  return parseInt(size);
}

function pickCrust(){
  var crust = document.getElementById("crust").value;
  return parseInt(crust);
}
// function pickToppings(){
//   var toppings = document.getElementById("toppings").value;
//   return parseInt(toppings);
// }
function pickQuantity() {
  var quantity = document.getElementById("quantity").value;
  return parseInt(quantity);
}
function pickMeats() {
  var meats = document.getElementById("meats").value;
  return parseInt(meats);
}
function pickVeggies() {
  var veggies = document.getElementById("veggies").value;
  return parseInt(veggies);
}
function pickCheese() {
  var cheese = document.getElementById("cheese").value;
  return parseInt(cheese);
}

function makeOrder(){
  var order = (pickFlavour() + pickSize() + pickCrust() + pickMeats() + pickVeggies() + pickCheese()) * pickQuantity();
  if (confirm ("You have requested for " + pickQuantity("") + " pizza," + "" + " for Kshs. " + (order) + "" + " Would you like a delivery?")) {
    prompt("Enter Your Location")
  } else {
    return;
  }
  alert("Your order will be delivered shortly. Delivery fee is Kshs.100 paid upon receipt") 
}