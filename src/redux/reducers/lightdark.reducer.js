const lightdarkReducer = (
  state = {
    isLightTheme: true,
    light: {
      backgroundColor: "black",
      color: "white",
      transition: "0.4s",
    },
    dark: {
      backgroundColor: "white",
      color: "black",
      transition: "0.4s",
    },
  },
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case "LIGHT_DARK":
      return { ...state, isLightTheme: payload };
    default:
      return { ...state };
  }
};

export default lightdarkReducer;
