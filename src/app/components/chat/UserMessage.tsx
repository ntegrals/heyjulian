import React from "react";

// Sent by the user
export default function UserMessage(props: any) {
  return (
    <div className="w-full flex justify-end mt-1">
      <div className="w-1/2 ">
        <div className="flex items-center justify-end"></div>
        <div className="mt-2 w-full bg-[#1E2025] p-2 rounded-bl-xl rounded-t-xl">
          <p className=" text-sm text-white">{props.message}</p>
        </div>
      </div>
    </div>
  );
}
