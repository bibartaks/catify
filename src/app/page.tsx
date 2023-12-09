import IntroVideo from "@/components/IntroVideo/IntroVideo"
import KeyCapabilities from "@/components/KeyCapabilities/KeyCapabilities"
import Landing from "@/components/Landing/Landing"
import Image from "next/image"

export default function Home() {
  return (
    <>
      <Landing />
      <IntroVideo />
      <KeyCapabilities />
    </>
  )
}
