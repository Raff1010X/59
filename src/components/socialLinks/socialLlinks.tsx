import style from "./socialLinks.module.css";
import Button from "../button/button";


type SocialLinksProps = {
    className?: string;
    data: {
        name: string;
        icon: string;
        path: string;
    }[];
};

export default function SocialLinks(props: SocialLinksProps) {
    const { className, data } = props;

    return (
        <div className={`${style.socialLinks} ${className}`}>
            <p className={style.socialLinksTitle}>odwiedź <br /> nas na:</p>
            <div className={style.wrapper}>
                {data.map((link) => {
                    return (
                        <a href={link.path} key={link.name} >
                            <Button key={link.name} selected className={style.socialLink}>
                                {link.icon}
                            </Button>
                        </a>
                    )
                }
                )}
            </div>
        </div>
    )
}
