import { useState } from "react";
import styles from "./style.module.scss";
import classNames from "classnames";
import Icon from "../Icon";

type routerTypes = "home" | "account" | "friends" | "tasks";

const Footer = () => {
  const [currentRouter, setCurrentRouter] = useState("home");

  const changeNavigation = (router: routerTypes) => {
    if (checkRouter(router)) return;
    setCurrentRouter(router);
  };

  const checkRouter = (router: routerTypes) => {
    return router === currentRouter;
  };
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <ul className={styles.navigation}>
          <li className={styles.navigationItem}>
            <button onClick={() => changeNavigation("home")} className={classNames(styles.navigationButton, checkRouter("home") ? styles.navigationButton_active : "")}>
              <Icon width={20} height={20} name="home" />
              Home
            </button>
          </li>
          <li className={styles.navigationItem}>
            <button onClick={() => changeNavigation("account")} className={classNames(styles.navigationButton, checkRouter("account") ? styles.navigationButton_active : "")}>
              <Icon width={20} height={20} name="account" />
              Account
            </button>
          </li>
          <li className={styles.navigationItem}>
            <button onClick={() => changeNavigation("friends")} className={classNames(styles.navigationButton, checkRouter("friends") ? styles.navigationButton_active : "")}>
              <Icon width={20} height={20} name="friends" />
              Friends
            </button>
          </li>
          <li className={styles.navigationItem}>
            <button onClick={() => changeNavigation("tasks")} className={classNames(styles.navigationButton, checkRouter("tasks") ? styles.navigationButton_active : "")}>
              <Icon width={20} height={20} name="tasks" />
              Tasks
            </button>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
