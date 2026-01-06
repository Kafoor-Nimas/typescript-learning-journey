type Pizza = {
  id: number;
  name: string;
  price: number;
};

type Order = {
  id: number;
  pizza: Pizza;
  status: "ordered" | "completed";
};

const menu: Pizza[] = [
  { id: 1, name: "Margherita", price: 8 },
  { id: 2, name: "Pepperoni", price: 10 },
  { id: 3, name: "Hawaiian", price: 10 },
  { id: 4, name: "Vegetarian", price: 9 },
];

let cashInRegister = 100;
let nextOrderId = 1;
const orderQueue: Order[] = [];

function addNewPizza(pizzaObj: Pizza) {
  menu.push(pizzaObj);
}

function placeOrder(pizzaName: string) {
  const selectedPizza = menu.find((item) => item.name === pizzaName);
  if (!selectedPizza) {
    console.error(`${pizzaName} is not available on the menu.`);
    return;
  }
  cashInRegister += selectedPizza.price;
  const newOrder: Order = {
    id: nextOrderId++,
    pizza: selectedPizza,
    status: "ordered",
  };
  orderQueue.push(newOrder);
  return newOrder;
}

function completeOrder(orderId: number) {
  const order = orderQueue.find((order) => order.id === orderId);
  if (!order) {
    console.error(`${orderId} was not found in the orderQueue`);
    throw new Error();
  }
  order.status = "completed";
  return order;
}

export function getPizzaDetail(identifier: string | number) {
  if (typeof identifier === "string") {
    return menu.find(
      (pizza) => pizza.name.toLowerCase() === identifier.toLowerCase()
    );
  } else if (typeof identifier === "number") {
    return menu.find((pizza) => pizza.id === identifier);
  } else {
    throw new TypeError(
      "parameter `identifier` must be either a string or a number"
    );
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
