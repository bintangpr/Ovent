import {Link} from "react-router-dom";
import "./Styles.css";


const NumberPage = () => {
    return(
        <div className="Page__Number__Container">
            <div className="Page__Number__Wrapper">
           <Link><button className="Page__Number">1</button></Link>
           <Link><button className="Page__Number">2</button></Link>
           <Link><button className="Page__Number">3</button></Link>
           <Link><button className="Page__Number">4</button></Link>
           
             </div>
        </div>

    )
}

export default NumberPage;