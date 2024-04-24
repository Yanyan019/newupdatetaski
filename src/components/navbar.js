import React from 'react';
import { Link } from 'react-router-dom';
import { BsHouseDoor, BsCup, BsBag, BsBoxArrowRight } from 'react-icons/bs'; 
/* import { useNavigate } from 'react-router-dom'; */
import './navbar.css';

function Navbar() {
  return (
        <div className="Navbar">
                <div className="flex flex-col w-56 h-screen bg-white overflow-hidden">
                    <div className="flex items-center justify-center h-16 logo-container pt-10" >
                        <h1 className="text-2xl">Taskify</h1>
                    </div>
                    <ul className="nav">
                        <li>
                            <Link to="/Home" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><BsHouseDoor /></span>
                            <span className="text-sm font-medium">Overview</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/Task" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><BsHouseDoor /></span>
                            <span className="text-sm font-medium">My Task</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/theme" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><BsCup /></span>
                            <span className="text-sm font-medium">Theme</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/calendars" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><BsBag /></span>
                            <span className="text-sm font-medium">Calendar</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/analytics" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><BsBag /></span>
                            <span className="text-sm font-medium">Analytics</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><BsBoxArrowRight /></span> 
                                <button>Logout</button>
                            </Link>
                        </li>
                    </ul>
                </div>
        </div>
  )
}

export default Navbar;