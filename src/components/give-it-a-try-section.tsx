"use client";

import * as React from "react";
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
import { toast } from "@/components/ui/use-toast";
import { Icons } from "@/components/icons";
import Prism from "prismjs";
import "prismjs/themes/prism.css";
import "prismjs/components/prism-json";

const FormSchema = z.object({
  url: z.string().url(),
});

export default function GiveItATrySection() {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [content, setContent] = React.useState<string>("");

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setIsLoading(true);

    const response = await fetch("/api/fetch", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const json = await response.json();

    if (response.ok) {
      setContent(json.data);
      setIsLoading(false);
    } else {
      toast({
        title: "Error",
        description: json.message,
      });
      setIsLoading(false);
    }
  }

  React.useEffect(() => {
    Prism.highlightAll();
  }, [content]);

  return (
    <div className="sm:container md:px-0">
      <div className="md:py-20 md:px-16 py-20 container rounded-3xl flex flex-col md:flex-row md:gap-20 gap-10 bg-primary-foreground h-[40rem]">
        <div className="md:self-end md:w-1/3">
          <div className="p-3 rounded-full w-fit bg-yellow text-primary">
            <Icons.signal className="h-8 w-8" />
          </div>
          <h1 className="md:text-6xl text-5xl font-bold text-primary mt-3">
            Test Our API
          </h1>
        </div>
        <div className="md:w-2/3 h-full">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col md:flex-row gap-5 w-full"
            >
              <FormField
                control={form.control}
                name="url"
                render={({ field }) => (
                  <FormItem className="md:w-2/3">
                    <FormControl>
                      <Input
                        placeholder="https://example.com"
                        {...field}
                        className="h-12 rounded-full px-9 bg-primary-foreground text-primary"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                variant={"defaultWhite"}
                size="xlg"
                disabled={isLoading}
              >
                {isLoading && (
                  <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                )}
                Fetch data
              </Button>
            </form>
          </Form>
          {content && (
            <pre className="pt-5 overflow-scroll md:h-[30rem] h-[14rem]">
              <code className="language-json text-primary break-all whitespace-pre-wrap">
                {JSON.stringify(content, null, 2)}
              </code>
            </pre>
          )}
        </div>
      </div>
    </div>
  );
}
