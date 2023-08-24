import React from 'react'
import Styles from '@/components/Services/Services.module.scss'

function Services() {
  return (
    <div className={Styles.container}>
      <div className={Styles.title_container}>
        <p>What we do</p>
      </div>
      <div className={Styles.content_wrapper}>
        <div className={Styles.list}>
          <div className={Styles.first}>
            <p>1</p>
            <p>Research & Product Discovery</p>
          </div>
          <div className={Styles.second}>
            <p>2</p>
            <p>Product Design & UX/UI</p>
          </div>
          <div className={Styles.third}>
            <p>3</p>
            <p>Branding & Strategy</p>
          </div>
          <div className={Styles.fourth}>
            <p>4</p>
            <p>Software Engineering</p>
          </div>
          <div className={Styles.fifth}>
            <p>5</p>
            <p>Scale & Maintenance</p>
          </div>
        </div>
        <div className={Styles.line}></div>
        <div className={Styles.desc}>
          <p>
            Through workshops and modern research methods we’ll test your idea,
            make sure it fits the market and show you how to turn it into
            reality.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Services
