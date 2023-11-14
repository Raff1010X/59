"use client"
import style from './container.module.css';
import Line from '@/components/line/line';
import { ImageNextNoSRR } from '@/components/image/imageNoSRR';

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
                    <ImageNextNoSRR src={item.foto} alt={item.name} width={300} height={300} />
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
                    <div className={style.edgeTop} />
                    <div>{item.opinion}</div>
                    <div className={style.edgeBottom} />
                </div>
            </div>
            <Line className={style.line} />
            <div className={style.logo}>
                <ImageNextNoSRR src={item.logo} alt={item.name} width={300} height={300} />
            </div>
        </div>
    )
}