import React from "react";
import classNames from "classnames";
import Icon from "../Icon";
import styles from "./style.module.scss";

type NavigationButtonProps = {
  onClick: () => void;
  isActive: boolean;
  iconName: "home" | "account" | "friends" | "tasks";
  label: string;
};

const NavigationButton = React.memo(({ onClick, isActive, iconName, label }: NavigationButtonProps) => (
  <button onClick={onClick} className={classNames(styles.navigationButton, isActive ? styles.navigationButton_active : "")}>
    <Icon width={20} height={20} name={iconName} />
    {label}
  </button>
));

export default NavigationButton;
