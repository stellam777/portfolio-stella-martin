import React, { useState, useEffect } from 'react';
import Nav from './Nav';
import { Link } from 'gatsby';
//import logo from '../assets/images/smlogo-white.png';

export default function SideBar({ fullMenu }) {
  const [headerOpen, toggleHeader] = useState(false);
  const [navbar, setNavbar] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', changeHeaderColor);
  },[]);

  const changeHeaderColor = () => {
    if(window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  }

  return (
    // <header id="header" className={`${fullMenu ? '' : 'alt active'}`}>
     <header id="header" className={navbar ? 'active' : 'alt'}>
      {/* <h1>
        <Link to="/">Spectral</Link>
      </h1> */}
      {/* <Link to="/"><img src={logo} style={{ width: '100px', height: '45px', margin: "10px 0 20px 20px"}}/></Link> */}
      <div className={`${headerOpen ? 'is-menu-visible' : ' '}`}>
        <Nav onMenuToggle={() => toggleHeader(!headerOpen)} />
      </div>
    </header>
  );
}
