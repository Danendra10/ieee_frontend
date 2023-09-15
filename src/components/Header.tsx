import React, { useState } from 'react';
import { Squash as Hamburger } from 'hamburger-react';
import Sidebar from './Sidebar';

import { ieee, its } from "../assets"

interface props {
    title: string
}
function Header(properties: props) {
    const [isOpen, setOpen] = useState(false);

    return (
        <div className='w-full h-fit'>
            <div className="relative">
                <Sidebar isOpen={isOpen} logo={its} />
                <header className="w-full bg-white text-black px-10 py-10 absolute top-0 left-0 z-10 bg-gradient-to-r from-slate-500 to-slate-800">
                    <div className="grid grid-cols-3">
                        <div>
                            <div className={`absolute top-10 col-span-1  ${isOpen ? 'z-0 left-72' : 'z-10'}`}>
                                <Hamburger
                                    rounded
                                    toggled={isOpen}
                                    toggle={setOpen}
                                    color='white'
                                />
                            </div>
                        </div>
                        <div className='text-center justify-center items-center font-bold text-3xl text-white'>
                            {properties.title}
                        </div>
                        <div className="justify-end flex space-x-10">
                            <img src={ieee} alt="" className="w-24" />
                            <img src={its} alt="" className="w-24" />
                        </div>
                    </div>
                </header>
            </div>
        </div>
    )
}

export default Header;
