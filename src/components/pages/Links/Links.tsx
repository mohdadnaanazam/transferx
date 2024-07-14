'use client'

import { db } from "@/offline/db.model"
import { useLiveQuery } from "dexie-react-hooks"

export const Links = () => {
  const links = useLiveQuery(() => db.links.toArray())

  console.log(links, 'hello there ...')
  return (
    <></>
  )
}