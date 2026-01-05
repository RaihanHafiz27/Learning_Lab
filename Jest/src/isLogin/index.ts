export const isLogin = (
  username: string | null | undefined,
  password?: string | null
) => {
  return !!(username && password);
};
