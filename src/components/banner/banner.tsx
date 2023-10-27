import Image from "next/image";
import logo from "@/assets/images/logo_sm.svg";

import style from './banner.module.css';

type BannerProps = {
    className?: string;
    backText?: string[];
    frontText?: string[];
};

export default function Banner(props: BannerProps) {
    const { className, backText, frontText } = props;
    return (
        <div className={`${style.wrapper} ${className}`}>

            <div className={`${style.backTexts}`}>
                {backText?.map((text, index) => (
                    <div key={index} className={`${style.backText}`}>{text}</div>
                ))}
            </div>

            <div className={`${style.frontTexts}`}>
                {frontText?.map((text, index) => (
                    <div key={index} className={`${style.frontText}`}>{text}</div>
                ))}
            </div>

            <div className={`${style.logo}`}>
                <Image src={logo} alt="logo" width="200" height="200" priority={false} />
            </div>
        </div>
    )

}