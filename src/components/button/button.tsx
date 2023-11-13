import style from './button.module.css'

type ButtonProps = {
    selected?: boolean;
    className?: string;
    children?: React.ReactNode;
    onClick?: () => void;
    styles?: React.CSSProperties;
}

export default function Button(props: ButtonProps) {
    const { selected, className, children, onClick, styles } = props
    return (
        <div
            className={`${style.wrapper} ${className}`}
            style={styles}
            onClick={onClick}
        >
            <button 
            aria-label='button'
            type='button' 
            className={`${style.button} ${selected && style.selected}`}>
                {children}
            </button>
        </div>
    )
}