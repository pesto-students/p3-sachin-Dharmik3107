export const changeLight = (booleanValue) => {
  return (dispatch) => {
    dispatch({ type: "CHANGE_THEME", payload: booleanValue });
  };
};
