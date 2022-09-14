import React from "react";
import { useFormik } from "formik";
import axios from "axios";

import { useNavigate } from "react-router-dom";

function ResetPasswordPage() {
  let navigate = useNavigate();
  let formik = useFormik({
    initialValues: {
      String: "",
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      let user = await axios.post("https://paasword-reset.herokuapp.com/resetpage", values);
      alert(user.data.message);
      navigate("/");
    },
  });
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div class="mb-3">
          <label for="mail" class="form-label">
            Enter Random String
          </label>
          <input
            type="text"
            class="form-control"
            id="mail"
            name="String"
            onChange={formik.handleChange}
            value={formik.values.String}
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail2" class="form-label">
            Enter Email{" "}
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail2"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail3" class="form-label">
            Enter New Password
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputEmail3"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}

export default ResetPasswordPage;
