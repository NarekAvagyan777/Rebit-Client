import React from "react";
import Styles from "./ServicesText.module.scss";

const ServicesText = ({text}) => {
  return (
    <div className={Styles.desc}>
      <p>
        {text}
      </p>
    </div>
  );
};
export default ServicesText;
