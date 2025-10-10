"use client"

import { useState } from "react"
import Link from "next/link"
export default function Counter() {
    const [count, setCount] = useState(0)
    return (
        <div className="counter">
            <nav>
                <Link href="/">Home</Link>
            </nav>
            <h1>Counter</h1>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>+1</button>
            <button onClick={() => setCount(0)}>Reset</button>
            <button onClick={() => setCount(count - 1)}>-1</button>
        </div>
    )
}