'use client';

import Image from "next/image"
import logobawah from './../../../images/logobawah.svg'
import Aacsb from './../../../images/aacsb.svg'
import Jakarta from './../../../images/jakarta.png'
import Bekasi from './../../../images/bekasi.png'
import { FaPhone } from "react-icons/fa6";
import { IoMdMailOpen } from "react-icons/io";
import Link from "next/link";

export default function Footer() {
    return (
        <>
            <footer className="bg-neutral-600 grid grid-flow-row lg:grid-cols-4 space-y-12 lg:space-y-0 lg:gap-5 p-5 px-14 text-white z-40">
                <div id="first" className="">
                    <Image
                        src={logobawah} // Using the imported image
                        alt="logo bawah"
                        className="w-[80%]"
                    />
                    <div className="text-white py-5">
                        Sekolah Tinggi Ilmu Ekonomi (STIE) Trisakti atau Trisakti School of Management(TSM) merupakan perguruan
                        tinggi yang telah mendapatkan akreditasi A baik jurusan S1 Akuntansi dan S1 Manajemen.
                    </div>
                    <div className="gap-2 flex items-center text-white"><FaPhone />(021) 566-6717</div>
                    <div className="gap-2 flex items-center text-white"><IoMdMailOpen />pmb@stietrisakti.ac.id</div>
                </div>
                <div id="second" className="text-start lg:text-center">
                    <div className="text-xl font-bold mb-5">Member of:</div>
                    <Image
                        src={Aacsb} // Using the imported image
                        alt="logo bawah"
                        className="w-[50%] lg:mx-auto"
                    />
                    <div className="underline"><a href="https://www.aacsb.edu/membership/listings/all-educational-members?F_Country=Indonesia">View Member Profile</a></div>
                </div>

                <div id="third" className="" >
                    <div className="text-xl font-bold underline mb-5 text-start  lg:text-center">Quick Links:</div>
                    <div className="space-y-3 text-start lg:text-center">
                        <div><Link href="/pendaftaran">Pendaftaran</Link></div>
                        <div><Link href="/international-class">International Class</Link></div>
                    </div>
                </div>


                <div id="forth" >
                    <div>Campus Location:</div>
                    <div className="flex border-white border rounded-3xl my-3">
                        <div>
                            <Image
                                src={Jakarta} // Using the imported image
                                alt="logo bawah"
                                className="w-[230px] h-[100%] rounded-l-3xl"
                            />
                        </div>
                        <div className="px-4">
                            <div className="font-bold">
                                Jakarta Campus
                            </div>
                            <div>
                                Jl. Kyai Tapa No. 20 Grogol - Jakarta Barat
                                Jakarta - 11440
                            </div>
                        </div>
                    </div>
                    <div className="flex  border-white border rounded-3xl">
                        <div>
                            <Image
                                src={Bekasi} // Using the imported image
                                alt="logo bawah"
                                className="w-[230px] h-[100%] rounded-l-3xl"
                            />
                        </div>
                        <div className="px-4">
                            <div className="font-bold">
                                Bekasi Campus
                            </div>
                            <div>
                                Jalan Siliwangi No. 74 Sepanjang Jaya, Rawalumbu - Bekasi
                                Jawa Barat - 17114
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}