interface Person {
  name: string;
  age: number;
  height?: number;
}
interface Employee extends Person {
  employeeId: number;
}

const worker: Employee = {
  name: "David",
  age: 23,
  height: 175,
  employeeId: 1692,
};

interface Manager extends Employee,Person {
  employees:Person[]
}

const manager:Manager ={
  
}
