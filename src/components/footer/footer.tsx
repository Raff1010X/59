
import style from './footer.module.css';
import Line from '@/components/line/line';
import Bottom from '@/components/footer/bottom/bottom';
import Top from '@/components/footer/top/top';

export default function Footer() {
    return (
        <footer className={style.footer}>
            <Line />
            <Top />
            <Line />
            <Bottom />
        </footer>
    )
}
