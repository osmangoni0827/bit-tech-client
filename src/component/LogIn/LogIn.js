import React, { useContext } from 'react';
import './LogIn.css'
import { useForm } from 'react-hook-form';
import { loggedInContext } from '../../App';
import firebase from "firebase/app";
import "firebase/auth";
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import firebaseConfig from '../../firebase.config';

if(firebase.apps.length===0){
    firebase.initializeApp(firebaseConfig);
}
else
{
    firebase.app();
}
const LogIn = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const[loggedInUser,setLoggedInUser]=useContext(loggedInContext);
    const  history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    if(loggedInUser.email){
        sessionStorage.setItem('email',loggedInUser.email)
        sessionStorage.setItem('password',loggedInUser.password)
    }
    const onSubmit = data => {
        setLoggedInUser(data);
        SignInWithEmailPassword(data.email,data.password)
        
    };

    const SignInWithEmailPassword=(email,password)=>{

      firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    const Newuser={
        name:userCredential.user.displayName,
        email:userCredential.user.email,
        password:password,
        errors:''
    };
    storeAuthToken()
    setLoggedInUser(Newuser);
    history.replace(from);
    // ...
  })
  .catch((error) => {
    const errorMessage = error.message;
    const Newuser={
        error:errorMessage,
        success:''
    }
    setLoggedInUser(Newuser);
    // ..
  }); 
}
const HandleSigInWithGoogle=()=>{
   const provider = new firebase.auth.GoogleAuthProvider();

   firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    const Newuser={
        name:result.user.displayName,
        email:result.user.email,
        errors:''
    };
    setLoggedInUser(Newuser);
    storeAuthToken()
    // ...
  }).catch((error) => {
    const errorMessage = error.message;
    const Newuser={
        error:errorMessage,
        success:''
    }
    setLoggedInUser(Newuser);
    // ...
  });
}

const storeAuthToken = () => {
    firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
      .then(function (idToken) {
        sessionStorage.setItem('token', idToken);
        
        history.replace(from);
      }).catch(function (error) {
        // Handle error
      });
  }
    return (

        <main className='container'>
            <div className=' d-flex justify-content-center align-items-center'>
                <div className='loginStyle shadow text-center'>
                <div className='loginImage'>
                        <img src='https://i.ibb.co/0mP8GZv/1j-oj-FVDOMk-X9-Wytexe43-D6khv-WAq-RFNk-B3-Iw-Xs1-M3-EMo-AJtli-Ipgv-Bq9-U.png'></img>
                    </div>
                    <form className='mt-1 mb-2' onSubmit={handleSubmit(onSubmit)}>
            
                        <input className='form-control' type='email' name='email' placeholder='Email'{...register("email", { required: true })}/>
                        <p> {errors?.email && <span>This field is required</span>}</p>
                        
                        <input className='form-control' type='password' name='password' placeholder='Password' {...register("password", { required: true })} />
                        <p> {errors?.password && <span>This field is required</span>}</p>
                        <button type='submit' className='mb-2 btn btn-primary'>Login</button>
                        <p>Have not your Account? please <Link to='/signup'>Sign Up</Link></p>
                    </form>

                    <h6>Or</h6>
                    <div>
                    <button type='submit' onClick={HandleSigInWithGoogle} className='mb-3 btn btn-secondary'>Sign In With Google</button>
                    </div>
                    {
                            loggedInUser.error&&<p className='text-warning'>{loggedInUser.error}</p>
                    }
                    {
                        loggedInUser.success&&<p style={{color:'green'}}>Login Successfully</p>
                    }
                </div>
            </div>
        </main>
    );
};

export default LogIn;