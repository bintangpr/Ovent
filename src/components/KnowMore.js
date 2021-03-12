import styled from 'styled-components';
import "./Styles.css";
import {Link} from 'react-router-dom';

const KnowMore= () => {
    return(
        <div className="KnowMore">
            <div className="KnowMore__Left">
            <h1>Ketahui Tentang Kami</h1>
            <p>Ketahui lebih dalam tentang kami agar kamu makin nyaman menggunakan website ini</p>
            <Link to="/about-us"><button>ABOUT US</button></Link>
            </div>
            <div className="KnowMore__Right">
                <img src="https://s3-alpha-sig.figma.com/img/025f/6350/3fd09b3e89ae7b2b2d55f2e55e28ace2?Expires=1616371200&Signature=BnJyGP~cEMTIstvYAxDRbzi5IhZRt2hMZ9XV7bAMx4-xwH55RpaJRKtvRFhQjSeWmH-xE1mcmoR2ynN-gWE4~OQia6aJvbhw5n7Rlrqx~PSFTd0R-MFywVlbF-y7YLreCparzLl2WxAjmL55UtmRRWbVc9Gy1Cq0AZ6vSi1eD8IE0I6hnixG1qUZ7lGpjprVZi-vMJz6SfUnpWGjIF16Zpk2FCjzBcFOwLo8R~z2hi1gPKyLTBXBVkPFZHlmyborREiQu36gPxsGm9RSyzvD9jxYCWxSXoWuM-EVOtZVBboIPznYR2IiAqE6xpKTtZmo5QDtyesc0uGuk1IoRdyoEg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />

            </div>
        </div>
    )
}

export default KnowMore;