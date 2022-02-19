import { Formik } from "formik";
import React from "react";
import { object, string } from "yup";
import { User } from "../../../../shared/services/AuthProvider";
import "./LoginForm.css";

interface LoginFormProps {
  onLogin: (user: User) => void;
}

const LoginForm = ({ onLogin }: LoginFormProps) => {
  const loginSchema = object({
    username: string().required("Please Enter Username."),
    password: string().required("Please Enter Password."),
  });

  const intialValue: User = {
    username: "",
    password: "",
  };

  return (
    <div className="form-container">
      <div className="form-header">Log In</div>
      <Formik
        initialValues={intialValue}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(false);
          onLogin(values);
        }}
        validationSchema={loginSchema}
      >
        {({
          values,
          errors,
          touched,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <div className="form-control">
              <div>
                <label htmlFor="username">Username</label>
              </div>
              <div>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={values.username}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              <div className="error">
                {errors.username && touched.username && (
                  <span>{errors.username}</span>
                )}
              </div>
            </div>
            <div className="form-control">
              <div>
                <label htmlFor="password">Password</label>
              </div>
              <div>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              <div className="error">
                {errors.password && touched.password && (
                  <span>{errors.password}</span>
                )}
              </div>
            </div>
            <div className="form-control">
              <button type="submit" disabled={isSubmitting}>
                Login
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
