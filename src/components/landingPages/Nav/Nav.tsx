import React, { useState } from "react";
import { Link } from "react-router-dom";
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MenuIcon from '@mui/icons-material/Menu';
import styles from './Nav.module.css';



const Nav: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={styles.NavContainer}>
      <h1 className={styles.HOne}>Hairfairy.africa</h1>
      <div className={styles.MenuIconContainer} onClick={toggleMenu}>
        <MenuIcon className={styles.MenuIcon} />
      </div>
      <div className={`${styles.ListItems} ${isMenuOpen ? styles.ShowMenu : ''}`}>
        <div className={styles.LinkLists}>
          <Link to="/" className={styles.linklist}>Home</Link>
          <Link to="/shop" className={styles.linklist}>Shop</Link>
          <Link to="/about" className={styles.linklist}>About</Link>
          <Link to="/pages" className={styles.linklist}>Pages</Link>
          <Link to="/blog" className={styles.linklist}>categories</Link>
        </div>

        <div className={styles.RegisterForm}>
          <div className={styles.NavForms}>
            <PersonIcon className={styles.NavIconColors} />
            <Link to="/login" className={styles.linklistForm}>Login</Link>
             /
            <Link to="/register" className={styles.linklistForm}>Register</Link>
          </div>

          <div className={styles.NavIcons}>
            <SearchIcon className={styles.NavIconColors} />
            <ShoppingCartIcon className={styles.NavIconColors} />
            <FavoriteIcon className={styles.NavIconColors} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;

