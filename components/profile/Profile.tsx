"use client";
import { signOut, useSession } from "next-auth/react";
import React, { useContext } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";
import { CircleUser } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FakeAuthContext } from "../context/FakeAuthContext";

export default function Profile() {
  const router = useRouter();

  const { authenticated, setAuthenticated, user, setUser } =
    useContext(FakeAuthContext);

  if (!authenticated)
    return (
      // <Link href="/login">
      <Button variant={"outline"} onClick={() => router.replace("/login")}>
        Login
      </Button>
      // </Link>
    );
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary" size="icon" className="rounded-full">
          <CircleUser className="h-5 w-5" />
          <span className="sr-only">Toggle user menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>{user.name}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link className="w-full" href={`/coupons`}>
            Coupons
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link className="w-full" href={`/profile`}>
            Account
          </Link>
        </DropdownMenuItem>

        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <button
            className="w-full text-left"
            onClick={async () => {
              setAuthenticated(false);
              router.replace("/");
            }}
          >
            Logout
          </button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
