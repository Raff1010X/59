"use client"

import style from './page.module.css'

import { useRouter } from 'next/navigation'
import Banner from '@/components/banner/banner'
import Footer from '@/components/footer/footer'
import Video from '@/components/video/video'

import image from "@/assets/images/video1.jpg";
import Slideshow from '@/components/slideshow/slideshow'

export default function Home() {
  const router = useRouter()

  const handleClick = () => {
    router.push('/about',)
  }



  return (
    <main>
      <Slideshow className={style.slideshow} />
      
      


      <Video src="https://www.webidea.pl/media/reel_demo_low.mp4" image={image}/>

      <Banner
        backText={['branding', 'animation', 'web design']}
        frontText={['Cześć! Cenisz dobry visual content, user experience i przyjazny model współpracy?','My też! Fajnie, że jesteś ;)']} />
      <Footer />
    </main>
  )
}
