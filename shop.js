const products = [
    {id : 1, name: "Playstation 5", price:499.99},
    {id: 2, name: "IPhone 15", price: 999.99},
    {id: 3, name: "Samsung Fridge", price: 1500.99}
]

let cart = []
let isLoggedIn = true;

if (isLoggedIn){
    for (let i=0; i < products.length; i++) {
        console.log(`${products[i].id}: ${products[i].name}: ${products[i].price}`);
    }
}

let totalCost = cart.reduce((sum, item) => sum + item.price, 499.99);

if (isLoggedIn){
    console.log(`Total cost of items in cart: $${totalCost.toFixed(2)}`);
}

 else {
console.log("You must be logged in to add items to your cart.");
}