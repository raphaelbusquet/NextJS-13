import Link from "next/link"

export default function Home() {
  return (
    <div>
      <h1 className="text-teal-600 text-3xl text-bold">Trying NextJS 13</h1>
      <Link href="/about">About</Link>
      <br />
      <Link href="/login">Login</Link>
    </div>
  )
}
