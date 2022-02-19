import { Formik } from "formik";
import React from "react";
import { number, object, ref, string } from "yup";
import { SignupUser } from "../../../../shared/services/AuthProvider";
import "./SignUpForm.css";

interface SignUpFormProps {
  onSignup: (user: SignupUser) => void;
  errorMessage?: string;
}

const SingUpForm = ({ onSignup, errorMessage }: SignUpFormProps) => {
  const signupSchema = object({
    firstName: string()
      .required("Please enter firstname")
      .max(30, "Firstname must be less than 30 characters")
      .matches(/^[a-zA-Z]+$/, "Firstname must be only contains characters"),
    lastName: string()
      .required("Please enter lastname")
      .max(30, "Lastname must be less than 30 characters")
      .matches(/^[a-zA-Z]+$/, "Lastname must be only contains characters"),
    username: string()
      .required("Please enter username")
      .max(30, "Username must be less than 30 characters")
      .matches(
        /^[a-zA-Z0-9_-]+$/,
        "Username can only contains characters, numbers, hyphen and underscore"
      ),
    password: string()
      .required("Please enter password")
      .max(60, "Password must be less than 60 characters")
      .min(12, "Password must be greater than 12 characters"),
    confirmPassword: string()
      .required("Please enter confirm password")
      .max(60, "Confirm Password must be less than 60 characters")
      .min(12, "Confirm Password must be greater than 12 characters")
      .oneOf(
        [ref("password"), null],
        "Password and Confirm Password must match"
      ),
    age: number()
      .required("Please enter age")
      .positive("Age must be positive number")
      .integer("Age must be integer number")
      .min(18, "Age must be greater than 18")
      .max(120, "Age must be less than 120"),
    gender: string().required("Please select gender"),
    email: string().required("Please enter email").email("Email is invalid"),
    mobile: string()
      .required("Please enter mobile")
      .min(10, "Mobile is invalid")
      .max(10, "Mobile is invalid")
      .matches(/^[0-9]+$/, "Mobile is invalid"),
  });

  const intialValue: SignupUser = {
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    confirmPassword: "",
    age: 18,
    gender: "male",
    email: "",
    mobile: "",
  };

  return (
    <div className="form-container">
      <div className="form-header">Sign up</div>
      <Formik
        initialValues={intialValue}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(false);
          onSignup(values);
        }}
        validationSchema={signupSchema}
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
                <label htmlFor="firstName">Firstname</label>
              </div>
              <div>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={values.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              <div className="error">
                {errors.firstName && touched.firstName && (
                  <span>{errors.firstName}</span>
                )}
              </div>
            </div>
            <div className="form-control">
              <div>
                <label htmlFor="lastName">Lastname</label>
              </div>
              <div>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={values.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              <div className="error">
                {errors.lastName && touched.lastName && (
                  <span>{errors.lastName}</span>
                )}
              </div>
            </div>
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
              <div>
                <label htmlFor="confirmPassword">Confirm Password</label>
              </div>
              <div>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={values.confirmPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              <div className="error">
                {errors.confirmPassword && touched.confirmPassword && (
                  <span>{errors.confirmPassword}</span>
                )}
              </div>
            </div>
            <div className="form-control">
              <div>
                <label htmlFor="age">Age</label>
              </div>
              <div>
                <input
                  type="text"
                  id="age"
                  name="age"
                  value={values.age}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              <div className="error">
                {errors.age && touched.age && <span>{errors.age}</span>}
              </div>
            </div>
            <div className="form-control">
              <div>
                <label htmlFor="gender">Gender</label>
              </div>
              <div>
                <select
                  id="gender"
                  name="gender"
                  value={values.gender}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <div className="error">
                {errors.gender && touched.gender && (
                  <span>{errors.gender}</span>
                )}
              </div>
            </div>
            <div className="form-control">
              <div>
                <label htmlFor="email">Email</label>
              </div>
              <div>
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              <div className="error">
                {errors.email && touched.email && <span>{errors.email}</span>}
              </div>
            </div>
            <div className="form-control">
              <div>
                <label htmlFor="mobile">Mobile No</label>
              </div>
              <div>
                <input
                  type="text"
                  id="mobile"
                  name="mobile"
                  value={values.mobile}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              <div className="error">
                {errors.mobile && touched.mobile && (
                  <span>{errors.mobile}</span>
                )}
              </div>
            </div>
            <div className="form-control">
              <button type="submit" disabled={isSubmitting}>
                Login
              </button>
            </div>
            <div className="form-control error">
              {errorMessage && <span>{errorMessage}</span>}
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default SingUpForm;
