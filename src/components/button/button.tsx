import style from './button.module.css'

type ButtonProps = {
    selected?: boolean;
    className?: string;
    children?: React.ReactNode;
    onClick?: () => void;
}

export default function Button(props: ButtonProps) {
    const { selected, className, children, onClick } = props
    return (
        <div className={`${style.wrapper} ${className}`} onClick={onClick}>
            <button className={`${style.button} ${selected && style.selected}`}>
                {children}
            </button>
        </div>
    )
}