// "use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "@/pages/Services/Services.module.scss";
import Head from "next/head";

const ServiceItem = ({ item }) => {
  return (
    <div className={styles.service_item}>
      <p>{item}</p>
    </div>
  );
};

function Services() {
  const router = useRouter();
  const [isSticky, setIsSticky] = useState(false);

  const research = [
    "Discover",
    "Kickoff Meeting",
    "Stakeholder Interviews",
    "Problem Framing",
    "Market Analysis",
    "User Interviews",
    "User Personas",
    "Affinity Mapping",
    "Competitor Analysis",
    "Benchmarking",
    "Workshops",
    "Functionality Prioritization",
    "Roadmapping",
  ];
  const design = [
    "UX/UI",
    "User Experience Meeting",
    "Design Systems",
    "Product Design",
    "User Testing",
    "Wireframes",
    "User Flows",
    "Journey Mapping",
    "Prototyping",
    "UI Kit",
    "UI Design",
    "Mockups",
    "Icons",
    "Heuristic Evaluation",
    "Usability Testing",
    "User Interface",
    "UX Design",
    "Contextual Inquiry",
  ];
  const branding = [
    "Branding Research",
    "Naming",
    "Brand Identity",
    "Logo",
    "Identity Guidelines",
    "Rebranding",
    "Marketing Materials",
    "SEO",
    "Content Writing",
    "Verbal Identity",
    "Visual Identity",
    "Social Media",
    "Brand Illustrations",
    "Pitch Deck",
  ];
  const software = [
    "Frontend Engineering",
    "Backend Engineering",
    "Mobile App",
    "React",
    "Python",
    "Web Development",
    "iOS Development",
    "Swift",
    "Android Development",
    "Kotlin",
    "Vue",
    "HTML",
    "CSS",
    "JavaScript",
    "Node.js",
    "React Native",
    "PHP",
  ];
  const scale = [
    "Discover",
    "Kickoff Meeting",
    "Stakeholder Interviews",
    "Problem Framing",
    "Market Analysis",
    "User Interviews",
    "User Personas",
    "Affinity Mapping",
    "Competitor Analysis",
    "Benchmarking",
    "Workshops",
    "Functionality Prioritization",
    "Roadmapping",
  ];

  useEffect(() => {
    const idHashMapping = {
      research: "researches",
      design: "designes",
      branding: "brandinges",
      software: "softwarees",
      scale: "scalees",
    };

    if (router.asPath.includes("#")) {
      const last = router.asPath.split("#")[1];

      const header = document.getElementById("header");
      const elementId = idHashMapping[last];

      if (elementId) {
        const element = document.getElementById(elementId);
        if (element) {
          const rect =
            element.getBoundingClientRect().top +
            window.pageYOffset -
            header.clientHeight;
          // console.log('top', element.getBoundingClientRect().top)
          // console.log('header', header.clientHeight);
          // console.log('pageYOffset', window.pageYOffset);
          // console.log('rect', rect)
          window.scrollTo({ top: rect, behavior: "smooth" });
        }
      }
    }
  });

  console.log("router", router);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const titleContainer = document.querySelector(`.${styles.titleContainer}`)
  //     const container = document.querySelector(`.${styles.container}`)

  //     const rect = container.getBoundingClientRect()
  //     if (rect.top <= 0) {
  //       setIsSticky(true)
  //     } else {
  //       setIsSticky(false)
  //     }
  //   }

  //   window.addEventListener('scroll', handleScroll)

  //   // Clean up the event listener on component unmount
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll)
  //   }
  // }, [])
  return (
    <>
      <Head>
        <title>Services</title>
        <meta name="description" content="about our services" />
      </Head>
      <div className={styles.container}>
        <h1>We do what we do best.</h1>
        <div className={styles.innerContainer}>
          <div
            className={`${styles.titleContainer} ${
              isSticky ? styles.sticky : ""
            }`}
          >
            <div
              className={`${styles.linkitem} ${
                router.asPath === "/Services#research" ? styles.active : ""
              }`}
            >
              <Link href="#research">Research & Product Discovery</Link>
            </div>
            <div
              className={`${styles.linkitem} ${
                router.asPath === "/Services#design" ? styles.active : ""
              }`}
            >
              <Link href="#design">Product Design & UX/UI</Link>
            </div>
            <div
              className={`${styles.linkitem} ${
                router.asPath === "/Services#branding" ? styles.active : ""
              }`}
            >
              <Link href="#branding">Branding & Strategy</Link>
            </div>
            <div
              className={`${styles.linkitem} ${
                router.asPath === "/Services#software" ? styles.active : ""
              }`}
            >
              <Link href="#software">Software Engineering</Link>
            </div>
            <div
              className={`${styles.linkitem} ${
                router.asPath === "/Services#scale" ? styles.active : ""
              }`}
            >
              <Link href="#scale">Scale & Maintenance</Link>
            </div>
          </div>
          <div>
            <div className={styles.contentContainer} id="researches">
              <h2>Research & Product Discovery</h2>
              <p>
                Through workshops and cutting-edge research methodologies we'll
                test your idea, make sure it suits the market, and demonstrate
                you how to turn it into reality.
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
              <div className={styles.service_item_container}>
                {research.map((item, index) => (
                  <ServiceItem key={index} item={item} />
                ))}
              </div>
            </div>

            <div className={styles.contentContainer} id="designes">
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
              <div className={styles.service_item_container}>
                {design.map((item, index) => (
                  <ServiceItem key={index} item={item} />
                ))}
              </div>
            </div>

            <div className={styles.contentContainer} id="brandinges">
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
              <div className={styles.service_item_container}>
                {branding.map((item, index) => (
                  <ServiceItem key={index} item={item} />
                ))}
              </div>
            </div>

            <div className={styles.contentContainer} id="softwarees">
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
              <div className={styles.service_item_container}>
                {software.map((item, index) => (
                  <ServiceItem key={index} item={item} />
                ))}
              </div>
            </div>

            <div className={styles.contentContainer} id="scalees">
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
              <div className={styles.service_item_container}>
                {software.map((item, index) => (
                  <ServiceItem key={index} item={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
