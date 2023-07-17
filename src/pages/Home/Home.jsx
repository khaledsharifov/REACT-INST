import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import profile from "../../assets/profile.jpg";
import us from "../../assets/uspekh.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/uspekh.jpg";

import "../../App.css";
import { Link } from "react-router-dom";
import Post from "../../Components/Post";
import SliderHistory from "../../Components/SSlider/SliderHistry";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className=" lg:ml-[20%] sm:ml-0  overflow-hidden">
      <div className="container m-[0_auto] gap-10 flex ">
        <div className="lg:w-[60%] sm:w-[100%] ">
          <div className="flex gap-[5px] lg:w-[110%] ls:w-[80%] sm:w-[200%] lm:w-[150%] md:w-[100%] py-[50px] justify-between m-auto">
            <SliderHistory />
          </div>
          <div className="w-[100%] m-auto">
            <Post
              img={img2}
              desc=" Liquid Animation With Html Css and JavaScript With full
          Source Code .. 🔥🔥🔥"
            ></Post>

            <Post
              img={img3}
              desc=" Liquid Animation With Html Css and JavaScript With full
          Source Code .. 🔥🔥🔥"
            ></Post>
          </div>
        </div>

        <div className="w-[35%] pr-[100px] pt-[50px] sm:hidden lg:block">
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
              </div>
            </Link>

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

            <p className="text-[12px] text-[#b7b7b7] pt-8">
              About. Help. Press. API. Jobs. Privacy. Terms
            </p>
            <p className="text-[12px] text-[#b7b7b7] pb-6">
              Locations. Language. English. Meta. Verified
            </p>
            <p className="text-[12px] text-[#b7b7b7]">
              © 2023 INSTAGRAM FROM META
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
