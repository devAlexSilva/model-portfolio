import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <main className='w-full h-full'>
      <div className='flex flex-col gap-20'>
        <Navbar />
        <Hero />
      </div>
    </main>
  )
}
