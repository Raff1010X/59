

import style from './slider.module.css';

interface sliderProps {
    className?: string;
    data: {
        id: number;
        name: string;
        role: string;
        foto: string;
        logo: string;
        opinion: string;
    }[];
    selected: number;
}

export default function Slider(props: sliderProps) {
    const { className, data, selected } = props;

    return (
        <div className={`${style.wrapper} ${className}`}>
            {data.map((item, index) => {
                return (
                    <div
                        key={item.id}
                        className={`${style.slide} ${selected > index ? style.selectedLeft : selected < index ? style.selectedRight : style.selectedMiddle}`}
                    >
                        <div className={style.header}>
                            {item.id}
                            <div className={style.foto}>
                                <img src={item.foto} alt={item.name} />
                            </div>
                            <div className={style.name}>
                                {item.name}
                            </div>
                            <div className={style.role}>
                                {item.role}
                            </div>
                        </div>
                        <div className={style.content}>
                            <div className={style.quote}>"</div>
                            <div className={style.opinion}>
                                {item.opinion}
                            </div>
                        </div>
                        <div className={style.logo}>
                            <img src={item.logo} alt={item.name} />
                        </div>
                    </div>
                );
            })}
        </div>
    );
}