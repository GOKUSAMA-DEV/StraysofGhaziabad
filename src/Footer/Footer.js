import React from 'react';
import {
    ParentFooter,
    FooterTItle,
    FooterBox,
    FooterIcons,
    FooterNavIcons
} from './FooterElements';
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaYoutube } from "react-icons/fa";
import { HeaderNavLink } from '../Header/HeaderElements';
import { Link } from "react-router-dom";



const Footer = () => {
    return (
        <>
            <ParentFooter>
                <FooterTItle>Strays of Ghaziabad</FooterTItle>
                <HeaderNavLink style={{width: '100%', display: 'flex', justifyContent: 'center', marginBottom: '1rem'}}><Link to="/StraysofGhaziabad/donate" style={{color: 'black', padding: '5px 10px', backgroundColor: "yellow", width: 'auto'}}><i>Donate</i></Link></HeaderNavLink>
                <FooterBox>
                    <FooterIcons>
                        <FooterNavIcons href='https://www.facebook.com/Strays_of_ghaziabad-102350719015618/'><FaFacebookSquare/></FooterNavIcons>
                        <FooterNavIcons href='https://www.instagram.com/invites/contact/?i=yn75ryozi9j5&utm_content=kb88166'><FaInstagramSquare/></FooterNavIcons>
                        <FooterNavIcons href='https://twitter.com/Tanya_thakurji?t=3cQa9hPQBYKwo47s6_t50w&s=08'><FaTwitterSquare/></FooterNavIcons>
                        <FooterNavIcons href='https://youtube.com/channel/UCWaXTnbEf0g3coQPIZeFONg'><FaYoutube/></FooterNavIcons>
                    </FooterIcons>
                </FooterBox>
            </ParentFooter>
        </>
    )
}

export default Footer
