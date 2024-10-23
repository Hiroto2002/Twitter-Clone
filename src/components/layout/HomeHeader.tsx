"use client";

import React, { useState } from "react";
import { RecommendTimeline } from './RecommendTimeline';  // おすすめタイムライン
import { FollowingTimeline } from './FollowingTimeline';  // フォロー中タイムライン

export const HomeHeader = () => {
    const [selected, setSelected] = useState("おすすめ"); // デフォルトで「おすすめ」を選択

    const handleSelect = (buttonName: string) => {
        setSelected(buttonName); // 選択されたボタンの名前を設定
    };

    return (
        <div>
            <div className="timelineHeader" style={styles.timelineHeader}>
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
            </div>

            {/* タイムラインの表示 */}
            <div>
                {selected === "おすすめ" ? <RecommendTimeline /> : <FollowingTimeline />}
            </div>
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
        display: "flex",  // フレックスボックスでボタンを横並びに
    },
    timelineButton: {
        height: "100%",
        width:"50%",
        margin: 0, // マージンをゼロにする
        borderRadius: 0,
        cursor: "pointer",
        fontSize: "1rem",
        transition: "background-color 0.3s ease",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
};
