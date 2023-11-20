import SliderOpinions from '@/components/sliderOpinions/sliderOpinions'
import sliderOpinionsData from '@/data/sliderOpinions.json'
import Chat from '@/components/chat/chat'
import ClientsLogos from '@/components/clientsLogos/clientsLogos'

import style from './page.module.css'
import BannerNum from '@/components/bannerNum/bannerNum'


export default function Clients() {
    return (
        <main className={style.main}>

            <h1 className={style.header}>
                nasi klienci chętnie
                <br />
                współpracują z nami, ponieważ
                <br />
                zapewniamy im długofalowe
                <br />
                wsparcie i rozwój
            </h1>

            <SliderOpinions
                data={sliderOpinionsData}
                title='Referencje'
            />

            <BannerNum
                number={80}
                step={5}
                afterNumber="%"
                header={['naszych klientów', 'zaufało nam na podstawie rekomendacji']}
            />

            <ClientsLogos />

            <Chat className={style.chat}
                header={['porozmawiajmy', 'o Twoim projekcie']}
                text={['Potrzebujesz doradztwa ekspertów od digital marketingu?']}
                button='bezpłatna konsultacja'
                linkTo='/contact'
            />

        </main>
    )
}