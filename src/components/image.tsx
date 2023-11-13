import dynamic from 'next/dynamic';
export const ImageNoSRR = dynamic(() => import('next/image'), { ssr: false });