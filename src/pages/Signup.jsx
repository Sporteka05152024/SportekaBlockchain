import Navbar from '../components/nav.jsx'

function SignUp () {
    return (
        <>
            <Navbar />
            <div className='pt-[120px]'>
                <div className="text-center mb-[30px] ml-5 font-medium">
                    <h2 className='font-bold text-[25px]'>CREATE ACCOUNT</h2>
                </div>
                <div className="">
                    <form action="" className="flex justify-center items-center flex-col mt-6">
                        <input  className='mb-4 rounded-sm text-center text-[#827E7E] text-[18px] p-[12px] font-medium w-[30%] outline-none border bg-[#FCFAFA] sm:w-[90%] sm:p-[10px] lg:p-[12px]  lg:w-[30%]' type="email" name="Email" id="" placeholder="Email" required/>
                        <input  className='mb-4 rounded-sm p-[12px] text-[#827E7E] text-center text-[18px] font-medium w-[30%] outline-none border bg-[#FCFAFA] sm:w-[90%] sm:p-[10px] lg:p-[12px]  lg:w-[30%]' type="password" name="Password" id="" placeholder="Enter password" required/>
                        <input  className='mb-4 rounded-sm p-[12px] text-[#827E7E] text-center text-[18px] font-medium w-[30%] outline-none border bg-[#FCFAFA] sm:w-[90%] sm:p-[10px] lg:p-[12px]  lg:w-[30%]' type="password" name="Password" id="" placeholder="confirm password" required/>
                        <div className='flex justify-betwen justify-center]'>
                            <input className='mr-[7px] cursor-pointer' type="checkbox" name="" id="" /><label className='mr-[150px] text-[18px] font-medium text-[#818181] sm:w-[90%] sm:text-[15px] lg:w-[70%] lg:text-[18px]' htmlFor="">Club</label>
                            <input className='mr-[7px] cursor-pointer' type="checkbox" name="" id="" /><label className='text-[18px] font-medium text-[#818181] sm:w-[90%] sm:text-[15px] lg:w-[70%] lg:text-[18px]' htmlFor="">Trader</label>
                        </div>
                        <div className='flex justify-center items-center self-center mt-[10px] ml-[35px]'>
                            <input className='cursor-pointer' type="checkbox" name="" id="" /><label className='text-[18px] w-[70%] mt-[10px] ml-[10px] font-medium text-[#818181] sm:w-[90%] sm:text-[15px] lg:w-[70%] lg:text-[18px]' htmlFor="">I have agreed Terms of use Privacy Agreement</label>
                        </div>
                        <button className="mt-7 bg-[#0F0F0F] p-[9px] text-white rounded-md w-[15%] sm:w-[80%] lg:w-[15%]" type="submit">Log in</button>
                        <div className='mt-[30px]'>
                            <a className="mt-3 mr-[5px] text-[#827E7E] font-medium text-[15px]" href="/signUp">You already registered?</a>
                            <a className="mt-3 text-red-500 font-bold text-[15px]" href="/login">Log in</a>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
export default SignUp