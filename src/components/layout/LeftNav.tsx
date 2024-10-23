import Link from "next/link";
import React from "react";

// Material Iconsのインポート
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MessageIcon from "@mui/icons-material/Message";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import PersonIcon from "@mui/icons-material/Person";

const NAV_ITEMS = [
  {
    name: "Home",
    href: "/",
    icon: <HomeIcon />,
  },
  {
    name: "Search",
    href: "/Search",
    icon: <SearchIcon />,
  },
  {
    name: "Bell",
    href: "/Bell",
    icon: <NotificationsIcon />,
  },
  {
    name: "Message",
    href: "/Message",
    icon: <MessageIcon />,
  },
  {
    name: "Bookmark",
    href: "/Bookmark",
    icon: <BookmarkIcon />,
  },
  {
    name: "Profile",
    href: "/Profile",
    icon: <PersonIcon />,
  },
];

export const LeftNav = () => {
  return (
    <div className="flex" style={styles.navContainers}>
      {NAV_ITEMS.map((nav) => (
        <div key={nav.name} style={styles.navContainer}>
          <NavItem href={nav.href} name={nav.name} icon={nav.icon} />
        </div>
      ))}
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  navContainers: {
    width: "5em",
    display: "flex",
    flexDirection: "column",
    position: "fixed",
  },
  navContainer: {
    width: "5em",
    height: "5em",
    gap: "1rem",
    padding: "1rem",
    backgroundColor: "#f0f0f0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};

type Props = {
  href: string;
  name: string;
  icon: React.ReactNode; //MaterialIconを使うときはこの型
};

export const NavItem = (props: Props) => {
  const { name, href, icon } = props;
  return (
    <Link
      key={name}
      href={href}
      className="block p-4 text-gray-800 hover:bg-gray-100"
    >
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        {icon}
      </div>
    </Link>
  );
};
