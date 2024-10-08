import Image from "next/image";
import Link from "next/link";

import Portalmahasiswa from '@/images/portalmahasiswa.png'
import Portalorangtua from '@/images/portalorangtua.jpg'


export default function Portal() {
    return (
        <>
            <div className="grid lg:grid-cols-2 lg:gap-6 gap-5 px-5 lg:px-gap-8 lg:px-36 pb-5 lg:py-14 z-10">
                <div className="relative">
                    <Image
                        src={Portalmahasiswa}
                        alt="Portal Mahasiswa"
                        loading="lazy"
                        width={754}
                        height={552}
                        className="rounded-2xl"
                        srcSet={`
    /_next/image?url=${Portalmahasiswa}&w=400&q=75 400w,
    /_next/image?url=${Portalmahasiswa}&w=754&q=75 754w
  `}
                        sizes="(max-width: 400px) 400px, (max-width: 754px) 754px, 100vw"
                    />
                    <div className="absolute flex-col gap-10 inset-0 hover:bg-black rounded-2xl hover:bg-opacity-40 flex justify-center items-center">
                        <p className="text-white text-xl lg:text-3xl font-bold">Portal Mahasiswa</p>
                        <button className="btn btn-outline border-white text-white w-40 hover:bg-white hover:text-black"><Link href="/login-mhs">LOGIN</Link></button>
                    </div>
                </div>

                <div className="relative">
                    <Image
                        src={Portalorangtua}
                        alt="Portal Orangtua"
                        className="rounded-2xl"
                        loading="lazy"
                    />
                    <div className="absolute flex-col gap-10 inset-0 hover:bg-black hover:bg-opacity-40 rounded-2xl flex justify-center items-center">
                        <div className="text-white text-xl lg:text-3xl font-bold">Portal Orang Tua</div>
                        <button className="btn btn-outline border-white text-white w-40 hover:bg-white hover:text-black"><Link href="/login-ot">LOGIN</Link></button>

                    </div>
                </div>
            </div>

        </>
    )
}