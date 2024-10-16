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
         <h4 className={Styles.HeaderLine}>Featured Products</h4>
         <h2 className={Styles.HeaderLine2}>BESTSELLER PRODUCTS</h2>
         <p className={Styles.HeaderLineP}>Problems rying o resolve the conflict between</p>
       </div>

       <div className={Styles.ContainerCards}>
         <div className={Styles.CardsLists}>
           <img src={DesignOne} alt="Furniture One" className={Styles.bestDesign} />
            <div className={Styles.CardsItems}>
             <h3 className={Styles.styleH3}>Huile pour le corps</h3>
             <p className={Styles.styleP}>Décision d'achat</p>
               <div className={Styles.CardsPayment}>
                 <p className={Styles.PaymentColor1}>$16.48</p>
                 <p className={Styles.PaymentColor2}>$6.48</p>
               </div>
            </div>
          </div>
          <div className={Styles.CardsLists}>
           <img src={ DesignTwo} alt="Furniture Two" className={Styles.bestDesign} />
            <div className={Styles.CardsItems}>
             <h3 className={Styles.styleH3}>Cheveux Xpression</h3>
             <p className={Styles.styleP}>Décision d'achat</p>
               <div className={Styles.CardsPayment}>
                 <p className={Styles.PaymentColor1}>$16.48</p>
                 <p className={Styles.PaymentColor2}>$6.48</p>
               </div>
            </div>
          </div>
          <div className={Styles.CardsLists}>
           <img src={DesignThree} alt="Furniture Three" className={Styles.bestDesign} />
            <div className={Styles.CardsItems}>
             <h3 className={Styles.styleH3}>Brands Design</h3>
             <p className={Styles.styleP}>Décision d'achat</p>
               <div className={Styles.CardsPayment}>
                 <p className={Styles.PaymentColor1}>$16.48</p>
                 <p className={Styles.PaymentColor2}>$6.48</p>
               </div>
            </div>
          </div>
          <div className={Styles.CardsLists}>
           <img src={DesignFour} alt="Furniture Four" className={Styles.bestDesign} />
            <div className={Styles.CardsItems}>
             <h3 className={Styles.styleH3}>gommage pour le corps</h3>
             <p className={Styles.styleP}>Décision d'achat</p>
               <div className={Styles.CardsPayment}>
                 <p className={Styles.PaymentColor1}>$16.48</p>
                 <p className={Styles.PaymentColor2}>$6.48</p>
               </div>
            </div>
          </div>
          <div className={Styles.CardsLists}>
           <img src={DesignFive} alt="Furniture Five" className={Styles.bestDesign} />
            <div className={Styles.CardsItems}>
             <h3 className={Styles.styleH3}>soin des pieds</h3>
             <p className={Styles.styleP}>Décision d'achat</p>
               <div className={Styles.CardsPayment}>
                 <p className={Styles.PaymentColor1}>$16.48</p>
                 <p className={Styles.PaymentColor2}>$6.48</p>
               </div>
            </div>
          </div>
          <div className={Styles.CardsLists}>
           <img src={DesignSix} alt="Furniture Six" className={Styles.bestDesign} />
            <div className={Styles.CardsItems}>
             <h3 className={Styles.styleH3}>offret de maquillage</h3>
             <p className={Styles.styleP}>Décision d'achat</p>
               <div className={Styles.CardsPayment}>
                 <p className={Styles.PaymentColor1}>$16.48</p>
                 <p className={Styles.PaymentColor2}>$6.48</p>
               </div>
            </div>
          </div>
          <div className={Styles.CardsLists}>
           <img src={DesignSeven} alt="Furniture Seven" className={Styles.bestDesign} />
            <div className={Styles.CardsItems}>
             <h3 className={Styles.styleH3}>Brands Design</h3>
             <p className={Styles.styleP}>Décision d'achat</p>
               <div className={Styles.CardsPayment}>
                 <p className={Styles.PaymentColor1}>$16.48</p>
                 <p className={Styles.PaymentColor2}>$6.48</p>
               </div>
            </div>
          </div>
          <div className={Styles.CardsLists}>
           <img src={DesignEight} alt="Furniture Eight" className={Styles.bestDesign} />
            <div className={Styles.CardsItems}>
             <h3 className={Styles.styleH3}>Brands Design</h3>
             <p className={Styles.styleP}>Décision d'achat</p>
               <div className={Styles.CardsPayment}>
                 <p className={Styles.PaymentColor1}>$16.48</p>
                 <p className={Styles.PaymentColor2}>$6.48</p>
               </div>
            </div>
          </div>
          <div className={Styles.CardsLists}>
           <img src={DesignNine} alt="Furniture Nine" className={Styles.bestDesign} />
            <div className={Styles.CardsItems}>
             <h3 className={Styles.styleH3}>Brands Design</h3>
             <p className={Styles.styleP}>Décision d'achat</p>
               <div className={Styles.CardsPayment}>
                 <p className={Styles.PaymentColor1}>$16.48</p>
                 <p className={Styles.PaymentColor2}>$6.48</p>
               </div>
            </div>
          </div>
          <div className={Styles.CardsLists}>
           <img src={DesignTen} alt="Furniture Ten" className={Styles.bestDesign} />
            <div className={Styles.CardsItems}>
             <h3 className={Styles.styleH3}>Brands Design</h3>
             <p className={Styles.styleP}>Décision d'achat</p>
               <div className={Styles.CardsPayment}>
                 <p className={Styles.PaymentColor1}>$16.48</p>
                 <p className={Styles.PaymentColor2}>$6.48</p>
               </div>
            </div>
          </div>
          <button className={Styles.SectionBButton} onClick={handleLoadMoreClick}>
           LOAD MORE PRODUCTS
          </button>
       </div>
    </div>
  )
}

export default SectionB;
