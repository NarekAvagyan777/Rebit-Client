"use client";
import Link from "next/link";
import styles from "@/pages/Services/Services.module.scss";
import { useEffect } from "react";

function Services() {
  return (
    <div className={styles.container}>
      <h1>We do what we do best.</h1>
      <div className={styles.innerContainer}>
        <div className={styles.titleContainer}>
          <div className={styles.linkitem}>
            <Link href="#research">Research & Product Discovery</Link>
          </div>
          <div className={styles.linkitem}>
            <Link href="#design">Product Design & UX/UI</Link>
          </div>
          <div className={styles.linkitem}>
            <Link href="#branding">Branding & Strategy</Link>
          </div>
          <div className={styles.linkitem}>
            <Link href="#software">Software Engineering</Link>
          </div>
          <div className={styles.linkitem}>
            <Link href="#scale">Scale & Maintenance</Link>
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

          <div className={styles.contentContainer}>
            <h2>Product Design & UX/UI</h2>
            <p>
              Intuitive design is a must-have for any software product. Our
              product design team specializes in creating user interfaces both
              aesthetically pleasing and easy to use.
            </p>
            <div>
              <p>
                <b>What we do:</b>
              </p>
              <ul>
                <li>
                  Business process <b>audit</b> and <b>UX analytics</b>
                </li>
                <li>
                  <b>User testing</b>
                </li>
                <li>
                  Mobile and web <b>interface design</b>
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.contentContainer}>
            <h2>Branding & Strategy</h2>
            <p>
              At the core of our approach, we maintain that brand and UX are
              closely connected and work together. Our team specializes in
              creating and representing digital brand identities across
              channels, providing strategy assistance and guidelines to ensure
              consistency.
            </p>
            <div>
              <p>
                <b>What we do:</b>
              </p>
              <ul>
                <li>
                  Brand <b>Strategy</b>
                </li>
                <li>
                  Brand <b>Architecture</b>
                </li>
                <li>
                  <b>Visual</b> identity
                </li>
                <li>
                  Brand <b>Guidelines</b>
                </li>
                <li>
                  Brand <b>Experiences</b>
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.contentContainer}>
            <h2>Software Engineering</h2>
            <p>
              Our team of experts ensure that your software product is
              complete and polished using a multidisciplinary approach and
              rigorous QA methods regardless of the platform.
            </p>
            <div>
              <p>
                <b>What we do:</b>
              </p>
              <ul>
                <li>
                  <b>Web</b> app development
                </li>
                <li>
                  <b>Mobile</b> app development
                </li>
                <li>
                  <b>Quality Assurance</b>
                </li>
                <li>
                  <b>AI</b>-powered apps
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.contentContainer}>
            <h2>Scale & Maintenance</h2>
            <p>
              Intuitive design is a must-have for any software product. Our
              product design team specializes in creating user interfaces both
              aesthetically pleasing and easy to use.
            </p>
            <div>
              <p>
                <b>What we do:</b>
              </p>
              <ul>
                <li>
                  Business process <b>audit</b> and <b>UX analytics</b>
                </li>
                <li>
                  <b>User testing</b>
                </li>
                <li>
                  Mobile and web <b>interface design</b>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
