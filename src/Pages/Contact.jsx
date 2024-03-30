import { FaFacebook, FaTwitter,FaInstagram } from "react-icons/fa";
const Contact = () => {
    return (
        <div>
            <div className="lg:min-w-full min-w-px bg-[#1313130D]  py-9 rounded-2xl">
                <h3 className="text-[#131313] flex justify-center items-center text-3xl font-bold min-w-full">Contact Info</h3>
            </div>
            <div className="text-center mt-5">
                <h1>Book Vibe</h1>
                <h1>Phone: 017611**</h1>
                <h1>email: @bookvibe.com</h1>
                <p>Address: Level: 14, Sattara Center 30/A VIP Road, Naya Paltan, Dhaka</p>
                <p className="mt-5 text-3xl font-bold">Social Networking</p>
                <div className="flex gap-5 justify-center items-center">
                    <FaFacebook></FaFacebook>
                    <FaTwitter></FaTwitter>
                    <FaInstagram></FaInstagram>
                    
                </div>

            </div>
        </div>
    );
};

export default Contact;