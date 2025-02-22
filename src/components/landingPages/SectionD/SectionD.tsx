import React from "react"
import NewOne from "../../../Asserts/NewOne.png";
import NewTwo from "../../../Asserts/NewTwo.png";
import NewThree from "../../../Asserts/NewThree.png";
import Clock from "../../../Asserts/Clock.png";
import Gallary from "../../../Asserts/Gallary.png";
import Greater from "../../../Asserts/Greater.png";
import Styles from "./Section.module.css";




const SectionD: React.FC = () => {

  return (
    <div className={Styles.SectionDContainer}>
       <div className={Styles.SectionDHeader}>
           <p className={Styles.HeaderParagrph}>ENTERPRISES</p>
           <h1 className={Styles.HeaderH1}>Everyday Edibles Foodstuffs</h1>
       </div>
       <div className={Styles.SectionDCardList}>
         <div className={Styles.SectionCardsLists}>
            <img src={NewOne} alt="icon of Home" className={Styles.featurePics} />
            <div className={Styles.ListsButton}>
                <p className={Styles.SectionDButtons}>Google</p>
                <p className={Styles.SectionDButton}>Trending</p>
                <p className={Styles.SectionDButton}>New</p>
            </div>
            <h1 className={Styles.ListButtonH1}>
            The Complete Edition #1(Bonga Fish)
            </h1>
            <p className={Styles.ListButtonParagrh}>We focus on freshness and bringing food straight to your table. It's only a bite away.
            </p>
            <div className={Styles.SectionDTimmer}>
               <div className={Styles.SectionDClock}>
                  <img src={Clock} alt="icon of Clock" />
                  <p className={Styles.ClockGallary}>22 April 2021</p>
               </div>
               <div className={Styles.SectionDComment}>
                  <img src={Gallary} alt="icon of Gallary" />
                  <p className={Styles.ClockGallary}>10 comments</p>
               </div>
            </div>
            <div className={Styles.SectionDClick}>
               <p className={Styles.SectionDLearn}>Learn More</p>
               <img src={Greater} alt="icon of Greater" />
            </div>
         </div>
         <div className={Styles.SectionCardsLists}>
            <img src={NewTwo} alt="icon of Home" className={Styles.featurePics} />
            <div className={Styles.ListsButton}>
                <p className={Styles.SectionDButtons}>Google</p>
                <p className={Styles.SectionDButton}>Trending</p>
                <p className={Styles.SectionDButton}>New</p>
            </div>
            <h1 className={Styles.ListButtonH1}>
              The Complete Edition  #1(River Dry Fish)
            </h1>
            <p className={Styles.ListButtonParagrh}>We focus on freshness and bringing food straight to your table. It's only a bite away.
            </p>
            <div className={Styles.SectionDTimmer}>
               <div className={Styles.SectionDClock}>
                  <img src={Clock} alt="icon of Clock" />
                  <p className={Styles.ClockGallary}>22 April 2021</p>
               </div>
               <div className={Styles.SectionDComment}>
                  <img src={Gallary} alt="icon of Gallary" />
                  <p className={Styles.ClockGallary}>10 comments</p>
               </div>
            </div>
            <div className={Styles.SectionDClick}>
               <p className={Styles.SectionDLearn}>Learn More</p>
               <img src={Greater} alt="icon of Greater" />
            </div>
         </div>
         <div className={Styles.SectionCardsLists}>
            <img src={NewThree} alt="icon of Home" className={Styles.featurePics} />
            <div className={Styles.ListsButton}>
                <p className={Styles.SectionDButtons}>Google</p>
                <p className={Styles.SectionDButton}>Trending</p>
                <p className={Styles.SectionDButton}>New</p>
            </div>
            <h1 className={Styles.ListButtonH1}>
            The Complete Edition #1(Prawns Fish)
            </h1>
            <p className={Styles.ListButtonParagrh}>We focus on freshness and bringing food straight to your table. It's only a bite away.
            </p>
            <div className={Styles.SectionDTimmer}>
               <div className={Styles.SectionDClock}>
                  <img src={Clock} alt="icon of Clock" />
                  <p className={Styles.ClockGallary}>22 April 2021</p>
               </div>
               <div className={Styles.SectionDComment}>
                  <img src={Gallary} alt="icon of Gallary" />
                  <p className={Styles.ClockGallary}>10 comments</p>
               </div>
            </div>
            <div className={Styles.SectionDClick}>
               <p className={Styles.SectionDLearn}>Learn More</p>
               <img src={Greater} alt="icon of Greater" />
            </div>
         </div>
       </div>
    </div>
  )
}

export default SectionD;
