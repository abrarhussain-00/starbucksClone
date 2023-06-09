import React from 'react'

const Checkout = () => {
  return (
    <div className='flex justify-end sticky right-0' style={{ marginRight: '2rem', marginTop: '-3rem' }}>
      <a
        href='https://donate.stripe.com/8wM6spcPI21M8OkdQR'
        className='relative bg-[rgb(1,117,74)] text-white p-3'
        style={{ borderRadius: '10rem' }}
      >
        Add to Order
      </a>
    </div>
  )
}

export default Checkout