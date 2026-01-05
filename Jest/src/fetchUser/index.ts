interface User {
  id: number;
  name: string;
  age: number;
}

export const fakeUser: User = {
  id: 27,
  name: "Alex",
  age: 22,
};

export const fetchUser = (userId: number): User | null | undefined => {
  if (userId === fakeUser.id) {
    return fakeUser;
  } else if (userId !== fakeUser.id && userId <= 90) {
    return null;
  } else {
    return undefined;
  }
};
