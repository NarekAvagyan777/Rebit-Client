import Image from "next/image";
import styles from "./featured.module.scss";
import epam from "@/assets/image/img/epam.png";
import starbucks from "@/assets/image/img/starbucks.png";
import Img1 from "../../assets/image/img/img3.svg";
import Img2 from "../../assets/image/img/img2.svg";
import cocacola from "@/assets/image/img/coca-cola.png";

export default function FeaturedProjects() {
  const images = [
    {
      image: Img2,
      color: "blue",
      name:"Epam"
    },
    {
      image: Img1,
      color: "green",
      name:"Starbucks"
    },
    {
      image: Img2,
      color: "blue",
      name:"Epam"
    },
  ];
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Featured projects</h2>

      <div className={styles.content_wrapper}>
        {images.map((el) => (
          <div className={styles.itemCont}>
            <div
              className={
                el?.color === "green"
                  ? styles.dashBoard__green
                  : styles.dashBoard__blue
              }
            >
              <Image src={el?.image} alt="ProjectImage" className={styles.projectImage}/>
            </div>
            <p className={styles.projectText}>{el?.name}</p>
          </div>
        ))}
        {/* <div>
                <Image src={epam}  alt='ProjectImage'/>
                <p>Epam</p>
            </div>
            <div>
                <Image src={starbucks}  alt='ProjectImage'/>
                <p>Starbucks</p>
            </div>
            <div>
                <Image src={cocacola} alt='ProjectImage'/>
                <p>Coca-Cola</p>
            </div> */}
      </div>
    </div>
  );
}
