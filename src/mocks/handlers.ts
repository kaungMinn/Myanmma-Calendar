import { delay, http, HttpResponse } from "msw";

// 💡 TIP: Download the JSONs from Tallyfy (2021-2026)
// and save them in src/data/holidays/
import holidays2021 from "../data/holidays/2021.json";
import holidays2022 from "../data/holidays/2022.json";
import holidays2023 from "../data/holidays/2023.json";
import holidays2024 from "../data/holidays/2024.json";
import holidays2025 from "../data/holidays/2025.json";
import holidays2026 from "../data/holidays/2026.json";

export const handlers = [
  // Intercept GET /api/v1/holidays/:year
  http.get("/api/v1/holidays/:year", async ({ params }) => {
    const { year } = params;

    // Add 800ms delay so the reviewer sees your loading skeletons/spinners
    await delay(800);

    if (year === "2021")
      return HttpResponse.json(holidays2021);
    if (year === "2022")
      return HttpResponse.json(holidays2022);
    if (year === "2023")
      return HttpResponse.json(holidays2023);
    if (year === "2024")
      return HttpResponse.json(holidays2024);
    if (year === "2025")
      return HttpResponse.json(holidays2025);
    if (year === "2026")
      return HttpResponse.json(holidays2026);

    // Default or Fallback
    return HttpResponse.json({ message: "Data not found" }, { status: 404 });
  }),
];
