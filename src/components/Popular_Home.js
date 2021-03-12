import styled from 'styled-components';
import "./Styles.css";
import {Link} from 'react-router-dom';
import Item from '../pages/Item';
import Ovent from '../api/Ovent';



const P_Items = [
    {
        id:1,
        Barang:"Nama Barang 1",
        Vendor:"Vendor A",
        Alamat:"Jl.Brawijaya 20",
        Harga: "Rp. 450.000",
        JumlahRating:"300",
        Foto: "https://s3-alpha-sig.figma.com/img/c803/31de/d0ab80806cc5a36e494136380375b2b6?Expires=1616371200&Signature=fgjEG2fwHQG8XvxbjYaz8uxB~NCyjGU08YraOwUu-sa99T3j2TjVn9NGTuEZtNu9OwpXHP5iXrJ-RPhFCV4M3WlYx6W0S2iLXLG3RhDmq6VBByi-uFiCUF2FTOxJJ4RK-wBO8Sh2ftLA3qezObI~4GvV5C20PpVuQWEADGsE3dU9Os1tZ3-mGXWZVte8psjIZ1gCNCumo9t6LqPM6~gacSOgluUwOdTK~iKT7N~pjqdrP8pX~XMSQk~j9mMCZAmlD-Zxlxf~GozVQ8mitHOPe2KZ-J6btfuHNg4LwO2wcnZs9Y5pG5uqs3Q4~4Wp7VwiivQyJ6xyBf3AC4GGPaL2Tw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"

    },
    {
        id:2,
        Barang:"Nama Barang 88",
        Vendor:"Vendor A",
        Alamat:"Jl.Bisaan No.609",
        Harga: "Rp. 1.050.000",
        JumlahRating:"300",
        Foto: "https://s3-alpha-sig.figma.com/img/c803/31de/d0ab80806cc5a36e494136380375b2b6?Expires=1616371200&Signature=fgjEG2fwHQG8XvxbjYaz8uxB~NCyjGU08YraOwUu-sa99T3j2TjVn9NGTuEZtNu9OwpXHP5iXrJ-RPhFCV4M3WlYx6W0S2iLXLG3RhDmq6VBByi-uFiCUF2FTOxJJ4RK-wBO8Sh2ftLA3qezObI~4GvV5C20PpVuQWEADGsE3dU9Os1tZ3-mGXWZVte8psjIZ1gCNCumo9t6LqPM6~gacSOgluUwOdTK~iKT7N~pjqdrP8pX~XMSQk~j9mMCZAmlD-Zxlxf~GozVQ8mitHOPe2KZ-J6btfuHNg4LwO2wcnZs9Y5pG5uqs3Q4~4Wp7VwiivQyJ6xyBf3AC4GGPaL2Tw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
    },
    {
        id:3,
        Barang:"Nama Barang 32",
        Vendor:"Vendor z",
        Alamat:"Jl.Veteran No.5",
        Harga: "Rp. 770.000",
        JumlahRating:"300",
        Foto: "https://s3-alpha-sig.figma.com/img/c803/31de/d0ab80806cc5a36e494136380375b2b6?Expires=1616371200&Signature=fgjEG2fwHQG8XvxbjYaz8uxB~NCyjGU08YraOwUu-sa99T3j2TjVn9NGTuEZtNu9OwpXHP5iXrJ-RPhFCV4M3WlYx6W0S2iLXLG3RhDmq6VBByi-uFiCUF2FTOxJJ4RK-wBO8Sh2ftLA3qezObI~4GvV5C20PpVuQWEADGsE3dU9Os1tZ3-mGXWZVte8psjIZ1gCNCumo9t6LqPM6~gacSOgluUwOdTK~iKT7N~pjqdrP8pX~XMSQk~j9mMCZAmlD-Zxlxf~GozVQ8mitHOPe2KZ-J6btfuHNg4LwO2wcnZs9Y5pG5uqs3Q4~4Wp7VwiivQyJ6xyBf3AC4GGPaL2Tw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
 
    },

    {
        id:4,
        Barang:"Nama Barang 77",
        Vendor:"Vendor Y",
        Alamat:"Jl.Sigura-gura II No. 7",
        Harga: "Rp. 150.000",
        JumlahRating:"300",
        Foto: "https://s3-alpha-sig.figma.com/img/c803/31de/d0ab80806cc5a36e494136380375b2b6?Expires=1616371200&Signature=fgjEG2fwHQG8XvxbjYaz8uxB~NCyjGU08YraOwUu-sa99T3j2TjVn9NGTuEZtNu9OwpXHP5iXrJ-RPhFCV4M3WlYx6W0S2iLXLG3RhDmq6VBByi-uFiCUF2FTOxJJ4RK-wBO8Sh2ftLA3qezObI~4GvV5C20PpVuQWEADGsE3dU9Os1tZ3-mGXWZVte8psjIZ1gCNCumo9t6LqPM6~gacSOgluUwOdTK~iKT7N~pjqdrP8pX~XMSQk~j9mMCZAmlD-Zxlxf~GozVQ8mitHOPe2KZ-J6btfuHNg4LwO2wcnZs9Y5pG5uqs3Q4~4Wp7VwiivQyJ6xyBf3AC4GGPaL2Tw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
 
    },
    {
        id:5,
        Barang:"Nama Barang 12",
        Vendor:"Vendor z",
        Alamat:"Jl.Veteran No.5",
        Harga: "Rp. 270.000",
        JumlahRating:"300",
        Foto: "https://s3-alpha-sig.figma.com/img/c803/31de/d0ab80806cc5a36e494136380375b2b6?Expires=1616371200&Signature=fgjEG2fwHQG8XvxbjYaz8uxB~NCyjGU08YraOwUu-sa99T3j2TjVn9NGTuEZtNu9OwpXHP5iXrJ-RPhFCV4M3WlYx6W0S2iLXLG3RhDmq6VBByi-uFiCUF2FTOxJJ4RK-wBO8Sh2ftLA3qezObI~4GvV5C20PpVuQWEADGsE3dU9Os1tZ3-mGXWZVte8psjIZ1gCNCumo9t6LqPM6~gacSOgluUwOdTK~iKT7N~pjqdrP8pX~XMSQk~j9mMCZAmlD-Zxlxf~GozVQ8mitHOPe2KZ-J6btfuHNg4LwO2wcnZs9Y5pG5uqs3Q4~4Wp7VwiivQyJ6xyBf3AC4GGPaL2Tw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
 
    },
    {
        id:6,
        Barang:"Nama Barang 88",
        Vendor:"Vendor Caper",
        Alamat:"Jl.Bisaan Banget No.3435",
        Harga: "Rp. 2.050.000",
        JumlahRating:"300",
        Foto: "https://s3-alpha-sig.figma.com/img/c803/31de/d0ab80806cc5a36e494136380375b2b6?Expires=1616371200&Signature=fgjEG2fwHQG8XvxbjYaz8uxB~NCyjGU08YraOwUu-sa99T3j2TjVn9NGTuEZtNu9OwpXHP5iXrJ-RPhFCV4M3WlYx6W0S2iLXLG3RhDmq6VBByi-uFiCUF2FTOxJJ4RK-wBO8Sh2ftLA3qezObI~4GvV5C20PpVuQWEADGsE3dU9Os1tZ3-mGXWZVte8psjIZ1gCNCumo9t6LqPM6~gacSOgluUwOdTK~iKT7N~pjqdrP8pX~XMSQk~j9mMCZAmlD-Zxlxf~GozVQ8mitHOPe2KZ-J6btfuHNg4LwO2wcnZs9Y5pG5uqs3Q4~4Wp7VwiivQyJ6xyBf3AC4GGPaL2Tw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
    },
    {
        id:7,
        Barang:"Nama Barang Risol KK",
        Vendor:"Vendor A+",
        Alamat:"Jl.Risol KK",
        Harga: "Rp. 3.000",
        JumlahRating:"300",
        Foto: "https://s3-alpha-sig.figma.com/img/c803/31de/d0ab80806cc5a36e494136380375b2b6?Expires=1616371200&Signature=fgjEG2fwHQG8XvxbjYaz8uxB~NCyjGU08YraOwUu-sa99T3j2TjVn9NGTuEZtNu9OwpXHP5iXrJ-RPhFCV4M3WlYx6W0S2iLXLG3RhDmq6VBByi-uFiCUF2FTOxJJ4RK-wBO8Sh2ftLA3qezObI~4GvV5C20PpVuQWEADGsE3dU9Os1tZ3-mGXWZVte8psjIZ1gCNCumo9t6LqPM6~gacSOgluUwOdTK~iKT7N~pjqdrP8pX~XMSQk~j9mMCZAmlD-Zxlxf~GozVQ8mitHOPe2KZ-J6btfuHNg4LwO2wcnZs9Y5pG5uqs3Q4~4Wp7VwiivQyJ6xyBf3AC4GGPaL2Tw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
    },
    {
        id:8,
        Barang:"Nama Barang Ciee",
        Vendor:"Vendor A",
        Alamat:"Jalan terus jadian kagak",
        Harga: "Rp. 1.450.000",
        JumlahRating:"300",
        Foto: "https://s3-alpha-sig.figma.com/img/c803/31de/d0ab80806cc5a36e494136380375b2b6?Expires=1616371200&Signature=fgjEG2fwHQG8XvxbjYaz8uxB~NCyjGU08YraOwUu-sa99T3j2TjVn9NGTuEZtNu9OwpXHP5iXrJ-RPhFCV4M3WlYx6W0S2iLXLG3RhDmq6VBByi-uFiCUF2FTOxJJ4RK-wBO8Sh2ftLA3qezObI~4GvV5C20PpVuQWEADGsE3dU9Os1tZ3-mGXWZVte8psjIZ1gCNCumo9t6LqPM6~gacSOgluUwOdTK~iKT7N~pjqdrP8pX~XMSQk~j9mMCZAmlD-Zxlxf~GozVQ8mitHOPe2KZ-J6btfuHNg4LwO2wcnZs9Y5pG5uqs3Q4~4Wp7VwiivQyJ6xyBf3AC4GGPaL2Tw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
    },
    
]

const PopularHome = () => {
    return(
        <div>
            <div className="Title__Container">
                <h1>Popular</h1>
                <h2>Rekomendasi produk-produk terpopuler</h2>
            </div>
            <div className="Card__Container">
                {P_Items.map((Item)=>(<Link className="Main_Link" to={'item/' + Item.id}>
                    
                    <div className="Cards">
                    <div className="Cards__Foto">
                        <img src={Item.Foto} />
                    </div>
                    <div className="Cards__Deskripsi">
                        <h2>{Item.Barang}</h2>
                        <h3>{Item.Alamat}</h3>
                    </div>
                    <div className="Cards__Footer">
                        <div className="Cards__Footer__Left">
                            <h2>{Item.Harga}</h2>
                            <h3>⭐️⭐️⭐️⭐️ ({Item.JumlahRating})</h3>
                        </div>
                        <Link to="/transaksi"><button>+</button></Link>
                    </div>
                    
                   
                </div></Link>))} 
               

            </div>
            <div className="View__Container">
            <Link className="PopularBtn" to="/popular"><button className="View__all">VIEW ALL</button></Link>
             </div>
                
       

        </div>
    )
}


export default PopularHome;