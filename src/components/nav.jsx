import { useState } from "react";

function NavBar () {
    const [nav, setNav] = useState(false);
    const showNav = ()  => {
       setNav(!nav)
    }
    return (
        <>
            <div className="fixed w-full z-[1000] p-[5px] py-2 bg-white shadow-md shadow-gray-400">
                <nav className="flex justify-between items-center my-[10px] mr-20 ml-[2rem] h-10 pb-13 sm:mx-5 lg:mr-20 lg:ml-[2rem]">
                    <div className="flex justify-between items-center w-[100%] sm:w-[100%] md:w-[100%] lg:w-[20%]">
                        <div className="">
                            <a href="/"><img className="w-36" src="/Images/Component 2.png" alt=""/></a>
                        </div>
                        <div className="w-0 sm:w-7 md:w-8 lg:w-0" onClick={showNav}>
                           {!nav ? <img className="cursor-pointer" src="/Images/menu.png" alt=""/> : <img className="cursor-pointer" src="/Images/close.png" alt=""/>}
                        </div>
                    </div>
                    <ul className="flex justify-center items-center text-[16.5px] space-x-5 text-black sm:hidden md:hidden lg:flex">
                        <li className="text-center text-md"><a className='pr-3' href="/home">Home</a></li>
                        <li className="text-center text-md"><a className='pr-3' href="/marketplace">Who we are</a></li>
                        <li className="text-center text-md"><a className='pr-3' href="/">Mentor</a></li>
                        <li className="text-center text-md"><a className='pr-3' href="/">Mentees</a></li>
                        <li className="text-center text-md"><a className='pr-3' href="/">Resources</a></li>
                        <li className="text-center text-md"><a className='pr-3' href="/">Contact</a></li>
                       
                    </ul>
                    <div className={!nav ? 'fixed left-[-100%]' : 'fixed left-0 top-0 w-[40%] text-black mt-[76px] h-full bg-white shadow-md ease-in-out duration-500 sm:w-[80%] md:w-[40%] lg:hidden'}>
                        <ul className="w-full p-12 space-y-6">
                            <li className="text-md"><a className='font-medium' onClick={showNav} href="/home">Home</a></li>
                            <li className="text-md"><a className='font-medium' onClick={showNav} href="/marketplace">Who we are</a></li>
                            <li className="text-md"><a className='font-medium' onClick={showNav} href="/">Mentor</a></li>
                            <li className="text-md"><a className='font-medium' onClick={showNav} href="/">Mentees</a></li>
                            <li className="text-md"><a className='font-medium' onClick={showNav} href="/">Resources</a></li>
                            <li className=""><a className='font-medium' onClick={showNav}  href="/">Contact</a></li>
                        </ul>
                    </div>  
                </nav>
            </div>
        </>
    )
}
export default NavBar