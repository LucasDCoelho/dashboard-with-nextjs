import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <Link href={"/posts"}>Post</Link>
    </main>
  )
}
