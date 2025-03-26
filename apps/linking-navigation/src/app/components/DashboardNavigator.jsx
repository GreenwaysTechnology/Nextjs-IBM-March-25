'use client'
import { useRouter } from "next/navigation"

export default function DashboardNavigator() {
    const router = useRouter()
    return <>
        <h1>This is Dashboard</h1>
        <button onClick={() => {
             router.push('/')
        }}>Home</button>
    </>
}