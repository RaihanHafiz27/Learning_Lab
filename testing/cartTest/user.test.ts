// Before and After All
type User = {
  id: number;
  name: string;
  email: string;
  permissions: string[];
};
let user: User | null;

// ===== SETUP =====
// only run once before testing
beforeAll(() => {
  console.log("===> BEFORE ALL : create data user...");

  user = {
    id: 29,
    name: "John Doe",
    email: "john@example.com",
    permissions: ["read", "write", "comment"],
  };

  console.log(user);
});

// only run once after testing
afterAll(() => {
  console.log("===> AFTER ALL : remove data user...");
  user = null;
  console.log(`user : ${user}`);
});

// ===== TEST =====
describe("Test with data user", () => {
  it("should have with correct name", () => {
    console.log("-> Running test 1 (Name)");
    expect(user?.name).toBe("John Doe");
    console.log(`name : ${user?.name}`);
  });

  it("should have with correct permissions", () => {
    console.log("-> Running test 2 (Permissions)");
    expect(user?.permissions).toContain("write");
    expect(user?.permissions).toHaveLength(3);
    console.log(`permissions : ${user?.permissions}`);
  });

  it("should have with valid email", () => {
    console.log("-> Running test 3 (Email)");
    expect(user?.email).toMatch(/@example.com/);
  });
});
