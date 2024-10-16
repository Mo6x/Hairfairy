import React from "react";
import styles from "./CategorieModels.module.css";



interface CategorieModelsProps {
  onClose: () => void;
}

export const CategorieModels: React.FC<CategorieModelsProps> = ({ onClose }) => {
  return (
    <div className={styles.modalBackground}>
      <div className={styles.categorieModelsContainer}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        <h2 className={styles.modalTitle}>Categories</h2>
        <ul className={styles.categoryList}>
          <li>Category 1</li>
          <li>Category 2</li>
          <li>Category 3</li>
          <li>Category 4</li>
          <li>Category 5</li>
        </ul>
      </div>
    </div>
  );
};

export default CategorieModels;
