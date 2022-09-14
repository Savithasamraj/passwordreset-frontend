import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Resetpassword() {
   const navigate=useNavigate()
   const formik=useFormik({
    initialValues:{
      email:""
    },
    onSubmit:async (values)=>{
      const mail= await axios.post("https://paasword-reset.herokuapp.com/reset",values)
      console.log(mail)
      alert(mail.data.message)
    }
   })
  return (
    <>
    
    <div class="container padding-bottom-3x mb-2 mt-5">
      <div class="row justify-content-center">
        <div class="col-lg-8 col-md-10">
          <div class="forgot">
          	
          	<h2>Forgot your password?</h2>
          
          </div>	
          
          <form class="card mt-4" onSubmit={formik.handleSubmit}>
            <div class="card-body">
              <div class="form-group">
                <label for="email">Enter your email address</label>
                <input class="form-control" type="email"name="email" id="email" required="" value={formik.values.email} onChange={formik.handleChange}/><small class="form-text text-muted">Enter the email address you used during the registration on BBBootstrap.com. Then we'll email a link to this address.</small>
              </div>
            </div>
            <div class="card-footer">
              <button class="btn btn-success" type="submit">Get New Password</button>
              <button class="btn btn-danger" type="submit" onClick={()=>{navigate("/")}}>Back to Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default Resetpassword