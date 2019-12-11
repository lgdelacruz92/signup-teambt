export const validateGeneral = value => {
  if (value === "") return true;
  return value.length > 0;
};
