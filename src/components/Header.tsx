import * as React from "react"
import Link from "next/link"
import { useState } from "react"
import Logo from "./Logo"
import { useRouter } from "next/router"

export default function Header({
  noBanner,
  dark = false,
}: {
  noBanner?: boolean
  dark?: boolean
}) {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  const internalLinks = [
    {
      label: "Home",
      url: "/",
    },
    {
      label: "Contribute",
      url: "/contribute",
    },
    {
      label: "Contests",
      url: "/contests",
    },
    
  ]

  const linkClasses =
    "inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 transition duration-150 ease-in-out " +
    (dark
      ? "text-gray-400 hover:text-gray-200 hover:border-transparent focus:outline-none focus:text-gray-200 focus:border-gray-600"
      : "text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300")
  const activeLinkClasses =
    "inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 focus:outline-none transition duration-150 ease-in-out " +
    (dark
      ? "border-transparent text-gray-100 focus:border-gray-600"
      : "border-gray-500 text-gray-900 focus:border-gray-700")

  const blockLinkClasses =
    "block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium focus:outline-none transition duration-150 ease-in-out " +
    (!dark
      ? "text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300"
      : "text-gray-400 hover:text-gray-200 hover:bg-gray-700 hover:border-gray-500 focus:text-gray-200 focus:bg-gray-700 focus:border-gray-300")
  const activeBlockLinkClasses =
    "block pl-3 pr-4 py-2 border-l-4 text-base font-medium focus:outline-none transition duration-150 ease-in-out " +
    (!dark
      ? "border-gray-500 text-gray-700 bg-gray-50 focus:text-gray-800 focus:bg-gray-100 focus:border-gray-700"
      : "border-gray-500 text-gray-100 bg-gray-800 focus:text-gray-50 focus:bg-gray-500 focus:border-gray-700")

  function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(" ")
  }

  return (
    <nav
      className={`${
        dark ? "bg-gray-900" : "bg-white"
      } shadow fixed inset-x-0 top-0 z-30`}
    >
      {!noBanner &&
       <div className="relative bg-indigo-700">
          <div className="max-w
          -screen-xl mx-auto py-3 px-3 sm:px-6 lg:px-8"> 
            <div className="pr-16 sm:text-center sm:px-16">
             <p className="font-medium text-white">
               {/* <span className="md:hidden">Join our IOI Livesolve & Q&A workshop <Link className="text-white font-bold underline" href="https://joincpi.org/workshops/ioi23">here</Link>!</span> */}
               <span className="hidden md:inline">
                Feel free to mail us or raise issues on our Github! 
               </span>
               <span className="block sm:ml-2 sm:inline-block">
                 <Link
                   href={"https://github.com/AnAi05/ideinnit-web/issues/new"}
                   className="text-white font-bold underline"
                 >
                   Raise issue here &rarr;
                 </Link>
               </span>
            
             </p>
           </div>
           {/* <div className="absolute inset-y-0 right-0 pt-1 pr-1 flex items-start sm:pt-1 sm:pr-2 sm:items-start">
             <button type="button" className="flex p-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500 transition ease-in-out duration-150" aria-label="Dismiss">
                ! Heroicon name: x ! 
               <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
               </svg>
             </button>
           </div> */}
         </div>
        </div>
      }
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link
              href="/"
              className="flex-shrink-0 flex items-center text-xl font-bold space-x-2">

              <div className="h-9 w-9">
                <Logo />
              </div>
              <span
                className={`font-bold text-xl ${dark ? "text-white" : ""}`}
              >
                IDE innit
              </span>

            </Link>
            <div className="hidden md:ml-8 md:flex space-x-8">
              <a
                href="https://ideinnit-ide.vercel.app"
                target="_blank"
                className={linkClasses}
              >
                IDE
                {/*<svg className="w-5 h-6 inline-block text-gray-400 ml-2" fill="none" stroke="currentColor"*/}
                {/*     style={{*/}
                {/*       paddingBottom:"0.125rem"*/}
                {/*     }}*/}
                {/*     viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">*/}
                {/*  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}*/}
                {/*        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>*/}
                {/*</svg>*/}
              </a>

              {internalLinks.map(link => (
                (<Link
                  href={link.url}
                  key={link.url}
                  className={
                    link.url === router.pathname
                      ? activeLinkClasses
                      : linkClasses
                  }>

                  {link.label}

                </Link>)
              ))}
            </div>
          </div>
          <div className="-mr-2 flex items-center md:hidden">
            {/* Mobile menu button */}
            <button
              className={
                "inline-flex items-center justify-center p-2 rounded-md focus:outline-none transition duration-150 ease-in-out " +
                (!dark
                  ? "text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:bg-gray-100 focus:text-gray-500"
                  : "text-gray-600 hover:text-gray-400 hover:bg-gray-800 focus:bg-gray-700 focus:text-gray-500")
              }
              aria-label="Main menu"
              aria-expanded="false"
              onClick={() => setIsOpen(!isOpen)}
            >
              {!isOpen && (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}

              {isOpen && (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <div className={(isOpen ? "block" : "hidden") + " md:hidden"}>
        <div className="pt-2 pb-3 space-y-1">
          <a
            href="https://ideinnit.tech/"
            target="_blank"
            className={blockLinkClasses}
          >
            IDE innit
          </a>

          {internalLinks.map(link => (
            (<Link
              href={link.url}
              key={link.url}
              className={
                link.url
              }>

              {link.label}

            </Link>)
          ))}
        </div>
      </div>
    </nav>
  );
}
