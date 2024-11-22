"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import toast from "react-hot-toast";
import { useContext, useState } from "react";
import { FakeAuthContext } from "./context/FakeAuthContext";
import { useRouter } from "next/navigation";

const FormSchema = z.object({
  username: z.string().min(4, {
    message: "coupon must be at least 4 characters.",
  }),
});

export function CouponInput() {
  const { authenticated, setAuthenticated, user, setUser } =
    useContext(FakeAuthContext);
  const [codes, setCodes] = useState([
    {
      used: false,
      value: "8888",
    },
    {
      used: false,
      value: "4848",
    },
    {
      used: false,
      value: "7354",
    },
    {
      used: false,
      value: "6465",
    },
  ]);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
    },
  });
  const router = useRouter();

  function onSubmit(data: z.infer<typeof FormSchema>) {
    if (authenticated) {
      let code = codes.find((code) => {
        return data.username == code.value;
      });
      console.log(code);

      if (code && !code.used) {
        toast.success("success");
        code.used = true;
        user.points += 10;
        return;
      }
      toast("invalid coupon");
    } else {
      router.replace("/login");
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Enter coupon code" {...field} />
              </FormControl>
              {/* <FormDescription>Enter coupon code</FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="my-5">
          Submit
        </Button>
      </form>
    </Form>
  );
}
