"use strict";
let myName = "Bob";
const myName2 = "Bob";
let user2 = "member";
const users = [
    { id: 1, username: "john_doe", role: "member" },
    { id: 2, username: "jane_smith", role: "contributor" },
    { id: 3, username: "alice_jones", role: "admin" },
    { id: 4, username: "charlie_brown", role: "member" },
];
function updateUser(id, updates) {
    let foundUser = users.find((user) => user.id === id);
    if (!foundUser) {
        console.log("User not found");
        return;
    }
    Object.assign(foundUser, updates);
}
//example updates:
updateUser(1, { username: "john_cena" });
updateUser(4, { role: "contributor" });
