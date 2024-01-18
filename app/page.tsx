import Hero from '@/components/Hero'

export default function Home() {
  return (
    <main className='w-full h-full'>
      <div className='h-[850px] flex flex-col gap-20'>
        <Hero />
      </div>
    </main>
  )
}
