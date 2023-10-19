import Image from 'next/image'
import React from 'react'
import styles from './WorkItem.module.scss'

function WorkItem({ works }) {
  return (
    <div className={styles.works_container}>
      {works.map((work, index) => (
        <div className={styles.work_item} key={work.id}>
          <div className={`${styles.dashBoard} ${work?.color === 'green' ? styles.gradient: ''} `}

           
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
  )
}

export default WorkItem
