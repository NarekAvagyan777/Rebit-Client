'use client'
import React from 'react'
import styles from '@/pages/Services/Services.module.scss'

function Services() {
  return (
    <div className={styles.container}>
      <h1>We do what we do best.</h1>
      <div className={styles.innerContainer}>
        <div className={styles.titleContainer}>
          <div className={styles.linkitem}>
            <a>Research & Product Discovery</a>
          </div>
          <div className={styles.linkitem}>
            <a>Product Design & UX/UI</a>
          </div>
          <div className={styles.linkitem}>
            <a>Branding & Strategy</a>
          </div>
          <div className={styles.linkitem}>
            <a>Software Engineering</a>
          </div>
          <div className={styles.linkitem}>
            <a>Scale & Maintenance</a>
          </div>
        </div>
        <div>
          <div className={styles.contentContainer}>
            <h2>Research & Product Discovery</h2>
            <p>
              Through workshops and cutting-edge research methodologies we'll
              test your idea, make sure it suits the market, and demonstrate you
              how to turn it into reality.
            </p>
            <div>
              <p>
                <b>We can:</b>
              </p>
              <ul>
                <li>
                  <b>Validate</b> your idea
                </li>
                <li>
                  <b>Understand</b> your users
                </li>
                <li>
                  <b>Develop</b> efficiently
                </li>
                <li>
                  <b>Prevent</b> costly mistakes
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
