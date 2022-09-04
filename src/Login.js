import React from "react";
import './Login.css'
import { Link , useNavigate} from 'react-router-dom'
import { useState } from "react";
import { auth } from './firebase'
function Login(){
  const navigate = useNavigate();
  const [email, setEmail] =  useState('')
  const [password, setPassword] =  useState('')

const SignIn = e => {
   e.preventDefault();

   //some fancy firebase login
   auth.signInWithEmailAndPassword(email,password)
   .then(auth => {
       navigate('/')
   })
   .catch(error => (error.message))
}

const Register = e => {
    e.preventDefault();

    //some fancy firebase Signup
     auth.createUserWithEmailAndPassword(email,password)
     .then((auth) => {
         //successfully created a new user with email and pass
         console.log(auth); 
         if(auth) {
            navigate('/')
         }
     }
     )
     .catch(error => alert(error.message))
    }

    return(
        <div className="login">
        <Link to ='/'>
         <img className="login__logo"
         src="https://whgmgold.com/assets/images/blogs/2020/ama2.png" alt='' />
        </Link>
        <div className="login__container">
         <h1>Sign In</h1>
         <form>
             <h5>Email</h5>
             <input type ='text'  value={email} onChange=
             {e => setEmail(e.target.value)}
             />
             <h5>Password</h5>
             <input type ='password' value={password} onChange=
             {e => setPassword(e.target.value)}
              />
             <button type="submit" className="Login__button" onClick={SignIn}>Sign In</button>
             <button className="Signup__button"  onClick={Register}>SignUp</button>
             <p>
                 By signing-in you agree to Amazon's Conditions of Use & Sale.
                 Please see our Privacy Notice,our Cookies Notice and our Interest-Based Ads Notice
             </p>
             
         </form>
        </div>
        </div>

    )
}
export default Login;