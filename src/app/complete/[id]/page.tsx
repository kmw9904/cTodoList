"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Page() {
  // 모바일인지 컴퓨터인지 확인하기
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
  }, []);

  // 모바일에서 실제 사진 찍어서 업로드
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleMobilePhoto = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const previewURL = URL.createObjectURL(file);
      setImagePreview(previewURL);
    }
  };

  return (
    <div className="px-16 py-4 space-y-4 text-center">
      <div>
        {isMobile ? (
          <>
            <input
              type="file"
              accept="image/*"
              capture="environment"
              onChange={handleMobilePhoto}
              className="hidden"
              id="cameraInput"
            />
            <label htmlFor="cameraInput" className="btn cursor-pointer">
              📷 사진 찍기
            </label>

            {imagePreview && (
              <Image
                src={imagePreview}
                alt="업로드 미리보기"
                className="mx-auto w-64 h-auto rounded-xl shadow"
              />
            )}
          </>
        ) : (
          <button className="btn">🖥️ 화면 캡처하기</button>
        )}
      </div>
      <form action="" className="flex flex-col px-16 py-6 gap-4 items-center">
        <label htmlFor="">Todo의 후기를 남겨보아요!</label>
        <textarea
          name="feedback"
          id="feedback"
          placeholder="todo는 어땠나요?"
          className="border p-2 rounded resize-none w-xl max-x-md"
        ></textarea>
        <button className="px-4 py-1.5 mt-2 bg-green-500 text-white p-1 rounded-xl">
          기록 완료 ✅
        </button>
      </form>
      <button></button>
    </div>
  );
}
