import { ModeToggle } from "@/components/ui/themeToggle";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function Home() {
  return (
    <main>

<nav className="w-full mx-auto  border-b dark:border-gray-900 2xl:max-w-7xl  ">
        <div className="relative flex flex-col w-full p-3 mx-auto  md:items-center md:justify-between md:flex-row md:px-6 lg:px-8  ">
          <div className="flex flex-row items-center justify-between lg:justify-start">
            <a className=" tracking-tight text-black uppercase focus:outline-none focus:ring lg:text-2xl text-xl font-semibold dark:text-white" href="/">
              <span className="lg:text-lg uppecase focus:ring-0">
                Form 22
              </span>
            </a>
            <div className="items-center md:hidden flex gap-3">

              <button className=" text-gray-400 hover:text-black focus:outline-none focus:text-black ">
                <svg className="w-6 h-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path className="inline-flex" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                  <path className="hidden" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>

              </button>
              <div className="inline-flex items-center gap-3">
                <ModeToggle />
                <UserButton afterSignOutUrl="/" />


              </div>
            </div>

          </div>
          <nav className="flex-col items-center flex-grow hidden md:pb-0 md:flex md:justify-end md:flex-row " >

            <a className="px-2 py-2 text-sm rounded-xl text-gray-500 lg:px-6 md:px-3 hover:text-blue-400 lg:ml-auto hover:bg-gray-50 focus:ring-1 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-blue-950 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-700 duration-200 " href="#">
              Features
            </a>
            <a className="px-2 py-2 text-sm rounded-xl text-gray-500 lg:px-6 md:px-3 hover:text-blue-400 hover:bg-gray-50 focus:ring-1 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-red-950 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-700 duration-200" href="#">
              Pricing
            </a>
            <a className="px-2 py-2 text-sm rounded-xl text-gray-500 lg:px-6 md:px-3 hover:text-blue-400  hover:bg-gray-50 focus:ring-1 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-purple-950 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-700 duration-200" href="#">
              Contact Us
            </a>

            <div className="inline-flex items-center gap-3 lg:ml-auto">
              <ModeToggle />
              <UserButton afterSignOutUrl="/" />
            </div>
            
          </nav>
        </div>
      </nav>

      {/* <!-- Hero --> */}
      <div className="relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/component/squared-bg-element.svg')] before:bg-no-repeat before:bg-top before:w-full before:h-full before:-z-[1] before:transform before:-translate-x-1/2 dark:before:bg-[url('https://preline.co/assets/svg/component/squared-bg-element-dark.svg')]">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
          {/* <!-- Announcement Banner --> */}
          <div className="flex justify-center">
            <a className="inline-flex items-center gap-x-2 bg-white border border-gray-200 text-xs text-gray-600 p-2 px-3 rounded-full transition hover:border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:hover:border-gray-600 dark:text-gray-400" href="#">
              Explore the Capital Product
              <span className="flex items-center gap-x-1">
                <span className="border-s border-gray-200 text-blue-600 ps-2 dark:text-blue-500">Explore</span>
                <svg className="flex-shrink-0 w-4 h-4 text-blue-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
              </span>
            </a>
          </div>
          {/* <!-- End Announcement Banner --> */}

          {/* <!-- Title --> */}
          <div className="mt-5 max-w-xl text-center mx-auto">
            <h1 className="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-gray-200">
              Logged in
            </h1>
          </div>
          {/* <!-- End Title --> */}

          <div className="mt-5 max-w-3xl text-center mx-auto">
            <p className="text-lg text-gray-600 dark:text-gray-400">Logged in</p>
          </div>

          {/* <!-- Buttons --> */}
          <div className="mt-8 gap-3 flex justify-center items-center">
            

            <Link className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white py-3 px-4 dark:focus:ring-offset-gray-800" href="/home">
              <svg className="flex-shrink-0 w-4.5 h-4.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
              </svg>
              Continue with Github
            </Link>
          </div>

          {/* <!-- End Buttons --> */}
        </div>
      </div>
      {/* <!-- End Hero --> */}
    </main>
  )
}
