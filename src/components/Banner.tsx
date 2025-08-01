'use client';

import Image from 'next/image';
import React, { ReactNode } from 'react';

interface BannerProps {
    imageUrl: string;
    children: ReactNode;
    center?: boolean;
}

const Banner: React.FC<BannerProps> = ({ imageUrl, children, center = false }) => {
    return (
        <div className="relative max-w-[1600px]  w-full overflow-hidden md:aspect-[16/7] aspect-square mx-auto">
            <Image
                src={imageUrl}
                alt="Banner Image"
                fill
                className="object-cover max-md:object-fill"
                priority
                quality={100}
            />
            <div className="absolute inset-0 bg-black/30 z-10" />
            <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className={`text-white w-full ${center ? 'text-center' : 'text-left'} max-w-6xl`}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Banner;
