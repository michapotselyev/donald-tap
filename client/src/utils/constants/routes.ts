import Tasks from "@/pages/Tasks";
import Account from "@/pages/Account";
import Home from "@/pages/Home";
import Friends from "@/pages/Friends";

export const pages = {
  home: { url: "/", element: Home },
  account: { url: "/account", element: Account },
  tasks: { url: "/tasks", element: Tasks },
  friends: { url: "/friends", element: Friends },
};
