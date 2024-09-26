export const sum = (a: number, b: number): number => {
  if (typeof a === "string" || typeof b === "string") {
    throw new Error("One or more values are not numbers");
  }

  return a + b;
};
