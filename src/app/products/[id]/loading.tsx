"use client";

export default function Loading() {
  // Array للـ thumbnails
  const thumbnails = Array.from({ length: 4 });

  return (
    <div className="max-w-7xl mx-auto p-6 animate-pulse">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* --------- الصورة الرئيسية + thumbnails --------- */}
        <div>
          {/* الصورة الرئيسية */}
          <div className="w-full h-[500px] bg-gray-200 rounded-2xl shadow-md mb-4"></div>

          {/* thumbnails */}
          <div className="flex gap-3">
            {thumbnails.map((_, idx) => (
              <div
                key={idx}
                className="w-20 h-20 bg-gray-200 rounded-lg cursor-pointer"
              ></div>
            ))}
          </div>
        </div>

        {/* --------- التفاصيل --------- */}
        <div className="flex flex-col justify-start gap-4">

          {/* Title */}
          <div className="h-8 bg-gray-200 rounded w-3/4"></div>
          <div className="h-6 bg-gray-200 rounded w-1/2"></div>

          {/* Brand & Category */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
              <div className="h-4 bg-gray-200 rounded w-20"></div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
              <div className="h-4 bg-gray-200 rounded w-24"></div>
            </div>
          </div>

          {/* Rating + Sold + Quantity */}
          <div className="flex items-center gap-4 text-sm text-gray-700">
            <div className="h-4 bg-gray-200 rounded w-24"></div>
            <div className="h-4 bg-gray-200 rounded w-20"></div>
            <div className="h-4 bg-gray-200 rounded w-20"></div>
          </div>

          {/* السعر */}
          <div className="h-8 bg-gray-200 rounded w-32 mt-2"></div>

          {/* الوصف */}
          <div className="space-y-2">
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          </div>

          {/* الأزرار */}
          <div className="flex gap-3 mt-4">
            <div className="h-10 bg-gray-200 rounded w-32"></div>
            <div className="h-10 bg-gray-200 rounded w-28"></div>
          </div>

        </div>
      </div>
    </div>
  );
}