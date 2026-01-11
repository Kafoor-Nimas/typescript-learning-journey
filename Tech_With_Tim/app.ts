function getItemLength(name: string): number;
function getItemLength(names: string[]): string;
function getItemLength(nameOrNames: unknown): unknown {
  if (typeof nameOrNames === "string") {
    return nameOrNames.length;
  } else if (Array.isArray(nameOrNames)) {
    return "Hello World!";
  }
  return 0;
}

getItemLength(["", ""]);
