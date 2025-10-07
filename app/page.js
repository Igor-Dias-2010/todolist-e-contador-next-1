"use client"
import Link from "next/link"

export default function Home() {
  return (
    <div>
      <h1>To do list e contador</h1>
      <Link href="/list">To do list</Link>
      <Link href="/counter">Counter</Link>
    </div>
  )
}