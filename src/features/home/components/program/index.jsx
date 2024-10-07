import Image from "next/image"
import Link from "next/link"
import Akuntansi from '@/images/akuntansi.webp'
import Manajemen from '@/images/manajemen.webp'

export default function Program() {
    return (
        <>
            <div className="flex items-center py-10 lg:py-0 lg:pt-28">
                <span className="flex-grow border-b border-gray-400"></span>
                <span className="mx-2 font-bold text-2xl text-gray-700">PROGRAM KAMI</span>
                <span className="flex-grow border-b border-gray-400"></span>
            </div>

            <section id="program" className="grid lg:grid-cols-2 lg:gap-6 px-6 gap-8 lg:px-36 lg:py-14" >
                <div className="card bg-neutral-700 text-white shadow-xl">
                    <figure>
                        <Image
                            src={Akuntansi}
                            alt="Akuntansi"
                            loading="lazy"
                            width={800}
                            height={533}
                            srcSet={`
    /_next/image?url=${Akuntansi}&w=400&q=75 400w,
    /_next/image?url=${Akuntansi}&w=800&q=75 800w
  `}
                            sizes="(max-width: 400px) 400px, (max-width: 800px) 800px, 100vw"
                        />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Program Studi S1 AKUNTANSI</h2>
                        <p>Program Studi S1 Akuntansi merupakan program studi yang menghasilkan sarjana akuntansi yang siap menjadi akuntan profesional dan kompeten berlandaskan wawasan berpikir manajerial.

                        </p>
                        <div className="card-actions justify-start">
                            <button className="btn btn-outline border-white text-white w-40 hover:bg-white hover:text-black"><Link href="/akuntansi">Lihat Detail</Link></button>
                        </div>
                    </div>
                </div>
                <div className="card  bg-neutral-700 text-white shadow-xl">
                    <figure>
                        <Image
                            src={Manajemen}
                            alt="Manajemen"
                            loading="lazy"
                        />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Program Studi S1 MANAJEMEN
                        </h2>
                        <p>Program Studi S1 Manajemen menyiapkan para mahasiswa untuk menjadi lulusan yang berkelas dunia sehingga mampu memperoleh sertifikasi profesional di bidang manajemen bisnis, yaitu keuangan, pemasaran & sumber daya manusia.</p>
                        <div className="card-actions justify-start">
                            <button className="btn btn-outline border-white text-white w-40 hover:bg-white hover:text-black"><Link href="/manajemen">Lihat Detail</Link></button>
                        </div>
                    </div>
                </div>
            </section >

        </>
    )
}