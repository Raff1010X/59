import style from './address.module.css'
import Image from "next/image";
import logo from "@/assets/images/logo.svg"

export default function Address() {
    return <div className={`${style.adress}`}>
        <div className={`${style.adressTitle}`}>
            <Image src={logo} alt="logo" width="200" height="55" priority={false} />
        </div>
        <div className={`${style.adressText}`}>
            Webdev s.c.
        </div>
        <div className={`${style.adressText}`}>
            1234 Street Adress City
        </div>
        <div className={`${style.adressText}`}>
            State 00000
        </div>
        <div className={`${style.adressEmail}`}>
            <a href='mailto:'>
                webdev@webdev.priv.pl
            </a>
        </div>
    </div>
}