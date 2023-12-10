import IntroVideo from "@/components/IntroVideo/IntroVideo"
import KeyCapabilities from "@/components/KeyCapabilities/KeyCapabilities"
import Landing from "@/components/Landing/Landing"
import Image from "next/image"
import styles from "./global.module.scss"

export default function Home() {
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
