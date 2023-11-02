"use client"

import style from './page.module.css'

import { useRouter } from 'next/navigation'
import Banner from '@/components/banner/banner'
import Footer from '@/components/footer/footer'
import Video from '@/components/video/video'

import image from "@/assets/images/video1.jpg";
import Slideshow from '@/components/slideshow/slideshow'
import BannerNum from '@/components/bannerNum/bannerNum'
import Scrollable from '@/components/scrollable/scrollable'


export default function Home() {
  const router = useRouter()

  const handleClick = () => {
    router.push('/about',)
  }


  return (
    <main>
      <Slideshow className={style.slideshow} />
      
      <Video src="https://www.webidea.pl/media/reel_demo_low.mp4" image={image}/>

      <BannerNum step={1} number={15} frontText={['lat istnienia naszej agencji', 'to ocean doświadczeń,', 'które przekuwamy na sukcesy', 'naszych klientów']} />
      
      <Scrollable direction='left' image='/images/sb2.jpg' text='Nawiązywanie nowych kontaktów biznesowych przychodzi Ci z łatwością? Świetnie! Jako new business manager będziesz mógł budować relacje z nowymi kontrahentami.' header='New Business Manager'/>
      
      <Scrollable direction='right' image='/images/sb2.jpg' text='Nawiązywanie nowych kontaktów biznesowych przychodzi Ci z łatwością? Świetnie! Jako new business manager będziesz mógł budować relacje z nowymi kontrahentami.' header='New Business Manager'/>

      <BannerNum step={5} afterText="%" number={80} frontText={['naszych klientów', 'zaufało nam na podstawie rekomendacji']} />

      <Banner
        backText={['branding', 'animation', 'web design']}
        frontText={['Cześć! Cenisz dobry visual content, user experience i przyjazny model współpracy?','My też! Fajnie, że jesteś ;)']} />
      <Footer />
    </main>
  )
}
