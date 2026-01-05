// import { playFlipCoin } from "../../src/game";

import { playFlipCoin } from "../../src/game";

describe("playFlipCoin", () => {
  // without spyOn
  it("should win if random number > 0.5", () => {
    // the problem : we don't know the result Math.random() later.
    // this test will "flaky" (sometimes pass and sometimes fail).
    const result = playFlipCoin();
    expect(result).toBe("Winner!");
  });
  // with spyOn
  it("should win if the random result is 0.6", () => {
    // 1. setup spy on the object "Math" in METHOD "random"
    const mathSpy = jest.spyOn(Math, "random");

    // 2. change (mocking) behavior
    // we force it return 0.6
    mathSpy.mockReturnValue(0.6);

    // 3. running func
    const result = playFlipCoin();

    // 4. check the return
    expect(result).toBe("Winner!");

    // 5. check wether spy is called
    expect(mathSpy).toHaveBeenCalled();

    // IMPORTANT : return the original function (restore)
    // so that other test are not affected by our manipulation
    mathSpy.mockRestore();
  });
});
