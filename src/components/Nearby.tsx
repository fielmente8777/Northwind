import React from 'react'

const Nearby = () => {
    return (
        <div className='bg-[#a52323] max-sm:py-10 '>
            <div className='max-width flex flex-grow max-md:flex-col gap-8 justify-center items-center  py-4 text-white px-5'>
                <p className='text-md uppercase'>Nearby:</p>
                <ul className='flex max-sm:flex-col gap-8 items-center list-disc text-md'>
                    <li className='whitespace-nowrap'>BKC- 10 mins</li>
                    <li className='whitespace-nowrap'>Fort- 30 mins</li>
                    <li className='whitespace-nowrap'>Jio World Garden- 8 mins</li>
                    <li className='whitespace-nowrap'>Palladium Mall- 12 mins</li>
                    <li className='whitespace-nowrap'>Nariman Point- 35 mins</li>
                    <li className='whitespace-nowrap'>Taj Lands End- 15 mins</li>
                </ul>
            </div>

        </div>


    )
}

export default Nearby