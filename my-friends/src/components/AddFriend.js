import React from "react"
import { Form, Field, withFormik } from "formik"
import {axiosAuth} from "./axiosAuth"

const AddFriend = (props, touched, errors) => {
  console.log("props", props)
  return (
    <Form className="form">
       {/* {!isSubmitting && "Im loading"} */}
      <div className="form-group">
        <label className="label">
          {/* {touched.username && <p>{errors.username}</p>} */}
        <Field
          className="input"
          name="name"
          type="text"
          autoComplete="off"
        />
        Name
        </label>
      </div>
      <div className="form-group">
        <label className="label">Age</label>
        <Field
          className="input"
          name="age"
          type="number"
          autoComplete="off"
          default="22"
        />
        {/* <p>{touched.age && errors.age}</p> */}
      </div>
      <div className="form-group">
        <label className="label">
          {/* {touched.email && <p>{errors.email}</p>} */}
        <Field
          className="input"
          name="email"
          type="email"
          autoComplete="off"
        />
        Email
        </label>
      </div>
      <button type="submit">Submit </button>
    </Form>
  )
}



export default withFormik({
  mapPropsToValues() {
    return {
      name: "",
      age: "",
      email: "",
    };
  },

  handleSubmit(values, formikBag, actions) {
    const url="/friends";
    console.log("formikBag", formikBag)
    console.log("actions", actions)
    console.log("value", values)

    return (
      axiosAuth()
      .post(url, values)
      .then(response => {
        console.log(response)
        formikBag.props.setFriends(response.data)
      })
      // .then(() => actions.resetForm())
      .catch(error => {
        console.log(error)
      })
    )
  }
})(AddFriend)



