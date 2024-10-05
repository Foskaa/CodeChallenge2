'use client';

import Image from "next/image";
import Banner from './../images/banner.webp'
import Girl from './../images/photo.webp'
import Akuntansi from './../images/akuntansi.webp'
import Manajemen from './../images/manajemen.webp'
import Portalmahasiswa from './../images/portalmahasiswa.png'
import Portalorangtua from './../images/portalorangtua.jpg'
import { useState } from 'react';

// YouTube Video Component
// YouTube Video Component
const YouTubeVideo = ({ videoId }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleClick = () => {
    setIsPlaying(true);
  };

  return (
    <div className="flex justify-center mb-4">
      {!isPlaying ? (
        <Image
          src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`} // Custom thumbnail
          alt="Thumbnail"
          width={1500}  // Adjust width as needed
          height={1000} // Set a height value (adjust as needed)
          onClick={handleClick}
          className="cursor-pointer w-[1500px] h-full object-cover" // Adjust styling as needed
        />
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




export default function Home() {
  return (
    <main className="pt-11 lg:pt-0">
      <section id="banner">
        <Image
          src={Banner}
          alt="Banner"
          className="flex"
        />
      </section>

      <section>
        <div className="relative w-full z-10">
          <Image
            src={Girl}
            alt="Banner"
            className="h-[600px] w-full object-cover relative"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60 flex justify-center items-center flex-col lg:flex-row px-14 lg:px-28">
            <div>
              <YouTubeVideo videoId="76NQlQ5RY1U" />
            </div>
            <div className="lg:flex lg:justify-center lg:pl-24 lg:flex-col">
              <div className="text-white text-2xl font-bold lg:text-start text-center pt-3 lg:text-4xl">Kenal Lebih Dekat Dengan Kami</div>
              <div className="text-white text-md pt-6 text-xs lg:text-xl lg:text-start leading-loose lg:leading-10 text-center">Sesuai Visi & Misi Sekolah Tinggi Ilmu Ekonomi Trisakti, Kami akan terus berupaya menyelenggarakan pendidikan tinggi secara profesional yang berkualitas internasional, sehingga menghasilkan lulusan yang kompeten, berdaya saing, dan berkarakter unggul.
              </div>
              <div className="flex justify-center lg:justify-start">
                <button className=" w-[50%] lg:w-[40%] flex justify-center rounded-md p-2 lg:p-2 border mt-5 border-white text-white text-sm hover:bg-white hover:text-black">LIHAT LEBIH LANJUT</button>
              </div>
            </div>
          </div>
        </div>
      </section>


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
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Program Studi S1 AKUNTANSI</h2>
            <p>Program Studi S1 Akuntansi merupakan program studi yang menghasilkan sarjana akuntansi yang siap menjadi akuntan profesional dan kompeten berlandaskan wawasan berpikir manajerial.

            </p>
            <div className="card-actions justify-start">
              <button className="btn btn-outline border-white text-white w-40">Lihat Detail</button>
            </div>
          </div>
        </div>
        <div className="card  bg-neutral-700 text-white shadow-xl">
          <figure>
            <Image
              src={Manajemen}
              alt="Manajemen"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Program Studi S1 MANAJEMEN
            </h2>
            <p>Program Studi S1 Manajemen menyiapkan para mahasiswa untuk menjadi lulusan yang berkelas dunia sehingga mampu memperoleh sertifikasi profesional di bidang manajemen bisnis, yaitu keuangan, pemasaran & sumber daya manusia.</p>
            <div className="card-actions justify-start">
              <button className="btn btn-outline border-white text-white w-40">Lihat Detail</button>
            </div>
          </div>
        </div>
      </section >


      <div className="flex items-center py-10 lg:py-0 lg:pt-28">
        <span className="flex-grow border-b border-gray-400"></span>
        <span className="mx-2 font-bold text-2xl text-gray-700">PORTAL AKADEMIK</span>
        <span className="flex-grow border-b border-gray-400"></span>
      </div>

      <main className="grid lg:grid-cols-2 lg:gap-6 gap-5 px-5 lg:px-gap-8 lg:px-36 lg:py-14 z-10">
        <div className="relative">
          <Image
            src={Portalmahasiswa}
            alt="Portal Mahasiswa"
            className="rounded-2xl"
          />
          <div className="absolute flex-col gap-10 inset-0 hover:bg-black rounded-2xl hover:bg-opacity-40 flex justify-center items-center">
            <p className="text-white text-xl lg:text-3xl font-bold">Portal Mahasiswa</p>
            <button className="btn btn-outline border-white text-white w-40 hover:bg-white hover:text-black">LOGIN</button>
          </div>
        </div>

        <div className="relative">
          <Image
            src={Portalorangtua}
            alt="Portal Orangtua"
            className="rounded-2xl"
          />
          <div className="absolute flex-col gap-10 inset-0 hover:bg-black hover:bg-opacity-40 rounded-2xl flex justify-center items-center">
            <div className="text-white text-xl lg:text-3xl font-bold">Portal Orang Tua</div>
            <button className="btn btn-outline border-white text-white w-40 hover:bg-white hover:text-black">LOGIN</button>

          </div>
        </div>
      </main>




    </main>
  );
}
