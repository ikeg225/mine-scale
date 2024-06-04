"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Link from "next/link";
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
import { toast } from "@/components/ui/use-toast";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";

const FormSchema = z.object({
  email: z.string().email(),
});

export default function SettingsAccount() {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [isSuccess, setIsSuccess] = React.useState<boolean>(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setIsLoading(true);
    const email = data.email.trim().toLowerCase();

    const response = await fetch("/api/send-api-key", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    const res = await response.json();

    if (response.ok) {
      toast({
        title: "API key sent!",
        description: `We've sent an API key to ${email}.`,
      });
      setIsLoading(false);
      setIsSuccess(true);
    } else {
      toast({
        title: "Something went wrong.",
        description: res.message,
        variant: "destructive",
      });
      setIsLoading(false);
    }
  }

  React.useEffect(() => {
    document.body.classList.remove("bg-lightPurple");
    document.body.classList.remove("bg-green");
    document.body.classList.add("bg-background");
  }, []);

  return (
    <div className="container hero flex h-screen w-screen flex-col items-center justify-center">
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[500px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-4xl font-bold font-clashdisplay tracking-tight">
              Get Your API Key
            </h1>
            <p className="opacity-50">
              Enter your email to receive your API key and start scraping data!
            </p>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col md:flex-row md:gap-5 gap-3 w-full pt-10"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormControl>
                        <Input
                          placeholder="email"
                          {...field}
                          type="email"
                          disabled={isLoading}
                          className="h-12 rounded-full px-9 bg-primary-foreground text-primary"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  variant="secondary"
                  size="xlg"
                  disabled={isLoading}
                  type="submit"
                >
                  {isLoading && (
                    <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                  )}
                  Send
                </Button>
              </form>
            </Form>
            {isSuccess && (
              <Link href="/documentation">
                <Button
                  variant="link"
                  className="text-foreground pt-10 opacity-50"
                >
                  View documentation for examples and details on API usage.
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
