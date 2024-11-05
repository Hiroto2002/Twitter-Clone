import React, { useState } from 'react'
import { PostData } from '../Home';
import Image from 'next/image';

import FavoriteIcon from '@mui/icons-material/Favorite';

type Props ={
    postData:PostData[]
    handleSetPostData:(data:PostData[])=>void
}

export const TimeLine = (props:Props) => {
    // (props)プロパティを受け取る
    const {postData,handleSetPostData} = props
    
    // いいねの状態を管理する
    const toggleGood = (tweetId: number) => { 
        const updatedItems = postData.map(item =>
        item.tweetId === tweetId ? { ...item, good: !item.good, count_good: item.good ? item.count_good - 1 : item.count_good + 1 } : item
        );
      // handleSetPostData関数を呼び出して、更新されたデータを渡す
    handleSetPostData(updatedItems);
    };
    return (
        <div className="timeline" style={styles.timelineContainer}>
            {postData.map((item) => (
                <div key={item.tweetId} style={styles.timelineItem}>
                    {/* ユーザー情報 */}
                    <div style={styles.userInfo}>
                        <Image src={item.user.icon } alt="User Icon" style={styles.userIcon} width={30} height={30}/>
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
                    {/* <button
                        style={item.good ? styles.goodButtonActive : styles.goodButton}
                        onClick={() => toggleGood(item.tweetId)}
                    >
                    </button> */}
                    <FavoriteIcon style={item.good ? styles.goodButtonActive : styles.goodButton}
                        onClick={() => toggleGood(item.tweetId)}/>
                </div>
            ))}
        </div>
    );
};

// CSSスタイル
const styles: { [key: string]: React.CSSProperties } = {
    timelineContainer: {
        overflowY: "scroll",
        padding: "1em",
        width: "100%",
        flex: 1,  /* 残りの高さ全てを占める */
        backgroundColor: "#f9f9f9",
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


