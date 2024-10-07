import Logo from "./../../images/logobawahhitam.svg"
import Image from "next/image"

export default function LoginOT() {
    return (
        <main className="flex justify-center items-center h-screen">
            <login className="bg-gray-50 py-6 px-10 drop-shadow-xl">
                <Image
                    src={Logo}
                    alt="logo TSM"
                    className="flex pl-5 justify-center items0"
                />
                <div className="flex justify-center font-bold pt-5 text-xl">
                    Login
                </div>
                <div className="pb-5 text-sm font-bold flex justify-center">
                    Portal Mahasiswa
                </div>
                <div className="space-y-3">
                    <label className="block text-xs"> Email </label>
                    <input className="block p-3  border-neutral-200" type="email" placeholder="20......." />
                    <label className="block text-xs border"> Password </label>
                    <input className="block p-3  border-neutral-200" type="password" placeholder="Password" />
                    <button className="block bg-neutral-600 p-3 w-full text-white">Login</button>
                </div>
            </login>
        </main>
    )
}