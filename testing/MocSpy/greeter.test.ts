import { greetEveryone } from "../../src/greeter";

// without jest.fn()
describe("without fn", () => {
  it("should calling the callback manual", () => {
    // setup spy
    let callCount = 0;
    const receivedArgs: string[] = [];

    // this is our manual spy
    // it must notes/record how many times called and what argument it received
    const myManualSpy = (greeting: string) => {
      callCount++;
      receivedArgs.push(greeting);
    };

    const names = ["Alice", "Shafira"];
    greetEveryone(names, myManualSpy); // running the function

    // manual interrogation spy
    // we must check our manual variable
    expect(callCount).toBe(2);
    expect(receivedArgs[0]).toBe("Hello, Alice");
    expect(receivedArgs[1]).toBe("Hello, Shafira");
    expect(receivedArgs).toEqual(["Hello, Alice", "Hello, Shafira"]);
  });
});

// with jets.fn()
describe("with fn", () => {
  it("should calling the callback with jest.fn", () => {
    // setup spy
    // only one this line
    // now `mockCallback` is profesional spy
    // this knows how to record everything
    const mockCallback = jest.fn();

    const names = ["Alice", "Shafira"];
    greetEveryone(names, mockCallback);

    // interrogation jest spy
    // we can use special matcher

    // how many times called?
    expect(mockCallback).toHaveBeenCalledTimes(2);
    // what argument at first calling?
    expect(mockCallback).toHaveBeenNthCalledWith(1, "Hello, Alice");
    // what argument at second calling?
    expect(mockCallback).toHaveBeenNthCalledWith(2, "Hello, Shafira");
  });
});
