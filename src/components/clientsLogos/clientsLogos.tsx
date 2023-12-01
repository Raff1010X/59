
import base64blured from '@/assets/images/blurred/images.json'
import style from './clientsLogos.module.css'
import Image from '../image/image';

interface ClientsLogosProps {
    className?: string;
}


export default function ClientsLogos(props: ClientsLogosProps) {
    const { className } = props;

    let clientsLogosPaths = base64blured.reduce<string[]>((acc, curr) => {
        curr.path.includes('clients-logos') &&
            acc.push('/images' + curr.path.replace(/\\/g, '/'));
        return acc;
    }, []);

    return (
        <div className={`${style.wrapper} ${className && className}`}>
            {clientsLogosPaths.map((image, index) => (
                <Image
                    className={style.image}
                    key={index}
                    src={image}
                    alt='logo'
                    width={300}
                />
            ))}

        </div>
    )
}
