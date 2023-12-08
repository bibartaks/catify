import { montserrat } from "@/app/fonts"
import React from "react"
import Link from "next/link"
import Image from "next/image"

export default function Landing() {
  return (
    <header className={`h-[calc(100vh-100px)]`}>
      <div className="w-[400px] h-[400px] bg-[#7B66FF] opacity-80 mt-20  blur-[8rem] rounded-full z-[-1] absolute"></div>

      <div className="h-[100%] flex  justify-between  items-center  max-w-[1300px] mx-auto">
        <div>
          <h1 className={`text-5xl ${montserrat.className} font-bold mb-5`}>
            Adopt Cat In A Second!
          </h1>
          <p className="max-w-[500px] text-justify leading-[180%] mb-5">
            Experience instant feline companionship on our revolutionary
            platform. Adopt a cat in seconds, skipping the wait and
            complexities. Redefine adoption with swift and gratifying
            connections. Join us in creating lasting bonds with just a click.
          </p>
          <Link
            href="#"
            className="bg-[#1640D6] px-4 py-2 text-white rounded-full text-sm hover:opacity-80"
          >
            Adopt Now
          </Link>
        </div>
        <div className="z-20">
          <Image src="/cat.png" width={500} height={500} alt="cat image" />
        </div>
      </div>
    </header>
  )
}
