import React from "react";
import { useNavigate } from "react-router-dom";
import DesignOne from "../../../Asserts/DesignOne.png";
import DesignTwo from "../../../Asserts/DesignTwo.png";
import DesignThree from "../../../Asserts/DesignThree.png";
import DesignFour from "../../../Asserts/DesignFour.png";
import DesignFive from "../../../Asserts/DesignFive.png";
import DesignSix from "../../../Asserts/DesignSix.png";
import DesignSeven from "../../../Asserts/DesignSeven.png";
import DesignEight from "../../../Asserts/DesignEight.png";
import DesignNine from "../../../Asserts/DesignNine.png";
import DesignTen from "../../../Asserts/DesignTen.png";
import Styles from "./Section.module.css"



const SectionB: React.FC = () => {
  const navigate = useNavigate(); 

  const handleLoadMoreClick = () => {
    navigate("/product");
  };

  return (
    <div className={Styles.SectionBContainer}>
       <div className={Styles.SectionBHeader}>
         <h2 className={Styles.HeaderLine2}>BESTSELLER FOODSTUFFS</h2>
         <h4 className={Styles.HeaderLine}>Your healthy eating is our piority</h4>
       </div>

       <div className={Styles.ContainerCards}>
         <div className={Styles.CardsLists}>
           <img src={DesignOne} alt="Furniture One" className={Styles.bestDesign} />
            <div className={Styles.CardsItems}>
             <h3 className={Styles.styleH3}>Stock Fish</h3>
             <p className={Styles.styleP}>purchase</p>
               <div className={Styles.CardsPayment}>
                 <p className={Styles.PaymentColor1}>$16.48</p>
                 <p className={Styles.PaymentColor2}>$6.48</p>
               </div>
            </div>
          </div>
          <div className={Styles.CardsLists}>
           <img src={ DesignTwo} alt="Furniture Two" className={Styles.bestDesign} />
            <div className={Styles.CardsItems}>
             <h3 className={Styles.styleH3}>Yam</h3>
             <p className={Styles.styleP}>purchase</p>
               <div className={Styles.CardsPayment}>
                 <p className={Styles.PaymentColor1}>$16.48</p>
                 <p className={Styles.PaymentColor2}>$6.48</p>
               </div>
            </div>
          </div>
          <div className={Styles.CardsLists}>
           <img src={DesignThree} alt="Furniture Three" className={Styles.bestDesign} />
            <div className={Styles.CardsItems}>
             <h3 className={Styles.styleH3}>Onion</h3>
             <p className={Styles.styleP}>purchase</p>
               <div className={Styles.CardsPayment}>
                 <p className={Styles.PaymentColor1}>$16.48</p>
                 <p className={Styles.PaymentColor2}>$6.48</p>
               </div>
            </div>
          </div>
          <div className={Styles.CardsLists}>
           <img src={DesignFour} alt="Furniture Four" className={Styles.bestDesign} />
            <div className={Styles.CardsItems}>
             <h3 className={Styles.styleH3}>CrayFish</h3>
             <p className={Styles.styleP}>purchase</p>
               <div className={Styles.CardsPayment}>
                 <p className={Styles.PaymentColor1}>$16.48</p>
                 <p className={Styles.PaymentColor2}>$6.48</p>
               </div>
            </div>
          </div>
          <div className={Styles.CardsLists}>
           <img src={DesignFive} alt="Furniture Five" className={Styles.bestDesign} />
            <div className={Styles.CardsItems}>
             <h3 className={Styles.styleH3}>Egusi</h3>
             <p className={Styles.styleP}>purchase</p>
               <div className={Styles.CardsPayment}>
                 <p className={Styles.PaymentColor1}>$16.48</p>
                 <p className={Styles.PaymentColor2}>$6.48</p>
               </div>
            </div>
          </div>
          <div className={Styles.CardsLists}>
           <img src={DesignSix} alt="Furniture Six" className={Styles.bestDesign} />
            <div className={Styles.CardsItems}>
             <h3 className={Styles.styleH3}>Ogbono</h3>
             <p className={Styles.styleP}>purchase</p>
               <div className={Styles.CardsPayment}>
                 <p className={Styles.PaymentColor1}>$16.48</p>
                 <p className={Styles.PaymentColor2}>$6.48</p>
               </div>
            </div>
          </div>
          <div className={Styles.CardsLists}>
           <img src={DesignSeven} alt="Furniture Seven" className={Styles.bestDesign} />
            <div className={Styles.CardsItems}>
             <h3 className={Styles.styleH3}>Palm Oil</h3>
             <p className={Styles.styleP}>purchase</p>
               <div className={Styles.CardsPayment}>
                 <p className={Styles.PaymentColor1}>$16.48</p>
                 <p className={Styles.PaymentColor2}>$6.48</p>
               </div>
            </div>
          </div>
          <div className={Styles.CardsLists}>
           <img src={DesignEight} alt="Furniture Eight" className={Styles.bestDesign} />
            <div className={Styles.CardsItems}>
             <h3 className={Styles.styleH3}>Garri</h3>
             <p className={Styles.styleP}>purchase</p>
               <div className={Styles.CardsPayment}>
                 <p className={Styles.PaymentColor1}>$16.48</p>
                 <p className={Styles.PaymentColor2}>$6.48</p>
               </div>
            </div>
          </div>
          <div className={Styles.CardsLists}>
           <img src={DesignNine} alt="Furniture Nine" className={Styles.bestDesign} />
            <div className={Styles.CardsItems}>
             <h3 className={Styles.styleH3}>Rice</h3>
             <p className={Styles.styleP}>purchase</p>
               <div className={Styles.CardsPayment}>
                 <p className={Styles.PaymentColor1}>$16.48</p>
                 <p className={Styles.PaymentColor2}>$6.48</p>
               </div>
            </div>
          </div>
          <div className={Styles.CardsLists}>
           <img src={DesignTen} alt="Furniture Ten" className={Styles.bestDesign} />
            <div className={Styles.CardsItems}>
             <h3 className={Styles.styleH3}>Beans</h3>
             <p className={Styles.styleP}>purchase</p>
               <div className={Styles.CardsPayment}>
                 <p className={Styles.PaymentColor1}>$16.48</p>
                 <p className={Styles.PaymentColor2}>$6.48</p>
               </div>
            </div>
          </div>
          <button className={Styles.SectionBButton} onClick={handleLoadMoreClick}>
           LOAD MORE FOODSTUFFS
          </button>
       </div>
    </div>
  )
}

export default SectionB;
