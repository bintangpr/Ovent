import React from "react"
import {CategoryRental} from "../components/CategoryHeader"
import ShowCard from "../components/InputCard"
import KonsulInfo from "../components/Konsul"
import Navbar from "../components/navbar"
import NumberPage from "../components/ProductNumberPage"
import ProductSearchBar from "../components/ProductSearchBar"

const Rental = () => {
    return(
        <div>
            <Navbar />
            <CategoryRental />
            <ProductSearchBar />
            <ShowCard />
            <NumberPage />
            <KonsulInfo />
        </div>
    )
}

export default Rental;