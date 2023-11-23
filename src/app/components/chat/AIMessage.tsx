import Image from "next/image";
import React from "react";

// Sent by the ai
export default function AIMessage(props: any) {
  return (
    <div className="w-full flex flex-start overflow-y-auto flex-col-reverse">
      <div className="flex items-end gap-2 w-1/2">
        <Image
          src="./images/profile.svg"
          alt="Profile"
          width={30}
          height={30}
        />
        <div className="mt-3 w-full bg-[#1E2025] p-2 rounded-t-xl rounded-tr-xl rounded-br-xl">
          <p className=" text-sm text-white">{props.message}</p>
        </div>
      </div>
    </div>
  );
}
