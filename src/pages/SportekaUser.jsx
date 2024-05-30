import { useState } from "react";
import Footer from "../components/footer";
function SportekaUser () {
    const [nav, setNav] = useState(false);
    const showNav = ()  => {
       setNav(!nav)
    }
    return (
        <>
            <div className="fixed w-full z-[1000] p-[5px] py-2 bg-[#020126] font-[cursive] text-white shadow-sm shadow-gray-400">
                <nav className="flex justify-between items-center my-[10px] mr-[3rem] ml-[2rem] h-10 pb-13 sm:mx-5 lg:mr-[2rem] lg:ml-[2rem]">
                    <div className="flex justify-between items-center w-[100%] sm:w-[100%] md:w-[100%] lg:w-[20%]">
                        <div className="">
                            <a href="/"><img className="w-36" src="/Images/Component 6.png" alt=""/></a>
                        </div>
                        <div className="w-0 sm:w-7 md:w-8 lg:w-0" onClick={showNav}>
                            {!nav ? <img className="cursor-pointer" src="/Images/menu-w.png" alt=""/> : <img className="cursor-pointer" src="/Images/close-w.png" alt=""/>}
                        </div>
                    </div>
                    <ul className="flex justify-end items-center text-[16px] space-x-5 text-white sm:hidden md:hidden lg:flex">
                        <li className="text-center text-md font-bold"><a className='pr-3' href="/home">Players</a></li>
                        <li className="text-center text-md font-bold"><a className='pr-3' href="/">Clubs</a></li>
                        <li className="text-center text-md font-bold"><a className='pr-3' href="/">Listing</a></li>
                        <li className="text-center text-md font-bold"><a className='pr-3' href="'">Trade</a></li>
                        <li className="text-center text-md font-bold"><a className='pr-3' href="/">Tradebot</a></li>
                        <li className="text-center text-md font-bold"><a className='pr-3' href="/">Tradebet</a></li>
                        <li className="text-center text-md font-bold"><a className='pr-3' href="/">Wallet</a></li>
                        <li className="text-center text-md font-bold"><a className='pr-3' href="/">Earn</a></li>
                        <img className="w-[5%]" src="/Images/Ellipse 11.png" alt="" />
                        
                    </ul>
                    <div className={!nav ? 'fixed left-[-100%]' : 'fixed z-[1000] left-0 top-0 w-[40%] text-white mt-[76px] h-full bg-[#020126] shadow-md ease-in-out duration-500 sm:w-[80%] md:w-[40%] lg:hidden'}>
                        <ul className="w-full p-12 space-y-6  font-serif">
                            <li className="text-left text-md font-bold"><a className='pr-3' onClick={showNav} href="/home">Players</a></li>
                            <li className="text-left text-md font-bold"><a className='pr-3' onClick={showNav} href="/">Listing</a></li>
                            <li className="text-left text-md font-bold"><a className='pr-3' onClick={showNav} href="/clubs">Clubs</a></li>
                            <li className="text-left text-md font-bold"><a className='pr-3' onClick={showNav} href="/">Trade</a></li>
                            <li className="text-left text-md font-bold"><a className='pr-3' onClick={showNav} href="/">Earn</a></li>
                        <li className="text-left text-md font-bold"><a className='pr-3' onClick={showNav} href="/">Tradebet</a></li>
                            <li className="text-elft text-md font-bold"><a className='pr-3' onClick={showNav}  href="/login">Log In</a></li>
                            <button className="text-center text-md bg-[#0F0F0F] text-[16px] text-white py-[6px] px-[22px] rounded-lg"><a className='' onClick={showNav}  href="/signUp">Sign up</a></button>
                        </ul>
                    </div>  
                </nav>
            </div>
            <section className="h font-[cursive] ">
                <div className="pt-[150px] px-[90px] pb-[100px] flex justify-center items-center flex-col">
                    <h1 className="font-bold text-white text-[60px] sm:text-[50px] lg:text-[60px]">SPORTEKA</h1>
                    <p className="font-bold text-white text-[35px] w-[40%] text-center sm:text-[30px] sm:w-[90%]">YOUR SPORT BLOCKCHAIN</p>
                </div>
            </section>
            <section>
                <div className='ml-[90px] mt-[50px] mr-[50px] sm:ml-[10px] sm:mr-[10px] lg:ml-[90px] lg:mr-[50px]'>
                    <h1 className='font-bold text-[19px] mb-[20px]'>Club Market Today</h1>
                    <div className='border px-[20px] py-[30px]'>
                        <div className="grid grid-cols-3 mb-[30px]">
                            <h2 className="font-bold text-[20px] sm:text-[15px] lg:text-[20px]">24 Amount</h2>
                            <h2 className="font-bold text-[20px] sm:text-[15px] lg:text-[20px]">Top Gainers</h2>
                            <h2 className="font-bold text-[20px] sm:text-[15px] lg:text-[20px]">Top Losers</h2>
                        </div>
                        <div className='grid grid-cols-5 gap-2 mt-[10px] text-[17px] sm:text-[13px] lg:text-[17px]'>
                            <h2 className='text-[#7D7A7A]'>Club</h2>
                            <h2 className='text-[#7D7A7A]'>Price</h2>
                            <h2 className='text-[#7D7A7A]'>24th trading (v)</h2>
                            <h2 className='text-[#7D7A7A]'>($)</h2>
                            <h2 className='text-[#7D7A7A]'>24th change</h2>
                        </div>
                        <div className='grid grid-cols-5 gap-6 mt-[20px]'>
                            <div className='flex justify-start items-center'>
                                <img className='w-[20%] mr-[2px]' src="/Images/Manchester City's original logo is free to download_ 1.png" alt="" />
                                <p className='text-[19px] font-normal sm:text-[15px] lg:text-[20px]'>Man/spr</p>
                            </div>
                            <p className='text-[20px] font-medium mt-[10px] sm:text-[15px] lg:text-[20px]'>34.901spr</p>
                            <p className='text-[20px] font-medium mt-[10px] sm:text-[15px] lg:text-[20px]'>246M</p>
                            <p className='text-[20px] font-medium mt-[10px] sm:text-[15px] lg:text-[20px]'>$7.51</p>
                            <p className='text-[20px] font-medium text-[#0CBD08] mt-[10px] sm:text-[15px] lg:text-[20px]'>+86.15</p>  
                        </div>
                        <div className='grid grid-cols-5 gap-6 mt-[20px]'>
                            <div className='flex justify-start items-center'>
                                <img className='w-[20%] mr-[5px]' src="/Images/FC Bayern Munich 3.png" alt="" />
                                <p className='text-[19px] font-normal sm:text-[15px] lg:text-[20px]'>Bmc/spr</p>
                            </div>
                            <p className='text-[20px] font-medium mt-[10px] sm:text-[15px] lg:text-[20px]'>34.901spr</p>
                            <p className='text-[20px] font-medium mt-[10px] sm:text-[15px] lg:text-[20px]'>220M</p>
                            <p className='text-[20px] font-medium mt-[10px] sm:text-[15px] lg:text-[20px]'>$6.34</p>
                            <p className='text-[20px] font-medium text-[#0CBD08] mt-[10px] sm:text-[15px] lg:text-[20px]'>+80.15</p>  
                        </div>
                        <div className='grid grid-cols-5 gap-6 mt-[20px]'>
                            <div className='flex justify-start items-center'>
                                <img className='w-[20%] mr-[5px]' src="/Images/Chelsea Football Club 3.png" alt="" />
                                <p className='text-[19px] font-normal sm:text-[15px] lg:text-[20px]'>Che/spr</p>
                            </div>
                            <p className='text-[20px] font-medium mt-[10px] sm:text-[15px] lg:text-[20px]'>30.321spr</p>
                            <p className='text-[20px] font-medium mt-[10px] sm:text-[15px] lg:text-[20px]'>214M</p>
                            <p className='text-[20px] font-medium mt-[10px] sm:text-[15px] lg:text-[20px]'>$6.30</p>
                            <p className='text-[20px] font-medium text-[#0CBD08] mt-[10px] sm:text-[15px] lg:text-[20px]'>+75.15</p>  
                        </div>
                        <div className='grid grid-cols-5 gap-6 mt-[20px]'>
                            <div className='flex justify-start items-center'>
                                <img className='w-[20%] mr-[5px]' src="/Images/download (6) 3.png" alt="" />
                                <p className='text-[19px] font-normal sm:text-[15px] lg:text-[20px]'>Rm/spr</p>
                            </div>
                            <p className='text-[20px] font-medium mt-[10px] sm:text-[15px] lg:text-[20px]'>30.121spr</p>
                            <p className='text-[20px] font-medium mt-[10px] sm:text-[15px] lg:text-[20px]'>210M</p>
                            <p className='text-[20px] font-medium mt-[10px] sm:text-[15px] lg:text-[20px]'>$6.14</p>
                            <p className='text-[20px] font-medium text-[#0CBD08] mt-[10px] sm:text-[15px] lg:text-[20px]'>+72.19</p>  
                        </div>
                        <div className='grid grid-cols-5 gap-6 mt-[20px]'>
                            <div className='flex justify-start items-center'>
                                <img className='w-[20%] mr-[5px]' src="/Images/Pegatinas_ Fc Barcelona 3.png" alt="" />
                                <p className='text-[19px] font-normal sm:text-[15px] lg:text-[20px]'>Bar/spr</p>
                            </div>
                            <p className='text-[20px] font-medium mt-[10px] sm:text-[15px] lg:text-[20px]'>29.981spr</p>
                            <p className='text-[20px] font-medium mt-[10px] sm:text-[15px] lg:text-[20px]'>198M</p>
                            <p className='text-[20px] font-medium mt-[10px] sm:text-[15px] lg:text-[20px]'>$5.94</p>
                            <p className='text-[20px] font-medium text-[#0CBD08] mt-[10px] sm:text-[15px] lg:text-[20px]'>+67.89</p>  
                        </div>
                    </div>
                </div>
           </section>
           <section>
                <div className='ml-[90px] mt-[50px] mr-[50px] sm:ml-[10px] sm:mr-[10px] lg:ml-[90px] lg:mr-[50px]'>
                    <h1 className='font-bold text-[19px] mb-[20px]'>Players Market Today</h1>
                    <div className="grid grid-cols-3 mb-[30px]">
                        <h2 className="font-bold text-[20px] sm:text-[15px] lg:text-[20px]">24 Amount</h2>
                        <h2 className="font-bold text-[20px] sm:text-[15px] lg:text-[20px]">Top Gainers</h2>
                        <h2 className="font-bold text-[20px] sm:text-[15px] lg:text-[20px]">Top Losers</h2>
                    </div>
                    <div className='border px-[20px] py-[30px]'>
                        <div className='grid grid-cols-5 gap-2 mt-[10px] text-[17px] sm:text-[13px] lg:text-[17px]'>
                            <h2 className='text-[#7D7A7A]'>Players</h2>
                            <h2 className='text-[#7D7A7A]'>Price</h2>
                            <h2 className='text-[#7D7A7A]'>24th trading (v)</h2>
                            <h2 className='text-[#7D7A7A]'>($)</h2>
                            <h2 className='text-[#7D7A7A]'>24th change</h2>
                        </div>
                        <div className='grid grid-cols-5 gap-6 mt-[20px]'>
                            <div className='flex justify-start items-center'>
                                <img className='w-[20%] mr-[30px] sm:mr-[10px] lg:mr-[30px] ' src="/Images/Brazil Portraits 2018 Fifa World Cup Russia Photos and Premium High Res Pictures 1.png" alt="" />
                                <p className='text-[19px] font-normal sm:text-[12px] lg:text-[20px]'>Neymar</p>
                            </div>
                            <p className='text-[20px] font-medium mt-[10px] sm:text-[15px] lg:text-[20px]'>30.321spr</p>
                            <p className='text-[20px] font-medium mt-[10px] sm:text-[15px] lg:text-[20px]'>220M</p>
                            <p className='text-[20px] font-medium mt-[10px] sm:text-[15px] lg:text-[20px]'>$6.34</p>
                            <p className='text-[20px] font-medium text-[#0CBD08] mt-[10px] sm:text-[15px] lg:text-[20px]'>+80.15</p>  
                        </div>
                        <div className='grid grid-cols-5 gap-6 mt-[20px]'>
                            <div className='flex justify-start items-center'>
                                <img className='w-[20%] mr-[30px] sm:mr-[10px] lg:mr-[30px]' src="/Images/01c38805-7e6d-4f3b-aecd-baaf15573c5f 1.png" alt="" />
                                <p className='text-[19px] font-normal sm:text-[12px] lg:text-[20px]'>Mbappe</p>
                            </div>
                            <p className='text-[20px] font-medium mt-[10px] sm:text-[15px] lg:text-[20px]'>30.221spr</p>
                            <p className='text-[20px] font-medium mt-[10px] sm:text-[15px] lg:text-[20px]'>214M</p>
                            <p className='text-[20px] font-medium mt-[10px] sm:text-[15px] lg:text-[20px]'>$6.30</p>
                            <p className='text-[20px] font-medium text-[#0CBD08] mt-[10px] sm:text-[15px] lg:text-[20px]'>+75.15</p>  
                        </div>
                        <div className='grid grid-cols-5 gap-6 mt-[20px]'>
                            <div className='flex justify-start items-center'>
                                <img className='w-[20%] mr-[30px] sm:mr-[10px] lg:mr-[30px]' src="/Images/Mo salah 1.png" alt="" />
                                <p className='text-[19px] font-normal sm:text-[12px] lg:text-[20px]'>Salah</p>
                            </div>
                            <p className='text-[20px] font-medium mt-[10px] sm:text-[15px] lg:text-[20px]'>29.981spr</p>
                            <p className='text-[20px] font-medium mt-[10px] sm:text-[15px] lg:text-[20px]'>210M</p>
                            <p className='text-[20px] font-medium mt-[10px] sm:text-[15px] lg:text-[20px]'>$5.94</p>
                            <p className='text-[20px] font-medium text-[#0CBD08] mt-[10px] sm:text-[15px] lg:text-[20px]'>+67.89</p>  
                        </div>
                        <div className='grid grid-cols-5 gap-6 mt-[20px]'>
                            <div className='flex justify-start items-center'>
                                <img className='w-[20%] mr-[30px] sm:mr-[10px] lg:mr-[30px]' src="/Images/c84af78d-9ead-41fc-a027-18ad358f9230 1.png" alt="" />
                                <p className='text-[19px] font-normal sm:text-[12px] lg:text-[20px]'>Kane</p>
                            </div>
                            <p className='text-[20px] font-medium mt-[10px] sm:text-[15px] lg:text-[20px]'>30.121spr</p>
                            <p className='text-[20px] font-medium mt-[10px] sm:text-[15px] lg:text-[20px]'>210M</p>
                            <p className='text-[20px] font-medium mt-[10px] sm:text-[15px] lg:text-[20px]'>$6.14</p>
                            <p className='text-[20px] font-medium text-[#0CBD08] mt-[10px] sm:text-[15px] lg:text-[20px]'>+72.19</p>  
                        </div>
                    </div>
                </div>
           </section>
            <Footer/>
        </>
    )
}
export default SportekaUser