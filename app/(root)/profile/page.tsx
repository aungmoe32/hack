"use client";
import Skeleton from "@/components/Skeleton";
import { FakeAuthContext } from "@/components/context/FakeAuthContext";
import { FormContext } from "@/components/context/FormContext";
import FormProvider from "@/components/context/FormProvider";
import StudentProfileDialog from "@/components/student/StudentProfileDialog";
import StudentFormDialog from "@/components/teacher/StudentFormDialog";
import { Button } from "@/components/ui/button";
import { CircleUser, User } from "lucide-react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useContext, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export default function Profile() {
  const router = useRouter();
  // const { status, data: session } = useSession();
  const [open, setOpen] = useState(false);

  const { authenticated, setAuthenticated, user, setUser } =
    useContext(FakeAuthContext);
  // if (status == "loading") return <Skeleton className="h-screen" />;
  return (
    <div className=" h-screen w-full ">
      <Card className="h-screen">
        <div className="flex mt-20 flex-row p-5 justify-center space-x-20">
          <div className="flex flex-col items-center space-y-2">
            <div className="bg-neutral-100 dark:bg-gray-400 rounded-full w-28 h-28 flex justify-center items-center">
              {/* <User className="h-10 w-10 text-primary-background" /> */}
              <Image
                src="/profile.jpg"
                width={200}
                height={200}
                className="rounded-full"
                alt="Picture of the author"
              ></Image>
            </div>
            <div className="text-lg font-bold text-primary">{user.name}</div>
            <div>
              <StudentProfileDialog
                open={open}
                setOpen={setOpen}
                // defaultValues={session?.user}
              ></StudentProfileDialog>
              <Button
                variant={"outline"}
                onClick={() => {
                  setOpen(true);
                }}
              >
                Edit Profile
              </Button>
            </div>
          </div>

          <div className="flex flex-col space-y-5 px-5 md:px-0">
            <div className="flex flex-col justify-center ">
              <span className="font-bold">Email</span>
              <div className="text-gray-500 text-sm">{user.email}</div>
            </div>
            <div className="flex flex-col justify-center ">
              <span className="font-bold">Gender</span>
              <div className="text-gray-500 text-sm">{user.gender}</div>
            </div>
            <div className="flex flex-col justify-center ">
              <span className="font-bold">Address</span>
              <div className="text-gray-500 text-sm">{user.address}</div>
            </div>
            <div className="flex flex-col justify-center ">
              <span className="font-bold">Reward Points</span>
              <div className="text-primary font-bold text-sm">
                {user.points}
              </div>
            </div>
          </div>
          {/* <div className="flex flex-col justify-center ">
          <span className="font-bold">Major</span>
          <div className="text-gray-500 text-sm">{user.major}</div>
        </div>
        <div className="flex flex-col justify-center ">
          <span className="font-bold">Role</span>
          <div className="text-gray-500 text-sm">{user.role}</div>
        </div> */}
        </div>
      </Card>
    </div>
  );
}
