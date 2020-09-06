import React from "react";

import Backdrop from "../BackDrop/Backdrop";
import Aux from "../../../hoc/Auxilliary";
import styles from "./Modal.module.css";

const modal = (props) => {
  return (
    <Aux>
      <Backdrop canceled={props.canceled} show={props.show}/>
      <div
        className={styles.Modal}
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.show ? "1" : "0",
        }}
      >
        {props.children}
      </div>
    </Aux>
  );
};

export default modal;
