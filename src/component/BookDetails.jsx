import { useState } from 'react';
import { IoLocationOutline } from "react-icons/io5";
import { BsPeople } from "react-icons/bs";
import { TbPageBreak } from "react-icons/tb";
import { Link } from 'react-router-dom';

const BookDetails = () => {
  const [checked, setChecked] = useState(true);
  const localWishlist = JSON.parse(localStorage.getItem('wish')) || [];
  const localReadlist = JSON.parse(localStorage.getItem('read')) || [];

  const [sortedBooks, setSortedBooks] = useState([...localReadlist]); // Initially sorted by 'Read Books'
  const [sortedWish, setSortedWish] = useState([...localWishlist]); // Initially sorted by 'Read Books'

  const sortBooks = (option) => {
    let sortedArray = [];
    switch (option) {
      case 'Rating':
        sortedArray = [...sortedBooks].sort((a, b) => b.rating - a.rating);
        break;
      case 'Number of pages':
        sortedArray = [...sortedBooks].sort((a, b) => b.totalPages - a.totalPages);
        break;
      case 'Publisher year':
        sortedArray = [...sortedBooks].sort((a, b) => a.yearOfPublishing - b.yearOfPublishing);
        break;
      default:
        sortedArray = [...localReadlist]; // Default to original order
        break;
    }
    setSortedBooks(sortedArray);
  };
  const sortWish = (option) => {
    let sortedArray = [];
    switch (option) {
      case 'Rating':
        sortedArray = [...sortedWish].sort((a, b) => b.rating - a.rating);
        break;
      case 'Number of pages':
        sortedArray = [...sortedWish].sort((a, b) => b.totalPages - a.totalPages);
        break;
      case 'Publisher year':
        sortedArray = [...sortedWish].sort((a, b) => a.yearOfPublishing - b.yearOfPublishing);
        break;
      default:
        sortedArray = [...localWishlist]; // Default to original order
        break;
    }
    setSortedWish(sortedArray);
  };

  const handleChange = (event) => {
    const selectedOption = event.target.value;
    sortBooks(selectedOption);
    sortWish(selectedOption);
  };

  return (
    <div className="mt-9">
      <div className="min-w-full bg-[#1313130D] text-center py-9 rounded-2xl">
        <h3 className="text-[#131313] text-3xl font-bold">Books</h3>
      </div>
      <div className="min-w-full flex justify-center mt-8">
        <select className="select bg-[#23BE0A] text-white text-lg font-semibold border-none" onChange={handleChange}>
          <option><span className="">Sort By</span></option>
          <option>Rating</option>
          <option>Number of pages</option>
          <option>Publisher year</option>
        </select>
      </div>
      <div className="mt-14">
        <div role="tablist" className="tabs tabs-lifted">
          <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Read Books" checked={checked} onClick={() => { setChecked(true) }} />
          <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
            {sortedBooks.map((book) => (
              <div key={book.bookId} className="min-w-full border border-1 border-[#13131326] rounded-2xl flex gap-6">
                <div className="bg-[#1313130D]   m-6 rounded-2xl">
                  <img className="m-12" src={book.image} alt={book.bookName} />
                </div>
                <div className="m-6">
                  <p className="text-[#131313] font-bold text-2xl ">{book.bookName}</p>
                  <h1 className="text-[#131313CC] font-medium text-xl mt-5">By :<span> {book.author}</span></h1>
                  {/* Add other book details */}
                  <div className="flex gap-3 mt-4">
                    <p className="text-[#131313] text-base font-bold py-2">Tag</p>
                    {/* Add tags here */}
                    {book.tags.map((tag, index) => (
                      <p key={index} className="text-[#23BE0A] text-base font-medium bg-[#23BE0A0D] rounded-full py-2 px-4"><span>{tag}</span></p>
                    ))}
                    <p className="text-[#131313CC] font-normal text-base flex justify-center items-center gap-3 ">
                      <IoLocationOutline></IoLocationOutline>Year of Publishing: <span>{book.yearOfPublishing}</span>
                    </p>
                  </div>
                  {/* Add Publisher and Page details */}
                  <div className="flex gap-5 mt-4">
                    <p className="text-[#13131399] text-base font-normal flex justify-center items-center gap-1">
                      <BsPeople />Publisher: {book.publisher}
                    </p>
                    <p className="text-[#13131399] text-base font-normal flex justify-center items-center gap-1">
                      <TbPageBreak />Page <span>{book.totalPages}</span>
                    </p>
                  </div>
                  <hr className="border border-1 border-[#13131326] mt-4 min-w-full"></hr>
                  {/* Add Category, Rating, and View Details button */}
                  <div className="flex gap-3 mt-4">
                    <p className="bg-[#328EFF26] text-[#328EFF] text-base font-normal py-3 px-5 rounded-full">Category: <span>{book.category}</span></p>
                    <p className="bg-[#FFAC3326] text-[#FFAC33] text-base font-normal py-3 px-5 rounded-full">Rating: <span>{book.rating}</span></p>
                    <Link to={`/book/${book.bookId}`}>
                      <button className="btn bg-[#23BE0A] text-[#FFFFFF] text-base font-normal rounded-full">View Details</button></Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Wishlist Books" onClick={() => { setChecked(false) }} />
          <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
            {sortedWish?.map((book) => (
              <div key={book.bookId} className="min-w-full border border-1 border-[#13131326] rounded-2xl flex gap-6">
                <div className="bg-[#1313130D]   m-6 rounded-2xl">
                  <img className="m-12" src={book.image} alt={book.bookName} />
                </div>
                <div className="m-6">
                  <p className="text-[#131313] font-bold text-2xl ">{book.bookName}</p>
                  <h1 className="text-[#131313CC] font-medium text-xl mt-5">By :<span> {book.author}</span></h1>
                  {/* Add other book details */}
                  <div className="flex gap-3 mt-4">
                    <p className="text-[#131313] text-base font-bold py-2">Tag</p>
                    {/* Add tags here */}
                    {book?.tags?.map((tag, index) => (
                      <p key={index} className="text-[#23BE0A] text-base font-medium bg-[#23BE0A0D] rounded-full py-2 px-4"><span>{tag}</span></p>
                    ))}
                    <p className="text-[#131313CC] font-normal text-base flex justify-center items-center gap-3 ">
                      <IoLocationOutline></IoLocationOutline>Year of Publishing: <span>{book.yearOfPublishing}</span>
                    </p>
                  </div>
                  {/* Add Publisher and Page details */}
                  <div className="flex gap-5 mt-4">
                    <p className="text-[#13131399] text-base font-normal flex justify-center items-center gap-1">
                      <BsPeople />Publisher: {book.publisher}
                    </p>
                    <p className="text-[#13131399] text-base font-normal flex justify-center items-center gap-1">
                      <TbPageBreak />Page <span>{book.totalPages}</span>
                    </p>
                  </div>
                  <hr className="border border-1 border-[#13131326] mt-4 min-w-full"></hr>
                  {/* Add Category, Rating, and View Details button */}
                  <div className="flex gap-3 mt-4">
                    <p className="bg-[#328EFF26] text-[#328EFF] text-base font-normal py-3 px-5 rounded-full">Category: <span>{book.category}</span></p>
                    <p className="bg-[#FFAC3326] text-[#FFAC33] text-base font-normal py-3 px-5 rounded-full">Rating: <span>{book.rating}</span></p>
                    <Link to={`/book/${book.bookId}`}>
                      <button className="btn bg-[#23BE0A] text-[#FFFFFF] text-base font-normal rounded-full">View Details</button></Link>

                  </div>
                </div>
              </div>
            ))}</div>
        </div>
      </div>
    </div>
  );
}

export default BookDetails;
