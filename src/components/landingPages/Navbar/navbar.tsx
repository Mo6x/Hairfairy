import React from "react";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import styles from "./navbar.module.css";


const Navbar: React.FC = () => {
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.contacts}>
        <h1 className={styles.H1contact}>
          <LocalPhoneIcon className={styles.Icons}/>
          (225) 555-0118
        </h1>
        <p className={styles.Gmail}>
          <MailOutlineIcon className={styles.Icons} />
          michelle.rivera@example.com
        </p>
      </div>
      <div className={styles.follow}>
        <h1>Follow Us and get a chance to win 80% off</h1>
      </div>

      <div className={styles.MediaIcons}>
        <span className={styles.followSpan}>Follow Us :</span>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <InstagramIcon className={styles.Icons} />
        </a>
        <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
          <YouTubeIcon className={styles.Icons} />
        </a>
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <FacebookIcon className={styles.Icons} />
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
          <TwitterIcon className={styles.Icons} />
        </a>
      </div>
    </div>
  );
};

export default Navbar;

