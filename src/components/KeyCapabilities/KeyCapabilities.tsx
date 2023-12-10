/* eslint-disable react/no-unescaped-entities */
import { montserrat } from "@/app/fonts"
import React from "react"
import styles from "./keyCapabilities.module.scss"
import Image from "next/image"

export default function KeyCapabilities() {
  return (
    <div className={`${styles.videoBg}`}>
      <div className="max-w-[1050px] mx-auto py-20">
        <h1
          className={`text-center mb-5 text-3xl font-bold text-gray-700 ${montserrat.className}`}
        >
          Key <span className={styles.spWord}>Capabilities</span>
        </h1>
        {/* Capabilities Container */}
        <div className="grid grid-cols-4 gap-x-10 py-5">
          <div className="border rounded-xl border-black  bg-blue-100 pb-5 ">
            <Image
              src="/natural-language.png"
              width={300}
              height={150}
              alt="lol"
              className="w-[100%] h-[auto] block mx-auto"
            />
            <h1
              className={` ${montserrat.className} text-[1.3rem] font-semibold mb-0 px-2 pt-3`}
            >
              Adoption cat in a second
            </h1>
            <p className="px-2 pt-2 leading-[170%] text-sm">
              Communicate with Luna in everyday language. It's like talking to a
              friend who understands you completely.
            </p>
          </div>
          <div className="border rounded-xl border-black  bg-blue-100 pb-5 ">
            <Image
              src="/natural-language.png"
              width={300}
              height={150}
              alt="lol"
              className="w-[100%] h-[auto] block mx-auto"
            />
            <h1
              className={` ${montserrat.className} text-[1.3rem] font-semibold mb-0 px-2 pt-3`}
            >
              Adoption cat in a second
            </h1>
            <p className="px-2 pt-2 leading-[170%] text-sm">
              Communicate with Luna in everyday language. It's like talking to a
              friend who understands you completely.
            </p>
          </div>
          <div className="border rounded-xl border-black  bg-blue-100 pb-5 ">
            <Image
              src="/natural-language.png"
              width={300}
              height={150}
              alt="lol"
              className="w-[100%] h-[auto] block mx-auto"
            />
            <h1
              className={` ${montserrat.className} text-[1.3rem] font-semibold mb-0 px-2 pt-3`}
            >
              Adoption cat in a second
            </h1>
            <p className="px-2 pt-2 leading-[170%] text-sm">
              Communicate with Luna in everyday language. It's like talking to a
              friend who understands you completely.
            </p>
          </div>
          <div className="border rounded-xl border-black  bg-blue-100 pb-5 ">
            <Image
              src="/natural-language.png"
              width={300}
              height={150}
              alt="lol"
              className="w-[100%] h-[auto] block mx-auto"
            />
            <h1
              className={` ${montserrat.className} text-[1.3rem] font-semibold mb-0 px-2 pt-3`}
            >
              Adoption cat in a second
            </h1>
            <p className="px-2 pt-2 leading-[170%] text-sm">
              Communicate with Luna in everyday language. It's like talking to a
              friend who understands you completely.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
