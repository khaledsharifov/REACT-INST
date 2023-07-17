import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";

import { Outlet, Link, useLocation } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import profile from "../../assets/profile.jpg";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import SendIcon from "@mui/icons-material/Send";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import InstagramIcon from "@mui/icons-material/Instagram";

import share from "../../assets/share.svg"
import home1 from "../../assets/home1.svg"
import exp from "../../assets/exp.svg"

import List from "@mui/material/List";

import SearchIcon from "@mui/icons-material/Search";

export default function SideBar() {
  const [state, setState] = React.useState(false);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 450,
        overflow: "hidden",
        display: "flex",
      }}
      role="presentation"
      //   onClick={toggleDrawer(anchor, true)}
      //   onKeyDown={toggleDrawer(anchor, false)}
    >
      <List className="m-0 border-r">
        <div className="w-[100%] px-2  h-[100vh]  m-auto ">
          <div className=" py-[10px] rounded-[12px] px-3 cursor-pointer hover:bg-[#eee] mt-[15px] mb-[25px] text-[15px]">
            <InstagramIcon sx={{ fontSize: "30px" }} />
          </div>
          <ul className="m-0">
            <Link to={"/layout"}>
              <li className="flex items-center gap-4 py-[10px] rounded-[12px] px-3 cursor-pointer hover:bg-[#eee] my-[6px] text-[15px]">
                {/* <HomeIcon sx={{ fontSize: "30px" }} />{" "} */}
                <img src={home1} alt="" className="w-[85%] m-auto"/> 
              </li>
            </Link>
            <li className="flex items-center gap-4 py-[10px] rounded-[12px] px-3 cursor-pointer hover:bg-[#eee] my-[6px] text-[15px]">
              <SearchIcon sx={{ fontSize: "30px" }} />
            </li>
            <li className=" py-[10px] rounded-[12px] px-3 cursor-pointer hover:bg-[#eee] my-[6px] text-[15px]">
              {/* <ExploreIcon sx={{ fontSize: "30px" }} /> */}
              <img src={exp} alt=""  className="m-auto w-[90%]"/>
            </li>
            <li className=" py-[10px] rounded-[12px] px-3 cursor-pointer hover:bg-[#eee] my-[6px] text-[15px]">
              <OndemandVideoIcon sx={{ fontSize: "30px" }} />
            </li>
            <li className=" py-[10px] rounded-[12px] px-3 cursor-pointer hover:bg-[#eee] my-[6px] text-[15px]">
              {/* <SendIcon sx={{ fontSize: "30px" }} /> */}
              <img src={share} alt="" className="m-auto w-[90%]"/>
            </li>
            <li className=" py-[10px] rounded-[12px] px-3 cursor-pointer hover:bg-[#eee] my-[6px] text-[15px]">
              <FavoriteBorderIcon sx={{ fontSize: "30px" }} />
            </li>
            <li className=" py-[10px] rounded-[12px] px-3 cursor-pointer hover:bg-[#eee] my-[6px] text-[15px]">
              <AddBoxOutlinedIcon sx={{ fontSize: "30px" }} />
            </li>
            <Link to={"profile"}>
              <li className=" py-[12px] rounded-[12px] px-3 cursor-pointer hover:bg-[#eee] my-[6px] text-[15px]">
                <img
                  src={profile}
                  alt=""
                  className="w-[25px] m-auto h-[25px] rounded-[50px]"
                />
              </li>
            </Link>
          </ul>
          <div className=" py-[12px] mt-[80px] rounded-[12px] px-3 cursor-pointer hover:bg-[#eee] my-[6px] text-[15px]">
            <MenuRoundedIcon sx={{ fontSize: "30px" }} />{" "}
          </div>
        </div>
      </List>

      <List sx={{ width: "100%" }}>
        <div className="border-b pb-[25px]">
          <div className="w-[90%] m-auto">
            <div className="flex justify-between items-center">
              <p className="text-[25px] font-[600] pt-4 pb-8">Search</p>
              <div className="pt-4 pb-8">
                <CloseIcon onClick={()=>setState(false)} className=" cursor-pointer text-[#707070] hover:text-[#000]"/>
              </div>
            </div>
            <div className=" relative">
              <input
                type="text"
                placeholder="Search"
                className="bg-[#EFEFEF] w-[100%] pl-10 py-[10px] rounded-[7px]"
              />
              <div className=" absolute top-[10px] left-2 text-[#969696]">
                <SearchIcon />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between w-[90%] m-auto py-5">
          <p className="font-[600]">Resent</p>
          <p className="text-[#0095F6]">Clear all</p>
        </div>
      </List>
    </Box>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <li
            onClick={toggleDrawer(anchor, true)}
            className="flex items-center gap-4 py-[10px] rounded-[12px] px-3 cursor-pointer hover:bg-[#eee] my-[6px] text-[15px]"
          >
            <SearchIcon sx={{ fontSize: "30px" }} />
            Search
          </li>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
