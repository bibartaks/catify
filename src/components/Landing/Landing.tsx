import { montserrat } from "@/app/fonts"
import React from "react"
import Link from "next/link"
import Image from "next/image"
import styles from "./landing.module.scss"

export default function Landing() {
  return (
    <header className={`h-[calc(100vh-50px)]`}>
      <div className={styles.gradientBall}></div>
      <div className="h-[100%] flex flex-col  justify-center  items-center  max-w-[1050px] mx-auto">
        <h1
          className={`text-5xl   font-bold ${montserrat.className} text-center leading-[120%] mb-5 }`}
        >
          Instantly Embrace the Adoption of a Loving
          <span className={styles.catTitle}> cat</span> into Your Life
        </h1>
        <p
          className="max-w-[650px] mx-auto text-center mb-8
         leading-[200%]"
        >
          With our intuitive and powerfull platform you can easily adopt your
          cat without any hassle and find various types of cats with just a
          second
        </p>
        <div>
          <Link
            href="#"
            className="bg-gradient-to-r from-[#4b97f3] to-[blue] px-5 py-3 rounded-full text-white   mr-5 hover:opacity-80"
          >
            Get Started
          </Link>
          <Link
            href="#"
            className="bg-[white] border  border-gray-800 px-5 py-3 rounded-full text-black "
          >
            Demo
          </Link>
        </div>
      </div>
    </header>
  )
}
