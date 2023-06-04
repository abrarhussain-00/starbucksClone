import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
const RewardsNav = () => {
    const [onMove, setOnMove] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;
            if (scrollTop > 60) {
                setOnMove(true);
            } else {
                setOnMove(false);
            }
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.addEventListener('scroll', handleScroll);
        }
    }, [])
return (
    <nav className={`bg-[#1e3932] w-full h-[50px] ${onMove ? 'sticky top-0 z-50' : ''}`}>
        <div className='flex justify-between items-center w-full h-full'>
            <h6 className='text-uppercase font-bold text-white text-[14px] p-4 text-transform uppercase lg:p-[99px] sm:p-4'>Starbucks® Rewards</h6>
            {/* Need to add a link for button */}
            <button className='font-light text-white rounded-[50px] mr-4 lg:hidden xl:hidden' style={{ padding: '7px 16px', border: '1px solid white' }}><Link to="">Join in the app</Link></button>
        </div>
    </nav>
)
}

export default RewardsNav;
