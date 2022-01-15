import React from 'react';
import { HeaderBox, HeaderBoxLogo, HeaderBoxNav, HeaderNavLink, HeadingLogo } from './HeaderElements';
import { FaBeer } from 'react-icons/fa';
import { Paper } from '@mui/material';
import { Link } from "react-router-dom";
import Logo from "../Assets/Group62961.png"


const Header = () => {
  return (
    <>
        <HeaderBox>
          {/* <HeaderBoxLogo><FaBeer /></HeaderBoxLogo> */}
          <HeaderBoxLogo><HeadingLogo src={Logo} /></HeaderBoxLogo>
          <HeaderBoxNav>
            <HeaderNavLink><Link to="/StraysofGhaziabad" style={{color: 'white'}}>Home</Link></HeaderNavLink>
            <HeaderNavLink><Link to="/StraysofGhaziabad/gallery" style={{color: 'white'}}>Gallery</Link></HeaderNavLink>
            <HeaderNavLink><Link to="/StraysofGhaziabad/blog" style={{color: 'white'}}>Blog</Link></HeaderNavLink>
            <HeaderNavLink><Link to="/StraysofGhaziabad/donate" style={{color: 'black', padding: '5px 10px', backgroundColor: "yellow"}}><i>Donate</i></Link></HeaderNavLink>
          </HeaderBoxNav>
        </HeaderBox>
    </>
  )
}

export default Header
