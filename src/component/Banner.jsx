import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div className="mt-[50px]">
            <div className="hero min-h-[600px] rounded-3xl" style={{ backgroundImage: 'url(https://i.ibb.co/mSHrQb6/Rectangle-1-1.png)' }}>
                <div className="hero-content flex-col lg:flex-row-reverse lg:px-[120px] ">
                    <img src="https://i.ibb.co/2Sk72CF/pngwing-1-removebg-preview.png" className="max-w-sm rounded-lg " />
                    <div className="lg:text-start text-center">
                        <h1 className="text-5xl lg:text-6xl font-bold   lg:leading-snug">Books to freshen up your bookshelf</h1>
                        <Link to={'/bookdetails/0'}><button className="btn bg-[#23BE0A] text-white font-bold text-xl mt-12 mb-12 ">View The List</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
