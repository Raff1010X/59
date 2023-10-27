
import Link from 'next/link'
import style from './bottom.module.css'

export default function Bottom() {
    return <div className={`${style.bottom}`}>

    <div className={`${style.cookies}`}>
        <Link href='/cookies' className={`${style.link}`}>
            cookie policy
        </Link>
    </div>

    <div className={`${style.copyright}`}>
        © 2003 — 2023 by webdev
    </div>

</div>
}