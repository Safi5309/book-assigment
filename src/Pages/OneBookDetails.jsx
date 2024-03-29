
import {useParams } from "react-router-dom";
import { toast } from "react-toastify";
import data from "../Data/Data"
const OneBookDetails = () => {
    const {id} = useParams();
    console.log(id);
    const book = data?.find(item => item.bookId === parseInt(id));

    const handleReadClick = () => {
        // Get the array of read books from local storage
        let readBooks = JSON.parse(localStorage.getItem('read')) || [];
        // Add the current book to the array if it's not already there
        if (!readBooks.find(bookItem => bookItem.bookId === book.bookId)) {
            readBooks.push(book);
            // Update local storage
            localStorage.setItem('read', JSON.stringify(readBooks));
            toast.success("Successfully added to Read List");
        } else {
            toast.warning("This book is already in your Read List");
        }
    };

    const handleWishlistClick = () => {
        // Get the array of wishlisted books from local storage
        let wishlistedBooks = JSON.parse(localStorage.getItem('wish')) || [];
        let readBooks = JSON.parse(localStorage.getItem('read')) || [];
        if (readBooks.find(bookItem => bookItem.bookId === book.bookId)) {
            toast.warning("already in read list")
        }
        // Add the current book to the array if it's not already there
        else if (!wishlistedBooks.find(bookItem => bookItem.bookId === book.bookId)) {
            wishlistedBooks.push(book);
            // Update local storage
            localStorage.setItem('wish', JSON.stringify(wishlistedBooks));
            toast.success("Successfully added to Wishlist");
        } else {
            toast.warning("This book is already in your Wishlist");
        }
    };

    return (
        <div>
            <div className="mt-16">
                <div className="hero">
                    <div className="hero-content flex-col lg:flex-row gap-12">
                        <img src={book?.image} className="w-[425px] lg:h-[550px] h-[500px] bg-[#1313130D] p-[74px] rounded-2xl" />
                        <div>
                            <h1 className="text-5xl font-bold"><span></span></h1>
                            <hr className="border border-1 border-[#13131326] mt-5"></hr>
                            <h1 className="text-[#131313CC] font-medium text-xl mt-5">{book?.bookName}</h1>
                            <hr className="border border-1 border-[#13131326] mt-5"></hr>

                            <p className="py-6 text-base text-[#131313B3] font-normal"><span className="text-[#131313] font-bold">Review: </span>{book?.review}</p>
                            <div className="flex gap-3">
                                <p className="text-[#131313] text-base font-bold py-2 px-4"><span>Tag</span></p>
                                {book?.tags && book.tags.length >= 1 && (
                                    <p className="text-[#23BE0A] text-base font-medium bg-[#23BE0A0D] rounded-full py-2 px-4"><span>{book.tags[0]}</span></p>
                                )}
                                {book?.tags && book.tags.length >= 2 && (
                                    <p className="text-[#23BE0A] text-base font-medium bg-[#23BE0A0D] rounded-full py-2 px-4"><span>{book.tags[1]}</span></p>
                                )}
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
                                    <p className="text-base font-semibold text-[#131313]">{book?.totalPages}</p>
                                    <p className="text-base font-semibold text-[#131313] mt-3">{book?.publisher}</p>
                                    <p className="text-base font-semibold text-[#131313] mt-3">{book?.yearOfPublishing}</p>
                                    <p className="text-base font-semibold text-[#131313] mt-3">{book?.rating}</p>
                                </div>
                            </div>
                            <div className="mt-8 flex gap-4">
                                <button className="btn bg-white text-lg text-[#131313] font-semibold border border-1 border-[#1313134D]" onClick={handleReadClick}>Read</button>

                                <button className="btn bg-[#50B1C9] text-lg text-white font-semibold border-none" onClick={handleWishlistClick}>Wishlist</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OneBookDetails;
