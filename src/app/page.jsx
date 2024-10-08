'use client';

import Akuntansi from '@/images/akuntansi.webp'
import Manajemen from '@/images/manajemen.webp'
import Image from 'next/image';
import BannerSection from "@/features/home/components/bannersection";
import Youtube from "@/features/home/components/nilai-cult";
import Testimoni from "@/features/home/components/testimoni";
import Link from "next/link";
import Program from "@/features/home/components/program";
import Portal from "@/features/home/components/portal-mhs";
import Portalmahasiswa from '@/images/portalmahasiswa.png'
import Portalorangtua from '@/images/portalorangtua.jpg'


// YouTube Video Component
// YouTube Video Component


export default function Home() {
  return (
    <main className="pt-11 lg:pt-0 bg-white">
      <BannerSection />

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

      <div className="flex items-center py-10 lg:py-0 lg:pt-28">
        <span className="flex-grow border-b border-gray-400"></span>
        <span className="mx-2 font-bold text-2xl text-gray-700">TESTIMONI</span>
        <span className="flex-grow border-b border-gray-400"></span>
      </div>

<Testimoni />      

      <div className="flex items-center py-10 lg:py-0 lg:pt-28">
        <span className="flex-grow border-b border-gray-400"></span>
        <span className="mx-2 font-bold text-2xl text-gray-700">PROGRAM KAMI</span>
        <span className="flex-grow border-b border-gray-400"></span>
      </div>

      <Program />

      <div className="flex items-center py-10 lg:py-0 lg:pt-24">
        <span className="flex-grow border-b border-gray-400"></span>
        <span className="mx-2 font-bold text-2xl text-gray-700">PORTAL AKADEMIK</span>
        <span className="flex-grow border-b border-gray-400"></span>
      </div>

      <Portal />

    </main>
  );
}
