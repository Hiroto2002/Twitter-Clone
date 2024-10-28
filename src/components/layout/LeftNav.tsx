
"use client";

import React, { useState } from "react";
// シーンインポート
import { Home } from "./Home/Home";
import { Search } from "./Search/Search";
import { Bell } from "./Bell/Bell";
import { Message } from "./Message/Message";
import { Bookmark } from "./Bookmark/Bookmark";
import { Profile } from "./Profile/Profile";
// アイコンインポート
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MessageIcon from '@mui/icons-material/Message';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import PersonIcon from '@mui/icons-material/Person';

const NAV_ITEMS = [
  { name: "Home", component: <Home />, icon: <HomeIcon /> },
  { name: "Search", component: <Search />, icon: <SearchIcon /> },
  { name: "Bell", component: <Bell />, icon: <NotificationsIcon /> },
  { name: "Message", component: <Message />, icon: <MessageIcon /> },
  { name: "Bookmark", component: <Bookmark />, icon: <BookmarkIcon /> },
  { name: "Profile", component: <Profile />, icon: <PersonIcon /> },

];

export const LeftNav = () => {
  const [activeComponent, setActiveComponent] = useState(<Home />); // ホーム画面をデフォルトで表示
  return (

    <div >
      <div className="flex" style={styles.navContainers}>
        {NAV_ITEMS.map((nav) => (
          <NavItem
            key={nav.name}
            name={nav.name}
            icon={nav.icon}
            onClick={() => setActiveComponent(nav.component)}
          />
        ))}
      </div>
      <div style={styles.contentContainer}>
        {activeComponent} {/* 現在選択されているコンポーネントを表示 */}
      </div>
    </div>
  );
};
type Props = {
  name: string;
  icon: React.ReactNode;
  onClick: () => void;
};

const NavItem = (props: Props) => {
  const { name, icon, onClick } = props;
  return (
    <div style={styles.navContainer} onClick={onClick}>
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        {icon}
      </div>
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
    backgroundColor: "#f0f0f0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer", // カーソルをポインタに変更
  },
  contentContainer: {
    marginLeft: "6em", // ナビゲーションバーの右側に表示
    width: "100%",
  },

};
