"use client";//useState使う時に必要

import React, { useState } from "react";

// ダミーデータ
const recommendations = [
    { 
        userid: 1, 
        comment: "おはよう",
        good: false,
    },
    { 
        userid: 2, 
        comment: "お腹すいた",
        good: false,
    },
    { 
        userid: 3, 
        comment: "おやすみ",
        good: false,
    },
];

export const RecommendTimeline = () => {
    const [items, setItems] = useState(recommendations);

    // いいね関数の定義してるよ
    const toggleGood = (userid: number) => {
        const updatedItems = items.map(item =>
            item.userid === userid ? { ...item, good: !item.good } : item
        );
        setItems(updatedItems);
    };
    //ツイート関数
    return (
        <div className="timeline" style={styles.timelineContainer}>
            {/* ここからループ */}
            {items.map((item) => (
                // keyになるのは名前とかidとか　なんでそうなるかは今度マエヒロに聞く
                <div key={item.userid} style={styles.timelineItem}>
                    {/* pタグに挟まれてるところを表示するよ */}
                    <p style={styles.comment}>{item.comment}</p>
                    {/* いいねボタンchatGPTだからよくわかってない */}
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



//以下CSS
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
