import styled from 'styled-components';
import {Link, link} from "react-router-dom";
import "./Styles.css";

const Navbar =()=> {

    return(
        <div className="Nav__Wrapper">
            <div className="Nav__Container">
               <Link className="Nav__Noline" to="/Home"><h1 className="Nav__Logo">OVENT</h1></Link>
                <ul>
                    <li><Link className="Nav__Noline" to="/Contacs">CONTACS</Link></li>
                    <li><Link className="Nav__Noline" to="/AboutUs">ABOUT US</Link></li>
                </ul>
                <div>
                    <Link className="Nav__Link" to="/login">LOGIN</Link> 
                    <Link className="Nav_Link" to="/Signup"><button className="Nav__Btn">Sign Up</button></Link>
                </div>
            </div>
        </div> 
    )
}

export default Navbar