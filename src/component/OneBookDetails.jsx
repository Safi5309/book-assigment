
const OneBookDetails = () => {
    return (
        <div>
            <div className="mt-16">
                <div className="hero">
                    <div className="hero-content flex-col lg:flex-row gap-12">
                        <img src="https://i.ibb.co/MhS4T7X/kindpng-7318921-1.png" className="w-[425px] lg:h-[550px] h-[500px] bg-[#1313130D] p-[74px] rounded-2xl" />
                        <div>
                            <h1 className="text-5xl font-bold"><span>The Catcher in the Rye</span></h1>
                               <hr className="border border-1 border-[#13131326] mt-5"></hr>
                            <h1 className="text-[#131313CC] font-medium text-xl mt-5">Fiction</h1>
                            <hr className="border border-1 border-[#13131326] mt-5"></hr>

                            <p className="py-6 text-base text-[#131313B3] font-normal"><span className="text-[#131313] font-bold">Review :</span>  Sit amet consectetur. Interdum porta pulvinar non sit aliquam. Aenean pulvinar blandit vel non enim elementum penatibus pellentesque ac. Nec accumsan euismod nulla adipiscing lectus. Morbi elementum a auctor erat diam tellus. Fermentum faucibus nulla enim ornare.
                                Id neque neque pretium enim platea urna non dictum. Faucibus dignissim ridiculus nibh tristique massa non.</p>
                            <div className="flex gap-3">
                                <p className="text-[#131313] text-base font-bold py-2 px-4"><span>Tag</span></p>
                                <p className="text-[#23BE0A] text-base font-medium bg-[#23BE0A0D] rounded-full py-2 px-4"><span>sadasf </span></p>
                                <p className="text-[#23BE0A] text-base font-medium bg-[#23BE0A0D] rounded-full py-2 px-4"><span> afafa</span></p>
                            </div>
                            <hr className="border border-1 border-[#13131326] mt-5"></hr>
                            <div className="mt-6 flex gap-16">
                                <div className="">
                                    <p className="text-base font-normal text-[#131313B3]">Number of Pages:</p>
                                    <p className="text-base font-normal text-[#131313B3] mt-3">Publisher:</p>
                                    <p className="text-base font-normal text-[#131313B3] mt-3">Year of Publishing:</p>
                                    <p className="text-base font-normal text-[#131313B3] mt-3">Rating:</p>
                                </div>
                                <div>
                                    <p className="text-base font-semibold text-[#131313]">281</p>
                                    <p className="text-base font-semibold text-[#131313] mt-3">J.B Lippincott & Co.</p>
                                    <p className="text-base font-semibold text-[#131313] mt-3">1960</p>
                                    <p className="text-base font-semibold text-[#131313] mt-3">4.8</p>
                                </div>
                            </div>
                            <div className="mt-8 flex gap-4">
                                <button className="btn bg-white text-lg text-[#131313] font-semibold border border-1 border-[#1313134D]">Read</button>
                                <button className="btn bg-[#50B1C9] text-lg text-white font-semibold border-none">Wishlist</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OneBookDetails;