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
                srcSet={`
    /_next/image?url=${Banner}&w=640&q=75 640w,
    /_next/image?url=${Banner}&w=1280&q=75 1280w,
    /_next/image?url=${Banner}&w=1920&q=75 1920w,
    /_next/image?url=${Banner}&w=3840&q=75 3840w
  `}
                sizes="(max-width: 640px) 640px, (max-width: 1280px) 1280px, (max-width: 1920px) 1920px, 100vw"

            />
        </section>
    )
}




