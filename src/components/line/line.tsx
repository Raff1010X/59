import style from './line.module.css';

interface LineProps {
    className?: string;
}

export default function Line(props: LineProps) {
    const { className } = props;
    return (
        <div className={`${style.line} ${className}`}>
        </div>
    )
}