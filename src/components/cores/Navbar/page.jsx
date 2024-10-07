'use client'
import Link from "next/link";
import Image from "next/image";
import { FaPhone } from "react-icons/fa6";
import { IoMdMailOpen } from "react-icons/io";
import { useState } from 'react';
import { Drawer, Space } from 'antd';
import { GiHamburgerMenu } from "react-icons/gi";
import Logoatas from "@/images/logoatas.webp"


import { Menu } from 'antd';
const items = [
    {
        key: '3',
        label: <Link href="/">HOME</Link>,
    },
    {
        key: 'sub1',
        label: 'TENTANG TSM',
        children: [
            {
                key: '5',
                label: <Link href="/sejarah-tsm">Sejarah TSM</Link>,
            },
            {
                key: '6',
                label: <Link href="/kultur-nilai">Nilai & Kultur</Link>,
            },
            {
                key: '7',
                label: <Link href="/manajemen">Manajemen</Link>,
            },
        ],
    },
    {
        key: 'sub2',
        label: 'AKADEMIK',
        children: [
            {
                key: '11',
                label: <Link href="/akuntansi">S1 Akuntansi</Link>,
            },
            {
                key: '12',
                label: <Link href="/manajemen">S1 Manajemen</Link>,
            },
            {
                key: '12',
                label: <Link href="/international-class">Kelas Internasional</Link>,
            },

        ],
    },
];


export default function Navbar() {
    const [collapsed, setCollapsed] = useState(false);
    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };


    const [open, setOpen] = useState(false);
    const [placement, setPlacement] = useState('left');
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };
    const onChange = (e) => {
        setPlacement(e.target.value);
    };

    return (
        <>
            <div className="fixed z-50 w-full">
                <section id='Top Navbar' className="hidden lg:flex px-10 py-1 lg:py-2 lg:w-[400px]] bg-neutral-800 text-xs text-white justify-end items gap-5">
                    <button className="rounded-md bg-blue-600 text-white px-1">Daftar Sekarang</button>
                    <div className="flex items-center gap-1"><FaPhone />(021) 566-6717</div>
                    <div className="flex items-center gap-1"><IoMdMailOpen />pmb@stietrisakti.ac.id</div>
                </section>

                <main id='Navbar' className=" flex justify-start lg:justify-between bg-neutral-600 px-5 lg:py-2 lg:px-16 lg:w-full text-white">
                    <section id="left" className="flex lg:hidden">
                        <Space>
                            <div onClick={showDrawer} className="text-white">
                                <GiHamburgerMenu />
                            </div>
                        </Space>
                        <Drawer
                            title="Menu"
                            placement={placement}
                            closable={false}
                            onClose={onClose}
                            open={open}
                            key={placement}
                            width={350}
                        >
                            <div
                                style={{
                                    width: 300,
                                }}
                            >

                                <Menu
                                    defaultSelectedKeys={['1']}
                                    defaultOpenKeys={['sub1']}
                                    mode="inline"
                                    theme="light"
                                    inlineCollapsed={collapsed}
                                    items={items}
                                />
                            </div>
                        </Drawer>
                    </section>
                    <section id="center" className="flex justify-center lg:justify-start items-center w-full lg:w-[20%]">
                        <Link href="/">
                            <Image
                                src={Logoatas} // Using the imported image
                                alt="logo atas"
                                width={270} 
                                height={50} 
                                className="w-[270px]"
                                priority={true}
                            />
                        </Link>
                    </section>

                    <section id="right" className="hidden lg:flex">
                        <div>
                            <div className="navbar-center hidden lg:flex">
                                <ul className="menu menu-horizontal px-1">
                                    <li className="font-bold"><Link href="/">HOME</Link></li>
                                    <li>
                                        <details>
                                            <summary className="font-bold">TENTANG TSM</summary>
                                            <ul className="p-2 text-black w-60">
                                                <li><Link href="/sejarah-tsm">Sejarah TSM</Link></li>
                                                <li><Link href="/kultur-nilai">Nilai & Kultur</Link></li>
                                                <li><Link href="/manajemen">Manajemen</Link></li>
                                            </ul>
                                        </details>
                                    </li>
                                    <li>
                                        <details>
                                            <summary className="font-bold">AKADEMIK</summary>
                                            <ul className="p-2 text-black w-60">
                                                <li><Link href="/akuntansi">S1 Akuntansi</Link></li>
                                                <li><Link href="/manajemen">S1 Manajemen</Link></li>
                                                <li><Link href="/international-class">Kelas Internasional</Link></li>
                                            </ul>
                                        </details>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </>
    )
}