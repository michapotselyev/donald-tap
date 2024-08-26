import Account from "../../pages/Account";
import Home from "../../pages/Home";

export const pages = {
  home: { url: "/", element: Home },
  account: { url: "/account", element: Account },
  friends: { url: "/friends", element: Account },
  tasks: { url: "/tasks", element: Account },
};
