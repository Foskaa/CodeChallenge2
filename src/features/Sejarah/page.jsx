import Image from "next/image";
import {Typography } from "@material-tailwind/react";

export default function MapSejarah({image, tanggal, deskripsi}) {

    return (
        <>
            <div className="relative h-[900px] lg:h-[750px] w-full">
                <Image
                    src={image}
                    alt="image 1"
                    width={700}
                    height={700}
                    className="h-full w-full object-cover object-top"
                />
                <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/40">
                    <div className="w-3/4 text-center md:w-2/4">
                        <Typography
                            variant="h1"
                            color="white"
                            className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                        >
                            {tanggal}
                        </Typography>
                        <Typography
                            variant="lead"
                            color="white"
                            className="mb-12 opacity-80"
                        >
                            {deskripsi}
                        </Typography>
                    </div>
                </div>
            </div>
        </>
    )
}