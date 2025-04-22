import Image from "next/image";

export default function TodoStory() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-[60px] h-[60px] relative transition transform hover:scale-110">
        <Image
          src="/커플프로필.jpg"
          alt="김명원"
          fill
          className="rounded-full object-cover border-3 border-green-400"
        />
      </div>
      <span className="text-sm mt-2 text-gray-700">김명원</span>
    </div>
  );
}
