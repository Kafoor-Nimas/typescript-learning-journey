"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPizzaDetail = getPizzaDetail;
var menu = [
    { id: 1, name: "Margherita", price: 8 },
    { id: 2, name: "Pepperoni", price: 10 },
    { id: 3, name: "Hawaiian", price: 10 },
    { id: 4, name: "Vegetarian", price: 9 },
];
var cashInRegister = 100;
var nextOrderId = 1;
var orderQueue = [];
function addNewPizza(pizzaObj) {
    menu.push(pizzaObj);
}
function placeOrder(pizzaName) {
    var selectedPizza = menu.find(function (item) { return item.name === pizzaName; });
    if (!selectedPizza) {
        console.error("".concat(pizzaName, " is not available on the menu."));
        return;
    }
    cashInRegister += selectedPizza.price;
    var newOrder = {
        id: nextOrderId++,
        pizza: selectedPizza,
        status: "ordered",
    };
    orderQueue.push(newOrder);
    return newOrder;
}
function completeOrder(orderId) {
    var order = orderQueue.find(function (order) { return order.id === orderId; });
    if (!order) {
        console.error("".concat(orderId, " was not found in the orderQueue"));
        throw new Error();
    }
    order.status = "completed";
    return order;
}
function getPizzaDetail(identifier) {
    if (typeof identifier === "string") {
        return menu.find(function (pizza) { return pizza.name.toLowerCase() === identifier.toLowerCase(); });
    }
    else {
        return menu.find(function (pizza) { return pizza.id === identifier; });
    }
}
addNewPizza({ id: 5, name: "BBQ Chicken", price: 12 });
addNewPizza({ id: 6, name: "Chicken bacon ranch", price: 12 });
addNewPizza({ id: 7, name: "Spicy sausage", price: 11 });
placeOrder("Chicken bacon ranch");
completeOrder(1);
console.log("Menu:", menu);
console.log("Cash in Register:", cashInRegister);
console.log("Order Queue:", orderQueue);
