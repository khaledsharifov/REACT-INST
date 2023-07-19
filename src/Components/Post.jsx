import React, { useState } from "react";
import profile from "../assets/profile.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/uspekh.jpg";
import FiberManualRecordRoundedIcon from "@mui/icons-material/FiberManualRecordRounded";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import SendIcon from "@mui/icons-material/Send";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import ModalPost from "./ModalPost";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";

import msgg from "../assets/mess.svg";
import share from "../assets/share.svg";
import { Avatar, Checkbox } from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { getToken } from "../utils/axiosRequest";

export default function Post({
  id,
  img,
  desc,
  likes,
  comments,
  toggleLike,
  likedBy,
  addComment,
  users,
}) {
  const [comment, setComment] = useState("");
  return (
    <div className="lg:w-[60%] sm:w-[90%] m-auto">
      <div className="flex items-center justify-between ">
        <div className="flex items-center gap-2 ">
          <img
            src={`${import.meta.env.VITE_APP_FILES_URL}${img[1].src}`}
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
        <ModalPost />
      </div>

      <img
        src={`${import.meta.env.VITE_APP_FILES_URL}${img[1].src}`}
        alt=""
        className="w-[100%] py-3"
      />

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
          <Checkbox
            icon={<FavoriteBorder />}
            onClick={toggleLike}
            checked={likedBy?.includes(+getToken()?.sub)}
            checkedIcon={<Favorite />}
          />
          <p>{likes} likes</p>
        </div>

        <p>
          <span className="font-[600]">Zakon_Uspexa</span> <span>{desc}</span>
        </p>
        {comments?.length > 0
          ? comments.map((elem) => {
              return (
                <p
                  key={elem.userId}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 5,
                    m: 5,
                  }}
                >
                  <Avatar>
                    {users?.find((user) => user.id === elem.userId)?.name[0]}
                  </Avatar>
                  {elem.comment}
                </p>
              );
            })
          : null}
        <p>....</p>
        <p className="text-[#7d7d7d] py-1">more</p>
        <p className="text-[#7d7d7d] py-1">
          Viev all {comments?.length} comments
        </p>
        <div className="flex">
          <Input
            placeholder="Add a comment...."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="w-[100%]"
          />
          <Button variant="text" onClick={() => addComment(id, comment)}>
            Post
          </Button>
        </div>
        <hr className="my-6 bg-[#a7a7a7] h-[2px]" />
      </div>
    </div>
  );
}
