export const addUsers = (existingUsers: string[], newUser: string) => {
  return [...existingUsers, newUser];
};

export interface User {
  id: number;
  name: string;
}

export const addUsersObject = (existingUsers: User[], newUser: User) => {
  return [...existingUsers, newUser];
};
