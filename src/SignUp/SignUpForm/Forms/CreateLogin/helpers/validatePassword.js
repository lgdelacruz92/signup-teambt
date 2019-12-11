export const validatePassword = password => {
  if (password === "") return true;
  return password.length > 4;
};
