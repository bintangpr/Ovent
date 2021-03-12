import { Link } from 'react-router-dom';
import styled from 'styled-components';
import "./Styles.css";

const Categories = () =>{
    return(
        <div>
        <div className="Title__Container">
            <h1>Categories</h1>
            <h2>Lorem ipsum dolor si amet</h2>
        </div>
        <div className="Categories__Card__Container">
           <Link class="Link__Clear" to="/catering">
            <div className="categories__Card__Catering">
                <h1 className="categories_card__text">Catering Category</h1>
            </div>
           </Link> 
           <Link class="Link__Clear" to="/decoration">
            <div className="categories__Card__Decoration">
                <h1 className="categories_card__text">Decoration Category</h1>
            </div>
            </Link>
            <Link class="Link__Clear" to="/rental">
            <div className="categories__Card__Rental">
                <h1 className="categories_card__text">Rental Category</h1>
            </div>
            </Link>
        </div>
            
        </div>
        
    )
}

export default Categories;

