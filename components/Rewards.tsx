"use client";
import React, { useContext } from "react";
import { Card, CardDescription, CardTitle } from "./ui/card";
import { FakeAuthContext } from "./context/FakeAuthContext";

export default function Rewards() {
  const { authenticated, setAuthenticated, user, setUser } =
    useContext(FakeAuthContext);
  return (
    <div className="flex justify-center items-center flex-col space-y-5 pt-10">
      <Card className="p-5">
        <CardTitle className="mb-5">Your Reward Points : </CardTitle>
        <CardDescription className="text-center text-xl text-primary font-bold">
          {user.points}
        </CardDescription>
      </Card>
      <Card className="p-5">
        <CardTitle className="mb-5">
          Coupon Reward System: အမှိုက်မှ တန်ဖိုးရှိသော အကျိုးခံစားမှု
        </CardTitle>
        <CardDescription>
          ကျွန်ုပ်တို့၏ Smart Coupon System သည် အမှိုက်ကို တာဝန်ရှိစွာ
          စီမံခန့်ခွဲခြင်းအား မြှင့်တင်ရန်နှင့် သုံးစွဲသူများကို အားပေးရန်
          ဖန်တီးထားသော စနစ်တစ်ခုဖြစ်သည်။ သတ်မှတ်ထားသည့် Smart Bin များတွင်
          အမှိုက်ပစ်ခြင်းဖြင့် သုံးစွဲသူများသည် Points ရယူနိုင်ပြီး ထို Points
          များကို တန်ဖိုးရှိသော ပစ္စည်းများအတွက် ပြန်လည်လဲလှယ်နိုင်ပါသည်။
        </CardDescription>
      </Card>

      <Card className="p-5">
        <CardTitle className="mb-5">Reward Point Exchange System</CardTitle>
        <CardDescription>
          ၁ Point = ၁ Kyat <br />
          Smart Bin တစ်ခါအသုံးပြုသည်နှင့် ၂၅ Points ကို တိုက်ရိုက်ရယူမည်။ <br />{" "}
          <br />
          <b>အထူးအကျိုးကျေးဇူးများ</b> <br /> <br /> အသုံးပြုသူများသည်
          ရရှိထားသည့် Reward Points များကို အောက်ဖော်ပြပါနေရာများတွင်
          ပြန်လဲလှယ်နိုင်ပါသည်-
          <br />
          <br />
          <b>Convenience Stores</b> <br /> <br />
          အချိန်တိုင်းလက်တွေ့အသုံးဝင်သော အစားအသောက်နှင့် နေ့စဉ်အသုံးများကို
          ဝယ်ယူရန် အဓိကကုန်သွယ်မှုဆိုင်များ၊ Convenience Storesများ တွင် Point
          များကို လွယ်ကူစွာ ပြန်လဲလှယ်နိုင်သည်။ <br /> <br />
          <b>မြို့တော် Shopping Mall များ</b>
          <br /> <br />
          ကြီးမားသည့် Shopping Mall များတွင် Point များကို ပြန်လဲလှယ်ပြီး အထူး
          Shopping အတွေ့အကြုံများကို ရယူနိုင်ပါသည်။ <br /> <br />
          <b>ဘဏ်များ၏ ပံ့ပိုးမှု:</b> <br /> <br />
          အဓိကကြီးမားသော ဘဏ်များအနက် များစွာသည် Reward Points များကို
          ရင်းနှီးငွေသို့မဟုတ် အကောင့်အလွှဲအဖြစ် ပြောင်းလဲမှုများကို
          ခွင့်ပြုလျက်ရှိသည်။
        </CardDescription>
      </Card>

      <Card className="p-5">
        <CardTitle className="mb-5">
          Smart Coupon System ကို ရွေးချယ်ရသော အကြောင်းရင်းများ
        </CardTitle>
        <CardDescription>
          <b>ကျယ်ပြန့်သော ဆက်သွယ်မှု:</b> <br /> <br />
          ပိုမိုများပြားလာသည့် ပါတနာဆိုင်များ၊ Mall များနှင့် ဘဏ်များက
          သုံးစွဲသူများအတွက် Reward များကို ပိုမိုလွယ်ကူစေသည်။ <br /> <br />
          <b>နေ့စဉ်အသုံးဝင်မှု:</b> <br /> <br />
          အမှိုက်ပစ်ခြင်းကို တန်ဖိုးရှိသော အကျိုးခံစားမှုအခွင့်အလမ်းအဖြစ်
          ပြောင်းလဲရန် အခွင့်အလမ်းပေးသည်။ သက်သာသောဘဝမူဝါဒ:
          သုံးစွဲသူများ၏နေ့စဉ်ဘဝကို အကျိုးပြုစေသည့်အတူ ကျေးဇူးတင်ဖွယ်ရှိသော
          ပတ်ဝန်းကျင်ကို တစ်ပါးတစ်ဖက်မှ ထောက်ပံ့ပေးသည်။ အခုမှ စလိုက်ပါ—Smart Bin
          ကို အသုံးပြုပြီး ပိုမိုကျွမ်းကျင်သော ရွေးချယ်မှုများနှင့်
          တန်ဖိုးရှိသော ချီးမြှင့်မှုများကို ရယူလိုက်ပါ! 🌟♻️
        </CardDescription>
      </Card>
    </div>
  );
}
