import React from "react"
import {CategoryDecoration} from "../components/CategoryHeader"
import ShowCard from "../components/InputCard"
import KonsulInfo from "../components/Konsul"
import Navbar from "../components/navbar"
import NumberPage from "../components/ProductNumberPage"
import ProductSearchBar from "../components/ProductSearchBar"

const Decoration = () => {
    return(
        <div>
            <Navbar />
            <CategoryDecoration />
            <ProductSearchBar />
            <ShowCard />
            <NumberPage />
            <KonsulInfo />
        </div>
    )
}

export default Decoration;