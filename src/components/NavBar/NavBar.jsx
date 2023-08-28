// import { Logo, Modals, Search1, SearchBar } from '../../components';
import React from 'react';
import { Logo, Modals, Search1 } from '../../components';
import { Link } from 'react-router-dom';
import './Navbar.css';

const NavBar = ({ data }) => {
  return (
    <>
      <nav className="navbar">
        <Link to="/">
          <Logo />
        </Link>
       
        <Search1 data={data} className="searchbar" />

        <Modals title={'Give Feedback'} />
      </nav>
      
      <Search1 data={data} className="searchbar-moblie" />
    </>
  );
};

export default NavBar;
