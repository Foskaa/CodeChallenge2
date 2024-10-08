'use client'

import Image from "next/image";
import useYoutube  from "../../hook/thumbnailhook";

export default function Youtube({videoId}) {
    const {
        isPlaying,
        handleClick
       } = useYoutube()
    
        return (
            <div className="flex justify-center mb-4">
                {!isPlaying ? (
                    <div className="relative cursor-pointer" onClick={handleClick}>
                        <Image
                            src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`} // Custom thumbnail
                            alt="Thumbnail"
                            width={1500}  // Adjust width as needed
                            height={1000} // Set a height value (adjust as needed)
                            className="lg:w-[1800px] md:w-[400px] h-full object-cover" // Adjust styling as needed
                        />
                        <div className="absolute inset-0 flex justify-center items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-10 w-10 text-white opacity-80"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M14.752 11.168l-6.96-4.017A1 1 0 007 8v8a1 1 0 001.508.864l6.96-4.017a1 1 0 000-1.728z"
                                />
                            </svg>
                        </div>
                    </div>
                ) : (
                    <iframe
                        className="w-[300px] h-[180px] lg:w-[600px] lg:h-[360px]"
                        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} // Load the video
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                )}
            </div>
        );
    };

