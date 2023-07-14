import React  from 'react'
import {Outlet, Link, useLocation} from "react-router-dom"
import logo from "../assets/logo.jpg"
import profile from "../assets/profile.jpg"
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ExploreIcon from '@mui/icons-material/Explore';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import SendIcon from '@mui/icons-material/Send';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import SideBar from '../Components/SideBar/SideBar';

const Layout = () => {
  return (
    <div>
        <div className="navbar  ">

          <div className='w-[16%] px-4 border-r h-[100vh] fixed left-0 '>
            <div><img src={logo} alt=""  className='w-[110px] py-8'/></div>
            <ul className=''>
              <Link to={"/layout"}>
              <li className='flex items-center gap-4 py-[10px] rounded-[12px] px-3 cursor-pointer hover:bg-[#eee] my-[6px] text-[15px]'><HomeIcon sx={{fontSize: "30px"}}/> Home</li>
              </Link>
              <SideBar/>
              <Link to={"explore"}>
              <li className='flex items-center gap-4 py-[10px] rounded-[12px] px-3 cursor-pointer hover:bg-[#eee] my-[6px] text-[15px]'><ExploreIcon sx={{fontSize: "30px"}}/>Explore</li>
              </Link>
              <li className='flex items-center gap-4 py-[10px] rounded-[12px] px-3 cursor-pointer hover:bg-[#eee] my-[6px] text-[15px]'><OndemandVideoIcon sx={{fontSize: "30px"}}/>Reels</li>
              <li className='flex items-center gap-4 py-[10px] rounded-[12px] px-3 cursor-pointer hover:bg-[#eee] my-[6px] text-[15px]'><SendIcon sx={{fontSize: "30px"}}/>Messages</li>
              <li className='flex items-center gap-4 py-[10px] rounded-[12px] px-3 cursor-pointer hover:bg-[#eee] my-[6px] text-[15px]'><FavoriteBorderIcon sx={{fontSize: "30px"}}/>Notifications</li>
              <li className='flex items-center gap-4 py-[10px] rounded-[12px] px-3 cursor-pointer hover:bg-[#eee] my-[6px] text-[15px]'><AddBoxOutlinedIcon sx={{fontSize: "30px"}}/>Create</li>
              <Link to={"profile"}>
              <li className='flex items-center gap-4 py-[12px] rounded-[12px] px-3 cursor-pointer hover:bg-[#eee] my-[6px] text-[15px]'><img src={profile} alt="" className='w-[25px] h-[25px] rounded-[50px]' />Profile</li>
              </Link>
            </ul>
            <div className='flex items-center gap-4 py-[12px] mt-[80px] rounded-[12px] px-3 cursor-pointer hover:bg-[#eee] my-[6px] text-[15px]'><MenuRoundedIcon sx={{fontSize: "30px"}}/> More</div>
          </div>
        <Outlet/>
        </div>
    </div>
  )
}

export default Layout