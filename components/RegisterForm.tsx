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
import Image from "next/image";
import toast from "react-hot-toast";

const formSchema = z.object({
  name: z.string().min(3, {
    message: "Name must be at least 3 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
  rePassword: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
});

const RegisterForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    axios
      .post("/api/register", data)
      .then(() => {
        toast.success("Registered!");
      })
      .catch((error) => {
        toast.error("Somwthing went Wrong!");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <Card className="w-[450px]">
      <CardHeader>
        <div className="flex">
          <CardTitle className="my-auto">Sign-Up</CardTitle>
        </div>
        <CardDescription>
          Create your account with{" "}
          <span className="font-semibold dark:text-neutral-200 text-black">
            AugFolio.
          </span>
        </CardDescription>
      </CardHeader>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 pb-4 px-8"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
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
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="Xkdo8!ih&yJ73" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="rePassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Re-Enter Password</FormLabel>
                <FormControl>
                  <Input placeholder="Xkdo8!ih&yJ73" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="pt-4">
            <Button
              className="w-full py-2 bg-neutral-200 text-black font-semibold rounded-md "
              type="submit"
            >
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </Card>
  );
};

export default RegisterForm;
