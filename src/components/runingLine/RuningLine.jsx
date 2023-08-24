"use client";
import React, { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";
import styles from "@/styles/RuningLine.module.scss";
const RuningLine = () => {
  const items = [
    "Branding",
    "Usability Testing",
    "Product Design",
    "Concept Validation",
    "A/B Testing",
    "Market Research",
    "Product Strategy",
    "SEO",
    "SMM",
    "UI Design",
    "Product Analysis",
    "Copywriting",
    "Heuristic Evaluation",
    "Wireframing",
    "Front-End",
    "iOS",
    "Back-End",
    "Android",
    "UX Writing",
    "CJM",
    "User Flows",
    "Empathy Mapping",
    "Prototyping",
    "JTBD",
    "SQL",
    "CRM",
    "Stress Testing",
    "Metrics Analytics",
  ];

  const separateItemsIntoRows = (items) => {
    const firstRow = [];
    const secondRow = [];
    const thirthRow = [];
    for (let i = 0; i < items.length; i += 3) {
      if (items[i] !== undefined) {
        firstRow.push(
          <div
            className={styles.textWrapper}
            key={i}
            style={
              i === items.length
                ? {
                    marginRight: "0px",
                  }
                : null
            }
          >
            <p className={styles.textWrapper__text}>{items[i]}</p>
          </div>
        );
      }
      if (items[i + 1] !== undefined) {
        secondRow.push(
          <div
            className={styles.textWrapper}
            key={i + 1}
            style={
              i === items.length
                ? {
                    marginRight: "0px",
                  }
                : null
            }
          >
            <p className={styles.textWrapper__text}>{items[i + 1]}</p>
          </div>
        );
      }
      if (items[i + 2] !== undefined) {
        thirthRow.push(
          <div
            className={styles.textWrapper}
            key={i + 2}
            style={
              i === items.length
                ? {
                    marginRight: "0px",
                  }
                : null
            }
          >
            <p className={styles.textWrapper__text}>{items[i + 2]}</p>
          </div>
        );
      }
    }
    return [firstRow, secondRow, thirthRow];
  };
  const rows = separateItemsIntoRows(items);
  return (
    <div className={styles.cont}>
      <Marquee
        className={styles.marquee}
        direction={"left"}
        play={true}
        pauseOnHover={true}
        // autoFill={true}
        delay={0}
        speed={100}
        onFinish={() => {
          console.log("finished 1");
        }}
        loop={0}
      >
        {rows[0]}
      </Marquee>
      <Marquee
        direction={"right"}
        play={true}
        pauseOnHover={true}
        // autoFill={true}
        delay={0}
        speed={100}
        onFinish={() => {
          console.log("finished 2");
        }}
        loop={0}
      >
        {rows[1]}
      </Marquee>
      <Marquee
        direction={"left"}
        play={true}
        pauseOnHover={true}
        // autoFill={true}
        delay={0}
        speed={100}
        onFinish={() => {
          console.log("finished 3");
        }}
        loop={0}
      >
        {rows[2]}
      </Marquee>{" "}
    </div>
  );
};
export default RuningLine;
{
  /* <Marquee
className={styles.marquee}
style={{ display: "flex", alignItems: "center", gap: "24px" }}
direction={"left"}
play={true}
pauseOnHover={true}
// autoFill={true}
delay={0}
speed={100}
onFinish={() => {
  console.log("finished 1");
}}
loop={0}
>
{rows[0]}

</Marquee>
<Marquee
style={{ display: "flex", alignItems: "center", gap: "24px" }}
direction={"right"}
play={true}
pauseOnHover={true}
// autoFill={true}
delay={0}
speed={100}
onFinish={() => {
  console.log("finished 2");
}}
loop={0}
>
{rows[1]}
</Marquee>
<Marquee
style={{ display: "flex", alignItems: "center", gap: "24px" }}
direction={"left"}
play={true}
pauseOnHover={true}
// autoFill={true}
delay={0}
speed={100}
onFinish={() => {
  console.log("finished 3");
}}
loop={0}
>
{rows[2]}
</Marquee> */
}
