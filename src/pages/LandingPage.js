import React,{useState,useEffect} from "react";
import Navbar from "../components/navbar";
import MainContent from "../components/SlicingScreen";
import styled from "styled-components";


const LandingPage= () => {
    return(
    <div>
        <Navbar />
        <MainContent /> 
    </div>
         
    )
}

export default LandingPage;