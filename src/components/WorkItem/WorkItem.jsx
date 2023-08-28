import Image from "next/image";
import React from "react";
import styles from "./WorkItem.module.scss";

function WorkItem({ works }) {
  return (
    <div className={styles.works_container}>
      {works.map((work) => (
        <div className={styles.work_item} key={work.id}>
          {/* <div style={{ display: 'flow', width: '100%' }}> */}
          {/* <Image src={work.img} alt={work.title} width={520} /> */}
          {/* </div> */}
          <div
            className={
              work?.color === "green"
                ? styles.dashBoard__green
                : styles.dashBoard__blue
            }
          >
            <Image
              src={work.img}
              alt={work.title}
              width={520}
              className={styles.wotkImg}
            />
          </div>
          <div className={styles.textCont}>
            <h3>{work.title}</h3>
            <p>{work.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default WorkItem;
