import Link from "next/link"
import style from "./navLinks.module.css"
import links from "@/data/footer/navLinks.json"
interface NavLinksProps {
    className?: string
}

export default function NavLinks(props: NavLinksProps) {
    const { className } = props

    return  <div className={`${style.navLinks} ${className && className}`}>
    {links.map((link) => {
        return (
            <Link href={link.path} key={link.name} className={style.navLink}>
                {link.name}
            </Link>
        )
    })}
</div>
}