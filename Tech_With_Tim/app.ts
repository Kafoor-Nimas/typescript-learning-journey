let x: any = 1;
x.length;

let y: unknown = 1;
if (typeof y === "number") {
  const result = x + 1;
} else if (typeof x == "string") {
  const result = x.length;
}

// const result = y+1
const result = (y as number) + 1;
