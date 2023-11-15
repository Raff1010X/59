import dynamic from 'next/dynamic';
export const ImageNext = dynamic(() => import('next/image'), { ssr: false });
export const Image = dynamic(() => import('./image'), { ssr: true });

