'use client';
import Link from "next/link"
import Banner from "./../../images/header.png"
import Image from "next/image"
import { useState } from 'react';
import Slide from "./../../images/slide02.webp"

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
                    className="cursor-pointer w-full h-full object-cover" // Adjust styling as needed
                />
            ) : (
                <iframe
                    className="w-full h-full"
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

export default function Akuntansi() {
    return (
        <>
            <section className="relative">
                <Image
                    src={Banner}
                    alt="banner heading"
                    className="object-cover w-full h-40 lg:h-60 pt-14 lg:pt-24" // Adjust width and height as needed
                />
                <div className="absolute inset-0 flex items-center justify-center pt-16 lg:pt-32">
                    <div className="text-white p-4 font-bold text-2xl lg:text-4xl flex"> {/* Optional background for text */}
                        PROGRAM STUDI S1 AKUNTANSI
                    </div>
                </div>
            </section>

            <section className="grid grid-cols-2 grid-rows-2 lg:px-80 gap-5 mt-6 ">
                <div className="col-span-2 flex justify-center">
                    <Image
                        src={Slide} // Replace with your image source
                        alt="Banner Image"
                    />
                </div>
                <YouTubeVideo videoId="UvKsslT7tGM" />
                <YouTubeVideo videoId="OuEwGY1GWxk" />
            </section>

            <section className="lg:px-80 mt-6">
                <div className="join join-vertical w-full">
                    <div className="collapse collapse-arrow join-item border-base-300 border">
                        <input type="radio" name="my-accordion-4" defaultChecked />
                        <div className="collapse-title text-xl font-bold">VISI</div>
                        <div className="collapse-content">
                            <p>Menjadi Program Studi Akuntansi yang Berkelas Dunia</p>
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
                                <li>4. Menghasilkan Penelitian dalam Bidang Akuntansi yang Diakui oleh Dunia Internasional</li>
                            </ol>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border-base-300 border">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-bold">TUJUAN</div>
                        <div className="collapse-content">
                            <p>Program studi S1 Akuntansi merupakan program studi yang menghasilkan sarjana akuntansi yang siap menjadi akuntan profesional dan kompeten berlandaskan wawasan berpikir manajerial.</p>
                            <br />
                            <p>Agar menjadi sarjana yang siap untuk menjadi akuntan yang profesional dan kompeten di era teknologi informasi sekarang ini, maka para mahasiswa dibekali dengan kemampuan-kemampuan dalam penerapan aplikasi teknologi informasi seperti penguasaan penggunaan software akuntansi dan semacamnya yang ditambah pula dengan kemampuan analitis yang berwawasan pola pikir manajerial dalam pemecahan masalah di lapangan dengan berlandas pada nilai-nilai etika dan moral yang berlaku di masyarakat.</p>
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
                        <div className="collapse-title text-xl font-bold">Finance Accounting (Akuntansi Keuangan)</div>
                        <div className="collapse-content">
                            <p>Mahasiswa dipersiapkan menjadi sarjana akuntansi yang profesional dengan kemampuan menganalisis dan memecahkan masalah akuntansi dan keuangan selaras dengan kebijakan dan standar akuntansi di Indonesia dan Internasional.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border-base-300 border">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-bold">Management Accounting (Akuntansi Manajemen)</div>
                        <div className="collapse-content">
                            <p>Mahasiswa dipersiapkan menjadi sarjana akuntansi yang profesional dengan kemampuan mengimplementasikan teknik dan metode kontemporer di bidang akuntansi manajemen dalam rangka menanggapi kebutuhan dunia usaha yang berkembang pesat.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border-base-300 border">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-bold">Auditing (Pemeriksaan Akuntansi)</div>
                        <div className="collapse-content">
                            <p>Mahasiswa dipersiapkan menjadi sarjana akuntansi yang profesional dan dapat berkarir sebagai auditor eksternal di kantor akuntan publik maupun sebagai auditor internal perusahaan.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border-base-300 border">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-bold">Taxation (Perpajakan)</div>
                        <div className="collapse-content">
                            <p>Mahasiswa dipersiapkan untuk dapat berkarir di bidang perpajakan di perusahaan nasional maupun multinasional serta mampu menganalisis dan menjawab permasalahan di bidang perpajakan.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="lg:px-80 mt-6 flex justify-center mb-5">
                <button className="font-bold border border-black bg-white text-black hover:bg-black transition-colors duration-300 hover:text-white p-3">
                    DAFTAR SEKARANG
                </button>
            </section>
        </>
    )
}
