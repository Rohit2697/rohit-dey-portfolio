export function createDateFromString(dateString: string) {

  const [day, month, year] = dateString.split('-').map(Number);

  // Create a new Date object in the format YYYY-MM-DD
  const formattedDate = new Date(year, month, day); // month is zero-based in Date

  return formattedDate
}