import styled from 'styled-components';
import react from 'react'
import {Link} from 'react-router-dom';
import "./Styles.css";


const CategorySmall = () => {
    return(
        <div className="Category__Small__Wrapper">
            <div className="Category__Small__Container">
                <Link to="/catering"><button> Kembali ke keranjang </button></Link>
            </div>
        </div>
    )
}

export default CategorySmall;