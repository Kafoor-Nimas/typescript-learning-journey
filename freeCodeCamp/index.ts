let myName = "Bob";
const myName2: "Bob" = "Bob";

type user = {
  username: string;
  role: "guest" | "member" | "admin";
};

type UserRole = "guest" | "member" | "admin";

let user2: UserRole = "member";
