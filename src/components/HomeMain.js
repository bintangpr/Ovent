import styled from 'styled-components';
import {Link, link} from "react-router-dom";
import "./Styles.css";



const HomeSection = () =>{
    return(
        <div className="Main__Container">
            <div className="Main__Left">
                <h1 className="Main__Judul">Discount up to 50% now</h1>
                <h2 className="Main_Subjudul">Catering mami lagi ada promo diskon 50% khusus untuk hari ini, buruann!!</h2>
                <a className="Main_Link" href="/Home"> <button className="Main__Btn" >SHOP NOW</button></a>
            </div>
        </div>
    )
}

export default HomeSection;
