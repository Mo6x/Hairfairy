import React, { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MenuIcon from '@mui/icons-material/Menu';
import styles from './Nav.module.css';
import Logo from "../../../Asserts/Logo.png";
import CategorieModels from "../../Categories/CategorieModels/CategorieModels";


const Nav: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className={styles.NavContainer}>
      <img src={Logo} alt="company logo" className={styles.HOne} />
      <div className={styles.MenuIconContainer} onClick={toggleMenu}>
        <MenuIcon className={styles.MenuIcon} />
      </div>
      <div className={`${styles.ListItems} ${isMenuOpen ? styles.ShowMenu : ''}`}>
          <span onClick={toggleModal} className={styles.linklist}>Categories</span>
          <div className={styles.NavIcons}>
            <SearchIcon className={styles.NavIconColors} />
            <ShoppingCartIcon className={styles.NavIconColors} />
            <FavoriteIcon className={styles.NavIconColors} />
        </div>
      </div>
      {isModalOpen && <CategorieModels onClose={toggleModal} />}
    </div>
  );
};

export default Nav;
