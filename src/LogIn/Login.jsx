import React from "react";
import { Link } from "react-router-dom";

import phone from "../assets/phone.png";
import googl from "../assets/googl.svg";
import store from "../assets/store.svg";
import google from "../assets/google.png";
import logo2 from "../assets/logo2.png";
import { TextField } from "@mui/material";

import Box from "@mui/material/Box";

export default function Login() {
  return (
    <div className="bg-[#fff]">
      <div className="container m-[0_auto]">
        <div className="flex justify-center pt-[30px]">
          <div className="flex ">
            <div>
              <img src={phone} alt="" />
            </div>
            <div>
              <div className="bg-[#fff] px-[40px] py-4 border-[1px] border-[#cccccc] mt-4">
                <img src={logo2} alt="" className="m-auto py-[30px]" />

                <Box
                  component="form"
                  sx={{
                    "& > :not(style)": { width: "34ch" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <div className="">
                    <TextField
                    type="email"
                      label="Username, or mail"
                      variant="filled"
                      sx={{
                        "& > :not(style)": {
                          width: "37ch",
                          height: "6ch",
                          fontSize: "13px",
                          marginTop: "5px",
                        },
                      }}
                    />
                    <TextField
                      type="password"
                      label="Password"
                      variant="filled"
                      sx={{
                        "& > :not(style)": {
                          width: "37ch",
                          height: "6ch",
                          fontSize: "13px",
                          marginTop: "6px",
                          border: "2px",
                        },
                      }}
                    />

                    <Link to={"layout"}>
                    <button className="bg-[#4CB5F9] text-[#fff] py-[5px] w-[101%] mt-3 font-[500] rounded-[8px]">Log in</button>
                    </Link>

                    <div className="flex items-center py-3">
                    <div className="h-[1px] bg-[#D9D9D9] w-[100%]"></div>
                        <span  className="px-2 text-[#959595]">OR</span>
                        <div className="h-[1px] bg-[#D9D9D9] w-[100%]"></div>
                    </div>

                    <div className="bg-[#EFEFEF] flex items-center w-[100%] py-2 rounded-[60px] justify-center gap-4">
                        <img src={google} alt="" />
                        <p className="font-[600] text-[13px]">Continue with google</p>
                    </div>

                    <p className="text-[#0095F6] text-center text-[13px] mt-4">You forgot the password?</p>
                  </div>
                </Box>
              </div>

              <div className="bg-[#fff] px-[40px] py-4 border-[1px] border-[#cccccc] mt-2 text-center">
             <Link to={"signUp"}>
             <p>You don’t an account? <span className="text-[#0095F6] font-[600]">Sign Up</span></p>
             </Link>
              </div>

              <div className="text-center">
                <p className="py-3">Download the application.</p>
                <div className="flex gap-2 justify-center">
                    <img src={store} alt="" />
                    <img src={googl} alt="" />
                </div>
              </div>
            </div>
          </div>
          
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
  );
}