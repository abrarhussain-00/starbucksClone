import React from 'react';

const GotGiftCard = () => {
    return (
        <div style={{ backgroundColor: 'rgb(212, 233, 226)', height: '5rem' }}>
            <div className="flex justify-center items-center h-full">
                <div className="flex px-4 md:px-24">
                    <span className="font-bold">Got a gift card?</span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <p>Earns 2★ per $1</p>
                </div>
                <div>
                    <button className="border border-black text-black px-2 py-1 md:px-4 md:py-2 h-6 md:h-8 ml-2 rounded-full">
                        Add or reload
                    </button>
                    <button className="bg-black text-white px-2 py-1 md:px-4 md:py-2 h-6 md:h-8 ml-2 rounded-full">
                        Check balance
                    </button>
                </div>
                <p className="hidden md:block ml-auto" style={{ marginRight: '2rem' }}>
                    Card Terms & Conditions
                </p>
            </div>
        </div>
    );
};

export default GotGiftCard;
