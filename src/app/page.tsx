import style from './page.module.css'

import Banner from '@/components/banner/banner'
import Video from '@/components/video/video'
import Slideshow from '@/components/slideshow/slideshow'
import slideshowData from '@/data/slideShow.json'

import Chat from '@/components/chat/chat'


export default function Home() {

  return (
    <main className={style.main}>

      <Slideshow
        data={slideshowData}
      />

      <Banner
        backText={['branding', 'animation', 'web design']}
        frontText={['Cześć! Cenisz dobry visual content, user experience i przyjazny model współpracy?', 'My też! Fajnie, że jesteś ;)']}
      />

      <Video
        src="/videos/demo.mp4"
        image='/images/video/demo.jpeg'
      />

      {/* 
      Wybrane projekty
      BLOG
       */}

      <Chat className={style.chat}
        header={['porozmawiajmy', 'o Twoim projekcie']}
        text={['Potrzebujesz doradztwa ekspertów od digital marketingu?']}
        button='bezpłatna konsultacja'
        linkTo='/contact'
      />

    </main>
  )
}
