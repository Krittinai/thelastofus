'use client'
import Popup from "@/components/ui/Popup";
import Popup2 from "@/components/ui/Popup2";
import Popup3 from "@/components/ui/popup3";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Popup3 />
      {/* <Popup2 /> */}
      {/* <Popup /> */}
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
     กำลังทำงาน
      </div>
    </>
  );
}
