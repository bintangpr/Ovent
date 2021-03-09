import React from "react"
import {CategoryCatering} from "../components/CategoryHeader"
import ShowCard from "../components/InputCard"
import KonsulInfo from "../components/Konsul"
import Navbar from "../components/navbar"
import NumberPage from "../components/ProductNumberPage"
import ProductSearchBar from "../components/ProductSearchBar"

const Catering = () => {
    return(
        <div>
            <Navbar />
            <CategoryCatering />
            <ProductSearchBar />
            <ShowCard />
            <NumberPage />
            <KonsulInfo />
        </div>
    )
}

export default Catering;