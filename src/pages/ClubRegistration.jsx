import Navbar from '../components/nav.jsx'

function ClubRegistration () {
    return (
        <>
            <Navbar />
            <div className='pt-[100px] flex justify-center items-center flex-col'>
                <div className="text-center mb-[5px] ml-5 font-medium">
                    <h2 className='font-bold text-[25px]'>Club Registration</h2>
                    <div className='flex justify-center items-center'>
                        <img className='w-[22%] mt-[20px]' src="/Images/Premium PSD _ 3d rendering of football soccer emblem graphic concept 1 (1).png" alt="" />
                    </div>
                </div>
                <div className="w-[30%] sm:w-[90%] lg:w-[30%]">
                    <form action="" className="flex justify-center items-center flex-col mt-1">
                        <input  className='mb-3 rounded-sm text-center text-[#827E7E] text-[18px] p-[8px] font-medium w-[50%] outline-none border bg-[#FCFAFA] sm:w-[90%] lg:w-[70%]' type="email" name="Email" id="" placeholder="Club Name" required/>
                        <input  className='mb-3 rounded-sm p-[8px] text-[#827E7E] text-center text-[18px] font-medium w-[50%] outline-none border bg-[#FCFAFA] sm:w-[90%] lg:w-[70%]' type="text" name="Password" id="" placeholder="Country" required/>
                        <input  className='relative mb-3 rounded-sm p-[8px] text-[#827E7E] text-center text-[18px] font-medium w-[50%] outline-none border bg-[#FCFAFA] sm:w-[90%] lg:w-[70%]' type="text" name="Password" id="" placeholder="add logo" required/><button className='flex text-white px-[9px] bg-[#827E7E] absolute top-[66.5%] left-[42%] sm:left-[20%] sm:hidden lg:left-[42%] lg:flex'>Add</button>
                        <input  className='mb-3 rounded-sm p-[8px] text-[#827E7E] text-center text-[18px] font-medium w-[50%] outline-none border bg-[#FCFAFA] sm:w-[90%] lg:w-[70%]' type="text" name="Password" id="" placeholder="Manager name" required/>
                        <div>
                            <label className='mr-[30px] text-[18px] font-medium text-[#818181]' htmlFor="">Stadium</label>
                            <input className='mr-[7px] cursor-pointer' type="checkbox" name="" id="" /><label className='mr-[90px] text-[18px] font-medium text-[#818181]' htmlFor="">Yes</label>
                            <input className='mr-[7px] cursor-pointer' type="checkbox" name="" id="" /><label className='text-[18px] font-medium text-[#818181]' htmlFor="">No</label>
                        </div>
                        <button className="mt-7 bg-[#0F0F0F] p-[8px] text-white rounded-md w-[35%] sm:w-[80%] lg:w-[45%]" type="submit">Enter</button>
                    </form>
                </div>
            </div>
        </>
    )
}
export default ClubRegistration