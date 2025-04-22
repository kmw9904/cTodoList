import Image from "next/image";
import { Dongle } from "next/font/google";

const dongle = Dongle({ weight: "400", preload: false });

export default function Sidebar() {
  return (
    <div className={`${dongle.className} flex flex-col items-center space-y-4`}>
      <Image
        src="/커플프로필.jpg"
        alt="프로필"
        width={100}
        height={100}
        className="rounded-full"
      />
      <h2 className="text-2xl font-semibold">김명원</h2>

      <div className="">💑 시작일: 2023.09.25</div>

      <div className="">서로 한 todo의 카운트 : 2</div>
    </div>
  );
}
