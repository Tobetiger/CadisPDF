"use client";
import React from "react";
import Messages from "../Chat/Messages";
import ChatInput from "./ChatInput";
import { trpc } from "@/app/_trpc/client";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Loader2,
  XCircle,
} from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "../ui/button";

interface ChatWrapperProps {
  fileId: string;
}

const ChatWrapper = ({ fileId }: ChatWrapperProps) => {
  const { data, isLoading } = trpc.getFileUploadStatus.useQuery(
    {
      fileId,
    },
    {
      refetchInterval: (data) =>
        data?.status === "SUCCESS" || data?.status === "FAILED" ? false : 500,
    }
  );

  if (isLoading)
    return (
      <div className="relative min-h-full bg-zinc-50 flex divide-y divide-zinc flex-col justify-between gap-2">
        <div className="flex-1 flex justify-center items-center flex-col mb-28">
          <div className="flex flex-col items-center gap-2">
            <Loader2 className="h-8 w-8 animate-spin text-purple-500" />
            <h3 className="font-semibold text-xl">Loading...</h3>
            <p className="text-zinc-500 text-sm">
              Hold up, Chat is processing.
            </p>
          </div>
        </div>
      </div>
    );

  if (data?.status === "PROCESSING")
    return (
      <div className="relative min-h-full bg-zinc-50 flex divide-y divide-zinc flex-col justify-between gap-2">
        <div className="flex-1 flex justify-center items-center flex-col mb-28">
          <div className="flex flex-col items-center gap-2">
            <Loader2 className="h-8 w-8 animate-spin text-purple-500" />
            <h3 className="font-semibold text-xl">Processing PDF...</h3>
            <p className="text-zinc-500 text-sm">
              Hold up, this usually take less than a minute.
            </p>
          </div>
        </div>
      </div>
    );

  if (data?.status === "FAILED")
    return (
      <div className="relative min-h-full bg-zinc-50 flex divide-y divide-zinc flex-col justify-between gap-2">
        <div className="flex-1 flex justify-center items-center flex-col mb-28">
          <div className="flex flex-col items-center gap-2">
            <XCircle className="h-8 w-8 text-red-500" />
            <h3 className="font-semibold text-xl">
              Aw Snap, too many PDF pages...
            </h3>
            <p className="text-zinc-500 text-sm">
              {" "}
              <span className="font-medium">Free</span> Plan supports up to 5
              pages per PDF.
            </p>
            <div className="flex gap-2">
              <Link
                href="/dashboard"
                className={buttonVariants({
                  variant: "secondary",
                  className: "mt-4 hover:bg-zinc-200",
                })}
              >
                <ChevronLeft className="h-3 w-3 mr-1.5" />
                Dashboard
              </Link>
              <Link
                href="/pricing"
                className={buttonVariants({
                  className: "mt-4",
                })}
              >
                Upgrade
                <ChevronRight className="ml-1.5 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );

  return (
    <div className="relative min-h-full bg-zinc-50 flex divide-y divide-zinc-200 flex-col justify-between gap-2">
      <div className="flex-1 justify-between flex-col mb-28">
        <Messages />
      </div>

      <ChatInput isDisabled />
    </div>
  );
};

export default ChatWrapper;
