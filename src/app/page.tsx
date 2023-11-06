"use client"

import style from './page.module.css'

import { useRouter } from 'next/navigation'
import Banner from '@/components/banner/banner'
import Footer from '@/components/footer/footer'
import Video from '@/components/video/video'

import Slideshow from '@/components/slideshow/slideshow'
import BannerNum from '@/components/bannerNum/bannerNum'
import Scrollable from '@/components/scrollable/scrollable'
import BannerText from '@/components/bannerText/bannerText'
import BannerScan from '@/components/bannerScan/bannerScan'


export default function Home() {
  const router = useRouter()

  const handleClick = () => {
    router.push('/about',)
  }


  return (
    <main>
      <Slideshow className={style.slideshow} />

      <Video src="/images/demo.mp4" image='/images/demo.jpeg' />

      <BannerScan header={['Stała współpraca z klientami to okazja do wzajemnego uczenia się, pomagania i rozwoju.']} />

      <BannerNum number={15} step={1} header={['lat istnienia naszej agencji', 'to ocean doświadczeń,', 'które przekuwamy na sukcesy', 'naszych klientów']} />

      <Scrollable direction='left' image='/images/1.jpeg' text='Nawiązywanie nowych kontaktów biznesowych przychodzi Ci z łatwością? Świetnie! Jako new business manager będziesz mógł budować relacje z nowymi kontrahentami.' header='New Business Manager' />

      <Scrollable direction='right' image='/images/2.jpeg' text='Nawiązywanie nowych kontaktów biznesowych przychodzi Ci z łatwością? Świetnie! Jako new business manager będziesz mógł budować relacje z nowymi kontrahentami.' header='New Business Manager' />

      <Scrollable direction='left' image='/images/3.jpeg' text='Nawiązywanie nowych kontaktów biznesowych przychodzi Ci z łatwością? Świetnie! Jako new business manager będziesz mógł budować relacje z nowymi kontrahentami.' header='New Business Manager' />

      <Scrollable direction='right' image='/images/4.jpeg' text='Nawiązywanie nowych kontaktów biznesowych przychodzi Ci z łatwością? Świetnie! Jako new business manager będziesz mógł budować relacje z nowymi kontrahentami.' header='New Business Manager' />

      <BannerText number={3} step={1}
        header={['Profesjonalny wizerunek Twojej marki']}
        text={['Dobrze postrzegany, skuteczny branding to taki, o który stale dbamy. Nad którym pracujemy każdego dnia. Tym właśnie zajmujemy się dla naszych Klientów.']}
      />

      <Scrollable direction='left' image='/images/5.jpeg' text='Nawiązywanie nowych kontaktów biznesowych przychodzi Ci z łatwością? Świetnie! Jako new business manager będziesz mógł budować relacje z nowymi kontrahentami.' header='New Business Manager' />

      <Scrollable direction='right' image='/images/6.jpeg' text='Nawiązywanie nowych kontaktów biznesowych przychodzi Ci z łatwością? Świetnie! Jako new business manager będziesz mógł budować relacje z nowymi kontrahentami.' header='New Business Manager' />

      <Scrollable direction='left' image='/images/7.jpeg' text='Nawiązywanie nowych kontaktów biznesowych przychodzi Ci z łatwością? Świetnie! Jako new business manager będziesz mógł budować relacje z nowymi kontrahentami.' header='New Business Manager' />

      <Scrollable direction='right' image='/images/8.jpeg' text='Nawiązywanie nowych kontaktów biznesowych przychodzi Ci z łatwością? Świetnie! Jako new business manager będziesz mógł budować relacje z nowymi kontrahentami.' header='New Business Manager' />

      <Scrollable direction='left' image='/images/9.jpeg' text='Nawiązywanie nowych kontaktów biznesowych przychodzi Ci z łatwością? Świetnie! Jako new business manager będziesz mógł budować relacje z nowymi kontrahentami.' header='New Business Manager' />




      <BannerNum number={80} step={5} afterNumber="%" header={['naszych klientów', 'zaufało nam na podstawie rekomendacji']} />

      <Banner
        backText={['branding', 'animation', 'web design']}
        frontText={['Cześć! Cenisz dobry visual content, user experience i przyjazny model współpracy?', 'My też! Fajnie, że jesteś ;)']} />
      <Footer />
    </main>
  )
}
