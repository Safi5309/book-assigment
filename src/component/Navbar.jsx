import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 flex justify-between">
                <div>
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm text-[#150B2BB3] font-normal text-base dropdown-content mt-3 z-[1] lg:p-2 shadow bg-base-100 rounded-box w-52">
                        <NavLink to='/' className={({isActive}) => isActive? 'text-[#23BE0A]' : 'font-bold'}> <li><button>Home</button></li></NavLink>
                        <NavLink to='/bookdetails/0' className={({isActive}) => isActive? 'text-[#23BE0A]' : 'font-bold'}> <li><button>Listed Books</button></li></NavLink>
                        <NavLink to='/chart' className={({isActive}) => isActive? 'text-[#23BE0A]' : 'font-bold'}> <li><button>Pages to Read</button></li></NavLink>
                        <NavLink to='/bookCover' className={({isActive}) => isActive? 'text-[#23BE0A]' : 'font-bold'}> <li><button>Book Cover</button></li></NavLink>
                        <NavLink to='/contact' className={({isActive}) => isActive? 'text-[#23BE0A]' : 'font-bold'}> <li><button>Contact</button></li></NavLink>
                        
                        </ul>

                    </div>
                    <a className="lg:text-2xl text-2xl font-bold">Book Vibe</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex gap-11 text-[#150B2BB3] font-semibold text-base">
                        <NavLink to='/' className={({isActive}) => isActive? 'text-[#23BE0A]' : 'font-bold'}> <li><button>Home</button></li></NavLink>
                        <NavLink to='/bookdetails/0' className={({isActive}) => isActive? 'text-[#23BE0A]' : 'font-bold'}> <li><button>Listed Books</button></li></NavLink>
                        <NavLink to='/chart' className={({isActive}) => isActive? 'text-[#23BE0A]' : 'font-bold'}> <li><button>Pages to Read</button></li></NavLink>
                        <NavLink to='/bookCover' className={({isActive}) => isActive? 'text-[#23BE0A]' : 'font-bold'}> <li><button>Book Cover</button></li></NavLink>
                        <NavLink to='/contact' className={({isActive}) => isActive? 'text-[#23BE0A]' : 'font-bold'}> <li><button>Contact</button></li></NavLink>

                    </ul>
                </div>
                <div className="gap-1">
                    <button className="btn bg-[#23BE0A] text-white text-base font-semibold" >Sign In</button>
                    <button className="btn bg-[#59C6D2] text-white text-base font-semibold">Sign Up</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;