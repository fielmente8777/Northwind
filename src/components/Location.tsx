import Image from 'next/image'
import React from 'react'

const Location = () => {
    return (
        <div className='flex max-md:flex-col gap-2 justify-center items-center bg-[#a52323] py-4 text-white px-5'>
            <Image
                loading="lazy" alt="icon"
                height={14}
                width={14}
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/a05062f11d0a999cff3119b06b706b06d8cf912b0edf38ce7bd123633053ac39?apiKey=4f715c38c9a243509cd636cba1d41f1d&"
                className=" aspect-[0.71] fill-white"
            />
            <p className='max-md:text-center'>L&T Realty Sales Experience Gallery, Near St. Michael&rsquo;s Church, Mori Road,Mahim, Mumbai - 400016</p>


        </div>
    )
}

export default Location