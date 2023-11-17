
import base64blured from '@/assets/images/blurred/images.json'
import style from './clientsLogos.module.css'
import Image from '../image/image';

interface ClientsLogosProps {
    className?: string;
}


export default function ClientsLogos(props: ClientsLogosProps) {
    const { className } = props;

    const clientsLogosPaths = base64blured.map((image) => {
        // return if image.path includes 'clients-logos'
        console.log(image.path.includes('logos'))
            return '/images' + image.path.replace(/\\/g, '/')
    });

    console.log(clientsLogosPaths);

    return (
        <div className={`${style.wrapper} ${className}`}>
            {clientsLogosPaths.map((image, index) => (
                <Image
                    key={index}
                    src={image}
                    alt='logo'
                    className={style.image}
                    width={300}
                />
            ))}

        </div>
    )
}
