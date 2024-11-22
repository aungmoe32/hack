import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import Trash from "../../public/images/trash.svg";
import recycle from "../../public/images/recycle.svg";
import { Facebook, Twitter, Youtube } from "lucide-react";
import Profile from "@/components/profile/Profile";
import { ModeToggle } from "@/components/ModeToggle";
import Skeleton from "@/components/Skeleton";
import ContactUs from "@/components/home/ContactUs";
import dynamic from "next/dynamic";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import Coupon from "@/components/Coupon";
import BlogRow from "@/components/BlogRow";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <div className="w-full relative ">
      <div className="fixed top-0 left-0 flex justify-center w-full mt-5 z-0">
        <Menubar className="">
          <MenubarMenu>
            <MenubarTrigger>
              <a href="#Home">Home</a>
            </MenubarTrigger>
          </MenubarMenu>

          <MenubarMenu>
            <MenubarTrigger>
              <a href="#blogrow">Knowledge Hub</a>
            </MenubarTrigger>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>
              <a href="#coupons">Coupons</a>
            </MenubarTrigger>
          </MenubarMenu>

          <MenubarMenu>
            <MenubarTrigger>
              <a href="#Contact">Contact</a>
            </MenubarTrigger>
          </MenubarMenu>
        </Menubar>
      </div>

      <HeroSection></HeroSection>

      <BlogRow></BlogRow>

      <div className="flex space flex-col-reverse md:flex-row md:space-x-5 justify-center items-center  px-10 h-screen">
        <div className="md:flex-1 md:mt-0 mt-4">
          <Image src={recycle} alt={""} className=" "></Image>
        </div>
        <div className=" md:flex-1 flex flex-col  items-center space-y-10">
          <span className="font-bold text-4xl font-oswald uppercase">
            Reduce, Reuse, Recycle
          </span>
          <div className="text-neutral-500 dark:text-neutral-400 text-justify">
            လျှော့ချ၊ ပြန်သုံး၊ ပြန်လည်အသုံးပြုပါ။ "လျှော့ချ၊ ပြန်သုံး၊
            ပြန်လည်အသုံးပြုခြင်း" သည် ဆောင်ပုဒ်တစ်ခုမျှသာ မဟုတ်ဘဲ
            အမှိုက်နှင့်ပတ်သက်သည့် တွေးခေါ်ပုံကို ပြောင်းလဲရန် ရည်ရွယ်သည့်
            ကမ္ဘာလုံးဆိုင်ရာ လှုပ်ရှားမှုတစ်ခုဖြစ်သည်။ ကမ္ဘာ့ခေါင်းဆောင်များမှ
            ဒေသခံအသိုင်းအဝိုင်းများ၊ မိသားစုများနှင့် လူပုဂ္ဂိုလ်များအထိ၊
            ကျွန်ုပ်တို့၏ "တစ်ခါသုံးယဉ်ကျေးမှု" ကို ပြင်ဆင်ရန် တောင်းဆိုမှုသည်
            ယခင်ကထက် ပိုမိုအားကောင်းလာသည်။ <br /> <br /> မသင့်လျော်သော
            စွန့်ပစ်ပစ္စည်း စီမံခန့်ခွဲမှုသည် ကြီးမားသော အကျိုးဆက်များရှိသည်။
            အမှိုက်ပုံများသည် လူ့ကျန်းမာရေးကို ထိခိုက်စေရုံသာမက ကျွန်ုပ်တို့
            မှီခိုနေရသော လေနှင့် ရေကို ညစ်ညမ်းစေသည်သာမက၊ ၎င်းတို့သည်
            ကမ္ဘာပေါ်ရှိ သက်ရှိများ၏ ဟန်ချက်ညီမှုကို ခြိမ်းခြောက်နေပါသည်။
            ကြီးထွားလာနေသော အမှိုက်တောင်များသည် သဘာဝပတ်ဝန်းကျင် ပျက်စီးခြင်း၊
            တောရိုင်းတိရစ္ဆာန်များကို အန္တရာယ်ဖြစ်စေပြီး ရာသီဥတုပြောင်းလဲမှုကို
            အရှိန်မြှင့်ပေးသည်။ <br /> <br />
            ဖြေရှင်းချက်၏တစ်စိတ်တစ်ပိုင်းအဖြစ်ပါဝင်ကြပါစို့၊
            ဤရိုးရှင်းသောဆောင်ပုဒ်ကို ပိုမိုသန့်ရှင်းစိမ်းလန်းသောအနာဂတ်အတွက်
            အစွမ်းထက်သောလှုပ်ရှားမှုတစ်ခုအဖြစ် ပြောင်းလဲကြပါစို့။ 🌍♻️
          </div>
        </div>
      </div>
      <Coupon></Coupon>
      <ContactUs></ContactUs>
      <div className="w-full bg-primary text-white px-10 py-10 flex flex-col space-y-20 justify-center items-center ">
        <div className="flex  items-center w-full">
          <div className="flex-1 flex justify-center">
            <div className="flex flex-col justify-center items-center space-y-4">
              <h1 className="font-bold text-3xl ">SWEEPERS</h1>
              <div className="flex justify-center items-center space-x-4">
                <Facebook />
                <Youtube />
                <Twitter />
              </div>
            </div>
          </div>
          <div className="flex-1 text-sm">
            <div className="flex justify-center items-center flex-col space-y-5">
              <span>Copyright @2024</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
