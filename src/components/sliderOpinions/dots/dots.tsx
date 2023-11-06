import style from './dots.module.css';

interface DotsProps {
    className?: string;
    numberOfDots: number;
    selected: number;
    setSelected: (id: number) => void;
}

export default function Dots (props: DotsProps) {
    const { className, numberOfDots, selected, setSelected } = props;

    const dots = [];

    for (let i = 0; i < numberOfDots; i++) {
        dots.push(
            <div
                key={i}
                className={`${style.dot} ${selected === i ? style.selected : ''}`}
                onClick={() => setSelected(i)}
            />
        );
    }

    return (
        <div className={`${style.dots} ${className}`}>
            {dots}
        </div>
    );
}
