import React from "react";
import styles from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredients/BurgerIngredients";

const burger = (props) => {
  let transformedIng = Object.keys(props.ingredients)
    .map((igKey) => {
      return [...Array(props.ingredients[igKey])].map((_, cntInd) => {
        return <BurgerIngredient key={igKey + cntInd} type={igKey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

  if (transformedIng.length === 0) {
    transformedIng = <p>Please start adding ingredients!</p>;
  }

  return (
    <div className={styles.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIng}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
