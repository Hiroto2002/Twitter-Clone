"use client";

import React, { useState } from "react";

// ダミーデータ
const recommendations = [
    { 
        userid: 1, 
        comment: "授業終わったー！",
        good: false,
    },
    { 
        userid: 2, 
        comment: "ねむたい",
        good: false,
    },
    { 
        userid: 3, 
        comment: "おはよ",
        good: false,
    },
];

export const FollowingTimeline = () => {
    const [items, setItems] = useState(recommendations);

    // いいねをトグルする関数
    const toggleGood = (userid: number) => {
        const updatedItems = items.map(item =>
            item.userid === userid ? { ...item, good: !item.good } : item
        );
        setItems(updatedItems);
    };

    return (
        <div className="timeline" style={styles.timelineContainer}>
            {items.map((item) => (
                <div key={item.userid} style={styles.timelineItem}>
                    <p style={styles.comment}>{item.comment}</p>
                    <button 
                        style={item.good ? styles.goodButtonActive : styles.goodButton}
                        onClick={() => toggleGood(item.userid)}
                    >
                        {item.good ? "いいね済み" : "いいね"}
                    </button>
                </div>
            ))}
        </div>
    );
};

const styles: { [key: string]: React.CSSProperties } = {
    timelineContainer: {
        padding: "1em",
        marginLeft: "5em",
        width: "50vw",
        backgroundColor: "#f9f9f9",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    },
    timelineItem: {
        padding: "1em",
        borderBottom: "1px solid #e0e0e0",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
    comment: {
        fontSize: "1.2rem",
        margin: 0,
        color: "#333",
    },
    goodButton: {
        padding: "0.5em 1em",
        backgroundColor: "#e0e0e0",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        color: "#333",
        fontSize: "1rem",
    },
    goodButtonActive: {
        padding: "0.5em 1em",
        backgroundColor: "#007bff",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        color: "#fff",
        fontSize: "1rem",
    },
};
