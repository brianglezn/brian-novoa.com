export function calculateDuration(startDate: string, endDate: string): string {
  const start = new Date(startDate);
  const end =
    endDate.toLowerCase() === "actualidad" ? new Date() : new Date(endDate);
  const diffInMonths =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth());
  const years = Math.floor(diffInMonths / 12);
  const months = diffInMonths % 12;
  return `${years > 0 ? `${years} ${years > 1 ? "años" : "año"}` : ""} ${
    months > 0 ? `${months} ${months > 1 ? "meses" : "mes"}` : ""
  }`.trim();
}
