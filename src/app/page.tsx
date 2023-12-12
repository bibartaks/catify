import IntroVideo from "@/components/IntroVideo/IntroVideo"
import KeyCapabilities from "@/components/KeyCapabilities/KeyCapabilities"
import Landing from "@/components/Landing/Landing"
import Image from "next/image"
import styles from "./global.module.scss"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export default async function Home() {
  const supabase = createServerComponentClient({ cookies })
  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (!session) {
    redirect("/unauthenticated")
  }

  return (
    <>
      <Landing />
      <div className={styles.videoBg}>
        <IntroVideo />
        <KeyCapabilities />
      </div>
    </>
  )
}
