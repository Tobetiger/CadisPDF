import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Statusbar from "@/components/Statusbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    /* Navbar Styling (WidthWrapper) */
    <>
      <Statusbar />
      <MaxWidthWrapper className="mb-4 mt-4 sm:mt-20 flex flex-col items-center justify-center text-center">
        <h1 className="max-w-4xl text-5xl  font-bold md:text-6xl lg:text-7xl">
          Chat With Your{" "}
          <span className="text-red-500 border-black ">Documents.</span>
        </h1>
        <p className="mt-5 max-w-prose text-zinc-700 sm:text-md">
          Cadis Allows You To Communicate with Your Files and Documents. Simply
          Upload Your PDF File and Start chatting with your Document.
        </p>

        <Link
          className={buttonVariants({
            size: "lg",
            className: "mt-4",
          })}
          href="/dashboard"
        >
          Get Started For Free
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </MaxWidthWrapper>

      {/* value proposition section */}

      <div>
        <div className="relative-isolate">
          <div
            arial-hidden="true"
            className="pointer-event-none absolute inset-x-0 -top-40 -z-10 transfor-gpu overflow-hidden blur-3xl sm:-top-30"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative up-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[5deg] bg-gradient-to-tr from-[#e2c2cf] to-[#d3d1ec] opacity-30 sm:[calc(50%-30rem)] sm:w-[72.1875rem]"
            />
          </div>
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="mt-16 flow-root sm:mt-24">
              <div className="-m-2 rounded-xl bg-gray-800/5 p-2 ring-2 ring-inset ring-gray-800/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                <Image
                  src="/dashboard-preview.jpg"
                  alt="productDemo preview"
                  width={1364}
                  height={866}
                  quality={100}
                  className="rounded-md bg-white p-2 sm:p-8 md:p-20 shadow-2xl ring-1 ring-gray-900/10"
                />
              </div>
            </div>
          </div>
        </div>

        <div
          arial-hidden="true"
          className="pointer-event-none absolute inset-x-0 -top-40 -z-10 transfor-gpu overflow-hidden blur-3xl sm:-top-30"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-13rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:[calc(50%-35rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>

      {/* Features of Cadis */}
      <div className="mx-auto mb-32 mt-28 max-w-5xl sm:mt-46">
        <div className="mb-6 px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="mt-2 font-bold text-4xl text-gray-900 sm:text-5xl">
              Start Chatting In Seconds
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Chatting With Your PDF Files Has Never Been This Easy With CADIS
            </p>
          </div>
        </div>

        {/* Steps */}
        <ol className="my-8 space-y-4 pt-8 md:flex md:space-x-12 md:space-y-0">
          <li className="md:flex-1">
            <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
              <span className="text-md font-medium text-purple-600">
                Step 1
              </span>
              <span className="text-xl font-semibold">
                Sign up for an account
              </span>
              <span className="mt-2 text-zinc-700">
                You can either opt-in for our Free Plan or choose the {""}
                <Link
                  href="/pricing"
                  className="text-amber-500 font-semibold underline-offset-2 underline"
                >
                  Pro Plan {""}
                </Link>
                to unleash the full features of CADIS.
              </span>
            </div>
          </li>
          <li className="md:flex-1">
            <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
              <span className="text-md font-medium text-purple-600">
                Step 2
              </span>
              <span className="text-xl font-semibold">Upload any PDF file</span>
              <span className="mt-2 text-zinc-700">
                Cadis will Process you PDF files and make it ready for you to
                chat with.
              </span>
            </div>
          </li>
          <li className="md:flex-1">
            <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
              <span className="text-md font-medium text-purple-600">
                Step 3
              </span>
              <span className="text-xl font-semibold">
                Start asking you PDF Questions
              </span>
              <span className="mt-2 text-zinc-700">
                It&apos;s that simple, It only takes a Few Seconds and you are
                all Set - Try Cadis out today.
              </span>
            </div>
          </li>
        </ol>

        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mt-16 flow-root sm:mt-24">
            <div className="-m-2 rounded-xl bg-gray-800/5 p-2 ring-2 ring-inset ring-gray-800/10 lg:-m-4 lg:rounded-2xl lg:p-4">
              <Image
                src="/file-upload-preview.jpg"
                alt="fileUpload preview"
                width={1419}
                height={732}
                quality={100}
                className="rounded-md bg-white p-2 sm:p-8 md:p-20 shadow-2xl ring-1 ring-gray-900/10"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
