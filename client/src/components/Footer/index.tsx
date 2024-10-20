import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { pages } from "../../utils/constants/routes";
import styles from "./style.module.scss";
import { MainContext } from "../layout/Main/MainContext";
import { MENU_ITEMS } from "@/utils/constants/menuIcons";

const Footer = () => {
  const { activeIndex, menuBorderRef, menuRef, clickItem } =
    useContext(MainContext);
  const currentRouter = useLocation();
  const navigation = useNavigate();

  const changeNavigation = (router: string,index: number) => {
    clickItem(index)
    if (checkRouter(router)) return;
    navigation(router);
  };

  const checkRouter = (router: string) => router === currentRouter.pathname;

  function setBgColor(color: string) {
    document.documentElement.style.setProperty("--bgColorItem", color);
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div ref={menuRef} className="menu">
          {MENU_ITEMS.map((item, index) => {
            if(checkRouter(item.route)) setBgColor(item.bgColorItem)
            return ( <button
              key={index}
              className={`menu__item ${checkRouter(item.route) ? "active" : ""}`}
              // @ts-ignore
              style={{ "--bgColorItem": item.bgColorItem }}
              onClick={() => changeNavigation(item.route,index)}
            >
              <svg className="icon" viewBox="0 0 24 24">
                {item.iconPath.map((d, i) => (
                  <path key={i} d={d} />
                ))}
              </svg>
            </button>)
          })}
          <div ref={menuBorderRef} className="menu__border"></div>
        </div>

        <div className="svg-container">
          <svg viewBox="0 0 202.9 45.5">
            <clipPath
              id="menu"
              clipPathUnits="objectBoundingBox"
              transform="scale(0.0049285362247413 0.021978021978022)"
            >
              <path d="M6.7,45.5c5.7,0.1,14.1-0.4,23.3-4c5.7-2.3,9.9-5,18.1-10.5c10.7-7.1,11.8-9.2,20.6-14.3c5-2.9,9.2-5.2,15.2-7c7.1-2.1,13.3-2.3,17.6-2.1c4.2-0.2,10.5,0.1,17.6,2.1c6.1,1.8,10.2,4.1,15.2,7c8.8,5,9.9,7.1,20.6,14.3c8.3,5.5,12.4,8.2,18.1,10.5c9.2,3.6,17.6,4.2,23.3,4H6.7z" />
            </clipPath>
          </svg>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
