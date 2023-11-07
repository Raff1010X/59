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
    width?: number;
}

export default function Slider(props: sliderProps) {
    const { className, data, selected, width } = props;

    return (
        <div className={`${style.wrapper} ${className}`}>
            {data.map((item, index) => {
                return (
                    <div
                        key={item.id}
                        className={`${style.slide} ${index === selected ? style.selectedLeft :
                            index === selected + 1 ? style.selectedRight :
                                index === selected - 1 ? style.left :
                                    index === selected + 2 ? style.right :
                                        index > selected ? style.deselectedRight :
                                            style.deselectedLeft
                            }`}
                        style={
                            width === 99.75 && index === selected + 1 ? {
                                transform: `translateX(200%) rotateY(90deg) scale(0.5)`,
                                width: `${width}%`,
                                opacity: 0,
                            } :
                                {
                                    width: `${width}%`,
                                }
                        }
                    >
                        <div className={style.container}>
                            {item.id}
                            {/* <div className={style.header}>
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
                            <div className={style.quote}>&quot;</div>
                            <div className={style.opinion}>
                                {item.opinion}
                            </div>
                        </div>
                        <div className={style.logo}>
                            <img src={item.logo} alt={item.name} />
                        </div> */}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}