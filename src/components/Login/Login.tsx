"use client"

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"

import { redirect, useRouter } from "next/navigation"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import styles from "./login.module.scss"
import { montserrat } from "@/app/fonts"

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()
  const supabase = createClientComponentClient()

  const handleSignUp = async () => {
    await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${location.origin}/auth/callback`,
      },
    })
    router.refresh()
  }

  const handleSignIn = async () => {
    await supabase.auth.signInWithPassword({
      email,
      password,
    })
    router.refresh()
  }

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.refresh()
  }

  return (
    <>
      <div className="max-w-[1050px] mx-auto">
        <div className={styles.bgGradient}></div>
        <div className="max-w-[500px] mx-auto border flex flex-col px-7 py-14 mt-[10rem] rounded-lg bg-white shadow-2xl border-gray-300">
          <h1
            className={`${montserrat.className} ${styles.title} text-2xl font-bold mb-8`}
          >
            Catify
          </h1>
          <label htmlFor="email" className="text-sm mb-1   ">
            {" "}
            Email address
          </label>
          <input
            name="email"
            onChange={e => setEmail(e.target.value)}
            value={email}
            placeholder=""
            className="px-2 py-2 border border-gray-200 rounded-md mb-4"
          />
          <label htmlFor="password" className="text-sm mb-1">
            Your Password
          </label>
          <input
            type="password"
            name="password"
            onChange={e => setPassword(e.target.value)}
            value={password}
            placeholder=""
            className="px-2 py-2 border border-gray-200 rounded-md mb-4"
          />
          <button
            className="py-3 bg-blue-700 text-white text-sm mb-10 hover:bg-blue-800 transition rounded-md"
            onClick={handleSignUp}
          >
            Sign Up
          </button>
          <hr />
          {/* Social Icons */}
          <div className="mt-8 grid grid-cols-3 items-center gap-x-5 mb-8">
            <div className="border rounded-md border-gray-200  bg-gray-50 cursor-pointer hover:bg-gray-100">
              <Image
                src="/google.jpg"
                alt="google icon"
                width={25}
                height={25}
                className="block mx-auto py-2"
              />
            </div>
            <div className="border rounded-md border-gray-200  bg-gray-50 cursor-pointer hover:bg-gray-100">
              <Image
                src="/facebook.png"
                alt="google icon"
                width={25}
                height={25}
                className="block mx-auto py-2"
              />
            </div>
            <div className="border rounded-md border-gray-200  bg-gray-50 cursor-pointer hover:bg-gray-100">
              <Image
                src="/twitter.png"
                alt="google icon"
                width={25}
                height={25}
                className="block mx-auto py-3"
              />
            </div>
          </div>
          <Link
            href="#"
            className="text-sm text-center text-gray-500 underline mb-3"
          >
            Forgot your password?
          </Link>
          <Link
            href="#"
            className="text-sm text-center text-gray-500 underline"
          >
            Don't have an account? Sign up
          </Link>
        </div>
      </div>
      {/* <input
        name="email"
        onChange={e => setEmail(e.target.value)}
        value={email}
      />
      <input
        type="password"
        name="password"
        onChange={e => setPassword(e.target.value)}
        value={password}
      />
      <button onClick={handleSignUp}>Sign up</button>
      <button onClick={handleSignIn}>Sign in</button>
      <button onClick={handleSignOut}>Sign out</button> */}
    </>
  )
}
