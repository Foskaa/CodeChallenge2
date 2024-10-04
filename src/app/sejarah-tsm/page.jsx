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
            tanggal: "23 September 1981",
            deskripsi: "Status Terdaftar Diperoleh pada 6 Juni 1977, Berdasarkan Keputusan Menteri P&K NO.0134/U/1977. Status Tersebut Dikukuhkan Kembali Dengan Keputusan Menteri P&K NO.0268/O/1981 Tanggal 23 September 1981."
        },
        {
            image: "https://www.tsm.ac.id/wp-content/uploads/2022/07/tsm01.png",
            tanggal: "27 Juli 1985",
            deskripsi: "Akademi Akunting Trisakti Berubah Nama Menjadi Akademi Akuntansi Trisakti, Pada Tanggal 27 Juli 1985 Dengan Keputusan Menteri P&K NO.331/0/1985. "
        },
        {
            image: "https://www.tsm.ac.id/wp-content/uploads/2022/07/tsm01.png",
            tanggal: "13 Mei 1986",
            deskripsi: "Tertanggal 13 Mei 1986, Akademi Akuntansi Trisakti Mendapat Status Diakui, Keputusan Menteri P&K NO.0354/O/1986. "
        },
        {
            image: "https://www.tsm.ac.id/wp-content/uploads/2022/07/tsm02.png",
            tanggal: "20 Maret 1990",
            deskripsi: "Status Disamakan Diberikan pada Tanggal 20 Maret 1990 Dengan Keputusan Menteri PK No.0159/O/1990"
        },
        {
            image: "https://www.tsm.ac.id/wp-content/uploads/2022/07/tsm02.png",
            tanggal: "10 Mei 1993",
            deskripsi: "Diubah Bentuknya Menjadi Sekolah Tinggi Ilmu Ekonomi Trisakti dari Akademi Akuntansi Trisakti menurut Keputusan Menteri P&K No.66/D/O/1993"
        },
        {
            image: "https://www.tsm.ac.id/wp-content/uploads/2022/07/tsm02.png",
            tanggal: "8 Juni 2000",
            deskripsi: "Status Terakreditasi untuk Program S-1 Akuntansi dan S-1 Manajemen, Berdasarkan Keputusan BAN PT Departemen Pendidikan Nasional RI NO.008/BAN-PT/AK-IV/VI/2000"
        },
        {
            image: "https://www.tsm.ac.id/wp-content/uploads/2022/07/tsm02.png",
            tanggal: "23 Juni 2005",
            deskripsi: "Program Studi S-1 Manajemen Terakreditasi Dengan Peringkat A Berdasarkan Keputusan BAN PT Departemen Pendidikan Nasional RI NO.008/BAN-PT/AK-IX/S1/VI/2005"
        },
        {
            image: "https://www.tsm.ac.id/wp-content/uploads/2022/07/tsm02.png",
            tanggal: "4 Agustus 2005",
            deskripsi: "Program Studi S-1 Akuntansi Terakreditasi Dengan Peringkat A Berdasarkan Keputusan BAN PT Departemen Pendidikan Nasional RI NO.014/BAN-PT/AK-IX/S1/VIII/2005"
        },
        {
            image: "https://www.tsm.ac.id/wp-content/uploads/2022/07/DJI_0432_overlay-scaled.jpg",
            tanggal: "30 Desember 2010",
            deskripsi: "Reakreditasi Program Studi S-1 Manajemen dan Kembali Mendapatkan Peringkat A Berdasarkan Keputusan BAN PT Departemen Pendidikan Nasional RI NO.033/BAN-PT/AK-XIII/S1/XII/2010"
        },
        {
            image: "https://www.tsm.ac.id/wp-content/uploads/2022/07/DJI_0432-back_overlay-scaled.jpg",
            tanggal: "28 Januari 2011",
            deskripsi: "Reakreditasi Program Studi S-1 Akuntansi dan Kembali Mendapatkan Peringkat A Berdasarkan Keputusan BAN PT Departemen Pendidikan Nasional RI NO.043/BAN-PT/AK-XIII/S1/I/2011"
        },
        {
            image: "https://www.tsm.ac.id/wp-content/uploads/2022/07/manajemen-A.jpg",
            tanggal: "10 Juni 2016",
            deskripsi: "Status Akreditasi A Diraih untuk yang Ketiga Kalinya oleh Program Studi S1 Manajemen Dengan Nomor SK BAN PT 0809/SK/BAN-PT/AKRED/S/VI/2016"
        },
        {
            image: "https://www.tsm.ac.id/wp-content/uploads/2022/07/akuntansi-A.jpg",
            tanggal: "17 Juni 2016",
            deskripsi: "Status Akreditasi A Diraih untuk yang Ketiga Kalinya oleh Program Studi S1 Akuntansi Dengan Nomor SK BAN PT 0921/SK/BAN-PT/AKRED/S/VI/2016"
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
            image: "https://www.tsm.ac.id/wp-content/uploads/2022/07/DJI_0692_overlay-scaled.jpg",
            tanggal: "Juni 2019",
            deskripsi: "TSM Meraih Peringkat 171 dari 1977 Perguruan Tinggi Berdasarkan Penilaian Kinerja Penelitian Oleh KEMENRISTEKDIKTI (Dari Klaster Binaan Naik Menjadi Klaster Utama)"
        },
        {
            image: "https://www.tsm.ac.id/wp-content/uploads/2022/07/manajemen-A.jpg",
            tanggal: "11 Juni 2021",
            deskripsi: "Status Akreditasi A Diraih untuk yang Keempat Kalinya oleh Program Studi S1 Manajemen Dengan Nomor SK BAN PT 8676/SL/BAN-PT/Ak-PPJ/S/VI/2021"
        },
        {
            image: "https://www.tsm.ac.id/wp-content/uploads/2022/07/akuntansi-A.jpg",
            tanggal: "18 Juni 2021",
            deskripsi: "Status Akreditasi A Diraih untuk yang Keempat Kalinya oleh Program Studi S1 Akuntansi Dengan Nomor SK BAN PT 8828/SK/BAN-PT/Ak-PPJ/S/VI/2021"
        },
        {
            image: "https://www.tsm.ac.id/wp-content/uploads/2022/07/IMG_5210_overlay-scaled.jpg",
            tanggal: "6 September 2021",
            deskripsi: "TSM Berhasil Mempertahankan Akreditasi Institusi A (Sangat Baik) Berdasarkan Surat Keputusan Direktur Dewan Eksekutif BAN-PT No.34/SK/BAN-PT/AK.PPJ/PT/I/2023"
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