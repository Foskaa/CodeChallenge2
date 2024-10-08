import Image from "next/image"

export default function Testimoni({ imageUrl, name, batch, testimonial }) {
    return (
        <div className="sm:lg:max-w-sm p-6 bg-white rounded-lg border border-gray-300 drop-shadow-lg mx-auto my-4 lg:my-14">
            <div className="relative bg-neutral-500 text-white p-4 rounded-t-lg">
                <p className="text-lg italic">{testimonial}</p>
            </div>
            <div className="flex items-center mt-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-blue-500 rounded-full overflow-hidden">
                    <Image src={imageUrl} alt={name} height={100} width={100} className="object-cover w-full h-full" />
                </div>
                <div className="ml-4">
                    <p className="text-lg font-semibold">{name}</p>
                    <p className="text-black">({batch})</p>
                </div>
            </div>
        </div>
    )
}