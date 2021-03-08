import React from "react"
import {CategoryPopular} from "../components/CategoryHeader"
import ShowCard from "../components/InputCard"
import KonsulInfo from "../components/Konsul"
import Navbar from "../components/navbar"
import NumberPage from "../components/ProductNumberPage"
import ProductSearchBar from "../components/ProductSearchBar"

const Popular = () => {
    return(
        <div>
            <Navbar />
            <CategoryPopular />
            <ProductSearchBar />
            <ShowCard />
            <NumberPage />
            <KonsulInfo />
        </div>
    )
}

export default Popular;