import React from "react";

const LoadingProductCard = () => {
  return (
    <div className="bg-white rounded-md animate-pulse shadow ">
      <div className="p-3">
        <div className="h-[250px] p-2 text-center w-full bg-slate-200 rounded-sm"></div>
        <div className="h-8 w-full bg-slate-200 my-3 rounded-sm"></div>
        <div className="pl-4 pb-1">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-[50%] bg-slate-200"></div>
            <div className="h-3 w-full bg-slate-200 my-3 rounded-sm"></div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-[50%] bg-slate-200"></div>
            <div className="h-3 w-full bg-slate-200 my-3 rounded-sm"></div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-[50%] bg-slate-200"></div>
            <div className="h-3 w-full bg-slate-200 my-3 rounded-sm"></div>
          </div>
        </div>
        <span className="block w-full h-[1px] bg-slate-200 my-5"></span>
        <div className="pb-2 ">
          <div className="h-8 w-full bg-slate-200 my-3 rounded-sm"></div>
          <div className="h-8 w-full bg-slate-200 my-3 rounded-sm"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingProductCard;
