import React from "react";
import Profile from "../../../Asserts/Profile.png";
import StarOne from "../../../Asserts/StarOne.png";
import StarHalf from "../../../Asserts/StarHalf.png";
import DisplayOne from "../../../Asserts/DisplayOne.png";
import DisplayTwo from "../../../Asserts/DisplayTwo.png";
import DisplayThree from "../../../Asserts/DisplayThree.png";
import DisplayFour from "../../../Asserts/DisplayFour.png";
import DisplayFive from "../../../Asserts/DisplayFive.png";
import DisplaySix from "../../../Asserts/DisplaySix.png";
import DisplaySeven from "../../../Asserts/DisplaySeven.png";
import DisplayEight from "../../../Asserts/DisplayEight.png";
import DisplayNine from "../../../Asserts/DisplayNine.png";
import Styles from "./Section.module.css";



const SectionE: React.FC = () => {

  return (
      <div className={Styles.SectionECotainer}>
       <div className={Styles.ProfileItems}>
         <div className={Styles.ProfileLists}>
            <h1 className={Styles.ProfileHeader}>What they say about us</h1>
             <img src={Profile} alt="design Icon" className={Styles.profileImage}/>
             <div className={Styles.profileStar}>
               <img src={StarOne} alt="PStar Icon" />
               <img src={StarOne} alt="PStar Icon" />
               <img src={StarOne} alt="PStar Icon" />
               <img src={StarOne} alt="PStar Icon" />
               <img src={StarHalf} alt="PStar Icon" />
             </div>
            <p className={Styles.ProfileParagraph}>
              Slate helps you see how many more days you need to work to 
              reach your financial goal.
            </p>
            <div className={Styles.ProfileDetails}>
               <h4 className={Styles.ProfileName}>Regina Miles</h4>
               <h4 className={Styles.ProfileOwner}>Designer</h4>
            </div>
         </div>
         <div className={Styles.ProfilesImages}>
         <img src={DisplayOne} alt="icpn Design" className={Styles.displayPictures} />
         <img src={DisplayTwo} alt="icon Design" className={Styles.displayPictures} />
         <img src={DisplayThree} alt="icon Design" className={Styles.displayPictures} />
         <img src={DisplayFour} alt="icon Design" className={Styles.displayPictures} />
         <img src={DisplayFive} alt="icon Design" className={Styles.displayPictures} />
         <img src={DisplaySix} alt="icon Design" className={Styles.displayPictures} />
         <img src={DisplaySeven} alt="icon Design" className={Styles.displayPictures} />
         <img src={DisplayEight} alt="icon Design" className={Styles.displayPictures} />
         <img src={DisplayNine} alt="icon Design"  className={Styles.displayPictures}/>
         </div>
       </div>    
      </div>
  )
}

export default SectionE;
