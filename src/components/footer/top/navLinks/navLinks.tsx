import Link from "next/link"
import style from "./navLinks.module.css"

export const links = [
    {
        name: 'web design',
        path: '/services/webdesign'
    },
    {
        name: '3d & animation',
        path: '/services/animation'
    },
    {
        name: 'branding',
        path: '/services/branding'
    },
    {
        name: 'marketing developera',
        path: '/services/marketing'
    },
    {
        name: 'realizacje',
        path: '/projects'
    },
    {
        name: 'nasi klienci',
        path: '/clients'
    },
    {
        name: 'o nas',
        path: '/about'
    },
    {
        name: 'praca',
        path: '/career'
    },
    {
        name: 'kontakt',
        path: '/contact'
    },
]

export default function NavLinks() {
    return  <div className={`${style.navLinks}`}>
    {links.map((link) => {
        return (
            <Link href={link.path} key={link.name} className={`${style.navLink}`}>
                {link.name}
            </Link>
        )
    })}
</div>
}