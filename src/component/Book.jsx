import { useEffect, useState } from 'react';
import { CiStar } from 'react-icons/ci';
import { Link} from 'react-router-dom';

const Book = () => {
   const [data , setData]= useState([]);
   useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await fetch('data.json');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setData(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    fetchData();
}, []);


    return (
        <div>
            
                <div className="mt-24">
                    <h3 className="text-[#131313] text-4xl font-bold text-center mb-10">Books</h3>
                    <div className="grid lg:grid-cols-3 grid-cols-1 gap-6">
                        {data?.map((item, index) => (
                            <div className="p-6 border border-1 rounded-2xl" key={index}>
                                <Link to={`/book/${item.bookId}`} key={index}>
                                    <div className="bg-[#F3F3F3] p-10 mb-6 rounded-2xl">
                                        <img className="mx-auto" src={item.image} alt="" />
                                    </div>
                                    <div className="flex gap-3">
                                        <p className="text-[#23BE0A] text-base font-medium bg-[#23BE0A0D] rounded-full py-2 px-4">
                                            <span>{item.tags[0]}</span>
                                        </p>
                                        <p className="text-[#23BE0A] text-base font-medium bg-[#23BE0A0D] rounded-full py-2 px-4">
                                            <span>{item.tags[1]}</span>
                                        </p>
                                    </div>
                                    <div className="mt-4">
                                        <p className="text-[#131313] text-2xl font-bold">{item.bookName}</p>
                                        <p className="text-base font-medium text-[#131313CC] mt-4 mb-5">By : <span>{item.author}</span></p>
                                    </div>
                                    <hr className="border border-dashed border-1 border[#13131326]"></hr>
                                    <div className="mt-5 flex justify-between ">
                                        <p className="text-base font-medium text-[#131313CC]"><span>{item.category}</span></p>
                                        <p className="text-base font-medium text-[#131313CC] flex justify-center items-center gap-1">
                                            <span>{item.rating}</span> <CiStar />
                                        </p>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            
        </div>
    );
};

export default Book;
