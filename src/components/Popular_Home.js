import styled from 'styled-components';
import "./Styles.css";
import {Link} from 'react-router-dom';
import Item from '../pages/Item';

const P_Items = [
    {
        id:1,
        Barang:"Nama Barang 1",
        Vendor:"Vendor A"

    },
    {
        id:2,
        Barang:"Nama Barang 88",
        Vendor:"Vendor A"
 
    },
    {
        id:3,
        Barang:"Nama Barang 32",
        Vendor:"Vendor z"
 
    },

    {
        id:4,
        Barang:"Nama Barang 77",
        Vendor:"Vendor Y"
 
    },
    
]

const PopularHome = () => {
    return(
        <div>
            <div className="Title__Container">
                <h1>Popular</h1>
                <h2>Lorem ipsum dolor si amet</h2>
            </div>
            <div className="Card__Container">
                {P_Items.map((Item)=>(<Link className="Main_Link" to={'item/' + Item.id}>
                    
                    <div className="Cards">
                    <h2>{Item.Barang}</h2>
                    <h3>{Item.Vendor}</h3>
                </div></Link>))} 
               

            </div>
            <div className="View__Container">
            <Link className="PopularBtn" to="/Popular"><button className="View__all">VIEW ALL</button></Link>
             </div>
                
       

        </div>
    )
}


export default PopularHome;