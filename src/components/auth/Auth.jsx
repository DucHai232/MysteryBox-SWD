import React, { useState } from "react";
import "./Auth.css";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { login } from "../../redux/actions/auth.action";
import store from "../../store/ReduxStore";
import { message } from "antd";
const Auth = ({ comp, title, route, bgColor, bgCard, bgBtn }) => {
  const navigate = useNavigate();
  const styleContainer = () => {
    return {
      backgroundColor: bgColor,
    };
  };

  const styleForm = () => {
    return {
      backgroundColor: bgCard,
    };
  };

  const styleBtn = () => {
    return {
      backgroundColor: bgBtn,
    };
  };

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      username: "",
      fullName: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Vui lòng nhập username"),
      fullName:
        comp === "register"
          ? Yup.string().required("Vui lòng nhập fullname")
          : Yup.string(),
      password: Yup.string().required("Vui lòng nhập password"),
      confirmPassword:
        comp === "register"
          ? Yup.string()
              .oneOf([Yup.ref("password"), null], "Passwords must match")
              .required("Vui lòng nhập confirm password")
          : Yup.string(),
    }),
    onSubmit: async (values) => {
      try {
        await dispatch(login(values));
        const error = store.getState().authReducer.error;
        if (error) {
          return message.error(error);
        }
        formik.handleReset();
        message.success("Đăng nhập thành công");
        navigate("/");
      } catch (error) {
        console.log(error.message);
      }
    },
  });

  const handleLogin = () => {
    window.open("http://localhost:8080/api/auth/google", "_self");
  };

  return (
    <div className="register-container" style={styleContainer()}>
      <img
        src="https://s3-alpha-sig.figma.com/img/9d59/a538/d0e4aa0ccd8beec0464a62d43a20ef9c?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=m5ImzecNCkCt7Ufe5IsZbq2zxtwuIUXNJvlFmGk2P2zxmlbjWzx4ZiUVmQq3j6TiDjo9PqbdHy6Tt~8yCi8ceCgw9tnyehq-pZ8D2vBKFZBZxV9g5Q3kqo4JDeW4ta4Sxaq62e6MCWWTRLUJqZ5j4uSRMdcUkwzjvE7a0J9RPnl0zA754b9mFfmq5vLcDqwM1bKPhUWHfsKXNJXhy4s73nGoQ7D0mgAxgcCSDZN~jA1ClcwmoVXWgXa5KEXiEgSjshdvxEZ28hSuWtD0IX7ZcBde80i8Z57LCVpw7a5dEQWEXWsW-DjOc4J0x2jVOuSf3yNFXWg1oNydZuSSSmianQ__"
        className="image"
      />
      <div className="form-register" style={styleForm()}>
        <h1 className="title">{title}</h1>
        <form className="form-input" onSubmit={formik.handleSubmit}>
          <label className="label-title">Username</label>
          <input
            name="username"
            value={formik.values.username}
            placeholder="Enter your username"
            className="input"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          {formik.errors.username && formik.touched.username && (
            <p className="message-error">{formik.errors.username}</p>
          )}

          {comp === "register" && (
            <>
              <label className="label-title">Fullname</label>
              <input
                name="fullName"
                value={formik.values.fullName}
                placeholder="Enter your fullname"
                className="input"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
              {formik.errors.fullName && formik.touched.fullName && (
                <p className="message-error">{formik.errors.fullName}</p>
              )}
            </>
          )}

          <label className="label-title">Password</label>
          <input
            name="password"
            value={formik.values.password}
            placeholder="Enter your password"
            type="password"
            className="input"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          {formik.errors.password && formik.touched.password && (
            <p className="message-error">{formik.errors.password}</p>
          )}

          {comp === "register" && (
            <>
              <label className="label-title">Confirm password</label>
              <input
                name="confirmPassword"
                value={formik.values.confirmPassword}
                placeholder="Confirm password"
                type="password"
                className="input"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
              {formik.errors.confirmPassword &&
                formik.touched.confirmPassword && (
                  <p className="message-error">
                    {formik.errors.confirmPassword}
                  </p>
                )}
            </>
          )}

          <button type="submit" className="btn" style={styleBtn()}>
            {comp === "login" ? "Sign In" : "Sign Up"}
          </button>

          <div className="text">
            <p className="des">
              {comp === "login"
                ? "Don't have an account?"
                : "Already have an account?"}
            </p>
            <p className="login" onClick={() => navigate(`/${route}`)}>
              {comp === "login" ? "Register Now!" : "Sign in!"}
            </p>
          </div>
        </form>
        {comp === "login" && (
          <div className="login-other">
            <button onClick={handleLogin}>Continue with Google</button>
            <button>Continue with Facebook</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Auth;
