import { IoLocationOutline } from "react-icons/io5";
import { BsPeople } from "react-icons/bs";
import { TbPageBreak } from "react-icons/tb";
const BookDetails = () => {

  return (
    <div className="mt-9">
      <div className="min-w-full bg-[#1313130D] text-center py-9 rounded-2xl">
        <h3 className="text-[#131313] text-3xl font-bold">Books</h3>
      </div>
      <div className="min-w-full flex justify-center mt-8">
        <select className="select bg-[#23BE0A] text-white text-lg font-semibold border-none">
          <option><span className="">Sort By</span></option>
          <option>Rating</option>
          <option>Number of pages</option>
          <option>Publisher year</option>
        </select>
      </div>
      <div className="mt-14">
        <div role="tablist" className="tabs tabs-lifted">
          <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Read Books" />
          <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
            <div className="min-w-full border border-1 border-[#13131326] rounded-2xl flex gap-6">
              <div className="bg-[#1313130D]   m-6 rounded-2xl">
                <img className="m-12" src="https://i.ibb.co/MhS4T7X/kindpng-7318921-1.png" alt="" />
              </div>
              <div className="m-6">
                <p className="text-[#131313] font-bold text-2xl ">The Catcher in the Rye</p>
                <h1 className="text-[#131313CC] font-medium text-xl mt-5">By :<span> Awlad Hossain</span></h1>
                <div className="flex gap-3 mt-4">
                  <p className="text-[#131313] text-base font-bold py-2">Tag</p>
                  <p className="text-[#23BE0A] text-base font-medium bg-[#23BE0A0D] rounded-full py-2 px-4"><span>sadasf </span></p>
                  <p className="text-[#23BE0A] text-base font-medium bg-[#23BE0A0D] rounded-full py-2 px-4"><span> afafa</span></p>
                  <p className="text-[#131313CC] font-normal text-base flex justify-center items-center gap-3 "><IoLocationOutline></IoLocationOutline>Year of Publishing: <span>1924</span></p>
                </div>
                <div className="flex gap-5 mt-4">
                  <p className="text-[#13131399] text-base font-normal flex justify-center items-center gap-1"><BsPeople />Publisher: Scribner</p>
                  <p className="text-[#13131399] text-base font-normal flex justify-center items-center gap-1"><TbPageBreak />Page <span>192</span></p>
                </div>
                <hr className="border border-1 border-[#13131326] mt-4 min-w-full"></hr>
                <div className="flex gap-3 mt-4">
                  <p className="bg-[#328EFF26] text-[#328EFF] text-base font-normal py-3 px-5 rounded-full">Category: <span>Classic</span></p>
                  <p className="bg-[#FFAC3326] text-[#FFAC33] text-base font-normal py-3 px-5 rounded-full">Rating: <span>4.5</span></p>
                  <button className="btn bg-[#23BE0A] text-[#FFFFFF] text-base font-normal rounded-full">View Details</button>
                </div>
              </div>
            </div>
          </div>

          <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Wishlist Books" checked />
          <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">Tab content 2</div>


        </div>
      </div>
    </div>
  );
}

export default BookDetails;