import React from "react";
import Styles from "./ServicesText.module.scss";

const ServicesText = ({text, title}) => {
  return (
    <div className={Styles.desc}>
      <p>{title}</p>
      <p>
        {text}
      </p>
    </div>
  );
};
export default ServicesText;
