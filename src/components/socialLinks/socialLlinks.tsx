import Link from "next/link";
import style from "./socialLinks.module.css";
import Button from "../button/button";


type SocialLinksProps = {
    className?: string;
};

export default function SocialLinks(props: SocialLinksProps) {
    const { className } = props;

    return (
        <div className={`${style.socialLinks} ${className}`}>
            <p className={style.socialLinksTitle}>odwiedź <br/> nas na:</p>
            <div className={style.wrapper}>
                <Button selected className={style.socialLink}>
                    in
                </Button>
                <Button selected className={style.socialLink}>
                    f
                </Button>
                <Button selected className={style.socialLink}>
                    yt
                </Button>
                <Button selected className={style.socialLink}>
                    Bē
                </Button>
            </div>
        </div>
    )
}
