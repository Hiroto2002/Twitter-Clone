import { userInfo } from "os";
import React, { useState } from "react";
import Image from "next/image";
import { text } from "stream/consumers";

//ボタンのインポート
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";

export const Post = () => {
    return (
        <div className="Post" style={styles.post}>
            <div className="Postcontainer" style={styles.postContainer}>
            <Image src={""} alt="User Icon" style={styles.userIcon} width={30} height={30}/>
                <input className="textField"
                    placeholder="いまどうしてる？"
                    type="text"
                    style={styles.textField}
                />
            </div>
            <div className="postItems">
                <PhotoLibraryIcon style={styles.postItem}/>
                <button className="postButton" style={styles.postButton}>
                    ポストする
                </button>
            </div>
        </div>
    );
};

const styles: { [key: string]: React.CSSProperties } = {
    post:{
        display: "flex",
        height: "30vh",
        width: "100%",
        flexDirection: "column",
        backgroundColor: "#f9f9f9",
        borderBottom: "1px solid #e0e0e0",

    },
    postContainer:{
        display: "flex",
        width: "100%",
        float: "left",
        height: "20vh",
        borderBottom: "1px solid #e0e0e0 80%",
        padding: "1em",
    },
    userIcon:{  
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        backgroundColor: "#f0f0f0",
    },
    textField:{
        width: "80%",
        height: "80%",
        border: "none",
        outline: "none",
        fontSize: "2rem",
        backgroundColor: "#f9f9f9",
    },
    postItems:{
        backgroundColor: "#f9f9f9",
        width: "100%",
        height: "5%",
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: "relative",
    },
    postButton:{
        borderRadius: "1em",
        float: "right",
        width: "20%",
        height: "3em",
        padding: "1em",
        margin: "1.5em",
        backgroundColor: "#1da1f2",
        color: "white",
        border: "none",
        cursor: "pointer",
        fontSize: "0.7rem",
        textAlign: "center",
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: "relative",
    },
    postItem:{
        float: "left",
        width: "3em",
        height: "3em",
        padding: "1em",
        cursor: "pointer",
    },
};