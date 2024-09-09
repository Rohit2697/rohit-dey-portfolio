export const convertTanure = (start: Date, end: (Date | string)): string => {
  let endDate = end
  if (typeof endDate === 'string') endDate = new Date()
  let years: number = endDate.getFullYear() - start.getFullYear();
  let months: number = endDate.getMonth() - start.getMonth();
  if (months < 0) {
    years -= 1;
    months += 12;
  }

  const yearStr: string = years > 1 ? `${years} years` : years === 1 ? `${years} year` : '';
  const monthStr: string = months > 1 ? `${months} months` : months === 1 ? `${months} month` : '';
  return [yearStr, monthStr].filter(Boolean).join(' and ');

}



