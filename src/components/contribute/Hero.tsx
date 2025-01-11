import * as React from "react"

export default function Hero() {
  return (
    <div>
      <div className="relative shadow-xl">
        <div className="absolute inset-0">
          <img
            className="h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100"
            alt="People working on laptops"
          />
          <div
            className="absolute inset-0 bg-indigo-800"
            style={{ mixBlendMode: "multiply" }}
          />
        </div>
        <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
          <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            <span className="block text-indigo-100">Supercharge Your</span>
            <span className="block text-white">
              Open Source Experience
            </span>
          </h1>
          <p className="mt-6 max-w-lg mx-auto text-center text-xl text-indigo-200 sm:max-w-3xl">
            Get access to{" "}
            <span className="font-medium text-white">
              real-life problems, unique frameworks and experienced mentors
            </span>{" "}
            tailored for problem-solvers and computer science enthusiasts
          </p>
          <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
            <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
              <a
                href="#how-to-join"
                className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-700 bg-white hover:bg-indigo-50 sm:px-8"
              >
                Join Now
              </a>
              <a
                href="mailto:lajatm9@gmail.com"
                target="_blank"
                className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-500 bg-opacity-60 hover:bg-opacity-70 sm:px-8"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div className="relative bg-white overflow-hidden">
    //   <div className="max-w-screen-xl mx-auto">
    //     <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
    //       <svg className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none">
    //         <polygon points="50,0 100,0 50,100 0,100" />
    //       </svg>
    //
    //       <main className="pt-10 mx-auto max-w-screen-xl px-4 sm:pt-12 sm:px-6 md:pt-16 lg:pt-18 lg:px-8 xl:pt-24">
    //         <div className="sm:text-center lg:text-left">
    //           <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
    //             Competitive Programming<br/><span className="text-gray-600">Clubs</span>
    //           </h2>
    //           <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:text-xl lg:mx-0">
    //             Get access to curriculum, problemsets, and contests tailored for school clubs, created by past USACO Finalists.
    //           </p>
    //           <p className="mt-2 text-base text-gray-500 sm:mt-3 sm:text-lg sm:max-w-xl sm:mx-auto md:text-xl lg:mx-0">
    //             You do <i>not</i> need to be a Competitive Programming club to apply. Computer Science clubs are eligible too!
    //           </p>
    //           <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
    //             <div className="rounded-md shadow">
    //               <a href="#how-to-join" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-gray-600 hover:bg-gray-500 focus:outline-none focus:border-gray-700 focus:shadow-outline-gray transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
    //                 Join Now
    //               </a>
    //             </div>
    //             <div className="mt-3 sm:mt-0 sm:ml-3">
    //               <a href="mailto:lajatm9@gmail.com" target="_blank" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-gray-700 bg-gray-100 hover:text-gray-600 hover:bg-gray-50 focus:outline-none focus:shadow-outline-gray focus:border-gray-300 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
    //                 Contact Us
    //               </a>
    //             </div>
    //           </div>
    //         </div>
    //       </main>
    //     </div>
    //   </div>
    //   <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
    //     <Img className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" fluid={heroImg} alt="" />
    //   </div>
    // </div>
  )
}
