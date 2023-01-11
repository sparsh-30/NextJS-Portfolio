import Navbar from './../components/Navbar'
import Hero from './../components/Hero'

export default function Home() {

  return (
    <>
      <div className='bg-[#1a1a1a]'>
        <Navbar />
        <Hero heroTitle="DEVELOPER" />
      </div>
    </>
  );
}
