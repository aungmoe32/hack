"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

import { Masonry } from "react-plock";
import React from "react";
import Link from "next/link";

export default function BlogRow() {
  return (
    <div
      id="blogrow"
      className="h-screen flex justify-center items-center flex-col"
    >
      <div className="text-center font-bold text-3xl text-primary my-5 ">
        - Knowledge Hub
      </div>
      <div className="flex justify-center items-center space-x-10">
        <Card>
          <Image
            className=" rounded-t-lg"
            src={"/images/i1.jpg"}
            alt={""}
            width="350"
            height={350}
          ></Image>
          <div className="p-5 flex justify-center items-center">
            <Link href={"/blogs"} className=" underline text-primary">
              {"ပလတ်စတစ် အမှိုက်သရိုက်များ"}
            </Link>
          </div>
        </Card>
        <Card>
          <Image
            className=" rounded-t-lg"
            src={"/images/i2.jpg"}
            alt={""}
            width="400"
            height={400}
          ></Image>
          <div className="p-5 flex justify-center items-center">
            <Link href={"/blogs"} className=" underline text-primary">
              {"E-waste"}
            </Link>
          </div>
        </Card>
        <Card>
          <Image
            className=" rounded-t-lg"
            src={"/images/i3.jpg"}
            alt={""}
            width="350"
            height={350}
          ></Image>
          <div className="p-5 flex justify-center items-center">
            <Link href={"/blogs"} className=" underline text-primary">
              {"Green Waste"}
            </Link>
          </div>
        </Card>
      </div>

      <div className="flex justify-center items-center space-x-10 mt-5">
        <Card>
          <Image
            className=" rounded-t-lg"
            src={"/images/i4.jpg"}
            alt={""}
            width="300"
            height={300}
          ></Image>
          <div className="p-5 flex justify-center items-center">
            <Link href={"/blogs"} className=" underline text-primary">
              {"အီလက်ထရွန်းနစ်အမှိုက်"}
            </Link>
          </div>
        </Card>
        <Card>
          <Image
            className=" rounded-t-lg"
            src={"/images/i5.jpg"}
            alt={"250"}
            width="250"
            // style={{
            //   objectFit: "cover",
            // }}
            height={300}
          ></Image>
          <div className="p-5 flex justify-center items-center">
            <Link href={"/blogs"} className=" underline text-primary">
              ပြန်လည်အသုံးပြုနိုင်သော <br /> စွန့်ပစ်ပစ္စည်းများ
            </Link>
          </div>
        </Card>
      </div>
      {/* <div className="text-center text-gray-500 text-sm px-20 py-5">
        ပတ်ဝန်းကျင်ထိန်းသိမ်းရေး၊ ပြန်လည်အသုံးပြုခြင်းနှင့်
        အမှိုက်လျှော့ချခြင်းကို ဦးဆောင်သော သင်ကြားမှုနှင့် အာရုံစိုက်မှုရှိသော
        အကြောင်းအရာများ။ အဆိုပါ ဘလော့များသည် ပတ်ဝန်းကျင်ထိန်းသိမ်းရေးနှင့်
        သက်ဆိုင်သော လမ်းညွှန်ချက်များ၊ သင်ကြားချက်များနှင့် အထူးပြုသော
        အချက်အလက်များကို ဖျော်ဖြေရန် ရည်ရွယ်ထားပြီး သန့်ရှင်းပြီး
        အစိမ်းရောင်ဘဝကို ပံ့ပိုးပေးရန် အတွက် အကြံဉာဏ်များကို ဖေါ်ပြပါသည်။
      </div> */}
    </div>
  );
}
