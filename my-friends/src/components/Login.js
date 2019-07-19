import React, { useState, useEffect } from 'react'
import { Form, Field, withFormik } from "formik"
import * as Yup from "yup"
import {axiosAuth} from "./axiosAuth"
import { redirect } from "react-router-dom"
import { bindActionCreators } from 'redux';

function Login( touched, errors, values, props ) {
//   const [credentials, setCredentials] = useState({}); 

//   handleChange = e => {
//     setCredentials: {
//       ...credentials,
//       [e.target.name]: e.target.value,
//     }
// }

    return (
      <Form className="form">
         {/* {!isSubmitting && "Im loading"} */}
        <div className="form-group">
          <label className="label">
            {touched.username && <p>{errors.username}</p>}
          <Field
            className="input"
            name="username"
            type="text"
            autoComplete="off"
          />
          </label>
        </div>
        <div className="form-group">
          <label className="label">Password</label>
          <Field
            className="input"
            name="password"
            type="password"
            autoComplete="off"
          />
          <p>{touched.password && errors.password}</p>
        </div>
        <button type="submit">Submit </button>
      </Form>
    )
  }
  


export default withFormik({
  mapPropsToValues() {
    return {
      username: "",
      password: "",
    };
  },
  validationSchema: Yup.object().shape({
    username: Yup.string()
      .min(4, "Not enough letters!")
      .max(15, "Too Many letters!")
      .required(),
    password: Yup.string()
      .min(4, "Not enough letterss!")
      .max(15, "Too many letters!")
      .required("Password is required! >.<"),
  }),
  handleSubmit(values, formikBag) {
    const url="/login";
    console.log(values)
    return (
      axiosAuth()
      .post(url, values)
      .then(response => {
        console.log(response)
        localStorage.setItem("token", response.data.payload);
        formikBag.resetForm()
        formikBag.props.history.push("/friendsList");
      })
        // setIsLoading(false)
      .catch(error => {
        console.log(error.response.data)
      })
    )

  }
})(Login)

