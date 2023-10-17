"use client";

import axios from "axios";
import * as z from "zod";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import { Input } from "./ui/input";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@nextui-org/react";
import { Separator } from "@/components/ui/separator"
import { AiFillGoogleCircle } from "react-icons/ai";

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
});

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);


  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    console.log(data)
  };

  return (
    <Card className="w-[450px]">
      <CardHeader className="mt-4">
        <div className="flex">
        <CardTitle className="my-auto  mb-2">Login-In</CardTitle>
        </div>
        <CardDescription>
          Alredy have an account with{" "}
          <span className="font-semibold dark:text-neutral-200 text-black">AugFolio?</span>
        </CardDescription>
      </CardHeader>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 pb-4 px-8"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="example@gmail.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Enter Password</FormLabel>
                <FormControl>
                  <Input placeholder="Xkdo8!ih&yJ73" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div>
            <Button
              className="w-full py-2 text-black font-semibold bg-neutral-200 rounded-md "
              type="submit"
            >
              Log-In
            </Button>
          </div>
          <div className=" flex flex-col">
            <div className="flex mb-4 items-center ml-2">
              <Separator className="w-40" />
              <p className="mx-4 text-neutral-500 dark:text-neutral-400">
                or
              </p>
              <Separator className="w-40" />
            </div>
            <Button
              className="w-full py-1  mb-4 text-black font-semibold bg-blue-300 rounded-md "
              type="submit"
            >
              <div className="flex items-center justify-center">
              <AiFillGoogleCircle size={30} className="" />
              <span className="ml-2">
                Sign in with Google
              </span>
              </div>
            </Button>
          </div>
        </form>
      </Form>
    </Card>
  );
};

export default LoginForm;
