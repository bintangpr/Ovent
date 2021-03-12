
import React,{useState} from 'react'
import {Link} from "react-router-dom";
import Ovent from '../api/Ovent';
import "./Styles.css";




export const LoginForm = () => {

    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [isLoggedin, setLoggedin] = useState(false);
    

  

    return(
        <div className="Form__Box">
            <div className="Form__fillWrapper">
                <div className="Form__Display">
                    <h3>Masuk</h3>
                    <Link className="Form__Daftar__Btn" to="/signup">Daftar</Link>
                 </div>   
            <div className="Form__TextInput">
            <p>Email</p>
            <div>
                <input className="Form__Input" type="email" placeholder=""></input>
            </div>                            
             </div>
             <div className="Form__TextInput">
            <p>Password</p>
            <div>
                <input className="Form__Input" type="password" placeholder=""></input>
            </div>                            
             </div>

             <div className="Form__TextInput">
            <Link className="Form__ForgetPass" to="/forgetPass"><p>Lupa Passord?</p></Link>
            <div>
               <Link to="/home"><button className="Form__Button">Masuk</button></Link> 
            </div>  
            </div>                      

            </div>

        </div>
       
    )
}



export const SignupForm = () => {
    return(
        <div className="Form__Box">
            <div className="Form__fillWrapper">
                <div className="Form__Display_Signup">
                    <h2>Daftar sekarang</h2>
                    <h3>Sudah punya akun? Masuk</h3>
                 </div>   
            <div className="Form__TextInput">
            <p>Email</p>
            <div>
                <input className="Form__Input" type="email" placeholder=""></input>
            </div>                            
             </div>
             <div className="Form__TextInput">
            <p>Password</p>
            <div>
                <input className="Form__Input" type="password" placeholder=""></input>
            </div>                            
             </div>


             <div className="Form__TextInput">
            <p>Ulangi Password</p>
            <div>
                <input className="Form__Input" type="password" placeholder=""></input>
            </div>                            
             </div>

             <div className="Form__TextInput">
           
            <div>
               <Link to="/home"><button className="Form__Button">Daftar</button></Link> 
            </div>  
            </div>                      

            </div>

        </div>
       
    )
}
