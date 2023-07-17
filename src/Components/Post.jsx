import React from 'react'
import profile from "../assets/profile.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/uspekh.jpg";
import FiberManualRecordRoundedIcon from "@mui/icons-material/FiberManualRecordRounded";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import SendIcon from "@mui/icons-material/Send";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import ModalPost from './ModalPost';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';

import msgg from "../assets/mess.svg"
import share from "../assets/share.svg"


export default function Post({img, desc}) {
  return (
    <div className="lg:w-[60%] sm:w-[90%] m-auto">
    <div className="flex items-center justify-between ">
      <div className="flex items-center gap-2 ">
        <img
          src={img3}
          alt=""
          className="w-[35px] rounded-[50px] bord"
        />
        <p>
          Zakon_Uspexa{" "}
          <span className="text-[gray]">
            <FiberManualRecordRoundedIcon
              sx={{ fontSize: "6px", color: "gray" }}
            />
            2d
          </span>
        </p>
      </div>
      <ModalPost/>
    </div>

    <img src={img} alt="" className="w-[100%] py-3" />

    <div className="flex items-center justify-between">
      <div className="flex gap-4">
        <FavoriteBorderIcon sx={{ fontSize: "30px" }} />
        <img src={msgg} alt="" />
        <img src={share} alt="" />
        {/* <ModeCommentOutlinedIcon sx={{ fontSize: "30px" }} /> */}
        {/* <SendIcon sx={{ fontSize: "30px" }} /> */}
      </div>
      <BookmarkBorderOutlinedIcon sx={{ fontSize: "30px" }} />
    </div>

    <div>
      <div className="font-[600] flex items-center gap-2 py-2">
        <img
          src={img3}
          alt=""
          className="w-[15px] rounded-[50px]"
        />
        <p>175 likes</p>
      </div>

      <p>
        <span className="font-[600]">Zakon_Uspexa</span>{" "}
        <span>
          {desc}
        </span>
      </p>
      <p>....</p>
      <p className="text-[#7d7d7d] py-1">more</p>
      <p className="text-[#7d7d7d] py-1">Viev all 3 comments</p>
     <div className='flex'>
     <Input placeholder='Add a comment....'  className='w-[100%]' />
       <Button variant="text">Post</Button>
     </div>
      <hr className="my-6 bg-[#a7a7a7] h-[2px]" />
    </div>
  </div>
  )
}
