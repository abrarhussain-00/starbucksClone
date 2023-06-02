import React from 'react';

const Home: React.FC = () => {
  return (
    <div>
      {/* Part I */}
      <br />
      <div className="flex flex-col md:flex-row-reverse">
        <div className="md:w-1/2 bg-white p-4 h-25rem" style={{ backgroundColor: 'rgb(3, 97, 65)'}}>
          <div className="flex h-full justify-center items-center">
            <p className="text-center text-xl font-bold">
              <img src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-84026.jpg" />
            </p>
          </div>
        </div>
        <div className="md:w-1/2 text-white p-4 h-25rem" style={{ backgroundColor: 'rgb(3, 97, 65)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className="flex h-full justify-center items-center">
            <div>
              <p className="text-center " style={{ fontSize: '60px', marginBottom: '20px' }}>Find your adventure</p>
              <p className="text-center" style={{ fontSize: '25px' }}>Starbucks® Summer Game is here! Play for your chance to win—more than 10 million prizes are up for grabs!*</p>
              <button style={{ color: 'white', padding: '0.5rem', borderRadius: '10rem', border: '1px solid white', marginTop: '20px' }}>Play now</button>
            </div>
          </div>
        </div>
      </div>
      {/* Part II */}
      <br />
      <div className="flex flex-col md:flex-row-reverse">
        <div className="md:w-1/2 text-white p-4 h-25rem" style={{ backgroundColor: 'rgb(3, 97, 65)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className="flex h-full justify-center items-center">
            <div>
              <p className="text-center " style={{ fontSize: '60px', marginBottom: '20px' }}>A new blend created by our baristas</p>
              <p className="text-center" style={{ fontSize: '25px' }}>Introducing Starbucks® Green Apron Blend™, from those who know our coffee best. Enjoy its honeybell orange and graham cracker notes hot or over ice—just like our baristas do.</p>
              <button style={{ color: 'white', padding: '0.5rem', borderRadius: '10rem', border: '1px solid white', marginTop: '20px' }}>Order now</button>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 bg-white p-4 h-25rem"  style={{ backgroundColor: 'rgb(3, 97, 65)'}}>
          <div className="flex h-full justify-center items-center">
            <p className="text-center text-xl font-bold">
              <img src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-84097.jpg" />
            </p>
          </div>
        </div>
      </div>
      {/* Part III */}
      <br />
      <div className="flex flex-col md:flex-row-reverse"  >
        <div className="md:w-1/2 bg-white p-4 h-25rem" style={{ backgroundColor: 'rgb(30,56,50)'}}>
          <div className="flex h-full justify-center items-center">
            <p className="text-center text-xl font-bold">
              <img src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-84183.jpg" />
            </p>
          </div>
        </div>
        <div className="md:w-1/2 text-white p-4 h-25rem" style={{ backgroundColor: 'rgb(30,56,50)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className="flex h-full justify-center items-center">
            <div>
              <p className="text-center " style={{ fontSize: '30px', marginBottom: '20px' }}>Delivery, from our place to yours</p>
              <p className="text-center" style={{ fontSize: '22px' }}>Enjoy 20% off Starbucks orders with DoorDash of $15+. Offer valid 6/1-6/14 Monday – Friday, 7 a.m. – 12 p.m. only. Max discount of $5.**</p>
              <button style={{ color: 'white', padding: '0.5rem', borderRadius: '10rem', border: '1px solid white', marginTop: '20px' }}>Order now</button>
            </div>
          </div>
        </div>
      </div>
      {/* Part IV */}
      <br />
      <div className="flex flex-col md:flex-row-reverse">
        <div className="md:w-1/2 text-white p-4 h-25rem" style={{ backgroundColor: 'rgb(235,128,165)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className="flex h-full justify-center items-center">
            <div>
              <p className="text-center " style={{ fontSize: '50px', marginBottom: '20px', color: 'black' }}>Shaken with sunshine</p>
              <p className="text-center" style={{ fontSize: '22px', color: 'black' }}>Try these bright Starbucks Refreshers® beverages: Mango Dragonfruit Lemonade, Pineapple Passionfruit Lemonade and Strawberry Açaí Lemonade.</p>
              <button style={{ color: 'black', padding: '0.5rem', borderRadius: '10rem', border: '1px solid black', marginTop: '20px' }}>Order now</button>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 bg-white p-4 h-25rem" style={{ backgroundColor: 'rgb(235,128,165)'}}>
          <div className="flex h-full justify-center items-center">
            <p className="text-center text-xl font-bold">
              <img src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-84098.jpg" />
            </p>
          </div>
        </div>
      </div>
      {/* Part V */}
      <br />
      <div className="flex flex-col md:flex-row-reverse" >
        <div className="md:w-1/2 bg-white p-4 h-25rem" style={{ backgroundColor: 'rgb(212,232,225)'}}>
          <div className="flex h-full justify-center items-center">
            <p className="text-center text-xl font-bold">
              <img src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-84100.jpg" />
            </p>
          </div>
        </div>
        <div className="md:w-1/2 text-white p-4 h-25rem" style={{ backgroundColor: 'rgb(212,232,225)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className="flex h-full justify-center items-center">
            <div>
              <p className="text-center " style={{ fontSize: '50px', marginBottom: '20px', color: 'black' }}>Gift cards give you more in the app</p>
              <p className="text-center" style={{ fontSize: '22px', color: 'black' }}>It's easy to starting earning your favorites for free. Just join Starbucks Rewards and load your gift cards in the app.</p>
              <button style={{ color: 'black', padding: '0.5rem', borderRadius: '10rem', border: '1px solid black', marginTop: '20px' }}>Order now</button>
            </div>
          </div>
        </div>
      </div>
      {/* Part VI */}
      <br />
      <div className="flex flex-col md:flex-row-reverse">
        <div className="md:w-1/2 text-white p-4 h-25rem" style={{ backgroundColor: 'rgb(240,255,103)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className="flex h-full justify-center items-center">
            <div>
              <p className="text-center " style={{ fontSize: '30px', marginBottom: '20px', color: 'black' }}>Our bold new collection</p>
              <p className="text-center" style={{ fontSize: '15px', color: 'black' }}>This collaboration with artist Tim Singleton is rainbow-bright. His work explores queerness and self-expression and seeks to make a brighter, bolder world.</p>
              <button style={{ color: 'black', padding: '0.5rem', borderRadius: '10rem', border: '1px solid black', marginTop: '20px' }}>Order now</button>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 p-4 h-25rem" style={{ backgroundColor: 'rgb(240,255,103)'}}>
          <div className="flex h-full justify-center items-center">
            <p className="text-center text-xl font-bold">
              <img src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-84159.png" />
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
      <br/>
      <div style={{borderBottom:'3px solid rgb(224,224,224)'}}></div>
    </div>
  );
};

export default Home;
