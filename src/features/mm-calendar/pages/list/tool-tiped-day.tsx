import type { DayProps } from "react-day-picker";

import { format } from "date-fns"; // Standard in Shadcn projects

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

type PropsType = {
  // react-day-picker v9 uses 'day' prop containing the date info
  day: DayProps;
  holidays: Array<{
    date: string;
    name: string; // Adjusted to match your JSON structure from earlier
    local_name?: string;
  }>;
};

function ToolTippedDay({ day, holidays }: PropsType) {
  const { date } = day.day;

  // Safer date comparison: format to 'yyyy-MM-dd' to match your JSON keys
  const dateString = format(date, "yyyy-MM-dd");
  const holiday = holidays.find(h => h.date === dateString);

  const dayContent = (
    <td className="relative">
      <div
        className={cn(
          "relative flex h-8 w-8 items-center justify-center p-0 font-normal transition-colors rounded-md",
          holiday
            ? "bg-amber-500 text-white hover:bg-amber-600 cursor-help shadow-sm font-bold"
            : "hover:bg-accent hover:text-accent-foreground",
        )}
      >
        {date.getDate()}
      </div>
    </td>
  );

  // Only wrap in Tooltip if it's a holiday
  if (!holiday) {
    return dayContent;
  }

  return (
    <TooltipProvider>
      <Tooltip delayDuration={200}>
        <TooltipTrigger asChild>
          {dayContent}
        </TooltipTrigger>
        <TooltipContent side="top" className="max-w-50 text-center">
          <div className="space-y-1">
            <p className="font-bold">{holiday.name}</p>
            {holiday.local_name && (
              <p className="text-xs opacity-80 italic">{holiday.local_name}</p>
            )}
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export default ToolTippedDay;
