import { Loader, Sprout, Wheat } from "lucide-react";

function AgriculturalLoading() {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className="flex items-center gap-3">
        <Sprout className="text-green-600 animate-pulse" size={32} />
        <Loader className="animate-spin text-green-700" size={24} />
        <Wheat className="text-yellow-600 animate-pulse" size={32} />
      </div>
      <div className="flex items-center gap-2 text-green-800 font-medium">
        <span>H</span>
        <span>T</span>
        <span>W</span>
        <span>E</span>
        <span>T</span>
        <span>T</span>
        <span>O</span>
        <span>E</span>
      </div>
      {/* <div className="text-sm text-green-600 animate-pulse">
        Growing your agricultural data...
      </div> */}
    </div>
  );
}

export default AgriculturalLoading;
