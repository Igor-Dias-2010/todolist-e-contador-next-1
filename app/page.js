"use client"
import Link from "next/link"

export default function Home() {
  return (
    <div className="everthing">
      <h1>To-do list & counter</h1>
      <Link href="/list">To do list</Link>
      <Link href="/counter">Counter</Link>
    </div>
  )
}