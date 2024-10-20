import React from "react";
import HomeIcon from "@/assets/icons/home.svg";
import AccountIcon from "@/assets/icons/account.svg";
import FriendsIcon from "@/assets/icons/friends.svg";
import TasksIcon from "@/assets/icons/tasks.svg";

type IconProps = {
  name: "home" | "account" | "friends" | "tasks";
  className?: string;
  width?: number;
  height?: number;
};

const icons = {
  home: HomeIcon,
  account: AccountIcon,
  friends: FriendsIcon,
  tasks: TasksIcon,
};

const Icon = React.memo(({ name, className, width, height, ...props }: IconProps) => {
  if (!icons[name]) {
    return null;
  }
  return <img src={icons[name]} className={className} width={width} height={height} {...props} alt={name} />;
});

export default Icon;
