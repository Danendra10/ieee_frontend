import { react } from "../assets";
import { Link } from "react-router-dom";

interface sidebarProperties {
    logo: string;
    isOpen: boolean;
}

function Sidebar({ isOpen, logo }: sidebarProperties) {
    return (
        <aside className={`flex flex-col w-64 h-screen px-5 py-8 overflow-y-auto bg-gradient-to-r from-slate-500 to-slate-800 rtl:border-r-0 rtl:border-l z-30 ${isOpen ? 'absolute' : 'hidden'}`}>
            <img className="w-30" src={logo} alt="" />

            <div className="flex flex-col justify-between flex-1 mt-6">
                <nav className="-mx-3 space-y-6 ">
                    <div className="space-y-3 ">
                        <label className="px-3 text-xs text-white font-bold uppercase ">Compound</label>
                        <Link to="/" className="flex items-center px-3 py-2 text-white transition-colors duration-300 transform 
                                    rounded-lg hover:text-gray-700">
                            <img src={react} alt="" className="max-w-[18px]" />
                            <span className="mx-2 text-sm font-medium">Carbon Monoxide (CO)</span>
                        </Link>
                        <Link className="flex items-center px-3 py-2 text-white transition-colors duration-300 transform 
                                    rounded-lg hover:text-gray-700" to="/carbon-dioxide">
                            <img src={react} alt="" className="max-w-[18px]" />

                            <span className="mx-2 text-sm font-medium">Carbon Dioxide (CO<span className="text-[8px] text-end">2</span>)</span>
                        </Link>

                        <Link className="flex items-center px-3 py-2 text-white transition-colors duration-300 transform 
                                    rounded-lg hover:text-gray-700" to="/azane">
                            <img src={react} alt="" className="max-w-[18px]" />

                            <span className="mx-2 text-sm font-medium">Azane (NH<span className="text-[8px] text-end">3</span>)</span>
                        </Link>

                        <Link className="flex items-center px-3 py-2 text-white transition-colors duration-300 transform 
                                    rounded-lg hover:text-gray-700" to="/methana">
                            <img src={react} alt="" className="max-w-[18px]" />

                            <span className="mx-2 text-sm font-medium">Methana (NH<span className="text-[8px] text-end">4</span>)</span>
                        </Link>

                        <Link className="flex items-center px-3 py-2 text-white transition-colors duration-300 transform 
                                    rounded-lg hover:text-gray-700" to='/ozon'>
                            <img src={react} alt="" className="max-w-[18px]" />

                            <span className="mx-2 text-sm font-medium">Ozon (O<span className="text-[8px] text-end">4</span>)</span>
                        </Link>
                    </div>
                </nav>
            </div>
        </aside>
    );
}

export default Sidebar;