export function getYearSlice<T extends { year: number }>(
  data: T[],
  year: number
): T[] {
  return data.filter(d => d.year <= year);
}
