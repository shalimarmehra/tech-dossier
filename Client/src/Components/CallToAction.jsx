import { Button } from "flowbite-react";

export default function CallToAction() {
  return (
    // For YouTube Subscription
    <div class="w-full items-center lg:px-24 max-w-7xl md:px-12 mx-auto px-8 py-12 bg-blue-100 dark:bg-blue-900 rounded-xl">
      <div class="relative items-center">
        <div class="w-full justify-between lg:inline-flex lg:items-center">
          <div class="max-w-xl">
            <span class="text-sm text-red-500 font-semibold uppercase tracking-widest">
              Description
            </span>
            <p class="text-black font-extrabold mt-8 text-4xl max-sm:text-3xl tracking-tight dark:text-white">
              Subscribe to my YouTube Channel
              <span class="lg:block max-sm:block">Shalimar Mehra.</span>
            </p>
          </div>
          <div class="flex flex-col lg:ml-auto mt-12 sm:flex-row">
            <a
              class="w-full items-center inline-flex focus:outline-none font-medium justify-center px-6 py-3 rounded-xl text-center focus-visible:outline-black lg:w-auto bg-red-700 focus-visible:ring-black hover:bg-blue-100 hover:text-red-700 text-white transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300"
              href="https://www.youtube.com/@shalimarmehra?sub_confirmation=1"
              target="_blank"
            >
              Subscribe &nbsp;&nbsp;
              <span class="font-bold text-2xl">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
