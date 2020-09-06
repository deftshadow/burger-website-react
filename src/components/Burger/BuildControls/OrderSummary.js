import React from "react";
import Aux from "../../../hoc/Auxilliary";
import Button from "../../UI/Button/Button";

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredient).map((igKey) => {
    return (
      <li key={igKey}>
        <p>
          <span style={{ textTransform: "capitalize" }}>{igKey}: </span>
          {props.ingredient[igKey]}
        </p>
      </li>
    );
  });

  return (
    <Aux>
      <div style={{ backgroundColor: "#0e4cb1", padding: "2px 16px" }}>
        <h3>Your Order</h3>
      </div>
      <div style={{ padding: "16px" }}>
        <p>A delicious burger with: </p>
        <ul>{ingredientSummary}</ul>
        <div style={{ fontWeight: "bold" }}>
          Total Price: {props.totalPrice.toFixed(2)}$
        </div>
      </div>
      <div style={{ backgroundColor: "#0e4cb1", padding: "2px 8px" }}>
        <h3>Continue to checkout? </h3>
        <Button type="Danger" clicked={props.purchaseCancelled}>
          CANCEL
        </Button>
        <Button type="Success" clicked={props.purchaseCommitted}>
          CONTINUE
        </Button>
      </div>
    </Aux>
  );
};

export default orderSummary;
