"use client";

import React, { useState } from "react";
import { HomeHeader } from "@/components/layout/Home/HomeHeader";
import { Post } from "@/components/layout/Home/Post";
import { RecommendTimeline } from "@/components/layout/Home/RecommendTimeline";
import { FollowingTimeline } from "@/components/layout/Home/FollowingTimeline";

export const Home = () => {
    const [selectedTimeline, setSelectedTimeline] = useState("おすすめ");

    const handleSelect = (timeline: string) => {
        setSelectedTimeline(timeline);
    };

    return (
        <div>
            <HomeHeader selected={selectedTimeline} onSelect={handleSelect} />
            <Post />
            {/* タイムラインの表示 */}
            <div>
                {selectedTimeline === "おすすめ" ? (
                    <RecommendTimeline />
                ) : (
                    <FollowingTimeline />
                )}
            </div>
        </div>
    );
};
