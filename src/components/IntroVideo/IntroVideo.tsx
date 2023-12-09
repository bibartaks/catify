import { montserrat } from "@/app/fonts"
import React from "react"
import styles from "./introVideo.module.scss"
import Image from "next/image"

export default function IntroVideo() {
  return (
    <div className={`${styles.videoBg} overflow-hidden `}>
      <div className=" absolute  z-20 right-[-280px] opacity-20  ">
        <Image
          src="blob-haikei (3).svg"
          alt="asd"
          width={1000}
          height={1000}
          className=" animate-spin-slow"
        />
      </div>
      <div className="max-w-[1050] mx-auto py-20">
        <div className={styles.introVideoBgBall}></div>
        <h1
          className={`text-center mb-5 text-3xl font-bold text-gray-700 ${montserrat.className}`}
        >
          See How It <span className={styles.spWord}>Works</span>
        </h1>
        <div className={styles.videoContainer}>
          <iframe
            className="w-[1000px] h-[563px]  mx-auto shadow-2xl border-none"
            src="https://www.loom.com/embed/11f1a97868a84d4a918249121fb7978b?sid=84b77410-b9a3-4404-844f-e0535c926196"
          ></iframe>
        </div>
      </div>
    </div>
  )
}
