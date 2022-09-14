import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate=useNavigate()
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      try{
        const login = await axios.post("https://paasword-reset.herokuapp.com", values);
        localStorage.setItem("react_app_token", login.data.token);
  
        alert(login.data.message);
        console.log(values);
        if(login.data.message === 'successfully logged in')
      {
        navigate('/dashboard')
      }
      }
      catch(error){
        console.log(error)
      }
    },
  });
  return (
    <>
      <div className="container">
        <div className="col">
          <div className="row">
            <form onSubmit={formik.handleSubmit}>
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

              <div>
                <p>not a member?</p>
                <Link to={"/register"}>Register</Link>
                <div>
                  <Link to={"/reset"}>forget password</Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
