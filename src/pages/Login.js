import React from "react";
import{auth,provider} from'../firebase-con';
import{signInWithPopup}from'firebase/auth';
import{ useNavigate}from'react-router-dom';
import "./Login.css"

function Login({setIsAuth}){
    let navigate=useNavigate();
    const signInWithGoogle= ()=>{
        signInWithPopup(auth,provider).then((result)=>{
            localStorage.setItem("isAuth",true);
            setIsAuth=true;
            navigate("/")
        });
    };

    return (
        <div className="log">
            <div className="container">
    <div className="sign-in"><p>Sign in with google</p>
    <button className="log-in-buuton" onClick={signInWithGoogle}>Sign-in</button>
    </div>
    </div>
    </div>
    );
}
export default Login;