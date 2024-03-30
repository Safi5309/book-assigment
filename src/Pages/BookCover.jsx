import { useEffect, useState } from 'react';
import { CiStar } from 'react-icons/ci';
import { Link } from 'react-router-dom';

const BookCover = () => {
    const [data, setData] = useState([]);

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
                <h3 className="text-[#131313] text-4xl font-bold text-center mb-10">Author Name List</h3>
                <div className="grid lg:grid-cols-3 grid-cols-1 gap-6">
                    {data?.map((item, index) => (
                        <Link to={`/book/${item.bookId}`} key={index}>
                            <div className="border border-1 rounded-2xl hover:bg-slate-500 hover:border-[#59C6D2] hover:border-2 ">
                                <p className="text-base font-medium text-[#131313CC] mt-4 mb-5 text-center hover:text-white">By : <span>{item.author}</span></p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BookCover;
