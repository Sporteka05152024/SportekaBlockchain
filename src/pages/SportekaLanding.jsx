import Navbar from '../components/nav.jsx'
import Footer from '../components/footer.jsx'

function LandingPage () {
    return (
        <>
            <Navbar/>
            <div className="pt-[100px] flex justify-center items-center">
                <div>
                    <h1 className='font-semibold font-serif text-left text-[35px] w-[90%] sm:text-[25px] md:text-[35px]'>THE FUTURE OF SPORT TRADING IS HERE</h1>
                    <p className='font-sm w-[50%] text-left text-[19px] mt-[20px] sm:w-[70%] lg:w-[50%]'>Discover the benefits of Trading tokens on our blockchain powered platform.</p>   
                </div>
                <img className='w-[25%]' src="/Images/Stronger Together 1.png" alt="" />
            </div>
            <div className='grid grid-cols-s gap-4 ml-[80px] mt-20 mb-[20px] sm:grid-cols-2 lg:grid-cols-5' data-aos="fade-right" data-aos-easing="linear" data-aos-duration="1500">
                <img className='w-[38%]' src="/Images/Manchester City's original logo is free to download_ 1.png" alt="" />
                <img className='w-[25%]' src="/Images/FC Bayern Munich 3.png" alt="" />
                <img className='w-[25%]' src="/Images/Chelsea Football Club 3.png" alt="" />
                <img className='w-[25%]' src="/Images/download (6) 3.png" alt="" />
                <img className='w-[25%]' src="/Images/Pegatinas_ Fc Barcelona 3.png" alt="" />
            </div>
            <div className="pt-[60px] ml-[50px] mr-[30px] mb-[30px]" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
               
            </div>
           <div className='flex justify-between items-center ml-[50px] mr-[120px]'>
                <p className='font-sm w-[51%] text-left text-[25px] mt-[20px] sm:w-[70%] lg:w-[37%]'>Trade digital tokens earn rewards, and get closer to your favourite teams and players</p>
                <img className="w-[27%]" src="/Images/Hotel Equipe de France de Football- World Cup 2018_ 1.png" alt="" />
           </div>
            <Footer/>
            {/* <Footer/> */}
        </>
    )
}
export default LandingPage