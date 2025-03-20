"use client";

import React, { useState, useRef } from "react";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Download, Loader2, Instagram as InstagramIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";

import { downloadFile } from "@/lib/utils";
import { getHttpErrorMessage } from "@/lib/http";

import { useVideoInfo } from "@/services/api/queries";

const instagramSchema = z.object({
  postUrl: z.string().url({
    message: "Geçerli bir Instagram bağlantısı giriniz",
  }),
});

export function InstagramVideoForm() {
  const instagramForm = useForm<z.infer<typeof instagramSchema>>({
    resolver: zodResolver(instagramSchema),
    defaultValues: {
      postUrl: "",
    },
  });

  const { 
    error: instaError, 
    isPending: isInstaPending, 
    mutateAsync: getInstaVideoInfo 
  } = useVideoInfo();

  const httpError = getHttpErrorMessage(instaError);
  
  const instagramInputRef = useRef<HTMLInputElement>(null);

  async function onInstagramSubmit(values: z.infer<typeof instagramSchema>) {
    const { postUrl } = values;
    try {
      console.log("Instagram video bilgileri alınıyor", postUrl);
      const videoInfo = await getInstaVideoInfo({ postUrl });

      const { filename, videoUrl } = videoInfo;
      downloadFile(videoUrl, { filename });
    } catch (error: any) {
      console.log(error);
    }
  }

  return (
    <div className="w-full overflow-hidden shadow-xl bg-white dark:bg-gray-800/95 backdrop-blur-sm rounded-2xl transition-all duration-300 hover-lift gradient-border">
      <div className="flex w-full z-10 relative mb-2">
        <div
          className="relative flex-1 py-4 md:py-5 text-center font-medium transition-all duration-300 text-sm md:text-base z-20 bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-md shimmer"
        >
          <div className="flex items-center justify-center gap-1.5 md:gap-2 pointer-events-none">
            <InstagramIcon className="h-4 w-4 md:h-5 md:w-5" />
            <span>Instagram</span>
          </div>
          <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 to-blue-500 pointer-events-none"></span>
        </div>
      </div>
      
      <div className="p-4 md:p-6 lg:p-8 pt-2 md:pt-3">
        <Form {...instagramForm}>
          <form
            onSubmit={instagramForm.handleSubmit(onInstagramSubmit)}
            className="flex flex-col gap-3 md:gap-4"
          >
            <div className="mb-1 md:mb-2 h-6 w-full px-2 text-start text-red-500 min-h-[24px] text-sm">
              {httpError}
            </div>
            
            <FormField
              control={instagramForm.control}
              name="postUrl"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <div className="relative">
                      <Input
                        disabled={isInstaPending}
                        type="url"
                        placeholder="Instagram bağlantısını yapıştırın..." 
                        className="h-12 md:h-14 w-full pl-3 pr-3 md:pl-4 md:pr-4 border-2 rounded-xl border-blue-200 dark:border-blue-900/30 focus:border-blue-500 dark:focus:border-blue-500 transition-all placeholder:text-gray-400 dark:placeholder:text-gray-500 text-sm md:text-base focus:ring-2 focus:ring-blue-500/50"
                        {...field}
                        ref={instagramInputRef}
                      />
                    </div>
                  </FormControl>
                  <FormMessage className="text-xs md:text-sm" />
                </FormItem>
              )}
            />
            
            <Button
              disabled={isInstaPending}
              type="submit"
              className="mt-1 md:mt-2 h-12 md:h-14 w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 dark:from-blue-600 dark:to-indigo-700 dark:hover:from-blue-700 dark:hover:to-indigo-800 text-white rounded-xl font-medium text-base md:text-lg transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-lg"
            >
              {isInstaPending ? (
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              ) : (
                <Download className="mr-2 h-5 w-5" />
              )}
              İndir
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
