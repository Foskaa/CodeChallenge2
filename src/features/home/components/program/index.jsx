import Image from "next/image"
import Link from "next/link"


export default function Program({ image, title, description, link }) {
    return (
        <div className="card bg-neutral-700 text-white shadow-xl">
            <figure>
                <Image src={image} alt={title} width={800} height={533} loading="lazy" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <div className="card-actions justify-start">
                    <button className="btn btn-outline border-white text-white w-40 hover:bg-white hover:text-black">
                        <Link href={link}>Lihat Detail</Link>
                    </button>
                </div>
            </div>
        </div>
    );
    
}