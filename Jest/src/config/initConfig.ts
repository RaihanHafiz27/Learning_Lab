export const initConfig = (username: string) => {
  const data = {
    theme: "dark",
    user: {
      name: username,
      lastLogin: new Date(),
    },
    featureFlags: {
      beta: false,
    },
  };

  return { data };
};
