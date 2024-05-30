function MancityDashboard () {
    return (
        <>
            <div className="mt-[50px] pl-[90px] pr-[90px] mb-[30px] sm:pl-[20px] sm:pr-[20px] lg:pr-[20px] lg:pl-[90px]">
                <div className="flex justify-start items-center space-x-3">
                    <img className="w-[5%] sm:w-[10%] lg:w-[5%]" src="/Images/Manchester City's original logo is free to download_ 1.png" alt="" />
                    <div className="">
                        <p className="font-bold">Manchester City</p>  
                        <div className="flex font-medium">
                            <p className="text-[#0CBD08]">234</p><span>SPR</span>
                            <p className="text-[#0CBD08] ml-[10px]">+45.78%</p>
                        </div>  
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
                        <h2 className="font-bold text-[22px]">Player Datas</h2>
                        <p className="text-[#696868] text-[16.5px] font-medium text-center py-[10px] w-[70%]">List of players, data and profile</p>
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
                        <h2 className="font-bold text-[22px]">Staff Datas</h2>
                        <p className="text-[#696868] text-[16.5px] font-medium text-center py-[10px] w-[70%]">staff members and datas</p>
                        <button type="button" className="border text-center text-md bg-[#0F0F0F] text-[16px] text-white py-[6px] px-[22px] rounded-lg">View</button>
                    </div>
                    <div className="flex justify-center items-center flex-col border-[3px] py-[20px]">
                        <h2 className="font-bold text-[22px]">Market caps</h2>
                            <p className="text-[#696868] text-[16.5px] font-medium text-center py-[10px] w-[70%]">Market datas, trade activites datas, earning coming fror users</p>
                            <button type="button" className="border text-center text-md bg-[#0F0F0F] text-[16px] text-white py-[6px] px-[22px] rounded-lg">View</button>
                        </div>
                </div>
                <div className="flex justify-center items-center flex-col border-[3px] py-[20px] mt-[20px] w-[32%] sm:w-full lg:w-[32%]">
                    <h2 className="font-bold text-[22px]">Top traders</h2>
                    <p className="text-[#696868] text-[16.5px] font-medium text-left py-[10px] w-[70%]">View traders invest in tokens</p>
                    <button type="button" className="border text-center text-md bg-[#0F0F0F] text-[16px] text-white py-[6px] px-[22px] rounded-lg"> View</button>
                </div>
            </div>
        </>
    )
}
export default MancityDashboard;