import Head from 'next/head'
import styles from '@/pages/aboutus/aboutus.module.scss'

export default function index() {
  return (
    <>
      <Head>
        <title>About Us</title>
        <meta name="description" content="about us" />
      </Head>
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <h1>
            We are one of the fastest-growing <span>digital consultancies</span>
            .
          </h1>
        </div>
        <div>
          <div className={styles.content}>
            <div>
              <p>sasa</p>
            </div>
            <div>
              <div className={styles.description}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
              </div>
              <div className={styles.project}>
                <div className={styles.project_info}>
                  <p>Projects done</p>
                  <p>20+</p>
                </div>
                <div className={styles.project_info}>
                  <p>Team members</p>
                  <p>15</p>
                </div>
                <div className={styles.project_info}>
                  <p>Years of experience</p>
                  <p>3</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.about}>
            <div className={styles.about_container}>
              <div>
                <p>We are</p>
                <p>
                  Team play<span>ers</span>
                </p>
              </div>
              <div>1</div>
            </div>
            <div className={styles.about_container}>
              <div>
                <p>We are</p>
                <p>
                  Creat<span>ors</span>
                </p>
              </div>
              <div>1</div>
            </div>
            <div className={styles.about_container}>
              <div>
                <p>We are</p>
                <p>
                  Strateg<span>ists</span>
                </p>
              </div>
              <div>1</div>
            </div>
            <div className={styles.about_container}>
              <div>
                <p>We are</p>
                <p>
                  Design<span>ers</span>
                </p>
              </div>
              <div>1</div>
            </div>
            <div className={styles.about_container}>
              <div>
                <p>We are</p>
                <p>
                  Design<span>ers</span>
                </p>
              </div>
              <div>1</div>
            </div>
            <div className={styles.about_container}>
              <div>
                <p>We are</p>
                <p>
                  Startup<span>ers</span>
                </p>
              </div>
              <div>1</div>
            </div>

            <div className={styles.aboutus}>
              <div>
                <p>Our vision</p>
              </div>
              <div className={styles.mission_container}>
                <div>
                  <p>2</p>
                </div>
                <div id='vision'>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.aboutus}>
              <div>
                <p>Our mission</p>
              </div>
              <div className={styles.mission_container}>
                <div id='mission'>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                </div>

                <div>
                  <p>2</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
