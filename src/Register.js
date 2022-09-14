import React from "react";
import { useFormik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";



function Register() {
  let navigate = useNavigate()
  let formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    onSubmit: async (values) => {

      try {
        const register =await axios.post("https://paasword-reset.herokuapp.com/register", values);
        alert(register.data.message);
        navigate('/')
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <div className="container">
      <div className="col">
        <div className="row">
          <form onSubmit={formik.handleSubmit}>
            <div class="mb-3">
              <label for="username" class="form-label">
                UserName
              </label>
              <input
                type="text"
                class="form-control"
                id="username"
                name="username"
                onChange={formik.handleChange}
                value={formik.values.username}
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Email address
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Password
              </label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                name="password"
                onChange={formik.handleChange}
                value={formik.values.password}
              />
            </div>

            <button type="submit" class="btn btn-primary">
             
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;