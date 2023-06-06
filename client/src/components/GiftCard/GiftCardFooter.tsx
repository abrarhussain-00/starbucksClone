import React from 'react'

const GiftCardFooter = () => {
    return (
        <div className="flex flex-col items-center justify-center py-[4rem] md:flex md:flex-row md:justify-start bg-gray-100  mt-10 md:pl-10">
            <img
                src="https://www.starbucks.com/weblx/images/gift/bulk-gift-cards.jpg"
                alt="bulk gift cards"
                width={375}
            />
            <div className="flex flex-col mt-4 md:items-start md:pl-20 ">
                <h2 className="font-semibold text-2xl text-left">Gift cards in bulk</h2>
                <p className="text-start mt-2 text-lg">
                    There's an easier way to buy Starbucks
                    <br />
                    Cards in bulk! Give a Starbucks Card to
                    <br />
                    gift, reward, incentivize, or show
                    <br />
                    appreciation towards your customers,
                    <br />
                    clients and team members.
                </p>
            </div>
        </div>
    )
}

export default GiftCardFooter
