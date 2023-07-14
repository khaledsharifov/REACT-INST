import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import profile from "../../assets/profile.jpg";
import us from "../../assets/uspekh.jpg";
import History from "../../Components/History";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/uspekh.jpg";
import FiberManualRecordRoundedIcon from "@mui/icons-material/FiberManualRecordRounded";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import SendIcon from "@mui/icons-material/Send";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";

import "../../App.css";
import { Link } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="w-[100%]">
      <div className="container m-[0_auto] flex">
        <div className="w-[50%] ml-[20%]">
          <div className="flex gap-[5px] w-[80%] py-[50px] justify-between m-auto">
            <History title="sharif_khal..." img={profile}></History>
            <History title="sharifal..." img={img3}></History>
            <History title="sharif_khal..." img={profile}></History>
            <History title="sharif_khal..." img={img3}></History>
            <History title="sharif" img={profile}></History>
            <History title="sharif_khal..." img={img3}></History>
            <History title="sharikhal." img={profile}></History>
            <History title="sharif_khal." img={img3}></History>
          </div>
          <div className="w-[100%] m-auto">
            <div className="w-[60%] m-auto">
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
                <MoreHorizRoundedIcon />
              </div>

              <img src={img2} alt="" className="w-[100%] py-3" />

              <div className="flex items-center justify-between">
                <div className="flex gap-4">
                  <FavoriteBorderIcon sx={{ fontSize: "30px" }} />
                  <ModeCommentOutlinedIcon sx={{ fontSize: "30px" }} />
                  <SendIcon sx={{ fontSize: "30px" }} />
                </div>
                <BookmarkBorderOutlinedIcon sx={{ fontSize: "30px" }} />
              </div>

              <div>
                <div className="font-[600] flex items-center gap-2 py-2">
                  <img
                    src={profile}
                    alt=""
                    className="w-[15px] rounded-[50px]"
                  />
                  <p>175 likes</p>
                </div>

                <p>
                  <span className="font-[600]">Zakon_Uspexa</span>{" "}
                  <span>
                    Liquid Animation With Html Css and JavaScript With full
                    Source Code .. 🔥🔥🔥
                  </span>
                </p>
                <p>....</p>
                <p className="text-[#7d7d7d] py-1">more</p>
                <p className="text-[#7d7d7d] py-1">Viev all 3 comments</p>
                <input
                  type="text"
                  placeholder="Add a comment..."
                  className="w-[100%]"
                />
                <hr className="my-6 bg-[#a7a7a7] h-[2px]" />
              </div>
            </div>
          </div>

          <div className="w-[100%] m-auto">
            <div className="w-[60%] m-auto">
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
                <MoreHorizRoundedIcon />
              </div>

              <img src={img2} alt="" className="w-[100%] py-3" />

              <div className="flex items-center justify-between">
                <div className="flex gap-4">
                  <FavoriteBorderIcon sx={{ fontSize: "30px" }} />
                  <ModeCommentOutlinedIcon sx={{ fontSize: "30px" }} />
                  <SendIcon sx={{ fontSize: "30px" }} />
                </div>
                <BookmarkBorderOutlinedIcon sx={{ fontSize: "30px" }} />
              </div>

              <div>
                <div className="font-[600] flex items-center gap-2 py-2">
                  <img
                    src={profile}
                    alt=""
                    className="w-[15px] rounded-[50px]"
                  />
                  <p>175 likes</p>
                </div>

                <p>
                  <span className="font-[600]">Zakon_Uspexa</span>{" "}
                  <span>
                    Liquid Animation With Html Css and JavaScript With full
                    Source Code .. 🔥🔥🔥
                  </span>
                </p>
                <p>....</p>
                <p className="text-[#7d7d7d] py-1">more</p>
                <p className="text-[#7d7d7d] py-1">Viev all 3 comments</p>
                <input
                  type="text"
                  placeholder="Add a comment..."
                  className="w-[100%]"
                />
                <hr className="my-6 bg-[#a7a7a7] h-[2px]" />
              </div>
            </div>
          </div>
        </div>

        <div className="w-[30%] pr-[100px] pt-[50px]">
          <div className="px-[30px]">

            <Link to={"profile"}>
            <div className="flex justify-between items-center  w-[100%] pb-4">
              <div className="flex gap-3 items-center">
                <img
                  src={profile}
                  alt=""
                  className="w-[45px] h-[45px] rounded-[50px]"
                />
                <div>
                  <p>sharif_10021</p>
                  <p className=" text-[gray]">sharif</p>
                </div>
              </div>

              <p className="font-[600] text-[#4187ff] text-[12px]">Switch</p>
            </div></Link>

            <div className="flex justify-between py-2">
              <p className="text-[#8a8282] font-[600]">Suggested for you</p>
              <p className=" text-[12px] font-[600]">See all</p>
            </div>

            <div className="flex justify-between items-center  w-[100%] pb-4">
              <div className="flex gap-3 items-center">
                <img
                  src={profile}
                  alt=""
                  className="w-[45px] h-[45px] rounded-[50px]"
                />
                <div>
                  <p>khalid_kh</p>
                  <p className=" text-[gray]">sharif</p>
                </div>
              </div>

              <p className="font-[600] text-[#4187ff] text-[12px]">Follow</p>
            </div>

            <div className="flex justify-between items-center  w-[100%] pb-4">
              <div className="flex gap-3 items-center">
                <img
                  src={us}
                  alt=""
                  className="w-[45px] h-[45px] rounded-[50px]"
                />
                <div>
                  <p>sharif_1sfs1</p>
                  <p className=" text-[gray]">sharif</p>
                </div>
              </div>

              <p className="font-[600] text-[#4187ff] text-[12px]">Follow</p>
            </div>

            <div className="flex justify-between items-center  w-[100%] pb-4">
              <div className="flex gap-3 items-center">
                <img
                  src={profile}
                  alt=""
                  className="w-[45px] h-[45px] rounded-[50px]"
                />
                <div>
                  <p>mohammad_52 </p>
                  <p className=" text-[gray]">sharif</p>
                </div>
              </div>

              <p className="font-[600] text-[#4187ff] text-[12px]">Follow</p>
            </div>

            <div className="flex justify-between items-center  w-[100%] pb-4">
              <div className="flex gap-3 items-center">
                <img
                  src={us}
                  alt=""
                  className="w-[45px] h-[45px] rounded-[50px]"
                />
                <div>
                  <p>wonder_tj</p>
                  <p className=" text-[gray]">sharif</p>
                </div>
              </div>

              <p className="font-[600] text-[#4187ff] text-[12px]">Follow</p>
            </div>

            <div className="flex justify-between items-center  w-[100%] pb-4">
              <div className="flex gap-3 items-center">
                <img
                  src={profile}
                  alt=""
                  className="w-[45px] h-[45px] rounded-[50px]"
                />
                <div>
                  <p>intelect</p>
                  <p className=" text-[gray]">sharif</p>
                </div>
              </div>

              <p className="font-[600] text-[#4187ff] text-[12px]">Follow</p>
            </div>

            <p className="text-[12px] text-[#b7b7b7] pt-8">About. Help. Press. API. Jobs. Privacy. Terms</p>
            <p className="text-[12px] text-[#b7b7b7] pb-6">Locations. Language. English. Meta. Verified</p>
            <p className="text-[12px] text-[#b7b7b7]">© 2023 INSTAGRAM FROM META</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
