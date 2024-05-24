'use client'
import Image from "next/image"
import './navbar.css'
import TonConnect from "../Ton/TonConnect"
import Link from "next/link"

export default function Home() {
    return (
        <>
            <div className="flex justify-between items-center navbar">
                <Link href="/">
                <Image src="/rami.svg" alt="logo" height={100} width={100} />
                </Link>
                <TonConnect />
            </div>
        </>
    )
}