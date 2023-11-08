import Image from 'next/image';
import style from './container.module.css';
import Line from '@/components/footer/line/line';

interface ContainerProps {
    className?: string;
    item: {
        id: number;
        name: string;
        role: string;
        foto: string;
        logo: string;
        opinion: string;
    };
}

export default function Container(props: ContainerProps) {
    const { className, item } = props;

    return (
        <div className={`${style.wrapper} ${className}`}>
            <div className={style.header}>
                <div className={style.foto}>
                    <Image src={item.foto} alt={item.name} width={100} height={100} />
                </div>
                <div className={style.person}>
                    <div className={style.name}>
                        {item.name}
                    </div>
                    <div className={style.role}>
                        {item.role}
                    </div>
                </div>
            </div>
            <div className={style.content}>
                <div className={style.quote}>&quot;</div>
                <div className={style.opinion}>
                    {item.opinion}
                </div>
            </div>
            <Line className={style.line} />
            <div className={style.logo}>
                <Image src={item.logo} alt={item.name} width={100} height={100} />
            </div>
        </div>
    )
}