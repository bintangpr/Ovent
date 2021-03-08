import styled from 'styled-components';
import {Link} from "react-router-dom";
import { SignupForm } from "./Form";
import "./Styles.css";

const SignupComplete= () => {
    return(
        <div className="Form__Container">
            <h1>OVENT</h1>
            <div className="Form__Wrapper">
                <div className="FormLeft__Wrapper">
                    <div className="Form__Circle"></div>
                    <h2>Cari apapun yang kamu butuhkan untuk acaramu</h2>
                </div>
                <div className="Form__Right">
                    <SignupForm />
                    
                </div>
            </div>
        </div>
    )
}

export default SignupComplete;