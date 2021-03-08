import styled from 'styled-components';
import {Link, link} from "react-router-dom";
import "./Styles.css";




const SearchBar = () => {
    return (
        <div className="Searchbar__Container">
            <h2 className="Searchbar__Headline">Butuh vendor sekarang?</h2>

            <div className="Searchbar__Wrapper">
            <p className="Searchbar__TeksAtas">Lokasi Kamu</p>
            <div>
                <input className="Searchbar__Input" type="text" placeholder="--Lokasi--"></input>
            </div>
            </div>
            <div className="Searchbar__Wrapper">
            <p className="Searchbar__TeksAtas">Barang yang kamu cari</p>
            <div>
                <input className="Searchbar__Input" type="text" placeholder="--Masukkan Nama Barang--"></input>


            </div>
            </div>

            <button className="Searchbar__btn">Cari Barang</button>

        </div>
            

      
    )
}

export default SearchBar;