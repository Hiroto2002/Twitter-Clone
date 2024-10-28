"use client"; // useState使う時に必要

import React, { useState } from "react";

// ユーザーアイコンの取得関数
const getUserIcon = (userId: string) => {
    return `/images/${userId}.png`;  // imagesフォルダにユーザーID.pngがある想定
};

// ダミーデータ
const recommendations = [
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
        }
    },
];

export const RecommendTimeline = () => {
    const [items, setItems] = useState(recommendations);

    const toggleGood = (tweetId: number) => {
        const updatedItems = items.map(item =>
            item.tweetId === tweetId ? { ...item, good: !item.good, count_good: item.good ? item.count_good - 1 : item.count_good + 1 } : item
        );
        setItems(updatedItems);
    };

    return (
        <div className="timeline" style={styles.timelineContainer}>
            {items.map((item) => (
                <div key={item.tweetId} style={styles.timelineItem}>
                    {/* ユーザー情報 */}
                    <div style={styles.userInfo}>
                        <img src={item.user.icon } alt="User Icon" style={styles.userIcon} />
                        <div style={styles.userDetails}>
                            <span style={styles.userName}>{item.user.name}</span>
                            <span style={styles.userId}>@{item.user.id}</span>
                            <span style={styles.createdAt}>・{item.created_at}</span>
                        </div>
                    </div>

                    {/* テキスト */}
                    <p style={styles.comment}>{item.text}</p>

                    {/* 統計情報 */}
                    <div style={styles.stats}>
                        <span>いいね: {item.count_good}</span>
                        <span>リプライ: {item.count_reply}</span>
                        <span>リツイート: {item.count_retweet}</span>
                    </div>

                    {/* いいねボタン */}
                    <button
                        style={item.good ? styles.goodButtonActive : styles.goodButton}
                        onClick={() => toggleGood(item.tweetId)}
                    >
                        {item.good ? "いいね済み" : "いいね"}
                    </button>
                </div>
            ))}
        </div>
    );
};

// CSSスタイル
const styles: { [key: string]: React.CSSProperties } = {
    timelineContainer: {
        padding: "1em",
        width: "50vw",
        backgroundColor: "#f9f9f9",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    },
    timelineItem: {
        flexDirection: "column",
        width: "100%",
        padding: "1em",
        borderBottom: "1px solid #e0e0e0",
        marginBottom: "1em",
    },
    userInfo: {
        display: "row",
        alignItems: "center",
        gap: "10px",
        marginBottom: "0.5em",
    },
    userIcon: {
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        objectFit: "cover",
    },
    userDetails: {
        display: "flex",
        flexDirection: "column",
    },
    userName: {
        fontWeight: "bold",
        fontSize: "1rem",
        color: "#000",
    },
    userId: {
        fontSize: "0.8rem",
        color: "#555",
    },
    createdAt: {
        fontSize: "0.8rem",
        color: "#777",
        marginLeft: "5px",
    },
    comment: {
        fontSize: "1.1rem",
        margin: "0.5em 0",
        color: "#333",
    },
    stats: {
        display: "flex",
        gap: "15px",
        fontSize: "0.9rem",
        color: "#555",
        marginBottom: "0.5em",
    },
    goodButton: {
        padding: "0.5em 1em",
        backgroundColor: "#e0e0e0",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        color: "#333",
        fontSize: "1rem",
        alignSelf: "flex-start",
    },
    goodButtonActive: {
        padding: "0.5em 1em",
        backgroundColor: "#007bff",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        color: "#fff",
        fontSize: "1rem",
        alignSelf: "flex-start",
    },
};
