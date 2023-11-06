import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";

export default function Home() {
  return (
    /* Navbar Styling (WidthWrapper) */
    <div>
      <MaxWidthWrapper className="mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center">
        <div className="mx-auto mb-4 max-w-fit flex justify-center items-center space-x-2 overflow-hidden rounded-full border bg-white border-gray-200 px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50">
          <p className="text-sm font-semibold text-gray-700">Cadis is Live</p>
        </div>
        <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl">
          Chat With Your{" "}
          <span className="text-amber-500 border-black">Documents </span>
        </h1>
        <p className="mt-5 max-w-prose text-zinc-700 sm:text-md">
          Cadis Allows You To Communicate and Interact with Your Files and
          Document. Simply Upload Your PDF File and Start Talking To Your
          Documents
        </p>
        <Link href="/dashboard" target="_blank">
          Get Started
        </Link>
      </MaxWidthWrapper>
    </div>
  );
}
