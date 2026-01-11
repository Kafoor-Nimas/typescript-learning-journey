function sum(...numbers: number[]) {}

sum(1, 2);
sum();
sum(1, 2, 4, 72, 12);

function sum2(str: string, ...numbers: number[]) {}

sum2("hello", 1, 2);
sum2("john");
sum2("hello", 1, 2, 4, 72, 12);
