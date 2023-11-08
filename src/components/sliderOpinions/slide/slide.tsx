import Container from './container/container';

import style from './slide.module.css';

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

export default function Slide(props: sliderProps) {
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
                            width === 100 && index === selected + 1 ? {
                                transform: `translateX(200%) rotateY(90deg) scale(0.5)`,
                                width: `${width}%`,
                                opacity: 0,
                            } :
                                {
                                    width: `${width}%`,
                                }
                        }
                    >
                        <Container item={item} />
                    </div>
                );
            })}
        </div>
    );
}