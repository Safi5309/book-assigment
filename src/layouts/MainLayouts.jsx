import '../App.css'
import { Outlet } from 'react-router-dom';
import Navbar from '../component/Navbar';

const MainLayouts = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayouts;