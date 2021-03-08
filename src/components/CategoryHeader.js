import {Link} from "react-router-dom";
import "./Styles.css";

const CategoryName = [
    {
        id:1,
        NamaCategory:"Popular Product",
    },
    {
        id:2,
        NamaCategory:"Catering Category",
    },
    {
        id:3,
        NamaCategory:"Decoration Category",
    },
    {
        id:4,
        NamaCategory:"Rental Category",
    },
    
]

export const CategoryPopular = () => {
    return(
        <div className="Category__Header__Container">
            <div classname="Category__Name__Box">
            <h1 className="Category__Name__Header">Popular Product</h1>
            </div>
            
        </div>
    )
}


export const CategoryCatering = () => {
    return(
        <div className="Category__Header__Container">
            <div classname="Category__Name__Box">
            <h1 className="Category__Name__Header">Catering Category</h1>
            </div>
            
        </div>
    )
}

export const CategoryDecoration = () => {
    return(
        <div className="Category__Header__Container">
            <div classname="Category__Name__Box">
            <h1 className="Category__Name__Header">Decoration Category</h1>
            </div>
            
        </div>
    )
}

export const CategoryRental = () => {
    return(
        <div className="Category__Header__Container">
            <div classname="Category__Name__Box">
            <h1 className="Category__Name__Header">Rental Category</h1>
            </div>
            
        </div>
    )
}