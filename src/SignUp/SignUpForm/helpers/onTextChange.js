export const onTextChange = ({ text, validation, setError }) => {
  if (!validation(text)) {
    setError(true);
  } else {
    setError(false);
  }
};
