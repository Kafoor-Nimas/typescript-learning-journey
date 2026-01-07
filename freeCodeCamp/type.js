"use strict";
let person1 = {
    name: "Joe",
    age: 42,
    isStudent: true,
};
let person2 = {
    name: "Jill",
    age: 66,
    isStudent: false,
    address: {
        street: "123 Main",
        city: "Town",
        country: "India",
    },
};
function displayInfo(person) {
    var _a;
    console.log(`${person.name} lives at ${(_a = person.address) === null || _a === void 0 ? void 0 : _a.street}`);
}
displayInfo(person1);
