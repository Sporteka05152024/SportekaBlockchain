function Footer() {
    return (
        <>
            <hr className='mt-[20px]'/>
            <div className="py-[40px] pl-[20px] text-[16px] pr-[50px] grid grid-cols-3 gap-4 bg-black text-white  font-serif sm:grid-cols-1 lg:grid-cols-3">
                <div className="links">
                    <ul className="ml-[40px]">
                        <li>Terms and condition </li>
                        <li>Privacy policy</li>
                        <li>Contact us</li>
                    </ul>
                </div>
                <div className="links">
                    <ul className="ml-[40px]">
                        <li>Trade</li>
                        <li>How it works</li>
                        <li>Analysis</li>
                        <li>Predictions</li>
                    </ul>
                </div>
                <div className="links2">
                    <ul className="ml-[40px]">
                        <li>Careers</li>
                        <li>Investors</li>
                        <li>Media</li>
                        <li>News</li>
                    </ul>
                </div>
            </div>
        </>
    )
}
export default Footer