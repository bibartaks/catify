import React from "react"
import { createClient } from "@supabase/supabase-js"
import Image from "next/image"

export default async function Feed() {
  const supabase = createClient(
    `${process.env.NEXT_PUBLIC_SUPABASE_URL}`,
    `${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`
  )

  let { data: feed, error } = await supabase.from("feed").select("*")
  console.log(feed, error)
  return (
    <div>
      <div className="max-w-[1050px] mx-auto mt-10">
        {feed?.map(item => (
          <>
            <div>
              <p>{item.author}</p>
            </div>
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            <Image src={item.image} width={500} height={500} alt="as" />
            <p>Like: {item.likes}</p>
          </>
        ))}
      </div>
    </div>
  )
}
