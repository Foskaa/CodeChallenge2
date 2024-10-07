'use client';

import Image from "next/image";
import Banner from './../images/banner.webp'
import Girl from './../images/photo.webp'
import Akuntansi from './../images/akuntansi.webp'
import Manajemen from './../images/manajemen.webp'
import Portalmahasiswa from './../images/portalmahasiswa.png'
import Portalorangtua from './../images/portalorangtua.jpg'
import { useState } from 'react';
import Link from "next/link";

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
              className="h-20 w-20 text-white opacity-80"
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




export default function Home() {
  return (
    <main className="pt-11 lg:pt-0 bg-white">
      <section id="banner">
        <Image
          src={Banner}
          alt="Banner"
          loading="lazy"
          className="flex"
        />
      </section>

      <section>
        <div className="relative w-full z-10">
          <Image
            src={Girl}
            alt="Banner"
            className="h-[600px] w-full object-cover relative"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-60 flex justify-center items-center flex-col lg:flex-row px-14 lg:px-28">
            <div>
              <YouTubeVideo videoId="76NQlQ5RY1U" />
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

      <main className="flex flex-col lg:flex-row md:px-4 items-center">
        <div className="sm:lg:max-w-sm p-6 bg-white rounded-lg border border-gray-300 drop-shadow-lg mx-auto my-4 lg:my-14">
          <div className="relative bg-neutral-500 text-white p-4 rounded-t-lg">
            <p className="text-lg italic">There are many benefit that i got from joining TSM.
              That really directly impact to me, my english skill is much better than 3 years ago (2016).
              Lot of improvement I felt, now i have more confidence when using english in conversation, presentation
              skill improved since the study method in this campus concerning in presentation, and so on. The
              study method and culture that applied in TSM really help me to get this improvement.”
            </p>
          </div>

          <div className="flex items-center mt-4">
            <div className="w-12 h-fit bg-gradient-to-r from-purple-400 to-blue-500 rounded-full flex justify-center items-center overflow-hidden">
              <Image
                src="https://img.freepik.com/free-photo/serious-young-african-man-standing-isolated_171337-9633.jpg"
                alt="kevin"
                height={100}
                width={100}
                className="object-cover w-full h-full "
              />
            </div>
            <div className="ml-4">
              <p className="text-lg font-semibold">Kevin Edrick</p>
              <p className="text-black">(Batch 2016)</p>
            </div>
          </div>
        </div>
        <div className="sm:lg:max-w-sm p-6 bg-white rounded-lg border border-gray-300 drop-shadow-lg mx-auto my-4 lg:my-14">
          <div className="relative bg-neutral-500 text-white p-4 rounded-t-lg">
            <p className="text-lg italic">I get a lot of experience while I’m in TSM. The lecturers in TSM are super supportive, it is more important to us the be brave and speak up for ourselves instead of the grammar we’re using. This is a great opportunity for us to join international class because where else can we get such opportunities and partners to do a conversation in English while carrying out our obligation as students.”
            </p>
          </div>

          <div className="flex items-center mt-4">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-blue-500 rounded-full flex justify-center items-center overflow-hidden">
              <Image
                src="https://img.freepik.com/premium-photo/asian-girls-education-happy-beautiful-asian-girl-is-smilling_911620-8519.jpg"
                alt="sherlia"
                height={100}
                width={100}
                className="object-cover w-full h-full "
              />
            </div>
            <div className="ml-4">
              <p className="text-lg font-semibold">Sherlia Lie</p>
              <p className="text-black">(Batch 2018)</p>
            </div>
          </div>
        </div>
        <div className="sm:lg:max-w-sm p-6 bg-white rounded-lg border border-gray-300 drop-shadow-lg mx-auto my-4 lg:my-14">
          <div className="relative bg-neutral-500 text-white p-4 rounded-t-lg">
            <p className="text-lg italic">Our campus is a great place to learn and grow. The facilities are modern, and the library and labs help students succeed in their studies. The green spaces around the campus make it a calm and relaxing place to spend time. The friendly community here makes it easy to meet new people and feel at home. I’ve had a wonderful experience and feel well-supported both academically and personally.
            </p>
          </div>

          <div className="flex items-center mt-4">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-blue-500 rounded-full flex justify-center items-center overflow-hidden">
              <Image
                src="https://img.freepik.com/premium-photo/young-happy-asian-student-headshot-attractive-smiling-asian-woman-with-friends-university_817921-1863.jpg"
                alt="sherlia"
                height={100}
                width={100}
                className="object-cover w-full h-full "
              />
            </div>
            <div className="ml-4">
              <p className="text-lg font-semibold">Ellen</p>
              <p className="text-black">(Batch 2019)</p>
            </div>
          </div>
        </div>
      </main>















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


      <div className="flex items-center py-10 lg:py-0 lg:pt-24">
        <span className="flex-grow border-b border-gray-400"></span>
        <span className="mx-2 font-bold text-2xl text-gray-700">PORTAL AKADEMIK</span>
        <span className="flex-grow border-b border-gray-400"></span>
      </div>

      <main className="grid lg:grid-cols-2 lg:gap-6 gap-5 px-5 lg:px-gap-8 lg:px-36 pb-5 lg:py-14 z-10">
        <div className="relative">
          <Image
            src={Portalmahasiswa}
            alt="Portal Mahasiswa"
            className="rounded-2xl"
            loading="lazy"
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
      </main>




    </main>
  );
}
