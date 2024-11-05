"use client";

import React from "react";
import { SelectedTimeline } from "./Home";

type HomeHeaderProps = {
    selected: SelectedTimeline;
    onSelect: (buttonName: SelectedTimeline) => void;
};

export const HomeHeader = ({ selected, onSelect }: HomeHeaderProps) => {
    return (
        <div>
            <div className="timelineHeader" style={styles.timelineHeader}>
                <button
                    className="timelineButton"
                    style={{
                        ...styles.timelineButton,
                        borderBottom: selected === "おすすめ" ? "2px solid blue" : "none",
                    }}
                    onClick={() => onSelect("おすすめ")}
                >
                    おすすめ
                </button>
                <button
                    className="timelineButton"
                    style={{
                        ...styles.timelineButton,
                        borderBottom: selected === "フォロー中" ? "2px solid blue" : "none",
                    }}
                    onClick={() => onSelect("フォロー中")}
                >
                    フォロー中
                </button>
            </div>
        </div>
    );
};

const styles: { [key: string]: React.CSSProperties } = {
    timelineHeader: {
        height: "5em",
        width: "100%",
        backgroundColor: "#f9f9f9",
        borderBottom: "1px solid #e0e0e0",
        display: "flex",
    },
    timelineButton: {
        height: "100%",
        width: "100%",
        margin: 0,
        borderRadius: 0,
        cursor: "pointer",
        fontSize: "1rem",
        transition: "background-color 0.3s ease",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
};
