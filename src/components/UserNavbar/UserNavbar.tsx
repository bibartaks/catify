import Link from "next/link"
import React from "react"
import Image from "next/image"
import { montserrat } from "@/app/fonts"
import styles from "./navbar.module.css"

export default function UserNavbar() {
  return (
    <nav className={`shadow-sm py-4`}>
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
            <Link href="#"> Feed</Link>
          </li>
          <li>
            <Link href="#">Adopt</Link>
          </li>
          <li>
            <Link href="#">My account</Link>
          </li>
          <li>
            <Link href="#">Log out</Link>
          </li>
          <li>
            <Link href="#">Donate</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
