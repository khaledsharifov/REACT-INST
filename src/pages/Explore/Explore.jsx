import React from "react";
import nature1 from "../../assets/nature1.jpg"
import nature2 from "../../assets/nature2.jpg"
import ExploreGrid from "../../Components/Explore";
export default function Explore() {
  return (
    <div className="w-[100%]">
      <div className="container m-[0_auto] flex">
        <div className="w-[100%] ml-[16%]">
            <div className="w-[80%] m-auto py-8">
              <div className=" grid-container">
              <ExploreGrid imgg={nature1} likes="1,566" comments="259"></ExploreGrid>
              <ExploreGrid imgg={nature2} likes="1,566" comments="259"></ExploreGrid>
              <ExploreGrid imgg={nature1} likes="1,566" comments="259"></ExploreGrid>
              <ExploreGrid imgg={nature2} likes="1,566" comments="259"></ExploreGrid>
              <ExploreGrid imgg={nature1} likes="1,566" comments="259"></ExploreGrid>
              <ExploreGrid imgg={nature1} likes="1,566" comments="259"></ExploreGrid>
                <ExploreGrid imgg={nature2} likes="1,566" comments="259"></ExploreGrid>
              
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}
