"use client"

import { useState } from "react"
import Link from "next/link"
export default function List() {
    const [task, setTask] = useState([])
    const [input, setInput] = useState("")

    function add() {
        if (input.trim() === "") return alert("Please, fill in this field")
        setTask([...task, input])
        setInput("")
    }
    function refresh() {
        setTask([])
    }
    return (
        <div className="list">
            <nav>
                <Link href="/">Home</Link>
            </nav>
            <h1>To do list</h1>
            <div>
                <input type="text" placeholder="New task" value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => {
                    if (e.key === "Enter") add()
                }} />
                <button onClick={add}>Add</button>
                <button onClick={refresh}>Delete all</button>
            </div>

            <ul>
                {task.map((task, i) => (
                    <li key={i}>{task}</li>
                ))}
            </ul>
        </div>
    )
}