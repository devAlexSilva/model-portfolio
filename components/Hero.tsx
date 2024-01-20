import HeroContent from "./HeroContent"

const Hero = () => {
  return (
    <section className="relative flex flex-col h-full w-full">
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-310px] left-0 z-10 w-full h-full object-cover"
        >
          <source type="video/webm" src="/blackhole.webm"/>
      </video>
      <HeroContent />
    </section>
  )
}

export default Hero