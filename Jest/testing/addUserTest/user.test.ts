import { addUsers, addUsersObject, User } from "../../src/addUser";

describe("addUser Function", () => {
  it("should add a new user ID to the list", () => {
    const existingUsers = ["user-001", "user-002"];
    const newUser = "user-003";
    const updateUsers = addUsers(existingUsers, newUser);

    // expect(existingUsers).toContain(newUser);
    expect(updateUsers).toContain(newUser);
  });
});

describe("addUsersObject Function", () => {
  it("should add a new user object to the list", () => {
    const userExist: User[] = [
      {
        id: 1,
        name: "John Doe",
      },
    ];
    const userNew: User = { id: 2, name: "Kanna" };
    const update = addUsersObject(userExist, userNew);

    const expectedUserInArray = { id: 2, name: "Kanna" };

    expect(update).toContainEqual(expectedUserInArray);
    // expect(update).toContain(expectedUserInArray); // fail
  });
});
