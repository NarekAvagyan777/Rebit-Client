import React, { useState } from "react";
import ServicesText from "./ServicesText/ServicesText";
import Styles from'./Services.module.scss';

function Services() {
  const pages = {
    "Research & Product Discovery": {
      text: "Through workshops and modern research methods we’ll test your idea,make sure it fits the market and show you how to turn it into reality.",
    },
    "Product Design & UX/UI": {
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dignissimos? Eligendi explicabo rem cupiditate maxime magni quidem in praesentium dolores dolorem sapiente architecto.'
    },
    "Branding & Strategy": {
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dignissimos? Eligendi explicabo rem cupiditate maxime magni quidem in praesentium dolores dolorem sapiente architecto, nostrum eos, iste voluptates ratione porro eum.'

    },
    "Software Engineering": {
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dignissimos? Eligendi explicabo rem cupiditate maxime magni quidem in praesentium dolores.'

    },
    "Scale & Maintenance": {
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dignissimos? Eligendi explicabo rem cupiditate maxime magni quidem in praesentium dolores dolorem sapiente architecto, nostrum eos, iste voluptates ratione porro eum.'

    },
  };

  const [currentPageKey, setCurrentPageKey] = useState(
    "Research & Product Discovery"
  );

  const hanlePageClick = (key) => {
    setCurrentPageKey(key);
  };

  return (
    <div className={Styles.container}>
      <div className={Styles.title_container}>
        <p>What we do</p>
      </div>
      <div className={Styles.content_wrapper}>
        <div className={Styles.list}>
          <div
            className={Styles.first}
            onClick={() => {
              hanlePageClick("Research & Product Discovery");
            }}
            style={
              currentPageKey === "Research & Product Discovery"
                ? {
                    backgroundColor: "#00da49",
                  }
                : null
            }
          >
            <p
              style={
                currentPageKey === "Research & Product Discovery"
                  ? {
                      backgroundColor: "#ffffff",
                      color: "#004538",
                    }
                  : null
              }
            >
              1
            </p>
            <p>Research & Product Discovery</p>
          </div>
          <div className={Styles.second} onClick={() => {hanlePageClick("Product Design & UX/UI");}}style={
              currentPageKey === "Product Design & UX/UI" ? {backgroundColor: "#00da49",}: null}>
            <p style={currentPageKey === "Product Design & UX/UI"? {backgroundColor: "#ffffff",color: "#004538",}: null}>
              2
            </p>
            <p>Product Design & UX/UI</p>
          </div>
          <div
            className={Styles.third}
            onClick={() => {
              hanlePageClick("Branding & Strategy");
            }}
            style={
              currentPageKey === "Branding & Strategy"
                ? {
                    backgroundColor: "#00da49",
                  }
                : null
            }
          >
            <p
              style={
                currentPageKey === "Branding & Strategy"
                  ? {
                      backgroundColor: "#ffffff",
                      color: "#004538",
                    }
                  : null
              }
            >
              3
            </p>
            <p>Branding & Strategy</p>
          </div>
          <div
            className={Styles.fourth}
            onClick={() => {
              hanlePageClick("Software Engineering");
            }}
            style={
              currentPageKey === "Software Engineering"
                ? {
                    backgroundColor: "#00da49",
                  }
                : null
            }
          >
            <p
              style={
                currentPageKey === "Software Engineering"
                  ? {
                      backgroundColor: "#ffffff",
                      color: "#004538",
                    }
                  : null
              }
            >
              4
            </p>
            <p>Software Engineering</p>
          </div>
          <div
            className={Styles.fifth}
            onClick={() => {
              hanlePageClick("Scale & Maintenance");
            }}
            style={
              currentPageKey === "Scale & Maintenance"
                ? {
                    backgroundColor: "#00da49",
                  }
                : null
            }
          >
            <p
              style={
                currentPageKey === "Scale & Maintenance"
                  ? {
                      backgroundColor: "#ffffff",
                      color: "#004538",
                    }
                  : null
              }
            >
              5
            </p>
            <p>Scale & Maintenance</p>
          </div>
        </div>
        <div className={Styles.line}></div>
        <ServicesText text={pages[currentPageKey]?.text} title={currentPageKey} />
      </div>
    </div>
  );
}

export default Services;
