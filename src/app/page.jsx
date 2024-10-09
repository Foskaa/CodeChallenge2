'use client';

import Akuntansi from '@/images/akuntansi.webp'
import Manajemen from '@/images/manajemen.webp'
import Image from 'next/image';
import BannerSection from "@/features/home/components/bannersection";
import Youtube from "@/features/home/components/nilai-cult";
import Testimoni from "@/features/home/components/testimoni";
import Link from "next/link";
import Portalmahasiswa from '@/images/portalmahasiswa.png'
import Portalorangtua from '@/images/portalorangtua.jpg'


// YouTube Video Component
// YouTube Video Component


export default function Home() {
  return (
    <main className="pt-11 lg:pt-0 bg-white">
      <BannerSection />

      <section>
        <div className="relative w-full md:h-[900px] lg:h-[500px] h-[650px] z-10">
          <div className="absolute inset-0 bg-black bg-opacity-60 grid grid-rows-2 justify-center lg:grid lg:grid-cols-3 items-center flex-col lg:flex-row px-14 md:pt-28 lg:pt-32 lg:px-28">
            <div>
              <Youtube videoId="76NQlQ5RY1U" />
            </div>
            <div className="lg:col-span-2 grid grid-rows-1 justify-center lg:pl-24 ">
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

      <div className="flex flex-col lg:flex-row md:px-4 items-center">
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
      </div>

      <div className="flex items-center py-10 lg:py-0 lg:pt-28">
        <span className="flex-grow border-b border-gray-400"></span>
        <span className="mx-2 font-bold text-2xl text-gray-700">PROGRAM KAMI</span>
        <span className="flex-grow border-b border-gray-400"></span>
      </div>

      <section id="program" className="grid lg:grid-cols-2 lg:gap-6 px-6 gap-8 lg:px-36 lg:py-14" >
        <div className="card bg-neutral-700 text-white shadow-xl">
          <figure>
            <Image
              src='{Akuntansi}'
              alt="Akuntansi"
              loading="lazy"
              width={410}
              height={273}
              className="w-full h-auto"
              decoding="async"
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
              decoding="async"
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

    </main>
  );
}
