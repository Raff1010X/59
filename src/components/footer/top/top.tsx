
import style from '@/components/footer/top/top.module.css'
import SocialLinks from "@/components/socialLinks/socialLlinks"
import NavLinks from './navLinks/navLinks';
import Address from './address/address';

export default function Top() {
    return <div className={style.top}>
        <Address className={style.address} />
        <NavLinks className={style.navLinks} />
        <SocialLinks className={style.socialLinks} />
    </div>
}