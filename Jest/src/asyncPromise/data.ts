export interface User {
  id: number;
  name: string;
}

export const fetchUser = (id: number): Promise<User> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id === 1) {
        resolve({ id: 1, name: "John" });
      } else {
        reject(new Error("user not found"));
      }
    }, 200);
  });
};
