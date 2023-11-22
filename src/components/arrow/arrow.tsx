import style from './arrow.module.css'

interface ArrowProps {
    className?: string;
}

export default function Arrow(props: ArrowProps) {
    const { className } = props
    return (
        <svg
            width="55"
            height="55"
            viewBox="0 0 55 55"
            className={`${style.svg} ${className}`}
        >
            <path
                className={`${style.arrow}`}
                d="m 22.799818,9.5848722 -9.492363,8.9687498 9.492363,8.970703 -9.492363,8.970704 9.492363,8.96875 L 41.788425,27.524325 22.799818,9.5848722"
            />
        </svg>
    );
}