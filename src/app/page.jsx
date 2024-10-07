'use client';

import BannerSection from "@/features/home/components/bannersection";
import Nilai from "@/features/home/components/nilai-cult2";
import Testimoni from "@/features/home/components/testimoni";
import Program from "@/features/home/components/program";
import Portal from "@/features/home/components/portal-mhs";



export default function Home() {
  return (
    <main className="pt-11 lg:pt-0 bg-white">
      <BannerSection />

      <Nilai />

      <Testimoni />

      <Program />

      <Portal />

    </main>
  );
}
