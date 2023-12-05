
import style from '@/components/footer/top/top.module.css'
import SocialLinks from "@/components/socialLinks/socialLlinks"
import data from '@/data/footer/socialLinks.json'
import NavLinks from './navLinks/navLinks';
import Address from './address/address';

export default function Top() {
    return <div className={`container_medium ${style.top}`}>
        <Address className={style.address} />
        <NavLinks className={style.navLinks} />
        <SocialLinks data={data} className={style.socialLinks} />
    </div>
}