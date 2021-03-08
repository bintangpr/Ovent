import React,{useState,useEffect} from "react";
import Navbar from "../components/navbar";
import MainContent, {ContainerSlicing,Left,Text1,Text2,Button, Btn} from "../components/SlicingScreen";
import styled from "styled-components";
import SearchBar from "../components/SearchBar";
import HomeSection from "../components/HomeMain";
import Categories from "../components/categories";
import PopularHome from "../components/Popular_Home";
import KonsulInfo from "../components/Konsul";
import KnowMore from "../components/KnowMore";


const Home = () => {
    return(
        <div>
        <Navbar />
        <HomeSection />
        <SearchBar />
        <Categories />
        <PopularHome />
        <KonsulInfo />
        <KnowMore />
        </div>   
    )
    
}

export default Home;