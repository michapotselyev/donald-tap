import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import NavigationButton from "../shared/NavigationButton";
import { pages } from "../../utils/constants/routes";
import styles from "./style.module.scss";

const Footer = React.memo(() => {
  const currentRouter = useLocation();
  const navigation = useNavigate();

  const changeNavigation = (router: string) => {
    if (checkRouter(router)) return;
    navigation(router);
  };

  const checkRouter = (router: string) => router === currentRouter.pathname;

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <ul className={styles.navigation}>
          <li className={styles.navigationItem}>
            <NavigationButton onClick={() => changeNavigation(pages.home.url)} isActive={checkRouter(pages.home.url)} iconName="home" label="Home" />
          </li>
          <li className={styles.navigationItem}>
            <NavigationButton onClick={() => changeNavigation(pages.account.url)} isActive={checkRouter(pages.account.url)} iconName="account" label="Account" />
          </li>
          <li className={styles.navigationItem}>
            <NavigationButton onClick={() => changeNavigation(pages.friends.url)} isActive={checkRouter(pages.friends.url)} iconName="friends" label="Friends" />
          </li>
          <li className={styles.navigationItem}>
            <NavigationButton onClick={() => changeNavigation(pages.tasks.url)} isActive={checkRouter(pages.tasks.url)} iconName="tasks" label="Tasks" />
          </li>
        </ul>
      </div>
    </footer>
  );
});

export default Footer;
