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
        <div className="grid grid-cols-3 gap-x-10 py-5">
          <div className="border pb-5 ">
            <Image
              src="/natural-language.png"
              width={300}
              height={200}
              alt="lol"
              className="w-[100%]"
            />
            <h1 className="text-[1.3rem] font-semibold mb-0 px-2 pt-1">
              Adoption cat in a second
            </h1>
            <p className="px-2 pt-2 leading-[170%]">
              Communicate with Luna in everyday language. It's like talking to a
              friend who understands you completely.
            </p>
          </div>
          <div className="border pb-5 ">
            <Image
              src="/natural-language.png"
              width={300}
              height={200}
              alt="lol"
              className="w-[100%]"
            />
            <h1 className="text-[1.3rem] font-semibold mb-0 px-2 pt-1">
              Adoption cat in a second
            </h1>
            <p className="px-2 pt-2 leading-[170%]">
              Communicate with Luna in everyday language. It's like talking to a
              friend who understands you completely.
            </p>
          </div>
          <div className="border pb-5 ">
            <Image
              src="/natural-language.png"
              width={300}
              height={200}
              alt="lol"
              className="w-[100%]"
            />
            <h1 className="text-[1.3rem] font-semibold mb-0 px-2 pt-1">
              Adoption cat in a second
            </h1>
            <p className="px-2 pt-2 leading-[170%]">
              Communicate with Luna in everyday language. It's like talking to a
              friend who understands you completely.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
