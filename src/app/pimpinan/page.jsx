// 'use client'
// import { setUser } from "@/redux/slice/userSlice"
//  import axios from "axios"
// import { useEffect } from "react"
// import { useDispatch, useSelector } from "react-redux"

// export default function Teams() {
//     const dispatch = useDispatch()
//     const dataUser = useSelector((state) => state.user.user)
//     console.log(dataUser)
//     const onFetchData = async () => {
//         try {
//             const res = await axios.get('https://randomuser.me/api?results=6')
//             const response = res.data.results
//             dispatch(setUser(response))
//         } catch (error) {
//             console.log(error)
//         }
//     }

//     useEffect(() => {
//         onFetchData()
//     }, [])

//     return (
//         <>


//         </>
//     )
// }
import Image from "next/image"
import { FaPhoneAlt } from "react-icons/fa";
import { IoMailSharp } from "react-icons/io5";



const fetchData = async () => {
    try {
        let res = await fetch('https://randomuser.me/api?results=6',
            {
                cache: 'force-cache',
                next: {
                    revalidate: 5
                }
            }
        )
        res = await res.json()
        return res.results
    } catch (error) {
        console.log(error)
    }
}



export default async function Teams() {
    const kerja = [
        {
            jabatan: "Ketua"
        },
        {
            jabatan: "Wakil Ketua I"
        },
        {
            jabatan: "Wakil Ketua II"
        },
        {
            jabatan: "Wakil Ketua III"
        },
        {
            jabatan: "Ketua Program Akuntansi"
        },
        {
            jabatan: "Ketua Program Manajemen"
        }
    ]

    const dataUser = await fetchData()

    console.log(dataUser)
    return (
        <>
            <div className="flex items-center pt-16 lg:py-0 lg:pt-32">
                <span className="flex-grow border-b border-gray-400"></span>
                <span className="mx-2 font-bold text-2xl text-gray-700">DAFTAR PIMPINAN</span>
                <span className="flex-grow border-b border-gray-400"></span>
            </div>


            <div className="grid grid-cols-1 lg:grid-cols-2  px-5 lg:px-40 pt-4 lg:pt-10 pb-32 gap-10">
                {
                    dataUser.map((item, index) => {
                        return (
                            <div key={index} className="flex flex-row shadow-lg gap-2">
                                <div className=" flex justify-end">
                                    <Image
                                        src={item.picture.large}
                                        alt="person"
                                        width={250}
                                        height={250}
                                        className="rounded-l-lg border border-neutral-300"
                                    />
                                </div>
                                <div className="bg-neutral-500 w-[500px] relative rounded-r-lg drop-shadow-2xl">
                                    <div className="px-6 pt-6 text-white font-bold text-xl">
                                        {item.name.first} {item.name.last}
                                    </div>
                                    <div className="px-6 font-medium text-lg text-white italic">
                                        {kerja[index].jabatan}
                                    </div>
                                    <div className="absolute text-white font right-4 bottom-[10%] flex flex-col justify-end text-xs md:text-lg ">
                                        <div className="flex gap-2  justify-end items-center">
                                            <FaPhoneAlt /> {item.phone}
                                        </div>
                                        <div className="flex gap-2 justify-center items-center">
                                            <IoMailSharp /> {item.email}
                                        </div>
                                    </div>
                                </div>
                            </div>


                        )
                    })
                }
            </div>
        </>
    )
}