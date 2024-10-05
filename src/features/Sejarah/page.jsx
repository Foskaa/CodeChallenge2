import Image from "next/image";
import {Typography } from "@material-tailwind/react";

export default function MapSejarah({image, tanggal, deskripsi}) {

    return (
        <>
            <div className="relative min-h-screen object-cover">
                <Image
                    src="https://www.tsm.ac.id/wp-content/uploads/2022/07/tsm01.png"
                    alt="image 1"
                    layout="fill"
                />
                <div className="absolute inset-0 grid  place-items-center bg-black/40">
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