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
        <div className="relative max-w-[1600px] max-h-[800px] w-full h-[40vh] mx-auto lg:h-screen">
            <Image
                src={imageUrl}
                alt="Banner Image"
                fill
                className="object-contain max-md:object-fill"
                priority
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
