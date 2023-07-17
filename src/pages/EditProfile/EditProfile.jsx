import React from "react";
import meta from "../../assets/meta.svg";
import prof from "../../assets/profile.jpg";
import { Link } from "react-router-dom";

export default function EditProfile() {
  return (
    <div className="w-[100%] sm:py-8 lg:py-0 overflow-hidden">
      <div className="container m-[0_auto]">
        <div className="lg:w-[100%] sm:w-[90%] lg:ml-[16%] sm:ml-auto">
          <div className="lg:p-[40px] sm:p-2  ">
            <div className="flex  sm:flex-col lg:flex-row lg:border  lg:mr-[250px] sm:mr-0">
              <div className="lg:w-[25%] sm:w-[100%] lg:border-r flex flex-col justify-between">
                <div className=" sm:pb-8 lg:p-0">
                    <Link to={"/editProfile"}>
                  <p className="p-4 text-[16px] cursor-pointer hover:bg-[#f1f1f1] border-l-[3px] border-[#000]">
                    Edit prifile
                  </p>
                    </Link>
                  <Link to={"/changePassword"}>
                  <p className="p-4 text-[16px] cursor-pointer hover:bg-[#f1f1f1]   ">
                    Change password
                  </p>
                  </Link>
                </div>

                <div className="lg:p-10 sm:p-0">
                  <img src={meta} alt="" />
                  <p className="text-[#0095F6] text-[20px] py-1">
                    Accounts center
                  </p>
                  <p className="text-[#818181]">
                    Control settings for connected experiences on Instagram, the
                    Facebook app, and Messenger, including sharing stories and
                    posts, and logging in.
                  </p>
                </div>
              </div>

              <div className=" py-[30px] lg:pl-[100px] sm:pl-0">
                <div className="flex  items-center lg:gap-[60px] sm:gap-4 py-2 pl-[35px]">
                  <img
                    src={prof}
                    alt=""
                    className="w-[60px] h-[60px] rounded-[100px]"
                  />
                  <div>
                    <p className="text-[20px]">sharif_10021</p>
                    <p className="text-[#0095F6]">Change profile photo</p>
                  </div>
                </div>

                <div className="flex  lg:justify-end sm:justify-center   items-start lg:gap-[60px] sm:gap-4 py-2">
                  <p className="text-[16px] font-[600]">Name</p>
                  <div>
                    <input
                      type="text"
                      className=" border py-[5px] px-2 lg:w-[500px] sm:w-[200px]"
                    />
                    <p className="lg:w-[500px] sm:w-[200px] py-2 text-[#8E8E8E]">
                      To help people discover your account, use the name people
                      know you by, whether it's your full name, nickname, or
                      business name. <br /> You can only change your name twice
                      within a 14-day period.
                    </p>
                  </div>
                </div>

                <div className="flex  lg:justify-end sm:justify-center  items-start lg:gap-[60px] sm:gap-4 py-2">
                  <p className="text-[16px] font-[600]">Username</p>
                  <div>
                    <input
                      type="text"
                      className=" border py-[5px] px-2 lg:w-[500px] sm:w-[200px]"
                    />
                    <p className="lg:w-[500px] sm:w-[200px] py-2 text-[#8E8E8E]">
                      In most cases, you will be able to change your username
                      back to johndoe for an additional 14 days. More
                      information
                    </p>
                  </div>
                </div>

                <div className="flex  lg:justify-end sm:justify-center  items-start lg:gap-[60px] sm:gap-4 py-2">
                  <p className="text-[16px] font-[600]">Description</p>
                  <div>
                    <textarea
                      type="text"
                      className=" border py-[5px] px-2  lg:w-[500px] sm:w-[200px]"
                    />
                  </div>
                </div>

                <div className="flex  lg:justify-end sm:justify-center  items-start lg:gap-[60px] sm:gap-4 py-2">
                  <p className="text-[16px] font-[600]"></p>
                 <div className="sm:pl-14 lg:p-0">
                 <p className="text-[16px] font-[600] text-[#8E8E8E]">Personal Information</p>
                  <p className="lg:w-[500px] sm:w-[200px] text-[#8E8E8E]">
                    Provide your personal information, even if the account is
                    used for a business, a pet, etc. This information will not
                    be kept in your public profile.
                  </p>
                 </div>
                </div>

                <div className="flex  lg:justify-end sm:justify-center  items-start lg:gap-[60px] sm:gap-4 py-2">
                  <p className="text-[16px] font-[600]">Email</p>
                  <div>
                    <input
                      type="email"
                      className=" border py-[5px] px-2  lg:w-[500px] sm:w-[200px]"
                    />
                  </div>
                </div>

                <div className="flex  lg:justify-end sm:justify-center  items-start lg:gap-[60px] sm:gap-4 py-2">
                  <p className="text-[16px] font-[600]">Gender</p>
                  <div>
                    <input
                      type="text"
                      className=" border py-[5px] px-2  lg:w-[500px] sm:w-[200px]"
                    />
                  </div>
                </div>

                <div className="flex  lg:justify-end sm:justify-center items-start lg:gap-[60px] sm:gap-4 pb-2 pt-8">
                  <p className="text-[18px] font-[600]"></p>
                  <div className="flex sm:flex-col lg:flex-row items-center w-[500px] justify-between">
                    <button className="text-[#fff] bg-[#0095F6] py-[5px] px-6 rounded-[5px]">Send</button>
                    <p className="text-[#0095F6]">Temporarily deactivate my account</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
