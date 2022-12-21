import React from "react";
import styles from "./Header.module.css";
import { AiFillDashboard } from 'react-icons/ai'
import { FaShoppingCart, FaRegUser } from 'react-icons/fa'
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <div>
      <nav>
        <div className={styles.header}>
          <div className={styles.divNav1}><Link className={styles.logo} to='/'>PRODUCT ADMIN</Link></div>
          <div className={styles.divNav}>
                <Link className={styles.headerLink} to='/'><AiFillDashboard style={{fontSize:"29px", color:"white"}} /><div className={styles.navbarContent}>DASHBOARD</div></Link>
                <Link className={styles.headerLink} to='/products'><FaShoppingCart style={{fontSize:"29px", color:"white"}} /><div className={styles.navbarContent}>PRODUCTS</div></Link>
                <Link className={styles.headerLink} to='/account'><FaRegUser style={{fontSize:"29px", color:"white"}} /><div className={styles.navbarContent}>ACCOUNT</div></Link>
          </div>
          <div className={styles.navLogin}>{props.isLoggedIn && <Link to='/EdyodaReactFinal' onClick={props.logout} className={styles.adminLogout}>Admin,<span style={{fontWeight:"700"}}> Logout</span></Link>}</div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
