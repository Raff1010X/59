import style from './address.module.css'
import Image from "next/image";
import logo from "@/assets/images/logo.svg"
import { Address } from 'cluster';

interface AddressProps {
    className?: string
}

export default function Address(props: AddressProps) {
    const { className } = props

    return <address className={`${style.address} ${className}`}>
        <div className={style.addressTitle}>
            <Image src={logo} alt="logo" width="200" height="55" priority={false} />
        </div>
        <div className={style.addressText}>
            Webdev s.c.
        </div>
        <div className={style.addressText}>
            1234 Street Address City
        </div>
        <div className={style.addressText}>
            State 00000
        </div>
        <div className={style.addressEmail}>
            <a href='mailto:'>
                webdev@webdev.priv.pl
            </a>
        </div>
    </address>
}