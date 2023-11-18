import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bottom-0 flex sticky bg-white rounded-lg shadow dark:bg-gray-900 m-4">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <Link
              href="/"
              className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="h-8"
                alt="Flowbite Logo"
              />
              <span className="self-center text-2xl font-mono whitespace-nowrap dark:text-white">
                Tobe-Cadis
                <span className="text-purple-800 font-bold">PDF</span>
              </span>
            </Link>

            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <a
                  href="https://www.linkedin.com/in/emmanuel-alex-1107b21a9/"
                  className="hover:underline me-4 md:me-6"
                >
                  About
                </a>
              </li>

              <li>
                <a href="#" className="hover:underline me-4 md:me-6">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <a
              href="https://www.linkedin.com/in/emmanuel-alex-1107b21a9/"
              className="hover:underline"
            >
              Tobe - CadisPDF™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
