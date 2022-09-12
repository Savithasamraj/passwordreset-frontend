import axios from 'axios'
import { useFormik } from 'formik'
import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  const formik=useFormik({
    initialValues:{
      email:"",
      password:""
    }, 
    onSubmit: async (values) =>{
 const login= await axios.post("http://localhost:5000",values);
alert(login.data.message)
console.log(values)
    }
  })
  return (
    <form onSubmit={formik.handleSubmit}>
  
  <div class="form-outline mb-4">
    <input type="email" id="form2Example1" class="form-control" onChange={formik.handleChange}  value={formik.values.email}/>
    <label class="form-label" for="form2Example1">Email address</label>
  </div>

  
  <div class="form-outline mb-4">
    <input type="password" id="form2Example2" class="form-control"  onChange={formik.handleChange}  value={formik.values.password} />
    <label class="form-label" for="form2Example2">Password</label>
  </div>

  
  <div class="row mb-4">
    <div class="col d-flex justify-content-center">
      
    </div>

    <div class="col">
     <Link to="/reset">Forgot password?</Link>
      
    </div>
  </div>

 
  <button type="button" class="btn btn-primary btn-block mb-4">Sign in</button>

  
  <div class="text-center">
    <p>Not a member? <Link to="/register">Register</Link></p>
    <p>or sign up with:</p>
    <button type="button" class="btn btn-link btn-floating mx-1">
      <i class="fab fa-facebook-f"></i>
    </button>

    <button type="button" class="btn btn-link btn-floating mx-1">
      <i class="fab fa-google"></i>
    </button>

    <button type="button" class="btn btn-link btn-floating mx-1">
      <i class="fab fa-twitter"></i>
    </button>

    <button type="button" class="btn btn-link btn-floating mx-1">
      <i class="fab fa-github"></i>
    </button>
  </div>
</form>
  )
}

export default Login