import style from './loader.module.css';

export default function Loader() {
    return (
        <div className={style.wrapper}>
            <div className={style.loader}>
                <div className={style.circle} />
            </div>
        </div>
    );

}