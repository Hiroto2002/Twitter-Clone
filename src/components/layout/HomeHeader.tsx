"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export const HomeHeader = () => {
    const [selected, setSelected] = useState("おすすめ"); // デフォルトで「おすすめ」を選択

    const handleSelect = (buttonName: string) => {
        setSelected(buttonName); // 選択されたボタンの名前を設定
    };

    return (
        <div className="timelineHeader" style={styles.timelineHeader}>
            <Link href="/RecomandTimeline" passHref>
                <button
                    className="timelineButton"
                    style={{
                        ...styles.timelineButton,
                        borderBottom: selected === "おすすめ" ? "2px solid blue" : "none",
                    }}
                    onClick={() => handleSelect("おすすめ")}
                >
                    おすすめ
                </button>
            </Link>
            <Link href="/FollowingTimeLine" passHref>
                <button
                    className="timelineButton"
                    style={{
                        ...styles.timelineButton,
                        borderBottom: selected === "フォロー中" ? "2px solid blue" : "none",
                    }}
                    onClick={() => handleSelect("フォロー中")}
                >
                    フォロー中
                </button>
            </Link>
        </div>
    );
};

const styles: { [key: string]: React.CSSProperties } = {
    timelineHeader: {
        height: "5em",
        width: "50vw",
        backgroundColor: "#f9f9f9",
        borderBottom: "1px solid #e0e0e0",
        marginLeft: "5em", // LeftNavの右側に表示させる
    },
    timelineButton: {
        height: "100%",
        width:"50%",
        margin: 0, // マージンをゼロにする
        borderRadius: 0,
        cursor: "pointer",
        fontSize: "1rem",
        transition: "background-color 0.3s ease",
        alignItems: "center",
        justifyContent: "center",
    },
};

