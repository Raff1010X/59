import BannerNum from "@/components/bannerNum/bannerNum";
import BannerScan from "@/components/bannerScan/bannerScan";
import BannerText from "@/components/bannerText/bannerText";
import Scrollable from "@/components/scrollable/scrollable";

export default function Career() {
    return (
        <div>
            <h1>CareerPage</h1>

            <BannerScan
                header={['Stała współpraca z klientami to okazja do wzajemnego uczenia się, pomagania i rozwoju.']}
            />

            <BannerNum
                number={15}
                step={1}
                header={['lat istnienia naszej agencji', 'to ocean doświadczeń,', 'które przekuwamy na sukcesy', 'naszych klientów']}
            />

            <Scrollable
                direction='left'
                image='/images/scrollable/1.jpeg'
                text='Nawiązywanie nowych kontaktów biznesowych przychodzi Ci z łatwością? Świetnie! Jako new business manager będziesz mógł budować relacje z nowymi kontrahentami.'
                header='New Business Manager'
            />

            <Scrollable
                direction='right'
                image='/images/scrollable/2.jpeg'
                text='Nawiązywanie nowych kontaktów biznesowych przychodzi Ci z łatwością? Świetnie! Jako new business manager będziesz mógł budować relacje z nowymi kontrahentami.'
                header='New Business Manager'
            />

            <Scrollable
                direction='left'
                image='/images/scrollable/3.jpeg'
                text='Nawiązywanie nowych kontaktów biznesowych przychodzi Ci z łatwością? Świetnie! Jako new business manager będziesz mógł budować relacje z nowymi kontrahentami.'
                header='New Business Manager'
            />

            <Scrollable
                direction='right'
                image='/images/scrollable/4.jpeg'
                text='Nawiązywanie nowych kontaktów biznesowych przychodzi Ci z łatwością? Świetnie! Jako new business manager będziesz mógł budować relacje z nowymi kontrahentami.'
                header='New Business Manager'
            />

            <BannerText number={3} step={1}
                header={['Profesjonalny wizerunek Twojej marki']}
                text={['Dobrze postrzegany, skuteczny branding to taki, o który stale dbamy. Nad którym pracujemy każdego dnia. Tym właśnie zajmujemy się dla naszych Klientów.']}
            />

            <Scrollable
                direction='left'
                image='/images/scrollable/5.jpeg'
                text='Nawiązywanie nowych kontaktów biznesowych przychodzi Ci z łatwością? Świetnie! Jako new business manager będziesz mógł budować relacje z nowymi kontrahentami.'
                header='New Business Manager'
            />

            <Scrollable
                direction='right'
                image='/images/scrollable/6.jpeg'
                text='Nawiązywanie nowych kontaktów biznesowych przychodzi Ci z łatwością? Świetnie! Jako new business manager będziesz mógł budować relacje z nowymi kontrahentami.'
                header='New Business Manager'
            />

            <Scrollable
                direction='left'
                image='/images/scrollable/7.jpeg'
                text='Nawiązywanie nowych kontaktów biznesowych przychodzi Ci z łatwością? Świetnie! Jako new business manager będziesz mógł budować relacje z nowymi kontrahentami.'
                header='New Business Manager'
            />

            <Scrollable
                direction='right'
                image='/images/scrollable/8.jpeg'
                text='Nawiązywanie nowych kontaktów biznesowych przychodzi Ci z łatwością? Świetnie! Jako new business manager będziesz mógł budować relacje z nowymi kontrahentami.'
                header='New Business Manager'
            />

            <Scrollable
                direction='left'
                image='/images/scrollable/9.jpeg'
                text='Nawiązywanie nowych kontaktów biznesowych przychodzi Ci z łatwością? Świetnie! Jako new business manager będziesz mógł budować relacje z nowymi kontrahentami.'
                header='New Business Manager'
            />
        </div>
    )
}