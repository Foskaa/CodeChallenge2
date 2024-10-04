'use client';
import Link from "next/link"
import Banner from "./../../images/header.png"
import Image from "next/image"


export default function InternationalClass() {

    return (
        <>
            <banner className="relative">
                <Image
                    src={Banner}
                    alt="banner heading"
                    className="object-cover w-full h-40 lg:h-60 pt-14 lg:pt-24"
                />
                <div className="absolute inset-0 flex items-center justify-center pt-16 lg:pt-32">
                    <div className="text-white p-4 font-bold text-2xl lg:text-4xl flex">
                        INTERNATIONAL CLASS
                    </div>
                </div>
            </banner>


            <section className="grid grid-cols-2 lg:px-80 gap-5 mt-6 ">
                <div className="col-span-2 flex justify-center">
                    <Image
                        src="https://www.tsm.ac.id/wp-content/uploads/2020/02/Slide-IC-02.png"
                        alt="Banner Image"
                        width={900}
                        height={500}
                    />
                </div>
            </section>



            <section className="lg:px-80 mt-6">
                <div className="join join-vertical w-full">
                    <div className="collapse collapse-arrow join-item border-base-300 border">
                        <input type="radio" name="my-accordion-4" defaultChecked />
                        <div className="collapse-title text-xl font-bold">Manfaat Program Ini</div>
                        <div className="collapse-content">
                            <p>Dengan ikut serta dalam program ini, maka mahasiswa akan mendapat manfaat sebagai berikut:</p>
                            <ol>
                                <li>1. Dapat mengembangkan kemampuan berkomunikasi dalam bahasa Inggris.</li>
                                <li>2. Memiliki kesempatan untuk berinteraksi secara lebih intensif dengan dosen dan mahasiswa dalam kelas yang berkapasitas sekitar 20 mahasiswa.
                                </li>
                                <li>3. Mendapat prioritas untuk menjadi asisten dosen dengan memenuhi kriteria yang ditetapkan.</li>
                                <li>4. Mendapat prioritas untuk diikutsertakan dalam program magang dan penempatan kerja melalui Career Development Center.
                                </li>
                                <li>5. Memperoleh sertifikat yang mencantumkan mata kuliah yang telah diambil dengan bahasa pengantar bahasa Inggris.
                                </li>
                                <li>6. Memperoleh prioritas dalam program transfer kredit ke luar negeri.
                                </li>
                                <li>7. Memiliki kesempatan yang lebih besar dalam mengikuti program beasiswa dan sertifikasi internasional.
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>


            <section className="grid grid-cols-2 lg:px-80 gap-5 mt-6 ">
                <div className="col-span-2 flex justify-center">
                    <Image
                        src="https://www.tsm.ac.id/wp-content/uploads/2020/02/BG-SUMMER-CAMP-TSM.jpg"
                        alt="Banner Image"
                        width={900}
                        height={500}
                    />
                </div>
            </section>

            <section className="lg:px-80 mt-6">
                <div className="join join-vertical w-full">
                    <div className="collapse collapse-arrow join-item border-base-300 border">
                        <input type="radio" name="my-accordion-4" defaultChecked />
                        <div className="collapse-title text-xl font-bold">Kegiatan SUMMER CAMP</div>
                        <div className="collapse-content">
                            <p>Summer Camp merupakan kegiatan kunjungan mahasiswa Trisakti School of Management ke I-Shou University, Taiwan pada musim panas. Melalui kegiatan yang berlangsung selama kurang lebih 10 hari, mahasiswa TSM belajar budaya dan bahasa dari daerah setempat. Mahasiswa memiliki kesempatan untuk memperluas wawasan, pola pikir dan bahkan relasi pertemanannya. TSM tidak hanya mengirimkan mahasiswanya, namun juga menerima pertukaran mahasiswa dari I-Shou University</p>
                        </div>
                    </div>
                </div>
            </section>


            <section className="grid grid-cols-2 lg:px-80 gap-5 mt-6 ">
                <div className="col-span-2 flex justify-center">
                    <Image
                        src="https://www.tsm.ac.id/wp-content/uploads/2020/02/BG-STUDEX-TSM.jpg"
                        alt="Banner Image"
                        width={900}
                        height={500}
                    />
                </div>
            </section>

            <section className="lg:px-80 mt-6">
                <div className="join join-vertical w-full">
                    <div className="collapse collapse-arrow join-item border-base-300 border">
                        <input type="radio" name="my-accordion-4" defaultChecked />
                        <div className="collapse-title text-xl font-bold">Kegiatan STUDENT EXCHANGE</div>
                        <div className="collapse-content">
                            <p>Sejalan dengan visi TSM untuk menjadi perguruan tinggi kelas dunia dibidang akuntansi dan manajemen, TSM memberikan kesempatan bagi mahasiswanya untuk merasakan lingkungan belajar di negara lain melalu program Student Exchange. Melalui program Student Exchange, mahasiswa dibentuk untuk berwawasan global dan berdaya saing pada level internasional.</p>
                            <br  />
                            <p>Mahasiswa TSM mendapat kesempatan untuk belajar selama 1 semester di Universitas yang telah bekerja sama dengan TSM. Adapun Universitas yang telah bekerjasama tersebut adalah I-Shou University, Kaohsiung, Taiwan dan Burapha University International College, Chonburi, Thailand.
                            </p>
                            <br />
                            <p>Mahasiswa mengambil mata kuliah yang telah disesuaikan antara kurikulum pada Universitas sahabat dan TSM. Tidak hanya itu, mahasiswa juga akan mempelajari budaya dan bahasa lokal. Pengalaman untuk bertemu dan belajar bersama mahasiswa dari negara asing juga memperkaya pengalaman dan wawasan mahasiswa.
                            </p>
                        </div>
                    </div>
                </div>
            </section>



            <section className="lg:px-80 mt-6 flex justify-center">
                <button className=" font-bold border border-black bg-white text-black hover:bg-black transition-colors duration-300 hover:text-white p-3 ">
                    DAFTAR SEKARANG
                </button>
            </section>
        </>
    )
}
