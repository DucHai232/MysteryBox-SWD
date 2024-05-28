const authReducer = (
  state = { auth: [], loading: false, error: "" },
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case "AUTH_START":
      return { ...state, loading: true };
    case "AUTH_LOGIN_SUCCESS":
      localStorage.setItem("user", JSON.stringify(payload));
      return { ...state, auth: payload, loading: false, error: "" };
    case "AUTH_FAIL":
      return { ...state, loading: false, error: payload };
    case "AUTH_LOGOUT":
      localStorage.removeItem("user");
      return { ...state, auth: [], loading: false, error: "" };
    default:
      return { ...state };
  }
};

export default authReducer;
