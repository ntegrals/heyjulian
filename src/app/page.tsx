import { ChevronRightIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative overflow-hidden bg-[#0D0E12] md:h-screen">
      <div className="mx-auto max-w-7xl px-6 pt-10 pb-24 sm:pb-32 lg:flex lg:items-center lg:justify-center">
        <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
          <div className="mt-24 sm:mt-32 lg:mt-16">
            <a href="#" className="inline-flex space-x-6">
              <span className="font-medium text-transparent text-sm bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                <span>Virtual Me</span>
              </span>
            </a>
          </div>
          <h1 className="mt-4 text-4xl font-light text-white sm:text-6xl">
            Hey, I'm Julian Schoen
          </h1>
          <h1 className=" text-4xl font-light text-[#7D7E82] sm:text-6xl">
            This is my virtual self
          </h1>
          <p className="mt-6 text-xl leading-8 text-[#7D7E82] max-w-md">
            I uploaded some of my memories, professional background and
            personality parameters.
          </p>

          <div className="mt-6">
            <Image
              src="/images/table.svg"
              alt="Line"
              width={550}
              height={100}
            />

            <div className="mt-10 flex items-center gap-x-6">
              <Link
                href="/chat"
                className="flex items-end rounded-3xl bg-[#21242B] px-4 py-3 text-sm text-white focus-visible:outline "
              >
                <div>Start Conversation</div>
                <ChevronRightIcon width={18} height={18} />
              </Link>
            </div>
          </div>
        </div>
        <div className="pt-[60px] rounded-lg">
          <img src="./images/me5.png" alt="Me" width={550} />
        </div>
      </div>
    </div>
  );
}
