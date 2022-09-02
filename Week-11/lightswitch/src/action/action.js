export const changeLight = (value) => {
  return (dispatch) => {
    dispatch({ type: "change", payload: value });
  };
};
