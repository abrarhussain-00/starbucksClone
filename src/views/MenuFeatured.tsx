import React from 'react'

const MenuFeatured = () => {
    return (
        <div>
            <div >
                <h1 style={{ fontSize: '30px', fontWeight: 'bold' }}>All summer everything</h1>
                {/* Part I */}
                <br />
                <div className="flex flex-col md:flex-row-reverse">
                    <div className="md:w-1/2 bg-white p-4 h-25rem" style={{ backgroundColor: 'rgb(212,233,226)' }}>
                        <div className="flex h-full justify-center items-center">
                            <div>
                                <p className="text-center " style={{ fontSize: '40px', marginBottom: '20px', color: 'darkGreen' }}>For your enjoy-mint</p>
                                <p className="text-center" style={{ fontSize: '25px', color: 'black' }}>Coffee, chocolate and mint flavors unite in the new Chocolate Java Mint Frappuccino® blended beverage.</p>
                                <button style={{ color: 'black', padding: '0.5rem', borderRadius: '10rem', border: '1px solid black', marginTop: '20px' }}>Order now</button>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2 text-white p-4 h-25rem" style={{ backgroundColor: 'rgb(212,233,226)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <div className="flex h-full justify-center items-center">
                            <p className="text-center text-xl font-bold">
                                <img src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-83876.jpg" />
                            </p>
                        </div>
                    </div>
                </div>
                {/* Part II */}
                <br />
                <div className="flex flex-col md:flex-row-reverse">
                    <div className="md:w-1/2 bg-white p-4 h-25rem" style={{ backgroundColor: 'rgb(203,230,120)' }}>
                        <div className="flex h-full justify-center items-center">
                            <div className="flex h-full justify-center items-center">
                                <p className="text-center text-xl font-bold">
                                    <img src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-83877.jpg" />
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2 text-white p-4 h-25rem" style={{ backgroundColor: 'rgb(203, 230, 120)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <div>
                            <p className="text-center " style={{ fontSize: '40px', marginBottom: '20px', color: 'darkGreen' }}>Macadamia just dropped</p>
                            <p className="text-center" style={{ fontSize: '25px', color: 'black' }}>Smooth and lush, the new White Chocolate Macadamia Cream Cold Brew is topped with toasted cookie crumbles.</p>
                            <button style={{ color: 'black', padding: '0.5rem', borderRadius: '10rem', border: '1px solid black', marginTop: '20px' }}>Order now</button>
                        </div>
                    </div>
                </div>
                {/* Part III */}
                <br />
                <div className="flex flex-col md:flex-row-reverse"  >
                    <div className="md:w-1/2 bg-white p-4 h-25rem" style={{ backgroundColor: '#eb81a5' }}>
                        <div className="flex h-full justify-center items-center">
                            <p className="text-center text-xl font-bold">
                                <img src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-83878.jpg" />
                            </p>
                        </div>
                    </div>
                    <div className="md:w-1/2 text-black p-4 h-25rem" style={{ backgroundColor: '#eb81a5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <div className="flex h-full justify-center items-center">
                            <div>
                                <p className="text-center " style={{ fontSize: '30px', marginBottom: '20px' }}>Pineapple Passionfruit Lemonade Starbucks Refreshers® beverage</p>
                                <p className="text-center" style={{ fontSize: '22px' }}>Tropical flavors of pineapple and passionfruit shaken with diced pineapple and refreshing lemonade.</p>
                                <button style={{ color: 'black', padding: '0.5rem', borderRadius: '10rem', border: '1px solid black', marginTop: '20px' }}>Order now</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Part IV */}
                <br />
                <div className="flex flex-col md:flex-row-reverse" >
                    <div className="md:w-1/2 bg-white p-4 h-25rem" style={{ backgroundColor: 'rgb(204,230,121)' }}>
                        <div className="flex h-full justify-center items-center">
                            <p className="text-center text-xl font-bold">
                                <img src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-83881.jpg" />
                            </p>
                        </div>
                    </div>
                    <div className="md:w-1/2 text-white p-4 h-25rem" style={{ backgroundColor: 'rgb(204,230,121)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <div className="flex h-full justify-center items-center">
                            <div>
                                <p className="text-center " style={{ fontSize: '30px', marginBottom: '20px', color: 'black' }}>Bacon, Sausage & Egg Wrap</p>
                                <p className="text-center" style={{ fontSize: '22px', color: 'black' }}>Protein-packed ingredients with Cheddar cheese and potatoes wrapped in a flour tortilla.</p>
                                <button style={{ color: 'black', padding: '0.5rem', borderRadius: '10rem', border: '1px solid black', marginTop: '20px' }}>Order now</button>
                            </div>
                        </div>
                    </div>
                </div> 
                {/* Part V */}
                <br />
                <div className="flex flex-col md:flex-row-reverse">
                    <div className="md:w-1/2 text-white p-4 h-25rem" style={{ backgroundColor: 'rgb(3, 97, 65)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <div className="flex h-full justify-center items-center">
                            <div>
                                <p className="text-center " style={{ fontSize: '30px', marginBottom: '20px' }}>A new blend created by our baristas</p>
                                <p className="text-center" style={{ fontSize: '22px' }}>Introducing Starbucks® Green Apron Blend™, from those who know our coffee best. Enjoy its honeybell orange and graham cracker notes hot or over ice—just like our baristas do.</p>
                                <button style={{ color: 'white', padding: '0.5rem', borderRadius: '10rem', border: '1px solid white', marginTop: '20px' }}>Order now</button>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2 bg-white p-4 h-25rem" style={{ backgroundColor: 'rgb(3, 97, 65)' }}>
                        <div className="flex h-full justify-center items-center">
                            <p className="text-center text-xl font-bold">
                                <img src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-84097.jpg" />
                            </p>
                        </div>
                    </div>
                </div>
                <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
                    <br />
                    <br />
                    <p className="text-sm sm:text-base md:text-sm lg:text-sm xl:text-sm">
                        *NO PURCHASE NECESSARY. Participating stores only. Starbucks Partners (employees) are not eligible to win prizes. Ends 6/18/23.
                        To play and for Official Rules visit starbuckssummergame.com. Entrants can receive a maximum of 2 plays per day, plus, bonus opportunities to earn additional plays.
                        <br />
                        <br />
                        <br />
                        **Fees and taxes still apply. Limit one per customer. Menu limited. See the DoorDash app for availability and restrictions.
                    </p>
                </div>
                <br />
            </div>
        </div>
    )
}

export default MenuFeatured