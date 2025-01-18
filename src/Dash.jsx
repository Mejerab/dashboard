import { AiOutlineStock } from "react-icons/ai";
import { BsBank2 } from "react-icons/bs";
import { CiTextAlignLeft } from "react-icons/ci";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { FaClipboardUser, FaMapLocationDot } from "react-icons/fa6";
import { GiHanger } from "react-icons/gi";
import { GoFileDirectoryFill } from "react-icons/go";
import { HiChatBubbleLeftRight } from "react-icons/hi2";
import { IoIosMailOpen } from "react-icons/io";
import { IoBag, IoCalendarSharp } from "react-icons/io5";
import { MdInsertDriveFile, MdOutlineSpeed } from "react-icons/md";
import { PiSuitcaseSimpleFill } from "react-icons/pi";
import { RiArrowDropRightLine, RiShoppingCartFill } from "react-icons/ri";
import { TbGolfFilled } from "react-icons/tb";

const Dash = () => {
    return (
        <div className="w-72 border-r pr-4 border-[#2727271A] font h-screen">
            <h5 className="uppercase text-sm font-bold text-[#b1b5b8] font">overview</h5>
            <div className="mt-2 space-y-0.5">
                <button className="btn w-full tra justify-start bg-transparent shadow-none hover:bg-[#d9f5e7] border-0 hover:text-[#00a86f] text-[#909397] font-semibold items-center gap-x-5"><MdOutlineSpeed className="text-xl" />App</button>
                <button className="btn w-full tra justify-start bg-transparent shadow-none hover:bg-[#d9f5e7] border-0 hover:text-[#00a86f] text-[#909397] font-semibold items-center gap-x-5"><IoBag className="text-xl" />E-Commerce</button>
                <button className="btn w-full tra justify-start bg-transparent shadow-none hover:bg-[#d9f5e7] border-0 hover:text-[#00a86f] text-[#909397] font-semibold items-center gap-x-5"><AiOutlineStock className="text-xl" />Analytics</button>
                <button className="btn w-full tra justify-start bg-transparent shadow-none hover:bg-[#d9f5e7] border-0 hover:text-[#00a86f] text-[#909397] font-semibold items-center gap-x-5"><BsBank2 className="text-xl" />Banking</button>
                <button className="btn w-full tra justify-start bg-transparent shadow-none hover:bg-[#d9f5e7] border-0 hover:text-[#00a86f] text-[#909397] font-semibold items-center gap-x-5"><FaMapLocationDot className="text-xl" />Booking</button>
                <button className="btn w-full tra justify-start bg-transparent shadow-none hover:bg-[#d9f5e7] border-0 hover:text-[#00a86f] text-[#909397] font-semibold items-center gap-x-5"><MdInsertDriveFile className="text-xl" />File</button>
            </div>
            <div className="mt-3 space-y-0.5">
                <h5 className="uppercase text-sm font-bold text-[#b1b5b8] font">management</h5>
                <button className="btn w-full tra justify-between bg-transparent shadow-none hover:bg-[#d9f5e7] border-0 hover:text-[#00a86f] text-[#909397] font-semibold items-center"><span className="flex gap-x-5 items-center"><FaClipboardUser className="text-xl -mt-1" />User</span><RiArrowDropRightLine className="text-xl" /></button>
                <button className="btn w-full tra justify-between bg-transparent shadow-none hover:bg-[#d9f5e7] border-0 hover:text-[#00a86f] text-[#909397] font-semibold items-center"><span className="flex gap-x-5 items-center"><GiHanger className="text-xl -mt-1" />Product</span><RiArrowDropRightLine className="text-xl" /></button>
                <button className="btn w-full tra justify-between bg-transparent shadow-none hover:bg-[#d9f5e7] border-0 hover:text-[#00a86f] text-[#909397] font-semibold items-center"><span className="flex gap-x-5 items-center"><RiShoppingCartFill className="text-xl -mt-1" />Order</span><RiArrowDropRightLine className="text-xl" /></button>
                <button className="btn w-full tra justify-between bg-transparent shadow-none hover:bg-[#d9f5e7] border-0 hover:text-[#00a86f] text-[#909397] font-semibold items-center"><span className="flex gap-x-5 items-center"><FaFileInvoiceDollar className="text-xl -mt-1" />Invoice</span><RiArrowDropRightLine className="text-xl" /></button>
                <button className="btn w-full tra justify-between bg-transparent shadow-none hover:bg-[#d9f5e7] border-0 hover:text-[#00a86f] text-[#909397] font-semibold items-center"><span className="flex gap-x-5 items-center"><CiTextAlignLeft className="text-xl -mt-1" />Blog</span><RiArrowDropRightLine className="text-xl" /></button>
                <button className="btn w-full tra justify-between bg-transparent shadow-none hover:bg-[#d9f5e7] border-0 hover:text-[#00a86f] text-[#909397] font-semibold items-center"><span className="flex gap-x-5 items-center"><PiSuitcaseSimpleFill className="text-xl -mt-1" />Job</span><RiArrowDropRightLine className="text-xl" /></button>
                <button className="btn w-full tra justify-between bg-transparent shadow-none hover:bg-[#d9f5e7] border-0 hover:text-[#00a86f] text-[#909397] font-semibold items-center"><span className="flex gap-x-5 items-center"><TbGolfFilled className="text-xl -mt-1" />Tour</span><RiArrowDropRightLine className="text-xl" /></button>
                <button className="btn w-full tra justify-start bg-transparent shadow-none hover:bg-[#d9f5e7] border-0 hover:text-[#00a86f] text-[#909397] font-semibold items-center gap-x-5"><GoFileDirectoryFill className="text-xl" />File Manager</button>
                <button className="btn w-full tra bg-transparent shadow-none hover:bg-[#d9f5e7] border-0 hover:text-[#00a86f] text-[#909397] justify-between font-semibold items-center gap-x-5"><span className="flex items-center gap-x-5"><IoIosMailOpen className="text-xl" />Mail</span>
                    <p className="p-1 bg-[#ca67684D] text-[#ca6768] font-black text-[12px] rounded-lg">+32</p>
                </button>
                <button className="btn w-full tra justify-start bg-transparent shadow-none hover:bg-[#d9f5e7] border-0 hover:text-[#00a86f] text-[#909397] font-semibold items-center gap-x-5"><HiChatBubbleLeftRight className="text-xl" />Chat</button>
                <button className="btn w-full tra justify-start bg-transparent shadow-none hover:bg-[#d9f5e7] border-0 hover:text-[#00a86f] text-[#909397] font-semibold items-center gap-x-5"><IoCalendarSharp className="text-xl" />Calendar</button>
            </div>
        </div>
    );
};

export default Dash;