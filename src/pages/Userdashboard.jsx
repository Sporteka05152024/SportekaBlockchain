function UserDashboard () {
    return (
        <>
            <div className="mt-[50px] pl-[90px] pr-[90px] mb-[30px] sm:pl-[20px] sm:pr-[20px] lg:pr-[20px] lg:pl-[90px]">
                <div className="flex justify-start items-center space-x-3">
                    <img className="w-[5%] sm:w-[10%] lg:w-[5%]" src="/Images/Ellipse 11.png" alt="" />
                    <div className="">
                        <p className="font-bold">Richard Howard</p>  
                        <p  className="font-bold">richieart123@gmail.com</p>
                    </div>
                   <button className="border px-[10px] font-medium" type="submit">KYC1</button>
                </div>
                <div className="grid grid-cols-3 gap-4 mt-[40px] sm:grid-cols-1 lg:grid-cols-3">
                    <div className="flex justify-center items-center flex-col border-[3px] py-[20px]">
                        <h2 className="font-bold text-[22px]">Security</h2>
                        <p className="text-[#696868] text-[16.5px] font-medium text-center py-[10px] w-[70%]">Manage Your Account,2FA Passwords</p>
                        <button type="button" className="border text-center text-md bg-[#0F0F0F] text-[16px] text-white py-[6px] px-[22px] rounded-lg">Configure</button>
                    </div>
                    <div className="flex justify-center items-center flex-col border-[3px] py-[20px]">
                        <h2 className="font-bold text-[22px]">ID Verification</h2>
                        <p className="text-[#696868] text-[16.5px] font-medium text-center py-[10px] w-[70%]">Manage Your KYC levels</p>
                        <button type="button" className="border text-center text-md bg-[#0F0F0F] text-[16px] text-white py-[6px] px-[22px] rounded-lg">Continue</button>
                    </div>
                    <div className="flex justify-center items-center flex-col border-[3px] py-[20px]">
                        <h2 className="font-bold text-[22px]">Order</h2>
                        <p className="text-[#696868] text-[16.5px] font-medium text-center py-[10px] w-[70%]">Manage Your Open Orders and view order history</p>
                        <button type="button" className="border text-center text-md bg-[#0F0F0F] text-[16px] text-white py-[6px] px-[22px] rounded-lg">View</button>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-4 mt-[40px] sm:grid-cols-1 lg:grid-cols-3">
                    <div className="flex justify-center items-center flex-col border-[3px] py-[20px]">
                        <h2 className="font-bold text-[22px]">Wallet Address</h2>
                        <p className="text-[#696868] text-[16.5px] font-medium text-center py-[10px] w-[70%]">Manage Your wallet addresses here for easier deposits and withdrawals</p>
                        <button type="button" className="border text-center text-md bg-[#0F0F0F] text-[16px] text-white py-[6px] px-[22px] rounded-lg">Add</button>
                    </div>
                    <div className="flex justify-center items-center flex-col border-[3px] py-[20px]">
                        <h2 className="font-bold text-[22px]">My Invitation</h2>
                        <p className="text-[#696868] text-[16.5px] font-medium text-center py-[10px] w-[70%]">Views and Manage your personal referrals</p>
                        <button type="button" className="border text-center text-md bg-[#0F0F0F] text-[16px] text-white py-[6px] px-[22px] rounded-lg">Invite</button>
                    </div>
                    <div className="flex justify-center items-center flex-col border-[3px] py-[20px]">
                        <h2 className="font-bold text-[22px]">Earns</h2>
                            <p className="text-[#696868] text-[16.5px] font-medium text-center py-[10px] w-[70%]">Earn in different ways and competitons</p>
                            <button type="button" className="border text-center text-md bg-[#0F0F0F] text-[16px] text-white py-[6px] px-[22px] rounded-lg">Join</button>
                        </div>
                </div>
            </div>
        </>
    )
}
export default UserDashboard;