import React from 'react'
import MenuNav from '../../../components/Menu/MenuNav';
import MenuSideNav from '../../../components/Menu/MenuSideNav';

const ViaInstant = () => {
    return (
        <div>
            <MenuNav />
            <br /><br />
            <div className="flex">
                <MenuSideNav />
                <div>
                    <p className='text-start'><a href="/menu">Menu / </a><span className='font-bold' style={{ color: 'gray' }}>Hot Breakfast</span></p>
                    <br />
                    <p className='font-bold text-start text-[30px]'>VIA® Instant</p>
                    <br /><br />
                    {/* Breakfast Sandwiches & Wraps */}
                    <div>
                        <p className='font-bold text-start text-[24px]'>Breakfast Sandwiches & Wraps</p>
                        <hr style={{ height: '1px', background: 'gray', width: '100%' }} />
                        <br /><br />
                        <div className="text-center flex">
                            <a href="#" className="items-center">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtsmYCKDgr-f-yqPSYJDr3c5K-omrhCy0VFrfEgpk5hA&s" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Caffè Americano</span>
                                <div className='font-bold'>🚫 Not available</div>
                            </a>
                        </div>
                    </div>
                    <br /><br />
                    {/* Brewed Coffees */}
                    <div>
                        <p className='font-bold text-start text-[24px]'>Brewed Coffees</p>
                        <hr style={{ height: '1px', background: 'gray', width: '100%' }} />
                        <br /><br />
                        <div className="text-center gap-10 grid grid-cols-4 ">
                            <a href="#" className="items-center">
                                <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAFwAXAMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAAAQMEBQIGB//EADkQAAEDAwEEBwQJBQEAAAAAAAEAAgMEBREhEjFRcQYTIjRBYYEUMpGxI0JSYnKSocHRQ4Kz0tMV/8QAGAEAAwEBAAAAAAAAAAAAAAAAAAECBAP/xAAgEQEBAAIABgMAAAAAAAAAAAAAAQIRAxIhMTJREyJB/9oADAMBAAIRAxEAPwD5whCE2UIQmwGQ4jBeR9kZQCQpBBKf6bvUYR1L/u/nH8oCNC7MTwcYzpnQ5QYZWt2nRSBvEsOEBwhCEAIQhACno6Z1TI5rdzRtO1wcZA0+KgVu1w+0VXUieOFzxhpk3OORpzQcm62LZWtg247PZ4qucadZIwkM9d+fUDyUdfT32QSS3DMDCB2HSEMGfLJXNPdprZI+iqpZrdJjEbZaYuac657Oc+oXMtkvNY4SDpPRmRzcinqqkwP9GkAY5JW3XR2nDn7WayCTTbqC0HxaxxA+CsNtFK9glkubjo4loiGTjhl3j4LPrzebfP1FS4uf4GOQPB5EKua68kd3ncNdRCf4XLfEdfh4Xttw2emc4GKvfoRoY2nBIGM9ricehXr47m1lqdE6qPVtw0vc3jkbtT5L5tHUXZwOKCXHiTG4Y3cV6VplhgEsUNRTAayPkdE1oHEdvXkQnvMfFhO1VLhY7s2Z2Xe0kO2dHHaHiPeA0wq01FIwyNdC6KSJoL2O4cf1W+2+0Qp5IZqwz7UbGObD2XEAYxntZznd5qx0jdFLaGODxCGMDGRE4DgN2zr2uKqX25Xh66x41CEK3AKCsJbDkHBDhqp1Xr+7nmEqvDyi/b+l9wpXx+0xQVzIyCzr2Avjx9l28KWuufRm5Oc+pt1wpHuJLvZ6jLHHzDiceg8V5hPKls5Y25bP0VmINH0hngJPu1NETjm5uMfDCwq6hjp59inrIathAIkja8fEOAwUsoymXLEIgOd7eeCtmjislM9prevrcglxjzGGnyGhJ5kLMyjKByx6CO+0VE0C12lsbhn6SaZzicjhn91FDU1/SC9RMlla+aVx2WueGMbhpJ944AwOKxQVPRd5Z6/JKDKfWvYx9F6t7ntFXQueGFzY2SlznY88Y465WI8Fji1wIcDgg+Csuc6O1w1UZxLS1RDT5ObtAcssdp948V1dohHWuEWjPq650Gg+SqsWuimq9cM0zuY+asKCt7s/0+aDw8oykFBSO5S3OcoQkgjCEkIDsKxQd5b6/JVgrVv7yORTic/Gt0jNnl4e1xf45f5U1STI2ne7GXU8Z+LQoJHhtoY0b31Lz+Vjf+is3oiCWnjP1YGj4Ej9lTJLpnKGr7s/kplDV92k/CgY+UZKRSJSUN2yKSZK5KEmmFymgOlbt2tT/aVTyr1mx7YPoXTHZ7MYz2jkb8a45fonE5361vPh6w0FLoAQHOI+1I7/AEEZU3SXP/szxnA6nZjI34IAz+uVo2ygioA689IasQyNJkipGj6SZ/gMfVHL3QPDGF56oqn1dRLU1D9uaZ7pJHcXE5J+JV1jcqKq7tL+AqVR1Pd5fwH5JHO7DQhChtJJMpIATSQgGtKx3Ootc8stIWiR8Rj2nDOyCQcjz08crNUsG88k4nLsvT1M1RKZZ5XSSHe5xyVwJPNRBNNw0//Z" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Green Apron Blend™</span>
                                <div className='font-bold'>🚫 Not available</div>
                            </a>
                            <a href="#" className="items-center">
                                <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAFwAXAMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAAAQMEBQIGB//EADkQAAEDAwEEBwQJBQEAAAAAAAEAAgMEBREhEjFRcQYTIjRBYYEUMpGxI0JSYnKSocHRQ4Kz0tMV/8QAGAEAAwEBAAAAAAAAAAAAAAAAAAECBAP/xAAgEQEBAAIABgMAAAAAAAAAAAAAAQIRAxIhMTJREyJB/9oADAMBAAIRAxEAPwD5whCE2UIQmwGQ4jBeR9kZQCQpBBKf6bvUYR1L/u/nH8oCNC7MTwcYzpnQ5QYZWt2nRSBvEsOEBwhCEAIQhACno6Z1TI5rdzRtO1wcZA0+KgVu1w+0VXUieOFzxhpk3OORpzQcm62LZWtg247PZ4qucadZIwkM9d+fUDyUdfT32QSS3DMDCB2HSEMGfLJXNPdprZI+iqpZrdJjEbZaYuac657Oc+oXMtkvNY4SDpPRmRzcinqqkwP9GkAY5JW3XR2nDn7WayCTTbqC0HxaxxA+CsNtFK9glkubjo4loiGTjhl3j4LPrzebfP1FS4uf4GOQPB5EKua68kd3ncNdRCf4XLfEdfh4Xttw2emc4GKvfoRoY2nBIGM9ricehXr47m1lqdE6qPVtw0vc3jkbtT5L5tHUXZwOKCXHiTG4Y3cV6VplhgEsUNRTAayPkdE1oHEdvXkQnvMfFhO1VLhY7s2Z2Xe0kO2dHHaHiPeA0wq01FIwyNdC6KSJoL2O4cf1W+2+0Qp5IZqwz7UbGObD2XEAYxntZznd5qx0jdFLaGODxCGMDGRE4DgN2zr2uKqX25Xh66x41CEK3AKCsJbDkHBDhqp1Xr+7nmEqvDyi/b+l9wpXx+0xQVzIyCzr2Avjx9l28KWuufRm5Oc+pt1wpHuJLvZ6jLHHzDiceg8V5hPKls5Y25bP0VmINH0hngJPu1NETjm5uMfDCwq6hjp59inrIathAIkja8fEOAwUsoymXLEIgOd7eeCtmjislM9prevrcglxjzGGnyGhJ5kLMyjKByx6CO+0VE0C12lsbhn6SaZzicjhn91FDU1/SC9RMlla+aVx2WueGMbhpJ944AwOKxQVPRd5Z6/JKDKfWvYx9F6t7ntFXQueGFzY2SlznY88Y465WI8Fji1wIcDgg+Csuc6O1w1UZxLS1RDT5ObtAcssdp948V1dohHWuEWjPq650Gg+SqsWuimq9cM0zuY+asKCt7s/0+aDw8oykFBSO5S3OcoQkgjCEkIDsKxQd5b6/JVgrVv7yORTic/Gt0jNnl4e1xf45f5U1STI2ne7GXU8Z+LQoJHhtoY0b31Lz+Vjf+is3oiCWnjP1YGj4Ej9lTJLpnKGr7s/kplDV92k/CgY+UZKRSJSUN2yKSZK5KEmmFymgOlbt2tT/aVTyr1mx7YPoXTHZ7MYz2jkb8a45fonE5361vPh6w0FLoAQHOI+1I7/AEEZU3SXP/szxnA6nZjI34IAz+uVo2ygioA689IasQyNJkipGj6SZ/gMfVHL3QPDGF56oqn1dRLU1D9uaZ7pJHcXE5J+JV1jcqKq7tL+AqVR1Pd5fwH5JHO7DQhChtJJMpIATSQgGtKx3Ootc8stIWiR8Rj2nDOyCQcjz08crNUsG88k4nLsvT1M1RKZZ5XSSHe5xyVwJPNRBNNw0//Z" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Featured <br /> Medium Roast <br /> PikePlace® Roast</span>
                                <div className='font-bold'>🚫 Not available</div>
                            </a>
                            <a href="#" className="items-center">
                                <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAFwAXAMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAAAQMEBQIGB//EADkQAAEDAwEEBwQJBQEAAAAAAAEAAgMEBREhEjFRcQYTIjRBYYEUMpGxI0JSYnKSocHRQ4Kz0tMV/8QAGAEAAwEBAAAAAAAAAAAAAAAAAAECBAP/xAAgEQEBAAIABgMAAAAAAAAAAAAAAQIRAxIhMTJREyJB/9oADAMBAAIRAxEAPwD5whCE2UIQmwGQ4jBeR9kZQCQpBBKf6bvUYR1L/u/nH8oCNC7MTwcYzpnQ5QYZWt2nRSBvEsOEBwhCEAIQhACno6Z1TI5rdzRtO1wcZA0+KgVu1w+0VXUieOFzxhpk3OORpzQcm62LZWtg247PZ4qucadZIwkM9d+fUDyUdfT32QSS3DMDCB2HSEMGfLJXNPdprZI+iqpZrdJjEbZaYuac657Oc+oXMtkvNY4SDpPRmRzcinqqkwP9GkAY5JW3XR2nDn7WayCTTbqC0HxaxxA+CsNtFK9glkubjo4loiGTjhl3j4LPrzebfP1FS4uf4GOQPB5EKua68kd3ncNdRCf4XLfEdfh4Xttw2emc4GKvfoRoY2nBIGM9ricehXr47m1lqdE6qPVtw0vc3jkbtT5L5tHUXZwOKCXHiTG4Y3cV6VplhgEsUNRTAayPkdE1oHEdvXkQnvMfFhO1VLhY7s2Z2Xe0kO2dHHaHiPeA0wq01FIwyNdC6KSJoL2O4cf1W+2+0Qp5IZqwz7UbGObD2XEAYxntZznd5qx0jdFLaGODxCGMDGRE4DgN2zr2uKqX25Xh66x41CEK3AKCsJbDkHBDhqp1Xr+7nmEqvDyi/b+l9wpXx+0xQVzIyCzr2Avjx9l28KWuufRm5Oc+pt1wpHuJLvZ6jLHHzDiceg8V5hPKls5Y25bP0VmINH0hngJPu1NETjm5uMfDCwq6hjp59inrIathAIkja8fEOAwUsoymXLEIgOd7eeCtmjislM9prevrcglxjzGGnyGhJ5kLMyjKByx6CO+0VE0C12lsbhn6SaZzicjhn91FDU1/SC9RMlla+aVx2WueGMbhpJ944AwOKxQVPRd5Z6/JKDKfWvYx9F6t7ntFXQueGFzY2SlznY88Y465WI8Fji1wIcDgg+Csuc6O1w1UZxLS1RDT5ObtAcssdp948V1dohHWuEWjPq650Gg+SqsWuimq9cM0zuY+asKCt7s/0+aDw8oykFBSO5S3OcoQkgjCEkIDsKxQd5b6/JVgrVv7yORTic/Gt0jNnl4e1xf45f5U1STI2ne7GXU8Z+LQoJHhtoY0b31Lz+Vjf+is3oiCWnjP1YGj4Ej9lTJLpnKGr7s/kplDV92k/CgY+UZKRSJSUN2yKSZK5KEmmFymgOlbt2tT/aVTyr1mx7YPoXTHZ7MYz2jkb8a45fonE5361vPh6w0FLoAQHOI+1I7/AEEZU3SXP/szxnA6nZjI34IAz+uVo2ygioA689IasQyNJkipGj6SZ/gMfVHL3QPDGF56oqn1dRLU1D9uaZ7pJHcXE5J+JV1jcqKq7tL+AqVR1Pd5fwH5JHO7DQhChtJJMpIATSQgGtKx3Ootc8stIWiR8Rj2nDOyCQcjz08crNUsG88k4nLsvT1M1RKZZ5XSSHe5xyVwJPNRBNNw0//Z" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Featured <br /> Starbucks® Dark <br /> Roast Coffee</span>
                                <div className='font-bold'>🚫 Not available</div>
                            </a>
                            <a href="#" className="items-center">
                                <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAFwAXAMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAAAQMEBQIGB//EADkQAAEDAwEEBwQJBQEAAAAAAAEAAgMEBREhEjFRcQYTIjRBYYEUMpGxI0JSYnKSocHRQ4Kz0tMV/8QAGAEAAwEBAAAAAAAAAAAAAAAAAAECBAP/xAAgEQEBAAIABgMAAAAAAAAAAAAAAQIRAxIhMTJREyJB/9oADAMBAAIRAxEAPwD5whCE2UIQmwGQ4jBeR9kZQCQpBBKf6bvUYR1L/u/nH8oCNC7MTwcYzpnQ5QYZWt2nRSBvEsOEBwhCEAIQhACno6Z1TI5rdzRtO1wcZA0+KgVu1w+0VXUieOFzxhpk3OORpzQcm62LZWtg247PZ4qucadZIwkM9d+fUDyUdfT32QSS3DMDCB2HSEMGfLJXNPdprZI+iqpZrdJjEbZaYuac657Oc+oXMtkvNY4SDpPRmRzcinqqkwP9GkAY5JW3XR2nDn7WayCTTbqC0HxaxxA+CsNtFK9glkubjo4loiGTjhl3j4LPrzebfP1FS4uf4GOQPB5EKua68kd3ncNdRCf4XLfEdfh4Xttw2emc4GKvfoRoY2nBIGM9ricehXr47m1lqdE6qPVtw0vc3jkbtT5L5tHUXZwOKCXHiTG4Y3cV6VplhgEsUNRTAayPkdE1oHEdvXkQnvMfFhO1VLhY7s2Z2Xe0kO2dHHaHiPeA0wq01FIwyNdC6KSJoL2O4cf1W+2+0Qp5IZqwz7UbGObD2XEAYxntZznd5qx0jdFLaGODxCGMDGRE4DgN2zr2uKqX25Xh66x41CEK3AKCsJbDkHBDhqp1Xr+7nmEqvDyi/b+l9wpXx+0xQVzIyCzr2Avjx9l28KWuufRm5Oc+pt1wpHuJLvZ6jLHHzDiceg8V5hPKls5Y25bP0VmINH0hngJPu1NETjm5uMfDCwq6hjp59inrIathAIkja8fEOAwUsoymXLEIgOd7eeCtmjislM9prevrcglxjzGGnyGhJ5kLMyjKByx6CO+0VE0C12lsbhn6SaZzicjhn91FDU1/SC9RMlla+aVx2WueGMbhpJ944AwOKxQVPRd5Z6/JKDKfWvYx9F6t7ntFXQueGFzY2SlznY88Y465WI8Fji1wIcDgg+Csuc6O1w1UZxLS1RDT5ObtAcssdp948V1dohHWuEWjPq650Gg+SqsWuimq9cM0zuY+asKCt7s/0+aDw8oykFBSO5S3OcoQkgjCEkIDsKxQd5b6/JVgrVv7yORTic/Gt0jNnl4e1xf45f5U1STI2ne7GXU8Z+LQoJHhtoY0b31Lz+Vjf+is3oiCWnjP1YGj4Ej9lTJLpnKGr7s/kplDV92k/CgY+UZKRSJSUN2yKSZK5KEmmFymgOlbt2tT/aVTyr1mx7YPoXTHZ7MYz2jkb8a45fonE5361vPh6w0FLoAQHOI+1I7/AEEZU3SXP/szxnA6nZjI34IAz+uVo2ygioA689IasQyNJkipGj6SZ/gMfVHL3QPDGF56oqn1dRLU1D9uaZ7pJHcXE5J+JV1jcqKq7tL+AqVR1Pd5fwH5JHO7DQhChtJJMpIATSQgGtKx3Ootc8stIWiR8Rj2nDOyCQcjz08crNUsG88k4nLsvT1M1RKZZ5XSSHe5xyVwJPNRBNNw0//Z" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Decaf Pike Place®<br /> Roast </span>
                                <div className='font-bold'>🚫 Not available</div>
                            </a>
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/d668acbc691b47249548a3eeac449916.jpg?impolicy=1by1_wide_topcrop_630" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Caffè Misto</span>
                                <div className='font-bold'>🚫 Not available</div>
                            </a>
                        </div>
                    </div>
                    <br /><br />
                    {/* Americanos */}
                    <div>
                        <p className='font-bold text-start text-[24px]'>Cappuccinos</p>
                        <hr style={{ height: '1px', background: 'gray', width: '100%' }} />
                        <br /><br />
                        <div className="text-center flex">
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/5c515339667943ce84dc56effdf5fc1b.jpg?impolicy=1by1_wide_topcrop_630" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Cappuccinos</span>
                                <div className='font-bold'>🚫 Not available</div>
                            </a>
                        </div>
                    </div>
                    <br /><br />
                    {/* Expresso Shots */}
                    <div>
                        <p className='font-bold text-start text-[24px]'>Expresso Shots</p>
                        <hr style={{ height: '1px', background: 'gray', width: '100%' }} />
                        <br /><br />
                        <div className="text-center gap-10 grid grid-cols-4 ">
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/ec519dd5642c41629194192cce582135.jpg?impolicy=1by1_wide_topcrop_630" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Expresso</span>
                                <div className='font-bold'>🚫 Not available</div>
                            </a>
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/e9330b18ae524e69bdcbe97460d6f5bb.jpg?impolicy=1by1_wide_topcrop_630" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Expresso Con Panna</span>
                                <div className='font-bold'>🚫 Not available</div>
                            </a>
                        </div>
                    </div>
                    <br /><br />
                    {/* Flat Whites */}
                    <div>
                        <p className='font-bold text-start text-[24px]'>Flat White</p>
                        <hr style={{ height: '1px', background: 'gray', width: '100%' }} />
                        <br /><br />
                        <div className="text-center gap-10 grid grid-cols-4 ">
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/77801559b72b469583f4d484adc1bfa7.jpg?impolicy=1by1_wide_topcrop_630" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Flat White</span>
                                <div className='font-bold'>🚫 Not available</div>
                            </a>
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/77801559b72b469583f4d484adc1bfa7.jpg?impolicy=1by1_wide_topcrop_630" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Honey <br /> Almondmilk Flat</span>
                                <div className='font-bold'>🚫 Not available</div>
                            </a>
                        </div>
                    </div>
                    <br /><br />
                    {/* Lattes */}
                    <div>
                        <p className='font-bold text-start text-[24px]'>Lattes</p>
                        <hr style={{ height: '1px', background: 'gray', width: '100%' }} />
                        <br /><br />
                        <div className="text-center gap-10 grid grid-cols-4 ">
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/f4fd128c834643fa8c74f4ae9f579013.jpg?impolicy=1by1_wide_topcrop_630" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Caffè Latte</span>
                                <div className='font-bold'>🚫 Not available</div>
                            </a>
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/284e1571faa748f2889d0b566b71d578.jpg?impolicy=1by1_wide_topcrop_630" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Cinnamon Dolce <br /> Latte</span>
                                <div className='font-bold'>🚫 Not available</div>
                            </a>
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/b635f407bbcd49e7b8dd9119ce33f76e.jpg?impolicy=1by1_wide_topcrop_630" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Starbucks® <br /> Blonde Vanilla <br /> Latte</span>
                                <div className='font-bold'>🚫 Not available</div>
                            </a>
                        </div>
                    </div>
                    <br /><br />
                    {/* Macchiatoes */}
                    <div>
                        <p className='font-bold text-start text-[24px]'>Macchiatoes</p>
                        <hr style={{ height: '1px', background: 'gray', width: '100%' }} />
                        <br /><br />
                        <div className="text-center gap-10 grid grid-cols-4 ">
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/630461ac0c2548cba7e2ab6482bc6477.jpg?impolicy=1by1_wide_topcrop_630" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Caramel Macchiato</span>
                            </a>
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/26495f2a8b644fe8960dd74e1891b7b7.jpg?impolicy=1by1_wide_topcrop_630" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Expresso <br /> Macchiato</span>
                                <div className='font-bold'>🚫 Not available</div>
                            </a>
                        </div>
                    </div>
                    {/* Mochas */}
                    <div>
                        <p className='font-bold text-start text-[24px]'>Mochas</p>
                        <hr style={{ height: '1px', background: 'gray', width: '100%' }} />
                        <br /><br />
                        <div className="text-center gap-10 grid grid-cols-4 ">
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/915736da018842e788147f7eab73db73.jpg?impolicy=1by1_wide_topcrop_630" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Caffè Mocha</span>
                                <div className='font-bold'>🚫 Not available</div>
                            </a>
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/3eab25199e994b689fa5c047fc31f217.jpg?impolicy=1by1_wide_topcrop_630" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>White Chocolate <br /> Mocha</span>
                                <div className='font-bold'>🚫 Not available</div>
                            </a>
                        </div>
                    </div>
                    <br /><br />
                    {/* Coffee Travelers */}
                    <div>
                        <p className='font-bold text-start text-[24px]'>Coffee Travelers</p>
                        <hr style={{ height: '1px', background: 'gray', width: '100%' }} />
                        <br /><br />
                        <div className="text-center gap-10 grid grid-cols-4 ">
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/9d5739c00da14ea8acc0497989b08016.jpg?impolicy=1by1_wide_topcrop_630" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Coffee Traveler - <br/> Veranda Blend®</span>
                                <div className='font-bold'>🚫 Not available</div>
                            </a>
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/9d5739c00da14ea8acc0497989b08016.jpg?impolicy=1by1_wide_topcrop_630" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Coffee Traveler - <br/> Dark Roast</span>
                                <div className='font-bold'>🚫 Not available</div>
                            </a>
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/9d5739c00da14ea8acc0497989b08016.jpg?impolicy=1by1_wide_topcrop_630" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Coffee Traveler - <br /> Pike Place® Roast </span>
                                <div className='font-bold'>🚫 Not available</div>
                            </a>
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/9d5739c00da14ea8acc0497989b08016.jpg?impolicy=1by1_wide_topcrop_630" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Coffee Traveler - <br /> Decaf Pike Place®<br />  Roast </span>
                                <div className='font-bold'>🚫 Not available</div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <br />
        </div>
    );
}

export default ViaInstant