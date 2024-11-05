"use client";

import React, { useState } from "react";
import { HomeHeader } from "@/components/features/Home/HomeHeader";
import { Post } from "@/components/features/Home/Post";
import { TimeLine } from "./common/TimeLine";

// ポストデータの型
export type PostData = {
  tweetId: number;
  text: string;
  images: never[];
  good: boolean;
  count_good: number;
  count_reply: number;
  count_retweet: number;
  created_at: string;
  user: {
    id: string;
    name: string;
    icon: string;
  };
};

// ユーザーアイコンの取得関数
const getUserIcon = (userId: string) => {
  return `/images/${userId}.png`; // imagesフォルダにユーザーID.pngがある想定
};

// ダミーデータ
const recommendData: PostData[] = [
  {
    tweetId: 1,
    text: "おはよう",
    images: [],
    good: false,
    count_good: 5,
    count_reply: 2,
    count_retweet: 1,
    created_at: "2024-10-24 08:00",
    user: {
      id: "adeam02",
      name: "maehiro",
      icon: getUserIcon("adeam02"),
    },
  },
  {
    tweetId: 2,
    text: "こんにちは",
    images: [],
    good: false,
    count_good: 8,
    count_reply: 3,
    count_retweet: 2,
    created_at: "2024-10-24 12:00",
    user: {
      id: "nyannyanpome",
      name: "にゃんぽめ",
      icon: getUserIcon("nyannyanpome"),
    },
  },
  {
    tweetId: 3,
    text: "こんばんは",
    images: [],
    good: false,
    count_good: 3,
    count_reply: 1,
    count_retweet: 0,
    created_at: "2024-10-24 18:00",
    user: {
      id: "Yura05010",
      name: "ユーロ",
      icon: getUserIcon("Yura05010"),
    },
  },
];

const followingData: PostData[] = [
  {
    tweetId: 1,
    text: "楽しい",
    images: [],
    good: false,
    count_good: 5,
    count_reply: 2,
    count_retweet: 1,
    created_at: "2024-10-27 08:00",
    user: {
      id: "Yura05010",
      name: "ユーロ",
      icon: getUserIcon("Yura05010"),
    },
  },
  {
    tweetId: 2,
    text: "こんにちは",
    images: [],
    good: false,
    count_good: 8,
    count_reply: 3,
    count_retweet: 2,
    created_at: "2024-10-24 12:00",
    user: {
      id: "nyannyanpome",
      name: "にゃんぽめ",
      icon: getUserIcon("nyannyanpome"),
    },
  },
];

export type SelectedTimeline = "おすすめ" | "フォロー中";

export const Home = () => {
  // ヘッダーの状態管理
  const [selectedTimeline, setSelectedTimeline] =
    useState<SelectedTimeline>("おすすめ");
  // タイムライン内のツイート達の状態管理
  const [postData, setPostData] = useState<PostData[]>(recommendData);

  // 選択されたタイムラインのタブをセットする関数
  const handleSetSelectedTimeline = (selected: SelectedTimeline) => {
    setSelectedTimeline(selected);
  };
  // 新しくツイート達をpostDataにセットする関数
  const handleSetPostData = (data: PostData[]) => {
    setPostData(data);
  };

  // 押したらおすすめかフォロー中かを切り替える関数
  const handleSelect = (timeline: SelectedTimeline) => {
    handleSetSelectedTimeline(timeline);
    if (timeline === "おすすめ") {
      handleSetPostData(recommendData);
    } else {
      handleSetPostData(followingData);
    }
  };

  return (
    <div style={styles.Home}>
      <div>
        {/* HomeHeaderでonSelectって名前でhandleSelectが使える */}
        <HomeHeader selected={selectedTimeline} onSelect={handleSelect} />
        <Post />
      </div>
      {/* タイムラインの表示 */}
      <div>
        {/* TimeLine.tsxでhandleSetPostDataって名前で */}
        <TimeLine postData={postData} handleSetPostData={handleSetPostData} />
      </div>
    </div>
  );
};
const styles: { [key: string]: React.CSSProperties } = {
  Home: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    backgroundColor: "#f9f9f9",
  },
};
