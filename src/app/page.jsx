'use client';

import Akuntansi from '@/images/akuntansi.webp'
import Manajemen from '@/images/manajemen.webp'
import BannerSection from "@/features/home/components/bannersection";
import Youtube from "@/features/home/components/nilai-cult";
import Testimoni from "@/features/home/components/testimoni";
import Link from "next/link";
import Program from "@/features/home/components/program";
import Portal from "@/features/home/components/portal-mhs";


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

      <div className="flex flex-col lg:flex-row md:px-4 items-center">
        <Testimoni
          imageUrl="https://img.freepik.com/free-photo/serious-young-african-man-standing-isolated_171337-9633.jpg"
          name="Kevin Edrick"
          batch="Batch 2016"
          testimonial="There are many benefit that i got from joining TSM.
              That really directly impact to me, my english skill is much better than 3 years ago (2016).
              Lot of improvement I felt, now i have more confidence when using english in conversation, presentation
              skill improved since the study method in this campus concerning in presentation, and so on. The
              study method and culture that applied in TSM really help me to get this improvement."
        />
        <Testimoni
          imageUrl="https://img.freepik.com/premium-photo/asian-girls-education-happy-beautiful-asian-girl-is-smilling_911620-8519.jpg"
          name="Sherlia Lie"
          batch="Batch 2018"
          testimonial="I get a lot of experience while I’m in TSM. The lecturers in TSM are super supportive, it is more important to us the be brave and speak up for ourselves instead of the grammar we’re using. This is a great opportunity for us to join international class because where else can we get such opportunities and partners to do a conversation in English while carrying out our obligation as students."
        />
        <Testimoni
          imageUrl="https://img.freepik.com/premium-photo/young-happy-asian-student-headshot-attractive-smiling-asian-woman-with-friends-university_817921-1863.jpg"
          name="Ellen"
          batch="Batch 2019"
          testimonial="Our campus is a great place to learn and grow. The facilities are modern, and the library and labs help students succeed in their studies. The green spaces around the campus make it a calm and relaxing place to spend time. The friendly community here makes it easy to meet new people and feel at home. I’ve had a wonderful experience and feel well-supported both academically and personally."
        />
      </div>          

      <div className="flex items-center py-10 lg:py-0 lg:pt-28">
        <span className="flex-grow border-b border-gray-400"></span>
        <span className="mx-2 font-bold text-2xl text-gray-700">PROGRAM KAMI</span>
        <span className="flex-grow border-b border-gray-400"></span>
      </div>

      <section id="program" className="grid lg:grid-cols-2 lg:gap-6 px-6 gap-8 lg:px-36 lg:py-14" >
        <Program
          image={Akuntansi}
          title="Program Studi S1 AKUNTANSI"
          description="Program Studi S1 Akuntansi menghasilkan sarjana akuntansi profesional dan kompeten..."
          link="/akuntansi"
        />
        <Program
          image={Manajemen}
          title="Program Studi S1 MANAJEMEN"
          description="Program Studi S1 Manajemen menyiapkan mahasiswa untuk menjadi lulusan berkelas dunia..."
          link="/manajemen"
        />
      </section>

      <div className="flex items-center py-10 lg:py-0 lg:pt-24">
        <span className="flex-grow border-b border-gray-400"></span>
        <span className="mx-2 font-bold text-2xl text-gray-700">PORTAL AKADEMIK</span>
        <span className="flex-grow border-b border-gray-400"></span>
      </div>

     <Portal  />
    </main>
  );
}
