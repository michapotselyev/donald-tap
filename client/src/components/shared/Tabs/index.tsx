import { ReactNode, useMemo, useState } from "react";
import classNames from "classnames";
import styles from "./style.module.scss";

interface TabsType {
  defaultName?: string;
  data: {
    name: string;
    content: ReactNode;
  }[];
}

const Tabs = ({ defaultName, data }: TabsType) => {
  const [currentTab, setCurrentTab] = useState(
    data[0]?.name || defaultName || ""
  );

  const currentValue = useMemo(
    () => data.find((tab) => tab.name === currentTab),
    [currentTab, data]
  );

  return (
    <div className={styles.tabContainer}>
      <ul className={styles.tabs}>
        <div
          className={classNames(
            styles.tabBlock,
            currentValue?.name === (data || [])[0].name
              ? ""
              : styles.tabBlock_active
          )}
        ></div>
        {(data || []).map((tab) => (
          <li
            className={classNames(
              styles.tab,
              currentValue?.name === tab.name ? styles.tab_active : ""
            )}
            onClick={() => setCurrentTab(tab.name)}
          >
            {tab.name || ""}
          </li>
        ))}
      </ul>
      <div className={styles.tabContent}>{currentValue?.content || ""}</div>
    </div>
  );
};

export default Tabs;
