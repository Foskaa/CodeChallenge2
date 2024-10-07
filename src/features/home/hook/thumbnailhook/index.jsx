'use client'
import { useState } from "react";

export default function useYoutube() {

const [isPlaying, setIsPlaying] = useState(false);
const handleClick = () => {
    setIsPlaying(true);
    };

    return {
        isPlaying,
        setIsPlaying,
        handleClick
    }
}