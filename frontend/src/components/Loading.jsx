import React from "react";

const RightPanelSkeleton = () => {
  return (
    <div className="hidden lg:block w-[350px] p-4 text-white">
      <div className="mb-4">
        <div className="bg-gray-900 w-full h-10 rounded-full animate-pulse" />
      </div>

      <div className="bg-gray-900 rounded-xl p-4 mb-4">
        <div className="h-6 w-32 bg-gray-700 rounded mb-3 animate-pulse" />
        {[...Array(2)].map((_, i) => (
          <div key={i} className="mb-4">
            <div className="h-4 w-24 bg-gray-700 rounded mb-2 animate-pulse" />
            <div className="h-5 w-48 bg-gray-600 rounded animate-pulse" />
          </div>
        ))}
      </div>

      <div className="bg-gray-900 rounded-xl p-4 ">
        <div className="w-32 h-6 bg-gray-700 rounded mb-3 animate-pulse"/>
        {[...Array(2)].map((_, id)=>(
            <div key={id}>
                <div className="flex items-center gap-3 animate-pulse">
                <div className="h-10 w-10 bg-gray-600 rounded-full mb-2 animate-pulse"/>
                <div>
                    <div className="h-3 w-24 bg-gray-700 rounded-2xl mb-2 animate-pulse"/>
                    <div className="h-3 w-24 bg-gray-800 rounded-2xl animate-pulse"/>
                </div>
            <div className="w-20 h-8 bg-gray-600 rounded-full animate-pulse"/>
                </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default RightPanelSkeleton;
