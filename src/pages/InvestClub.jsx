import Navbar from '../components/nav.jsx'

function Invest () {
    return (
        <>
            <Navbar/>
            <section className='pt-[100px] pl-[90px] sm:pl-[30px] lg:pl-[90px]'>
                <div className='flex justify-start items-center mb-[30px]'>
                    <img className='w-[10%] mr-[20px]' src="/Images/Manchester City's original logo is free to download_ 1.png" alt="" />
                    <h2 className='text-[25px] font-medium sm:text-[20px] lg:text-[25px]'>Manchester City</h2>
                </div>
                <p className='text-[20px] font-medium w-[60%] mb-[20px] sm:w-[90%] sm:text-[15px] lg:w-[60%] lg:text-[20px]'>Manchester City Football Club is a professional football club based in Manchester, England, that competes in the Premier League, the top flight of English football. Founded in 1880 as St. Mark's, they became Ardwick Association Football Club in 1887 and Manchester City in 1894</p>
                <div className='grid grid-cols-5 gap-2 mt-[10px] text-[19px] sm:text-[14px] lg:text-[19px]'>
                    <h2 className='font-bold'>Token</h2>
                    <h2 className='font-bold'>Price</h2>
                    <h2 className='font-bold'>Market Cap</h2>
                    <h2 className='font-bold'>Fiat Currency ($)</h2>
                    <h2 className='font-bold'>traders</h2>
                </div>
                <div className='grid grid-cols-5 gap-2 mt-[10px] text-[19px] sm:text-[15px] lg:text-[19px]'>
                    <h2 className=''>Man/spr</h2>
                    <h2 className='text-[#0CBD08]'>+15.75%</h2>
                    <h2 className=''>30M</h2>
                    <h2 className=''>$7</h2>
                    <h2 className=''>23</h2>
                </div>
                <div className='flex justify-center items-center'>
                    <button type="button" className='mt-[70px] text-center text-md bg-[#0F0F0F] text-[16px] text-white py-[9px] px-[12px] rounded-lg w-[30%] sm:w-[70%] lg:w-[30%]'>Invest</button>
                </div>
            </section>
        </>
    )
}
export default Invest