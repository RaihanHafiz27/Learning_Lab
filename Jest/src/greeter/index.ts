export const greetEveryone = (
  names: string[],
  callback: (greeting: string) => void
) => {
  for (const name of names) {
    callback(`Hello, ${name}`);
  }
};
