import dynamic from 'next/dynamic';
export const Image = dynamic(() => import('./image'), { ssr: false });
export const ImageNextNoSRR = dynamic(() => import('next/image'), { ssr: false });
// export const ImageNextNoSRR = dynamic(() => import('./image'), { ssr: true });
