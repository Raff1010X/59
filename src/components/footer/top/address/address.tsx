import style from './address.module.css'
import Image from "next/image";
import logo from "@/assets/images/logo.svg"
import { Address } from 'cluster';
import data from '@/data/footer/address.json'

interface AddressProps {
    className?: string
}

export default function Address(props: AddressProps) {
    const { className } = props

    return <address className={`${style.address} ${className}`}>
        <div className={style.addressTitle}>
            <Image src={logo} alt="logo" width="200" height="55" priority={false} unoptimized />
        </div>
        <div className={style.addressText}>
            {data.name}
        </div>
        <div className={style.addressText}>
            {data.street}
        </div>
        <div className={style.addressText}>
            {data.city + ', ' + data.zip + ', ' + data.state}
        </div>
        <div className={style.addressEmail}>
            <a href='mailto:'>
                {data.email}
            </a>
        </div>
    </address>
}