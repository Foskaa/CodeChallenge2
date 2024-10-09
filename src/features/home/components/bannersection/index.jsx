import Banner from '@/images/banner.webp'
import Image from 'next/image'

export default function BannerSection() {
    return (
        <section id="banner">
            <Image
                src='https://www.tsm.ac.id/wp-content/uploads/2024/06/SLIDER-promo-kelas-karyawan-1536x786.jpg'
                alt="Banner"
                className="flex"
                decoding="async"
                priority
                width={1400}
                height={716}
                sizes="(max-width: 640px) 640px, (max-width: 1280px) 1280px, 100vw"

            />
        </section>
    )
}




