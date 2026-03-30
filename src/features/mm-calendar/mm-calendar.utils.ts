export function marketMonthsMaker() {
  // Return all months 0-11 (Jan-Dec)
  const months = Array.from({ length: 12 }, (_v, k) => k);
  return months;
}
