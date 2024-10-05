'use client'

import MapSejarah from "@/features/Sejarah/page";
import { Carousel } from "@material-tailwind/react";


export default function Sejarah() {
    const item = [
        {
            image: "https://www.tsm.ac.id/wp-content/uploads/2022/07/tsm01.png",
            tanggal: "30 November 1974",
            deskripsi: "Akademi Akunting Trisaksi Berdiri Berdasarkan Keputusan Yayasan Trisakti No.59/184/1974"
        },
        {
            image: "https://www.tsm.ac.id/wp-content/uploads/2022/07/tsm01.png",
            tanggal: "27 Juli 1985",
            deskripsi: "Akademi Akunting Trisakti Berubah Nama Menjadi Akademi Akuntansi Trisakti, Pada Tanggal 27 Juli 1985 Dengan Keputusan Menteri P&K NO.331/0/1985. "
        },
        {
            image: "https://www.tsm.ac.id/wp-content/uploads/2022/07/tsm02.png",
            tanggal: "10 Mei 1993",
            deskripsi: "Diubah Bentuknya Menjadi Sekolah Tinggi Ilmu Ekonomi Trisakti dari Akademi Akuntansi Trisakti menurut Keputusan Menteri P&K No.66/D/O/1993"
        },
        {
            image: "https://www.tsm.ac.id/wp-content/uploads/2022/07/tsm02.png",
            tanggal: "23 Juni 2005",
            deskripsi: "Program Studi S-1 Manajemen & S-1 Akuntansi Terakreditasi Dengan Peringkat A Berdasarkan Keputusan BAN PT Departemen Pendidikan Nasional RI NO.008/BAN-PT/AK-IX/S1/VI/2005"
        },
        {
            image: "https://www.tsm.ac.id/wp-content/uploads/2022/07/DJI_0432_overlay-scaled.jpg",
            tanggal: "30 Desember 2010",
            deskripsi: "Reakreditasi Program Studi S-1 Manajemen & S-1 Akuntansi Kembali Mendapatkan Peringkat A Berdasarkan Keputusan BAN PT Departemen Pendidikan Nasional RI NO.033/BAN-PT/AK-XIII/S1/XII/2010"
        },
        {
            image: "https://www.tsm.ac.id/wp-content/uploads/2022/07/manajemen-A.jpg",
            tanggal: "10 Juni 2016",
            deskripsi: "Status Akreditasi A Diraih untuk yang Ketiga Kalinya oleh Program Studi S1 Manajemen & S1 Akuntansi Dengan Nomor SK BAN PT 0809/SK/BAN-PT/AKRED/S/VI/2016"
        },
        {
            image: "https://www.tsm.ac.id/wp-content/uploads/2022/07/IMG_5210_overlay-scaled.jpg",
            tanggal: "5 September 2017",
            deskripsi: "Akreditasi Institusi A (Sangat Baik) Untuk Pertama Kalinya Sejak Diberlakukannya PERMENRISTEKDIKTI RI NO.32 Tahun 2016 Tentang Akreditasi Program Studi dan Perguruan Tinggi, STIE Trisakti Berdasarkan Keputusan BAN-PT No.3140/SK/BAN-PT/AKRED/PT/IX/2017"
        },
        {
            image: "https://www.tsm.ac.id/wp-content/uploads/2022/07/Bekasi_overlay-scaled.jpg",
            tanggal: "Juni 2018",
            deskripsi: "Peringkat Pertama Apresiasi Riset dan Pengembangan PTS Wilayah III untuk Kategori Sekolah Tinggi Berdasarkan Keputusan Kepala LLDIKTI Wilayah III No. 142/L3/AK/2018"
        },
        {
            image: "https://www.tsm.ac.id/wp-content/uploads/2022/07/manajemen-A.jpg",
            tanggal: "11 Juni 2021",
            deskripsi: "Status Akreditasi A Diraih untuk yang Keempat Kalinya oleh Program Studi S1 Manajemen & S1 Akuntansi"
        },
        {
            image: "https://www.tsm.ac.id/wp-content/uploads/2022/07/IMG_5210_overlay-scaled.jpg",
            tanggal: "6 September 2021",
            deskripsi: "TSM Berhasil Mempertahankan Akreditasi Institusi A (Sangat Baik) Berdasarkan Surat Keputusan Direktur Dewan Eksekutif BAN-PT"
        }
    ]


    return (
        <>
            <Carousel className="rounded-xl">
                {
                    item.map((item, index) => {
                        return (
                            <MapSejarah key={index} image={item.image} tanggal={item.tanggal} deskripsi={item.deskripsi} />
                        )
                    })
                }
            </Carousel>
        </>
    );

}