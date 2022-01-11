import React from 'react';
import { HeaderBox, HeaderBoxLogo, HeaderBoxNav, HeaderNavLink } from './HeaderElements';
import { FaBeer } from 'react-icons/fa';
import { Paper } from '@mui/material';
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <>
        <HeaderBox>
          {/* <HeaderBoxLogo><FaBeer /></HeaderBoxLogo> */}
          <HeaderBoxLogo><FaBeer /></HeaderBoxLogo>
          <HeaderBoxNav>
            <HeaderNavLink><Link to="/" style={{color: 'white'}}>Home</Link></HeaderNavLink>
            <HeaderNavLink><Link to="/gallery" style={{color: 'white'}}>Gallery</Link></HeaderNavLink>
            <HeaderNavLink><Link to="/blog" style={{color: 'white'}}>Blog</Link></HeaderNavLink>
            <HeaderNavLink><Link to="/donate" style={{color: 'black', padding: '5px 10px', backgroundColor: "yellow"}}><i>Donate</i></Link></HeaderNavLink>
          </HeaderBoxNav>
        </HeaderBox>
    </>
  )
}

export default Header
