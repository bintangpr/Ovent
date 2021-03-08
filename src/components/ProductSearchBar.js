import {Link} from "react-router-dom";
import "./Styles.css";

const ProductSearchBar = () => {
    return(
        <div className="Searchbar__flex">
            <div className="Searchbar__Product__Container">
            

            <div className="Searchbar__Product__Wrapper">
                <p className="Searchbar__Product__TeksAtas">Lokasi Kamu</p>
                <div>
                    <input className="Searchbar__Product__Input" type="text" placeholder=""></input>
                </div>
            </div>
            <div className="Searchbar__Product__Wrapper">
            <p className="Searchbar__Product__TeksAtas">Barang yang kamu cari</p>
            <div>
                <input className="Searchbar__Product__Input" type="text" placeholder=""></input>


            </div>
            </div>

            <Link><button className="Searchbar__btn">Cari Barang</button></Link>


            

            </div>
        </div>
        
    )
}

export default ProductSearchBar;