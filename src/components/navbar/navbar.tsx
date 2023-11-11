'use client'
import style from './navbar.module.css'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import Image from "next/image";
import logo from "@/assets/images/logo.svg"
import Button from '../button/button';
import Arrow from '../arrow/arrow';
import { Burger } from '@/components/burger/burger'
import { useEffect, useRef, useState } from 'react';
import links from '@/data/navbarLinks.json'


type NavbarProps = {
    data: {
        name: string;
        path: string;
        submenus?: {
            name: string;
            path: string;
        }[];
    }[];
}

export default function Navbar() {

    const pathname = usePathname()
    const router = useRouter()
    const divRef = useRef<HTMLDivElement>(null!)

    const [open, setOpen] = useState(false)

    const handleButtonClick = () => {
        setOpen(false)
        router.push('/contact')
    }
    const handleCloseClick = () => {
        setOpen(false)
    }

    useEffect(() => {
        let previousScrollPosition = 0;

        const handleScroll = () => {
            if (window.innerWidth > 960 || open) {
                divRef.current.classList.remove(style.navbarScrolled)
                return;
            }
            if (window.scrollY === 0 || window.scrollY < previousScrollPosition) {
                divRef.current.classList.remove(style.navbarScrolled)
            } else {
                divRef.current.classList.add(style.navbarScrolled)
            }
            previousScrollPosition = window.scrollY;
        }

        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)

    }, [open])

    return (
        <>
            <div className={style.spacer} />
            <nav ref={divRef} className={style.navbar}>
                <div className={style.wrapper}>
                    <Link href="/" className={style.logo}>
                        <Image src={logo} alt="logo" width="133" height="55" priority={false} />
                    </Link>
                    <div className={`${style.menu} ${open ? style.menuOpen : ''}`}>
                        <ul className={style.list}>
                            {links.map((link, index) =>
                                <li key={index} className={style.listItem}>
                                    {!link.submenus
                                        ?
                                        <Link href={link.path}
                                            className={`${style.link} ${pathname === link.path && style.linkActive}`}
                                            onClick={handleCloseClick}>
                                            {link.name}
                                        </Link>
                                        :
                                        <>
                                            <p className={`${style.link} ${pathname === link.path && style.linkActive}`}>
                                                {link.name} {link.submenus && <Arrow className={style.menuarrow} />}
                                            </p>
                                            <ul className={style.sublist}>
                                                {link.submenus.map((submenu, index) =>
                                                    <li key={index} className={style.subitem}>
                                                        <Link href={submenu.path}
                                                            className={`${style.sublink} ${pathname === submenu.path && style.sublinkActive}`}
                                                            onClick={handleCloseClick}>
                                                            <Arrow className={style.subarrow} /> {submenu.name}
                                                        </Link>
                                                    </li>
                                                )}
                                            </ul>
                                        </>
                                    }
                                </li>
                            )}
                        </ul>
                        <Button selected className={style.button} onClick={handleButtonClick}>
                            bezpłatna konsultacja
                            <Arrow className={style.arrow} />
                        </Button>
                    </div>
                    <Burger open={open} setOpen={setOpen} className={style.burger} />
                </div>
            </nav>
        </>
    )
}