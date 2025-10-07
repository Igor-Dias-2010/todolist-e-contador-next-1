"use client"

import { useState } from "react"
import Link from "next/link"
export default function Counter() {
    return (
        <div>
            <nav><Link href="/" /></nav>
            <h1>Contador</h1>
            <p>0</p>
            <button>+1</button>
            <button>Reset</button>
            <button>-1</button>
        </div>
    )
}