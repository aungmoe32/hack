import React from "react";
import { ModeToggle } from "./ModeToggle";
import Profile from "./profile/Profile";
import bg from "../public/images/bg.jpg";

import Image from "next/image";

import Trash from "../public/images/trash.svg";

export default function HeroSection() {
  return (
    <div
      className="h-screen w-full bg-background flex flex-col items-center px-10 "
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundSize: "cover",
        // opacity: 0.5,
        // filter: "blur(1px)",
      }}
    >
      <div className=" w-full mt-5 flex justify-between space-x-3 items-center">
        <div>
          {/* <Image
              src={"/images/Hmawbi-logo.png"}
              alt={""}
              width={35}
              height={35}
            ></Image> */}
          <h1
            className="text-primary font-bold text-2xl"
            style={{
              textShadow: "1px 0px #ffff",
            }}
          >
            SWEEPERS
          </h1>
        </div>

        <div className="flex justify-center items-center space-x-4 z-10">
          <ModeToggle></ModeToggle>
          <Profile></Profile>
        </div>
      </div>
      <div className="flex h-full flex-col justify-center items-center">
        <div
          className=" font-oswald text-4xl font-bold text-primary mb-20 text-center uppercase drop-shadow-xl"
          style={{
            textShadow: "1px 0px #ffff",
          }}
        >
          Turn Waste Into Rewards <br />
          Build a Cleaner, Smarter City Together!
        </div>
        <div className="text-md font-bold text-center text-white">
          သင်၏ အမှိုက်စီမံခန့်ခွဲမှုကို ပြောင်းလဲရန် ငါတို့၏ လုပ်ငန်းစဉ်ကို
          ပူးပေါင်းပါ။ <br /> ပို၍ အထိရောက်စွာ အမျိုးအစားခွဲပြီး၊ ဆုလာဘ်များ
          ရရှိပါ၊ သင်၏ မြို့ကို လူတိုင်းအတွက် အစိမ်းရောင်၊ <br />{" "}
          သန့်ရှင်းသောနေရာတစ်ခု ဖြစ်အောင် ပြုလုပ်ပါ။
        </div>
      </div>
    </div>
  );
}
