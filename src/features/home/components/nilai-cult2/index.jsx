import Youtube from "../nilai-cult"
import Link from "next/link"

export default function Nilai() {
    return (
        <section>
            <div className="relative w-full md:h-[600px] lg:h-[500px] h-[700px] z-10">
                <div className="absolute inset-0 bg-black bg-opacity-60 flex justify-center items-center flex-col lg:flex-row px-14 lg:px-28">
                    <div>
                        <Youtube videoId="76NQlQ5RY1U" />
                    </div>
                    <div className="lg:flex lg:justify-center lg:pl-24 lg:flex-col">
                        <div className="text-white text-2xl font-bold lg:text-start text-center pt-3 lg:text-4xl">Kenal Lebih Dekat Dengan Kami</div>
                        <div className="text-white text-md pt-6 text-xs lg:text-xl lg:text-start leading-loose lg:leading-10 text-center">Sesuai Nilai & Kultur Sekolah Tinggi Ilmu Ekonomi Trisakti, Kami akan terus berupaya menyelenggarakan pendidikan tinggi secara profesional yang berkualitas internasional, sehingga menghasilkan lulusan yang kompeten, berdaya saing, dan berkarakter unggul.
                        </div>
                        <div className="flex justify-center lg:justify-start">
                            <button className=" w-[50%] lg:w-[40%] flex justify-center rounded-md p-2 lg:p-2 border mt-5 font-bold border-white text-white text-sm hover:bg-white hover:text-black transition-colors duration-300"><Link href="/kultur-nilai">LIHAT LEBIH LANJUT</Link></button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}