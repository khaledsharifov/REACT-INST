import React from "react";

import profile from "../../assets/profile.jpg";
import cam from "../../assets/cam.jpg";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AppsIcon from "@mui/icons-material/Apps";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="lg:ml-[16%] overflow-hidden sm:pt-6 lg:pt-0">
      <div className="container m-[0_auto]">
        <div className="lg:w-[75%] sm:w-[90%] m-auto">
          <div className=" border-b py-[40px] w-[100%] ">
            <div className="flex items-center justify-center lg:pr-[100px] sm:pr-0 sm:gap-4 lg:gap-[100px] ">
              <img
                src={profile}
                alt=""
                className=" lg:w-[160px] lg:h-[160px]  sm:w-[60px] sm:h-[60px] rounded-[50%]"
              />
              <div>
                <div className="flex items-center gap-6">
                  <p className="text-[24px] sm:hidden lg:block">sharif_10021</p>
                  <Link to={"/editProfile"}>
                  <button className="bg-[#eaeaea] px-4 py-1 rounded-[6px]  sm:hidden lg:block">
                    Edit profile
                  </button>
                  </Link>
                  <div className=" sm:hidden lg:block">
                  <SettingsOutlinedIcon sx={{ fontSize: "30px" }} />
                  </div>
                </div>
                <div className="flex items-center sm:gap-4 lg:gap-8 py-4">
                  <p>0 posts</p>
                  <p>12 followers</p>
                  <p>223 following</p>
                </div>
                <p className="lg:block sm:hidden">sharif</p>

              </div>
            </div>
                <Link to={"/layout/editProfile"}>
                  <button className="bg-[#eaeaea] w-[100%] mt-8 px-4 py-1 rounded-[6px]  lg:hidden">
                    Edit profile
                  </button>
                  </Link>
          </div>

          <div className="flex gap-10 justify-center py-4 text-[13px]">
            <p className="flex items-center gap-1 ">
              <AppsIcon sx={{ fontSize: "16px" }} /> POSTS
            </p>
            <p className="flex items-center gap-1 ">
              <BookmarkBorderIcon sx={{ fontSize: "16px" }} /> SAVED
            </p>
            <p className="flex items-center gap-1 ">
              <AccountBoxIcon sx={{ fontSize: "16px" }} /> TAGGED
            </p>
          </div>

          <div className="text-center py-[50px]">
            <img src={cam} alt="" className="m-auto w-[80px]" />
            <p className="text-[30px] font-[800] py-2">Share Photos</p>
            <p>When you share photos, they will appear on your profile.</p>
            <p className="pt-6 font-[600] text-[#7593ff]">
              Share your first photo
            </p>
          </div>

          <div className="py-[40px]">
            <p className="text-center text-[13px] text-[#878787]">
              Meta  &nbsp;  About &nbsp; Blog &nbsp;  Jobs  &nbsp; Help &nbsp;  API &nbsp;  Privacy  &nbsp; Terms  &nbsp; Top Accounts &nbsp;  Locations
              &nbsp;  Instagram  &nbsp; Lite  &nbsp; Threads  &nbsp; Contact Uploading & Non-Users &nbsp;  Meta Verified
            </p>
            <div className="flex items-center gap-4  justify-center pt-4 text-[13px] text-[#878787]">
              <select name="" id="">
                <option value="">English</option>
                <option value="">Russia</option>
              </select>
            <p>© 2023 Instagram from Meta</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
