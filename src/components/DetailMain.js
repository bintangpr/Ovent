import React, {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import"./Styles.css";
import Ovent from "../api/Ovent"

const DetailMain = () => {
    useEffect(()=>{
        const getDetail = async () => {
            const resp = await Ovent.get("/product/4")
            console.log(resp);

        }
        getDetail();
    },[])
    return(
        <div className="DetailMain__Wrapper">
            <div className="DetailMain__Container">
                <div className="DetailMain__Left">
                    <div className="DetailMain__BigContainer">
                        <div className="DetailMain__BigPict">
                            <img style={{width:"100%"}} src="https://s3-alpha-sig.figma.com/img/6b57/b170/158b0b17a359ed6cc29f35f0c006f6db?Expires=1616371200&Signature=PBf~cCYHWOnv44tF38zSic1vCD0gfQ9wh6R~QmAfLr1t17xq9f4bzb5T4qLKojDPepfAo6DIYIeOn2PCNfR24RptEDoa7pqIwhFyG4cNE-2TG0JMhBJPWb-S6iIbp~pc-mvZBWsWNO0vdNMFiHVafdtKA7y7j1uc3nbThQcL1YSiS6dZ7rAbxwXkU8TnswVGKO7ki4exx0Gw8RawGTAFZ0QiI~D~JKR7nloG1jSmr~Y-t4zOu1KPOTHnM9oqiuZlwcekcAQH92Lg8i-nazBia962o-PH77W4QSWnI-lwk392lyjA9xj9l1OxuqkgXPKCmM54pJZ5R-mctcovHiZFRQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"/>
                        </div>
                    </div>
                    <div className="DetailMain__SmallContainer">
                        <div className="DetailMain__SmallPict"></div>
                        <div className="DetailMain__SmallPict"></div>
                        <div className="DetailMain__SmallPict"></div>
                    </div>
                </div>
                <div className="DetailMain__Right">
                    <div className="DetailMain__ItemName">
                        <h1>Loren ipsum</h1>
                    </div>
                    <div className="DetailMain__DataItem">
                        <h2 className="DetailMain__Rating">4.9*</h2>
                        <p>20 product Sold</p>
                        <p>60 product watch</p>
                    </div>
                    <div clasName="DetailMain__Keterangan"></div>
                    <div className="DetailMain__DateQuantity__Container">
                        <div className="DetailMain_Date__Wrapper">
                            
                            <h4>Date</h4>
                            <input type="date"></input>
                        </div>
                        <div className="DetailMain_Quantity__Wrapper">
                            
                            <h4>Quantity</h4>
                            <input type="number"></input>
                        </div>
                       
                    </div>
                    <div className="Harga__TambahBarang">
                        <h1>Rp. xxx.xxx</h1>
                        <Link><button>Tambah Barang</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailMain;