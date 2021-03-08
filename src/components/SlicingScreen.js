import styled from 'styled-components';
import {Link, link} from "react-router-dom";
import "./Styles.css";



const MainContent = () =>{
    return(
        <div className="Main__Container">
            <div className="Main__Left">
                <h1 className="Main__Judul">Build Your Event More Easier</h1>
                <h2 className="Main_Subjudul">Browse through some trusted vendor to brighten your day</h2>
                <a className="Main_Link" href="/Home"> <button className="Main__Btn" >START NOW</button></a>
            </div>
        </div>
    )
}

export default MainContent;


