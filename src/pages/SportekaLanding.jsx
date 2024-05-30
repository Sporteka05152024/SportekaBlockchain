import Navbar from '../components/nav.jsx'
import Footer from '../components/footer.jsx'
import { ReactTyped } from "react-typed";
import Video from '../assets/video/vid.mp4';

function LandingPage () {
    return (
        <>
            <Navbar/>
            <div className=''>
                <video autoPlay muted playsInline className='absolute z-[-10] w-full brightness-50 h-full sm:h-[50%] lg:h-auto'>
                    <source src={Video}  type='video/mp4' />
                </video>
                <div className="pt-[230px] pb-[50px] flex justify-center mb-[10px] items-center relative z-[10] text-white sm:pt-[130px] sm:pb-[30px] md:pt-[170px] lg:pt-[230px]">
                    <div className='flex justify-center items-center flex-col'>
                        <h1 className='text-center font-bold font-serif text-[45px] w-[90%] sm:text-[25px] md:text-[40px] lg:text-[45px]'>THE FUTURE OF SPORT TRADING IS HERE</h1>
                        <p className='font-sm text-center text-[20px] mt-[20px] sm:text-[16px] md:text-[18px] lg:text-[20px]'>Discover the benefits of Trading tokens on our blockchain powered platform.</p>   
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-4 gap-4 ml-[90px] mt-[300px] mb-[70px] sm:grid-cols-2 sm:mt-[40px] sm:ml-[70px] sm:mr-[20px] md:mt-[50px] lg:mt-[300px] lg:grid-cols-4' data-aos="fade-right" data-aos-easing="linear" data-aos-duration="1500">
                <img className='w-[20%] sm:w-[30%] md:w-[40%] lg:w-[20%]' src="/Images/FC Bayern Munich 3.png" alt="" />
                <img className='w-[20%] sm:w-[30%]  md:w-[40%] lg:w-[20%]' src="/Images/Chelsea Football Club 3.png" alt="" />
                <img className='w-[20%] sm:w-[30%]  md:w-[40%] lg:w-[20%]' src="/Images/download (6) 3.png" alt="" />
                <img className='w-[20%] sm:w-[30%]  md:w-[40%] lg:w-[20%]' src="/Images/Pegatinas_ Fc Barcelona 3.png" alt="" />
            </div>
           <div className='grid grid-cols-2 gap-6 ml-[90px] sm:ml-[30px] lg:ml-[90px] sm:grid-cols-1 lg:grid-cols-2'> 
                <p className='font-sm w-[85%] text-left text-[25px] mt-[20px] sm:w-[95%] sm:text-[22px] lg:w-[85%]'>Trade digital tokens earn rewards, and get closer to your favourite teams and players</p>
                <div className='flex justify-center items-center'>
                    <img className="w-[47%] sm:w-[50%] sm:mt-[30px] lg:w-[47%]" src="/Images/Hotel Equipe de France de Football- World Cup 2018_ 1.png" alt="" />
                </div>
           </div>
           <section>
                <div className='ml-[90px] mt-[50px] mr-[50px] sm:ml-[10px] sm:mr-[10px] lg:ml-[90px] lg:mr-[50px]'>
                    <h1 className='font-bold text-[19px] mb-[20px]'>Crypto club Market</h1>
                    <div className='border px-[20px] py-[30px]'>
                        <div className='grid grid-cols-5 gap-2 mt-[10px] text-[17px] sm:text-[13px] sm:gap-0 lg:text-[17px]'>
                            <h2 className='text-[#7D7A7A]'>Club</h2>
                            <h2 className='text-[#7D7A7A]'>Price</h2>
                            <h2 className='text-[#7D7A7A]'>24th trading (v)</h2>
                            <h2 className='text-[#7D7A7A]'>($)</h2>
                            <h2 className='text-[#7D7A7A]'>24th change</h2>
                        </div>
                        <div className='grid grid-cols-5 gap-6 mt-[20px]'>
                            <div className='flex justify-start items-center'>
                                <img className='w-[20%] mr-[2px]' src="/Images/Manchester City's original logo is free to download_ 1.png" alt="" />
                                <p className='text-[19px] font-normal sm:text-[15px] lg:text-[15px]'>Man/spr</p>
                            </div>
                            <p className='text-[20px] font-medium mt-[10px] sm:text-[15px] lg:text-[20px]'><ReactTyped
                                    strings={["34.901spr", "34.902spr", "34.905spr",]}
                                    typeSpeed={100}
                                    backSpeed={100}
                                    loop
                                    >
                            </ReactTyped></p>
                            <p className='text-[20px] font-medium mt-[10px] sm:text-[15px] lg:text-[20px]'>246M</p>
                            <p className='text-[20px] font-medium mt-[10px] sm:text-[15px] lg:text-[20px]'>$7.51</p>
                            <p className='text-[20px] font-medium text-[#0CBD08] mt-[10px] sm:text-[15px] lg:text-[20px]'>+86.15</p>  
                        </div>
                        <div className='grid grid-cols-5 gap-6 mt-[20px]'>
                            <div className='flex justify-start items-center'>
                                <img className='w-[20%] mr-[5px]' src="/Images/FC Bayern Munich 3.png" alt="" />
                                <p className='text-[19px] font-normal sm:text-[15px] lg:text-[15px]'>Bmc/spr</p>
                            </div>
                            <p className='text-[20px] font-medium mt-[10px] sm:text-[15px] lg:text-[20px]'><ReactTyped
                                strings={["34.901spr", "34.902spr", "34.905spr",]}
                                typeSpeed={100}
                                backSpeed={100}
                                loop
                                >
                            </ReactTyped></p>
                            <p className='text-[20px] font-medium mt-[10px] sm:text-[15px] lg:text-[20px]'>220M</p>
                            <p className='text-[20px] font-medium mt-[10px] sm:text-[15px] lg:text-[20px]'>$6.34</p>
                            <p className='text-[20px] font-medium text-[#0CBD08] mt-[10px] sm:text-[15px] lg:text-[20px]'>+80.15</p>  
                        </div>
                        <div className='grid grid-cols-5 gap-6 mt-[20px]'>
                            <div className='flex justify-start items-center'>
                                <img className='w-[20%] mr-[5px]' src="/Images/Chelsea Football Club 3.png" alt="" />
                                <p className='text-[19px] font-normal sm:text-[15px] lg:text-[15px]'>Che/spr</p>
                            </div>
                            <p className='text-[20px] font-medium mt-[10px] sm:text-[15px] lg:text-[20px]'><ReactTyped
                                    strings={["30.321spr", "30.333spr", "30.367spr",]}
                                    typeSpeed={100}
                                    backSpeed={100}
                                    loop
                                    >
                            </ReactTyped></p>
                            <p className='text-[20px] font-medium mt-[10px] sm:text-[15px] lg:text-[20px]'>214M</p>
                            <p className='text-[20px] font-medium mt-[10px] sm:text-[15px] lg:text-[20px]'>$6.30</p>
                            <p className='text-[20px] font-medium text-[#0CBD08] mt-[10px] sm:text-[15px] lg:text-[20px]'>+75.15</p>  
                        </div>
                        <div className='grid grid-cols-5 gap-6 mt-[20px]'>
                            <div className='flex justify-start items-center'>
                                <img className='w-[20%] mr-[5px]' src="/Images/download (6) 3.png" alt="" />
                                <p className='text-[19px] font-normal sm:text-[15px] lg:text-[15px]'>Rm/spr</p>
                            </div>
                            <p className='text-[20px] font-medium mt-[10px] sm:text-[15px] lg:text-[20px]'><ReactTyped
                                    strings={["30.121spr", "30.122spr", "30.141spr",]}
                                    typeSpeed={100}
                                    backSpeed={100}
                                    loop
                                    >
                            </ReactTyped></p>
                            <p className='text-[20px] font-medium mt-[10px] sm:text-[15px] lg:text-[20px]'>210M</p>
                            <p className='text-[20px] font-medium mt-[10px] sm:text-[15px] lg:text-[20px]'>$6.14</p>
                            <p className='text-[20px] font-medium text-[#0CBD08] mt-[10px] sm:text-[15px] lg:text-[20px]'>+72.19</p>  
                        </div>
                        <div className='grid grid-cols-5 gap-6 mt-[20px]'>
                            <div className='flex justify-start items-center'>
                                <img className='w-[20%] mr-[5px]' src="/Images/Pegatinas_ Fc Barcelona 3.png" alt="" />
                                <p className='text-[19px] font-normal sm:text-[15px] lg:text-[15px]'>Bar/spr</p>
                            </div>
                            <p className='text-[20px] font-medium mt-[10px] sm:text-[15px] lg:text-[20px]'><ReactTyped
                                    strings={["29.981spr", "29.988spr", "29.900spr",]}
                                    typeSpeed={100}
                                    backSpeed={100}
                                    loop
                                    >
                            </ReactTyped></p>
                            <p className='text-[20px] font-medium mt-[10px] sm:text-[15px] lg:text-[20px]'>198M</p>
                            <p className='text-[20px] font-medium mt-[10px] sm:text-[15px] lg:text-[20px]'>$5.94</p>
                            <p className='text-[20px] font-medium text-[#0CBD08] mt-[10px] sm:text-[15px] lg:text-[20px]'>+67.89</p>  
                        </div>
                    </div>
                </div>
           </section>
           <section>
                <div className='grid grid-cols-2 gap-6 ml-[90px] sm:ml-[30px] lg:ml-[90px] sm:grid-cols-1 lg:grid-cols-2 mr-[10px] mt-[40px]'>
                    <p className='font-sm w-[90%] text-left text-[25px] mt-[20px] sm:w-[80%] sm:text-[18px] lg:text-[25px] lg:w-[95%]'>Our platform uses blockchain technology to provide a safe,secure and ttansparent platform for trading token</p>
                    <div className='flex justify-center items-center'>
                        <img className="w-[30%] sm:w-[40%] lg:w-[30%]" src="/Images/Frame 47.png" alt="" />
                    </div>
                </div>
           </section>
           <section>
                <div className='grid grid-cols-2 gap-6 ml-[90px] sm:ml-[30px] lg:ml-[90px] sm:grid-cols-1 lg:grid-cols-2 mr-[10px] mt-[40px] self-center'>
                    <div>
                        <p className='font-sm w-[97%] text-left text-[25px] mt-[20px] sm:w-[90%] sm:text-[18px] lg:text-[25px] lg:w-[97%]'>Are you a sports club looking engage with your fans in a new and innovative way?</p>
                        <p className='font-sm w-[97%] text-left text-[25px] mt-[60px] sm:w-[90%] sm:mb-[20px] sm:text-[18px] lg:text-[25px] lg:w-[97%]'>Create and  distribute fan tokens on our blockchain powered platform and engage  your fans in new and exciting ways</p>
                    </div>
                    <div className='flex justify-center items-center'>
                        <img className="w-[50%] sm:w-[60%] lg:w-[50%]" src="/Images/Frame 49.png" alt="" />
                    </div>
                </div>
           </section>
           <section>
                <div className="grid grid-cols-3 ml-[90px] mt-[80px] mr-[90px] sm:grid-cols-1 lg:grid-cols-3 sm:ml-[30px] sm:mr-[30px] lg:ml-[90px] lg:mr-[90px]">
                    <div className='flex justify-center items-center flex-col border py-[20px]'>
                        <img className='w-[10%]' src="/Images/iconamoon_profile-fill.png" alt="" />
                        <p className='font-sm w-[50%] text-left text-[20px] mt-[40px] sm:w-[70%] lg:w-[56%]'>Sign up as a user or club, user get rewarded with $50</p>
                    </div>
                    <div className='flex justify-center items-center flex-col border py-[20px]'>
                        <img className='w-[10%]' src="/Images/mdi_chart-line.png" alt="" />
                        <p className='font-sm w-[50%] text-left text-[20px] mt-[40px] sm:w-[70%] lg:w-[56%]'>Trade your favorite clubs & players with Sporteka token & earn as a user</p>
                    </div>
                    <div className='flex justify-center items-center flex-col border py-[20px]'>
                        <img className='w-[10%]' src="/Images/Vector.png" alt="" />
                        <p className='font-sm w-[50%] text-left text-[20px] mt-[40px] sm:w-[70%] lg:w-[59%]'>  Register as a club let your fans engage with you</p>
                    </div>
                </div>
           </section>
           <div className='grid grid-cols-2 gap-8 ml-[90px] mr-[90px] mt-[90px] mb-[60px] sm:grid-cols-1 lg:grid-cols-2 sm:ml-[30px] sm:mr-[30px] lg:ml-[90px] lg:mr-[90px]'>
                <img className="w-[30%]" src="/Images/Component 2.png" alt="" />
                <p className='text-[19px] font-bold'>Sporteka is a  blockainchain fan engagement plastform  & reward app that allows fans to engage with their favorite clubs and players through digital token Sporkeka token & clubs engaging with fans</p>
           </div>
            <Footer/>
            {/* <Footer/> */}
        </>
    )
}
export default LandingPage