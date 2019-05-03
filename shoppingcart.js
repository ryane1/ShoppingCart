"use strict";
let shoppingCart = [];
let itemList = [{
        name: "jeans",
        price: 50
    },
    {
        name: "shirt",
        price: 20
    },
    {
        name: "shoes",
        price: 130
    },
    {
        name: "hat",
        price: 30
    },
    {
        name: "necklace",
        price: 10
    }
];

function addItem(itemName, itemPrice) {
    shoppingCart = [...shoppingCart, { name: itemName, price: itemPrice }];
    console.log(`You just added ${itemName} for ${itemPrice} dollars.`)
}

function removeItem(itemName) {
    let index = shoppingCart.findIndex(element => element.name === itemName);
    shoppingCart = [...shoppingCart.slice(0, index), ...shoppingCart.slice(index + 1)];
    console.log(`You just removed ${itemName} for ${itemPrice} dollars from your cart.`);
}

function editItem(oldItem, newItem) {
    let index = shoppingCart.findIndex(element => element.name === oldItem);
    shoppingCart = [...shoppingCart.slice(0, index), { name: newItem, price: shoppingCart[index].price }, ...shoppingCart.slice(index + 1)]
    console.log(`You've just edited you cart and exchanged ${oldItem} for ${newItem}.`);
}

function printTotal() {
    let total = 0;
    for (let cartItem of shoppingCart) {
        total += (cartItem.price) + (cartItem.price * 0.06);
        console.log(`Your total is ${total}`);
    }
};

addItem("jeans", 50);
addItem("shirt", 20);
addItem("shoes", 130);
addItem("hat", 30);
addItem("necklace", 10);
console.log(shoppingCart);
printTotal(shoppingCart);
editItem("hat", "shoes");