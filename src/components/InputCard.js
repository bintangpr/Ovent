import styled from 'styled-components';
import "./Styles.css";
import {Link} from 'react-router-dom';

const Items = [
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

const ShowCard =() => {
    return(
        <div className="Card__Container">
                {Items.map((Item)=>(<Link className="Main_Link" to={'item/' + Item.id}>
                    
                    <div className="Cards">
                    <h2>{Item.Barang}</h2>
                    <h3>{Item.Vendor}</h3>
                </div></Link>))} 
               

        </div>
    )
}

export default ShowCard;