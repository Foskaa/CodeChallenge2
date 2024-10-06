'use client';
import Banner from "./../../images/header.png";
import Image from "next/image";
import { useState } from 'react';

const YouTubeVideo = ({ videoId }) => {
    const [isPlaying, setIsPlaying] = useState(false);

    const handleClick = () => {
        setIsPlaying(true);
    };

    return (
        <div className="flex justify-center mb-4">
            {!isPlaying ? (
                <Image
                    src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`} l
                    alt="Thumbnail"
                    width={1500} 
                    height={1000} 
                    onClick={handleClick}
                    className="cursor-pointer w-full h-full object-cover" 
                />
            ) : (
                <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} 
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            )}
        </div>
    );
};

export default function Manajemen() {
    return (
        <>
            <section className="relative">
                <Image
                    src={Banner}
                    alt="banner heading"
                    className="object-cover w-full h-40 lg:h-60 pt-14 lg:pt-24" 
                />
                <div className="absolute inset-0 flex items-center justify-center pt-16 lg:pt-32">
                    <div className="text-white p-4 font-bold text-2xl lg:text-4xl flex"> 
                        PROGRAM STUDI S1 MANAJEMEN
                    </div>
                </div>
            </section>

            <section className="grid grid-cols-2 grid-rows-2 lg:px-80 gap-5 mt-6 ">
                <div className="col-span-2 flex justify-center">
                    <Image
                        src="https://www.tsm.ac.id/wp-content/uploads/2020/02/slide-manajemen-01.png" 
                        alt="Banner Image"
                        width={900}
                        height={500}
                        priority
                    />
                </div>
                <YouTubeVideo videoId="RFDYgFm6hww" />
                <YouTubeVideo videoId="OuEwGY1GWxk" />
            </section>

            <section className="lg:px-80 mt-6">
                <div className="join join-vertical w-full">
                    <div className="collapse collapse-arrow join-item border-base-300 border">
                        <input type="radio" name="my-accordion-4" defaultChecked />
                        <div className="collapse-title text-xl font-bold">VISI</div>
                        <div className="collapse-content">
                            <p>Menjadi Program Studi Manajemen yang Berkelas Dunia pada Tahun 2032</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border-base-300 border">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-bold">MISI</div>
                        <div className="collapse-content">
                            <ol>
                                <li>1. Menyelenggarakan Pendidikan Tinggi Secara Profesional yang Berkualitas Internasional</li>
                                <li>2. Menghasilkan Lulusan Berkelas Dunia yang Kompeten, Berdaya Saing dan Berkarakter Unggul</li>
                                <li>3. Menjalin dan Memperluas Kerjasama dalam Bidang Penelitian dan Pengabdian kepada Masyarakat dengan Berbagai Pihak, Baik Dalam Maupun Luar Negeri</li>
                            </ol>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border-base-300 border">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-bold">TUJUAN</div>
                        <div className="collapse-content">
                            <ol>
                                <li>1. Melaksanakan Program Pendidikan Tinggi secara Profesional dan Berkualitas Dunia</li>
                                <li>2. Menjadikan Program Studi yang Berorientasi Penelitian</li>
                                <li>3. Membina dan Mengembangkan Kerjasama dan Kemitraan Institusional yang Saling Memberikan Nilai Tambah dalam Bidang Pengabdian kepada Masyarakat</li>
                                <li>4. Mengembangkan Manajemen Program Studi yang Efektif, Efisien, Transparan, Akuntabel, dan Berkelanjutan</li>
                                <li>5. Melaksanakan Pembinaan Mahasiswa dan Alumni Secara Terpadu dan Berkelanjutan</li>
                                <li>6. Meningkatkan Citra Program Studi di Mata Stakeholder</li>
                            </ol>
                            <br />
                            <p>
                                Program studi S1 Manajemen menyiapkan para mahasiswa untuk menjadi lulusan yang berstandar internasional sehingga mampu memperoleh sertifikasi nasional dan internasional yang mencakup sertifikasi kompetensi dan profesi di bidang manajemen bisnis yaitu keuangan, pemasaran, dan sumber daya manusia yang kompeten dan berkualitas. Melalui program yang bersifat inovatif dan kreatif serta berkarakter, kurikulum dirancang untuk melatih mahasiswa menjadi profesional bisnis dan seorang entrepreneur yang memiliki ketajaman analisis terhadap setiap masalah yang dihadapi dengan berlandaskan nilai-nilai moral dan etika dunia bisnis serta mampu beradaptasi dengan perubahan teknologi.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="lg:px-80 text-center mt-10 font-bold text-2xl">
                KONSENTRASI STUDI
            </section>

            <section className="lg:px-80 mt-6">
                <div className="join join-vertical w-full">
                    <div className="collapse collapse-arrow join-item border-base-300 border">
                        <input type="radio" name="my-accordion-4" defaultChecked />
                        <div className="collapse-title text-xl font-bold">Marketing (Manajemen Pemasaran)</div>
                        <div className="collapse-content">
                            <p>Dirancang sebagai wahana pengembangan serta diskusi wawasan pemasaran menghadapi kompetisi antar industri yang bertitik tolak pada consumer insight (wawasan konsumen) dengan mempersiapkan mahasiswa menjadi pemasar profesional yang dapat merencanakan, menganalisa, serta mengimplementasikan strategi, taktik, dan marketing value untuk menangani produk konsumen, jasa, ritel maupun manufaktur.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border-base-300 border">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-bold">Finance (Manajemen Keuangan)</div>
                        <div className="collapse-content">
                            <p>Menyiapkan mahasiswa agar mampu menjadi profesional keuangan yang memiliki ketajaman analisa terhadap berbagai resiko keuangan serta mampu memberikan solusi pemecahan dengan berbagai instrumen.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border-base-300 border">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-bold">Human Resource (Manajemen Sumber Daya Manusia)</div>
                        <div className="collapse-content">
                            <p>Mempersiapkan lulusan yang mampu mengintegrasikan berbagai konsep dan strategi pengelolaan sumber daya manusia serta memahami fungsi-fungsi sumber daya manusia agar mampu merancang dan mengevaluasi sistem sumber daya manusia serta mengimplementasikannya pada praktek bisnis.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="lg:px-80 mt-6 flex justify-center mb-5">
                <button className="font-bold bg-white border border-black text-black hover:bg-black transition-colors duration-300 hover:text-white p-3">
                    DAFTAR SEKARANG
                </button>
            </section>
        </>
    );
}
