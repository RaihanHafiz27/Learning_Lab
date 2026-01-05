export const inputUser = (name: string): string => {
  if (!name || typeof name !== "string") {
    throw new Error("Name is required and must be a string");
  }
  return `Hello ${name}`;
};
