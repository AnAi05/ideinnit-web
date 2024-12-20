import * as React from "react"

export default function CTA() {
  return (
    <div className="bg-white">
      <div className="max-w-screen-xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <h2 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
          Ready to dive in?
          <br />
          Join the team today!
        </h2>
        <div className="mt-8 flex justify-center">
          <div className="inline-flex rounded-md shadow">
            <a
              href="https://forms.gle/36uwAJyANk7sx8yt9"
              target="_blank"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-gray-600 hover:bg-gray-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
            >
              Apply Now
            </a>
          </div>
          <div className="ml-3 inline-flex">
            <a
              href="mailto:lajatm9@gmail.com"
              target="_blank"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-gray-700 bg-gray-100 hover:text-gray-600 hover:bg-gray-50 focus:outline-none focus:shadow-outline focus:border-gray-300 transition duration-150 ease-in-out"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
