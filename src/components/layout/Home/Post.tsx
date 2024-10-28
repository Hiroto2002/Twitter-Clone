import { userInfo } from "os";
import React, { useState } from "react";
import { text } from "stream/consumers";

export const Post = () => {
    return (
        <div className="Postcontainer" style={styles.postContainer}>
            <div>
                <img src="images/user.png" 
                    alt="icon" 
                    className="userInfo"
                    style={styles.userInfo}
                />
                <input className="textField"
                    placeholder="いまどうしてる？"
                    type="text"
                    style={styles.textField}
                />
            </div>
        </div>
    );
};

const styles: { [key: string]: React.CSSProperties } = {
    postContainer:{
        float: "left",
        padding:"1em",
        height: "10vh",
        width: "50vw",
        backgroundColor: "#f9f9f9",
        borderBottom: "1px solid #e0e0e0",
    },
    userInfo:{  
        width: "20px",
        height: "20px",
        borderRadius: "50%",
        backgroundColor: "#f0f0f0",
    },
    textField:{
        width: "80%",
        height: "100%",
        border: "none",
        outline: "none",
        fontSize: "2rem",
    },
};