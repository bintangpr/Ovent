import React from 'react';
import"./Styles.css";

const DetailMain = () => {
    return(
        <div className="DetailMain__Wrapper">
            <div className="DetailMain__Container">
                <div className="DetailMain__Left">
                    <div className="DetailMain__BigPict">

                    </div>
                    <div className="DetailMain__SmallContainer">
                        <div className="DetailMain__SmallPict"></div>
                        <div className="DetailMain__SmallPict"></div>
                        <div className="DetailMain__SmallPict"></div>
                    </div>
                </div>
                <div className="DetailMain__Right">
                    <div className="DetailMain__ItemName"></div>
                    <div className="DetailMain__DataItem">
                        <button>4.9star</button>
                        <h4></h4>
                        <h4></h4>
                    </div>
                    <div className="DetailMain__Keterangan"></div>
                    <div className="DetailMain__DateQuantity__Container">
                        <div className="DetailMain_DateQuantity__Wrapper">
                            
                            <h4>Date</h4>
                            <button>tanggal</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailMain;