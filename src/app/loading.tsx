"use client";

export default function Loading() {
  const skeletons = Array.from({ length: 10 });

  return (
    <div className="p-4">
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {skeletons.map((_, i) => (
          <div key={i} className="bg-white rounded-2xl shadow-sm overflow-hidden animate-pulse">
            
            <div className="w-full h-56 bg-gray-200"></div>

            <div className="p-4 space-y-3">
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2"></div>

              <div className="h-3 bg-gray-200 rounded w-1/3"></div>

              <div className="flex justify-between mt-3">
                <div className="h-5 bg-gray-200 rounded w-1/4"></div>
                <div className="h-5 bg-gray-200 rounded w-1/6"></div>
              </div>

              <div className="h-10 bg-gray-200 rounded mt-4"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}