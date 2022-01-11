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
                <HeaderNavLink style={{width: '100%', display: 'flex', justifyContent: 'center', marginBottom: '1rem'}}><Link to="/donate" style={{color: 'black', padding: '5px 10px', backgroundColor: "yellow", width: 'auto'}}><i>Donate</i></Link></HeaderNavLink>
                <FooterBox>
                    <FooterIcons>
                        <FooterNavIcons><FaFacebookSquare/></FooterNavIcons>
                        <FooterNavIcons><FaInstagramSquare/></FooterNavIcons>
                        <FooterNavIcons><FaTwitterSquare/></FooterNavIcons>
                        <FooterNavIcons><FaYoutube/></FooterNavIcons>
                    </FooterIcons>
                </FooterBox>
            </ParentFooter>
        </>
    )
}

export default Footer
