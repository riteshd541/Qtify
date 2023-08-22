import React from 'react'
import Button from '../Button/Button';
import Logo from '../Logo/Logo';
import styles from "./Navbar.module.css";
import Search from '../SearchBar/Search';

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <Logo /> 
      <Search placeholder="Search a song of your choice"/>
      <Button children="Give Feedback" />
    </nav>
  )
}

export default NavBar;