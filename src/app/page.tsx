import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";

export default function Home() {
  return (
    /* Navbar Styling (WidthWrapper) */
    <div>
      <MaxWidthWrapper className="mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center">
        <div className="mx-auto mb-4 max-w-fit flex justify-center items-center space-x-2 overflow-hidden rounded-full border bg-white border-gray-200 px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50">
          <p className="text-sm font-semibold text-gray-700">Cadis is Live</p>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
