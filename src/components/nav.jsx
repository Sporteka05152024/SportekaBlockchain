import { useState } from "react";

function NavBar () {
    const [nav, setNav] = useState(false);
    const showNav = ()  => {
       setNav(!nav)
    }
    return (
        <>
            <div className="fixed w-full z-[1000] p-[5px] py-2 bg-white shadow-sm shadow-gray-400">
                <nav className="flex justify-between items-center my-[10px] mr-[3rem] ml-[2rem] h-10 pb-13 sm:mx-5 lg:mr-[2rem] lg:ml-[2rem]">
                    <div className="flex justify-between items-center w-[100%] sm:w-[100%] md:w-[100%] lg:w-[20%]">
                        <div className="">
                            <a href="/"><img className="w-36" src="/Images/Component 2.png" alt=""/></a>
                        </div>
                        <div className="w-0 sm:w-7 md:w-8 lg:w-0" onClick={showNav}>
                           {!nav ? <img className="cursor-pointer" src="/Images/menu.png" alt=""/> : <img className="cursor-pointer" src="/Images/close.png" alt=""/>}
                        </div>
                    </div>
                    <ul className="flex justify-center items-center text-[16px] space-x-5 text-black font-serif sm:hidden md:hidden lg:flex">
                        <li className="text-center text-md font-bold"><a className='pr-3' href="/home">Players</a></li>
                        <li className="text-center text-md font-bold"><a className='pr-3' href="/sportekauser">Listing</a></li>
                        <li className="text-center text-md font-bold"><a className='pr-3' href="/clubs">Clubs</a></li>
                        <li className="text-center text-md font-bold"><a className='pr-3' href="/trade">Trade</a></li>
                        <li className="text-center text-md font-bold"><a className='pr-3' href="/invest">Earn</a></li>
                        <li className="text-center text-md font-bold"><a className='pr-3' href="/">Tradebet</a></li>
                        <li className="text-center text-md font-bold"><a className='pr-3' href="/login">Log In</a></li>
                        <button className="text-center text-md bg-[#0F0F0F] text-[16px] text-white py-[6px] px-[22px] rounded-lg"><a className='' href="/signUp">Sign up</a></button>
                       
                    </ul>
                    <div className={!nav ? 'fixed left-[-100%]' : 'fixed z-[1000] left-0 top-0 w-[40%] text-black mt-[76px] h-full bg-white shadow-md ease-in-out duration-500 sm:w-[80%] md:w-[40%] lg:hidden'}>
                        <ul className="w-full p-12 space-y-6  font-serif">
                            <li className="text-left text-md font-bold"><a className='pr-3' onClick={showNav} href="/home">Players</a></li>
                            <li className="text-left text-md font-bold"><a className='pr-3' onClick={showNav} href="/sportekauser">Listing</a></li>
                            <li className="text-left text-md font-bold"><a className='pr-3' onClick={showNav} href="/clubs">Clubs</a></li>
                            <li className="text-left text-md font-bold"><a className='pr-3' onClick={showNav} href="/trade">Trade</a></li>
                            <li className="text-left text-md font-bold"><a className='pr-3' onClick={showNav} href="/userdashboard">Earn</a></li>
                        <li className="text-left text-md font-bold"><a className='pr-3' onClick={showNav} href="/">Tradebet</a></li>
                            <li className="text-left text-md font-bold"><a className='pr-3' onClick={showNav}  href="/clubreg">Log In</a></li>
                            <button className="text-center text-md bg-[#0F0F0F] text-[16px] text-white py-[6px] px-[22px] rounded-lg"><a className='' onClick={showNav}  href="/signUp">Sign up</a></button>
                        </ul>
                    </div>  
                </nav>
            </div>
        </>
    )
}
export default NavBar