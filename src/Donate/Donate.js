import React from 'react'
import { BannerDonate, BannerCard, BannerCardLeft, BannerCardRight, BannerTitle, BannerDonateImage } from "./DonateElements"
import QRIcon from "../Assets/QR_Code.png";


const Donate = () => {
    return (
        <>
         <BannerDonate>
             <BannerCard>
                 <BannerCardLeft>
                     <BannerTitle>QR Codes make accepting payments quick and easy!</BannerTitle>
                 </BannerCardLeft>
                 <BannerCardRight>
                     <BannerDonateImage src={QRIcon} />
                 </BannerCardRight>
             </BannerCard>
             </BannerDonate>   
        </>
    )
}

export default Donate
