import React from "react";
import Link from "next/link";
// シーンインポート
import { Message } from "../features/Message/Message";
import { Bookmark } from "../features/Bookmark/Bookmark";
import { Profile } from "../features/Profile/Profile";
// アイコンインポート
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MessageIcon from "@mui/icons-material/Message";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import PersonIcon from "@mui/icons-material/Person";

const NAV_ITEMS = [
  { name: "Home", href: "/", icon: <HomeIcon /> },
  { name: "Search", href: "/Search", icon: <SearchIcon /> },
  { name: "Bell", href: "/Bell", icon: <NotificationsIcon /> },
  { name: "Message", href: "./Message/Message", icon: <MessageIcon /> },
  { name: "Bookmark", href: "./Bookmark/Bookmark", icon: <BookmarkIcon /> },
  { name: "Profile", href: "./Profile/Profile", icon: <PersonIcon /> },
];

export const LeftNav = () => {
  return (
    <div className="flex" style={styles.navContainers}>
      {NAV_ITEMS.map((nav) => (
        <NavItem
          key={nav.name}
          name={nav.name}
          icon={nav.icon}
          href={nav.href}
        />
      ))}
    </div>
  );
};
type Props = {
  name: string;
  icon: React.ReactNode;
  href: string;
};

const NavItem = (props: Props) => {
  const { icon, href } = props;
  return (
    <div style={styles.navContainer}>
      <div style={styles.blank}></div>
      <Link
        href={href}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          width: "50%",
        }}
      >
        {icon}
      </Link>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  navContainers: {
    width: "10%",
    display: "flex",
    flexDirection: "column",
    position: "fixed",
    height: "100%",
    backgroundColor: "#f0f0f0",
  },
  navContainer: {
    width: "100%",
    height: "5em",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer", // カーソルをポインタに変更
  },
  blank: {
    width: "50%",
  },
};
