import Link from "next/link"
import React from "react"
import Image from "next/image"
import { montserrat } from "@/app/fonts"
import styles from "./navbar.module.css"

export default function Navbar() {
  return (
    <nav className={`shadow-sm py-3`}>
      <div className="container max-w-[1300px] mx-auto flex justify-between items-center">
        <div>
          <h1
            className={`${montserrat.className} ${styles.logo} font-bold text-2xl`}
          >
            <span className="">C</span>atify
          </h1>
        </div>
        <ul className="flex items-center space-x-8 text-sm font-medium">
          <li>
            <Link href="#">Home</Link>
          </li>
          <li>
            <Link href="#"> Adopt a pet</Link>
          </li>
          <li>
            <Link href={"/"}> Find a pet</Link>
          </li>
          <li>
            <Link href="#">Support Us</Link>
          </li>
          <li>
            <Link href="#">About Us</Link>
          </li>
          <li>
            <Link href="#">Donate</Link>
          </li>
          <li>
            <Link
              href="#"
              className="bg-black text-white  px-3 py-2 rounded-full flex items-center justify-center transition-opacity hover:opacity-80 ml-5"
            >
              Get Started{" "}
              <span className="ml-2 px-1 py-1 bg-white rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="black"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                  />
                </svg>
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
