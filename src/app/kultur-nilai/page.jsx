import Image from "next/image"
import Kultur from "./../../images/DJI_0692-scaled.jpg"

export default function Culture() {
    const item = [
        {
            awal: "D",
            deskripsi: "Discipline : Kami dengan penuh tanggung jawab mengambangkan sikap untuk mematuhi dan mengikuti setiap peraturan serta norma yang berlaku."
        },
        {
            awal: "E",
            deskripsi: "Excellence: Kami mengupayakan kualitas unggul dalam berbagai pencapaian."
        },
        {
            awal: "T",
            deskripsi: "Tolerance: Kami berkolaborasi dengan sikap saling menghargai, menghormati perbedaan serta menyatukan dalam ikatan kekeluargaan."
        },
        {
            awal: "H",
            deskripsi: "Humanity: Kami terus beradaptasi terhadap perkembangan teknologi dengan selalu mengedepankan sikap kepedulian dan menghargai sesama dalam interaksi pribadi serta kelompok."
        },
        {
            awal: "I",
            deskripsi: "Integrity: Kami berkomitmen untuk selalu memberikan yang terbaik dalam setiap pelaksanaan tanggung jawab, memegang teguh kode etik dan prinsip - prinsip moral serta menjalankannya secara konsisten."
        },
        {
            awal: "C",
            deskripsi: "Competence: Kami membangun kecakapan, kemampuan, keterampilan dan kemandirian dalam bertindak serta mengembangkan wawasan keilmuan guna menjadi manfaat bagi diri sendiri dan sesama."
        },
    ]


    return (

        <>
            <>
                <div className="relative h-[1100px] lg:h-[1200px] w-full">
                    <Image
                        src={Kultur}
                        alt="image 1"
                        width={700}
                        height={400}
                        className="h-full w-full object-cover object-top"
                    />
                    <div className="absolute inset-0  min-h-screen h-full w-full pt-20 lg:pt-48 flex-col bg-black/60">
                        <div className="text-center flex justify-center text-white font-semibold ">
                            Trisakti School of Management
                        </div>
                        <div className="pt-2 text-center flex justify-center text-4xl lg:text-5xl text-white  font-bold">
                            Nilai-Nilai D-ETHIC
                        </div>

                        {
                            item.map((item, index) => {
                                return (
                                    <div className='px-5 lg:px-72'>
                                        <div className="text-white pt-4 lg:pt-10 flex justify-center">
                                            <div className='flex border backdrop-blur-sm bg-black/50 hover:bg-white/50 hover:text-black transition-colors duration-300 ease-in-out skew-y-12 '>
                                                <div className='font-bold text-5xl lg:text-7xl flex items-center border p-4 -skew-y-12'>
                                                    {item.awal}
                                                </div>
                                            </div>
                                            <div className='flex items-center pl-5 text-base lg:text-lg bg-black/40 text-white skew-x-6 lg:skew-x-12'>
                                                <div className='flex items-center pl-5 -skew-x-6 lg:-skew-x-12 px-4'> {item.deskripsi}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                )
                            })

                        }
                    </div>


                </div>
            </>
        </>
    )
}