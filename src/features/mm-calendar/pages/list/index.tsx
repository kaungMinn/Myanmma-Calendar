import { CalendarDays, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { useForm, useWatch } from "react-hook-form";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button"; // Assuming you have a button component
import { Calendar } from "@/components/ui/calendar";
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import DataLayout from "@/layouts/data-layout";
import { cn } from "@/lib/utils";

import type { MMCalendarFilterFormTypes } from "../../forms/hookform";

import { MMCalendarSkeleton } from "../../components/mm-calendar-skeleton";
import { MMCalendarYearlyFormField } from "../../components/mm-calendar-yearly-form-field";
import { mmCalendarFilterFormDefaultValues } from "../../forms/hookform";
import { useMMCalendarPublicHolidays } from "../../mm-calendar.hooks";
import { marketMonthsMaker } from "../../mm-calendar.utils";
import ToolTippedDay from "./tool-tiped-day";

export const MM_CALENDAR_LIST_BREADCRUMBS = [
  {
    name: "MM Calendar",
    url: "/mm-calendar",
  },
];

function MMCalendarList() {
  const form = useForm<MMCalendarFilterFormTypes>({
    defaultValues: mmCalendarFilterFormDefaultValues,
  });

  const selected_year = useWatch({
    control: form.control,
    name: "year",
  });

  // --- Pagination State ---
  const [currentPage, setCurrentPage] = useState(0); // 0: Jan-Apr, 1: May-Aug, 2: Sep-Dec
  const monthsPerPage = 4;

  const mmCalendarPublicHolidaysQuery = useMMCalendarPublicHolidays(selected_year);

  // Reset to first page if the year changes
  useEffect(() => {
    setCurrentPage(0);
  }, [selected_year]);

  const showMonths = useMemo(() => {
    if (!mmCalendarPublicHolidaysQuery?.data) {
      return [];
    }

    // 1. Get the full array [0...11]
    const allMonths = marketMonthsMaker();

    // 2. Apply the SLICE method
    const startIndex = currentPage * monthsPerPage;
    const currentMonths = allMonths.slice(startIndex, startIndex + monthsPerPage);
    const holidays = mmCalendarPublicHolidaysQuery?.data?.holidays || [];

    return (
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-6">
        {
          currentMonths.map((month) => {
            return (
              <Calendar
                mode="single"
                key={`${selected_year}-${month}`}
                defaultMonth={new Date(Number(selected_year), month)}
                month={new Date(Number(selected_year), month)}
                hideNavigation
                className={cn(
                  "border px-2 rounded-lg shadow-xs",
                  "bg-background group/calendar p-3 [--cell-size:--spacing(8)] in-data-[slot=card-content]:bg-transparent in-data-[slot=popover-content]:bg-transparent",
                  String.raw`rtl:**:[.rdp-button_next>svg]:rotate-180`,
                  String.raw`rtl:**:[.rdp-button_previous>svg]:rotate-180`,
                )}
                components={{
                  Day: (day) => {
                    return <ToolTippedDay day={day} holidays={holidays} />;
                  },
                }}
              />
            );
          })
        }
      </div>
    );
  }, [selected_year, mmCalendarPublicHolidaysQuery.data, currentPage]);

  return (
    <DataLayout breadCrumbs={MM_CALENDAR_LIST_BREADCRUMBS} title="MM Calendar">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Months</CardTitle>
              <CardDescription className="flex items-center gap-2 mt-1">
                <Badge variant="default" className="bg-amber-500 hover:bg-amber-600 text-white">
                  <CalendarDays className="size-4 mr-1" />
                  Holiday
                </Badge>
              </CardDescription>
            </div>

            <CardAction>
              <Form {...form}>
                <form>
                  <MMCalendarYearlyFormField form={form} name="year" label="" />
                </form>
              </Form>
            </CardAction>
          </div>
        </CardHeader>

        <CardContent className="space-y-6 flex flex-col justify-between">
          {mmCalendarPublicHolidaysQuery.isLoading
            ? (
                <MMCalendarSkeleton />
              )
            : (
                <>
                  {showMonths}

                  {/* --- Custom Pagination Controls --- */}
                  <div className="flex items-center justify-between pt-4">
                    <p className="text-sm text-muted-foreground">
                      Page
                      {" "}
                      {currentPage + 1}
                      {" "}
                      of 3
                    </p>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setCurrentPage(p => Math.max(0, p - 1))}
                        disabled={currentPage === 0}
                      >
                        <ChevronLeft className="size-4 mr-1" />
                        Prev
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setCurrentPage(p => Math.min(2, p + 1))}
                        disabled={currentPage === 2}
                      >
                        Next
                        <ChevronRight className="size-4 ml-1" />
                      </Button>
                    </div>
                  </div>
                </>
              )}
        </CardContent>
      </Card>
    </DataLayout>
  );
}

export default MMCalendarList;
