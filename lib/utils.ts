import { Entry } from './constants';

export const getCurrentMonth = () => {
  const date = new Date();
  const month = date.getMonth();
  return month;
};
const monthNames = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sept',
  'Oct',
  'Nov',
  'Dec',
];

export const getCurrentMonthName = (month: number) => {
  return `${monthNames[month]}`;
};

export const getCurrentYear = () => {
  const date = new Date();
  return date.getFullYear();
};

export const formatDateToDayName = (date: Date): string => {
  const dayNames = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  const dayName = dayNames[date.getDay()].toUpperCase(); // Get the day name (e.g., "Monday")
  const dayNumber = date.getDate(); // Get the day number (e.g., 28)
  const monthName = monthNames[date.getMonth()].toUpperCase(); // Get the month name (e.g., "February")

  return `${dayName}, ${dayNumber} ${monthName}`;
};

export const stringToDate = (dateString: string): Date => {
  const date = new Date(dateString);
  if (isNaN(date.getTime())) {
    throw new Error('Invalid date string');
  }
  return date;
};

export const getTimeFromDate = (date: Date): string => {
  // Check if the parsed date is valid
  if (isNaN(date.getTime())) {
    throw new Error('Invalid date provided');
  }
  const hours = date.getHours(); // Get hours (0-23)
  const minutes = date.getMinutes(); // Get minutes (0-59)

  const ampm = hours >= 12 ? 'PM' : 'AM'; // Determine AM/PM

  // Convert hour to 12-hour format
  // // Format time as "HH:mm:ss.sss"
  return `${hours.toString().padStart(2, '0')}:${minutes
    .toString()
    .padStart(2, '0')} ${ampm}`;
};

export const sortEntriesByDate = (
  entries: Entry[],
  ascending: boolean = true
): Entry[] => {
  return entries.sort((a, b) => {
    const dateA = new Date(a.date); // Convert to Date object
    const dateB = new Date(b.date); // Convert to Date object

    // Return sorted order
    if (ascending) {
      return dateA.getTime() - dateB.getTime(); // Ascending order (oldest to newest)
    } else {
      return dateB.getTime() - dateA.getTime(); // Descending order (newest to oldest)
    }
  });
};
