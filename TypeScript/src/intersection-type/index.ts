// combine multiple types into one
type Person = {
  name: string;
};

type Employee = {
  employeeId: number;
};

type Staff = Person & Employee;

const staff: Staff = {
  name: "John Doe",
  employeeId: 12,
};

console.log(staff);

// with interface
interface Admin {
  role: "admin" | "user";
}

interface User {
  username: string;
}

type AdminUser = Admin & User;

const user: AdminUser = {
  role: "user",
  username: "Anna Liebert",
};

console.log(user);

// Union with intersection
type Payment = { amount: number } & (
  | { status: "paid" }
  | { status: "Pending" }
);

const paid: Payment = { amount: 100, status: "paid" };
const pending: Payment = { amount: 600, status: "Pending" };
// const invalid : Payment = {amount : 200}

console.log(paid);
console.log(pending);

// Combine props in React
type BaseProps = { id: string };
type ButtonProps = { onClick: () => void };
type IconProps = { icon: string };

type IconButtonProps = BaseProps & ButtonProps & IconProps;

const button: IconButtonProps = {
  id: "btn",
  icon: "Arrow",
  onClick: () => console.log("Hello"),
};

console.log(button);

// API merge result data
interface AccountUsers {
  id: number;
  name: string;
}
interface ProfileUser {
  bio: string;
  avatar: string;
}

type UserProfile = AccountUsers & ProfileUser;

const profile: UserProfile = {
  id: 22,
  name: "Anna Liebert",
  avatar: "micky_mouse.png",
  bio: "Start your day with bismillah",
};

console.log(profile);
