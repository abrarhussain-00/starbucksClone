import React from 'react'

const FavoriteItem = () => {
    return (
        <div className='py-5'>
            <div className='bg-green-400 w-full'>
                <h2 className='font-soDo font-semibold text-[28px]'>Get your favorites for free</h2>
                <div className='flex justify-center items-end'>
                    <button className='py-2 mr-4'>25 <span className='text-#cba258'>★</span></button>
                    <button className='py-2 mr-4'>100 <span className='text-#cba258'>★</span></button>
                    <button className='py-2 mr-4'>200 <span className='text-#cba258'>★</span></button>
                    <button className='py-2 mr-4'>300 <span className='text-#cba258'>★</span></button>
                    <button className='py-2'>400 <span className='text-#cba258'>★</span></button>
                </div>
            </div>

        </div>
    )
}

export default FavoriteItem
