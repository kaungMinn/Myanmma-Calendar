import { useQuery } from "@tanstack/react-query";

import { getPublicHolidays } from "./mm-calendar.api";

const mmCalendarQueryKeys = {
  useMMCalendarPublicHolidays: "use-mm-calendar-public-holidays",
};

export function useMMCalendarPublicHolidays(year: string | number) {
  return useQuery({
    queryKey: [mmCalendarQueryKeys.useMMCalendarPublicHolidays, year],
    queryFn: () => getPublicHolidays(year),
  });
}
