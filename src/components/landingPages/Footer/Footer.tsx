import React from "react";
import Styles from "./Footer.module.css";


const Footer:  React.FC  = () => {


  return (
    <div className={Styles.FooterContainer}>
      <div className={Styles.FooterItems}> 
        <div className={Styles.FooterLists}>
          <h1 className={Styles.FooterHeader}>Food Categories</h1>
            <div className={Styles.FooterParent}>
            <h1 className={Styles.FooterChild}>Fruits & Vegetables</h1>
            <h1 className={Styles.FooterChild}>Dairy & Eggs</h1>
            <h1 className={Styles.FooterChild}>Meat & Seafood</h1>
            <h1 className={Styles.FooterChild}>Bakery & Snacks</h1> 
            </div>
          </div> 
          <div className={Styles.FooterLists}>
          <h1 className={Styles.FooterHeader}>Food Safety</h1>
            <div className={Styles.FooterParent}>
            <h1 className={Styles.FooterChild}>Storage Tips</h1>
            <h1 className={Styles.FooterChild}>Expiration Guide</h1>
            <h1 className={Styles.FooterChild}>Cook Temperatures</h1>
            <h1 className={Styles.FooterChild}>Hygiene Practices</h1> 
            </div>
          </div> 
          <div className={Styles.FooterLists}>
          <h1 className={Styles.FooterHeader}>Special Deals</h1>
            <div className={Styles.FooterParent}>
            <h1 className={Styles.FooterChild}>Discount Offers</h1>
            <h1 className={Styles.FooterChild}>Buy 1 Get 1 Free</h1>
            <h1 className={Styles.FooterChild}>Fresh Produce Sale</h1>
            <h1 className={Styles.FooterChild}>Exclusive Coupons</h1> 
            </div>
          </div> 
          <div className={Styles.FooterLists}>
            <h1 className={Styles.FooterHeader}>Resources</h1>
            <div className={Styles.FooterParent}>
            <h1 className={Styles.FooterChild}>Healthy Recipes</h1>
            <h1 className={Styles.FooterChild}>Cooking Videos</h1>
            <h1 className={Styles.FooterChild}>Customer Reviews</h1>
            <h1 className={Styles.FooterChild}>Nutritional Info</h1> 
            </div>
          </div> 
          <div className={Styles.FooterLists}>
            <h1 className={Styles.FooterHeader}>Get In Touch</h1>
            <div className={Styles.FooterParent}>
             <div className={Styles.FooterListInput}>
               <input type="email"
               name="email" value=""
               placeholder="Your Email" 
               className={Styles.FooterInputs}
               />
               <button className={Styles.FooterButton}>Subscribe</button>
             </div>    
             <h1 className={Styles.FooterChild}>Stay updated with fresh deals!</h1>
            </div>
          </div> 
          <div className={Styles.FoooterLastDivs}>
          <div className={Styles.FooterLastDiv}>
           <p className={Styles.FooterLastparagrph}>
            ©Made With Love By 2024 FreshMart. All Rights Reserved.
           </p>
          </div>
         </div>
       </div>
    </div>
  )
}

export default Footer;
