// not used in the project
"use client"
import Image from '@/components/image/image';
import React, { useState } from 'react';

type Position = {
    top: number;
    left: number;
    width: number;
    height: number;
    aspectRatio: number;
  };
  
  const generateRandomPositions = (numImages: number, minSize: number, maxSize: number): Position[] => {
    const positions: Position[] = [];
    while (positions.length < numImages) {
      const width = minSize + Math.random() * (maxSize - minSize);
      const aspectRatio = 0.5 + Math.random(); // aspect ratio between 0.5 and 1.5
      const height = width * aspectRatio;
      const left = Math.random() * (100 - width); // ensure the image doesn't go beyond the right edge
      const top = Math.random() * (100 - height); // ensure the image doesn't go beyond the bottom edge
  
      if (!positions.some(pos => 
        (pos.left < left + width) && (pos.left + pos.width > left) && 
        (pos.top < top + height) && (pos.top + pos.height > top))) {
        positions.push({ top, left, width, height, aspectRatio });
      }
    }
    return positions;
  };

interface ImagesProps {
    media: string[];
}

const Images = (props: ImagesProps) => {
    const { media } = props;

    const imageSize = 100 / media.length; 

    const positions = React.useMemo(() => generateRandomPositions(media.length, imageSize, imageSize * 2), [imageSize, media.length]);
    const [zoomedImageIndex, setZoomedImageIndex] = useState<number | null>(null);

    const handleClick = (index: number) => {
        if (zoomedImageIndex === index) {
            setZoomedImageIndex(null);
        } else {
            setZoomedImageIndex(index);
        }
    };

    return (
        <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
            {positions.map((pos, index: React.Key | null | undefined) => (
                <Image
                    key={index}
                    src={media[index as number]}
                    alt={`Random ${index}`}
                    style={{
                        position: 'absolute',
                        top: zoomedImageIndex === index ? '0' : `${pos.top}vh`,
                        left: zoomedImageIndex === index ? '0' : `${pos.left}%`,
                        width: zoomedImageIndex === index ? '100%' : `${pos.width}%`,
                        height: zoomedImageIndex === index ? '100vh' : 'auto',
                        zIndex: zoomedImageIndex === index ? 1 : 0,
                        transition: 'all 0.5s ease',
                    }}
                    onResize={() => handleClick(index as number)}
                />
            ))}
        </div>
    );
};

export default Images;