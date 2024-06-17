import React from "react";

const Shimmer = () => {
  const shimmerItems = Array.from({ length: 20 }, (_, index) => index + 1);

  return (
    <div className="flex flex-wrap justify-center">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {shimmerItems.map((item) => (
          <div key={item} className="p-4 bg-gray-200 animate-shimmer rounded-md shadow-md">
            <div className="h-24 bg-shimmer bg-[length:200%_100%] rounded-md"></div>
            <div className="mt-4 space-y-2">
              <div className="w-80 h-10 bg-shimmer bg-[length:200%_100%] rounded-md"></div>
              <div className="w-80 h-10 bg-shimmer bg-[length:200%_100%] rounded-md"></div>
              <div className="w-80 h-10 bg-shimmer bg-[length:200%_100%] rounded-md"></div>
              <div className="w-80 h-10 bg-shimmer bg-[length:200%_100%] rounded-md"></div>
              <div className="w-80 h-10 bg-shimmer bg-[length:200%_100%] rounded-md"></div>
            </div>
          </div>
        ))}
      </div>    
    </div>
  );
};

export const ResMenuShimmer = () => {
  return (
    <>
      <div className="p-4 bg-gray-100">
        <div className="flex justify-between p-4 bg-white shadow-md rounded-md animate-shimmer">
          <div className="flex-1 space-y-2">
            <div className="w-96 h-20 bg-shimmer bg-[length:200%_100%] rounded-md"></div>
            <div className="w-96 h-20 bg-shimmer bg-[length:200%_100%] rounded-md"></div>
            <div className="w-96 h-20 bg-shimmer bg-[length:200%_100%] rounded-md"></div>
            <br />
            <div className="w-96 h-20 bg-shimmer bg-[length:200%_100%] rounded-md"></div>
            <div className="w-96 h-20 bg-shimmer bg-[length:200%_100%] rounded-md"></div>
          </div>
          <div className="w-96 h-32 bg-shimmer bg-[length:200%_100%] rounded-md"></div>
        </div>
        <div className="mt-4 p-4 bg-white shadow-md rounded-md animate-shimmer">
          <div className="w-2/5 h-2 bg-shimmer bg-[length:200%_100%] rounded-md"></div>
        </div>
        <div className="mt-4 p-4 bg-white shadow-md rounded-md animate-shimmer">
          <div className="w-1/2 h-2 bg-shimmer bg-[length:200%_100%] rounded-md"></div>
        </div>
        <div className="mt-4 border-b-2 border-gray-300"></div>
        <div className="mt-4">
          <div className="mb-2 p-4 bg-white shadow-md rounded-md animate-shimmer">
            <div className="w-full h-6 bg-shimmer bg-[length:200%_100%] rounded-md"></div>
          </div>
          {Array(10).fill("").map((_, i) => (
            <div className="flex justify-between p-4 bg-white shadow-md rounded-md animate-shimmer" key={"res-menu-list" + i}>
              <div className="flex-1 space-y-2">
                <div className="w-5 h-2 bg-shimmer bg-[length:200%_100%] rounded-md"></div>
                <div className="w-3/4 h-5 bg-shimmer bg-[length:200%_100%] rounded-md"></div>
                <div className="w-1/4 h-2 bg-shimmer bg-[length:200%_100%] rounded-md"></div>
                <span className="block w-full h-12 mt-4 bg-shimmer bg-[length:200%_100%] rounded-md"></span>
              </div>
              <div className="w-96 h-24 bg-shimmer bg-[length:200%_100%] rounded-md"></div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Shimmer;
