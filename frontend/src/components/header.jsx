import React, { useContext, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import Logo from '../assets/logoMain.png';
import NotiBell from '../assets/Bell_pin.png';
import UserImg from '../assets/User_cicrle.png';

function Header() {
    const navigate = useNavigate();
    const location = useLocation();
    const path = location.pathname;
    const { email } = useContext(AuthContext);
    const [showDialog, setShowDialog] = useState(false);

    const title = path.includes('admin/dashboard/govscheme')
    ? 'Schemes'
    : path.includes('admin/dashboard')
        ? 'Dashboard'
        : path.includes('report')
            ? 'Report'
            : path.includes('alert')
                ? 'Alerts'
                : path.includes('staff')
                    ? 'Staff'
                    : '';


    function handleClick() {
        navigate('/admin/dashboard');
    }

    function toggleDialog() {
        setShowDialog(prev => !prev);
    }

    return (
        <div className='mt-6 mb-12 mx-10 relative'>
            <ul className='flex justify-between items-center'>
                <li>
                    <img src={Logo} alt="Logo" className="w-16 h-16 object-contain cursor-pointer" onClick={handleClick}/>
                </li>
                <li className='text-xl font-bold font-sans mt-4'>
                    {title}
                </li>
                <li className='mt-4'>
                    <input type="text" placeholder='Search' className='p-1 bg-[#3A81F114] text-slate-900 pl-3 pr-20 rounded-3xl'/>
                </li>
                <li className='relative'>
                    <img
                        src={NotiBell}
                        alt="Notification Bell"
                        className="w-8 h-8 object-contain cursor-pointer mt-4"
                        onClick={toggleDialog}
                    />
                    {showDialog && (
                        <div
                            className="absolute left-[-8.6vw] top-12 w-[20vw] h-[40vh] p-4 z-10"
                            style={{

                                filter: 'drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.3))'
                            }}
                        >
                            <div
                                className="w-full h-full p-4 bg-white rounded-xl"
                                style={{
                                    clipPath: 'polygon(50% 0%, 100% 6%, 100% 100%, 0% 100%, 0 6%)'
                                }}
                            >
                                <p className="text-sm text-center font-medium">Notifications</p>
                               
                                
                            </div>
                        </div>
                    )}
                </li>
                <li className='flex'>
                    <img src={UserImg} alt="User Profile" className="w-8 h-8 object-contain cursor-pointer mt-4" />
                    <span className='mt-3 font-semibold p-2'>{email}</span>
                </li>
            </ul>
        </div>
    );
}

export default Header;
