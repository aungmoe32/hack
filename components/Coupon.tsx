import React from "react";
import gift from "../public/svgs/gift.svg";
import Image from "next/image";
import { CouponInput } from "./CouponInput";

export default function Coupon() {
  return (
    <div
      id="coupons"
      className=" flex flex-col space-y-6 md:space-y-0 space-x-20 md:flex-row justify-center items-center px-10 md:px-28 h-screen"
    >
      <div className=" md:flex-1 flex flex-col space-y-6 ">
        <span className="font-bold text-4xl font-oswald uppercase mb-5">
          Use Coupon Here For Reward Points
        </span>
        <div>
          <CouponInput></CouponInput>
        </div>
        <div className="text-gray-500 text-sm ">
          ကူပွန်ဆုလာဘ်အပိုင်း အမှိုက်ကို ဆုအဖြစ် ပြောင်းလဲလိုက်ပါ။ သင်၏
          အမှိုက်များကို ကျွန်ုပ်တို့၏ Smart Bin များတွင် စွန့်ပစ်ပြီး
          အထူးသီးသန့် ကူပွန်များ ရယူလိုက်ပါ။ <br /> ဤကူပွန်များသည်
          စိတ်လှုပ်ရှားဖွယ်ရာဆုလာဘ်များကို ဖွင့်ရန် သင်သုံးနိုင်သည့်
          ကူပွန်များပါရှိသည်။ အလုပ်လုပ်ပုံ- သင်၏အမှိုက်များကို သတ်မှတ်ထားသော
          Smart Bin ထဲသို့ စွန့်ပစ်ပါ။ <br /> Smart Bin
          မှထုတ်ပေးသောထူးခြားသောကူပွန်ကုဒ်ကိုရယူပါ။ အမှတ်များရယူရန်
          ကျွန်ုပ်တို့၏ပလပ်ဖောင်းပေါ်တွင် ကုဒ်ကိုထည့်ပါ။ <br /> ငွေသား၊
          လျှော့စျေးများ သို့မဟုတ် အခြား စိတ်လှုပ်ရှားဖွယ်ရာ
          ကမ်းလှမ်းမှုများအတွက် အမှတ်များကို ကူပွန်ဖြင့် လဲလှယ်ပါ။ <br />{" "}
          ယနေ့တွင် ကွဲပြားခြားနားမှုကို စတင်လိုက်ပါ—အမှိုက်ကို လျှော့ချပါ၊
          ဆုလာဘ်များရယူကာ ပိုမိုထက်မြက်သော၊ ပိုမိုစိမ်းလန်းသောအနာဂတ်၏
          အကျိုးကျေးဇူးများကို ခံစားလိုက်ပါ။ 🌟
        </div>
      </div>
      <div className="md:flex-1 md:mt-0 mt-4">
        <Image src={gift} alt={""} className=" "></Image>
      </div>
    </div>
  );
}
